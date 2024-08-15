using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridFilterAsYouType.Models;

namespace Telerik.Examples.Mvc.Areas.GridFilterAsYouType.Controllers
{
    public class HomeController : Controller
    {
        public static List<OrderViewModel> orderList = new List<OrderViewModel> {
                new OrderViewModel { OrderID = 1, ShipCity = "Tokyo", ShipName = "Japan44" },
                new OrderViewModel { OrderID = 2, ShipCity = "Yokohama", ShipName = "Japan45" },
                new OrderViewModel { OrderID = 3, ShipCity = "Berlin", ShipName = "Germany255" },
                new OrderViewModel { OrderID = 4, ShipCity = "Paris", ShipName = "France77" },
                new OrderViewModel { OrderID = 5, ShipCity = "Rome", ShipName = "Italy350" },
                new OrderViewModel { OrderID = 6, ShipCity = "Venice", ShipName = "Italy380" },
                new OrderViewModel { OrderID = 7, ShipCity = "Milan", ShipName = "Italy381" },
                new OrderViewModel { OrderID = 8, ShipCity = "London", ShipName = "UK662" },
                new OrderViewModel { OrderID = 9, ShipCity = "New York", ShipName = "USA875" },
                new OrderViewModel { OrderID = 10, ShipCity = "Chicago", ShipName = "USA880" },
            };

        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }

        public ActionResult Orders_Read([DataSourceRequest] DataSourceRequest request)
        {
            return Json(orderList.ToDataSourceResult(request));
        }
    }
}