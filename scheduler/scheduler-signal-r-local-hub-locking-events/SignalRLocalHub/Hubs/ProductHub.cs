using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using SignalRLocalHub.Models;

namespace SignalRLocalHub.Hubs
{
    public class ProductHub : Hub
    {
        private SchedulerMeetingService meetingService;

        public ProductHub()
        {
            meetingService = new SchedulerMeetingService(new SampleEntities());
        }

        public IEnumerable<MeetingViewModel> Read()
        {
            return meetingService.GetAll();
        }

        public void Update(MeetingViewModel product)
        {
            meetingService.Update(product);
            Clients.Others.update(product);
        }

        public void Destroy(MeetingViewModel product)
        {
            meetingService.Delete(product);
            Clients.Others.destroy(product);
        }

        public MeetingViewModel Create(MeetingViewModel product)
        {
            meetingService.Insert(product);
            Clients.Others.create(product);

            return product;
        }

        public void LockRecord(int id)
        {
            Clients.Others.lockRecord(new
            {
                id = id
            });
        }

        public void UnlockRecord(int id)
        {
            Clients.Others.unlockRecord(new
            {
                id = id
            });
        }
    }
}