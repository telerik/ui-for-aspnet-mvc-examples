using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.TreeViewExpandSelectedItemAsync
{
    public class EditorImportExportKendoWidgetAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "TreeViewExpandSelectedItemAsync";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "TreeViewExpandSelectedItemAsync_default",
                "TreeViewExpandSelectedItemAsync/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}