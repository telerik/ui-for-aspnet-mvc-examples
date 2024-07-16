using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.GridDateTimeOffset.Models
{
    public class CarViewModel
    {
        public Guid Id { get; set; }

        public string Make { get; set; }

        public string Model { get; set; }

        public DateTime ProductionDate { get; set; }
    }
}