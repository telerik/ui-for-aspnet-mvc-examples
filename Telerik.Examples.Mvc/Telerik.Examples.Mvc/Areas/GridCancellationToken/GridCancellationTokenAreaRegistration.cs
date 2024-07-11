using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridCancellationToken
{
    public class GridCancellationTokenAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridCancellationToken";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridCancellationToken_default",
                "GridCancellationToken/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}