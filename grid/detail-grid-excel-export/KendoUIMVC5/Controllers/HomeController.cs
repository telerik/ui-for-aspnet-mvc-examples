using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using KendoUIMVC5.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KendoUIMVC5.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }

        public ActionResult Employees([DataSourceRequest] DataSourceRequest request)
        {
            using (var northwind = new NorthwindEntities())
            {
                return Json(northwind.Employees.ToDataSourceResult(request, e => new EmployeeViewModel
                    {
                        EmployeeID = e.EmployeeID,
                        FirstName = e.FirstName,
                        LastName = e.LastName,
                        Country = e.Country,
                        City = e.City,
                        Title = e.Title
                    }));
            }
        }

        public ActionResult Orders(int employeeID, [DataSourceRequest] DataSourceRequest request)
        {
            using (var northwind = new NorthwindEntities())
            {
                return Json(northwind.Orders
                                     .Where(order => order.EmployeeID == employeeID)
                                     .ToDataSourceResult(request, o => new OrderViewModel
                                     {
                                         OrderID = o.OrderID,
                                         ShipCountry = o.ShipCountry,
                                         ShipAddress = o.ShipAddress,
                                         ShipName = o.ShipName
                                     })
                );
            }
        } 
    }
}
