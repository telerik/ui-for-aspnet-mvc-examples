using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.GridEditingPopUpNestedGrid.Models
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

        public DateTime? HireDate { get; set; }

        public IEnumerable<TerritoryViewModel> Territories { get; set; }

        public void CopyToEmployee(GridEditingPopUpNestedGridEmployee employee)
        {
            employee.EmployeeID = this.EmployeeID;
            employee.FirstName = this.FirstName;
            employee.LastName = this.LastName;
            employee.Title = this.Title;
            employee.HireDate = this.HireDate;
        }
    }
}