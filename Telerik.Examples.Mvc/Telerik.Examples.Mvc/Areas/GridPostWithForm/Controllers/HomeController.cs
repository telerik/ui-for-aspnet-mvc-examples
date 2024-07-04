using Telerik.Examples.Mvc.Areas.GridPostWithForm.Models;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridPostWithForm.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View(new Category
            {
                Name = "Category 1",
                Products = new List<Product> 
                {
                    new Product
                    {
                        Name = "Product 1"
                    }
                }
            });
        }

        public ActionResult Save(Category category)
        {
            return View(category);
        }
    }
}