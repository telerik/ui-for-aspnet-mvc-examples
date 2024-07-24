using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.MenuSameControllersInDifferentAreas
{
    public class EditorImportExportKendoWidgetAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "MenuSameControllersInDifferentAreas";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "MenuSameControllersInDifferentAreas_default",
                "MenuSameControllersInDifferentAreas/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}