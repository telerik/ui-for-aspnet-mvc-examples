using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditingAutoCompleteNewItem
{
    public class GridEditingAutoCompleteNewItemAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditingAutoCompleteNewItem";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditingAutoCompleteNewItem_default",
                "GridEditingAutoCompleteNewItem/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}