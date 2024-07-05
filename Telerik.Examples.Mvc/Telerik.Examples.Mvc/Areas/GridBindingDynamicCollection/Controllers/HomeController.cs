using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridBindingDynamicCollection.Models;

namespace Telerik.Examples.Mvc.Areas.GridBindingDynamicCollection.Controllers
{
    public class HomeController : Controller
    {
		public ActionResult Index()
		{
			ViewBag.Message = "Home page.";

			return View();
		}

		public ActionResult Read([DataSourceRequest] DataSourceRequest request)
		{
			return GetView(request);
		}

		[HttpPost]
		public ActionResult Create([DataSourceRequest] DataSourceRequest request)
		{
			using (var db = new GridBindingDynamicCollectionEntities())
			{
				var product = new GridBindingDynamicCollectionProduct();
				if (TryUpdateModel(product, includeProperties: new string[] { "ProductName", "UnitPrice", "QuantityPerUnit" }))
				{
					db.Products.Add(product);
					db.SaveChanges();
				}
				return Json(new[] { product }.ToDataSourceResult(request));
			}

		}

		[HttpPost]
		public ActionResult Update([DataSourceRequest] DataSourceRequest request, int productId)
		{
			using (var db = new GridBindingDynamicCollectionEntities())
			{
				var productToUpdate = db.Products.First(p => p.ProductID == productId);

				if (TryUpdateModel(productToUpdate, includeProperties: new string[] { "ProductName", "UnitPrice", "QuantityPerUnit" }))
				{
					db.SaveChanges();
				}
			}
			return Json(ModelState.ToDataSourceResult());
		}

		[HttpPost]
		public ActionResult Destroy([DataSourceRequest] DataSourceRequest request, int productId)
		{
			using (var db = new GridBindingDynamicCollectionEntities())
			{
				db.Products.Remove(db.Products.First(p => p.ProductID == productId));
				db.SaveChanges();
			}
			return Json(ModelState.ToDataSourceResult());
		}

		private IEnumerable<dynamic> GetData()
		{
			var db = new GridBindingDynamicCollectionEntities();
			return db.Products;
		}

		private JsonResult GetView(DataSourceRequest request)
		{
			return Json(GetData().ToDataSourceResult(request));
		}


		public ActionResult About()
		{
			ViewBag.Message = "Your app description page.";

			return View();
		}
	}
}