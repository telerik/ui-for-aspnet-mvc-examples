using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KendoUIMVC5.Models;
using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
namespace KendoUIMVC5.Controllers
{
    public class HomeController : Controller
    {
        private static List<Product> products = new List<Product>();
        private static int id;
        static HomeController()
        {
            for (id = 1; id < 10; id++)
            {
                products.Add(new Product()
                    {
                        ID = id,
                        Name = "Product" + id,
                        Category = Category.Beverages
                    });
            }
        }

        public ActionResult Index()
        {
            return View();
        }


        public ActionResult Read([DataSourceRequest]DataSourceRequest request)
        {
            return Json(products.ToDataSourceResult(request));
        }

        public ActionResult Update([DataSourceRequest] DataSourceRequest request, IEnumerable<Product> models)
        {
            if (products != null && ModelState.IsValid)
            {
                foreach (var product in models)
                {
                    var target = products.FirstOrDefault(p => p.ID == product.ID);
                    if (target != null)
                    {
                        target.Name = product.Name;
                        target.Category = product.Category;
                    }
                }
            }

            return Json(ModelState.ToDataSourceResult());
        }

        public ActionResult Create([DataSourceRequest] DataSourceRequest request, IEnumerable<Product> models)
        {
            var results = new List<Product>();

            if (products != null && ModelState.IsValid)
            {
                foreach (var product in models)
                {

                    product.ID = id++;
                    products.Add(product);
                    results.Add(product);
                }
            }

            return Json(results.ToDataSourceResult(request, ModelState));
        }

    }
}
