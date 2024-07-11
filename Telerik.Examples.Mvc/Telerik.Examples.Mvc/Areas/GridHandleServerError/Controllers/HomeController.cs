using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridHandleServerError.Models;

namespace Telerik.Examples.Mvc.Areas.GridHandleServerError.Controllers
{
    public class HomeController : Controller
    {
        // GET: GridHandleServerError/Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Orders_Read([DataSourceRequest] DataSourceRequest request)
        {
            var result = Enumerable.Range(1, 50).Select(i => new OrderViewModel
            {
                OrderID = i,
                Freight = i * 10,
                ShipName = "ShipName " + i,
                ShipCity = "ShipCity " + i,
                Category = new CategoryViewModel()
                {
                    CategoryID = i,
                    CategoryName = "Grey"
                }
            });

            return Json(result.ToDataSourceResult(request));
        }

        public ActionResult Orders_Update([DataSourceRequest] DataSourceRequest request, OrderViewModel order)
        {
            bool isValid = false;

            // Note: The method below always returns an error
            // In a real-world application this would be the result of a custom validation

            if (!isValid)
            {
                ModelState.AddModelError("'" + order.Category.CategoryName + "'", "This is my server error!");
            }

            return Json(new[] { order }.ToDataSourceResult(request, ModelState));
        }
    }
}