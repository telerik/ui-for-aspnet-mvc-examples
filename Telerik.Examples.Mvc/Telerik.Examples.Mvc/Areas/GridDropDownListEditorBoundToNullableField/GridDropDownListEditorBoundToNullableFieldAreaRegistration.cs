using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.GridDropDownListEditorBoundToNullableField
{
    public class GridDropDownListEditorBoundToNullableFieldAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "GridDropDownListEditorBoundToNullableField";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "GridDropDownListEditorBoundToNullableField_default",
                "GridDropDownListEditorBoundToNullableField/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}