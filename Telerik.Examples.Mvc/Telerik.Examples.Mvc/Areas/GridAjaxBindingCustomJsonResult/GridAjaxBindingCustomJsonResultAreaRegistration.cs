using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridAjaxBindingCustomJsonResult
{
    public class GridAjaxBindingCustomJsonResultAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridAjaxBindingCustomJsonResult";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.MapRoute(
                "GridAjaxBindingCustomJsonResult_default",
                "GridAjaxBindingCustomJsonResult/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}