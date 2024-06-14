using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.GridEditingAutoCompleteNewItem.Models
{
    public class ResultEntryViewModel
    {
        public virtual string ID
        {
            get;
            set;
        }

        public string Name
        {
            get;
            set;
        }

        public string MethodName
        {
            get;
            set;
        }

        public int MinimumChars
        {
            get;
            set;
        }

        public DateTime? SignDate
        {
            get;
            set;
        }
    }
}