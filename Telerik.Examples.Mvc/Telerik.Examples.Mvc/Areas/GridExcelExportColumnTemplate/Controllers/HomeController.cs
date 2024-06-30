using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Results;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridExcelExportColumnTemplate.Models;

namespace Telerik.Examples.Mvc.Areas.GridExcelExportColumnTemplate.Controllers
{
    public class HomeController : Controller
    {
        // GET: GridExcelExportColumnTemplate/Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Orders_Read([DataSourceRequest] DataSourceRequest request)
        {
            List<Order> orders = new List<Order>()
            {
                new Order() { OrderID = 1, Freight = 100, OrderDate = DateTime.Now, ShipCity = "Tokyo", ShipName = "Ship1"  },
                new Order() { OrderID = 2, Freight = 300, OrderDate = DateTime.Now, ShipCity = "London", ShipName = "Ship2"  },
                new Order() { OrderID = 3, Freight = 500, OrderDate = DateTime.Now, ShipCity = "New York", ShipName = "Ship3"  },
                new Order() { OrderID = 4, Freight = 220, OrderDate = DateTime.Now, ShipCity = "Rome", ShipName = "Ship4"  },
                new Order() { OrderID = 5, Freight = 700, OrderDate = DateTime.Now, ShipCity = "Paris", ShipName = "Ship5"  }
            };

            return Json(orders.ToDataSourceResult(request, o => new
            {
                o.OrderID,
                o.Freight,
                o.OrderDate,
                o.ShipName,
                o.ShipCity
            }));
        }
    }
}