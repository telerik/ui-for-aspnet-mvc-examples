using Kendo.Mvc;
using Kendo.Mvc.UI;
using KendoGridCustomServerBinding.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KendoGridCustomServerBinding.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index([DataSourceRequest(Prefix="Grid")]DataSourceRequest request)
        {
            if (request.PageSize == 0)
            {
                request.PageSize = 10;
            }

            var northwind = new NorthwindEntities();

            IQueryable<Order> orders = northwind.Orders;

            if (request.Sorts.Any())
            {
                foreach (SortDescriptor sortDescriptor in request.Sorts)
                {
                    if (sortDescriptor.SortDirection == ListSortDirection.Ascending)
                    {
                        switch (sortDescriptor.Member)
                        {
                            case "OrderID":
                                orders = orders.OrderBy(order => order.OrderID);
                                break;
                            case "ShipAddress":
                                orders = orders.OrderBy(order => order.ShipAddress);
                                break;
                        }
                    }
                    else
                    {
                        switch (sortDescriptor.Member)
                        {
                            case "OrderID":
                                orders = orders.OrderByDescending(order => order.OrderID);
                                break;
                            case "ShipAddress":
                                orders = orders.OrderByDescending(order => order.ShipAddress);
                                break;
                        }
                    }
                }
            }
            else
            {
                // Entity Framework cant page on unsorted data
                orders = orders.OrderBy(o => o.OrderID);
            }

            ViewData["total"] = orders.Count();

            // Apply paging
            if (request.Page > 0)
            {
                orders = orders.Skip((request.Page - 1) * request.PageSize);
            }

            orders = orders.Take(request.PageSize);

            return View(orders);
        }
    }
}
