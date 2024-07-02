using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.TreeViewLoadConditionally
{
    public class TreeViewLoadConditionallyAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "TreeViewLoadConditionally";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "TreeViewLoadConditionally_default",
                "TreeViewLoadConditionally/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}