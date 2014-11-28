using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using KendoUIMVC5.Models;

namespace KendoUIMVC5.Controllers
{
    public class HomeController : Controller
    {
        public static IList<Product> Products
        {
            get;
            set;
        }

        static HomeController()
        {
            var random = new Random();

            Products = Enumerable.Range(0, 20).Select(index => new Product
            {
                ProductID = index + 1,
                Order = index,
                ProductName = "Product " + index,
                UnitsInStock = random.Next(20, 200)
            }).ToList();
        }

        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }

        public ActionResult Read([DataSourceRequest] DataSourceRequest request)
        {
            return Json(Products.ToDataSourceResult(request));
        }

        public ActionResult Update([DataSourceRequest]DataSourceRequest request, [Bind(Prefix = "models")]IEnumerable<Product> products)
        {
            if (ModelState.IsValid)
            {
                foreach (var product in products)
                {
                    var dataItem = Products.Where(p => p.ProductID == product.ProductID).FirstOrDefault();

                    dataItem.Order = product.Order;
                    dataItem.ProductID = product.ProductID;
                    dataItem.ProductName = product.ProductName;
                    dataItem.UnitsInStock = product.UnitsInStock;
                }
            }

            // Return the updated entities as well as any validation errors.
            return Json(products.ToDataSourceResult(request, ModelState));
        }
    }
}
