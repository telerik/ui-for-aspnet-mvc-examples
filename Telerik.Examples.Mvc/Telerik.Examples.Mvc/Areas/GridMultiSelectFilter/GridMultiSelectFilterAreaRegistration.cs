using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridMultiSelectFilter
{
    public class GridMultiSelectFilterAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridMultiSelectFilter";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridMultiSelectFilter_default",
                "GridMultiSelectFilter/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}