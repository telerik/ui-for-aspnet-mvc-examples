using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditingUploadInPopUp
{
    public class GridEditingUploadInPopUpAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditingUploadInPopUp";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditingUploadInPopUp_default",
                "GridEditingUploadInPopUp/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}