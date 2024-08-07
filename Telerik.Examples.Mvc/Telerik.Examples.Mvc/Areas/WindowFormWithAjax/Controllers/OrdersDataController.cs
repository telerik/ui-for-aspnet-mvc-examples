using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.WindowFormWithAjax.Helpers;
using Telerik.Examples.Mvc.Areas.WindowFormWithAjax.Models;
using System.IO;
using System.Net;

namespace Telerik.Examples.Mvc.Areas.WindowFormWithAjax.Controllers
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

            return View("../Home/Index");
        }
    }
}