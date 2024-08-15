using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridSaveAllChangesOneRequest
{
    public class GridSaveAllChangesOneRequestAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridSaveAllChangesOneRequest";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridSaveAllChangesOneRequest_default",
                "GridSaveAllChangesOneRequest/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}