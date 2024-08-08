using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using Telerik.Examples.Mvc.Areas.RequireJS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.RequireJS.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }

        public ActionResult Read([DataSourceRequest]DataSourceRequest request)
        {
            var products = new[] {
                new Product
                {
                    ProductID = 1,
                    ProductName = "Product 1"
                }
            };

            return Json(products.ToDataSourceResult(request));
        }

    }
}
