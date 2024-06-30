using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridExcelExportCellFormat
{
    public class GridExcelExportCellFormatAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridExcelExportCellFormat";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridExcelExportCellFormat_default",
                "GridExcelExportCellFormat/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}