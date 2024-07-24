using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditingPopUpMultiSelect
{
    public class EditorImportExportKendoWidgetAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditingPopUpMultiSelect";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditingPopUpMultiSelect_default",
                "GridEditingPopUpMultiSelect/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}