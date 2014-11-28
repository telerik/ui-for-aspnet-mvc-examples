using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using KendoGridAjaxBinding.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KendoGridAjaxBinding.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }

        public ActionResult Products_Read([DataSourceRequest]DataSourceRequest request)
        {
            using (var northwind = new NorthwindEntities())
            {
                IQueryable<Product> products = northwind.Products;
                // Convert the Product entities to ProductViewModel instances
                DataSourceResult result = products.ToDataSourceResult(request, product => new ProductViewModel
                {
                    ProductID = product.ProductID,
                    ProductName = product.ProductName,
                    UnitsInStock = product.UnitsInStock
                });
                return Json(result);
            }
        }
    }
}
