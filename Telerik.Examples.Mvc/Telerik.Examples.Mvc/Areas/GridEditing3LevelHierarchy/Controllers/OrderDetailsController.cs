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
    }
}