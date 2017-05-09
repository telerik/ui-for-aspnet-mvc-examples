using System;
using System.ComponentModel.DataAnnotations;
using System.Xml.Serialization;

namespace KendoWindow_Ajax_Form.Models
{
    [Serializable]
    [XmlRoot("Order"), XmlType("OrderViewModel")]
    public class OrderViewModel
    {
        public int OrderID
        {
            get;
            set;
        }

        public string CustomerID { get; set; }

        public string ContactName
        {
            get;
            set;
        }

        [Required]
        public DateTime OrderDate
        {
            get;
            set;
        }

        public DateTime ShippedDate
        {
            get;
            set;
        }
    }
}
