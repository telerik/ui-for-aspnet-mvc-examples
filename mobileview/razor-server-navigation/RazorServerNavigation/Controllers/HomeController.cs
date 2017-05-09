using RazorServerNavigation.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index(string SystemId)
        {
            if (!string.IsNullOrWhiteSpace(SystemId))
            {
                return RedirectToAction("About", new { SystemId = SystemId });
            }

            return View();
        }
    
        public ActionResult About(string SystemId)
        {
            ViewBag.FilteredSource = new List<SystemViewModel>
            {
                new SystemViewModel 
                {
                    SystemId = SystemId
                },
                new SystemViewModel 
                {
                    SystemId = SystemId
                },
                new SystemViewModel 
                {
                    SystemId = SystemId
                }
            };

            return View();
        }

		public ActionResult Contact()
        {
            return View();
        }
    }
}
