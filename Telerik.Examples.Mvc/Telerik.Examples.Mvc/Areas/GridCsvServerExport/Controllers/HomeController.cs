using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridCsvServerExport.Models;

namespace Telerik.Examples.Mvc.Areas.GridCsvServerExport.Controllers
{
    public class HomeController : Controller
    {
        public static List<Product> products = new List<Product>();

        public ActionResult Index()
        {
            return View();
        }

        public HomeController()
        {
            products = Enumerable.Range(1, 100).Select(i => new Product
            {
                ProductID = i,
                ProductName = "ProductName" + i,
                UnitPrice = i * 10,
                QuantityPerUnit = i.ToString(),
            }).ToList();
        }

        public ActionResult Read([DataSourceRequest] DataSourceRequest request)
        {
            var dsResult = products.ToDataSourceResult(request);
            return Json(dsResult);
        }

        public FileResult Export([DataSourceRequest] DataSourceRequest request)
        {
            // Export only the current page
            var data = products.ToDataSourceResult(request).Data;
            // Export all pages (uncomment next line)
            //var data = products;

            var output = new MemoryStream();
            var writer = new StreamWriter(output, Encoding.UTF8);

            writer.Write("ProductName,");
            writer.Write("UnitPrice,");
            writer.Write("QuantityPerUnit");
            writer.WriteLine();

            foreach (Product product in data)
            {
                writer.Write(product.ProductName);
                writer.Write(",");
                writer.Write("\"");
                writer.Write(product.UnitPrice);
                writer.Write("\"");
                writer.Write(",");
                writer.Write("\"");
                writer.Write(product.QuantityPerUnit);
                writer.Write("\"");
                writer.WriteLine();
            }

            writer.Flush();
            output.Position = 0;

            return File(output, "text/comma-separated-values", "Products.csv");
        }
    }
}