using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridSelectionColumnWithCheckBox.Models;
using Kendo.Mvc.Extensions;

namespace Telerik.Examples.Mvc.Areas.GridSelectionColumnWithCheckBox.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {

            return View();
        }
        public ActionResult IndexAllPages()
        {
            return View();
        }

        public ActionResult Read1([DataSourceRequest]DataSourceRequest request)
        {
            throw new InvalidOperationException("Error is thrown !!");
        }

        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult Create1([DataSourceRequest] DataSourceRequest request, ProductViewModel product)
        {
            return Json(new[] { product }.ToDataSourceResult(request, ModelState));
        }

        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult Update1([DataSourceRequest] DataSourceRequest request, ProductViewModel product)
        {
            return Json(new[] { product }.ToDataSourceResult(request, ModelState));
        }

        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult Destroy1([DataSourceRequest] DataSourceRequest request, ProductViewModel product)
        {
            return Json(new[] { product }.ToDataSourceResult(request, ModelState));
        }


        public ActionResult Read([DataSourceRequest]DataSourceRequest request)
        {
            return Json(GetProducts().ToDataSourceResult(request));
        }

        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult Create([DataSourceRequest] DataSourceRequest request, ProductViewModel product)
        {
            return Json(new[] { product }.ToDataSourceResult(request, ModelState));
        }

        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult Update([DataSourceRequest] DataSourceRequest request, ProductViewModel product)
        {
            ModelState.AddModelError("ProductName", "My server error");



            //TODO: implement create functionality

            return Json(ModelState.ToDataSourceResult());
            //return Json(new[] { product }.ToDataSourceResult(request, ModelState));
        }

        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult Destroy([DataSourceRequest] DataSourceRequest request, ProductViewModel product)
        {
            return Json(new[] { product }.ToDataSourceResult(request, ModelState));
        }

        [HttpPost]
        public ActionResult Excel_Export_Save(string contentType, string base64, string fileName)
        {
            var fileContents = Convert.FromBase64String(base64);

            return File(fileContents, contentType, fileName);
        }

        private static IEnumerable<ProductViewModel> GetProducts()
        {
            Random r = new Random();
            List<ProductViewModel> collection = new List<ProductViewModel>();
            for (int i = 1; i < 100; i++)
            {
                if (i > 10)
                {
                    collection.Add(new ProductViewModel()
                    {
                        ID = i,
                        isEnabled = true,
                        ProductName = "ProductName" + r.Next(100).ToString(),
                        UnitsOnOrder = i,
                        UnitPrice = 10.45M + i,
                        UnitsInStock = i + 3,
                        CreditCardNumber = "123456789",
                        CustomDate = DateTime.Now.AddHours(i),
                        Doc = "<strong>Test1</strong>&lt;p&gt;&lt;strong&gt;test&lt;/strong&gt;&lt;/p&gt;",
                        Status = "PPT"
                    });
                }
                else
                {
                    collection.Add(new ProductViewModel()
                    {
                        ID = i,
                        isEnabled = false,
                        ProductName = "ProductName" + r.Next(100).ToString(),
                        UnitsOnOrder = i,
                        UnitPrice = -1 * 10.45M + i,
                        UnitsInStock = i + 3,
                        CreditCardNumber = "987654321",
                        CustomDate = DateTime.Now.AddHours(i),
                        Doc = "<strong>Test</strong>&lt;p&gt;&lt;strong&gt;test&lt;/strong&gt;&lt;/p&gt;"
                    });
                }
            }

            return collection.AsEnumerable<ProductViewModel>();
        }

        private static IEnumerable<ProductViewModel> GetProducts1()
        {
            Random r = new Random();
            List<ProductViewModel> collection = new List<ProductViewModel>();
            for (int i = 1; i < 100; i++)
            {
                if (i > 10)
                {
                    collection.Add(new ProductViewModel() { ID = i + 1000, isEnabled = true, CreditCardNumber = "123456789", ProductName = "ProductName" + r.Next(100).ToString(), UnitsOnOrder = i, UnitPrice = 10.45M + i, UnitsInStock = i + 3, Doc = "<ol> <li>Details.cshtml</> <li>late.csv</> <li>test.xml</> </ol>" });
                }
                else
                {
                    collection.Add(new ProductViewModel() { ID = i + 1000, isEnabled = false, CreditCardNumber = "123456789", ProductName = "ProductName" + r.Next(100).ToString(), UnitsOnOrder = i, UnitPrice = -1 * 10.45M + i, UnitsInStock = i + 3, Doc = "<ol> <li>Details.cshtml</> <li>late1.csv</> <li>test.xml</> </ol>" });
                }
            }

            return collection.AsEnumerable<ProductViewModel>();
        }

        public ActionResult DocumentDownload1()
        {
            string contentType = "application/xlsx";
            string filePath = Server.MapPath("test1.xlsx");
            return File(filePath, contentType, "YourFileName.xlsx");
        }
    }
}