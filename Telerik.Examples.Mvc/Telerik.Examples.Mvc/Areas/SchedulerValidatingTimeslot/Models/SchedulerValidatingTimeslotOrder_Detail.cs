//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Telerik.Examples.Mvc.Areas.SchedulerValidatingTimeslot.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class SchedulerValidatingTimeslotOrder_Detail
    {
        public int OrderID { get; set; }
        public int ProductID { get; set; }
        public decimal UnitPrice { get; set; }
        public short Quantity { get; set; }
        public float Discount { get; set; }
    
        public virtual SchedulerValidatingTimeslotOrder Order { get; set; }
        public virtual SchedulerValidatingTimeslotProduct Product { get; set; }
    }
}
