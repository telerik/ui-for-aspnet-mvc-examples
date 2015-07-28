using SalesHub.Core.Models;
using System.Collections.Generic;
using System.Web.Mvc;

namespace SalesHub.Client.Builders
{
    public interface ICurrencyTypeSelectListBuilder
    {
        IEnumerable<SelectListItem> BuildSelectListItemsForCurrencyTypes(IEnumerable<CurrencyType> currencyTypes);
    }
}