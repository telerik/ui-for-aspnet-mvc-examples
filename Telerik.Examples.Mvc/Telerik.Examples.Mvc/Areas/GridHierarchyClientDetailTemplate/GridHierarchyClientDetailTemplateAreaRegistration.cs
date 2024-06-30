using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridHierarchyClientDetailTemplate
{
    public class GridHierarchyClientDetailTemplateAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridHierarchyClientDetailTemplate";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridHierarchyClientDetailTemplate_default",
                "GridHierarchyClientDetailTemplate/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}