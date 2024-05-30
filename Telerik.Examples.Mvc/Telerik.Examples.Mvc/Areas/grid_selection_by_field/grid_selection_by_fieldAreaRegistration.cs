using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.grid_selection_by_field
{
    public class grid_selection_by_fieldAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "grid_selection_by_field";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "grid_selection_by_field_default",
                "grid_selection_by_field/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}