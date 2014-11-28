using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace KendoUIMVC5.Models
{
    public class Product
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