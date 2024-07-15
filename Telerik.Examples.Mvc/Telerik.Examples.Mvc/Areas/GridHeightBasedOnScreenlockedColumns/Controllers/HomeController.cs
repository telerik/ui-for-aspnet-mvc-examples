using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridHeightBasedOnScreenlockedColumns.Models;

namespace Telerik.Examples.Mvc.Areas.GridHeightBasedOnScreenlockedColumns.Controllers
{
    public class HomeController : Controller
    {
        // GET: GridHeightBasedOnScreenlockedColumns/Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Orders_Read([DataSourceRequest] DataSourceRequest request)
        {
            var result = Enumerable.Range(0, 50).Select(i => new OrderViewModel
            {
                OrderID = i,
                Freight = i * 10,
                OrderDate = DateTime.Now.AddDays(i),
                ShipName = "ShipName " + i,
                ShipCity = "ShipCity " + i,
                ShipCountry = "ShipCountry" + i
            });

            return Json(result.ToDataSourceResult(request));
        }
    }
}