using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ForeignKeyColumnDemo.Models
{
    public class EmployeeRepository
    {

        //static data - FOR TEST PURPOSES ONLY
        private static List<Employee> employeeList = new List<Employee> { 
            new Employee {EmployeeID = 1, Name = "Anrew"},
            new Employee {EmployeeID = 2, Name = "John"},
            new Employee {EmployeeID = 3, Name = "Peter"},
            new Employee {EmployeeID = 4, Name = "Ivan"},
            new Employee {EmployeeID = 5, Name = "Nancy"},
            new Employee {EmployeeID = 6, Name = "Alex"},
            new Employee {EmployeeID = 7, Name = "Brandon"},
            new Employee {EmployeeID = 8, Name = "Bill"},
            new Employee {EmployeeID = 9, Name = "Mila"}
        };

        public static IList<Employee> GetAll()
        {
            IList<Employee> result = (IList<Employee>)HttpContext.Current.Session["Employees"];

            if (result == null)
            {
                //read from dataBase
                HttpContext.Current.Session["Employees"] = result =
                    (from employee in employeeList
                     select new Employee
                     {
                         EmployeeID = employee.EmployeeID,
                         Name = employee.Name,
           
                     }).ToList();
            }

            return result;
        }

        public static Employee One(Func<Employee, bool> predicate)
        {
            return GetAll().Where(predicate).FirstOrDefault();
        }

        public static void Insert(Employee employee)
        {
            employee.EmployeeID = GetAll().OrderByDescending(p => p.EmployeeID).First().EmployeeID + 1;

            GetAll().Insert(0, employee);
        }

        public static void Update(Employee employee)
        {
            Employee target = One(o => o.EmployeeID == employee.EmployeeID);
            if (target != null)
            {
                target.EmployeeID = employee.EmployeeID;
                target.Name = employee.Name;
            }
        }

        public static void Remove(Employee employee)
        {
            Employee target = One(o => o.EmployeeID == employee.EmployeeID);
            if (target != null)
            {
                GetAll().Remove(target);
            }
        }
    }
}