using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using Telerik.Examples.Mvc.Areas.SchedulerGoogleAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.SchedulerGoogleAPI.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }

        private List<SchedulerEventModel> appointments = new List<SchedulerEventModel> {
            new SchedulerEventModel {
                TaskID = 1,
                Description = "Task 1 Description",
                Title = "Task 1",
                Start = new DateTime(2023,4,11,6,00,00),
                End= new DateTime(2023,4,11,8,30,00),
                RoomID = 1,
                Attendees = new List<int>() { 1, 2 }
            },
            new SchedulerEventModel {
                TaskID = 2,
                Description = "Task 2 Description",
                Title = "Task 2",
                Start = new DateTime(2023,4,10,12,00,00),
                End= new DateTime(2023,4,10,13,00,00),
                RoomID = 2,
                Attendees = new List<int>() { 2, 3 }
            }
        };

        [HttpPost]
        public ActionResult Pdf_Export_Save(string contentType, string base64, string fileName)
        {
            var fileContents = Convert.FromBase64String(base64);

            return File(fileContents, contentType, fileName);
        }

        public JsonResult Read([DataSourceRequest] DataSourceRequest request)
        {
            return Json(appointments.ToDataSourceResult(request));
        }

        public virtual JsonResult Delete([DataSourceRequest] DataSourceRequest request, SchedulerEventModel task)
        {
            if (ModelState.IsValid)
            {
                appointments.Remove(appointments.Where(x => x.TaskID == task.TaskID).FirstOrDefault());
            }

            return Json(new[] { task }.ToDataSourceResult(request, ModelState));
        }

        public virtual JsonResult Create([DataSourceRequest] DataSourceRequest request, SchedulerEventModel task)
        {
            if (ModelState.IsValid)
            {
                task.TaskID = ++appointments.LastOrDefault().TaskID;
                appointments.Add(task);
            }

            return Json(new[] { task }.ToDataSourceResult(request, ModelState));
        }

        public virtual JsonResult Update([DataSourceRequest] DataSourceRequest request, SchedulerEventModel task)
        {
            if (ModelState.IsValid)
            {
                var appointmentToUpdate = appointments.Where(x => x.TaskID == task.TaskID).FirstOrDefault();
                if (appointmentToUpdate != null)
                {
                    appointmentToUpdate = task;
                }
            }

            return Json(new[] { task }.ToDataSourceResult(request, ModelState));
        }
    }
}
