using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.MenuOpenWindowWithAjax
{
    public class MenuOpenWindowWithAjaxAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "MenuOpenWindowWithAjax";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "MenuOpenWindowWithAjax_default",
                "MenuOpenWindowWithAjax/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}