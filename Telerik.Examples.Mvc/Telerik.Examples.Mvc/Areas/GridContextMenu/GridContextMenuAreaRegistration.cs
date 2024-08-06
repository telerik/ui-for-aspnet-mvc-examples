using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridContextMenu
{
    public class GridContextMenuAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridContextMenu";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridContextMenu_default",
                "GridContextMenu/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}