using System.Collections.Generic;

namespace TelerikMvcAppTreeViewLoadItemsAsync.Models
{
    public class HierarchicalViewModel
    {
        public int ID { get; set; }

        public int? ParentID { get; set; }

        public string Name { get; set; }

        public bool Expanded { get; set; }

        public string ImageUrl { get; set; }

        public bool HasChildren { get; set; }

        public IEnumerable<object> Children { get; set; }
    }
}