using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace KendoUIMVC5.Models
{
    public class CustomerContext : DbContext
    {
        public DbSet<Customer> Customers { get; set; }
    }
}