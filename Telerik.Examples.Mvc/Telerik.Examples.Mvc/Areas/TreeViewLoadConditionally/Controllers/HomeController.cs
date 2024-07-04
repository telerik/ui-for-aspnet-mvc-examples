using Telerik.Examples.Mvc.Areas.TreeViewLoadConditionally.Models;
using Kendo.Mvc.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.TreeViewLoadConditionally.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }

        public ActionResult GetTimesheetUsers()
        {
            var result = new List<ComboItemModel>()
            {
                new ComboItemModel() { ID = 1, Name = "one" },
                new ComboItemModel() { ID = 2, Name = "two" },
                new ComboItemModel() { ID = 3, Name = "three" },
                new ComboItemModel() { ID = 4, Name = "four" }
            };

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetTimesheetDates(int? id, int Userid)
        {
            var source = new List<TreeViewItemModel>()
            {
                new TreeViewItemModel() { Id = int.Parse(Userid.ToString() + 1), ParentId = null, Text = Userid.ToString() + 1 },
                new TreeViewItemModel() { Id = int.Parse(Userid.ToString() + 2), ParentId = int.Parse(Userid.ToString() + 1), Text = Userid.ToString() + 2 },
                new TreeViewItemModel() { Id = int.Parse(Userid.ToString() + 3), ParentId = int.Parse(Userid.ToString() + 1), Text = Userid.ToString() + 3 },
                new TreeViewItemModel() { Id = int.Parse(Userid.ToString() + 4), ParentId = int.Parse(Userid.ToString() + 2), Text = Userid.ToString() + 4 },
                new TreeViewItemModel() { Id = int.Parse(Userid.ToString() + 5), ParentId = int.Parse(Userid.ToString() + 2), Text = Userid.ToString() + 5 },
                new TreeViewItemModel() { Id = int.Parse(Userid.ToString() + 6), ParentId = int.Parse(Userid.ToString() + 3), Text = Userid.ToString() + 6 }
            };

            var result = source.Where(e => id.HasValue ? e.ParentId == id : e.ParentId == null)
                .Select(e => new {
                    id = e.Id,
                    parentId = e.Text,
                    hasChildren = source.Any(m => m.ParentId == e.Id)
                });

            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}