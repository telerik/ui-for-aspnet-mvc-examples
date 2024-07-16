using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.SchedulerTooltip
{
    public class EditorImportExportKendoWidgetAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "SchedulerTooltip";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "SchedulerTooltip_default",
                "SchedulerTooltip/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}