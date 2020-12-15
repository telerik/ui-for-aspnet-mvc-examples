namespace Mpxj.Services
{
	using Mpxj.Models;
	using net.sf.mpxj;
	using net.sf.mpxj.MpxjUtilities;
	using net.sf.mpxj.reader;
	using System.Collections.Generic;

	public class GanttResourceService
	{
		public IList<ResourceViewModel> ReadResources(string path)
		{
			// Initialize an MPXJ Project reader which is universal (will open any supported file)
			ProjectReader reader = new UniversalProjectReader();
			var resources = new List<ResourceViewModel>();

			try
			{
				// Read the file at the specified path
				ProjectFile project = reader.read(path);

				// Create a ResourceViewModel for each defined in the Project resource
				foreach (Resource res in project.Resources)
				{
					var name = res.Name;

					if (name == null)
					{
						continue;
					}

					resources.Add(new ResourceViewModel()
					{
						ID = res.UniqueID.ToNullableInt().GetValueOrDefault(),
						Name = res.Name
					});
				}

				return resources;
			}
			catch
			{
				return resources;
			}
		}
	}
}