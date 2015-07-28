using SalesHub.Core.Models;

namespace SalesHub.Client.Processors
{
    public interface IPaymentTermProcessor
    {
        PaymentTerm ProcessPaymentTerm(PaymentTerm paymentTerm);
    }
}