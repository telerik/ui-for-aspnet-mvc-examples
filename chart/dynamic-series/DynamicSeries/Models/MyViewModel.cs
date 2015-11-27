using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DynamicSeries.Models
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