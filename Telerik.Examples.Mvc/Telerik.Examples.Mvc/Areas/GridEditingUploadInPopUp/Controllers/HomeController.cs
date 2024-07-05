using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridEditingUploadInPopUp.Models;

namespace Telerik.Examples.Mvc.Areas.GridEditingUploadInPopUp.Controllers
{
    public class HomeController : Controller
    {
		public static List<Category> Category = new List<Category>();

		private int _nextid = 4;

		static HomeController()
		{
			Category.Add(new Category { Id = 1, Name = "Desert", ImageUrl = "Desert.jpg" });
			Category.Add(new Category { Id = 2, Name = "Hydrangeas", ImageUrl = "Hydrangeas.jpg" });
			Category.Add(new Category { Id = 3, Name = "Tulips", ImageUrl = "Tulips.jpg" });
		}

		public ActionResult Index()
		{
			ViewData["Category"] = Category;
			ViewBag.Message = "Welcome to ASP.NET MVC!";

			return View();
		}

		public ActionResult GetCategory([DataSourceRequest] DataSourceRequest dsRequest)
		{
			var result = Category.ToDataSourceResult(dsRequest);
			return Json(result);
		}

		public ActionResult CreateCategory([DataSourceRequest] DataSourceRequest dsRequest, Category cat)
		{
			if (cat != null && ModelState.IsValid)
			{

				cat.Id = _nextid++;
				//cat.ImageUrl = TempData["fileName"].ToString();
				Category.Add(cat);
			}

			return Json(new Category[] { cat }.ToDataSourceResult(dsRequest, ModelState));
		}

		public ActionResult UpdateCategory([DataSourceRequest] DataSourceRequest dsRequest, Category cat)
		{
			if (cat != null && ModelState.IsValid)
			{
				var toUpdate = Category.FirstOrDefault(p => p.Id == cat.Id);
				TryUpdateModel(toUpdate);
			}

			return Json(new Category[] { cat }.ToDataSourceResult(dsRequest, ModelState));
		}

		public ActionResult Save(HttpPostedFileBase file)
		{
			var fileName = Path.GetFileName(file.FileName);
			var physicalPath = Path.Combine(Server.MapPath("~//Areas/GridEditingUploadInPopUp/CategoryImage"), fileName);

			file.SaveAs(physicalPath);

			return Json(new { ImageUrl = fileName }, "text/plain");
		}
	}
}