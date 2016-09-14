using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KendoMVCWrappers.Models;
using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using Newtonsoft.Json;

namespace KendoMVCWrappers.Controllers
{
    public class HomeController : Controller
    {
        public static List<Person> persons = new List<Person>();

        static HomeController()
        {
            persons.Add(new Person { PersonID = 1, Name = "John", BirthDate = DateTime.Now });
            persons.Add(new Person { PersonID = 2, Name = "Sara", BirthDate = DateTime.Now });
        }

        public ActionResult Index()
        {
            ViewBag.Message = "Modify this template to kick-start your ASP.NET MVC application.";

            return View(DateTime.Now);
        }

        public ActionResult GetPersons([DataSourceRequest] DataSourceRequest dsRequest)
        {
            var result = persons.ToDataSourceResult(dsRequest);

            return BuildResult(result);
        }

        public ActionResult UpdatePerson([DataSourceRequest] DataSourceRequest dsRequest, Person person)
        {
            if (person != null && ModelState.IsValid)
            {
                var toUpdate = persons.FirstOrDefault(p => p.PersonID == person.PersonID);
                TryUpdateModel(toUpdate);

                return BuildResult(new[] { toUpdate }.ToDataSourceResult(dsRequest));
            }


            return Json(ModelState.ToDataSourceResult());
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your quintessential app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your quintessential contact page.";

            return View();
        }

        private ContentResult BuildResult(DataSourceResult data)
        {
            return Content(JsonConvert.SerializeObject(data, Formatting.None, new JsonSerializerSettings { DateFormatString = "yyyy-MM-ddTHH:mm:ss" }), "application/json");
        }
    }
}
