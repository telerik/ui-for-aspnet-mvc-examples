using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridForeignKeySorting
{
    public class GridForeignKeySortingAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridForeignKeySorting";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridForeignKeySorting_default",
                "GridForeignKeySorting/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}