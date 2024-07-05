using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditingPopUpAccessModel
{
    public class GridEditingPopUpAccessModelAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditingPopUpAccessModel";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditingPopUpAccessModel_default",
                "GridEditingPopUpAccessModel/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}