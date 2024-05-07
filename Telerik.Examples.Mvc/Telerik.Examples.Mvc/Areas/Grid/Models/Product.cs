using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.Grid.Models
{
	public class Product
	{
		public int ProductId { get; set; }
		public string ProductName { get; set; }
		public int VendorId { get; set; }
	}
}