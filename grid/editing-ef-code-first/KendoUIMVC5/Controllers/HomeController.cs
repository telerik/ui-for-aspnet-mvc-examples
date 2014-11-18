using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KendoUIMVC5.Models;

namespace KendoUIMVC5.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";
            return View();
        }

        public ActionResult GetCustomers([DataSourceRequest] DataSourceRequest request)
        {
            using (var dbContext = new CustomerContext())
            {
                return Json(dbContext.Customers.ToDataSourceResult(request, 
                         c => new CustomerViewModel
                         {
                             CustomerID = c.CustomerID,
                             Name = c.Name,
                             Email = c.Email,
                             Phone = c.Phone
                         }));
            }
        }

        public ActionResult UpdateCustomer([DataSourceRequest] DataSourceRequest request, Customer customer)
        {
            using (var dbContext = new CustomerContext())
            {
                var customerToUpdate = dbContext.Customers.First(cust => cust.CustomerID == customer.CustomerID);

                TryUpdateModel(customerToUpdate);

                dbContext.SaveChanges();

                return Json(ModelState.ToDataSourceResult());
            }
        }

        public ActionResult InsertCustomer([DataSourceRequest] DataSourceRequest request, Customer customerToAdd)
        {
            using (var dbContext = new CustomerContext())
            {
                if (ModelState.IsValid)
                {
                    dbContext.Customers.Add(customerToAdd);
                    dbContext.SaveChanges();
                }

                return Json(new[] { customerToAdd }.ToDataSourceResult(request));
            }
        }

        public ActionResult DeleteCustomer([DataSourceRequest] DataSourceRequest request, Customer customer)
        {
            using (var dbContext = new CustomerContext())
            {
                var customerToDelete = dbContext.Customers.First(cust => cust.CustomerID == customer.CustomerID);

                if (customerToDelete != null)
                {
                    dbContext.Customers.Remove(customerToDelete);
                    dbContext.SaveChanges();
                }

                return Json(new[] { customerToDelete }.ToDataSourceResult(request));
            }
        }
       
    }
}
