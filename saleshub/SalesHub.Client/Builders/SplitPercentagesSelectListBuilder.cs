using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace SalesHub.Client.Builders
{
    public class SplitPercentagesSelectListBuilder : ISplitPercentagesSelectListBuilder
    {
        public IList<SelectListItem> BuildSelectList()
        {
            return Enumerable.Range(0, 11).Reverse().Select(i => i * 10).Select(i => new SelectListItem { Value = (i/100f).ToString("F1"), Text = i + "%", Selected = false }).ToList();
        }
    }
}