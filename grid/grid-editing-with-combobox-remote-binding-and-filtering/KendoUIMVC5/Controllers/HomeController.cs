using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using KendoUIMVC5.Models;

namespace KendoUIMVC5.Controllers
{
    public class HomeController : Controller
    {
        private static List<Product> products;
        private static List<Category> categories;

        static HomeController()
        {
            categories = Enumerable.Range(1, 10)
                .Select(i => new Category
                {
                    CategoryID = i,
                    CategoryName = "Category" + i
                }).ToList();

            var rand = new Random();

            products = Enumerable.Range(1, 20)
                .Select(i => new Product
                {
                    ProductID = i,
                    ProductName = "Product" + i,
                    Category = categories[rand.Next(9)]
                }).ToList();
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Read([DataSourceRequest]DataSourceRequest request)
        {
            return Json(products.ToDataSourceResult(request));
        }

        public ActionResult Update([DataSourceRequest]DataSourceRequest request, Product product)
        {
            if (product != null && ModelState.IsValid)
            {
                var target = products.First(p => p.ProductID == product.ProductID);
                target.ProductName = product.ProductName;
                target.Category = product.Category;

                //TODO: save the changes
            }

            return Json(new [] { product }.ToDataSourceResult(request));
        }

        //Method is designed to return empty array if no text is sent to the server.
        //This is helpful if you have a great amount of data and want to return only a filtered set.
        public ActionResult _GetCategories(string text)
        {
            var data = new List<Category>();

            if (!string.IsNullOrEmpty(text))
            {
                data = categories.Where(p => p.CategoryName.ToLower().Contains(text.ToLower())).ToList();
            }

            return Json(data, JsonRequestBehavior.AllowGet); 
        }
    }
}
