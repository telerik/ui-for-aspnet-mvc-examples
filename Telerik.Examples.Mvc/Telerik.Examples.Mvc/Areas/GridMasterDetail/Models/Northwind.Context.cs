﻿//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Telerik.Examples.Mvc.Areas.GridMasterDetail.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class GridMasterDetailEntities : DbContext
    {
        public GridMasterDetailEntities()
            : base("name=GridMasterDetailEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public DbSet<GridMasterDetailCategory> Categories { get; set; }
        public DbSet<GridMasterDetailProduct> Products { get; set; }
    }
}
