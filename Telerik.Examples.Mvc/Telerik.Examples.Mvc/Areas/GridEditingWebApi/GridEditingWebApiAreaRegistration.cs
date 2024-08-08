using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditingWebApi
{
    public class GridSignalRAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditingWebApi";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditingWebApi_default",
                "GridEditingWebApi/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}