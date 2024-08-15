using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridContextMenuDisabledItems
{
    public class GridContextMenuDisabledItemsAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridContextMenuDisabledItems";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridContextMenuDisabledItems_default",
                "GridContextMenuDisabledItems/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}