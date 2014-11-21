using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KendoUIMVC5.Models
{
    public static class LicenseRepository
    {
        public static List<License> Licenses
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

        public static List<License> GetAll()
        {
            return Licenses;
        }

        public static  void Insert(License license)
        {
            var last = Licenses.LastOrDefault();

            license.LicenseId = last != null ? last.LicenseId + 1 : 1;
            
            Licenses.Add(license);

            HttpContext.Current.Session["Licenses"] = Licenses;
        }

        public static void Update(License license)
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