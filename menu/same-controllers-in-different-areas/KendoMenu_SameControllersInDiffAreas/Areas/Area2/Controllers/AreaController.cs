using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KendoMenu_SameControllersInDiffAreas.Areas.Area2.Controllers
{
    public class AreaController : Controller
    {
        // GET: Area2/Area
        public ActionResult Index()
        {
            return View();
        }
    }
}