using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KendoUIMVC5.Models
{
    public class ForeignKeyValues
    {
        public IEnumerable<Customer> Customers { get; set; }
        public IEnumerable<Vendor> Vendors { get; set; }
        public IEnumerable<Product> Products { get; set; }
    }
}