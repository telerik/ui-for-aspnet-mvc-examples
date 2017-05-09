using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AjaxHierarchyEditing.Models;

namespace AjaxHierarchyEditing.Controllers
{
    public class BaseController : Controller
    {
        protected NorthwindEntities context = new NorthwindEntities();

    }
}
