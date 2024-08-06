using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditingPopUpServerValidation
{
    public class EditorImportExportKendoWidgetAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditingPopUpServerValidation";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditingPopUpServerValidation_default",
                "GridEditingPopUpServerValidation/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}