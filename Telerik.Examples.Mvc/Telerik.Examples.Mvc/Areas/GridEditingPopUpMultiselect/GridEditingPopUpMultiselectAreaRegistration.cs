using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditingPopUpMultiselect
{
    public class EditorImportExportKendoWidgetAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditingPopUpMultiselect";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditingPopUpMultiselect_default",
                "GridEditingPopUpMultiselect/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}