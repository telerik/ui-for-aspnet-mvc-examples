using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridCustomCommandsImageButtons
{
    public class GridCustomCommandsImageButtonsAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridCustomCommandsImageButtons";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridCustomCommandsImageButtons_default",
                "GridCustomCommandsImageButtons/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}