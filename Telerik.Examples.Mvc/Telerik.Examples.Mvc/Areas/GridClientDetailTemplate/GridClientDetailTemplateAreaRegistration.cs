using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridClientDetailTemplate
{
    public class GridClientDetailTemplateAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridClientDetailTemplate";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridClientDetailTemplate_default",
                "GridClientDetailTemplate/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}