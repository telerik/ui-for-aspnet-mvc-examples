using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridDateUtcOnServerAndClient
{
    public class GridDateUtcOnServerAndClientAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridDateUtcOnServerAndClient";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridDateUtcOnServerAndClient_default",
                "GridDateUtcOnServerAndClient/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}