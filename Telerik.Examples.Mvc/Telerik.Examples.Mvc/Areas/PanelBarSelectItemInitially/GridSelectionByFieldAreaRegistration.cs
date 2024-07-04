using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.PanelBarSelectItemInitially
{
    public class PanelBarSelectItemInitiallyAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "PanelBarSelectItemInitially";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "PanelBarSelectItemInitially_default",
                "PanelBarSelectItemInitially/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}