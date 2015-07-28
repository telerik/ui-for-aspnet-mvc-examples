using System.Collections.Generic;
using System.Linq;
using SalesHub.Core.Models;

namespace SalesHub.Core.Repositories
{
    public interface IOrderRepository
    {
        IQueryable<Order> GetAllOrders();
        Order GetOrderById(int orderId);
        Order GetOrderWithPaymentTermsById(int orderId);
        void SaveChanges();
        IList<Order> GetOrdersForCustomer(int customerId);
        void Add(Order order);
        void Delete(Order order);
    }
}