using System.Web.Mvc;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using KendoUIMVC5.Models;

namespace KendoUIMVC5.Controllers
{
    public class HomeController : Controller
    {

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Read([DataSourceRequest]DataSourceRequest request)
        {
            var customers = new[]
                {
                    new Customer { Id = 1, Name = "Customer 1", ParentId = 0, Sales = 2},
                    new Customer { Id = 2, Name = "Customer 2", ParentId = 0, Sales = 2},
                    new Customer { Id = 3, Name = "Customer 1.1", ParentId = 1, Sales = 2},
                    new Customer { Id = 4, Name = "Customer 1.1.1", ParentId = 3, Sales = 2}
                };

            return Json(customers.ToDataSourceResult(request));
        }
    }
}
