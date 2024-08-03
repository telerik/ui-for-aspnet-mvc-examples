using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.TreeViewBindingToXml
{
    public class TreeViewBindingToXmlAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "TreeViewBindingToXml";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "TreeViewBindingToXml_default",
                "TreeViewBindingToXml/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}