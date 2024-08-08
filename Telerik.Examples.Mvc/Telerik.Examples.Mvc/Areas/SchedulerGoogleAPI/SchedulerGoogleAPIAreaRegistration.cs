using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.SchedulerGoogleAPI
{
    public class GridSignalRAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "SchedulerGoogleAPI";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "SchedulerGoogleAPI_default",
                "SchedulerGoogleAPI/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}