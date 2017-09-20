using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using SignalRLocalHub.Models;
using Kendo.Mvc.UI;

namespace SignalRLocalHub.Hubs
{
    public class ProductHub : Hub
    {
        private SchedulerMeetingService meetingService;

        public ProductHub()
        {
            meetingService = new SchedulerMeetingService(new SampleEntities1());
        }

        public IEnumerable<MeetingViewModel> Read(FilterRange range)
        {
            var result = meetingService.GetAll().Where(t => t.Start < range.End && (t.End > range.Start || t.RecurrenceRule != null));

            return result;
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