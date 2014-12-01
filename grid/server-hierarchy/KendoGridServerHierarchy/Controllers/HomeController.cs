using KendoGridServerHierarchy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KendoGridServerHierarchy.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var northwind = new NorthwindEntities();
            ViewBag.Categories = northwind.Categories;
            return View();
        }
    }
}
