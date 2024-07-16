using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.EditorImportExportKendoWidget
{
    public class EditorImportExportKendoWidgetAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "EditorImportExportKendoWidget";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "EditorImportExportKendoWidget_default",
                "EditorImportExportKendoWidget/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}