﻿using Telerik.Examples.Mvc.Areas.GridMasterDetail.Models;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridMasterDetail.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Categories_Read([DataSourceRequest] DataSourceRequest request)
        {
            using (var northwind = new GridMasterDetailEntities())
            {
                IQueryable<GridMasterDetailCategory> categories = northwind.Categories;
                // Flatten the Category to avoid circular references during JSON serialization
                DataSourceResult result = categories.ToDataSourceResult(request, category => new
                {
                    category.CategoryID,
                    category.CategoryName
                });
                return Json(result);
            }
        }

        public ActionResult Products_Read([DataSourceRequest] DataSourceRequest request, int categoryId)
        {
            using (var northwind = new GridMasterDetailEntities())
            {
                IQueryable<GridMasterDetailProduct> products = northwind.Products.Where(product => product.CategoryID == categoryId);
                // Flatten the Product to avoid circular references during JSON serialization
                DataSourceResult result = products.ToDataSourceResult(request, product => new
                {
                    product.ProductID,
                    product.ProductName
                });
                return Json(result);
            }
        }
    }
}