using System.Collections.Generic;

namespace SalesHub.Core.Models
{
    public class Customer
    {
        public int CustomerId { get; set; }

        public string CustomerName { get; set; }
        public string Region { get; set; }

        public virtual SellingCompany SellingCompany { get; set; }
        public virtual IList<Order> Orders { get; set; }
    }
}
