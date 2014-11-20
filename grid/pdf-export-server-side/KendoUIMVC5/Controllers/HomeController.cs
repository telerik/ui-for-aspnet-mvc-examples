using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Kendo.Mvc.UI;
using KendoUIMVC5.Models;
using Kendo.Mvc.Extensions;
using System.Collections;
using System.IO;
using System.Text;
using iTextSharp.text;
using iTextSharp.text.pdf;

namespace KendoUIMVC5.Controllers
{
    public class HomeController : Controller
    {
        private NorhtwindEntities db = new NorhtwindEntities();

        public ActionResult Index()
        {
            ViewBag.Message = "Modify this template to kick-start your ASP.NET MVC application.";

            return View();
        }

        public ActionResult Read([DataSourceRequest] DataSourceRequest request)
        {
            return Json(db.Products.ToDataSourceResult(request));
        }

        public FileResult Export([DataSourceRequest]DataSourceRequest request)
        {
            IEnumerable products = db.Products.ToDataSourceResult(request).Data;

            // step 1: creation of a document-object
            var document = new Document(PageSize.A4, 10, 10, 10, 10);

            //step 2: we create a memory stream that listens to the document
            var output = new MemoryStream();
            PdfWriter.GetInstance(document, output);

            //step 3: we open the document
            document.Open();

            //step 4: we add content to the document
            var numOfColumns = 4;
            var dataTable = new PdfPTable(numOfColumns);

            dataTable.DefaultCell.Padding = 3;

            dataTable.DefaultCell.BorderWidth = 2;
            dataTable.DefaultCell.HorizontalAlignment = Element.ALIGN_CENTER;

            // Adding headers
            dataTable.AddCell("Product ID");
            dataTable.AddCell("Product Name");
            dataTable.AddCell("Unit Price");
            dataTable.AddCell("Quantity Per Unit");

            dataTable.HeaderRows = 1;
            dataTable.DefaultCell.BorderWidth = 1;

            foreach (Product prod in products)
            {
                dataTable.AddCell(prod.ProductID.ToString());
                dataTable.AddCell(prod.ProductName);
                dataTable.AddCell(prod.UnitPrice.ToString());
                dataTable.AddCell(prod.QuantityPerUnit);
            }

            // Add table to the document
            document.Add(dataTable);

            //This is important don't forget to close the document
            document.Close();

            // send the memory stream as File
            return File(output.ToArray(), "application/pdf", "Products.pdf");

        }

        public ActionResult About()
        {
            ViewBag.Message = "Your quintessential app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your quintessential contact page.";

            return View();
        }
    }
}
