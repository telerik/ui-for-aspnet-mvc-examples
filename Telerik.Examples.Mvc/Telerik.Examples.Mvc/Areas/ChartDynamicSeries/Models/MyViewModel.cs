using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.ChartDynamicSeries.Models
{
    public class MyViewModel
    {
        public MyViewModel()
        {
            Series = new List<MySeriesData>();
            Categories = new List<string>();
        }

        public List<MySeriesData> Series
        {
            get;
            private set;
        }

        public List<string> Categories
        {
            get;
            private set;
        }
    }
}