using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditingPopUpTreeView
{
    public class GridEditingPopUpTreeViewAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditingPopUpTreeView";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditingPopUpTreeView_default",
                "GridEditingPopUpTreeView/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}