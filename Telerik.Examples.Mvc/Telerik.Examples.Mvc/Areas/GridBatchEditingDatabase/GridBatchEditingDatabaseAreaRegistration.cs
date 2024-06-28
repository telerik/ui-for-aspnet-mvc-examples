using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridBatchEditingDatabase
{
    public class GridBatchEditingDatabaseAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridBatchEditingDatabase";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridBatchEditingDatabase_default",
                "GridBatchEditingDatabase/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}