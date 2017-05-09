using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace GetFiltersRecursivelyAndModifyThemOnServer.Models
{
    public class Order
    {
        public int OrderID { get; set; }

        private DateTime orderDate;

        //keep UTC Dates
        public DateTime OrderDate
        {
            get
            {
                return orderDate;
            }
            set
            {
                this.orderDate = new DateTime(value.Ticks, DateTimeKind.Utc);
            }
        }

        public string OrderDescription { get; set; }
        public int EmployeeID { get; set; }

        [UIHint("Currency")]
        public decimal OrderTotal { get; set; }
        public bool IsCompleted { get; set; }
    }
}