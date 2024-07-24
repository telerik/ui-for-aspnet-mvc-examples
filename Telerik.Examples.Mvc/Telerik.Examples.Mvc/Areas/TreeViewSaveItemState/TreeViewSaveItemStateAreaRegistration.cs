using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.TreeViewSaveItemState
{
    public class TreeViewSaveItemStateAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "TreeViewSaveItemState";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "TreeViewSaveItemState_default",
                "TreeViewSaveItemState/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}