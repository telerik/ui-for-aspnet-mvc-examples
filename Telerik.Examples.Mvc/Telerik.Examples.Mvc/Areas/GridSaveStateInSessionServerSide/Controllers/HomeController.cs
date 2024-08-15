using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridSaveStateInSessionServerSide.Models;

namespace Telerik.Examples.Mvc.Areas.GridSaveStateInSessionServerSide.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }


        public ActionResult Read([DataSourceRequest] DataSourceRequest request)
        {
            var products = Enumerable.Range(1, 100).Select(index => new Product
            {
                ProductID = index,
                ProductName = index + " Product Name"
            });

            return Json(products.ToDataSourceResult(request));
        }

        [HttpPost]
        public ActionResult Save(string data)
        {
            Session["data"] = data;

            return new EmptyResult();
        }

        public ActionResult Load()
        {
            return Json(Session["data"], JsonRequestBehavior.AllowGet);
        }
    }
}