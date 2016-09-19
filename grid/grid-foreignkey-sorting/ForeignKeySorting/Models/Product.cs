using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ForeignKeySorting.Models
{
    public class Product
    {
        public int ProductID { get; set; }
        public string ProductName { get; set; }
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
    }
}