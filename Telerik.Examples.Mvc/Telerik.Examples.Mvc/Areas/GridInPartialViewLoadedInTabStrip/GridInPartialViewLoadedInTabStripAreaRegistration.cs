using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridInPartialViewLoadedInTabStrip
{
    public class GridInPartialViewLoadedInTabStripAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridInPartialViewLoadedInTabStrip";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridInPartialViewLoadedInTabStrip_default",
                "GridInPartialViewLoadedInTabStrip/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}