using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.SchedulerCustomView
{
    public class EditorImportExportKendoWidgetAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "SchedulerCustomView";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "SchedulerCustomView_default",
                "SchedulerCustomView/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}