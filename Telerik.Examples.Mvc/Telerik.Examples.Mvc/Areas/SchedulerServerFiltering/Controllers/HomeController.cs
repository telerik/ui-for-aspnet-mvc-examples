using Telerik.Examples.Mvc.Areas.SchedulerServerFiltering.Models;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.SchedulerServerFiltering.Controllers
{
    public class HomeController : Controller
    {
        private SchedulerTaskService taskService;

        public HomeController()
        {
            taskService = new SchedulerTaskService();
        }

        public ActionResult Index()
        {
            return View();
        }

        public virtual JsonResult Read(DataSourceRequest request, FilterRange range)
        {
            var data = taskService.GetRange(range.Start, range.End);
            return Json(data.ToDataSourceResult(request));
        }

        public virtual JsonResult Destroy([DataSourceRequest] DataSourceRequest request, TaskViewModel task)
        {
            if (ModelState.IsValid)
            {
                taskService.Delete(task, ModelState);
            }

            return Json(new[] { task }.ToDataSourceResult(request, ModelState));
        }

        public virtual JsonResult Create([DataSourceRequest] DataSourceRequest request, TaskViewModel task)
        {
            if (ModelState.IsValid)
            {
                taskService.Insert(task, ModelState);
            }

            return Json(new[] { task }.ToDataSourceResult(request, ModelState));
        }

        public virtual JsonResult Update([DataSourceRequest] DataSourceRequest request, TaskViewModel task)
        {
            if (ModelState.IsValid)
            {
                taskService.Update(task, ModelState);
            }

            return Json(new[] { task }.ToDataSourceResult(request, ModelState));
        }

        protected override void Dispose(bool disposing)
        {
            taskService.Dispose();
            base.Dispose(disposing);
        }

    }
}