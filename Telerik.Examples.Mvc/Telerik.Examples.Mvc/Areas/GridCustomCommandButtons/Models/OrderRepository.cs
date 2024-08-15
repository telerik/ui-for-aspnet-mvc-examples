using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Telerik.Examples.Mvc.Areas.GridCustomCommandButtons.Models;

namespace Telerik.Examples.Mvc.Areas.GridCustomCommandButtons.Models
{
    public class OrderRepository
    {
        //static data 
        private static List<OrderViewModel> orderList = new List<OrderViewModel> {
            new OrderViewModel { OrderID = 1, OrderDate = new DateTime(2021,8,1), ShipCity = "New York", ShipCountry = "USA" },
            new OrderViewModel { OrderID = 2, OrderDate = new DateTime(2021,8,1), ShipCity = "New York", ShipCountry = "USA" },
            new OrderViewModel { OrderID = 3, OrderDate = new DateTime(2021,8,2), ShipCity = "New York", ShipCountry = "USA" },
            new OrderViewModel { OrderID = 4, OrderDate = new DateTime(2021,8,3), ShipCity = "Tokyo", ShipCountry = "Japan" },
            new OrderViewModel { OrderID = 5, OrderDate = new DateTime(2021,8,4), ShipCity = "Tokyo", ShipCountry = "Japan" },
            new OrderViewModel { OrderID = 6, OrderDate = new DateTime(2021,8,5), ShipCity = "Tokyo", ShipCountry = "Japan" },
            new OrderViewModel { OrderID = 7, OrderDate = new DateTime(2021,8,5), ShipCity = "Tokyo", ShipCountry = "Japan" },
            new OrderViewModel { OrderID = 8, OrderDate = new DateTime(2021,8,6), ShipCity = "Rome", ShipCountry = "Italy" },
            new OrderViewModel { OrderID = 9, OrderDate = new DateTime(2021,8,6), ShipCity = "Rome", ShipCountry = "Italy" },
            new OrderViewModel { OrderID = 10, OrderDate = new DateTime(2021,8,7), ShipCity = "Rome", ShipCountry = "Italy" },
            new OrderViewModel { OrderID = 11, OrderDate = new DateTime(2021,2,7), ShipCity = "Rome", ShipCountry = "Italy" }
        };

        public static IList<OrderViewModel> GetAll()
        {
            IList<OrderViewModel> result = (IList<OrderViewModel>)HttpContext.Current.Session["Orders"];

            if (result == null)
            {
                //read from dataBase
                HttpContext.Current.Session["DataOrders"] = result =
                    (from order in orderList
                     select new OrderViewModel
                     {
                         OrderID = order.OrderID,
                         OrderDate = order.OrderDate,
                         ShipCity = order.ShipCity,
                         ShipCountry = order.ShipCountry
                     }).ToList();
            }

            return result;
        }

        public static OrderViewModel One(Func<OrderViewModel, bool> predicate)
        {
            return GetAll().Where(predicate).FirstOrDefault();
        }

        public static void Insert(OrderViewModel order)
        {
            order.OrderID = GetAll().OrderByDescending(p => p.OrderID).First().OrderID + 1;

            GetAll().Insert(0, order);
        }

        public static void Update(OrderViewModel order)
        {
            OrderViewModel target = One(o => o.OrderID == order.OrderID);
            if (target != null)
            {
                target.OrderID = order.OrderID;
                target.OrderDate = order.OrderDate;
                target.ShipCity = order.ShipCity;
                target.ShipCountry = order.ShipCountry;
            }
        }

        public static void Remove(OrderViewModel order)
        {
            OrderViewModel target = One(o => o.OrderID == order.OrderID);
            if (target != null)
            {
                GetAll().Remove(target);
            }
        }
    }
}