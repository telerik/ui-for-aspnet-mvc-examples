using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridCustomCommandButtons
{
    public class GridCustomCommandButtonsAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridCustomCommandButtons";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridCustomCommandButtons_default",
                "GridCustomCommandButtons/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}