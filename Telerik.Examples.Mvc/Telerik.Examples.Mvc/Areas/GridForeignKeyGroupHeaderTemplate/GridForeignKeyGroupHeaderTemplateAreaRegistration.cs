using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridForeignKeyGroupHeaderTemplate
{
    public class GridForeignKeyGroupHeaderTemplateAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridForeignKeyGroupHeaderTemplate";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridForeignKeyGroupHeaderTemplate_default",
                "GridForeignKeyGroupHeaderTemplate/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}