namespace Telerik.Examples.Mvc.Areas.SchedulerValidatingTimeslot.Controllers
{
    using Kendo.Mvc.UI;
    using Kendo.Mvc.Extensions;
    using Telerik.Examples.Mvc.Areas.SchedulerValidatingTimeslot.Models;

    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;
    using System.Web.Mvc;
    //using Ical.Net.DataTypes;
    //using Ical.Net.Interfaces;

    //using Ical.Net;

    //using DDay.iCal;

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

            //CheckOccurrence();

            return View();
        }

        public virtual JsonResult Meetings_Read([DataSourceRequest] DataSourceRequest request)
        {
            return Json(meetingService.GetAll().ToDataSourceResult(request));
        }

        public virtual JsonResult Meetings_Destroy([DataSourceRequest] DataSourceRequest request, MeetingViewModel meeting)
        {
            if (ModelState.IsValid)
            {
                meetingService.Delete(meeting, ModelState);
            }

            return Json(new[] { meeting }.ToDataSourceResult(request, ModelState));
        }

        public virtual ActionResult Meetings_Create([DataSourceRequest] DataSourceRequest request, MeetingViewModel meeting)
        {
            if (ModelState.IsValid)
            {
                if (CheckEventSlot(meeting))
                {
                    meetingService.Insert(meeting, ModelState);
                    return Json(new[] { meeting }.ToDataSourceResult(request, ModelState));
                }
                else
                {
                    ModelState.AddModelError("", "New event is not allowed because of unavailable slots");
                    return View(meeting);
                }
            }
            else
            {
                return Json(new { Success = false, Message = "Not all required fileds are filled " });
            }
        }

        public virtual JsonResult Meetings_Update([DataSourceRequest] DataSourceRequest request, MeetingViewModel meeting)
        {
            if (ModelState.IsValid)
            {
                meetingService.Update(meeting, ModelState);
            }

            return Json(new[] { meeting }.ToDataSourceResult(request, ModelState));
        }

        private bool CheckEventSlot(MeetingViewModel newMeeting)
        {
            foreach (var meeting in meetingService.GetAll())
            {
                if (!string.IsNullOrEmpty(meeting.RecurrenceRule))
                {
                    var start = meeting.Start;
                    var end = meeting.End;
                    var recRule = meeting.RecurrenceRule;

                    var condition = false; // here you can use 3rd party software like iCal.Net to build up the condition

                    if (condition)
                    {
                        return false;
                    }
                }
            }

            return true;
        }

       //private bool CheckEventSlot(MeetingViewModel newMeeting)
       // {
       //     IICalendar iCal = new iCalendar();

       //     foreach (var meeting in meetingService.GetAll())
       //     {
       //         if (!string.IsNullOrEmpty(meeting.RecurrenceRule))
       //         {
       //             var evt = iCal.Create<Event>();

       //             evt.Start = new iCalDateTime(meeting.Start);
       //             evt.End = new iCalDateTime(meeting.End);

       //             evt.RecurrenceRules.Add(new RecurrencePattern(meeting.RecurrenceRule));

       //             var occ = evt.GetOccurrences(newMeeting.Start, newMeeting.End);

       //             if (evt.GetOccurrences(newMeeting.Start, newMeeting.End).Count > 0)
       //             {
       //                 return false;
       //             }
       //         }
       //     }

       //     return true;
       // }
    }
}
