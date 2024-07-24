using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditTimespan
{
    public class GridEditTimespanAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditTimespan";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditTimespan_default",
                "GridEditTimespan/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}