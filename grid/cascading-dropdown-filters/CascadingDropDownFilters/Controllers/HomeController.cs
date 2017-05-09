using CascadingDropDownFilters.Models;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CascadingDropDownFilters.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        
        public ActionResult Customers_Read([DataSourceRequest]DataSourceRequest request)
        {
            using (var northwind = new SampleEntities())
            {
                IQueryable<Customer> customers = northwind.Customers;
                DataSourceResult result = customers.ToDataSourceResult(request);

                return Json(result);
            }
        }

        public JsonResult GetTitles(string selectedCity, string selectedCountry, string selectedTitle)
        {
            var northwind = new SampleEntities();


            IQueryable<CustomerViewModel> titles = northwind.Customers.Select(c => new CustomerViewModel
            {
                City = c.City,
                Country = c.Country,
                ContactTitle = c.ContactTitle
            });

            if (!string.IsNullOrEmpty(selectedCity))
            {
                titles = titles.Where(c => c.City.Equals(selectedCity));
            }

            if (!string.IsNullOrEmpty(selectedCountry))
            {
                titles = titles.Where(c => c.Country.Equals(selectedCountry));
            }

            if (!string.IsNullOrEmpty(selectedTitle))
            {
                titles = titles.Where(c => c.ContactTitle.Equals(selectedTitle));
            }

            return Json(titles.ToList().DistinctBy(d => d.ContactTitle).OrderBy(d=>d.ContactTitle), JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetCities(string selectedCity, string selectedCountry, string selectedTitle)
        {
            var northwind = new SampleEntities();

            IQueryable<CustomerViewModel> cities = northwind.Customers.Select(c => new CustomerViewModel
            {
                City = c.City,
                Country = c.Country,
                ContactTitle = c.ContactTitle
            }); 

            if (!string.IsNullOrEmpty(selectedCountry))
            {
                cities = cities.Where(c => c.Country.Equals(selectedCountry));
            }

            if (!string.IsNullOrEmpty(selectedCity))
            {
                cities = cities.Where(c => c.City.Equals(selectedCity));
            }

            if (!string.IsNullOrEmpty(selectedTitle))
            {
                cities = cities.Where(c => c.ContactTitle.Equals(selectedTitle));
            }

            return Json(cities.ToList().DistinctBy(d => d.City).OrderBy(d=>d.City), JsonRequestBehavior.AllowGet);
        }


        public JsonResult GetCountries(string selectedCity, string selectedCountry, string selectedTitle)
        {
            var northwind = new SampleEntities();


            IQueryable<CustomerViewModel> countries= northwind.Customers.Select(c => new CustomerViewModel
            {
                City = c.City,
                Country = c.Country,
                ContactTitle = c.ContactTitle
            });

            if (!string.IsNullOrEmpty(selectedCity))
            {
                countries = countries.Where(c => c.City.Equals(selectedCity));
            }

            if (!string.IsNullOrEmpty(selectedCountry))
            {
                countries = countries.Where(c => c.Country.Equals(selectedCountry));
            }

            if (!string.IsNullOrEmpty(selectedTitle))
            {
                countries = countries.Where(c => c.ContactTitle.Equals(selectedTitle));
            }

            return Json(countries.ToList().DistinctBy(d => d.Country).OrderBy(d=>d.Country), JsonRequestBehavior.AllowGet);
        }
        
    }
}