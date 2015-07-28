using SalesHub.Core.Models;

namespace SalesHub.Core.Repositories
{
    public interface IPaymentTermRepository
    {
        void Add(PaymentTerm paymentTerm);
        PaymentTerm GetPaymentTermById(int paymentTermId);
    }
}