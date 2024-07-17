using Telerik.Examples.Mvc.Areas.GridExportingExcelMultiple.Models;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridExportingExcelMultiple.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }

        public ActionResult Orders_Read([DataSourceRequest] DataSourceRequest request)
        {
            using (var northwind = new GridExportingExcelMultipleEntities())
            {
                return Json(northwind.Orders.ToDataSourceResult(request, o => new
                {
                    o.OrderID,
                    o.Freight,
                    o.OrderDate,
                    o.ShipName,
                    o.ShipCity
                }));
            }
        }

        public ActionResult Products_Read([DataSourceRequest] DataSourceRequest request)
        {
            using (var northwind = new GridExportingExcelMultipleEntities())
            {
                return Json(northwind.Products.ToDataSourceResult(request, p => new
                {
                    p.ProductID,
                    p.ProductName,
                    p.QuantityPerUnit,
                    p.UnitPrice,
                    p.UnitsInStock
                }));
            }
        }
    }
}