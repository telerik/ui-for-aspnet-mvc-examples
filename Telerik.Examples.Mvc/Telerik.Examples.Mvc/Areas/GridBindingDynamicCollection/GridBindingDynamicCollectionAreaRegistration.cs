using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridBindingDynamicCollection
{
    public class GridBindingDynamicCollectionAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridBindingDynamicCollection";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridBindingDynamicCollection_default",
                "GridBindingDynamicCollection/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}