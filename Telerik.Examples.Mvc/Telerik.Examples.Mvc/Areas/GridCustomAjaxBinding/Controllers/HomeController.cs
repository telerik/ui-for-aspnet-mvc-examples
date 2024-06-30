using Kendo.Mvc.UI;
using Kendo.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.GridExcelExportColumnTemplate.Models;
using Telerik.Examples.Mvc.Areas.GridCustomAjaxBinding.Models;

namespace Telerik.Examples.Mvc.Areas.GridCustomAjaxBinding.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Orders_Read([DataSourceRequest] DataSourceRequest request)
        {
            IQueryable<GridCustomAjaxBindingOrder> orders = new GridCustomAjaxBindingEntities().Orders;

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
                // EF can't page unsorted data
                orders = orders.OrderBy(o => o.OrderID);
            }

            var total = orders.Count();

            // Apply paging
            if (request.Page > 0)
            {
                orders = orders.Skip((request.Page - 1) * request.PageSize);
            }
            orders = orders.Take(request.PageSize);

            var result = new DataSourceResult()
            {
                Data = orders, // Process data (paging and sorting applied)
                Total = total // Total number of records
            };

            return Json(result);
        }
    }
}