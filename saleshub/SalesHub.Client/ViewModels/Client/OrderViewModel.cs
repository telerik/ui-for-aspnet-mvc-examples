using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;
using DataAnnotationsExtensions;
using SalesHub.Core.Models;

namespace SalesHub.Client.ViewModels.Client
{
    public class OrderViewModel
    {
        public int OrderId { get; set; }

        [Required(ErrorMessage = "Order No is required")]
        public string OrderNumber { get; set; }

        [Required(ErrorMessage = "Contract Weight is required")]
        [Min(1, ErrorMessage = "Value must be greater than 1")]
        public decimal ContractWeight { get; set; }

        [Required(ErrorMessage = "Order date is required")]
        public DateTime OrderDate { get; set; }

        [Required(ErrorMessage = "Contract amount is required")]
        [Min(1, ErrorMessage = "Value must be greater than 1")]
        public decimal ContractAmount { get; set; }

        public int CurrencyTypeId { get; set; }

        public IEnumerable<SuggestedValue> SuggestedValues { get; set; }
        public IEnumerable<SelectListItem> CurrencyTypesSelectList { get; set; }

        public bool IsActive { get; set; }

        public UnitOfWeight UnitOfWeight { get; set; }

        public int CustomerId { get; set; }
        public string CustomerPath { get; set; }

        [DisplayName("Payment Terms Override")]
        public string PaymentTermsOverride { get; set; }

        public OrderPaymentTermViewModel PaymentTerm1 { get; set; }
        public OrderPaymentTermViewModel PaymentTerm2 { get; set; }

        public bool IsNew { get; set; }

        public string IntentComments { get; set; }
        public string InvoiceComments { get; set; }
        public string HeaderComments { get; set; }
        public string FooterComments { get; set; }

        public Customer Customer { get; set; }

        public bool SavedSuccessfully { get; set; }
    }
}