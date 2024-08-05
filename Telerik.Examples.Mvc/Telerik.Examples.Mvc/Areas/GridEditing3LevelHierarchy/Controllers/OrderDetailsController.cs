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
    public class OrderDetailsController : BaseController
    {
        public ActionResult Read_OrderDetails([DataSourceRequest] DataSourceRequest request, int id)
        {
            return Json(context.Order_Details.Where(o => o.OrderID == id).ToDataSourceResult(request, o => new GridEditing3LevelHierarchyOrder_Detail
            {
                Quantity = o.Quantity,
                UnitPrice = o.UnitPrice,
                Discount = o.Discount,
                ProductID = o.ProductID,
                OrderID = o.OrderID,
            }));
        }
        public ActionResult Update_Order_Detail(GridEditing3LevelHierarchyOrder_Detail o)
        {
            if (o != null && ModelState.IsValid)
            {
                var target = GetOrderDetailByID(o.OrderID);
                target.Quantity = o.Quantity;
                target.UnitPrice = o.UnitPrice;
                target.Discount = o.Discount;
                target.ProductID = o.ProductID;
                context.Order_Details.Attach(target);
                // Change its state to Modified so Entity Framework can update the existing record instead of creating a new one
                context.Entry(target).State = EntityState.Modified;
                context.SaveChanges();
            }

            return Json(ModelState.ToDataSourceResult());
        }
        public ActionResult Create_Order_Detail(GridEditing3LevelHierarchyOrder_Detail o, int id)
        {
            if (id == 0)
            {
                ModelState.AddModelError("orderID", "add order first");
            }
            if (o != null && ModelState.IsValid)
            {
                var target = new GridEditing3LevelHierarchyOrder_Detail();
                target.Quantity = o.Quantity;
                target.UnitPrice = o.UnitPrice;
                target.Discount = o.Discount;
                target.ProductID = o.ProductID;
                target.OrderID= id;
                context.Order_Details.Add(target);
                context.SaveChanges();

                o.OrderID = target.OrderID;
            }

            return Json(new[] { o }.ToDataSourceResult(new DataSourceRequest(), ModelState));
        }


        public ActionResult Destroy_Order_Detail(int orderID)
        {
            var target = GetOrderDetailByID(orderID);
            context.Order_Details.Attach(target);
            context.Order_Details.Remove(target);
            context.SaveChanges();

            return Json(ModelState.ToDataSourceResult());
        }
        private GridEditing3LevelHierarchyOrder_Detail GetOrderDetailByID(int id)
        {
            return context.Order_Details.FirstOrDefault(o => o.OrderID == id);
        }
    }
}