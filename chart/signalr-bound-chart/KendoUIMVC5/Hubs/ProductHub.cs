using System.Collections.Generic;
using KendoUIMVC5.Models;
using Microsoft.AspNet.SignalR;

namespace KendoUIMVC5.Hubs
{
    public class ProductHub : Hub
    {
        private ProductService productService;

        public ProductHub()
        {
            productService = new ProductService(new SampleEntities());
        }

        public IEnumerable<ProductViewModel> Read()
        {
            return productService.Read();
        }

        public void Update(ProductViewModel product)
        {
            productService.Update(product);
            Clients.Others.update(product);
        }

        public void Destroy(ProductViewModel product)
        {
            productService.Destroy(product);
            Clients.Others.destroy(product);
        }

        public ProductViewModel Create(ProductViewModel product)
        {
            productService.Create(product);
            Clients.Others.create(product);

            return product;
        }
    }
}