using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.GridEditingWithCascadingDropDownLists.Models
{
    public class Vendor
    {
        public int VendorId { get; set; }
        public int CustomerId { get; set; }
        public string VendorName { get; set; }
    }
}