using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.MenuSecurityTrimming
{
    public class GridSignalRAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "MenuSecurityTrimming";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "MenuSecurityTrimming_default",
                "MenuSecurityTrimming/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}