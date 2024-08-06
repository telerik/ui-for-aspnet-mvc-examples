using Telerik.Examples.Mvc.Areas.GridHierarchyServerDetailTemplate.Models;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridHierarchyServerDetailTemplate.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var northwind = new GridHierarchyServerDetailTemplateEntities();
            ViewBag.Products = northwind.Products;
            return View();
        }

    }
}