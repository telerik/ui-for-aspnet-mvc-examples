using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace KendoUIMVC5.Models
{
    public class Person
    {
        [Editable(false)]
        public int PersonID { get; set; }
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
        public bool IsAdmin { get; set; }
    }
}