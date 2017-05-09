using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ForeignKeyColumnDemo.Models
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

        private string testField { get; set; }

        public string SampleField
        {
            get { return "estStringTestStringTestStringTestStringTestStringTestStringTestStringTestString"; }
            set { testField = value; }
        }

        public string SampleField0 { get { return "estStringTestStringTestStringTestStringTestStringTestStringTestStringTestString"; } set { testField = value; } }
        public string SampleField1 { get { return "estStringTestStringTestStringTestStringTestStringTestStringTestStringTestString"; } set { testField = value; } }
        public string SampleField2 { get { return "estStringTestStringTestStringTestStringTestStringTestStringTestStringTestString"; } set { testField = value; } }
        public string SampleField3 { get { return "estStringTestStringTestStringTestStringTestStringTestStringTestStringTestString"; } set { testField = value; } }
        public string SampleField4 { get { return "estStringTestStringTestStringTestStringTestStringTestStringTestStringTestString"; } set { testField = value; } }
        public string SampleField5 { get { return "estStringTestStringTestStringTestStringTestStringTestStringTestStringTestString"; } set { testField = value; } }
        public string SampleField6 { get { return "estStringTestStringTestStringTestStringTestStringTestStringTestStringTestString"; } set { testField = value; } }
        public string SampleField7 { get { return "estStringTestStringTestStringTestStringTestStringTestStringTestStringTestString"; } set { testField = value; } }
        public string SampleField8 { get { return "estStringTestStringTestStringTestStringTestStringTestStringTestStringTestString"; } set { testField = value; } }
        public string SampleField9 { get { return "estStringTestStringTestStringTestStringTestStringTestStringTestStringTestString"; } set { testField = value; } }
        public string SampleField10 { get { return "estStringTestStringTestStringTestStringTestStringTestStringTestStringTestString"; } set { testField = value; } }
        public string SampleField11 { get { return "estStringTestStringTestStringTestStringTestStringTestStringTestStringTestString"; } set { testField = value; } }
        public string SampleField12 { get { return "estStringTestStringTestStringTestStringTestStringTestStringTestStringTestString"; } set { testField = value; } }
        public string SampleField13 { get { return "estStringTestStringTestStringTestStringTestStringTestStringTestStringTestString"; } set { testField = value; } }
        public string SampleField14 { get { return "estStringTestStringTestStringTestStringTestStringTestStringTestStringTestString"; } set { testField = value; } }
     
    }
}