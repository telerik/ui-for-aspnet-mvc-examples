using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridFilterAsYouType
{
    public class GridFilterAsYouTypeAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridFilterAsYouType";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridFilterAsYouType_default",
                "GridFilterAsYouType/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}