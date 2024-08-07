using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.SchedulerEditingCustomEditor
{
    public class EditorImportExportKendoWidgetAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "SchedulerEditingCustomEditor";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "SchedulerEditingCustomEditor_default",
                "SchedulerEditingCustomEditor/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}