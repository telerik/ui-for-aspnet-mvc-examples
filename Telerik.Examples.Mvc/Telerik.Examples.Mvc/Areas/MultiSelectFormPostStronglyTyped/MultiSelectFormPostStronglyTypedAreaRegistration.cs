using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.MultiSelectFormPostStronglyTyped
{
    public class MultiSelectFormPostStronglyTypedAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "MultiSelectFormPostStronglyTyped";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "MultiSelectFormPostStronglyTyped_default",
                "MultiSelectFormPostStronglyTyped/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}