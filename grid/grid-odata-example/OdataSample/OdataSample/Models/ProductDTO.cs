using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace OdataSample.Models
{
    [DataContract(Name = "Products")]
    public class ProductDTO
    {
        [Key]
        [DataMember]
        public int ProductID { get; set; }
        [DataMember]
        public string ProductName { get; set; }
        [DataMember]
        public int? SupplierID { get; set; }
        [DataMember]
        public int? CategoryID { get; set; }
        [DataMember]
        public string QuantityPerUnit { get; set; }
        [DataMember]
        [DataType(DataType.Currency)]
        public decimal? UnitPrice { get; set; }
        [DataMember]
        [DataType("Integer")]
        public short? UnitsInStock { get; set; }
        [DataMember]
        [DataType("Integer")]
        public short? UnitsOnOrder { get; set; }
        [DataMember]
        public short? ReorderLevel { get; set; }
        [DataMember]
        public bool Discontinued { get; set; }
    }
}