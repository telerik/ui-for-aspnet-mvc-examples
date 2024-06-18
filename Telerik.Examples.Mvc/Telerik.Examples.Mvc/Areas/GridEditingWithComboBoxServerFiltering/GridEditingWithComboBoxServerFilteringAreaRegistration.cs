using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditingWithComboBoxServerFiltering
{
    public class GridEditingWithComboBoxServerFilteringAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditingWithComboBoxServerFiltering";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditingWithComboBoxServerFiltering_default",
                "GridEditingWithComboBoxServerFiltering/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}