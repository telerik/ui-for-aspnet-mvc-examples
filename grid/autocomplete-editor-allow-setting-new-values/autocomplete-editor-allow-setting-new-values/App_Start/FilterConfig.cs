using System.Web;
using System.Web.Mvc;

namespace autocomplete_editor_allow_setting_new_values
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
