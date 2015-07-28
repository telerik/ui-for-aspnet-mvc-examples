using System.Linq;
using System.Web.Mvc;
using AutoMapper;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using SalesHub.Client.ViewModels.Api;
using SalesHub.Core.Models;
using SalesHub.Core.Repositories;

namespace SalesHub.Client.Api
{
    [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
    public class CustomerOrderDetailsController : Controller
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IOrderDetailRepository _orderDetailRepository;

        public CustomerOrderDetailsController(IOrderRepository orderRepository, IOrderDetailRepository orderDetailRepository)
        {
            _orderRepository = orderRepository;
            _orderDetailRepository = orderDetailRepository;
        }

        public JsonResult GetOrderDetails(int id, [DataSourceRequest] DataSourceRequest dataSourceRequest)
        {
            IQueryable<OrderDetail> orderDetails = _orderDetailRepository.GetAllOrderDetails().Where(od => od.OrderId == id);
            return Json(orderDetails.ToDataSourceResult(dataSourceRequest, Mapper.Map<OrderDetailViewModel>), JsonRequestBehavior.AllowGet);
        }

        [HttpPut]
        public JsonResult CreateOrderDetail(int id, OrderDetailViewModel orderDetailViewModel, [DataSourceRequest] DataSourceRequest dataSourceRequest)
        {
            var order = _orderRepository.GetAllOrders().SingleOrDefault(o => o.OrderId == id);

            if (order.OrderDate > orderDetailViewModel.ValueDate)
            {
                ModelState.AddModelError("OrderDate", "Order detail can't pre-date order");
            }
            if (ModelState.IsValid)
            {
                orderDetailViewModel.OrderId = id;
                var orderDetail = Mapper.Map<OrderDetail>(orderDetailViewModel);
                _orderDetailRepository.Add(orderDetail);
                _orderDetailRepository.SaveChanges();

                orderDetailViewModel.OrderDetailId = orderDetail.OrderDetailId;
            }

            var resultData = new[] { orderDetailViewModel };
            return Json(resultData.AsQueryable().ToDataSourceResult(dataSourceRequest, ModelState));
        }

        [HttpPost]
        public JsonResult UpdateOrderDetail([DataSourceRequest] DataSourceRequest dataSourceRequest, OrderDetailViewModel orderDetailViewModel)
        {
            var order = _orderRepository.GetOrderById(orderDetailViewModel.OrderId);

            if (order.OrderDate > orderDetailViewModel.ValueDate)
            {
                ModelState.AddModelError("OrderDate", "Order detail can't pre-date order");
            }
            if (ModelState.IsValid)
            {
                var recordToUpdate = _orderDetailRepository.GetOrderDetailById(orderDetailViewModel.OrderDetailId);
                recordToUpdate.NetWeight = orderDetailViewModel.NetWeight;
                recordToUpdate.Origin = orderDetailViewModel.Origin;
                recordToUpdate.PricePerUnitOfWeight = orderDetailViewModel.PricePerUnitOfWeight;
                recordToUpdate.Units = orderDetailViewModel.Units;
                recordToUpdate.UnitWeight = orderDetailViewModel.UnitWeight;
                recordToUpdate.ValueDate = orderDetailViewModel.ValueDate;
                recordToUpdate.PackageTypeId = int.Parse(orderDetailViewModel.PackageTypeId);
                _orderRepository.SaveChanges();
            }

            var resultData = new[] { orderDetailViewModel };
            return Json(resultData.AsQueryable().ToDataSourceResult(dataSourceRequest, ModelState));
        }

        [HttpDelete]
        public JsonResult DeleteOrderDetail(OrderDetailViewModel orderDetailViewModel, [DataSourceRequest] DataSourceRequest dataSourceRequest)
        {
            var recordToDelete = _orderDetailRepository.GetOrderDetailById(orderDetailViewModel.OrderDetailId);
            if (recordToDelete != null)
            {
                _orderDetailRepository.Remove(recordToDelete);
                _orderDetailRepository.SaveChanges();
            }

            var resultData = new[] { orderDetailViewModel };
            return Json(resultData.AsQueryable().ToDataSourceResult(dataSourceRequest));
        }
    }
}
