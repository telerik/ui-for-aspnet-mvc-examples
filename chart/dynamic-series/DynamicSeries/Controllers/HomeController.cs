using DynamicSeries.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DynamicSeries.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var model = new MyViewModel();
            model.Categories.AddRange(new string[] { "A", "B", "C" });
            
            model.Series.Add(new MySeriesData()
            {
                Name = "Foo",
                Stack = "A",
                Data = new decimal[] { 1, 2, 3 }
            });

            model.Series.Add(new MySeriesData()
            {
                Name = "Bar",
                Stack = "A",
                Data = new decimal[] { 2, 3, 4 }
            });

            model.Series.Add(new MySeriesData()
            {
                Name = "Baz",
                Stack = "B",
                Data = new decimal[] { 10, 20, 30 }
            });

            return View(model);
        }
    }
}
