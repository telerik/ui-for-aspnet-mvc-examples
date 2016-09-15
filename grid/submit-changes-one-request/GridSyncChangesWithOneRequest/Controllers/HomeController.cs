using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using GridSyncChangesWithOneRequest.Models;
using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;

namespace GridSyncChangesWithOneRequest.Controllers
{
    public class HomeController : Controller
    {
        public static List<Order> orderList = new List<Order> { 
                new Order {OrderID = 1, OrderDate = new DateTime(2012,8,1), EmployeeID = 1, OrderDescription = "Order Food" },
                new Order {OrderID = 2, OrderDate = new DateTime(2012,8,1), EmployeeID = 2, OrderDescription = "Order Office Materials" },
                new Order {OrderID = 3, OrderDate = new DateTime(2012,8,2), EmployeeID = 1, OrderDescription = "Order Production Materials" },
                new Order {OrderID = 4, OrderDate = new DateTime(2012,8,3), EmployeeID = 4, OrderDescription = "Order Food" },
                new Order {OrderID = 5, OrderDate = new DateTime(2012,8,4), EmployeeID = 3, OrderDescription = "Order Production Materials" },
                new Order {OrderID = 6, OrderDate = new DateTime(2012,8,5), EmployeeID = 3, OrderDescription = "Order Production Materials" },
                new Order {OrderID = 7, OrderDate = new DateTime(2012,8,5), EmployeeID = 4, OrderDescription = "Order Food" },
                new Order {OrderID = 8, OrderDate = new DateTime(2012,8,6), EmployeeID = 1, OrderDescription = "Order Food" },
                new Order {OrderID = 9, OrderDate = new DateTime(2012,8,6), EmployeeID = 1, OrderDescription = "Order Office Materials" },
                new Order {OrderID = 10, OrderDate = new DateTime(2012,8,7), EmployeeID = 2, OrderDescription = "Order Production Materials" },
            };

        public static List<Employee> employeeList = new List<Employee> { 
            new Employee {EmployeeID = 1, Name = "Anrew"},
            new Employee {EmployeeID = 2, Name = "John"},
            new Employee {EmployeeID = 3, Name = "Peter"},
            new Employee {EmployeeID = 4, Name = "Ivan"},
            new Employee {EmployeeID = 5, Name = "Nancy"},
        };

        public ActionResult Index()
        {
            ViewData["employees"] = employeeList.Select(e => new  {
                            EmployeeID = e.EmployeeID,
                            Name = e.Name
                        });

            return View();
        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult Read([DataSourceRequest] DataSourceRequest request)
        {
            var allOrders = from orders in orderList
                         select new Order{
                            OrderID = orders.OrderID,
                            OrderDate = orders.OrderDate,
                            EmployeeID = orders.EmployeeID,
                            OrderDescription = orders.OrderDescription
                         };

            return Json(allOrders.ToDataSourceResult(request));
        }

        public ActionResult Delete([DataSourceRequest] DataSourceRequest request, Order order)
        {
            if (order != null && ModelState.IsValid)
            {
                var target = orderList.Where(o => o.OrderID == order.OrderID).FirstOrDefault();

                if (target != null)
                {
                    orderList.Remove(target);
                }
            }

            return Json(ModelState.ToDataSourceResult());
        }

        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult Update([DataSourceRequest] DataSourceRequest request, Order order)
        {
            if (order != null && ModelState.IsValid)
            {
                
                var target = orderList.Where(o => o.OrderID == order.OrderID).FirstOrDefault();

                if (target != null)
                {
                    int targetIndex = orderList.IndexOf(target);
                    orderList[targetIndex].OrderDate = order.OrderDate;
                    orderList[targetIndex].EmployeeID = order.EmployeeID;
                    orderList[targetIndex].OrderDescription = order.OrderDescription;
                }
            }

            return Json(ModelState.ToDataSourceResult());
        }

        public ActionResult Create([DataSourceRequest] DataSourceRequest request, Order order)
        {
                order.OrderID = orderList[orderList.Count - 1].OrderID + 1;
                orderList.Add(order);
            
                return Json(new[] { order }.ToDataSourceResult(request, ModelState));
        }

        public ActionResult UpdateCreateDelete(
            [Bind(Prefix = "updated")]List<Order> updatedOrders,
            [Bind(Prefix = "new")]List<Order> newOrders,
            [Bind(Prefix = "deleted")]List<Order> deletedOrders)
        {
            if (updatedOrders != null && updatedOrders.Count > 0)
            {
                for (int i = 0; i < updatedOrders.Count; i++)
                {
                    var target = orderList.Where(o => o.OrderID == updatedOrders[i].OrderID).FirstOrDefault();

                    if (target != null)
                    {
                        int targetIndex = orderList.IndexOf(target);
                        orderList[targetIndex].OrderDate = updatedOrders[i].OrderDate;
                        orderList[targetIndex].EmployeeID = updatedOrders[i].EmployeeID;
                        orderList[targetIndex].OrderDescription = updatedOrders[i].OrderDescription;
                    }
                }
            }

            if (newOrders != null && newOrders.Count > 0)
            {
                for (int i = 0; i < newOrders.Count; i++)
                {
                    newOrders[i].OrderID = orderList[orderList.Count - 1].OrderID + 1;
                    orderList.Add(newOrders[i]);
                }
                
            }

            if (deletedOrders != null && deletedOrders.Count > 0)
            {
                for (int i = 0; i < deletedOrders.Count; i++)
                {
                    var target = orderList.Where(o => o.OrderID == deletedOrders[i].OrderID).FirstOrDefault();

                    if (target != null)
                    {
                        orderList.Remove(target);
                    }
                }
            }

            return Json("Success!");
        }
    }
}
