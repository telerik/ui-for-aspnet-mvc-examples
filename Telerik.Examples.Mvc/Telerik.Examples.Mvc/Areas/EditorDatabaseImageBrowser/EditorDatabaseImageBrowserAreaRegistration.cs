using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.EditorDatabaseImageBrowser
{
    public class EditorImportExportKendoWidgetAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "EditorDatabaseImageBrowser";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "EditorDatabaseImageBrowser_default",
                "EditorDatabaseImageBrowser/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}