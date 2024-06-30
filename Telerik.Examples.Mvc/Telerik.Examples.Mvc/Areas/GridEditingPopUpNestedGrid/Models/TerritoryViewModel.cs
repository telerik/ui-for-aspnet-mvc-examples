using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.GridEditingPopUpNestedGrid.Models
{
    public class TerritoryViewModel
    {
        public string TerritoryID { get; set; }
        public string TerritoryDescription { get; set; }

        public GridEditingPopUpNestedGridTerritory ToTerritory()
        {
            GridEditingPopUpNestedGridTerritory territory = new GridEditingPopUpNestedGridTerritory();
            territory.TerritoryID = this.TerritoryID;
            territory.TerritoryDescription = this.TerritoryDescription;
            return territory;
        }
    }
}