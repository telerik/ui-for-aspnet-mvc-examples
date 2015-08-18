using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using GridHandlingUnauthorizedRequest.Models;
using GridHandlingUnauthorizedRequest.Attributes;

namespace GridHandlingUnauthorizedRequest.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult ErrorMessage()
        {
            return View();
        }

        public ActionResult RedirectToLogin()
        {
            return View();
        }

        [DataSourceMessageAuthorize]
        public ActionResult ReadMessage([DataSourceRequest] DataSourceRequest request)
        {
            return Json(new [] {new Product()}.ToDataSourceResult(request));
        }

        [DataSourceRedirectAuthorize]
        public ActionResult ReadRedirect([DataSourceRequest] DataSourceRequest request)
        {
            return Json(new[] { new Product() }.ToDataSourceResult(request));
        }
    }
}