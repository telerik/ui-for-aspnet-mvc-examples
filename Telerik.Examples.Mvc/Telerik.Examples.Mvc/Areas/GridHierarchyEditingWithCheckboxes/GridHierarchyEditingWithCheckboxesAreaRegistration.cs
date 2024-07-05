using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridHierarchyEditingWithCheckboxes
{
    public class GridHierarchyEditingWithCheckboxesAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridHierarchyEditingWithCheckboxes";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridHierarchyEditingWithCheckboxes_default",
                "GridHierarchyEditingWithCheckboxes/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}