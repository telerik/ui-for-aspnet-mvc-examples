using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridSaveStateInSessionServerSide
{
    public class GridSaveStateInSessionServerSideAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridSaveStateInSessionServerSide";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridSaveStateInSessionServerSide_default",
                "GridSaveStateInSessionServerSide/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}