using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace Telerik.Examples.Mvc.Areas.GridEditingPopUpMultiSelect.Models
{
    public class EmployeeViewModel
    {
        public EmployeeViewModel()
        {
            this.Territories = new List<TerritoryViewModel>();
        }

        [UIHint("EmployeeID")]
        public int EmployeeID { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Title { get; set; }

        public DateTime? HireDate { get; set; }

        [UIHint("TerritoriesEditor")]
        public IEnumerable<TerritoryViewModel> Territories { get; set; }

        public void CopyToEmployee(Employee employee)
        {
            employee.EmployeeID = this.EmployeeID;
            employee.FirstName = this.FirstName;
            employee.LastName = this.LastName;
            employee.Title = this.Title;
            employee.HireDate = this.HireDate;
        }
    }
}