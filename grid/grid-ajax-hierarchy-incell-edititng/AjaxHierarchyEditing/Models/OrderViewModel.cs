using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AjaxHierarchyEditing.Models
{
    public class OrderViewModel
    {
        public int OrderID { get; set; }

        public string ShipCountry { get; set; }

        public string ShipAddress { get; set; }

        public string ShipName { get; set; }

        public DateTime? ShippedDate { get; set; }
    }
}