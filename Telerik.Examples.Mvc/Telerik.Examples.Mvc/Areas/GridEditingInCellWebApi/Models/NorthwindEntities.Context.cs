﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Telerik.Examples.Mvc.Areas.GridEditingInCellWebApi.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class GridEditingInCellWebApiEntities : DbContext
    {
        public GridEditingInCellWebApiEntities()
            : base("name=GridEditingInCellWebApiEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<GridEditingInCellWebApiCategory> Categories { get; set; }
        public virtual DbSet<GridEditingInCellWebApiEmployee> Employees { get; set; }
        public virtual DbSet<GridEditingInCellWebApiProduct> Products { get; set; }
    }
}
