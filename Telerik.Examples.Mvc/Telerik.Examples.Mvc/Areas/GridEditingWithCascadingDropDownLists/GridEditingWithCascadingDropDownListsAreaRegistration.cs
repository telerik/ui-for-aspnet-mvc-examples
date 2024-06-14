using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditingWithCascadingDropDownLists
{
    public class GridEditingWithCascadingDropDownListsAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditingWithCascadingDropDownLists";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditingWithCascadingDropDownLists_default",
                "GridEditingWithCascadingDropDownLists/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}