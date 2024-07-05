using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridEditingPopUpNestedGridBatch.Models;

namespace Telerik.Examples.Mvc.Areas.GridEditingPopUpNestedGridBatch.Controllers
{
    public class BaseController : Controller
    {
		protected GridEditingPopUpNestedGridBatchEntities context = new GridEditingPopUpNestedGridBatchEntities();
	}
}