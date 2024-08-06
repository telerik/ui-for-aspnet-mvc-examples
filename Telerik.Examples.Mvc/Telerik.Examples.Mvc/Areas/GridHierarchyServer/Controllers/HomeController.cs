using Telerik.Examples.Mvc.Areas.GridHierarchyServer.Models;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridHierarchyServer.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var northwind = new GridHierarchyServerEntities();
            ViewBag.Categories = northwind.Categories;
            return View();
        }
    }
}