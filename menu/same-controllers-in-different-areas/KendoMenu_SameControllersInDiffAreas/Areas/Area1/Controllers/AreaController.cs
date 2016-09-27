using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KendoMenu_SameControllersInDiffAreas.Areas.Area1.Controllers
{
    [Authorize]
    public class AreaController : Controller
    {
        // GET: Area1/Area
        public ActionResult Index()
        {
            return View();
        }
    }
}