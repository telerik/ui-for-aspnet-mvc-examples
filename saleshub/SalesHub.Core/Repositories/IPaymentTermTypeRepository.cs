using System.Collections.Generic;
using SalesHub.Core.Models;

namespace SalesHub.Core.Repositories
{
    public interface IPaymentTermTypeRepository
    {
        PaymentTermType GetPaymentTermTypeById(int paymentTermTypeId);
        IList<PaymentTermType> GetAllPaymentTermTypes();
    }
}