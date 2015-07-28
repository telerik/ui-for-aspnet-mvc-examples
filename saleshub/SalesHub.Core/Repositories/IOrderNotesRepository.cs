using System.Linq;
using SalesHub.Core.Models;

namespace SalesHub.Core.Repositories
{
    public interface IOrderNotesRepository
    {
        OrderNote GetOrderNoteById(int id);
        IQueryable<OrderNote> GetOrderNotesForOrder(int id);
        void Add(OrderNote orderNote);
        void SaveChanges();
    }
}