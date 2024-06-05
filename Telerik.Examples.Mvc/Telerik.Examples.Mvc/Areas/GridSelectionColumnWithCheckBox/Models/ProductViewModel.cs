using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GridSelectionColumnWithCheckBox.Models
{
    public class ProductViewModel
    {
        [ScaffoldColumn(false)]
        public int ID { get; set; }
        public bool isEnabled { get; set; }
        [AllowHtml]
        public string ProductName { get; set; }
        public decimal UnitPrice { get; set; }
        public int UnitsOnOrder { get; set; }
        public int UnitsInStock { get; set; }
        [AllowHtml]
        public string Doc { get; set; }
        public string CreditCardNumber { get; set; }
        public DateTime CustomDate { get; set; }
        public string Status { get; set; }

        private static Dictionary<string, System.Type> _Bind;
        public static Dictionary<string, System.Type> Bind
        {
            get
            {
                if (_Bind == null)
                {
                    _Bind = new Dictionary<string, Type>();
                    _Bind.Add("UnitPrice", typeof(decimal));
                    _Bind.Add("UnitsOnOrder", typeof(int));
                    _Bind.Add("UnitsInStock", typeof(int));
                    _Bind.Add("Doc", typeof(string));
                    _Bind.Add("CreditCardNumber", typeof(string));
                    _Bind.Add("CustomDate", typeof(int));
                    _Bind.Add("Status", typeof(string));
                }

                return _Bind;
            }
            set {
                _Bind = value;
            }
        }
    }
}