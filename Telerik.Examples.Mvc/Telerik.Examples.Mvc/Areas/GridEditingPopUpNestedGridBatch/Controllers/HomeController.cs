using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditingPopUpNestedGridBatch.Controllers
{
    public class HomeController : BaseController
    {
		public ActionResult Index()
		{
			ViewBag.Message = "Welcome to ASP.NET MVC!";
			
			return View();
		}

		public ActionResult About()
		{
			return View();
		}
	}
}