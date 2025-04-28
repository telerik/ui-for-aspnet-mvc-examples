using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.ChatPeerToPeer
{
    public class ChatPeerToPeerAreaRegistration : AreaRegistration
    {
        public override string AreaName
        {
            get
            {
                return "ChatPeerToPeer";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.MapRoute(
                "ChatPeerToPeer_default",
                "ChatPeerToPeer/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}