using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridEditingPopUpNestedGrid.Models;

namespace Telerik.Examples.Mvc.Areas.GridEditingPopUpNestedGrid.Controllers
{
    public class HomeController : Controller
    {
        private NorthwindRepository repository = new NorthwindRepository();

        public ActionResult Index()
        {
            ViewData["territories"] = repository.Territories;

            return View();
        }

        public ActionResult Read([DataSourceRequest] DataSourceRequest request)
        {
            return Json(repository.Employees.ToDataSourceResult(request), JsonRequestBehavior.AllowGet);
        }

        public ActionResult Update(EmployeeViewModel employee)
        {
            if (ModelState.IsValid)
            {
                repository.UpdateEmployee(employee);
            }

            return Json(new[] { employee }.ToDataSourceResult(new DataSourceRequest(), ModelState), JsonRequestBehavior.AllowGet);
        }
    }
}