using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.UploadDownloadFileLinks
{
    public class UploadDownloadFileLinksAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "UploadDownloadFileLinks";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "UploadDownloadFileLinks_default",
                "UploadDownloadFileLinks/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}