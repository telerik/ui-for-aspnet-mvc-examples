using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GanttImportExportUsingMpxj
{
    public class EditorImportExportKendoWidgetAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GanttImportExportUsingMpxj";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GanttImportExportUsingMpxj_default",
                "GanttImportExportUsingMpxj/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}