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
    public class OrdersController : BaseController
    {
        public ActionResult Read_Orders([DataSourceRequest] DataSourceRequest request, int id)
        {
            return Json(context.Orders.Where(o => o.EmployeeID == id).ToDataSourceResult(request, o => new OrderViewModel()
            {
                OrderID = o.OrderID,
                ShipAddress = o.ShipAddress,
                ShipCountry = o.ShipCountry,
                ShipName = o.ShipName,
                ShippedDate = o.ShippedDate
            }));
        }

        public ActionResult Update_Order(OrderViewModel order)
        {
            if (order != null && ModelState.IsValid)
            {
                var target = GetOrderByID(order.OrderID);
                target.ShipAddress = order.ShipAddress;                
                target.ShipCountry = order.ShipCountry;
                target.ShipName = order.ShipName;
                target.ShippedDate = order.ShippedDate;
                context.SaveChanges();
            }

            return Json(ModelState.ToDataSourceResult());
        }

        public ActionResult Create_Order(OrderViewModel order, int id)
        {
            if (id == 0)
            {
                ModelState.AddModelError("employeeID", "add employee first");
            }
            if (order != null && ModelState.IsValid)
            {
                var target = new Order();
                target.ShipAddress = order.ShipAddress;                
                target.ShipCountry = order.ShipCountry;
                target.ShipName = order.ShipName;
                target.ShippedDate = order.ShippedDate;
                target.EmployeeID = id;
                context.Orders.AddObject(target);
                context.SaveChanges();

                order.OrderID = target.OrderID;
            }

            return Json(new[] { order }.ToDataSourceResult(new DataSourceRequest(), ModelState));
        }


        public ActionResult Destroy_Order(int orderID)
        {
            var target = GetOrderByID(orderID);
            context.Orders.DeleteObject(target);
            context.SaveChanges();            

            return Json(ModelState.ToDataSourceResult());
        }


        private Order GetOrderByID(int id)
        {
            return context.Orders.FirstOrDefault(o => o.OrderID == id);
        }

    }
}
