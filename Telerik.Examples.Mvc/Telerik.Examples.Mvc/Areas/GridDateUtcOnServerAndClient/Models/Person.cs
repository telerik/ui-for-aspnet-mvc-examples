using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.GridDateUtcOnServerAndClient.Models
{
    public class Person
    {
        [ReadOnly(true)]
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