using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.Grid.Models;

namespace Telerik.Examples.Mvc.Areas.Grid.Controllers
{
    public class InCellEditingWithCascadingDropDownListsController : Controller
    {
        public ActionResult Index()
        {
            var values = new ForeignKeyValues
            {
                Customers = CustomerRepository.Repository.Customers,
                Vendors = VendorRepository.Repository.Vendors,
                Products = ProductRepository.Repository.Products
            };
            return View(values);
        }

        [HttpPost]
        public JsonResult Read([DataSourceRequest] DataSourceRequest request)
        {
            return Json(LicenseRepository.Repository.GetAll().ToDataSourceResult(request));
        }

        [HttpPost]
        public JsonResult Create([DataSourceRequest] DataSourceRequest request, License license)
        {
            if (license != null && ModelState.IsValid)
            {
                LicenseRepository.Repository.Insert(license);
            }

            return Json(new[] { license }.ToDataSourceResult(request, ModelState));
        }

        [HttpPost]
        public JsonResult Update([DataSourceRequest] DataSourceRequest request, License license)
        {
            if (license != null && ModelState.IsValid)
            {
                LicenseRepository.Repository.Update(license);
            }

            return Json(ModelState.ToDataSourceResult());
        }

        public JsonResult GetCustomers()
        {
            return Json(CustomerRepository.Repository.Customers, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetVendors(int customerId)
        {
            return Json(VendorRepository.Repository.GetVendorsByCustomer(customerId), JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetProducts(int vendorId)
        {
            return Json(ProductRepository.Repository.GetProductsByVendor(vendorId), JsonRequestBehavior.AllowGet);
        }
    }
}