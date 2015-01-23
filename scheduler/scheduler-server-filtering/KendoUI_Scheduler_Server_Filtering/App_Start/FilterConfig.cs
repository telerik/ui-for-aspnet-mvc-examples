using System.Web;
using System.Web.Mvc;

namespace KendoUI_Scheduler_Server_Filtering
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}