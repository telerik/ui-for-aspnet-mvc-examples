using Telerik.Examples.Mvc.Areas.SchedulerEditingCustomEditor.Models;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.SchedulerEditingCustomEditor.Controllers
{
    public class HomeController : Controller
    {
        private SchedulerMeetingService meetingService;


        public HomeController()
        {
            this.meetingService = new SchedulerMeetingService();
        }

        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View(new MeetingViewModel());
        }

        public ActionResult About()
        {
            return View();
        }

        public virtual JsonResult Meetings_Read([DataSourceRequest] DataSourceRequest request)
        {
            return Json(meetingService.GetAll().ToDataSourceResult(request));
        }

        public virtual JsonResult Meetings_Destroy([DataSourceRequest] DataSourceRequest request, IEnumerable<MeetingViewModel> models)
        {
            if (ModelState.IsValid)
            {
                var list = models.ToList();

                for (int i = 0; i < list.Count; i++)
                {
                    var meeting = list[i];

                    if (meeting.RecurrenceID != null)
                    {
                        for (int j = 0; j < list.Count; j++)
                        {
                            var potentialParent = list[j];

                            if (meeting.RecurrenceID == potentialParent.MeetingID)
                            {
                                models = models.Where(m => m.MeetingID != potentialParent.MeetingID);
                            }
                        }
                    }
                }

                foreach (var meeting in models)
                {
                    meetingService.Delete(meeting, ModelState);
                }
            }

            return Json(models.ToDataSourceResult(request, ModelState));
        }

        public virtual JsonResult Meetings_Create([DataSourceRequest] DataSourceRequest request, IEnumerable<MeetingViewModel> models)
        {
            if (ModelState.IsValid)
            {
                foreach (var meeting in models)
                {
                    meetingService.Insert(meeting, ModelState);
                }
            }

            return Json(models.ToDataSourceResult(request, ModelState));
        }

        public virtual JsonResult Meetings_Update([DataSourceRequest] DataSourceRequest request, IEnumerable<MeetingViewModel> models)
        {
            if (ModelState.IsValid)
            {
                foreach (var meeting in models)
                {
                    meetingService.Update(meeting, ModelState);
                }
            }

            return Json(models.ToDataSourceResult(request, ModelState));
        }
    }
}