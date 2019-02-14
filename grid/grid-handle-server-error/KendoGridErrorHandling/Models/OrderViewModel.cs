using System;
using System.ComponentModel.DataAnnotations;

namespace KendoGridErrorHandling.Models
{
    public class OrderViewModel
    {
        public int OrderID
        {
            get;
            set;
        }

        public string CustomerID { get; set; }

        public string ContactName
        {
            get;
            set;
        }

        public decimal? Freight
        {
            get;
            set;
        }

        public string ShipAddress
        {
            get;
            set;
        }

        public DateTime? ShippedDate
        {
            get;
            set;
        }

        [UIHint("ClientCategory")]
        public CategoryViewModel Category
        {
            get;
            set;
        }

        public string ShipCountry
        {
            get;
            set;
        }

        public string ShipCity
        {
            get;
            set;
        }

        public string ShipName
        {
            get;
            set;
        }

        public int? EmployeeID
        {
            get;
            set;
        }
    }
}
