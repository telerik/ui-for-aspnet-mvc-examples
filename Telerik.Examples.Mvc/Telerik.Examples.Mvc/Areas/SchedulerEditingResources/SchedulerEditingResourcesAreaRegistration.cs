using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.SchedulerEditingResources
{
    public class GridSignalRAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "SchedulerEditingResources";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "SchedulerEditingResources_default",
                "SchedulerEditingResources/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}