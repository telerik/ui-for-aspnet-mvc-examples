using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KendoDropDownList_Virtualization.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            var categories = Enumerable.Range(1, 5).Select(i => {
                return new Category
                {
                    CategoryId = i,
                    CategoryName = "Category " + i.ToString()
                };
            });

            ViewBag.Categories = categories;

            return View();
        }

        public ActionResult GetVirtualData([DataSourceRequest] DataSourceRequest request)
        {
            var data = GetEmployee();
            return Json(data.ToDataSourceResult(request));
        }

        private static List<Employee> GetEmployee()
        {
            var rand = new Random();

            var data = Enumerable.Range(0, 1000).Select(i => {
                return new Employee
                {
                    Id = i,
                    CategoryId = rand.Next(1, 5),
                    Name = "Emp" + i.ToString()
                };
            }).ToList();

            return data;
        }
        public ActionResult EmployeeValueMapper(int value)
        {
            var dataItemIndex = -1;
            var data = GetEmployee();
            if (value != 0)
            {
                var index = 0;
                foreach (var vm in data)
                {
                    if (vm.Id == value)
                    {
                        dataItemIndex = index;
                        break;
                    }

                    index += 1;
                }
            }
            return Json(dataItemIndex, JsonRequestBehavior.AllowGet);
        }
    }

    public class Category
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
    }

    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CategoryId { get; set; }
    }
}