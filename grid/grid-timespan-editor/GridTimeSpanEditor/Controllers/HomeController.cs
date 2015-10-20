using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using GridTimeSpanEditor.Models;

namespace GridTimeSpanEditor.Controllers
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

        public ActionResult Update(int id)
        {
            TryUpdateModel(data.First(v => v.ID == id));
            return Json(ModelState.ToDataSourceResult());
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

        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
