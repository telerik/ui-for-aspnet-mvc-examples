using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using SalesHub.Core.Models;

namespace SalesHub.Client.Builders
{
    public class CurrencyTypeSelectListBuilder : ICurrencyTypeSelectListBuilder
    {
        public IEnumerable<SelectListItem> BuildSelectListItemsForCurrencyTypes(IEnumerable<CurrencyType> currencyTypes)
        {
            return currencyTypes.Select(ct => new SelectListItem {Text = ct.CurrencyName, Value = ct.CurrencyTypeId.ToString() }).ToList();
        }
    }
}