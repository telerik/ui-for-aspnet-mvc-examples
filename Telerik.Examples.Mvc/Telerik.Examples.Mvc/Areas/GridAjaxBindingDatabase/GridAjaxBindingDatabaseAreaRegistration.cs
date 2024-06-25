using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridAjaxBindingDatabase
{
    public class GridAjaxBindingDatabaseAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridAjaxBindingDatabase";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridAjaxBindingDatabase_default",
                "GridAjaxBindingDatabase/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}