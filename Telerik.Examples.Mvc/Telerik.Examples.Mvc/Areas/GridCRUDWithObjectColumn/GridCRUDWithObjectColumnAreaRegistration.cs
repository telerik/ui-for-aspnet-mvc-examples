using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridCRUDWithObjectColumn
{
    public class GridCRUDWithObjectColumnAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridCRUDWithObjectColumn";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridCRUDWithObjectColumn_default",
                "GridCRUDWithObjectColumn/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}