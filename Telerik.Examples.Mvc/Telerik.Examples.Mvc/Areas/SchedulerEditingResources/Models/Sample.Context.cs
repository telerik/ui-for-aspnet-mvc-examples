﻿//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Telerik.Examples.Mvc.Areas.SchedulerEditingResources.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class SchedulerEditingResourcesEntities : DbContext
    {
        public SchedulerEditingResourcesEntities()
            : base("name=SchedulerEditingResourcesEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public DbSet<SchedulerEditingResourcesMeetingAttendee> MeetingAttendees { get; set; }
        public DbSet<SchedulerEditingResourcesMeeting> Meetings { get; set; }
    }
}