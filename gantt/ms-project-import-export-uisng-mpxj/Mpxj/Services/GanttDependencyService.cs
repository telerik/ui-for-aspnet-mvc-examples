namespace Mpxj.Services
{
	using java.util;
	using Kendo.Mvc.UI;
	using Mpxj.Models;
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
			ProjectReader reader = new UniversalProjectReader();
			var dependencies = new List<DependencyViewModel>();

			try
			{
				ProjectFile project = reader.read(path);

				var index = 0;

				foreach (Task task in project.Tasks)
				{
					var successors = task.Successors;
					Iterator iterator = successors.iterator();

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