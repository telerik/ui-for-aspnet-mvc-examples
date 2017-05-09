﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GridSyncChangesWithOneRequest.Models
{
    public class Order
    {
        public int OrderID { get; set; }
        public DateTime OrderDate { get; set; }
        public string OrderDescription { get; set; }
        public int EmployeeID { get; set; }
    }
}