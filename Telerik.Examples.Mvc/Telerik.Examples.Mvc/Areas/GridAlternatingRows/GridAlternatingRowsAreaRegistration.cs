using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridAlternatingRows
{
    public class GridAlternatingRowsAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridAlternatingRows";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridAlternatingRows_default",
                "GridAlternatingRows/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}