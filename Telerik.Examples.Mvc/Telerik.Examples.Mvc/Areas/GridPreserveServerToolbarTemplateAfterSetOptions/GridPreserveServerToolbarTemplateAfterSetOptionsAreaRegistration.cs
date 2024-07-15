using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridPreserveServerToolbarTemplateAfterSetOptions
{
    public class GridPreserveServerToolbarTemplateAfterSetOptionsAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridPreserveServerToolbarTemplateAfterSetOptions";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridPreserveServerToolbarTemplateAfterSetOptions_default",
                "GridPreserveServerToolbarTemplateAfterSetOptions/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}