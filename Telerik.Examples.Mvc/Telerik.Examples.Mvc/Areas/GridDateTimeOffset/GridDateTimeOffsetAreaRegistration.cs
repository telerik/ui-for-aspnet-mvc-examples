using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridDateTimeOffset
{
    public class EditorImportExportKendoWidgetAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridDateTimeOffset";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridDateTimeOffset_default",
                "GridDateTimeOffset/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}