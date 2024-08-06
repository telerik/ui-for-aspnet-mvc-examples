namespace Mpxj.Services
{
	using java.util;
	using Kendo.Mvc.UI;
	using Telerik.Examples.Mvc.Areas.GanttImportExportUsingMpxj.Models;
	using net.sf.mpxj;
	using net.sf.mpxj.MpxjUtilities;
	using net.sf.mpxj.reader;
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Web;

	public class GanttDependencyService
	{
		public IList<DependencyViewModel> ReadDependencies(string path)
		{
			// Initialize an MPXJ Project reader which is universal (will open any supported file)
			ProjectReader reader = new UniversalProjectReader();
			var dependencies = new List<DependencyViewModel>();

			try
			{
				// Read the file at the specified path
				ProjectFile project = reader.read(path);

				var index = 0;

				// Iterate over all tasks
				foreach (Task task in project.Tasks)
				{
					var successors = task.Successors;
					Iterator iterator = successors.iterator();

					// Create DependencyViewModel for each relation present in the Project Tasks
					while (iterator.hasNext())
					{
						index++;

						var succ = (Relation)iterator.next();

						var dep = new DependencyViewModel()
						{
							DependencyID = index,
							PredecessorID = task.UniqueID.ToNullableInt().GetValueOrDefault(),
							SuccessorID = succ.TargetTask.UniqueID.ToNullableInt().GetValueOrDefault(),
							Type = (DependencyType)succ.Type.Value
						};

						dependencies.Add(dep);
					}
				}

				return dependencies;
			}
			catch
			{
				return dependencies;
			}
		}
	}
}