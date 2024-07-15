using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.GridMultiSelectFilter.Models
{
    public class ViewModel
    {
        public int ID { get; set; }

        [Display(Name = "Tags")]
        public List<string> Tags { get; set; }
    }
}