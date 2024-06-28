using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditing3LevelHierarchy.Controllers
{
    public class HomeController : BaseController
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";
            ViewData["products"] = context.Products.Select(p => new
            {
                ProductID = p.ProductID,
                ProductName = p.ProductName
            });
            return View();
        }

        public ActionResult About()
        {
            return View();
        }
    }
}