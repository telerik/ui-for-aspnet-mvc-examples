using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditingPopUpNestedGridBatch
{
    public class GridEditingPopUpNestedGridBatchAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditingPopUpNestedGridBatch";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditingPopUpNestedGridBatch_default",
                "GridEditingPopUpNestedGridBatch/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}