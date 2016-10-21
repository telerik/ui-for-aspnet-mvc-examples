using System.Web;
using System.Web.Mvc;

namespace KendoWindow_Ajax_Form
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
