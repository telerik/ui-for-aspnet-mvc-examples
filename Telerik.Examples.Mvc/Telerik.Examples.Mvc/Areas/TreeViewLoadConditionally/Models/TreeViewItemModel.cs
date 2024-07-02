using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.TreeViewLoadConditionally.Models
{
    public class TreeViewItemModel
	{
		public int Id { get; set; }

		public int? ParentId { get; set; }

		public string Text { get; set; }
	}
}