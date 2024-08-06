using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.GridEditingPopUpMultiSelect.Models
{
    public class TerritoryViewModel
    {
        public string TerritoryID { get; set; }
        public string TerritoryDescription { get; set; }

        public GridEditingPopUpMultiSelectTerritory ToTerritory()
        {
            GridEditingPopUpMultiSelectTerritory territory = new GridEditingPopUpMultiSelectTerritory();
            territory.TerritoryID = this.TerritoryID;
            territory.TerritoryDescription = this.TerritoryDescription;
            return territory;
        }
    }
}