using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.SchedulerSignalRLocalHub
{
    public class GridSignalRAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "SchedulerSignalRLocalHub";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "SchedulerSignalRLocalHub_default",
                "SchedulerSignalRLocalHub/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}