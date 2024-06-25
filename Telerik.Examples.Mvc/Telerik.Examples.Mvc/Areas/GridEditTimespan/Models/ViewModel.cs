using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.GridEditTimespan.Models
{
    public class ViewModel
    {
        public int ID { get; set; }
        [Required]
        public TimeSpan Time { get; set; }
    }
}