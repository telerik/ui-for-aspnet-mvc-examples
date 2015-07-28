using SalesHub.Core.Models;
using SalesHub.Core.Repositories;

namespace SalesHub.Client.Processors
{
    public class PaymentTermProcessor : IPaymentTermProcessor
    {
        private readonly IPaymentTermRepository _paymentTermRepository;
        private readonly IPaymentTermTypeRepository _paymentTermTypeRepository;

        public PaymentTermProcessor(IPaymentTermRepository paymentTermRepository, IPaymentTermTypeRepository paymentTermTypeRepository)
        {
            _paymentTermRepository = paymentTermRepository;
            _paymentTermTypeRepository = paymentTermTypeRepository;
        }

        public PaymentTerm ProcessPaymentTerm(PaymentTerm paymentTerm)
        {
            if (paymentTerm.PaymentTermId == 0 && paymentTerm.SplitPercentage == 0)
                return null;
            if (paymentTerm.PaymentTermId == 0)
                return AddPaymentTerm(paymentTerm);
            return UpdatePaymentTerm(paymentTerm);
        }

        private PaymentTerm AddPaymentTerm(PaymentTerm paymentTerm)
        {
            paymentTerm.PaymentTermType = _paymentTermTypeRepository.GetPaymentTermTypeById(paymentTerm.PaymentTermType.PaymentTermTypeId);
            _paymentTermRepository.Add(paymentTerm);
            return paymentTerm;
        }

        private PaymentTerm UpdatePaymentTerm(PaymentTerm paymentTerm)
        {
            var paymentTermToUpdate = _paymentTermRepository.GetPaymentTermById(paymentTerm.PaymentTermId);
            paymentTermToUpdate.PaymentTermType = paymentTerm.PaymentTermType;
            paymentTermToUpdate.SalesIntent = paymentTerm.SalesIntent;
            paymentTermToUpdate.SplitPercentage = paymentTerm.SplitPercentage;
            paymentTermToUpdate.CreditTerms = paymentTerm.CreditTerms;
            paymentTermToUpdate.EstPaymentDays = paymentTerm.EstPaymentDays;
            return paymentTermToUpdate;
        }
    }
}