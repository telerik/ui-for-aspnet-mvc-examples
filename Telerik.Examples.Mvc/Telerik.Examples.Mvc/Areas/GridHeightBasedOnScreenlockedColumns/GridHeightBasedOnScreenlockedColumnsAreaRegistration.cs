using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridHeightBasedOnScreenlockedColumns
{
    public class GridHeightBasedOnScreenlockedColumnsAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridHeightBasedOnScreenlockedColumns";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridHeightBasedOnScreenlockedColumns_default",
                "GridHeightBasedOnScreenlockedColumns/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}