using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AjaxHierarchyEditing.Models
{
    public class EmployeeViewModel
    {
        public int EmployeeID { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Title { get; set; }

        public string Country { get; set; }

        public string City { get; set; }
    }
}