using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditingModelStateError
{
    public class GridEditingModelStateErrorAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditingModelStateError";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditingModelStateError_default",
                "GridEditingModelStateError/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}