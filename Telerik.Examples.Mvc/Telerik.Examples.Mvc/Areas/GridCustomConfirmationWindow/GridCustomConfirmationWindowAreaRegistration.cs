using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridCustomConfirmationWindow
{
    public class GridCustomConfirmationWindowAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridCustomConfirmationWindow";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridCustomConfirmationWindow_default",
                "GridCustomConfirmationWindow/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}