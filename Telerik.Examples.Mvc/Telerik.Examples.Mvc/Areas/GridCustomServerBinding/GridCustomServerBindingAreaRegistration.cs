using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridCustomServerBinding
{
    public class GridCustomServerBindingAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridCustomServerBinding";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridCustomServerBinding_default",
                "GridCustomServerBinding/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}