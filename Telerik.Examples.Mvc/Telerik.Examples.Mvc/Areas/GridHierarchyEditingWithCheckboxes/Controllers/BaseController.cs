using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridHierarchyEditingWithCheckboxes.Models;

namespace Telerik.Examples.Mvc.Areas.GridHierarchyEditingWithCheckboxes.Controllers
{
    public class BaseController : Controller
    {
		protected GridHierarchyEditingWithCheckboxesEntities context = new GridHierarchyEditingWithCheckboxesEntities();
	}
}