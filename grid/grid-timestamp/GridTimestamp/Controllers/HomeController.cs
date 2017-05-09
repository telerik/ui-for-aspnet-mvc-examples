using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using GridTimestamp.Models;
using System.Data;
namespace GridTimestamp.Controllers
{
    public class HomeController : Controller
    {
        private ProductContext context = new ProductContext();
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }

        public ActionResult Read([DataSourceRequest] DataSourceRequest request)
        {
            return Json(context.Products.ToDataSourceResult(request));
        }

        public ActionResult Update(Product product)
        {
            if (ModelState.IsValid)
            {
                context.Products.Attach(product);
                context.Entry(product).State = EntityState.Modified;
                context.SaveChanges();
            }

            return Json(new []{ product}.ToDataSourceResult(new DataSourceRequest(), ModelState));
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

		public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
