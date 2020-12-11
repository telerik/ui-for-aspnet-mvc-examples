using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Mpxj.Models
{
	public class TaskViewModel : IGanttPlannedTask
	{
		public int TaskID { get; set; }

		public int? ParentID { get; set; }

		public int OrderId { get; set; }

		public bool Expanded { get; set; }
		public string Title { get; set; }
		public DateTime Start { get; set; }
		public DateTime End { get; set; }
		public decimal PercentComplete { get; set; }
		public bool Summary { get; set; }
		public DateTime PlannedStart { get; set; }
		public DateTime PlannedEnd { get; set; }
	}
}