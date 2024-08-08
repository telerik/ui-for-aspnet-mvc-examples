using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.SchedulerValidatingTimeslot
{
    public class GridSignalRAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "SchedulerValidatingTimeslot";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "SchedulerValidatingTimeslot_default",
                "SchedulerValidatingTimeslot/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}