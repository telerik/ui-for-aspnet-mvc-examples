using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridHierarchyInCellEditing.Models;

namespace Telerik.Examples.Mvc.Areas.GridHierarchyInCellEditing.Controllers
{
    public class BaseController : Controller
    {
		protected GridHierarchyInCellEditingEntities context = new GridHierarchyInCellEditingEntities();
	}
}