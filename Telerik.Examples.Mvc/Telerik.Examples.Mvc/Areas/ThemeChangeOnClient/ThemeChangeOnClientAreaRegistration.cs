using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.ThemeChangeOnClient
{
    public class ThemeChangeOnClientAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "ThemeChangeOnClient";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "ThemeChangeOnClient_default",
                "ThemeChangeOnClient/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}