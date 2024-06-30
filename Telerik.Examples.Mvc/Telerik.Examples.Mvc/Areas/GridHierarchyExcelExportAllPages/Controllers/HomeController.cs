using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridExcelExportColumnTemplate.Models;
using Telerik.Examples.Mvc.Areas.GridHierarchyExcelExportAllPages.Models;

namespace Telerik.Examples.Mvc.Areas.GridHierarchyExcelExportAllPages.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }

        public ActionResult OnlyCurrentPage()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }

        public ActionResult Employees([DataSourceRequest] DataSourceRequest request)
        {
            using (var northwind = new GridHierarchyExcelExportAllPagesEntities())
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

        public ActionResult Orders([DataSourceRequest] DataSourceRequest request, int? employeeID)
        {
            using (var northwind = new GridHierarchyExcelExportAllPagesEntities())
            {
                IQueryable<GridHierarchyExcelExportAllPagesOrder> Orders = northwind.Orders;

                if (employeeID != null)
                {
                    Orders = Orders.Where(order => order.EmployeeID == employeeID);
                }

                return Json(Orders.ToDataSourceResult(request, o => new OrderViewModel
                {
                    EmployeeID = o.EmployeeID,
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