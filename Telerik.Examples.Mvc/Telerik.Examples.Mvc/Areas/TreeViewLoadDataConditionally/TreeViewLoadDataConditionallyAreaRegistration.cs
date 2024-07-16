using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.TreeViewLoadDataConditionally
{
    public class EditorImportExportKendoWidgetAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "TreeViewLoadDataConditionally";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "TreeViewLoadDataConditionally_default",
                "TreeViewLoadDataConditionally/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}