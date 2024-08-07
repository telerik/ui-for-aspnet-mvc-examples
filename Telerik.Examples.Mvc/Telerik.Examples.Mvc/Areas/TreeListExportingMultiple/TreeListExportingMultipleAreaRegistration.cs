using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.TreeListExportingMultiple
{
    public class EditorImportExportKendoWidgetAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "TreeListExportingMultiple";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "TreeListExportingMultiple_default",
                "TreeListExportingMultiple/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}