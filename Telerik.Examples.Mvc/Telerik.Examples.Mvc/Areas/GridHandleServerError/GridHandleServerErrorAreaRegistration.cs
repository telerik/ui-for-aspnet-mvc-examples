using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridHandleServerError
{
    public class GridHandleServerErrorAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridHandleServerError";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridHandleServerError_default",
                "GridHandleServerError/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}