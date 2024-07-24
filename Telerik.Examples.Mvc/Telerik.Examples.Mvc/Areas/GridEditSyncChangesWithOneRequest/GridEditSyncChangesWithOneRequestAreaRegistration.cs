using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditSyncChangesWithOneRequest
{
    public class GridEditSyncChangesWithOneRequestAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditSyncChangesWithOneRequest";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditSyncChangesWithOneRequest_default",
                "GridEditSyncChangesWithOneRequest/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}