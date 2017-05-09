﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KendoMVCWrappers.Models;
using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;

namespace KendoMVCWrappers.Controllers
{
    public class HomeController : Controller
    {
        public static List<Person> persons = new List<Person>();

        static HomeController()
        {
            persons.Add(new Person { PersonID = 1, Name = "John", BirthDate = new DateTime(1968, 6, 26) });
            persons.Add(new Person { PersonID = 2, Name = "Sara", BirthDate = new DateTime(1974, 9, 13) });
            persons.Add(new Person { PersonID = 3, Name = "Alexander", BirthDate = new DateTime(1984, 10, 13) });
            persons.Add(new Person { PersonID = 4, Name = "Jack", BirthDate = new DateTime(1989, 9, 25) });
            persons.Add(new Person { PersonID = 5, Name = "Paula", BirthDate = new DateTime(1988, 3, 17) });
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

        public ActionResult UpdatePerson([DataSourceRequest] DataSourceRequest dsRequest, Person person)
        {
            if (person != null && ModelState.IsValid)
            {
                var toUpdate = persons.FirstOrDefault(p => p.PersonID == person.PersonID);
                TryUpdateModel(toUpdate);
            }


            return Json(ModelState.ToDataSourceResult());
        }

        public ActionResult DeletePersons(Person person)
        {
            var toDel = persons.FirstOrDefault(p=>p.PersonID==person.PersonID);
            persons.Remove(toDel);
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
