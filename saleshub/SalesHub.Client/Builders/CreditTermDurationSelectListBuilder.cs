using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace SalesHub.Client.Builders
{
    public class CreditTermDurationSelectListBuilder : ICreditTermDurationSelectListBuilder
    {
        public IList<SelectListItem> BuildSelectList()
        {
            return new[] {
                new SelectListItem { Value = "0", Text = "Immediate", Selected = false },
            }.Concat(new[] { "5", "7", "10", "14", "15", "30", "45", "60", "65", "75", "80", "90", "120", "150", "160", "180" }
                .Select(x => new SelectListItem { Value = x, Text = x + " days", Selected = false })
            ).ToList();
        }
    }
}