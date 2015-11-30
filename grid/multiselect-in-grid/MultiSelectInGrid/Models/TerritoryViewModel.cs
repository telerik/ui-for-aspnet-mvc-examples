using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MultiSelectInGrid.Models
{
    public class TerritoryViewModel
    {
        public string TerritoryID { get; set; }
        public string TerritoryDescription { get; set; }

        public Territory ToTerritory()
        {
            Territory territory = new Territory();
            territory.TerritoryID = this.TerritoryID;
            territory.TerritoryDescription = this.TerritoryDescription;
            return territory;
        }
    }
}