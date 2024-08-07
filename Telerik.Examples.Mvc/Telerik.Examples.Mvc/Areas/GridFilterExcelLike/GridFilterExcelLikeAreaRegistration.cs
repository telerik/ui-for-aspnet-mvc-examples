using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridFilterExcelLike
{
    public class GridFilterExcelLikeAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridFilterExcelLike";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridFilterExcelLike_default",
                "GridFilterExcelLike/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}