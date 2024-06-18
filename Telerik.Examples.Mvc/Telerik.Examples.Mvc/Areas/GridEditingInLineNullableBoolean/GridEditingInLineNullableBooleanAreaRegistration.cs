using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditingInLineNullableBoolean
{
    public class GridEditingInLineNullableBooleanAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditingInLineNullableBoolean";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditingInLineNullableBoolean_default",
                "GridEditingInLineNullableBoolean/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}