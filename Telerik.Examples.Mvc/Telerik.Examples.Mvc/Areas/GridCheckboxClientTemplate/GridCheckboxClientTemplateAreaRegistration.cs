using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridCheckboxClientTemplate
{
    public class GridCheckboxClientTemplateAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridCheckboxClientTemplate";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridCheckboxClientTemplate_default",
                "GridCheckboxClientTemplate/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}