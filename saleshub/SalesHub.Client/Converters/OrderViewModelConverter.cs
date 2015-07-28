using SalesHub.Client.ViewModels.Client;
using SalesHub.Core.Models;

namespace SalesHub.Client.Converters
{
    public class OrderViewModelConverter : IConverter<OrderViewModel, Order>
    {
        public OrderViewModel Convert(Order order)
        {
            return new OrderViewModel
            {
                OrderId = order.OrderId,
                OrderNumber = order.OrderNumber,
                ContractWeight = order.ContractWeight,
                ContractAmount = order.ContractAmount,
                OrderDate = order.OrderDate,
                IsActive = order.IsActive,
                CurrencyTypeId = order.ContractCurrencyTypeId,
                CustomerId = order.CustomerId,
                PaymentTermsOverride = order.PaymentTermsOverride,
                PaymentTerm1 = new OrderPaymentTermViewModel
                {
                    PaymentTerm = order.PaymentTerm1
                },
                PaymentTerm2 = new OrderPaymentTermViewModel
                {
                    PaymentTerm = order.PaymentTerm2
                },
                IntentComments = order.IntentComments,
                InvoiceComments = order.InvoiceComments,
                FooterComments = order.FooterComments,
                HeaderComments = order.HeaderComments
            };
        }
    }
}