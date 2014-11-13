using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KendoUIMVC5.Models
{
    public class LicenseRepository
    {
        public static LicenseRepository Repository = new LicenseRepository();

        public List<License> Licenses
        {
            get
            {
                List<License> result = (List<License>)HttpContext.Current.Session["Licenses"];

                if (result == null)
                {
                    HttpContext.Current.Session["Licenses"] = result = new List<License>();
                }

                return result;
            }
        }

        public List<License> GetAll()
        {
            return Licenses;
        }

        public void Insert(License license)
        {
            var last = Licenses.LastOrDefault();

            license.LicenseId = last != null ? last.LicenseId + 1 : 1;
            
            Licenses.Add(license);

            HttpContext.Current.Session["Licenses"] = Licenses;
        }

        public void Update(License license)
        {
            var old = Licenses.Where(l => l.LicenseId == license.LicenseId).FirstOrDefault();

            if (old != null)
            {
                old.CustomerId = license.CustomerId;
                old.VendorId = license.VendorId;
                old.ProductId = license.ProductId;
            }

            HttpContext.Current.Session["Licenses"] = Licenses;
        }
    }
}