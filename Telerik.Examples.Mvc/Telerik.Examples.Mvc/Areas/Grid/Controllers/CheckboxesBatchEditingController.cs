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
    public class CheckboxesBatchEditingController : Controller
    {
		public static List<Person> persons = new List<Person>();

		static CheckboxesBatchEditingController()
		{
			persons.Add(new Person { PersonID = 1, Name = "John", BirthDate = new DateTime(1968, 6, 26), IsAdmin = true });
			persons.Add(new Person { PersonID = 2, Name = "Sara", BirthDate = new DateTime(1974, 9, 13) });
			persons.Add(new Person { PersonID = 3, Name = "Peter", BirthDate = new DateTime(1976, 4, 20), IsAdmin = true });
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

		[AcceptVerbs(HttpVerbs.Post)]
		public ActionResult UpdatePersons([DataSourceRequest] DataSourceRequest request, [Bind(Prefix = "models")] IEnumerable<Person> updated)
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
	}
}