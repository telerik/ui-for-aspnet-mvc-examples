using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridCsvServerExport
{
    public class GridCsvServerExportAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridCsvServerExport";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridCsvServerExport_default",
                "GridCsvServerExport/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}