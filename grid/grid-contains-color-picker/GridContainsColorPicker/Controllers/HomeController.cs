using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using GridContainsColorPicker.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data;

namespace GridContainsColorPicker.Controllers
{
    public class HomeController : Controller
    {

        public ActionResult Index()
        {
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

        public ActionResult Delete([DataSourceRequest] DataSourceRequest request, PaintOrder order)
        {
            if (order != null && ModelState.IsValid)
            {
                OrderRepository.Remove(order);
            }

            return Json(ModelState.ToDataSourceResult());
        }

        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult Update([DataSourceRequest] DataSourceRequest request, PaintOrder order)
        {
            if (order != null && ModelState.IsValid)
            {
                OrderRepository.Update(order);
            }

            return Json(ModelState.ToDataSourceResult());
        }

        public ActionResult Create([DataSourceRequest] DataSourceRequest request, PaintOrder order)
        {
            OrderRepository.Insert(order);
            return Json(new[] { order }.ToDataSourceResult(request, ModelState));
        }
    }
}
