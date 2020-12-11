using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Kendo.Mvc.UI;

namespace Mpxj.Models
{
	public class DependencyViewModel : IGanttDependency
	{
		public int DependencyID { get; set; }

		public int PredecessorID { get; set; }

		public int SuccessorID { get; set; }

		public DependencyType Type { get; set; }
	}
}