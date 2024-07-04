using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.PanelBarSelectItemInitially.Models
{
	public class LocalPanelBarItem
	{
		public string MenuName { get; set; }
		public string MenuUrl { get; set; }
		public List<LocalPanelBarItem> ChildItems { get; set; }
		public bool IsPreSelected { get; set; }
	}
}