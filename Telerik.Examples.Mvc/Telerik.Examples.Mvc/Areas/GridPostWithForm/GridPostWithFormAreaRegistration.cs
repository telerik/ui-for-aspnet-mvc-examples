using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridPostWithForm
{
    public class GridPostWithFormAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridPostWithForm";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridPostWithForm_default",
                "GridPostWithForm/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}