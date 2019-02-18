using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace pre_select_panelbar_item.Models
{
	public class LocalPanelBarItem
	{
		public string MenuName { get; set; }
		public string MenuUrl { get; set; }
		public List<LocalPanelBarItem> ChildItems { get; set; }
		public bool IsPreSelected { get; set; }
	}
}