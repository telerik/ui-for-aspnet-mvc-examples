//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Telerik.Examples.Mvc.Areas.GridEditingInCellWebApi.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class GridEditingInCellWebApiCategory
    {
        public GridEditingInCellWebApiCategory()
        {
            this.Products = new HashSet<GridEditingInCellWebApiProduct>();
        }
    
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
        public string Description { get; set; }
        public byte[] Picture { get; set; }
    
        public virtual ICollection<GridEditingInCellWebApiProduct> Products { get; set; }
    }
}