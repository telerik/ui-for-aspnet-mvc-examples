using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace ForeignKeyColumnDemo.Models
{
    public class Order
    {
        public int OrderID { get; set; }
        public DateTime OrderDate { get; set; }
        public string OrderDescription { get; set; }
        public int EmployeeId { get; set; }
        [ScriptIgnore]
        public byte[] Image { get; set; }
        public string Image64 {
            get {
                return Image != null ? Convert.ToBase64String(Image) : null;
            }
        }
    }
}