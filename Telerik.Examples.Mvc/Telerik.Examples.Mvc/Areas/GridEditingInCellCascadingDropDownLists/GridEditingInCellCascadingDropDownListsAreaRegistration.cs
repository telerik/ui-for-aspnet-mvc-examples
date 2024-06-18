using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditingInCellCascadingDropDownLists
{
    public class GridEditingInCellCascadingDropDownListsAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditingInCellCascadingDropDownLists";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditingInCellCascadingDropDownLists_default",
                "GridEditingInCellCascadingDropDownLists/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}