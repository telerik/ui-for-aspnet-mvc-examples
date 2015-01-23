namespace KendoUI_Scheduler_Server_Filtering.Models
{
    using System;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;

    public class SchedulerTaskService
    {
        private SampleEntities db;

        public SchedulerTaskService(SampleEntities context)
        {
            db = context;
        }

        public SchedulerTaskService()
            : this(new SampleEntities())
        {
        }

        public virtual IQueryable<TaskViewModel> GetRange(DateTime start, DateTime end)
        {
            return GetAll().Where(t => (t.Start >= start || t.Start <= start) && t.Start <= end
                && t.End >= start && (t.End >= end || t.End <= end) || t.RecurrenceRule != null);            
        }

        public virtual IQueryable<TaskViewModel> GetAll()
        {
            return db.Tasks.ToList().Select(task => new TaskViewModel
            {
                TaskID = task.TaskID,
                Title = task.Title,
                Start = DateTime.SpecifyKind(task.Start, DateTimeKind.Utc),
                End = DateTime.SpecifyKind(task.End, DateTimeKind.Utc),
                StartTimezone = task.StartTimezone,
                EndTimezone = task.EndTimezone,
                Description = task.Description,
                IsAllDay = task.IsAllDay,
                RecurrenceRule = task.RecurrenceRule,
                RecurrenceException = task.RecurrenceException,
                RecurrenceID = task.RecurrenceID,
                OwnerID = task.OwnerID
            }).AsQueryable();  
        }

        public virtual void Insert(TaskViewModel task, ModelStateDictionary modelState)
        {
            if (ValidateModel(task, modelState))
            {
                var entity = task.ToEntity();

                db.Tasks.Add(entity);
                db.SaveChanges();

                task.TaskID = entity.TaskID;
            }
        }

        public virtual void Update(TaskViewModel task, ModelStateDictionary modelState)
        {
            if (ValidateModel(task, modelState))
            {
                var entity = task.ToEntity();
                db.Tasks.Attach(entity);
                db.Entry(entity).State = EntityState.Modified;                
                db.SaveChanges();
            }
        }

        public virtual void Delete(TaskViewModel task, ModelStateDictionary modelState)
        {
            var entity = task.ToEntity();
            db.Tasks.Attach(entity);

            var recurrenceExceptions = db.Tasks.Where(t => t.RecurrenceID == task.TaskID);

            foreach (var recurrenceException in recurrenceExceptions)
            {
                db.Tasks.Remove(recurrenceException);
            }

            db.Tasks.Remove(entity);
            db.SaveChanges();
        }
        
        private bool ValidateModel(TaskViewModel appointment, ModelStateDictionary modelState)
        {
            if (appointment.Start > appointment.End)
            {
                modelState.AddModelError("errors", "End date must be greater or equal to Start date.");
                return false;
            }
            
            return true;
        }

        public void Dispose()
        {
            db.Dispose();
        }
    }
}