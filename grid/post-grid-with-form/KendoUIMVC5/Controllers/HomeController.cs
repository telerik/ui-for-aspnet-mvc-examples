using KendoUIMVC5.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KendoUIMVC5.Controllers
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
