using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace pre_select_panelbar_item.Models
{
	public class RemoteDataPanelBarItem
	{
			public string MenuName { get; set; }
			public string MenuUrl { get; set; }
			public int MenuId { get; set; }
			public bool MenuHasChild { get; set; }
			public int? MenuParentId { get; set; }
	}
}