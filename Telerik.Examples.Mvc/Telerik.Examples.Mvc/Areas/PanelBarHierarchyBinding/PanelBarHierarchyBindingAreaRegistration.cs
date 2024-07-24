using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.PanelBarHierarchyBinding
{
    public class PanelBarHierarchyBindingAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "PanelBarHierarchyBinding";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "PanelBarHierarchyBinding_default",
                "PanelBarHierarchyBinding/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}