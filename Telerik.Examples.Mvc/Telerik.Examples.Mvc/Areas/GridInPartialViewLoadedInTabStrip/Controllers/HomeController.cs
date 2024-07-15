using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridInPartialViewLoadedInTabStrip.Models;

namespace Telerik.Examples.Mvc.Areas.GridInPartialViewLoadedInTabStrip.Controllers
{
    public class HomeController : Controller
    {
        /// <summary>
        /// Displays the initial view ~/Views/Home/Index.cshtml
        /// </summary>
        public ActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// Provides data for the grid. 
        /// </summary>
        [HttpPost]
        public ActionResult Select([DataSourceRequest] DataSourceRequest request)
        {
            // Creating dummy data to bind the grid 
            var data = Enumerable.Range(1, 100)
                                 .Select(index => new Customer
                                 {
                                     ID = index,
                                     Name = "Customer #" + index
                                 });

            return Json(data.ToDataSourceResult(request));
        }

        /// <summary>
        /// Displays the partial view that contains the grid - ~/Views/Home/Grid.cshtml
        /// Will be requested via ajax by the tabstrip when the user clicks the 'Grid' tab.
        /// </summary>
        /// <returns></returns>
        public ActionResult Grid()
        {
            return PartialView();
        }
    }
}