using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridClientDetailTemplate.Models;
using Telerik.SvgIcons;

namespace Telerik.Examples.Mvc.Areas.GridClientDetailTemplate.Controllers
{
    public class HomeController : Controller
    {
        // GET: GridClientDetailTemplate/Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Products_Read([DataSourceRequest] DataSourceRequest request)
        {
            List<GridClientDetailTemplateProduct> products = new List<GridClientDetailTemplateProduct>()
            {
                new GridClientDetailTemplateProduct() { ProductID = 1, ProductName = "Apple", UnitsInStock = 2000, UnitPrice = 5, Discontinued = false },
                new GridClientDetailTemplateProduct() { ProductID = 2, ProductName = "Pear", UnitsInStock = 1000, UnitPrice = 8, Discontinued = false },
                new GridClientDetailTemplateProduct() { ProductID = 3, ProductName = "Beer", UnitsInStock = 300, UnitPrice = 3, Discontinued = false },
                new GridClientDetailTemplateProduct() { ProductID = 4, ProductName = "Milk", UnitsInStock = 0, UnitPrice = 6, Discontinued = true },
                new GridClientDetailTemplateProduct() { ProductID = 5, ProductName = "Banana", UnitsInStock = 600, UnitPrice = 2, Discontinued = false }
            };

            DataSourceResult result = products.ToDataSourceResult(request);
            return Json(result);
        }
    }
}