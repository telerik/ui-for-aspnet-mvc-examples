using System.Collections.Generic;
using System.Text;
using System.Web.Mvc;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using KendoUIMVC5.Models;

namespace KendoUIMVC5.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var values = new ForeignKeyValues
            {
                Customers = CustomerRepository.Customers,
                Vendors = VendorRepository.Vendors,
                Products = ProductRepository.Products
            };
            return View(values);
        }

        [HttpPost]
        public JsonResult Read([DataSourceRequest] DataSourceRequest request)
        {
            return Json(LicenseRepository.GetAll().ToDataSourceResult(request));
        }

        [HttpPost]
        public JsonResult Create([DataSourceRequest] DataSourceRequest request, License license)
        {
            if (license != null && ModelState.IsValid)
            {
                LicenseRepository.Insert(license);
            }

            return Json(new[] { license }.ToDataSourceResult(request, ModelState));
        }

        [HttpPost]
        public JsonResult Update([DataSourceRequest] DataSourceRequest request, License license)
        {
            if (license != null && ModelState.IsValid)
            {
                LicenseRepository.Update(license);
            }

            return Json(ModelState.ToDataSourceResult());
        }

        public JsonResult GetCustomers()
        {
            return Json(CustomerRepository.Customers, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetVendors(int customerId)
        {
            return Json(VendorRepository.GetVendorsByCustomer(customerId), JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetProducts(int vendorId)
        {
            return Json(ProductRepository.GetProductsByVendor(vendorId), JsonRequestBehavior.AllowGet);
        }
    }
}
