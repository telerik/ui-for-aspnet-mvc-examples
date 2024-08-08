using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.UploadAmazonS3
{
    public class GridSignalRAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "UploadAmazonS3";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "UploadAmazonS3_default",
                "UploadAmazonS3/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}