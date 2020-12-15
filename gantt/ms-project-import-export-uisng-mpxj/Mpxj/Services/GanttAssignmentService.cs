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
			// Initialize an MPXJ Project reader which is universal (will open any supported file)
			var assignments = new List<ResourceAssignmentViewModel>();
			ProjectReader reader = new UniversalProjectReader();

			try
			{
				// Read the file at the specified path
				ProjectFile project = reader.read(path);

				// Create a ResourceAssignmentViewModel for each defined resource assignment in the Project
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