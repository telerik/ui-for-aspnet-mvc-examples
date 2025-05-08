using Microsoft.AspNet.SignalR;

namespace Telerik.Examples.Mvc.Areas.ChatPeerToPeer.Hubs
{
    public class ChatHub : Hub
    {
        public void Send(object sender, string message)
        {
            Clients.Others.broadcastMessage(sender, message);
        }
        public void SendTyping(object sender)
        {
            Clients.Others.typing(sender);
        }
    }
}