using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridRenderAndPreviewByteAndBase64Images
{
    public class GridRenderAndPreviewByteAndBase64ImagesAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridRenderAndPreviewByteAndBase64Images";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridRenderAndPreviewByteAndBase64Images_default",
                "GridRenderAndPreviewByteAndBase64Images/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}