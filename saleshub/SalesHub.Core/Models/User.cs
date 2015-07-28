using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace SalesHub.Core.Models
{
    public class User
    {
        public int UserId { get; set; }

        [Required]
        public string UserName { get; set; }
        [Required]
        public string FullName { get; set; }
        [Required]
        public string EmailAddress { get; set; }
        public string Initials { get; set; }
        public string JobTitle { get; set; }
        public string FaxNumber { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        public bool IsActive { get; set; }

        [IgnoreDataMember]
        public virtual IList<SellingCompany> SellingCompanies { get; set; }
    }
}
