using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace KendoUIMVC5.Models
{
    public class Customer
    {
        [Key]
        public int CustomerID { get; set; }
        [Required]
        public string Name { get; set; }
        public string Phone { get; set; }
        [Required]
        [RegularExpression(@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$", ErrorMessage = "Please enter valid email")]
        public string Email { get; set; }
    }
}