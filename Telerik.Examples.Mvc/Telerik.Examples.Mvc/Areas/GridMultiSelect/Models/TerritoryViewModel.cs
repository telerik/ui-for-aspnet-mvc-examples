﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.GridMultiSelect.Models
{
    public class TerritoryViewModel
    {
        public string TerritoryID { get; set; }
        public string TerritoryDescription { get; set; }

        public GridMultiSelectTerritory ToTerritory()
        {
            GridMultiSelectTerritory territory = new GridMultiSelectTerritory();
            territory.TerritoryID = this.TerritoryID;
            territory.TerritoryDescription = this.TerritoryDescription;
            return territory;
        }
    }
}