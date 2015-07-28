using System.Linq;
using SalesHub.Core.Models;
using SalesHub.Core.Repositories;

namespace SalesHub.Data.Repositories
{
    public class PaymentTermRepository : IPaymentTermRepository
    {
        private readonly ISalesHubDbContext _salesHubDbContext;

        public PaymentTermRepository(ISalesHubDbContext salesHubDbContext)
        {
            _salesHubDbContext = salesHubDbContext;
        }

        public void Add(PaymentTerm paymentTerm)
        {
            _salesHubDbContext.PaymentTerms.Add(paymentTerm);
        }

        public PaymentTerm GetPaymentTermById(int paymentTermId)
        {
            return _salesHubDbContext.PaymentTerms.SingleOrDefault(x => x.PaymentTermId == paymentTermId);
        }
    }
}