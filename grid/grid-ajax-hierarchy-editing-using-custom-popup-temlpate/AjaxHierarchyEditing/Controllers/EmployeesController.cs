using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using AjaxHierarchyEditing.Models;
namespace AjaxHierarchyEditing.Controllers
{
    public class EmployeesController : BaseController
    {
        public ActionResult Read_Employees([DataSourceRequest] DataSourceRequest request)
        {
            return Json(context.Employees.ToDataSourceResult(request, e => new EmployeeViewModel
            {
                EmployeeID = e.EmployeeID,
                FirstName = e.FirstName,
                LastName = e.LastName,
                Title = e.Title,
                Country = e.Country,
                City = e.City
            }));
        }

        public ActionResult Update_Employee(EmployeeViewModel employee)
        {
            if (employee != null && ModelState.IsValid)
            {
                var target = GetEmployeeByID(employee.EmployeeID);
                target.FirstName = employee.FirstName;
                target.LastName = employee.LastName;
                target.Title = employee.Title;
                target.Country = employee.Country;
                target.City = employee.City;
                context.SaveChanges();
            }

            return Json(ModelState.ToDataSourceResult());
        }

        public ActionResult Create_Employee(EmployeeViewModel employee)
        {
            if (employee != null && ModelState.IsValid)
            {
                var target = new Employee();
                target.FirstName = employee.FirstName;
                target.LastName = employee.LastName;
                target.Title = employee.Title;
                target.Country = employee.Country;
                target.City = employee.City;
                context.Employees.AddObject(target);
                context.SaveChanges();

                employee.EmployeeID = target.EmployeeID;
            }

            return Json(new[] { employee }.ToDataSourceResult(new DataSourceRequest(), ModelState));
        }


        public ActionResult Destroy_Employee(int employeeID)
        {
            var target = GetEmployeeByID(employeeID);
            context.Employees.DeleteObject(target);
            context.SaveChanges();            

            return Json(ModelState.ToDataSourceResult());
        }


        private Employee GetEmployeeByID(int id)
        {
            return context.Employees.FirstOrDefault(e => e.EmployeeID == id);
        }

    }
}
