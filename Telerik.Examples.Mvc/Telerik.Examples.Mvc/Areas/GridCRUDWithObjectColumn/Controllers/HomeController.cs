using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridCRUDWithObjectColumn.Models;
using ProductModel = Telerik.Examples.Mvc.Areas.GridCRUDWithObjectColumn.Models.Product;

namespace Telerik.Examples.Mvc.Areas.GridCRUDWithObjectColumn.Controllers
{
    public class HomeController : Controller
    {
        private static ICollection<ProductModel> products;
        private static ICollection<Category> categories;

        public HomeController()
        {
            if (products == null)
            {
                var random = new Random();
                products = Enumerable.Range(1, 100).Select(x => new ProductModel
                {
                    Discontinued = x % 2 == 1,
                    ProductID = x,
                    ProductName = "Product " + x,
                    UnitPrice = random.Next(1, 1000),
                    UnitsInStock = random.Next(1, 1000),
                    UnitsOnOrder = random.Next(1, 1000),
                    Category = new Category
                    {
                        CategoryID = x,
                        CategoryName = "Category" + x
                    }

                }).ToList();

                categories = Enumerable.Range(1, 100).Select(x => new Category
                {
                    CategoryID = x,
                    CategoryName = "Category" + x

                }).ToList();
            }
        }
        public ActionResult Index()
        {
            return View();
        }


        public ActionResult Read([DataSourceRequest] DataSourceRequest request)
        {
            return Json(products.ToDataSourceResult(request));
        }

        public ActionResult AllCategories()
        {
            return Json(categories, JsonRequestBehavior.AllowGet);
        }


        [AcceptVerbs("Post")]
        public ActionResult Create([DataSourceRequest] DataSourceRequest request, ProductModel product)
        {
            //save item to database
            return Json(new[] { product }.ToDataSourceResult(request, ModelState));
        }

        [AcceptVerbs("Post")]
        public ActionResult Update([DataSourceRequest] DataSourceRequest request, ProductModel product)
        {
            //save item to database
            products.Add(product);
            return Json(new[] { product }.ToDataSourceResult(request, ModelState));
        }

        [AcceptVerbs("Post")]
        public ActionResult Destroy([DataSourceRequest] DataSourceRequest request, ProductModel product)
        {
            //remove item from database
            products.Remove(product);
            return Json(new[] { product }.ToDataSourceResult(request, ModelState));
        }
    }
}