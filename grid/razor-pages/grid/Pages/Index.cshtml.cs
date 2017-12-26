using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace grid.Pages
{
    public class IndexModel : PageModel
    {
        public List<Product> Data { get; set; } = new List<Product>();

        public void OnGet()
        {
            for (int i = 1; i <= 100; i++)
            {
                Data.Add(new Product() { ProductName = "product" + i, UnitPrice = i });
            }
        }
    }

    public class Product
    {
        public string ProductName { get; set; }
        public decimal UnitPrice { get; set; }

        public string Category { get; set; }
    }
}
