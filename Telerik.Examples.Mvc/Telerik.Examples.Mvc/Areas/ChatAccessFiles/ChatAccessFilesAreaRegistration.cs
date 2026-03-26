using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.ChatAccessFiles
{
    public class ChatAccessFilesAreaRegistration : AreaRegistration
    {
        public override string AreaName
        {
            get
            {
                return "ChatAccessFiles";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.MapRoute(
                "ChatAccessFiles_default",
                "ChatAccessFiles/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
