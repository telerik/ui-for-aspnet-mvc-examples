using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.MultiColumnComboBoxEdit
{
    public class MultiColumnComboBoxEditAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "MultiColumnComboBoxEdit";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "MultiColumnComboBoxEdit_default",
                "MultiColumnComboBoxEdit/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}