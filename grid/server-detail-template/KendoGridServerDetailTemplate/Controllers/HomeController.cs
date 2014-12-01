using KendoGridServerDetailTemplate.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KendoGridServerDetailTemplate.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var northwind = new NorthwindEntities();
            ViewBag.Products = northwind.Products;
            return View();
        }

    }
}
