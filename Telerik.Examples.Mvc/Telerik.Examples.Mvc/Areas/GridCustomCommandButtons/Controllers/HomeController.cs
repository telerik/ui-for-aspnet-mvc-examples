using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridCustomCommandButtons.Models;

namespace Telerik.Examples.Mvc.Areas.GridCustomCommandButtons.Controllers
{
    public class HomeController : Controller
    {
        // GET: GridEditingInLineColorSelection/Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Read([DataSourceRequest] DataSourceRequest request)
        {

            return Json(OrderRepository.GetAll().ToDataSourceResult(request));
        }

        public ActionResult Delete([DataSourceRequest] DataSourceRequest request, OrderViewModel order)
        {
            if (order != null && ModelState.IsValid)
            {
                OrderRepository.Remove(order);
            }

            return Json(ModelState.ToDataSourceResult());
        }

        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult Update([DataSourceRequest] DataSourceRequest request, OrderViewModel order)
        {
            if (order != null && ModelState.IsValid)
            {
                OrderRepository.Update(order);
            }

            return Json(ModelState.ToDataSourceResult());
        }

        public ActionResult Create([DataSourceRequest] DataSourceRequest request, OrderViewModel order)
        {
            OrderRepository.Insert(order);
            return Json(new[] { order }.ToDataSourceResult(request, ModelState));
        }
    }
}