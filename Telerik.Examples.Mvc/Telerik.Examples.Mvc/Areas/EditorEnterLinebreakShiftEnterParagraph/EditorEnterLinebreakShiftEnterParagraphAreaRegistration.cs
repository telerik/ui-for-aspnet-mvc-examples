using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.EditorEnterLinebreakShiftEnterParagraph
{
    public class EditorImportExportKendoWidgetAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "EditorEnterLinebreakShiftEnterParagraph";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "EditorEnterLinebreakShiftEnterParagraph_default",
                "EditorEnterLinebreakShiftEnterParagraph/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}