using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KendoUIMVC5.Models
{
    public class Car
    {
        public Guid Id { get; set; }

        public string Make { get; set; }

        public string Model { get; set; }

        public DateTimeOffset ProductionDate { get; set; }
    }
}