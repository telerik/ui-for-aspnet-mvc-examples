using System.Data.Entity;

namespace Telerik.Examples.Mvc.Areas.GridTimestamp.Models
{
    public class ProductContext : DbContext
    {
        public ProductContext() : base("ProductsConnection") { }

        public DbSet<Product> Products { get; set; }
    }
}