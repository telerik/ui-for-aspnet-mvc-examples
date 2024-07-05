using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.GridEditingUploadInPopUp.Models
{
	public class Category
	{
		[ScaffoldColumn(false)]
		public int Id { get; set; }

		public string Name { get; set; }

		[UIHint("FileUpload")]
		[Required]
		public string ImageUrl { get; set; }
	}
}