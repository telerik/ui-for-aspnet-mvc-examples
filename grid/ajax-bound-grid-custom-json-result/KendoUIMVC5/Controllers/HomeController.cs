using System.Collections.Generic;
using System.Text;
using System.Web.Mvc;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using KendoUIMVC5.Models;
using KendoUIMVC5.Serialization;

namespace KendoUIMVC5.Controllers
{
    public class HomeController : Controller
    {
        private static List<Product> products = new List<Product>();
        private static int id;

        static HomeController()
        {
            // create some large data
            for (id = 1; id < 100000; id++)
            {
                products.Add(new Product()
                    {
                        ID = id,
                        Name = "Product" + id
                    });
            }
        }

        protected override JsonResult Json(object data, string contentType,
                      Encoding contentEncoding, JsonRequestBehavior behavior)
        {
            return new CustomJsonResult
            {
                Data = data,
                ContentType = contentType,
                ContentEncoding = contentEncoding,
                JsonRequestBehavior = behavior
            };
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Read([DataSourceRequest]DataSourceRequest request)
        {
            return Json(products.ToDataSourceResult(request));
        }

        public ActionResult LocalData()
        {
            return View(products);
        }
    }
}
