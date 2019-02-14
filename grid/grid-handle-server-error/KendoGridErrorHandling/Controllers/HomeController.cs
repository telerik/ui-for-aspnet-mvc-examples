using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using KendoGridErrorHandling.Models;
using System.Linq;
using System.Web.Mvc;

namespace KendoGridErrorHandling.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }
        public ActionResult Orders_Read([DataSourceRequest]DataSourceRequest request)
        {
            var result = Enumerable.Range(1, 50).Select(i => new OrderViewModel
            {
                OrderID = i,
                Freight = i * 10,
                ShipName = "ShipName " + i,
                ShipCity = "ShipCity " + i,
                Category = new CategoryViewModel()
                {
                    CategoryID = i,
                    CategoryName = "Grey"
                }
            });

            return Json(result.ToDataSourceResult(request));
        }

        public ActionResult Orders_Update([DataSourceRequest] DataSourceRequest request, OrderViewModel model)
        {
            bool isValid = false;
            
            // Note: The method below always returns an error
            // In a real case this would be the result of a custom validation

            if (!isValid)
            {
                ModelState.AddModelError("'" + model.Category.CategoryName + "'", "This is my server error!");
            }

            return Json(new[] { model }.ToDataSourceResult(request, ModelState));
        }
    }
}
