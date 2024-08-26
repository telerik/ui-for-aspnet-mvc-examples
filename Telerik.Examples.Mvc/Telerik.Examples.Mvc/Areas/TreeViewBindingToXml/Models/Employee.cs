using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.TreeViewBindingToXml.Models
{
    public class Employee
    {
        public int id { get; set; }
        public string name { get; set; }
        public bool hasChildren { get; set; }
        public List<Employee> items { get; set; }
    }
}