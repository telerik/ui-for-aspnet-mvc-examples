using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Models;

namespace Telerik.Examples.Mvc.Areas.Grid.Controllers
{
    public class PopUpEditingWithRequiredDropDownListForController : Controller
    {
        public static List<Person> persons = new List<Person>();

        static PopUpEditingWithRequiredDropDownListForController()
        {
            persons.Add(new Person { PersonID = 1, Name = "John", Gender = "Male", Country = "England", BirthDate = new DateTime(1968, 6, 26) });
            persons.Add(new Person { PersonID = 2, Name = "Sara", Gender = "Female", Country = "Spain", BirthDate = new DateTime(1974, 9, 13) });
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetPersons([DataSourceRequest] DataSourceRequest dsRequest)
        {
            var result = persons.ToDataSourceResult(dsRequest);
            return Json(result);
        }

        public ActionResult DestroyPerson([DataSourceRequest] DataSourceRequest dsRequest, Person person)
        {
            if (person != null && ModelState.IsValid)
            {
                persons.Remove(persons.FirstOrDefault(p => p.PersonID == person.PersonID));
            }

            return Json(ModelState.ToDataSourceResult());
        }

        public ActionResult CreatePerson([DataSourceRequest] DataSourceRequest dsRequest, Person person)
        {
            if (person != null && ModelState.IsValid)
            {
                var id = persons.Last().PersonID + 1;
                var newPerson = new Person()
                {
                    PersonID = id,
                    BirthDate = person.BirthDate,
                    Name = person.Name,
                    Country = person.Country,
                    Gender = person.Gender
                };

                persons.Add(newPerson);
                person.PersonID = id;
            }

            return Json(ModelState.ToDataSourceResult());
        }

        public ActionResult UpdatePerson([DataSourceRequest] DataSourceRequest dsRequest, Person person)
        {
            if (person != null && ModelState.IsValid)
            {
                var toUpdate = persons.FirstOrDefault(p => p.PersonID == person.PersonID);
                TryUpdateModel(toUpdate);
            }


            return Json(ModelState.ToDataSourceResult());
        }
    }
}