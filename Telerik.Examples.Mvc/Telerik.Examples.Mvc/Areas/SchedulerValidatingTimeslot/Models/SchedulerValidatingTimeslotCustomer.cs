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
    
    public partial class SchedulerValidatingTimeslotCustomer
    {
        public SchedulerValidatingTimeslotCustomer()
        {
            this.Orders = new HashSet<SchedulerValidatingTimeslotOrder>();
            this.CustomerDemographics = new HashSet<SchedulerValidatingTimeslotCustomerDemographic>();
        }
    
        public string CustomerID { get; set; }
        public string CompanyName { get; set; }
        public string ContactName { get; set; }
        public string ContactTitle { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Region { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public string Phone { get; set; }
        public string Fax { get; set; }
        public Nullable<bool> Bool { get; set; }
    
        public virtual ICollection<SchedulerValidatingTimeslotOrder> Orders { get; set; }
        public virtual ICollection<SchedulerValidatingTimeslotCustomerDemographic> CustomerDemographics { get; set; }
    }
}