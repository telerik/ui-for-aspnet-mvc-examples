using System;
﻿using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using TelerikMvcApp5.Models;

namespace TelerikMvcApp5.Controllers
{
	public partial class GridController : Controller
    {
		public ActionResult Orders_Read([DataSourceRequest]DataSourceRequest request)
		{
			var result = Enumerable.Range(0, 50).Select(i => new OrderViewModel
			{
				OrderID = i,
				Freight = i * 10,
				OrderDate = DateTime.Now.AddDays(i),
				ShipName = "ShipName " + i,
				ShipCity = "ShipCity " + i,
                ShipCountry = "ShipCountry" + i
            });

			return Json(result.ToDataSourceResult(request));
		}
	}
}