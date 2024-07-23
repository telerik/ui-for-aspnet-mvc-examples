using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.ODataWebApiWrappers
{
    public class GridSignalRAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "ODataWebApiWrappers";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "ODataWebApiWrappers_default",
                "ODataWebApiWrappers/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}