using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridDateIgnoreTimeZones
{
    public class GridDateIgnoreTimeZonesAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridDateIgnoreTimeZones";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridDateIgnoreTimeZones_default",
                "GridDateIgnoreTimeZones/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}