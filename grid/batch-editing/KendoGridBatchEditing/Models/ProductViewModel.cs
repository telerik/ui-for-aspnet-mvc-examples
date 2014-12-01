using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace KendoGridBatchEditing.Models
{
    public class ProductViewModel
    {
        public int ProductID { get; set; }
        // The ProductName property is required
        [Required]
        public string ProductName { get; set; }
        // Use the Integer editor template for the UnitsInStock property
        [UIHint("Integer")]
        public short? UnitsInStock { get; set; }
    }
}