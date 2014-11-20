using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KendoUIMVC5.Models;
using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;

namespace KendoMVCWrappers.Controllers
{
    public class HomeController : Controller
    {
        public static List<Person> persons = new List<Person>();

        static HomeController()
        {
            persons.Add(new Person { PersonID = 1, Name = "John", BirthDate = new DateTime(1968, 6, 26), IsAdmin = true });
            persons.Add(new Person { PersonID = 2, Name = "Sara", BirthDate = new DateTime(1974, 9, 13) });
            persons.Add(new Person { PersonID = 3, Name = "Peter", BirthDate = new DateTime(1976, 4, 20), IsAdmin = true });
        }

        public ActionResult Index()
        {
            ViewBag.Message = "Modify this template to kick-start your ASP.NET MVC application.";

            return View();
        }

        public ActionResult GetPersons([DataSourceRequest] DataSourceRequest dsRequest)
        {
            var result = persons.ToDataSourceResult(dsRequest);
            return Json(result);
        }

        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult UpdatePersons([DataSourceRequest] DataSourceRequest request, [Bind(Prefix = "models")]IEnumerable<Person> updated)
        {
            if (updated != null && ModelState.IsValid)
            {
                foreach (Person person in updated)
                {
                    var target = persons.FirstOrDefault(p => p.PersonID == person.PersonID);
                    if (target != null)
                    {
                        target.Name = person.Name;
                        target.IsAdmin = person.IsAdmin;
                        target.BirthDate = person.BirthDate;
                    }
                }
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
    }
}
