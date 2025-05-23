﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.GridContextMenu.Models
{
    public class OrderRepository
    {
        //static data - FOR TEST PURPOSES ONLY
        private static List<Order> orderList = new List<Order> { 
                new Order {OrderID = 1, OrderDate = new DateTime(2012,8,1), EmployeeID = 1, OrderDescription = "Order Food", IsCompleted = true, OrderTotal = 70.20M},
                new Order {OrderID = 2, OrderDate = new DateTime(2012,8,1), EmployeeID = 2, OrderDescription = "Order Office Materials", IsCompleted = true, OrderTotal = 99.75M },
                new Order {OrderID = 3, OrderDate = new DateTime(2012,8,2), EmployeeID = 1, OrderDescription = "Order Production Materials", IsCompleted = false, OrderTotal = 24500.00M },
                new Order {OrderID = 4, OrderDate = new DateTime(2012,8,3), EmployeeID = 4, OrderDescription = "Order Food", IsCompleted = true, OrderTotal = 29.99M },
                new Order {OrderID = 5, OrderDate = new DateTime(2012,8,4), EmployeeID = 3, OrderDescription = "Order Production Materials", IsCompleted = true, OrderTotal = 7000.00M },
                new Order {OrderID = 6, OrderDate = new DateTime(2012,8,5), EmployeeID = 3, OrderDescription = "Order Production Materials", IsCompleted = true, OrderTotal = 25000.00M },
                new Order {OrderID = 7, OrderDate = new DateTime(2012,8,5), EmployeeID = 4, OrderDescription = "Order Food", IsCompleted = false, OrderTotal = 39.75M },
                new Order {OrderID = 8, OrderDate = new DateTime(2012,8,6), EmployeeID = 7, OrderDescription = "Order Food", IsCompleted = false, OrderTotal = 23.50M },
                new Order {OrderID = 9, OrderDate = new DateTime(2012,8,6), EmployeeID = 1, OrderDescription = "Order Office Materials", IsCompleted = false, OrderTotal = 27.70M },
                new Order {OrderID = 10, OrderDate = new DateTime(2012,8,7), EmployeeID = 2, OrderDescription = "Order Production Materials", IsCompleted = true, OrderTotal = 10740.77M },
                new Order {OrderID = 11, OrderDate = new DateTime(2013,2,7), EmployeeID = 8, OrderDescription = "Order Production Materials", IsCompleted = false, OrderTotal = 14200.34M },
            };

        public static IList<Order> GetAll()
        {
            IList<Order> result = (IList<Order>)HttpContext.Current.Session["Orders"];

            if (result == null)
            {
                //read from dataBase
                HttpContext.Current.Session["Orders"] = result =
                    (from order in orderList
                     select new Order
                     {
                         OrderID = order.OrderID,
                         OrderDate = order.OrderDate,
                         EmployeeID = order.EmployeeID,
                         OrderDescription = order.OrderDescription,
                         IsCompleted = order.IsCompleted,
                         OrderTotal = order.OrderTotal
                     }).ToList();
            }

            return result;
        }

        public static Order One(Func<Order, bool> predicate)
        {
            return GetAll().Where(predicate).FirstOrDefault();
        }

        public static void Insert(Order order)
        {
            order.OrderID = GetAll().OrderByDescending(p => p.OrderID).First().OrderID + 1;

            GetAll().Insert(0, order);
        }

        public static void Update(Order order)
        {
            Order target = One(o => o.OrderID == order.OrderID);
            if (target != null)
            {
                target.OrderID = order.OrderID;
                target.OrderDate = order.OrderDate;
                target.EmployeeID = order.EmployeeID;
                target.OrderDescription = order.OrderDescription;
                target.IsCompleted = order.IsCompleted;
                target.OrderTotal = order.OrderTotal;
            }
        }

        public static void Remove(Order order)
        {
            Order target = One(o => o.OrderID == order.OrderID);
            if (target != null)
            {
                GetAll().Remove(target);
            }
        }
    }
}