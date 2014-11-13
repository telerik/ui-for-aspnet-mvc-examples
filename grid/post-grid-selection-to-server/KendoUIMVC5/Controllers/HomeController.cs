using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using KendoUIMVC5;

namespace CustomStylesOnDataBound.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(int[] productID)
        {
            using (var northwind = new Northwind())
            {
                if (productID != null)
                {
                    var selectedProducts = (from product in northwind.Products
                                            where productID.Contains(product.ProductID)
                                            select product).ToList();

                    ViewData["SelectedProducts"] = selectedProducts;
                }

                return View();
            }
        }

        public ActionResult Read([DataSourceRequest]DataSourceRequest request)
        {
            using (var northwind = new Northwind())
            {
                return Json(northwind.Products.ToDataSourceResult(request, select=> new {select.ProductID, select.ProductName, select.UnitPrice, select.UnitsInStock}));
            }
        }
    }
}
