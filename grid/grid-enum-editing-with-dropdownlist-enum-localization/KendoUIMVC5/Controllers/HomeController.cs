using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using KendoUIMVC5.Models;

namespace KendoUIMVC5.Controllers
{
    public class HomeController : Controller
    {
        public static List<Person> persons = new List<Person>();

        static HomeController()
        {
            persons.Add(new Person { PersonID = 1, Name = "John", BirthDate = new DateTime(1968, 6, 26), Role = Role.SuperUser });
            persons.Add(new Person { PersonID = 2, Name = "Sara", BirthDate = new DateTime(1974, 9, 13) });
            persons.Add(new Person { PersonID = 3, Name = "Peter", BirthDate = new DateTime(1976, 4, 20), Role = Role.User });
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetPersons([DataSourceRequest] DataSourceRequest dsRequest)
        {
            var result = persons.ToDataSourceResult(dsRequest, c => new
            {
                PersonID = c.PersonID,
                Name = c.Name,
                BirthDate = c.BirthDate,
                Role = c.Role.ToString()
            });
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
                        target.BirthDate = person.BirthDate;
                        target.Role = person.Role;
                    }
                }
            }

            return Json(ModelState.ToDataSourceResult());
        }
    }
}
