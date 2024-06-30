using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.GridEditingPopUpNestedGrid.Models
{
    public class NorthwindRepository
    {
        private GridEditingPopUpNestedGridEntities context = new GridEditingPopUpNestedGridEntities();

        public IEnumerable<EmployeeViewModel> Employees
        {
            get
            {
                return context.Employees.Select(e => new EmployeeViewModel
                {
                    EmployeeID = e.EmployeeID,
                    FirstName = e.FirstName,
                    LastName = e.LastName,
                    HireDate = e.HireDate,
                    Title = e.Title,
                    Territories = e.Territories.Select(t => new TerritoryViewModel
                    {
                        TerritoryID = t.TerritoryID,
                        TerritoryDescription = t.TerritoryDescription.Trim()
                    })
                });
            }
        }

        public IEnumerable<TerritoryViewModel> Territories
        {
            get
            {
                return context.Territories.Select(t => new TerritoryViewModel
                {
                    TerritoryID = t.TerritoryID,
                    TerritoryDescription = t.TerritoryDescription
                });
            }
        }


        public void UpdateEmployee(EmployeeViewModel fromClient)
        {
            var employee = context.Employees.Include("Territories")
                .First(e => e.EmployeeID == fromClient.EmployeeID);
            fromClient.CopyToEmployee(employee);

            if (fromClient.Territories != null)
            {
                UpdateEmployeeTerritories(employee, fromClient);
            }

            context.SaveChanges();
        }

        private void UpdateEmployeeTerritories(GridEditingPopUpNestedGridEmployee employee, EmployeeViewModel fromClient)
        {
            var employeeTerritories = employee.Territories.ToList();

            foreach (var territory in fromClient.Territories)
            {
                var terToUpdate = employeeTerritories.First(e => e.TerritoryID == territory.TerritoryID);
                terToUpdate.TerritoryDescription = territory.TerritoryDescription;
            }
        }
    }
}