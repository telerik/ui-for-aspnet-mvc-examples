using Telerik.Examples.Mvc.Areas.TreeViewBindingToXml.Models;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Xml.Linq;

namespace Telerik.Examples.Mvc.Areas.TreeViewBindingToXml.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            //Server binding data
            XElement element = XElement.Load(Server.MapPath("~/App_Data/employees.xml"));
            List<Employee> employees = ToEmployees(element);
            return View(employees);
        }

        //Ajax binding data
        public JsonResult Employees(string id)
        {

            XElement element = XElement.Load(Server.MapPath("~/App_Data/employees.xml"));
            IEnumerable<Employee> result;

            if (!string.IsNullOrEmpty(id))
            {
                //search for id and return it's childrens
                result = FindByID(id, element.Element("Employee")).Element("items").Elements("Employee").Select(e => ToEmployee(e));
            }
            else
            {
                //return first level nodes
                result = element.Elements("Employee").Select(e => ToEmployee(e));
            }

            return Json(result, JsonRequestBehavior.AllowGet);
        }


        public ActionResult About()
        {
            return View();
        }

        //Convert XML element to List of Objects
        private List<Employee> ToEmployees(XElement element)
        {
            if (element != null && element.HasElements)
            {
                List<Employee> employees = new List<Employee>();
                foreach (var child in element.Elements("Employee"))
                {
                    var employee = ToEmployee(child);
                    if (employee.hasChildren)
                    {
                        employee.items = ToEmployees(child.Element("items"));
                    }
                    employees.Add(employee);
                }
                return employees;
            }
            return null;
        }

        //Find XML element by Id
        private XElement FindByID(string id, XElement element)
        {
            if (element.Element("employeeId").Value == id)
            {
                return element;
            }

            if (element.Element("items") != null)
            {
                XElement item;
                foreach (var child in element.Element("items").Elements("Employee"))
                {
                    item = FindByID(id, child);
                    if (item != null)
                    {
                        return item;
                    }
                }
            }
            return null;
        }

        //Convert XML element to Object
        private Employee ToEmployee(XElement element)
        {
            return new Employee()
            {
                id = int.Parse(element.Element("employeeId").Value),
                name = element.Element("name").Value,
                hasChildren = element.Element("items") != null
            };
        }
    }
}