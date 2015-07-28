using System.Linq;
using System.Web.Mvc;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using SalesHub.Client.ViewModels.Api;
using SalesHub.Core.Models;
using SalesHub.Core.Repositories;

namespace SalesHub.Client.Api
{
    [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
    public class CustomerOrdersController : Controller
    {
        private readonly IOrderRepository _orderRepository;

        public CustomerOrdersController(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        public JsonResult GetOrdersForCustomer([DataSourceRequest] DataSourceRequest request)
        {
            IQueryable<Order> orders = _orderRepository.GetAllOrders();

            DataSourceResult response = orders.ToDataSourceResult(request, o => new CustomerOrderViewModel
            {
                IsActive = o.IsActive,
                OrderDate = o.OrderDate,
                OrderId = o.OrderId,
                OrderNumber = o.OrderNumber,
                Value = o.ContractAmount,
                Weight = o.ContractWeight,
                IsInKilograms = o.UnitOfWeight == UnitOfWeight.Kilograms
            }); 
            return Json(response, JsonRequestBehavior.AllowGet);
        }
    }
}
