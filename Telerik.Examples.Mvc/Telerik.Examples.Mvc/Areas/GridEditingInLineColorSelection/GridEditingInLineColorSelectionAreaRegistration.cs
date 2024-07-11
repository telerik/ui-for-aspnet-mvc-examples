using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditingInLineColorSelection
{
    public class GridEditingInLineColorSelectionAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditingInLineColorSelection";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditingInLineColorSelection_default",
                "GridEditingInLineColorSelection/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}