using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using SalesHub.Core.Models;

namespace SalesHub.Client.ViewModels.Client
{
    public class OrderPaymentTermViewModel
    {
        public PaymentTerm PaymentTerm { get; set; }
        public IEnumerable<SelectListItem> PaymentTermTypes { get; set; }
        public IEnumerable<SelectListItem> CreditTermDurations { get; set; }
        public IEnumerable<SelectListItem> SplitPercentages { get; set; }
    }
}