using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridRowsBackgroundConditional.Models;

namespace Telerik.Examples.Mvc.Areas.GridRowsBackgroundConditional.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Employees_Read([DataSourceRequest] DataSourceRequest request)
        {
            var employees = Enumerable.Range(1, 100).Select(i => new EmployeeViewModel
            {
                EmployeeId = i,
                FirstName = "Employee" + i,
                LastName = "LastName" + i,
                Address = i + " Street"
            });

            return Json(employees.ToDataSourceResult(request));
        }
    }
}