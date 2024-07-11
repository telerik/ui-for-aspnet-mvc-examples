using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridForeignKeyColumnCRUD
{
    public class GridForeignKeyColumnCRUDAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridForeignKeyColumnCRUD";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridForeignKeyColumnCRUD_default",
                "GridForeignKeyColumnCRUD/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}