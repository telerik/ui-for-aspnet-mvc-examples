using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.MultiSelectGetPostData
{
    public class MultiSelectGetPostDataAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "MultiSelectGetPostData";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "MultiSelectGetPostData_default",
                "MultiSelectGetPostData/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}