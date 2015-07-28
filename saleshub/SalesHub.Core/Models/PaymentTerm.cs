using System;
using System.ComponentModel;

namespace SalesHub.Core.Models
{
    public class PaymentTerm
    {
        public PaymentTerm()
        {
            PaymentTermType = new PaymentTermType();
        }

        public int PaymentTermId { get; set; }

        [DisplayName("Split")]
        public decimal SplitPercentage { get; set; }

        [DisplayName("Payment Terms")]
        public virtual PaymentTermType PaymentTermType { get; set; }
        public int PaymentTermTypeId { get; set; }

        [DisplayName("Credit Terms")]
        public int CreditTerms { get; set; }

        [DisplayName("Est. Payment Days After Invoice")]
        public int EstPaymentDays { get; set; }

        public virtual Order SalesIntent { get; set; }
    }
}