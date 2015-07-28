using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using SalesHub.Core.Models;
using SalesHub.Core.Repositories;

namespace SalesHub.Data.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly ISalesHubDbContext _salesHubDbContext;

        public OrderRepository(ISalesHubDbContext salesHubDbContext)
        {
            _salesHubDbContext = salesHubDbContext;
        }

        public IQueryable<Order> GetAllOrders()
        {
            return _salesHubDbContext.Orders;
        }

        public Order GetOrderById(int orderId)
        {
            return _salesHubDbContext.Orders.SingleOrDefault(x => x.OrderId == orderId);
        }

        public Order GetOrderWithPaymentTermsById(int orderId)
        {
            return _salesHubDbContext.Orders
                .Include("PaymentTerm1")
                .Include("PaymentTerm2")
                .Include("PaymentTerm1.PaymentTermType")
                .Include("PaymentTerm2.PaymentTermType")
                .Single(x => x.OrderId == orderId);
        }

        public void SaveChanges()
        {
            _salesHubDbContext.SaveChanges();
        }

        public IList<Order> GetOrdersForCustomer(int customerId)
        {
            return _salesHubDbContext.Orders.Where(x => x.CustomerId == customerId).ToList();
        }

        public void Add(Order order)
        {
            _salesHubDbContext.Orders.Add(order);
        }

        public void Delete(Order order)
        {
            _salesHubDbContext.Orders.Remove(order);
        }
    }
}