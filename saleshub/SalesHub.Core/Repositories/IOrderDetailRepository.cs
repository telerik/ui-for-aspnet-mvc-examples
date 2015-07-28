using System.Linq;
using SalesHub.Core.Models;

namespace SalesHub.Core.Repositories
{
    public interface IOrderDetailRepository
    {
        IQueryable<OrderDetail> GetAllOrderDetails();
        void AddOrderDetail(OrderDetail orderDetail);
        void SaveChanges();
        void Add(OrderDetail orderDetail);
        OrderDetail GetOrderDetailById(int orderDetailId);
        void Remove(OrderDetail recordToDelete);
    }
}