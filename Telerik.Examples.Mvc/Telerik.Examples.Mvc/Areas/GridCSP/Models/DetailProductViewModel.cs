using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.GridCSP.Models
{
    public class DetailProductViewModel
    {
        private int targetSales;
        [ScaffoldColumn(false)]
        public int ProductID
        {
            get;
            set;
        }

        [Required]
        [Display(Name = "Product name")]
        public string ProductName
        {
            get;
            set;
        }

        [Display(Name = "Unit price")]
        [DataType(DataType.Currency)]
        [Range(0, int.MaxValue)]
        public decimal UnitPrice
        {
            get;
            set;
        }

        [Display(Name = "Units in stock")]
        [DataType("Integer")]
        [Range(0, int.MaxValue)]
        public int UnitsInStock
        {
            get;
            set;
        }

        public bool Discontinued
        {
            get;
            set;
        }

        [Display(Name = "Last supply")]
        [DataType(DataType.Date)]
        public DateTime LastSupply
        {
            get;
            set;
        }

        [DataType("Integer")]
        public int UnitsOnOrder
        {
            get;
            set;
        }

        public CategoryViewModel Category
        {
            get;
            set;
        }

        public int? CategoryID { get; set; }
        public int? CountryID { get; set; }

        public string QuantityPerUnit { get; set; }
        [UIHint("Country")]
        public CountryViewModel Country { get; set; }
        public int CustomerRating { get; set; }
        public int TargetSales
        {
            get
            {
                return targetSales;
            }
            set
            {
                targetSales = value;
                TotalSales = value * 100;
            }
        }
        public int TotalSales { get; set; }
    }
}