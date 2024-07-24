using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditPopUpServerValidation
{
    public class GridEditPopUpServerValidationAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditPopUpServerValidation";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditPopUpServerValidation_default",
                "GridEditPopUpServerValidation/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}