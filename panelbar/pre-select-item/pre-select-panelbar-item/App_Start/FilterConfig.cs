using System.Web;
using System.Web.Mvc;

namespace panelbar_hierarchy_binding
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}