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
    public class CustomPopupEditorController : Controller
    {
		public static List<Person> persons = new List<Person>();

		static CustomPopupEditorController()
		{
			persons.Add(new Person { PersonID = 1, Name = "John", BirthDate = new DateTime(1968, 6, 26) });
			persons.Add(new Person { PersonID = 2, Name = "Sara", BirthDate = new DateTime(1974, 9, 13) });
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
	}
}