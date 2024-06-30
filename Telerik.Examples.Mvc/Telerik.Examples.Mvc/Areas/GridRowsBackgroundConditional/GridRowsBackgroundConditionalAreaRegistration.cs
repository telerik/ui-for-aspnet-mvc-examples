using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridRowsBackgroundConditional
{
    public class GridRowsBackgroundConditionalAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridRowsBackgroundConditional";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridRowsBackgroundConditional_default",
                "GridRowsBackgroundConditional/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}