using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KendoGridAjaxBinding.Models
{
    public class ProductViewModel
    {
        public int ProductID { get; set; }
        public string ProductName { get; set; }
        public short? UnitsInStock { get; set; }
    }
}