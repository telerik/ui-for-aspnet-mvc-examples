//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Telerik.Examples.Mvc.Areas.ChartSignalR.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Intraday
    {
        public int ID { get; set; }
        public string Symbol { get; set; }
        public System.DateTime Date { get; set; }
        public decimal Open { get; set; }
        public decimal High { get; set; }
        public decimal Low { get; set; }
        public decimal Close { get; set; }
        public long Volume { get; set; }
    }
}
