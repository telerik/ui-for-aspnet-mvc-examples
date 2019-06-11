using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LoadConditionaly.Models
{
	public class TreeViewItemModel
	{
		public int Id { get; set; }

		public int? ParentId { get; set; }

		public string Text { get; set; }
	}
}