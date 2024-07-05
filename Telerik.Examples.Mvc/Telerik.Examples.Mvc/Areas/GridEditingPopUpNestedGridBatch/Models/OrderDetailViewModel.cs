using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.GridEditingPopUpNestedGridBatch.Models
{
	public class OrderDetailViewModel
	{
		public short Quantity { get; set; }

		public decimal UnitPrice { get; set; }

		public float Discount { get; set; }

		public int OrderID { get; set; }

		public int ProductID { get; set; }

		public string UIID { get; set; }
	}
}