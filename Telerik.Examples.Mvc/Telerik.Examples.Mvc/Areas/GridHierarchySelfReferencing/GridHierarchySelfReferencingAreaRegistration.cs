using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridHierarchySelfReferencing
{
    public class GridHierarchySelfReferencingAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridHierarchySelfReferencing";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridHierarchySelfReferencing_default",
                "GridHierarchySelfReferencing/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}