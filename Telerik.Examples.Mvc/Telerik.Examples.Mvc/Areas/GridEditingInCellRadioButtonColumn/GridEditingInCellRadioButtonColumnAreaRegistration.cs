using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridEditingInCellRadioButtonColumn
{
    public class GridEditingInCellRadioButtonColumnAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridEditingInCellRadioButtonColumn";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridEditingInCellRadioButtonColumn_default",
                "GridEditingInCellRadioButtonColumn/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}