using System.Collections.Generic;
using System.Web.Mvc;

namespace SalesHub.Client.Builders
{
    public interface IPackageTypeSelectListBuilder
    {
        IList<SelectListItem> BuildSelectList();
    }
}