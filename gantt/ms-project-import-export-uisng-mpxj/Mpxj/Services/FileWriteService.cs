namespace Mpxj.Services
{
	using java.io;
	using java.lang;
	using Kendo.Mvc.UI;
	using Mpxj.Models;
	using net.sf.mpxj;
	using net.sf.mpxj.MpxjUtilities;
	using net.sf.mpxj.mspdi;
	using System;
	using System.Collections.Generic;
	using System.Linq;

	public class FileWriteService
	{
		private IList<TaskViewModel> tasks;
		private IList<DependencyViewModel> dependencies;
		private IList<ResourceViewModel> resources;
		private IList<ResourceAssignmentViewModel> assignments;

		public void SaveData(GanttDataContainer data, string path)
		{
			this.tasks = data.Tasks;
			this.dependencies = data.Dependencies;
			this.resources = data.Resources;
			this.assignments = data.Assignments;

			WriteFile(path);
		}

		// The below method is only for demonstration
		// It does not get called from anywhere in the app
		// It shouws how to construct all the needed data as Gantt ViewModels,
		// so that a new MSPDI file could be created from scratch
		public void PopulateInitiallyFile(string path)
		{
			this.tasks = new List<TaskViewModel>()
			{
				new TaskViewModel() { TaskID = 1, Title = "Task 1", Start = DateTime.Now, End = DateTime.Now.AddDays(1), OrderId = 0, Expanded = true, ParentID = null, PercentComplete = 0.5m, Summary = true, PlannedStart = DateTime.Now, PlannedEnd = DateTime.Now.AddDays(1) },
				new TaskViewModel() { TaskID = 2, Title = "Task 2", Start = DateTime.Now, End = DateTime.Now.AddDays(1), OrderId = 1, Expanded = true, ParentID = null, PercentComplete = 0.5m, Summary = true, PlannedStart = DateTime.Now, PlannedEnd = DateTime.Now.AddDays(1)  },
				new TaskViewModel() { TaskID = 11, Title = "Task 11", Start = DateTime.Now, End = DateTime.Now.AddDays(1), OrderId = 0, Expanded = false, ParentID = 1, PercentComplete = 0.5m, Summary = false, PlannedStart = DateTime.Now, PlannedEnd = DateTime.Now.AddDays(1)  },
				new TaskViewModel() { TaskID = 12, Title = "Task 12", Start = DateTime.Now, End = DateTime.Now.AddDays(1), OrderId = 1, Expanded = false, ParentID = 1, PercentComplete = 0.5m, Summary = false, PlannedStart = DateTime.Now, PlannedEnd = DateTime.Now.AddDays(1)  },
				new TaskViewModel() { TaskID = 21, Title = "Task 21", Start = DateTime.Now, End = DateTime.Now.AddDays(1), OrderId = 0, Expanded = false, ParentID = 2, PercentComplete = 0.5m, Summary = false, PlannedStart = DateTime.Now, PlannedEnd = DateTime.Now.AddDays(1)  },
				new TaskViewModel() { TaskID = 3, Title = "Finish", Start = DateTime.Now.AddDays(1), End = DateTime.Now.AddDays(1), OrderId = 2, Expanded = false, ParentID = null, Summary = false, PlannedStart = DateTime.Now, PlannedEnd = DateTime.Now  }
			};

			this.dependencies = new List<DependencyViewModel>()
			{
				new DependencyViewModel() { DependencyID = 1, PredecessorID = 1, SuccessorID = 2, Type = DependencyType.FinishStart },
				new DependencyViewModel() { DependencyID = 2, PredecessorID = 2, SuccessorID = 3, Type = DependencyType.FinishStart },
				new DependencyViewModel() { DependencyID = 3, PredecessorID = 11, SuccessorID = 12, Type = DependencyType.FinishStart }
			};

			this.resources = new List<ResourceViewModel>()
			{
				new ResourceViewModel() { ID = 1, Name = "Veso", Color = "#ff0000" },
				new ResourceViewModel() { ID = 2, Name = "Maria", Color = "#ffff00" },
				new ResourceViewModel() { ID = 3, Name = "Nencho", Color = "#0000ff" },
			};

			this.assignments = new List<ResourceAssignmentViewModel>()
			{
				new ResourceAssignmentViewModel() { ID = 1, ResourceID = 1, TaskID = 1, Units = 0.5 },
				new ResourceAssignmentViewModel() { ID = 2, ResourceID = 2, TaskID = 1, Units = 0.5 },
				new ResourceAssignmentViewModel() { ID = 3, ResourceID = 1, TaskID = 2, Units = 0.5 },
				new ResourceAssignmentViewModel() { ID = 4, ResourceID = 2, TaskID = 2, Units = 0.5 },
				new ResourceAssignmentViewModel() { ID = 5, ResourceID = 3, TaskID = 3, Units = 1 },
				new ResourceAssignmentViewModel() { ID = 6, ResourceID = 3, TaskID = 11, Units = 1 },
				new ResourceAssignmentViewModel() { ID = 7, ResourceID = 3, TaskID = 12, Units = 1 },
				new ResourceAssignmentViewModel() { ID = 8, ResourceID = 3, TaskID = 21, Units = 1 }
			};

			WriteFile(path);
		}

		private void WriteFile(string path)
		{
			ProjectFile project = new ProjectFile();
			MSPDIWriter writer = new MSPDIWriter();

			WriteResources(project);

			WriteTasks(project);
			WriteDependencies(project);
			WriteAssignments(project);

			using (var stream = new FileOutputStream(path))
			{
				writer.Write(project, stream);
			}
		}

		private void WriteAssignments(ProjectFile project)
		{
			if (this.assignments == null)
			{
				return;
			}

			for (int i = 0; i < this.assignments.Count; i++)
			{
				var assignemntModel = this.assignments[i];
				var res = project.GetResourceByUniqueID(new Integer(assignemntModel.ResourceID));
				var task = project.GetTaskByUniqueID(new Integer(assignemntModel.TaskID));

				var assignment = task.AddResourceAssignment(res);

				assignment.Units = new java.lang.Double(assignemntModel.Units * 100);
				assignment.UniqueID = new Integer(assignemntModel.ID);

				res.AddResourceAssignment(assignment);
			}
		}

		private void WriteResources(ProjectFile project)
		{
			for (int i = 0; i < this.resources.Count; i++)
			{
				var resModel = this.resources[i];
				var res = project.AddResource();

				res.Name = resModel.Name;
				res.UniqueID = new Integer(resModel.ID);
			}
		}

		private void WriteDependencies(ProjectFile project)
		{
			for (int i = 0; i < this.dependencies.Count; i++)
			{
				var dep = this.dependencies[i];
				var predecessor = project.GetTaskByUniqueID(new Integer(dep.PredecessorID));
				var successor = project.GetTaskByUniqueID(new Integer(dep.SuccessorID));

				successor.AddPredecessor(predecessor, RelationType.getInstance((int)dep.Type), null);
			}
		}

		private void WriteTasks(ProjectFile project)
		{
			var tasks = this.tasks.Where(t => t.ParentID == null).OrderBy(t => t.OrderId).ToList();

			for (int i = 0; i < tasks.Count; i++)
			{
				var task = tasks[i];
				var childTasks = this.tasks.Where(t => t.ParentID == task.TaskID).OrderBy(t => t.OrderId).ToList();

				if (childTasks != null && childTasks.Count > 0)
				{
					tasks.InsertRange(i + 1, childTasks);
				}
			}

			int index = 0;

			foreach (var taskModel in tasks)
			{
				index++;

				Task task = project.AddTask();

				task.Start = taskModel.Start.ToJavaDate();
				task.Finish = taskModel.End.ToJavaDate();
				task.BaselineStart = taskModel.PlannedStart.ToJavaDate();
				task.BaselineFinish = taskModel.PlannedEnd.ToJavaDate();
				task.Name = taskModel.Title;
				task.ID = new Integer(taskModel.OrderId);
				task.Expanded = taskModel.Expanded;
				task.UniqueID = new Integer(taskModel.TaskID);
				task.PercentageComplete = new java.lang.Double(Decimal.ToDouble(taskModel.PercentComplete * 100));
				task.Summary = taskModel.Summary;

				task.ID = new Integer(index);

				if (taskModel.ParentID != null)
				{
					Task parent = project.GetTaskByUniqueID(new Integer(taskModel.ParentID.GetValueOrDefault()));

					parent.AddChildTask(task);
				}
			}
		}
	}
}