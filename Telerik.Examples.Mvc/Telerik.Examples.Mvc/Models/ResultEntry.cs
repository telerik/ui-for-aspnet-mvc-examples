using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Models
{
    public class ResultEntry
    {
        public ResultEntry()
        {
        }

        public ResultEntry(string id, string name)
        {
            ID = id;
            Name = name;
        }

        public string ID
        {
            get;
            set;
        }
        public string Name
        {
            get;
            set;
        }
    }
}