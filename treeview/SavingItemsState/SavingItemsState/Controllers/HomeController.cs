using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SavingItemsState.Models;

namespace SavingItemsState.Controllers
{
    public class HomeController : Controller
    {
        static List<ViewModel> data;

        static HomeController()
        {
            data = new List<ViewModel>();
            data.Add(new ViewModel
            {
                ID = 1,
                IsChecked = true,
                Name = "Item1"
            });

            data.Add(new ViewModel
            {
                ID = 2,
                IsChecked = false,
                Name = "Item2"
            });

            data.Add(new ViewModel
            {
                ID = 3,
                IsChecked = false,
                ParentID = 1,
                Name = "Item1.1"
            });
            data.Add(new ViewModel
            {
                ID = 4,
                IsChecked = true,
                ParentID = 1,
                Name = "Item1.2"
            });
        }


        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }


        public JsonResult Read(int? id)
        {
            var result = data.Where(v => id.HasValue ? v.ParentID == id : v.ParentID == null)
                                .Select(v => new
                                {
                                    ID = v.ID,
                                    Name = v.Name,
                                    HasChildren = data.Any(o => o.ParentID == v.ID),
                                    @checked = v.IsChecked,
                                    expanded = v.Expanded
                                });

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public void Save(int id)
        {
            UpdateModel(data.First(v => v.ID == id));
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
