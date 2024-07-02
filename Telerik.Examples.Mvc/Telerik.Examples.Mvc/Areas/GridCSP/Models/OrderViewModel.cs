using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.GridCSP.Models
{
    public class OrderViewModel
    {
        public OrderViewModel()
        {
            this.Locations = new List<Location>();
            this.Employees = new List<EmployeeViewModel>();
        }

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

        public DateTime? OrderDate
        {
            get;
            set;
        }

        public DateTime? ShippedDate
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

        public List<Location> Locations { get; set; }

        [UIHint("EmployeesEditor")]
        public List<EmployeeViewModel> Employees { get; set; }
    }
}