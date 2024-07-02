using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.WindowFormWithAjax
{
    public class WindowFormWithAjaxAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "WindowFormWithAjax";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "WindowFormWithAjax_default",
                "WindowFormWithAjax/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}