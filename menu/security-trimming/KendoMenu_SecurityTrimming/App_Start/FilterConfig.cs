using System.Web;
using System.Web.Mvc;

namespace KendoMenu_SecurityTrimming
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
