﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.GridMultiSelect.Models
{
    public class NorthwindRepository
    {
        private GridMultiSelectEntities context = new GridMultiSelectEntities();

        public IEnumerable<EmployeeViewModel> Employees
        {
            get
            {
                return context.Employees.Select(e => new EmployeeViewModel
                {
                    EmployeeID = e.EmployeeID,
                    FirstName = e.FirstName,
                    LastName = e.LastName,
                    Title = e.Title,
                    Territories = e.Territories.Select(t => new TerritoryViewModel
                    {
                        TerritoryID = t.TerritoryID,
                        TerritoryDescription = t.TerritoryDescription
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


        public void UpdateEmployee(EmployeeViewModel viewModel)
        {
            var employee = context.Employees.Include("Territories")
                .First(e => e.EmployeeID == viewModel.EmployeeID);
            viewModel.CopyToEmployee(employee);

            if (viewModel.Territories != null)
            {
                UpdateEmployeeTerritories(employee, viewModel);
            }

            context.SaveChanges();
        }

        public int CreateEmployee(EmployeeViewModel viewModel)
        {
            var employee = new GridMultiSelectEmployee();
            viewModel.CopyToEmployee(employee);
            if (viewModel.Territories != null)
            {
                foreach (var territory in viewModel.Territories)
                {
                    var employeeTerritory = territory.ToTerritory();
                    context.Territories.Attach(employeeTerritory);
                    employee.Territories.Add(employeeTerritory);
                }
            }
            context.Employees.Add(employee);
            context.SaveChanges();
            return employee.EmployeeID;
        }

        private void UpdateEmployeeTerritories(GridMultiSelectEmployee employee, EmployeeViewModel viewModel)
        {
            var employeeTerritories = employee.Territories.ToList();
            foreach (var territory in employeeTerritories)
            {
                if (!viewModel.Territories.Any(t => t.TerritoryID == territory.TerritoryID))
                {
                    employee.Territories.Remove(territory);
                }
            }

            foreach (var territory in viewModel.Territories)
            {
                if (!employeeTerritories.Any(t => t.TerritoryID == territory.TerritoryID))
                {
                    var employeeTerritory = territory.ToTerritory();
                    context.Territories.Attach(employeeTerritory);
                    employee.Territories.Add(employeeTerritory);
                }
            }
        }
    }
}