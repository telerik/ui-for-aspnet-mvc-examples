﻿using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.DropDownListCustomDataSource.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }

        public ActionResult _GetData([DataSourceRequest] DataSourceRequest request)
        {
            var list = new string[]
            {
                "Item1", "Item2", "Item3"
            };

            return Json(list.ToDataSourceResult(request));
        }
    }
}