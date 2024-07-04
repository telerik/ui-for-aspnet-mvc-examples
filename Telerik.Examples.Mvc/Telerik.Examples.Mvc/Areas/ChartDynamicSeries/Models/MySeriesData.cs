using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.ChartDynamicSeries.Models
{
    public class MySeriesData
    {
        public string Name { get; set;  }
        public string Stack { get; set;  }
        public IEnumerable<decimal> Data { get; set;  }
    }
}