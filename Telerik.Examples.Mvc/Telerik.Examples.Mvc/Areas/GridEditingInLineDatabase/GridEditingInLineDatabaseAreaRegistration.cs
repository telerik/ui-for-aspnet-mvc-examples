using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditingInLineDatabase
{
    public class GridEditingInLineDatabaseAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditingInLineDatabase";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditingInLineDatabase_default",
                "GridEditingInLineDatabase/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}