//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Telerik.Examples.Mvc.Areas.TreeListExportingMultiple.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class EmployeeDirectory
    {
        public EmployeeDirectory()
        {
            this.EmployeeDirectory1 = new HashSet<EmployeeDirectory>();
        }
    
        public int EmployeeID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Nullable<int> ReportsTo { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Phone { get; set; }
        public Nullable<int> Extension { get; set; }
        public Nullable<System.DateTime> BirthDate { get; set; }
        public Nullable<System.DateTime> HireDate { get; set; }
        public string Position { get; set; }
    
        public virtual ICollection<EmployeeDirectory> EmployeeDirectory1 { get; set; }
        public virtual EmployeeDirectory EmployeeDirectory2 { get; set; }
    }
}
