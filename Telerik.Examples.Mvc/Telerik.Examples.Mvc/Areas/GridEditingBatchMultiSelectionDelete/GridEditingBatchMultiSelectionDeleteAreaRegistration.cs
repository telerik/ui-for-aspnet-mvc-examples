using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditingBatchMultiSelectionDelete
{
    public class GridEditingBatchMultiSelectionDeleteAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditingBatchMultiSelectionDelete";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditingBatchMultiSelectionDelete_default",
                "GridEditingBatchMultiSelectionDelete/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}