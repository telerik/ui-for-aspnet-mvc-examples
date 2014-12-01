using KendoGridServerBinding.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KendoGridServerBinding.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var northwind = new NorthwindEntities();
            var products = northwind.Products;
            return View(products);
        }
    }
}
