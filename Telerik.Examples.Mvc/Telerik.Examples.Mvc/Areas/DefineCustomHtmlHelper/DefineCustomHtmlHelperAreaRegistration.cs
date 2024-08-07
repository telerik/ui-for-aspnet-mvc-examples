using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.DefineCustomHtmlHelper
{
    public class EditorImportExportKendoWidgetAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "DefineCustomHtmlHelper";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "DefineCustomHtmlHelper_default",
                "DefineCustomHtmlHelper/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}