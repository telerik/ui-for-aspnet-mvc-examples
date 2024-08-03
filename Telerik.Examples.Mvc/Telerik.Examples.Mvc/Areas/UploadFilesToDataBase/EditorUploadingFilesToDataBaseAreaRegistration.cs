using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.UploadFilesToDataBase
{
    public class UploadFilesToDataBaseAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "UploadFilesToDataBase";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "UploadFilesToDataBase_default",
                "UploadFilesToDataBase/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}