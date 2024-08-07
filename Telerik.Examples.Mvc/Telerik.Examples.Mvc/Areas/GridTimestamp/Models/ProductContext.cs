using System.Data.Entity;

namespace Telerik.Examples.Mvc.Areas.GridTimestamp.Models
{

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