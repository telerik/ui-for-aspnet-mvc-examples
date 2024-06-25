using Telerik.Examples.Mvc.Areas.GridFilterExcelLike.Models;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridFilterExcelLike.Controllers
{
    public class HomeController : Controller
    {
        public static List<Product> products = new List<Product>();
        public ActionResult Index()
        {
            if(products.Count == 0)
            {
                for (int i = 0; i < 200; i++)
                {
                    products.Add(new Product()
                    {
                        ProductID = i,
                        ProductName = "ProductName" + i.ToString(),
                        UnitPrice = i * 3.14,
                        UnitsInStock = i * 5,
                        Discontinued = (i % 2 == 0) ? true : false
                    });
                }
            }

            return View(AreAllSelected());
        }

        public bool AreAllSelected()
        {
            var selectAll = true;
            foreach (var product in products)
            {
                if (product.Discontinued == false)
                {
                    selectAll = false;
                    break;
                }
            }
            return selectAll;
        }

        public ActionResult Get_Products([DataSourceRequest] DataSourceRequest dsRequest)
        {
            var result = products.ToDataSourceResult(dsRequest);
            return Json(result);
        }

        public ActionResult Select_Products(List<Product> productsList)
        {
            foreach (Product product in productsList)
            {
                var toUpdate = products.FirstOrDefault(p => p.ProductID == product.ProductID);
                toUpdate.Discontinued = product.Discontinued;

            }
            return Json(AreAllSelected());

        }

        public ActionResult Select_AllProducts(bool checkAll)
        {
            foreach (var product in products)
            {
                product.Discontinued = checkAll;
            }
            return new EmptyResult();
        }
    }
}