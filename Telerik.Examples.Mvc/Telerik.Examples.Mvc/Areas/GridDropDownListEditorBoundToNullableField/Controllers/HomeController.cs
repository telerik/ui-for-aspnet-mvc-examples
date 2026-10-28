using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridDropDownListEditorBoundToNullableField.Models;
using ProductModel = Telerik.Examples.Mvc.Areas.GridDropDownListEditorBoundToNullableField.Models.Product;

namespace Telerik.Examples.Mvc.Areas.GridDropDownListEditorBoundToNullableField.Controllers
{
    public class HomeController : Controller
    {
        static List<ProductModel> products = new List<ProductModel>();
        static List<Category> categories = new List<Category>();

        static HomeController()
        {
            categories.Add(new Category
            {
                CategoryID = 1,
                CategoryName = "Beverages"
            });

            categories.Add(new Category
            {
                CategoryID = 2,
                CategoryName = "Condiments"
            });
            products.Add(new ProductModel
            {
                ProductID = 1,
                ProductName = "Chai",
                CategoryID = 1
            });
            products.Add(new ProductModel
            {
                ProductID = 3,
                ProductName = "Aniseed Syrup",
                CategoryID = 2
            });
            products.Add(new ProductModel
            {
                ProductID = 7,
                ProductName = "Uncle Bob's Organic Dried Pears",
                CategoryID = null
            });
        }

        public ActionResult Index()
        {
            ViewData["categories"] = categories;
            return View();
        }

        public ActionResult Read([DataSourceRequest] DataSourceRequest request)
        {
            return Json(products.ToDataSourceResult(request));
        }

        public ActionResult Update(ProductModel product)
        {
            if (product != null && ModelState.IsValid)
            {
                var target = products.First(p => p.ProductID == product.ProductID);
                target.ProductName = product.ProductName;
                target.CategoryID = product.CategoryID;
            }
            return Json(ModelState.ToDataSourceResult());
        }
    }
}