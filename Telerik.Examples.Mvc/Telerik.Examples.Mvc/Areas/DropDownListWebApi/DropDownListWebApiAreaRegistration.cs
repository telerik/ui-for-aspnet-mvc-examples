using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.DropDownListWebApi
{
    public class GridSignalRAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "DropDownListWebApi";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "DropDownListWebApi_default",
                "DropDownListWebApi/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}