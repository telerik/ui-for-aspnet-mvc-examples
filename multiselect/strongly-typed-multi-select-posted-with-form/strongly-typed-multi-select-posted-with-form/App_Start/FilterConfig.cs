using System.Web;
using System.Web.Mvc;

namespace strongly_typed_multi_select_posted_with_form
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}