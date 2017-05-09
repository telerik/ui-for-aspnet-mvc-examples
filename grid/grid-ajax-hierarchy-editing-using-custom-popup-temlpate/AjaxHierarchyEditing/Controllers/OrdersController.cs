﻿using System;
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

        public ActionResult Update_Order([Bind(Prefix = "models")]IEnumerable<OrderViewModel> orders)
        {
            if (orders != null && ModelState.IsValid)
            {
                foreach (var order in orders)
                {
                    var target = GetOrderByID(order.OrderID);
                    target.ShipAddress = order.ShipAddress;                
                    target.ShipCountry = order.ShipCountry;
                    target.ShipName = order.ShipName;
                    target.ShippedDate = order.ShippedDate;
                    context.SaveChanges();
                }
            }

            return Json(ModelState.ToDataSourceResult());
        }

        public ActionResult Create_Order([Bind(Prefix = "models")]IEnumerable<OrderViewModel> orders, int id)
        {
            var results = new List<OrderViewModel>();

            if (orders != null && ModelState.IsValid)
            {
                foreach (var order in orders)
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
                    results.Add(order);
                }
            }

            return Json(results.ToDataSourceResult(new DataSourceRequest(), ModelState));
        }


        public ActionResult Destroy_Order([Bind(Prefix = "models")]IEnumerable<OrderViewModel> orders)
        {
            if (orders.Any())
            {
                foreach (var order in orders)
                {
                    var target = GetOrderByID(order.OrderID);
                    context.Orders.DeleteObject(target);
                    context.SaveChanges();   
                }
            }

            return Json(ModelState.ToDataSourceResult());
        }


        private Order GetOrderByID(int id)
        {
            return context.Orders.FirstOrDefault(o => o.OrderID == id);
        }
    }
}
