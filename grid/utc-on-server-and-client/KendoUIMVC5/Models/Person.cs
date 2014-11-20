using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KendoUIMVC5.Models
{
    public class Person
    {
        public int PersonID { get; set; }
        public string Name { get; set; }
        private DateTime birthDate;
        public DateTime BirthDate
        {
            get { return this.birthDate; }
            set
            {
                this.birthDate = new DateTime(value.Ticks, DateTimeKind.Utc);
            }

        }
    }
}