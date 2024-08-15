using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridContextMenuDisabledItems.Models;

namespace Telerik.Examples.Mvc.Areas.GridContextMenuDisabledItems.Controllers
{
    public class HomeController : Controller
    {
        public static List<Product> products = new List<Product>();

        static HomeController()
        {
            products.Add(new Product()
            {
                ProductID = 1,
                ProductName = "Whiskey",
                UnitPrice = 50,
                UnitsInStock = 50,
                Discontinued = false
            });
            products.Add(new Product()
            {
                ProductID = 2,
                ProductName = "Wine",
                UnitPrice = 20,
                UnitsInStock = 0,
                Discontinued = true
            });
            products.Add(new Product()
            {
                ProductID = 3,
                ProductName = "Beer",
                UnitPrice = 4,
                UnitsInStock = 100,
                Discontinued = false
            });
            products.Add(new Product()
            {
                ProductID = 1,
                ProductName = "Cognac",
                UnitPrice = 60,
                UnitsInStock = 240,
                Discontinued = false
            });
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Get_Products([DataSourceRequest] DataSourceRequest dsRequest)
        {
            var result = products.ToDataSourceResult(dsRequest);
            return Json(result);
        }
    }
}