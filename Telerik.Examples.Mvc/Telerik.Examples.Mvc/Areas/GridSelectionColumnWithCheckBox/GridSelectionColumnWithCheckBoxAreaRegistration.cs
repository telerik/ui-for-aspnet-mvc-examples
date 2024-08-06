using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridSelectionColumnWithCheckBox
{
    public class GridSelectionColumnWithCheckBoxAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridSelectionColumnWithCheckBox";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridSelectionColumnWithCheckBox_default",
                "GridSelectionColumnWithCheckBox/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}