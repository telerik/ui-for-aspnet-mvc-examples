using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.DropDownListVirtualization
{
    public class DropDownListVirtualizationAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "DropDownListVirtualization";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "DropDownListVirtualization_default",
                "DropDownListVirtualization/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}