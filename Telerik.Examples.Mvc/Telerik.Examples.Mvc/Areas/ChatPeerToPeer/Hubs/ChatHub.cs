using Microsoft.AspNet.SignalR;

namespace Telerik.Examples.Mvc.Areas.ChatPeerToPeer.Hubs
{
    public class ChatHub : Hub
    {
        public void Send(string senderId, string senderName, string message)
        {
            // Broadcast the message to all clients except the sender.
            Clients.Others.broadcastMessage(senderId, senderName, message);
        }

        public void SendTyping(string senderId, string senderName)
        {
            // Broadcast the typing notification to all clients except the sender.
            Clients.Others.typing(senderId, senderName);
        }
    }
}