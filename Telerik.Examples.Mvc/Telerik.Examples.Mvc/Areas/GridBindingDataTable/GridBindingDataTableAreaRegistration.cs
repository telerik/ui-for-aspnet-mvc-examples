using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridBindingDataTable
{
    public class GridBindingDataTableAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridBindingDataTable";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridBindingDataTable_default",
                "GridBindingDataTable/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}