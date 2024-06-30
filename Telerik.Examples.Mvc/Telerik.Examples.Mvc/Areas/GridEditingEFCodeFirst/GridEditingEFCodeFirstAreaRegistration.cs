using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditingEFCodeFirst
{
    public class GridEditingEFCodeFirstAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditingEFCodeFirst";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditingEFCodeFirst_default",
                "GridEditingEFCodeFirst/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}