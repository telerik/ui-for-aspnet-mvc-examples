using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridExportingExcelMultiple
{
    public class EditorImportExportKendoWidgetAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridExportingExcelMultiple";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridExportingExcelMultiple_default",
                "GridExportingExcelMultiple/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}