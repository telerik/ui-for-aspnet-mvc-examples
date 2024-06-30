using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridCustomAjaxBinding
{
    public class GridCustomAjaxBindingAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridCustomAjaxBinding";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridCustomAjaxBinding_default",
                "GridCustomAjaxBinding/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}