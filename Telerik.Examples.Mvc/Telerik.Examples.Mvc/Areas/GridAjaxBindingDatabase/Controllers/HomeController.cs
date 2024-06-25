using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridAjaxBindingDatabase.Models;

namespace Telerik.Examples.Mvc.Areas.GridAjaxBindingDatabase.Controllers
{
    public class HomeController : Controller
    {
        // GET: GridAjaxBindingDatabase/Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Products_Read([DataSourceRequest] DataSourceRequest request)
        {
            using (var sample = new SampleEntities())
            {
                IQueryable<Product> products = sample.Products;
                DataSourceResult result = products.ToDataSourceResult(request);
                return Json(result);
            }
        }
    }
}