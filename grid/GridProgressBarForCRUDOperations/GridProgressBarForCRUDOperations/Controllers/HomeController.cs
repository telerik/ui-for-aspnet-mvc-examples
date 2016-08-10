using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ForeignKeyColumnDemo.Models;
using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using System.Threading;
using System.Globalization;

namespace ForeignKeyColumnDemo.Controllers
{
    public class HomeController : Controller
    {
        protected override void Initialize(System.Web.Routing.RequestContext requestContext)
        {
            if (!string.IsNullOrEmpty(requestContext.HttpContext.Request["culture"]))
            {
                Thread.CurrentThread.CurrentCulture = Thread.CurrentThread.CurrentUICulture = new CultureInfo(requestContext.HttpContext.Request["culture"]);
            }
            base.Initialize(requestContext);
        }

        public ActionResult Index()
        {
            ViewData["employees"] = EmployeeRepository.GetAll();

            return View();
        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult Read([DataSourceRequest] DataSourceRequest request)
        {
            return Json(OrderRepository.GetAll().ToDataSourceResult(request));
        }

        public ActionResult Delete([DataSourceRequest] DataSourceRequest request, Order order)
        {
            if (order != null && ModelState.IsValid)
            {
                OrderRepository.Remove(order);
            }

            return Json(ModelState.ToDataSourceResult());
        }

        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult Update([DataSourceRequest] DataSourceRequest request, Order order)
        {
            if (order != null && ModelState.IsValid)
            {
                OrderRepository.Update(order);
            }

            return Json(ModelState.ToDataSourceResult());
        }

        public ActionResult Create([DataSourceRequest] DataSourceRequest request, Order order)
        {
            OrderRepository.Insert(order);
            return Json(new[] { order }.ToDataSourceResult(request, ModelState));
        }
    }
}
