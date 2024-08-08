using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditingInCellWebApi
{
    public class GridSignalRAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditingInCellWebApi";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditingInCellWebApi_default",
                "GridEditingInCellWebApi/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}