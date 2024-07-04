using Telerik.Examples.Mvc.Areas.MultiSelectGetPostData.Models;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.MultiSelectGetPostData.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(sampleModel userInput)
        {
            return View("Details", userInput);
        }

        public JsonResult GetData()
        {
            var data = Enumerable.Range(1, 15).Select(d => new MultiSelectItem
            {
                TheText = "item " + d,
                TheValue = d
            });

            return Json(data.ToList(), JsonRequestBehavior.AllowGet);
        }
    }
}