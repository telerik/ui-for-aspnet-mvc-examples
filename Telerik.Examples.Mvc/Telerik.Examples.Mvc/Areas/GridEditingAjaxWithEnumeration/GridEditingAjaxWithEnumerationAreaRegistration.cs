using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditingAjaxWithEnumeration
{
    public class GridEditingAjaxWithEnumerationAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditingAjaxWithEnumeration";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditingAjaxWithEnumeration_default",
                "GridEditingAjaxWithEnumeration/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}