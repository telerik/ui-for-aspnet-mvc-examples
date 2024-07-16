using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridExportingPdfServerSide
{
    public class EditorImportExportKendoWidgetAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridExportingPdfServerSide";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridExportingPdfServerSide_default",
                "GridExportingPdfServerSide/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}