using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using KendoUIMVC5.ViewModels;
using KendoUIMVC5;

namespace CustomStylesOnDataBound.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Employees_Read([DataSourceRequest] DataSourceRequest request)
        {
            Northwind db = new Northwind();
            var employees = db.Employees.Select(x => new EmployeeViewModel()
            {
                EmployeeId = x.EmployeeID,
                FirstName = x.FirstName,
                LastName = x.LastName,
                Address = x.Address,
            });

            return Json(employees.ToDataSourceResult(request));
        }

        public ActionResult About()
        {
            return View();
        }
    }
}
