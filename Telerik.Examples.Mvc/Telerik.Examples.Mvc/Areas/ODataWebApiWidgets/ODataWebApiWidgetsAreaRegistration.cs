using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.ODataWebApiWidgets
{
    public class GridSignalRAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "ODataWebApiWidgets";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "ODataWebApiWidgets_default",
                "ODataWebApiWidgets/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}