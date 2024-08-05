using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.Grid.Models
{
	public class License
	{
		[Required(ErrorMessage = "LicenseId is required")]
		public int LicenseId { get; set; }

		[UIHint("CustomerId")]
		[Required(ErrorMessage = "CustomerId is required")]
		public int CustomerId { get; set; }

		[UIHint("VendorId")]
		[Required(ErrorMessage = "VendorId is required")]
		public int VendorId { get; set; }

		[UIHint("ProductId")]
		[Required(ErrorMessage = "ProductId is required")]
		public int ProductId { get; set; }
	}
}