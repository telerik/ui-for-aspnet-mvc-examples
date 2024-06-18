using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditingPoPupRequiredDropDownListFor
{
    public class GridEditingPoPupRequiredDropDownListForAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditingPoPupRequiredDropDownListFor";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditingPoPupRequiredDropDownListFor_default",
                "GridEditingPoPupRequiredDropDownListFor/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}