using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.DropDownListCustomDataSource
{
    public class DropDownListCustomDataSourceAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "DropDownListCustomDataSource";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "DropDownListCustomDataSource_default",
                "DropDownListCustomDataSource/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}