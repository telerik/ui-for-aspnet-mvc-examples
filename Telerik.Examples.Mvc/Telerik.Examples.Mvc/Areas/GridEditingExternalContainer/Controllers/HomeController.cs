using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridEditingExternalContainer.Models;

namespace Telerik.Examples.Mvc.Areas.GridEditingExternalContainer.Controllers
{
    public class HomeController : Controller
    {
        // GET: GridEditingExternalContainer/Home
        public ActionResult Index()
        {
            return View();
        }

        public static List<Person> people = new List<Person>();

        static HomeController()
        {
            people.Add(new Person { PersonID = 1, Name = "John", BirthDate = new DateTime(1968, 6, 26), EyeColorIndex = 1 });
            people.Add(new Person { PersonID = 2, Name = "Sara", BirthDate = new DateTime(1974, 9, 13), EyeColorIndex = 2 });
            people.Add(new Person { PersonID = 3, Name = "Peter", BirthDate = new DateTime(1974, 9, 13) });
        }

        public ActionResult GetPersons([DataSourceRequest] DataSourceRequest dsRequest)
        {
            var result = people.ToDataSourceResult(dsRequest);
            return Json(result);
        }

        public ActionResult CreatePerson([DataSourceRequest] DataSourceRequest dsRequest, [Bind(Prefix = "models")] IEnumerable<Person> incoming)
        {
            var results = new List<Person>();

            if (incoming != null && ModelState.IsValid)
            {
                foreach (var person in incoming)
                {
                    person.PersonID = people.Count;
                    people.Add(person);
                    results.Add(person);
                }
            }

            return Json(results.ToDataSourceResult(dsRequest, ModelState));
        }


        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult UpdatePerson([DataSourceRequest] DataSourceRequest request, [Bind(Prefix = "models")] IEnumerable<Person> incoming)
        {
            if (incoming != null && ModelState.IsValid)
            {
                foreach (var person in incoming)
                {
                    var target = people.FirstOrDefault(p => p.PersonID == person.PersonID);
                    if (target != null)
                    {
                        target.Name = person.Name;
                        target.BirthDate = person.BirthDate;
                        target.EyeColorIndex = person.EyeColorIndex;
                    }
                }
            }

            return Json(ModelState.ToDataSourceResult());
        }
    }
}