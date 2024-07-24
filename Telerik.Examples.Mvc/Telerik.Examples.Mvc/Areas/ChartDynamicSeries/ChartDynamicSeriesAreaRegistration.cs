using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.ChartDynamicSeries
{
    public class ChartDynamicSeriesAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "ChartDynamicSeries";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "ChartDynamicSeries_default",
                "ChartDynamicSeries/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}