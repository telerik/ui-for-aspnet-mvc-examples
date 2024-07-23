using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.PdfExportingServerSide
{
    public class PdfExportingServerSideAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "PdfExportingServerSide";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "PdfExportingServerSide_default",
                "PdfExportingServerSide/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}