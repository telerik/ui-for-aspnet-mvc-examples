using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.SchedulerDragAndDrop
{
    public class EditorImportExportKendoWidgetAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "SchedulerDragAndDrop";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "SchedulerDragAndDrop_default",
                "SchedulerDragAndDrop/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}