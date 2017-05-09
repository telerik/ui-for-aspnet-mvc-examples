using System;
using System.IO;
using System.Web.Mvc;
using Telerik.Documents.SpreadsheetStreaming;
using Newtonsoft.Json;
using ExportHelpers;
using System.Collections.Generic;

namespace GridExcelSpreadProcessing.Controllers
{
    public class StreamController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult Export(string model, string data, string format, string title)
        {
            var modelObject = JsonConvert.DeserializeObject<IList<ColumnSettings>>(model);
            var dataObject = JsonConvert.DeserializeObject<dynamic>(data);

            SpreadDocumentFormat exportFormat = format == "CSV" ? SpreadDocumentFormat.Csv : SpreadDocumentFormat.Xlsx;
            using (MemoryStream stream = new MemoryStream())
            {
                using (IWorkbookExporter workbook = SpreadExporter.CreateWorkbookExporter(exportFormat, stream))
                {
                    using (IWorksheetExporter worksheet = workbook.CreateWorksheetExporter(title))
                    {
                        using (IRowExporter row = worksheet.CreateRowExporter())
                        {
                            for (int idx = 0; idx < modelObject.Count; idx++)
                            {
                                var modelCol = modelObject[idx];
                                string columnName = modelCol.Title ?? modelCol.Field;
                                using (ICellExporter cell = row.CreateCellExporter())
                                {
                                    cell.SetValue(columnName);
                                }
                            }
                        }
                        for (int rowIdx = 0; rowIdx < dataObject.Count; rowIdx++)
                        {
                            using (IRowExporter row = worksheet.CreateRowExporter())
                            {
                                for (int colIdx = 0; colIdx < modelObject.Count; colIdx++)
                                {
                                    using (ICellExporter cell = row.CreateCellExporter())
                                    {
                                        cell.SetValue(dataObject[rowIdx][modelObject[colIdx].Field].Value);
                                    }
                                }
                            }
                        }
                    }
                }
                Session[title] = stream.ToArray();
            }

            return Json(new { success = true }, JsonRequestBehavior.AllowGet);
        }

        public FileResult Download(string title, string format)
        {
            string mimeType = format == "CSV" ? "text/csv" : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
            if (Session[title] != null)
            {
                byte[] fileData = Session[title] as byte[];
                string fileName = string.Format("{0}.{1}", title, format.ToLowerInvariant());

                Session.Remove(title);

                Response.Buffer = true;
                Response.AddHeader("Content-Disposition", string.Format("attachment; filename={0}", fileName));
                return File(fileData, mimeType, fileName);
            }
            else
            {
                throw new Exception(string.Format("{0} not found", title));
            }
        }
    }
}
