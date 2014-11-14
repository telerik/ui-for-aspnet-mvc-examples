using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KendoUIMVC5.Models;
using System.IO;
using NPOI.HSSF.UserModel;
using KendoUIMVC5.Utilities;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Spreadsheet;

namespace KendoUIMVC5.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Read([DataSourceRequest] DataSourceRequest request)
        {
            using (var northwind = new Models.SampleEntities())
            {
                return Json(northwind.Products.ToDataSourceResult(request));
            }
        }

        /// <summary>
        /// Serves excel via the NPOI library for the first Grid in the Index Page
        /// </summary>
        public FileResult ExportWithNPOI([DataSourceRequest]DataSourceRequest request)
        {
            using (var northwind = new Models.SampleEntities())
            {
                //Get the data representing the current grid state - page, sort and filter
                var products = northwind.Products.ToDataSourceResult(request).Data;

                //Create new Excel workbook
                var workbook = new HSSFWorkbook();

                //Create new Excel sheet
                var sheet = workbook.CreateSheet();

                //(Optional) set the width of the columns
                sheet.SetColumnWidth(0, 10 * 256);
                sheet.SetColumnWidth(1, 50 * 256);
                sheet.SetColumnWidth(2, 50 * 256);
                sheet.SetColumnWidth(3, 50 * 256);

                //Create a header row
                var headerRow = sheet.CreateRow(0);

                //Set the column names in the header row
                headerRow.CreateCell(0).SetCellValue("Product ID");
                headerRow.CreateCell(1).SetCellValue("Product Name");
                headerRow.CreateCell(2).SetCellValue("Unit Price");
                headerRow.CreateCell(3).SetCellValue("Quantity Per Unit");

                //(Optional) freeze the header row so it is not scrolled
                sheet.CreateFreezePane(0, 1, 0, 1);

                int rowNumber = 1;

                //Populate the sheet with values from the grid data
                foreach (Product product in products)
                {
                    //Create a new row
                    var row = sheet.CreateRow(rowNumber++);

                    //Set values for the cells
                    row.CreateCell(0).SetCellValue(product.ProductID);
                    row.CreateCell(1).SetCellValue(product.ProductName);
                    row.CreateCell(2).SetCellValue(product.UnitPrice.ToString());
                    row.CreateCell(3).SetCellValue(product.QuantityPerUnit.ToString());
                }

                //Write the workbook to a memory stream
                MemoryStream output = new MemoryStream();
                workbook.Write(output);

                //Return the result to the end user

                return File(output.ToArray(),   //The binary data of the XLS file
                    "application/vnd.ms-excel", //MIME type of Excel files
                    "GridExcelExport.xls");     //Suggested file name in the "Save as" dialog which will be displayed to the end user
            }
        }

             /// <summary>
        /// Serves excel via the OpenXML library for the second Grid in the Index Page
        /// </summary>
        public FileResult ExportWithOpenXML([DataSourceRequest]DataSourceRequest request)
        {
            using (var northwind = new SampleEntities())
            {
            //Get the data representing the current grid state - page, sort and filter
                var products = new List<Product>(northwind.Products.ToDataSourceResult(request).Data as IEnumerable<Product>);

                using (var stream = new MemoryStream())
                {
                    /* Create the worksheet. */

                    SpreadsheetDocument spreadsheet = Excel.CreateWorkbook(stream);
                    Excel.AddBasicStyles(spreadsheet);
                    Excel.AddAdditionalStyles(spreadsheet);
                    Excel.AddWorksheet(spreadsheet, "Products");
                    Worksheet worksheet = spreadsheet.WorkbookPart.WorksheetParts.First().Worksheet;

                    //create columns and set their widths

                    Excel.SetColumnHeadingValue(spreadsheet, worksheet, 1, "Product ID", false, false);
                    Excel.SetColumnWidth(worksheet, 1, 50);

                    Excel.SetColumnHeadingValue(spreadsheet, worksheet, 2, "Product Name", false, false);
                    Excel.SetColumnWidth(worksheet, 2, 50);

                    Excel.SetColumnHeadingValue(spreadsheet, worksheet, 3, "Unit Price", false, false);
                    Excel.SetColumnWidth(worksheet, 3, 50);

                    Excel.SetColumnHeadingValue(spreadsheet, worksheet, 4, "Quantity Per Unit", false, false);
                    Excel.SetColumnWidth(worksheet, 4, 50);


                    /* Add the data to the worksheet. */

                    // For each row of data...
                    for (int idx = 0; idx < products.Count; idx++)
                    {
                        // Set the field values in the spreadsheet for the current row.
                        Excel.SetCellValue(spreadsheet, worksheet, 1, (uint)idx + 2, products[idx].ProductID.ToString(), false, false);
                        Excel.SetCellValue(spreadsheet, worksheet, 2, (uint)idx + 2, products[idx].ProductName, false, false);
                        Excel.SetCellValue(spreadsheet, worksheet, 3, (uint)idx + 2, products[idx].UnitPrice.ToString(), false, false);
                        Excel.SetCellValue(spreadsheet, worksheet, 4, (uint)idx + 2, products[idx].QuantityPerUnit, false, false);
                    }

                    /* Save the worksheet and store it in Session using the spreadsheet title. */

                    worksheet.Save();
                    spreadsheet.Close();

                    return File(stream.ToArray(),   //The binary data of the XLS file
                    "application/vnd.ms-excel", //MIME type of Excel files
                    "GridExcelExport.xlsx");
                }
            }
        }
    }
}
