using System;
using System.Collections.Generic;
using System.Linq;

namespace SalesHub.Core.Models
{
    public class Order
    {
        public int OrderId { get; set; }

        public string OrderNumber { get; set; }
        public DateTime OrderDate { get; set; }

        public UnitOfWeight UnitOfWeight { get; set; }

        public int NumberOfUnits { get; set; }

        public bool IsActive { get; set; }

        public decimal ContractWeight { get; set; }
        public decimal ContractAmount { get; set; }

        public int ContractCurrencyTypeId { get; set; }
        public virtual CurrencyType ContractCurrrencyType { get; set; }

        public string PaymentTermsOverride { get; set; }

        public virtual PaymentTerm PaymentTerm1 { get; set; }
        public virtual PaymentTerm PaymentTerm2 { get; set; }

        public int CustomerId { get; set; }
        public virtual Customer Customer { get; set; }

        public string IntentComments { get; set; }
        public string InvoiceComments { get; set; }
        public string HeaderComments { get; set; }
        public string FooterComments { get; set; }

        public virtual IList<OrderDetail> OrderDetails { get; set; }
    }
}
