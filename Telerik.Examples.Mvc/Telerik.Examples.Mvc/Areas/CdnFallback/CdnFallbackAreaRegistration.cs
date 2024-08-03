using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.CdnFallback
{
    public class CdnFallbackAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "CdnFallback";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "CdnFallback_default",
                "CdnFallback/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}