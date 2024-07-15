using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridSaveStateWithBrowserHistoryAPI
{
    public class GridSaveStateWithBrowserHistoryAPIAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridSaveStateWithBrowserHistoryAPI";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridSaveStateWithBrowserHistoryAPI_default",
                "GridSaveStateWithBrowserHistoryAPI/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}