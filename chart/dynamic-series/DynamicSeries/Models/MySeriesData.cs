using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DynamicSeries.Models
{
    public class MySeriesData
    {
        public string Name { get; set;  }
        public string Stack { get; set;  }
        public IEnumerable<decimal> Data { get; set;  }
    }
}