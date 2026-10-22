using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridForeignKeySorting.Models;
using ProductModel = Telerik.Examples.Mvc.Areas.GridForeignKeySorting.Models.Product;

namespace Telerik.Examples.Mvc.Areas.GridForeignKeySorting.Controllers
{
    public class HomeController : Controller
    {
        static List<ProductModel> products = new List<ProductModel>();
        static List<Category> categories = new List<Category>();
        static HomeController()
        {
            for (int i = 1; i < 5; i++)
            {
                categories.Add(new Category
                {
                    CategoryID = 5 - i,
                    CategoryName = "category" + i
                });
            }

            for (int i = 1; i < 10; i++)
            {
                products.Add(new ProductModel
                {
                    ProductID = i,
                    ProductName = "product" + i,
                    CategoryID = categories[i % categories.Count].CategoryID,
                    CategoryName = categories[i % categories.Count].CategoryName
                });
            }
        }

        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";
            ViewData["categories"] = categories;
            return View();
        }

        public ActionResult Read([DataSourceRequest] DataSourceRequest request)
        {
            return Json(products.ToDataSourceResult(request));
        }

        public ActionResult Update(ProductModel product)
        {
            return Json(ModelState.ToDataSourceResult());
        }
    }
}