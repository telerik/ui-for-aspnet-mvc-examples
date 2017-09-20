using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SignalRLocalHub.Hubs
{
    public class FilterRange
    {
        private DateTime start;
        public DateTime Start
        {
            get
            {
                return start;
            }
            set
            {
                start = value.ToUniversalTime();
            }
        }

        private DateTime end;
        public DateTime End
        {
            get
            {
                return end;
            }
            set
            {
                end = value.ToUniversalTime();
            }
        }
    }
}