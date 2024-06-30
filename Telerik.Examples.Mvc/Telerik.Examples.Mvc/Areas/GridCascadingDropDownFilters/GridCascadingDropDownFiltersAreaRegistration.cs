using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridCascadingDropDownFilters
{
    public class GridCascadingDropDownFiltersAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridCascadingDropDownFilters";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridCascadingDropDownFilters_default",
                "GridCascadingDropDownFilters/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}