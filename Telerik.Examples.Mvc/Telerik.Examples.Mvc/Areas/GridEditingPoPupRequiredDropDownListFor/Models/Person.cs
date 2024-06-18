using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.GridEditingPoPupRequiredDropDownListFor.Models
{
    public class Person
    {
        [Editable(false)]
        public int PersonID { get; set; }
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }

        [Required]
        public string Gender { get; set; }

        public string Country { get; set; }
    }
}