using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.ChartInGrid
{
    public class ChartInGridAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "ChartInGrid";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "ChartInGrid_default",
                "ChartInGrid/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}