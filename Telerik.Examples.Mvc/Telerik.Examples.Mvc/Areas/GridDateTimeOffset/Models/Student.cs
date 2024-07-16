using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.GridDateTimeOffset.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public DateTime Birthday { get; set; }

        public int Age { get; set; }

    }
}