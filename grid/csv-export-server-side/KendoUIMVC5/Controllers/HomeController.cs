using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using KendoUIMVC5.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;

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
            using (var northwind = new NorhtwindEntities())
            {
                return Json(northwind.Products.ToDataSourceResult(request));
            }
        }

        public FileResult Export([DataSourceRequest]DataSourceRequest request)
        {
            using (var northwind = new NorhtwindEntities())
            {
                // Export only the current page
                var products = northwind.Products.ToDataSourceResult(request).Data;
                // Export all pages (uncomment next line)
                //var products = northwind.Products.ToList();

                var output = new MemoryStream();
                var writer = new StreamWriter(output, Encoding.UTF8);

                writer.Write("ProductName,");
                writer.Write("UnitPrice,");
                writer.Write("QuantityPerUnit");
                writer.WriteLine();

                foreach (Product product in products)
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
}
