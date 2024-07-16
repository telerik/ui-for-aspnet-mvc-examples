using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.SchedulerServerFiltering
{
    public class EditorImportExportKendoWidgetAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "SchedulerServerFiltering";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "SchedulerServerFiltering_default",
                "SchedulerServerFiltering/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}