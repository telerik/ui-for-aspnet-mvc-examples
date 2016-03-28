using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChartInGrid.Models
{
    public class ViewModel
    {
        public int ID { get; set; }
        public List<ChartItem> ChartData { get; set; }
    }

    public class ChartItem
    {
        public int Value { get; set; }
        public int Value1 { get; set; }
        public string Category { get; set; }
    }
}