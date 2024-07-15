using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridSaveStateWithBrowserHistoryAPI.Models;

namespace Telerik.Examples.Mvc.Areas.GridSaveStateWithBrowserHistoryAPI.Controllers
{
    public class HomeController : Controller
    {
        private static List<Product> orderList = new List<Product> {
                new Product {ProductID = 1, ProductName = "Apple", QuantityPerUnit = "100", UnitPrice = 3 },
                new Product {ProductID = 2, ProductName = "Banana", QuantityPerUnit = "6", UnitPrice = 2 },
                new Product {ProductID = 3, ProductName = "Carrot", QuantityPerUnit = "10", UnitPrice = 1 },
                new Product {ProductID = 4, ProductName = "Bread", QuantityPerUnit = "1", UnitPrice = 6 },
                new Product {ProductID = 5, ProductName = "Lemonade", QuantityPerUnit = "1", UnitPrice = 4 },
                new Product {ProductID = 6, ProductName = "Milk", QuantityPerUnit = "2", UnitPrice = 7 },
                new Product {ProductID = 7, ProductName = "Whisky", QuantityPerUnit = "1", UnitPrice = 60 },
        };

        public ActionResult Index([DataSourceRequest] DataSourceRequest request)
        {
            return View(orderList);
        }

        public ActionResult Read([DataSourceRequest] DataSourceRequest request)
        {
            return Json(orderList.ToDataSourceResult(request));
        }
    }
}