﻿using System;
using System.Collections.Generic;
using System.Web.Mvc;
using SampleApplication.Models;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using SampleApplication.ViewModels;
using System.Linq;

namespace SampleApplication.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetAutocomplete(string text, string methodName)
        {
            List<ResultEntry> lookupResults = new List<ResultEntry>();

            //just getting something back...
            lookupResults.Add(new ResultEntry("1", "Apple"));
            lookupResults.Add(new ResultEntry("2", "Another"));
            lookupResults.Add(new ResultEntry("3", "An"));
            lookupResults.Add(new ResultEntry("4", "According"));
            lookupResults.Add(new ResultEntry("5", "asdas"));

            var newLookupResults = lookupResults.Where(p => p.Name.Contains(text));

            return Json(newLookupResults, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Read([DataSourceRequest] DataSourceRequest request)
        {
            List<GridViewModel> gridModel = new List<GridViewModel>();
            gridModel.Add(new GridViewModel() { Text = "Hello", ID = 0, Person = new ResultEntryViewModel() { ID = "1", MethodName = "Anything", MinimumChars = 3, Name = "Apple", SignDate = DateTime.Now } });
            return Json(gridModel.ToDataSourceResult(request));
        }
    }
}
