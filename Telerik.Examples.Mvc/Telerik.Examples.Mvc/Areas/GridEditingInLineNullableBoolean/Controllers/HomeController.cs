using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridEditingInLineNullableBoolean.Models;

namespace Telerik.Examples.Mvc.Areas.GridEditingInLineNullableBoolean.Controllers
{
    public class HomeController : Controller
    {
        // GET: GridEditingInLineNullableBoolean/Home
        public ActionResult Index()
        {
            return View();
        }

        public static IList<InLineEditingProduct> Products
        {
            get;
            set;
        }

        static HomeController()
        {
            var random = new Random();

            Products = Enumerable.Range(0, 20).Select(index => new InLineEditingProduct
            {
                ProductID = index + 1,
                ProductName = "Product " + index,
                UnitsInStock = random.Next(20, 200),
                Available = index % 3 == 0 ? (bool?)null : index % 2 == 0
            }).ToList();
        }


        public ActionResult Read([DataSourceRequest] DataSourceRequest request)
        {
            return Json(Products.ToDataSourceResult(request));
        }

        public ActionResult Update([DataSourceRequest] DataSourceRequest request, InLineEditingProduct product)
        {
            if (ModelState.IsValid)
            {
                var dataItem = Products.Where(p => p.ProductID == product.ProductID).FirstOrDefault();

                dataItem.ProductID = product.ProductID;
                dataItem.ProductName = product.ProductName;
                dataItem.UnitsInStock = product.UnitsInStock;
                dataItem.Available = product.Available;
            }

            // Return the updated entities as well as any validation errors.
            return Json(new[] { product }.ToDataSourceResult(request, ModelState));
        }
    }
}