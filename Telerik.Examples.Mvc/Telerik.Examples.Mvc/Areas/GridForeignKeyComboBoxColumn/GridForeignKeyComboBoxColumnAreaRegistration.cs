using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridForeignKeyComboBoxColumn
{
    public class GridForeignKeyComboBoxColumnAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridForeignKeyComboBoxColumn";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridForeignKeyComboBoxColumn_default",
                "GridForeignKeyComboBoxColumn/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}