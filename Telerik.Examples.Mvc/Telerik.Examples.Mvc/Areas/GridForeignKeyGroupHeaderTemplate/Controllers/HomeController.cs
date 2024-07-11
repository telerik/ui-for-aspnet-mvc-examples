using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridForeignKeyGroupHeaderTemplate.Models;

namespace Telerik.Examples.Mvc.Areas.GridForeignKeyGroupHeaderTemplate.Controllers
{
    public class HomeController : Controller
    {
        public static List<Order> orderList = new List<Order> {
                new Order {OrderID = 1, OrderDate = new DateTime(2012,8,1), EmployeeId = 1, OrderDescription = "Order Food" },
                new Order {OrderID = 2, OrderDate = new DateTime(2012,8,1), EmployeeId = 2, OrderDescription = "Order Office Materials" },
                new Order {OrderID = 3, OrderDate = new DateTime(2012,8,2), EmployeeId = 1, OrderDescription = "Order Production Materials" },
                new Order {OrderID = 4, OrderDate = new DateTime(2012,8,3), EmployeeId = 4, OrderDescription = "Order Food" },
                new Order {OrderID = 5, OrderDate = new DateTime(2012,8,4), EmployeeId = 3, OrderDescription = "Order Production Materials" },
                new Order {OrderID = 3, OrderDate = new DateTime(2012,8,5), EmployeeId = 3, OrderDescription = "Order Production Materials" },
                new Order {OrderID = 4, OrderDate = new DateTime(2012,8,5), EmployeeId = 4, OrderDescription = "Order Food" },
                new Order {OrderID = 1, OrderDate = new DateTime(2012,8,6), EmployeeId = 1, OrderDescription = "Order Food" },
                new Order {OrderID = 2, OrderDate = new DateTime(2012,8,6), EmployeeId = 1, OrderDescription = "Order Office Materials" },
                new Order {OrderID = 5, OrderDate = new DateTime(2012,8,7), EmployeeId = 2, OrderDescription = "Order Production Materials" },
            };

        public static List<Employee> employeeList = new List<Employee> {
            new Employee {EmployeeId = 1, Name = "Anrew"},
            new Employee {EmployeeId = 2, Name = "John"},
            new Employee {EmployeeId = 3, Name = "Peter"},
            new Employee {EmployeeId = 4, Name = "Ivan"},
            new Employee {EmployeeId = 5, Name = "Nancy"},
        };

        public ActionResult Index()
        {
            ViewData["employees"] = employeeList.Select(e => new {
                EmployeeId = e.EmployeeId,
                Name = e.Name
            });

            return View();
        }

        public ActionResult ForeignKeyColumn_Read([DataSourceRequest] DataSourceRequest request)
        {
            var allOrders = from orders in orderList
                            select new Order
                            {
                                OrderID = orders.OrderID,
                                OrderDate = orders.OrderDate,
                                EmployeeId = orders.EmployeeId,
                                OrderDescription = orders.OrderDescription
                            };

            return Json(allOrders.ToDataSourceResult(request));
        }

        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult ForeignKeyColumn_Update([DataSourceRequest] DataSourceRequest request, [Bind(Prefix = "models")] IEnumerable<Order> orders)
        {
            if (orders != null && ModelState.IsValid)
            {
                foreach (var order in orders)
                {
                    var target = orderList.Where(o => o.OrderID == order.OrderID).FirstOrDefault();

                    if (target != null)
                    {
                        target.OrderDate = order.OrderDate;
                        target.OrderID = order.OrderID;
                        target.EmployeeId = order.EmployeeId;
                        target.OrderDescription = order.OrderDescription;
                    }
                }
            }

            return Json(ModelState.ToDataSourceResult());
        }
    }
}