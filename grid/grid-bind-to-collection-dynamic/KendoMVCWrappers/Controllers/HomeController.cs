using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Kendo.Mvc.UI;
using KendoMVCWrappers.Models;
using Kendo.Mvc.Extensions;

namespace KendoMVCWrappers.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Modify this template to kick-start your ASP.NET MVC application.";

            return View();
        }

        public ActionResult Read([DataSourceRequest] DataSourceRequest request)
        {
            return GetView(request);
        }

        [HttpPost]
        public ActionResult Create([DataSourceRequest] DataSourceRequest request)
        {
            using (var db = new NwEntities())
            {
                var product = new Product();
                if (TryUpdateModel(product, includeProperties: new string[] { "ProductName", "UnitPrice", "QuantityPerUnit" }))
                {
                    db.Products.AddObject(product);
                    db.SaveChanges();
                }
                return Json(new []{product}.ToDataSourceResult(request));
            }
            
        }

        [HttpPost]
        public ActionResult Update([DataSourceRequest] DataSourceRequest request, int productId)
        {
            using (var db = new NwEntities())
            {
                var productToUpdate = db.Products.First(p => p.ProductID == productId);

                if (TryUpdateModel(productToUpdate, includeProperties: new string[] { "ProductName", "UnitPrice", "QuantityPerUnit" }))
                {
                    db.SaveChanges();
                }
            }
            return Json(ModelState.ToDataSourceResult());
        }

        [HttpPost]
        public ActionResult Destroy([DataSourceRequest] DataSourceRequest request, int productId)
        {
            using (var db = new NwEntities())
            {
                db.Products.DeleteObject(db.Products.First(p => p.ProductID == productId));
                db.SaveChanges();
            }
            return Json(ModelState.ToDataSourceResult());
        }

        private IEnumerable<dynamic> GetData()
        {
            var db = new NwEntities();
            return db.Products;
        }

        private JsonResult GetView(DataSourceRequest request)
        {
            return Json(GetData().ToDataSourceResult(request));
        }


        public ActionResult About()
        {
            ViewBag.Message = "Your quintessential app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your quintessential contact page.";

            return View();
        }
    }
}
