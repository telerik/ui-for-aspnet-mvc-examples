using System.Collections.Generic;
using System.Linq;
using SalesHub.Core.Models;
using SalesHub.Core.Repositories;

namespace SalesHub.Data.Repositories
{
    public class PaymentTermTypeRepository : IPaymentTermTypeRepository
    {
        private readonly ISalesHubDbContext _salesHubDbContext;

        public PaymentTermTypeRepository(ISalesHubDbContext salesHubDbContext)
        {
            _salesHubDbContext = salesHubDbContext;
        }

        public PaymentTermType GetPaymentTermTypeById(int paymentTermTypeId)
        {
            return _salesHubDbContext.PaymentTermTypes.Single(x => x.PaymentTermTypeId == paymentTermTypeId);
        }

        public IList<PaymentTermType> GetAllPaymentTermTypes()
        {
            return _salesHubDbContext.PaymentTermTypes.ToList();
        }
    }
}