using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditingPopUpNestedGrid
{
    public class GridEditingPopUpNestedGridAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditingPopUpNestedGrid";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditingPopUpNestedGrid_default",
                "GridEditingPopUpNestedGrid/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}