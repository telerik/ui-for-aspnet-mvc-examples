using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.SchedulerSignalRServerFiltering
{
    public class GridSignalRAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "SchedulerSignalRServerFiltering";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "SchedulerSignalRServerFiltering_default",
                "SchedulerSignalRServerFiltering/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}