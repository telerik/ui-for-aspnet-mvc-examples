using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridHierarchyDynamicModelLoadingAndDataTable
{
    public class GridHierarchyDynamicModelLoadingAndDataTableAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridHierarchyDynamicModelLoadingAndDataTable";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridHierarchyDynamicModelLoadingAndDataTable_default",
                "GridHierarchyDynamicModelLoadingAndDataTable/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}