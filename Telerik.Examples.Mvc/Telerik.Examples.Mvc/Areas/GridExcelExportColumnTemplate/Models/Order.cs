using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.GridExcelExportColumnTemplate.Models
{
    public class Order
    {
        public int OrderID { get; set; }
        public int Freight { get; set; }
        public DateTime OrderDate { get; set; }
        public string ShipName { get; set; }
        public string ShipCity { get; set; }
    }
}