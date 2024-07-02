using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.TreeViewSaveItemState.Models
{
    public class ViewModel
    {
        public int ID { get; set; }
        public int? ParentID { get; set; }
        public string Name { get; set; }
        public bool IsChecked { get; set; }
        public bool Expanded { get; set; }
    }
}