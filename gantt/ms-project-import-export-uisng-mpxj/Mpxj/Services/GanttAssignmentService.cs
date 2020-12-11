namespace Mpxj.Services
{
	using Mpxj.Models;
	using net.sf.mpxj;
	using net.sf.mpxj.MpxjUtilities;
	using net.sf.mpxj.reader;
	using System.Collections.Generic;

	public class GanttAssignmentService
	{
		public IList<ResourceAssignmentViewModel> ReadAssignments(string path)
		{
			var assignments = new List<ResourceAssignmentViewModel>();
			ProjectReader reader = new UniversalProjectReader();

			try
			{
				ProjectFile project = reader.read(path);

				foreach (ResourceAssignment assignment in project.ResourceAssignments)
				{
					var resourceId = assignment.ResourceUniqueID.ToNullableInt().GetValueOrDefault();

					if (resourceId < 0)
					{
						continue;
					}

					assignments.Add(new ResourceAssignmentViewModel()
					{
						ID = assignment.UniqueID.ToNullableInt().GetValueOrDefault(),
						TaskID = assignment.TaskUniqueID.ToNullableInt().GetValueOrDefault(),
						ResourceID = resourceId,
						Units = assignment.Units.ToNullableDouble().GetValueOrDefault() / 100
					});
				}

				return assignments;
			}
			catch
			{
				return assignments;
			}
		}
	}
}