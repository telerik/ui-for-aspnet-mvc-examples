using System.Data.Entity;
using System.Linq;
using SalesHub.Core.Models;
using SalesHub.Core.Repositories;

namespace SalesHub.Data.Repositories
{
    public class OrderNotesRepository : IOrderNotesRepository
    {
        private readonly ISalesHubDbContext _salesHubDbContext;

        public OrderNotesRepository(ISalesHubDbContext salesHubDbContext)
        {
            _salesHubDbContext = salesHubDbContext;
        }

        public OrderNote GetOrderNoteById(int id)
        {
            return _salesHubDbContext.OrderNotes.SingleOrDefault(x => x.OrderNoteId == id);
        }

        public IQueryable<OrderNote> GetOrderNotesForOrder(int orderId)
        {
            return _salesHubDbContext.OrderNotes.Where(x => x.OrderId == orderId).Include("User");
        }

        public void Add(OrderNote orderNote)
        {
            _salesHubDbContext.OrderNotes.Add(orderNote);
        }

        public void SaveChanges()
        {
            _salesHubDbContext.SaveChanges();
        }
    }
}