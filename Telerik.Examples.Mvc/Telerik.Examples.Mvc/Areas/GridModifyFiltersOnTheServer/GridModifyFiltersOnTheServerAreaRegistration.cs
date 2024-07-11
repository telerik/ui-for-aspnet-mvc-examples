using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridModifyFiltersOnTheServer
{
    public class GridModifyFiltersOnTheServerAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridModifyFiltersOnTheServer";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridModifyFiltersOnTheServer_default",
                "GridModifyFiltersOnTheServer/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}