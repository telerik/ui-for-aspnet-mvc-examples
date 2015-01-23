using System;
using System.Linq;
using System.Web.Mvc;
using Kendo.Mvc.Extensions;
using KendoUI_Scheduler_Server_Filtering.Models;
using Kendo.Mvc.UI;

namespace KendoUI_Scheduler_Server_Filtering.Controllers
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

        public virtual JsonResult Read(DataSourceRequest request, DateTime start, DateTime end)
        {
            var data = taskService.GetRange(start, end);
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
