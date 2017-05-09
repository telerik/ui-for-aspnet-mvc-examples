using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MultiSelectFilter.Models
{
    public class ViewModel
    {
        public int ID { get; set; }

        [Display(Name = "Tags")]
        public List<string> Tags { get; set; }
    }
}