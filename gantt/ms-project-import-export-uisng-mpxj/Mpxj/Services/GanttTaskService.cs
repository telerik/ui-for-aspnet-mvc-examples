namespace Mpxj.Services
{
	using java.lang;
	using Mpxj.Models;
	using net.sf.mpxj;
	using net.sf.mpxj.MpxjUtilities;
	using net.sf.mpxj.reader;
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Web.Mvc;

	public class GanttTaskService
	{
		public IList<TaskViewModel> ReadTasks(string path)
		{
			ProjectReader reader = new UniversalProjectReader();
			var modelTasks = new List<TaskViewModel>();

			try
			{
				ProjectFile project = reader.read(path);
				
				var index = 0;

				foreach (Task task in project.Tasks)
				{
					var modelTask = new TaskViewModel()
					{
						TaskID = task.UniqueID.ToNullableInt().GetValueOrDefault(),
						Start = task.Start.ToDateTime(),
						End = task.Finish.ToDateTime(),
						PlannedStart = task.BaselineStart.ToDateTime(),
						PlannedEnd = task.BaselineFinish.ToDateTime(),
						// expanded is always true upon reading
						Expanded = task.Expanded,
						PercentComplete = task.PercentageComplete.ToNullableDecimal().GetValueOrDefault() / 100,
						Summary = task.Summary,
						Title = task.Name
					};

					var parent = task.ParentTask;

					if (parent != null)
					{
						var parentId = task.ParentTask.UniqueID.ToNullableInt();

						modelTask.OrderId = modelTasks.Where(t => t.ParentID == parentId).Count();
						modelTask.ParentID = parentId;
					}
					else
					{
						modelTask.OrderId = index;
						index++;
					}

					modelTasks.Add(modelTask);
				}

				return modelTasks;
			}
			catch
			{
				return modelTasks;
			}
		}
	}
}