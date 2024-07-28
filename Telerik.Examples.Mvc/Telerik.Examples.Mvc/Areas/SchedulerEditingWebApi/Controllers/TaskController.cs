﻿using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using Telerik.Examples.Mvc.Areas.SchedulerEditingWebApi.Models;
using System;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.ModelBinding;
namespace Telerik.Examples.Mvc.Areas.SchedulerEditingWebApi.Controllers
{
    public class TaskController : ApiController
    {
        private SchedulerEditingWebApiEntities db = new SchedulerEditingWebApiEntities();

        public DataSourceResult GetTask([ModelBinder(typeof(Telerik.Examples.Mvc.Areas.SchedulerEditingWebApi.ModelBinders.DataSourceRequestModelBinder))] DataSourceRequest request)
        {
            var data = db.Tasks.ToList().Select(task => new TaskViewModel() { 
                TaskID = task.TaskID,
                Title = task.Title,
                Description = task.Description,
                Start = DateTime.SpecifyKind(task.Start, DateTimeKind.Utc),
                End = DateTime.SpecifyKind(task.End, DateTimeKind.Utc),
                IsAllDay = task.IsAllDay,
                RecurrenceID = task.RecurrenceID,
                RecurrenceRule = task.RecurrenceRule,
                RecurrenceException = task.RecurrenceException,
                StartTimezone = task.StartTimezone,
                EndTimezone = task.EndTimezone,
                OwnerID = task.OwnerID
            });

            return  data.ToDataSourceResult(request);
        }

        // GET api/Task/5
        public SchedulerEditingWebApiTask GetTask(int id)
        {
            SchedulerEditingWebApiTask task = db.Tasks.Single(p => p.TaskID == id);
            if (task == null)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return task;
        }

        // PUT api/Task/5
        public HttpResponseMessage PutTask(int id, TaskViewModel task)
        {
            if (ModelState.IsValid && id == task.TaskID)
            {
                var entity = new SchedulerEditingWebApiTask
                {
                    TaskID = task.TaskID,
                    Title = task.Title,
                    Start = task.Start,
                    StartTimezone = task.StartTimezone,
                    End = task.End,
                    EndTimezone = task.EndTimezone,
                    Description = task.Description,
                    RecurrenceRule = task.RecurrenceRule,
                    RecurrenceException = task.RecurrenceException,
                    RecurrenceID = task.RecurrenceID,
                    IsAllDay = task.IsAllDay,
                    OwnerID = task.OwnerID
                };

                db.Tasks.Attach(entity);
                db.Entry(entity).State = EntityState.Modified;

                try
                {
                    db.SaveChanges();
                }
                catch (DbUpdateConcurrencyException)
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound);
                }

                return Request.CreateResponse(HttpStatusCode.OK);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }

        // POST api/Task
        public HttpResponseMessage PostTask(TaskViewModel task)
        {
            if (ModelState.IsValid)
            {
                var entity = new SchedulerEditingWebApiTask
                {
                    TaskID = task.TaskID,
                    Title = task.Title,
                    Start = task.Start,
                    StartTimezone = task.StartTimezone,
                    End = task.End,
                    EndTimezone = task.EndTimezone,
                    Description = task.Description,
                    RecurrenceRule = task.RecurrenceRule,
                    RecurrenceException = task.RecurrenceException,
                    RecurrenceID = task.RecurrenceID,
                    IsAllDay = task.IsAllDay,
                    OwnerID = task.OwnerID
                };

                db.Tasks.Add(entity);
                db.SaveChanges();

                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, new { Data = new[] { task }, Total = 1 });
                response.Headers.Location = new Uri(Url.Link("DefaultApi", new { id = task.TaskID }));
                return response;
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }

        // DELETE api/Task/5
        public HttpResponseMessage DeleteTask(int id)
        {
            SchedulerEditingWebApiTask task = db.Tasks.Single(p => p.TaskID == id);
            if (task == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            db.Tasks.Remove(task);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            return Request.CreateResponse(HttpStatusCode.OK, task);
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}
