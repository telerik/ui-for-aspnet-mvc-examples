using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditing3LevelHierarchy
{
    public class GridEditing3LevelHierarchyAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditing3LevelHierarchy";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditing3LevelHierarchy_default",
                "GridEditing3LevelHierarchy/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}