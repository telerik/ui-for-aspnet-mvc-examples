using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.DefineCustomKendoHelper
{
    public class EditorImportExportKendoWidgetAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "DefineCustomKendoHelper";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "DefineCustomKendoHelper_default",
                "DefineCustomKendoHelper/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}