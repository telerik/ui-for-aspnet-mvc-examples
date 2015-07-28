using System;
using SalesHub.Core.Models;
using System.Collections.Generic;
using System.Web.Mvc;

namespace SalesHub.Client.Builders
{
    public interface IPaymentTermTypeSelectListBuilder
    {
        IList<SelectListItem> BuildSelectList(IEnumerable<PaymentTermType> paymentTermsTypes);
    }
}
