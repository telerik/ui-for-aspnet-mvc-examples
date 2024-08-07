using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridHierarchyServerDetailTemplate
{
    public class EditorImportExportKendoWidgetAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridHierarchyServerDetailTemplate";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridHierarchyServerDetailTemplate_default",
                "GridHierarchyServerDetailTemplate/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}