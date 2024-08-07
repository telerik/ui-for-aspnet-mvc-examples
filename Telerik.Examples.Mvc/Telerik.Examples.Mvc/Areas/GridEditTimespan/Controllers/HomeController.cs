using Telerik.Examples.Mvc.Areas.GridEditTimespan.Models;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data;

namespace Telerik.Examples.Mvc.Areas.GridEditTimespan.Controllers
{
    public class HomeController : Controller
    {
        static List<ViewModel> data = new List<ViewModel>()
                {
                    new ViewModel
                    {
                        ID = 1,
                        Time = new TimeSpan(10, 20, 30)
                    }
                };

        public ActionResult TimePickerEditor()
        {

            return View();
        }

        public ActionResult NumericEditor()
        {
            return View();
        }


        public ActionResult Read([DataSourceRequest] DataSourceRequest request)
        {
            return Json(data.ToDataSourceResult(request));
        }

        public ActionResult Update(ViewModel viewModel)
        {
            if (ModelState.IsValid)
            {
                //repository.Update(viewModel);
            }

            return Json(new[] { viewModel }.ToDataSourceResult(new DataSourceRequest(), ModelState), JsonRequestBehavior.AllowGet);
        }
      
        public ActionResult Create(ViewModel model)
        {
            if (ModelState.IsValid)
            {
                model.ID = data.Count + 1;
                data.Add(model);
            }

            return Json(new[] { model }.ToDataSourceResult(new DataSourceRequest(), ModelState));
        }
    }
}