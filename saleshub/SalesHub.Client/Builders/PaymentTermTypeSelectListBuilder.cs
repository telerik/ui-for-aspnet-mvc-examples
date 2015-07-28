using SalesHub.Core.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace SalesHub.Client.Builders
{
    public class PaymentTermTypeSelectListBuilder : IPaymentTermTypeSelectListBuilder
    {
        public IList<SelectListItem> BuildSelectList(IEnumerable<PaymentTermType> paymentTermsTypes)
        {
            return paymentTermsTypes.Select(x => new SelectListItem
                {
                    Value = x.PaymentTermTypeId.ToString(),
                    Text = x.Name,
                    Selected = false
                }).ToList();
        }
    }
}