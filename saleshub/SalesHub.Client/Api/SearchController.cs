using System;
using System.Data.Entity;
using System.Linq;
using System.Web.Mvc;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using SalesHub.Client.ViewModels.Client;
using SalesHub.Data;

namespace SalesHub.Client.Api
{
    [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
    public class SearchController : Controller
    {
        private readonly SalesHubDbContext _salesHubDbContext;

        public SearchController(SalesHubDbContext salesHubDbContext)
        {
            _salesHubDbContext = salesHubDbContext;
        }

        public JsonResult GetAutoCompleteSearchResults(string text)
        {
            var result = _salesHubDbContext.Orders.Include("Customer").Include("Customer.SellingCompany").Select(o => new OrderSearchResult
            {
                OrderId = o.OrderId,
                OrderNumber = o.OrderNumber,
                Customer = o.Customer.CustomerName,
                SellingCompany = o.Customer.SellingCompany.Abbreviation
            });

            if (!string.IsNullOrEmpty(text))
            {
                result = result.Where(o => o.OrderNumber.StartsWith(text));
            }

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetSearchResults([DataSourceRequest] DataSourceRequest dataSourceRequest)
        {
            var result = _salesHubDbContext.Orders.Include("Customer").Include("Customer.SellingCompany").ToDataSourceResult(dataSourceRequest, o => new OrderSearchResult
            {
                OrderId = o.OrderId,
                OrderNumber = o.OrderNumber,
                Customer = o.Customer.CustomerName,
                SellingCompany = o.Customer.SellingCompany.Abbreviation
            });
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}
