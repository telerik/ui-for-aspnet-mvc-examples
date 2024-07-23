namespace Telerik.Examples.Mvc.Areas.SchedulerSignalRServerFiltering.Models
{
    using Kendo.Mvc.UI;
    using System;
    using System.Linq;
    using System.Web.Mvc;

    public class SchedulerMeetingService
    {
        private SampleEntities1 db;

        public SchedulerMeetingService(SampleEntities1 context)
        {
            db = context;
        }

        public SchedulerMeetingService()
            : this(new SampleEntities1())
        {
        }

        public virtual IQueryable<MeetingViewModel> GetAll()
        {
            return db.Meetings.ToList().Select(meeting => new MeetingViewModel
                {
                    MeetingID = meeting.MeetingID,
                    Title = meeting.Title,
                    Start = DateTime.SpecifyKind(meeting.Start, DateTimeKind.Utc),
                    End = DateTime.SpecifyKind(meeting.End, DateTimeKind.Utc),
                    StartTimezone = meeting.StartTimezone,
                    EndTimezone = meeting.EndTimezone,
                    Description = meeting.Description,
                    IsAllDay = meeting.IsAllDay,
                    RoomID = meeting.RoomID,
                    RecurrenceRule = meeting.RecurrenceRule,
                    RecurrenceException = meeting.RecurrenceException,
                    RecurrenceID = meeting.RecurrenceID
                }).AsQueryable();
        }

        public virtual void Insert(MeetingViewModel meeting)
        {
            if (string.IsNullOrEmpty(meeting.Title))
            {
                meeting.Title = "";
            }

            var entity = meeting.ToEntity();

            db.Meetings.Add(entity);
            db.SaveChanges();

            meeting.MeetingID = entity.MeetingID;
        }

        public virtual void Update(MeetingViewModel meeting)
        {
            if (string.IsNullOrEmpty(meeting.Title))
            {
                meeting.Title = "";
            }

            var entity = db.Meetings.FirstOrDefault(m => m.MeetingID == meeting.MeetingID);

            entity.Title = meeting.Title;
            entity.Start = meeting.Start;
            entity.End = meeting.End;
            entity.Description = meeting.Description;
            entity.IsAllDay = meeting.IsAllDay;
            entity.RoomID = meeting.RoomID;
            entity.RecurrenceID = meeting.RecurrenceID;
            entity.RecurrenceRule = meeting.RecurrenceRule;
            entity.RecurrenceException = meeting.RecurrenceException;
            entity.StartTimezone = meeting.StartTimezone;
            entity.EndTimezone = meeting.EndTimezone;

            db.SaveChanges();
        }

        public virtual void Delete(MeetingViewModel meeting)
        {
            var entity = meeting.ToEntity();

            db.Meetings.Attach(entity);

            var recurrenceExceptions = db.Meetings.Where(m => m.RecurrenceID == entity.MeetingID);

            foreach (var recurrenceException in recurrenceExceptions)
            {
                db.Meetings.Remove(recurrenceException);
            }

            db.Meetings.Remove(entity);
            db.SaveChanges();
        }

        public void Dispose()
        {
            db.Dispose();
        }
    }
}