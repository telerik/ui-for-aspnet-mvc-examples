using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridSaveStateOnServerSide
{
    public class EditorImportExportKendoWidgetAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridSaveStateOnServerSide";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridSaveStateOnServerSide_default",
                "GridSaveStateOnServerSide/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}