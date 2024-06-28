using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridEditing3LevelHierarchy.Models;

namespace Telerik.Examples.Mvc.Areas.GridEditing3LevelHierarchy.Controllers
{
    public class BaseController : Controller
    {
        protected GridEditing3LevelHierarchyEntities context = new GridEditing3LevelHierarchyEntities();

    }
}