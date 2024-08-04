using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


namespace Telerik.Examples.Mvc.Areas.GridMultiSelect.Models
{
    public class EmployeeViewModel
    {
        public EmployeeViewModel()
        {
            this.Territories = new List<TerritoryViewModel>();
        }

        public int EmployeeID { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Title { get; set; }

        [UIHint("TerritoriesEditor")]
        public IEnumerable<TerritoryViewModel> Territories { get; set; }

        public void CopyToEmployee(GridMultiSelectEmployee employee)
        {
            employee.EmployeeID = this.EmployeeID;
            employee.FirstName = this.FirstName;
            employee.LastName = this.LastName;
            employee.Title = this.Title;
        }
    }
}