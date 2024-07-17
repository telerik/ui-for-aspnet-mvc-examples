using Telerik.Examples.Mvc.Areas.TreeViewExpandSelectedItemAsync.Models;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.TreeViewExpandSelectedItemAsync.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }

        public JsonResult Employees_Read(int? id)
        {
            using (var northwind = new TreeViewExpandSelectedItemAsyncEntities())
            {
                var employeesQuery = northwind.Employees.Select(c => new HierarchicalViewModel
                {
                    ID = c.EmployeeID,
                    Name = c.FirstName,
                    ParentID = null,
                    HasChildren = c.Orders.Any()
                })
                .Union(northwind.Orders.Select(c => new HierarchicalViewModel
                {
                    ID = c.OrderID,
                    Name = c.ShipAddress,
                    ParentID = c.EmployeeID,
                    HasChildren = c.Order_Details.Any()
                }))
                .Union(northwind.Order_Details.Select(c => new HierarchicalViewModel
                {
                    ID = c.OrderID,
                    Name = c.Product.ProductName,
                    ParentID = c.Order.OrderID,
                    HasChildren = false
                }));

                var result = employeesQuery.ToList()
                 .Where(x => id.HasValue ? x.ParentID == id : x.ParentID == null)
                 .Select(item => new {
                     id = item.ID,
                     Name = item.Name,
                     expanded = item.Expanded,
                     hasChildren = item.HasChildren

                 });

                return Json(result, JsonRequestBehavior.AllowGet);
            }
        }
    }
}