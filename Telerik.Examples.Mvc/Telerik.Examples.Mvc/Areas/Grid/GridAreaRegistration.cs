using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.Grid
{
    public class GridAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Grid";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "Grid_default",
                "Grid/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}