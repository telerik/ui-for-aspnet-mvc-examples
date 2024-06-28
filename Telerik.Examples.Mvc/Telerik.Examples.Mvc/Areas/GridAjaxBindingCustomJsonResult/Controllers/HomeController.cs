using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridAjaxBindingCustomJsonResult.Models;
using Telerik.Examples.Mvc.Areas.GridAjaxBindingCustomJsonResult.Serialization;

namespace Telerik.Examples.Mvc.Areas.GridAjaxBindingCustomJsonResult.Controllers
{
    public class HomeController : Controller
    {
        private static List<Product> products = new List<Product>();
        private static int id;

        static HomeController()
        {
            // create some large data
            for (id = 1; id < 100000; id++)
            {
                products.Add(new Product()
                {
                    ID = id,
                    Name = "Product" + id
                });
            }
        }

        // GET: GridAjaxBindingCustomJsonResult/Home
        public ActionResult Index()
        {
            return View();
        }

        protected override JsonResult Json(object data, string contentType,
                      Encoding contentEncoding, JsonRequestBehavior behavior)
        {
            return new CustomJsonResult
            {
                Data = data,
                ContentType = contentType,
                ContentEncoding = contentEncoding,
                JsonRequestBehavior = behavior
            };
        }

        public ActionResult Read([DataSourceRequest] DataSourceRequest request)
        {
            return Json(products.ToDataSourceResult(request));
        }

        public ActionResult LocalData()
        {
            return View(products);
        }
    }
}