using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.GridEditingInLineNullableBoolean.Models
{
    public class InLineEditingProduct
    {
        [ScaffoldColumn(false)]
        public int ProductID
        {
            get;
            set;
        }

        [DisplayName("Product name")]
        public string ProductName
        {
            get;
            set;
        }

        [DisplayName("Units in stock")]
        [DataType("Integer")]
        public int UnitsInStock
        {
            get;
            set;
        }

        public bool? Available { get; set; }
    }
}