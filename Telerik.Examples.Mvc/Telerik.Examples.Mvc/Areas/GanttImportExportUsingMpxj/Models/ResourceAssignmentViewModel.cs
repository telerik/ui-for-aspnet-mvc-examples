using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.GanttImportExportUsingMpxj.Models
{
	public class ResourceAssignmentViewModel
	{
		public int ID { get; set; }

		public int TaskID { get; set; }

		public int ResourceID { get; set; }

		public double Units { get; set; }
	}
}