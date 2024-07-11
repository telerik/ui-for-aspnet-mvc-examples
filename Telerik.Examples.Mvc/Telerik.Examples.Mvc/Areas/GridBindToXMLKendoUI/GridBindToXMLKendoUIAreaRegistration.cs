using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridBindToXMLKendoUI
{
    public class GridBindToXMLKendoUIAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridBindToXMLKendoUI";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridBindToXMLKendoUI_default",
                "GridBindToXMLKendoUI/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}