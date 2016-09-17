using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Kendo.Mvc.UI;
using KendoMVCWrappers.Models;
using Kendo.Mvc.Extensions;
using System.Collections;
using System.IO;
using System.Text;
using iTextSharp.text;
using iTextSharp.text.pdf;

namespace KendoMVCWrappers.Controllers
{
    public class HomeController : Controller
    {
        private NwEntities db = new NwEntities();

        public ActionResult Index([DataSourceRequest] DataSourceRequest request)
        {
            ViewBag.Message = "Modify this template to kick-start your ASP.NET MVC application.";

            return View(db.Products);
        }

        public ActionResult Read([DataSourceRequest] DataSourceRequest request)
        {
            return Json(db.Products.ToDataSourceResult(request));
        }
    }
}
