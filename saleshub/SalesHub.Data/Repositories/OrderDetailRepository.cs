using System;
using System.Linq;
using SalesHub.Core.Models;
using SalesHub.Core.Repositories;

namespace SalesHub.Data.Repositories
{
    public class OrderDetailRepository : IOrderDetailRepository
    {
        private readonly ISalesHubDbContext _salesHubDbContext;

        public OrderDetailRepository(ISalesHubDbContext salesHubDbContext)
        {
            _salesHubDbContext = salesHubDbContext;
        }

        public IQueryable<OrderDetail> GetAllOrderDetails()
        {
            return _salesHubDbContext.OrderDetails;
        }

        public void AddOrderDetail(OrderDetail orderDetail)
        {
            _salesHubDbContext.OrderDetails.Add(orderDetail);
        }

        public void SaveChanges()
        {
            _salesHubDbContext.SaveChanges();
        }

        public void Add(OrderDetail orderDetail)
        {
            _salesHubDbContext.OrderDetails.Add(orderDetail);
        }

        public OrderDetail GetOrderDetailById(int orderDetailId)
        {
            return _salesHubDbContext.OrderDetails.SingleOrDefault(x => x.OrderDetailId == orderDetailId);
        }

        public void Remove(OrderDetail recordToDelete)
        {
            _salesHubDbContext.OrderDetails.Remove(recordToDelete);
        }
    }
}
