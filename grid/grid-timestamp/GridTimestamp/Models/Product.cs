using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.ComponentModel.DataAnnotations.Schema;

namespace GridTimestamp.Models
{
    public class Product
    {
        [Key]
        [DatabaseGenerated(System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption.Identity)]
        public int ProductID { get; set; }
        public string ProductName { get; set; }

        [Timestamp]
        public byte[] RowVersion { get; set; }

        [NotMapped]
        public string RowVersionString
        {
            get
            {
                if (this.RowVersion != null)
                {
                    return Convert.ToBase64String(this.RowVersion);
                }

                return string.Empty;
            }
            set
            {
                if (string.IsNullOrEmpty(value))
                {
                    this.RowVersion = null;
                }
                else
                {
                    this.RowVersion = Convert.FromBase64String(value);
                }
            }
        }
    }

    public class ProductContext: DbContext
    {
        public ProductContext() : base("ProductsConnection") { }

        public DbSet<Product> Products { get; set; }
    }

    public class ProductContexInitializer : CreateDatabaseIfNotExists<ProductContext>
    {
        protected override void Seed(ProductContext context)
        {
            context.Products.Add(new Product
                {
                    ProductName = "Chai"
                });

            context.SaveChanges();

            base.Seed(context);
        }
    }
}