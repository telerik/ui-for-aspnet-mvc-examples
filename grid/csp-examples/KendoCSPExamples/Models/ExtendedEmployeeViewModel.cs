using System.ComponentModel.DataAnnotations;

namespace KendoCSPExamples.Models
{
    public class ExtendedEmployeeViewModel
    {
        public int EmployeeID
        {
            get;
            set;
        }

        [Required]
        public string FirstName
        {
            get;
            set;
        }

        public string EmployeeName
        {
            get;
            set;
        }

        [Required]
        public string LastName
        {
            get;
            set;
        }

        public string Title
        {
            get;
            set;
        }

        public string Country
        {
            get;
            set;
        }

        public string City
        {
            get;
            set;
        }

        public string Address
        {
            get;
            set;
        }

        public string HomePhone
        {
            get;
            set;
        }

        [Required]
        public string Notes
        {
            get;
            set;
        }

        public int? ReportsTo
        {
            get;
            set;
        }
    }
}
