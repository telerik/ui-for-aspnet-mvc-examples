using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditingCustomPopupEditor
{
    public class GridEditingCustomPopupEditorAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditingCustomPopupEditor";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditingCustomPopupEditor_default",
                "GridEditingCustomPopupEditor/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}