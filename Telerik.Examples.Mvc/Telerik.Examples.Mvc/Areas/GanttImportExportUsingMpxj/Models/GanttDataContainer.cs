namespace Telerik.Examples.Mvc.Areas.GanttImportExportUsingMpxj.Models
{
	using System.Collections.Generic;

	public class GanttDataContainer
	{
		public IList<TaskViewModel> Tasks { get; set; }

		public IList<DependencyViewModel> Dependencies { get; set; }

		public IList<ResourceViewModel> Resources { get; set; }

		public IList<ResourceAssignmentViewModel> Assignments { get; set; }
	}
}