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


        private bool? isCompleted { get; set; }
        public bool? IsCompleted 
        {
            get 
            {
                return OrderID % 2 == 0 ? true : false;
            }
            set 
            {
                isCompleted = value;
            }
        }
    }
}