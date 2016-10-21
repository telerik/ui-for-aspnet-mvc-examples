using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KendoWindow_Ajax_Form.Helpers;
using KendoWindow_Ajax_Form.Models;
using System.IO;
using System.Net;

namespace KendoWindow_Ajax_Form.Controllers
{
    public class OrdersDataController : Controller
    {
        // GET: OrdersData
        public ActionResult GetOrders([DataSourceRequest]DataSourceRequest request)
        {
            var result = OrdersBinderHelper.RetrunListOfOrders();
            return Json(result.ToDataSourceResult(request), JsonRequestBehavior.AllowGet);
        }

        
        public ActionResult Create(OrderViewModel model)
        {
            if (ModelState.IsValid)
            {
                OrdersBinderHelper.AddOrder(model);
            }

            return PartialView("_OrderCreate", model);
        }
    }
}