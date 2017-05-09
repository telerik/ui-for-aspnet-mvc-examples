using System;
using System.IO;
using System.Web.Mvc;
using Telerik.Windows.Documents.Spreadsheet.FormatProviders;
using Telerik.Windows.Documents.Spreadsheet.FormatProviders.OpenXml.Xlsx;
using Telerik.Windows.Documents.Spreadsheet.FormatProviders.TextBased.Csv;
using Telerik.Windows.Documents.Spreadsheet.Model;
using Newtonsoft.Json;
using ExportHelpers;
using System.Collections.Generic;

namespace GridExcelSpreadProcessing.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult Export(string model, string data, string format, string title)
        {
            Workbook workbook = new Workbook();
            workbook.History.IsEnabled = false;
            workbook.SuspendLayoutUpdate();

            workbook.Sheets.Add(SheetType.Worksheet);
            Worksheet worksheet = workbook.ActiveWorksheet;
            worksheet.Name = title;

            var modelObject = JsonConvert.DeserializeObject<IList<ColumnSettings>>(model);
            var dataObject = JsonConvert.DeserializeObject<dynamic>(data);
            var columnCount = modelObject.Count;

            for (int idx = 0; idx < columnCount; idx++)
            {
                var modelCol = modelObject[idx];
                string columnName = modelCol.Title ?? modelCol.Field;
                worksheet.Cells[0, idx].SetValue(columnName);
            }

            for (int rowIdx = 1; rowIdx < dataObject.Count; rowIdx++)
            {
                for (int colIdx = 0; colIdx < modelObject.Count; colIdx++)
                {
                    worksheet.Cells[rowIdx, colIdx].SetValue(dataObject[rowIdx - 1][modelObject[colIdx].Field].Value);
                }
            }

            if (format == "XLSX")
            {
                ColumnSelection columnSelection = worksheet.Columns[0, columnCount];
                columnSelection.AutoFitWidth();
            } 

            workbook.ResumeLayoutUpdate();

            IWorkbookFormatProvider formatProvider = null;
            if (format == "XLSX")
            {
                formatProvider = new XlsxFormatProvider();
            }
            else
            {
                formatProvider = new CsvFormatProvider();
            }

            using (MemoryStream output = new MemoryStream())
            {
                formatProvider.Export(workbook, output);
                Session[title] = output.ToArray();
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
