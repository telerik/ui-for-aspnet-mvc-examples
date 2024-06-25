using Telerik.Examples.Mvc.Areas.GridEditPopUpServerValidation.Models;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditPopUpServerValidation.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Products_Read([DataSourceRequest] DataSourceRequest request)
        {
            return Json(GetProducts().ToDataSourceResult(request));
        }

        public ActionResult Products_Create([DataSourceRequest] DataSourceRequest request, Product product)
        {
            //Manually add an model error in order to simulate validation error
            ModelState.AddModelError(/* Property name */ "Name", /* Validation message */ "My server error");


            //TODO: implement create functionality

            return Json(ModelState.ToDataSourceResult());
        }

        public ActionResult Products_Update([DataSourceRequest] DataSourceRequest request, Product product)
        {
            //Manually add an model error in order to simulate validation error
            ModelState.AddModelError(/* Property name */ "Name", /* Validation message */ "My server error");

            //TODO: implement update functionality

            return Json(ModelState.ToDataSourceResult());
        }

        private IEnumerable<Product> GetProducts()
        {
            return Enumerable.Range(1, 10).Select(i => new Product
            {
                Id = i,
                Name = "Product" + i
            });
        }
    }

}