using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridEditing3LevelHierarchy.Models;

namespace Telerik.Examples.Mvc.Areas.GridEditing3LevelHierarchy.Controllers
{
    public class OrdersController : BaseController
    {
        public ActionResult Read_Orders([DataSourceRequest] DataSourceRequest request, int id)
        {
            return Json(context.Orders.Where(o => o.EmployeeID == id).ToDataSourceResult(request, o => new GridEditing3LevelHierarchyOrder()
            {
                OrderID = o.OrderID,
                ShipAddress = o.ShipAddress,
                ShipCountry = o.ShipCountry,
                ShipName = o.ShipName,
                ShippedDate = o.ShippedDate
            }));
        }

        public ActionResult Update_Order(GridEditing3LevelHierarchyOrder order)
        {
            if (order != null && ModelState.IsValid)
            {
                var target = GetOrderByID(order.OrderID);
                target.ShipAddress = order.ShipAddress;
                target.ShipCountry = order.ShipCountry;
                target.ShipName = order.ShipName;
                target.ShippedDate = order.ShippedDate;
                context.Orders.Attach(target);
                // Change its state to Modified so Entity Framework can update the existing record instead of creating a new one
                context.Entry(target).State = EntityState.Modified;
                context.SaveChanges();
            }

            return Json(ModelState.ToDataSourceResult());
        }

        public ActionResult Create_Order(GridEditing3LevelHierarchyOrder order, int id)
        {
            if (id == 0)
            {
                ModelState.AddModelError("employeeID", "add employee first");
            }
            if (order != null && ModelState.IsValid)
            {
                var target = new GridEditing3LevelHierarchyOrder();
                target.ShipAddress = order.ShipAddress;
                target.ShipCountry = order.ShipCountry;
                target.ShipName = order.ShipName;
                target.ShippedDate = order.ShippedDate;
                target.EmployeeID = id;
                context.Orders.Add(target);
                context.SaveChanges();

                order.OrderID = target.OrderID;
            }

            return Json(new[] { order }.ToDataSourceResult(new DataSourceRequest(), ModelState));
        }


        public ActionResult Destroy_Order(int orderID)
        {
            var target = GetOrderByID(orderID);
            context.Orders.Attach(target);
            context.Orders.Remove(target);
            context.SaveChanges();

            return Json(ModelState.ToDataSourceResult());
        }


        private GridEditing3LevelHierarchyOrder GetOrderByID(int id)
        {
            return context.Orders.FirstOrDefault(o => o.OrderID == id);
        }
    }
}