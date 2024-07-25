using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.EditorImportExport
{
    public class EditorImportExportAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "EditorImportExport";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "EditorImportExport_default",
                "EditorImportExport/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}