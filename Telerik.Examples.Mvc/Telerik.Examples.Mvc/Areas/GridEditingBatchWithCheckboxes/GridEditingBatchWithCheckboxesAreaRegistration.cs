using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditingBatchWithCheckboxes
{
    public class GridEditingBatchWithCheckboxesAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditingBatchWithCheckboxes";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditingBatchWithCheckboxes_default",
                "GridEditingBatchWithCheckboxes/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}