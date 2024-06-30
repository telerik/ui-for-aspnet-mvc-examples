using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridExcelExportColumnTemplate
{
    public class GridExcelExportColumnTemplateAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridExcelExportColumnTemplate";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridExcelExportColumnTemplate_default",
                "GridExcelExportColumnTemplate/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}