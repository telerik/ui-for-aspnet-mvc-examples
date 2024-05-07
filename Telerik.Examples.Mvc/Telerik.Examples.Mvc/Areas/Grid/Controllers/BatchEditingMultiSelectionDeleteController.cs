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
    public class BatchEditingMultiSelectionDeleteController : Controller
    {
		public static List<Person> persons = new List<Person>();

		static BatchEditingMultiSelectionDeleteController()
		{
			persons.Add(new Person { PersonID = 1, Name = "John", BirthDate = new DateTime(1968, 6, 26) });
			persons.Add(new Person { PersonID = 2, Name = "Sara", BirthDate = new DateTime(1974, 9, 13) });
			persons.Add(new Person { PersonID = 3, Name = "Alexander", BirthDate = new DateTime(1984, 10, 13) });
			persons.Add(new Person { PersonID = 4, Name = "Jack", BirthDate = new DateTime(1989, 9, 25) });
			persons.Add(new Person { PersonID = 5, Name = "Paula", BirthDate = new DateTime(1988, 3, 17) });
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
			var toDel = persons.FirstOrDefault(p => p.PersonID == person.PersonID);
			persons.Remove(toDel);
			return Json(ModelState.ToDataSourceResult());
		}
	}
}