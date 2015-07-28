using System;
using System.Collections.Generic;
using System.Web.Mvc;

namespace SalesHub.Client.Builders
{
    public interface ISplitPercentagesSelectListBuilder
    {
        IList<SelectListItem> BuildSelectList();
    }
}
