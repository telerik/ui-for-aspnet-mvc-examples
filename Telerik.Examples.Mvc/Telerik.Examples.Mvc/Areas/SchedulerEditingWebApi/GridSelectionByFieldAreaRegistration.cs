using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.SchedulerEditingWebApi
{
    public class GridSignalRAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "SchedulerEditingWebApi";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "SchedulerEditingWebApi_default",
                "SchedulerEditingWebApi/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}