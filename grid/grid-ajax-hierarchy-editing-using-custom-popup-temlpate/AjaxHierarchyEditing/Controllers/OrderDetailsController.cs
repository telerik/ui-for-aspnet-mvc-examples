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
    public class OrderDetailsController : BaseController
    {
        public ActionResult Read_OrderDetails([DataSourceRequest] DataSourceRequest request, int id)
        {
            return Json(context.Order_Details.Where(o => o.OrderID == id).ToDataSourceResult(request, o => new OrderDetailViewModel
            {
                Quantity = o.Quantity,
                UnitPrice = o.UnitPrice,
                Discount = o.Discount,
                ProductID = o.ProductID,
                OrderID = o.OrderID,
                UIID = o.OrderID.ToString() + o.ProductID
            }));
        }

        public ActionResult Update_OrderDetail(OrderDetailViewModel order)
        {
            if (order != null && ModelState.IsValid)
            {
                var target = GetOrderDetailByIDs(order.ProductID, order.OrderID);
                target.Discount = order.Discount;
                target.UnitPrice= order.UnitPrice;                
                target.Quantity = order.Quantity;
                
                context.SaveChanges();
            }

            return Json(ModelState.ToDataSourceResult());
        }

        public ActionResult Create_OrderDetail(OrderDetailViewModel orderDetail, int id)
        {
            if (orderDetail != null && ModelState.IsValid)
            {
                var target = new Order_Detail();
                target.OrderID = id;
                target.ProductID = orderDetail.ProductID;
                target.Quantity = orderDetail.Quantity;
                target.UnitPrice = orderDetail.UnitPrice;                
                context.Order_Details.AddObject(target);
                context.SaveChanges();

                orderDetail.UIID = id.ToString() + target.ProductID;
            }

            return Json(new[] { orderDetail }.ToDataSourceResult(new DataSourceRequest(), ModelState));
        }


        public ActionResult Destroy_OrderDetail(OrderDetailViewModel orderDetail)
        {
            if (orderDetail != null)
            {
                var target = GetOrderDetailByIDs(orderDetail.ProductID, orderDetail.OrderID);
                context.Order_Details.DeleteObject(target);
                context.SaveChanges();
            }

            return Json(ModelState.ToDataSourceResult());
        }


        private Order_Detail GetOrderDetailByIDs(int productID, int orderID)
        {
            return context.Order_Details.FirstOrDefault(o => o.ProductID == productID && o.OrderID == orderID);
        }
    }
}
