using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditingExternalContainer
{
    public class GridEditingExternalContainerAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditingExternalContainer";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditingExternalContainer_default",
                "GridEditingExternalContainer/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}