using KendoWindow_Ajax_Form.Helpers;
using KendoWindow_Ajax_Form.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KendoWindow_Ajax_Form.Controllers
{
    public class HomeController : Controller
    {
       
        public HomeController()
            :base()
        {
            try
            {
                IEnumerable<OrderViewModel> testResult = OrdersBinderHelper.RetrunListOfOrders();
            }
            catch (Exception)
            {
                OrdersBinderHelper.WriteListOfOrders(new List<OrderViewModel>()
                {
                    new OrderViewModel() { ContactName = "Charles", CustomerID="1", OrderDate= DateTime.Now.AddDays(-1), OrderID=1,ShippedDate = DateTime.Now },
                    new OrderViewModel() { ContactName = "John", CustomerID="2", OrderDate= DateTime.Now.AddDays(-2), OrderID=2,ShippedDate = DateTime.Now },
                });
            }
        }

        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }

        public ActionResult OrderCreatePartial()
        {
            return PartialView("_OrderCreate");
        }
    }
}
