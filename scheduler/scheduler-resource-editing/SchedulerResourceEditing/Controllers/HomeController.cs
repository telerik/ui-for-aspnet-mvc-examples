namespace SchedulerResourceEditing.Controllers
{
    using Kendo.Mvc.Extensions;
    using Kendo.Mvc.UI;
    using SchedulerResourceEditing.Models;
    using System.Collections.Generic;
    using System.Web;
    using System.Web.Mvc;
    using System.Linq;
    using System;

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

        public virtual JsonResult Meetings_Destroy([DataSourceRequest] DataSourceRequest request, MeetingViewModel meeting)
        {
            if (ModelState.IsValid)
            {
                meetingService.Delete(meeting, ModelState);
            }

            return Json(new[] { meeting }.ToDataSourceResult(request, ModelState));
        }

        public virtual JsonResult Meetings_Create([DataSourceRequest] DataSourceRequest request, MeetingViewModel meeting)
        {
            if (ModelState.IsValid)
            {
                meetingService.Insert(meeting, ModelState);
            }

            return Json(new[] { meeting }.ToDataSourceResult(request, ModelState));
        }

        public virtual JsonResult Meetings_Update([DataSourceRequest] DataSourceRequest request, MeetingViewModel meeting)
        {
            if (ModelState.IsValid)
            {
                meetingService.Update(meeting, ModelState);
            }

            return Json(new[] { meeting }.ToDataSourceResult(request, ModelState));
        }

        public virtual JsonResult Read_Attendees([DataSourceRequest] DataSourceRequest request)
        {
            return Json(GetAll().ToDataSourceResult(request), JsonRequestBehavior.AllowGet);
        }

        public ActionResult Create_Attendees([DataSourceRequest] DataSourceRequest request, Attendee attendee)
        {
            if (ModelState.IsValid)
            {
                Insert(attendee);
            }
            
            return Json(new[] { attendee }.ToDataSourceResult(request, ModelState));
        }

        public ActionResult Update_Attendees([DataSourceRequest] DataSourceRequest request, Attendee attendee)
        {
            if (ModelState.IsValid)
            {
                Update(attendee, ModelState);
            }
            
            return Json(new[] { attendee }.ToDataSourceResult(request, ModelState));
        }

        public ActionResult Destroy_Attendees([DataSourceRequest] DataSourceRequest request, Attendee attendee)
        {
            if (ModelState.IsValid)
            {
                Destroy(attendee, ModelState);
            }

            return Json(new[] { attendee }.ToDataSourceResult(request, ModelState));
        }




        //static data - FOR TEST PURPOSES ONLY
        private static List<Attendee> attendeeList = new List<Attendee> { 
                new Attendee { Text = "Alex", Value = 1, Color = "#f8a398" },
                new Attendee { Text = "Bob", Value = 2, Color = "#51a0ed" },
                new Attendee { Text = "Charlie", Value = 3, Color = "#56ca85" } 
            };

        private static IList<Attendee> GetAll()
        {
            IList<Attendee> result = (IList<Attendee>)System.Web.HttpContext.Current.Session["Attendees"];

            if (result == null)
            {
                //read from dataBase
                System.Web.HttpContext.Current.Session["Attendees"] = result =
                    (from attendee in attendeeList
                     select new Attendee
                     {
                         Text = attendee.Text,
                         Value = attendee.Value,
                         Color = attendee.Color,
                     }).ToList();
            }

            return result;
        }

        private static Attendee One(Func<Attendee, bool> predicate)
        {
            return GetAll().Where(predicate).FirstOrDefault();
        }

        private static void Insert(Attendee attendee)
        {
            var attendees = GetAll();

            attendee.Value = attendees.OrderByDescending(p => p.Value).First().Value + 1;

            attendees.Insert(0, attendee);

            System.Web.HttpContext.Current.Session["Attendees"] = attendees;
        }

        private static void Update(Attendee attendee, ModelStateDictionary modelState)
        {
            var attendees = GetAll();
            Attendee originalAttendee = attendees.Where(p => p.Value == attendee.Value).FirstOrDefault();

            if (originalAttendee != null)
            {
                originalAttendee.Text = attendee.Text;
                originalAttendee.Color = attendee.Color;

                System.Web.HttpContext.Current.Session["Attendees"] = attendees;
            }
            else
            {
                modelState.AddModelError("value", "The desired record is no longer available.");
            }
        }

        private static void Destroy(Attendee attendee, ModelStateDictionary modelState)
        {
            var attendees = GetAll();
            Attendee originalAttendee = attendees.Where(p => p.Value == attendee.Value).FirstOrDefault();

            if (originalAttendee != null)
            {
                attendees.Remove(originalAttendee);

                System.Web.HttpContext.Current.Session["Attendees"] = attendees;
            }
            else
            {
                modelState.AddModelError("value", "The desired record is no longer available.");
            }
        }
    }
}
