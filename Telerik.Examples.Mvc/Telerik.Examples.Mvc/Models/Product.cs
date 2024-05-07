using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Models
{
	public class Product
	{
		public int ID { get; set; }
		public string Name { get; set; }
		public Category Category { get; set; }
	}
}