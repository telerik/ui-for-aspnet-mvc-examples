using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridHierarchyInCellEditing
{
    public class GridHierarchyInCellEditingAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridHierarchyInCellEditing";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridHierarchyInCellEditing_default",
                "GridHierarchyInCellEditing/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}