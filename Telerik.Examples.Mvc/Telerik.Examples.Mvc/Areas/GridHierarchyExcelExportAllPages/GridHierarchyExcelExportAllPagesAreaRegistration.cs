using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridHierarchyExcelExportAllPages
{
    public class GridHierarchyExcelExportAllPagesAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridHierarchyExcelExportAllPages";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridHierarchyExcelExportAllPages_default",
                "GridHierarchyExcelExportAllPages/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}