using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridAlternatingRows.Models;
using Telerik.Examples.Mvc.Areas.GridCheckboxClientTemplate.Models;
using Telerik.SvgIcons;

namespace Telerik.Examples.Mvc.Areas.GridCheckboxClientTemplate.Controllers
{
    public class HomeController : Controller
    {
        public static ICollection<ProductViewModel> products = new List<ProductViewModel>();

        public HomeController()
        {
            var productNames = new List<string> { "Chai", "Chang", "Aniseed Syrup", "Chef Anton's Cajun Seasoning", "Chocolade" };
            var random = new Random();
            if (products.Count == 0)
            {
                for (int i = 1; i < 50; i++)
                {
                    products.Add(new ProductViewModel
                    {
                        UnitsInStock = random.Next(1, 20),
                        ProductName = productNames[random.Next(0, 5)],
                        Discontinued = false,
                        ProductID = i
                    });
                }
            }
        }

        // GET: GridCheckboxClientTemplate/Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Products_Read([DataSourceRequest] DataSourceRequest request)
        {
            return Json(products.ToDataSourceResult(request), JsonRequestBehavior.AllowGet);
        }

        public ActionResult Products_Create([DataSourceRequest] DataSourceRequest request, ProductViewModel product)
        {
            if (ModelState.IsValid)
            {
                product.ProductID = products.Count + 1;
                products.Add(product);
            }
            return Json(new[] { product }.ToDataSourceResult(request, ModelState));
        }

        public ActionResult Products_Update([DataSourceRequest] DataSourceRequest request, ProductViewModel product)
        {
            if (ModelState.IsValid)
            {
                products.Where(x => x.ProductID == product.ProductID).Select(x => product);
            }

            return Json(new[] { product }.ToDataSourceResult(request, ModelState));
        }

        public ActionResult Products_Destroy([DataSourceRequest] DataSourceRequest request, ProductViewModel product)
        {
            if (ModelState.IsValid)
            {
                products.Remove(products.First(x => x.ProductID == product.ProductID));
            }

            return Json(new[] { product }.ToDataSourceResult(request, ModelState));
        }
    }
}