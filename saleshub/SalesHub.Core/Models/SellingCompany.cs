using System;
using System.Collections.Generic;

namespace SalesHub.Core.Models
{
    public class SellingCompany
    {
        public int SellingCompanyId { get; set; }
        public string Abbreviation { get; set; }
        public string CompanyName { get; set; }

        public virtual IList<User> ManagedBy { get; set; }
    }
}
