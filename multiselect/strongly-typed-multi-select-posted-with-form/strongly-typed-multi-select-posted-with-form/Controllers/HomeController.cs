using StronglyTypedMultiSelectPostedWithForm.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace StronglyTypedMultiSelectPostedWithForm.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View(new CountryInfo
            {
                Cities = GetCities(),
                SelectedCities = new int[] { 1, 3 }
            });
        }

        [HttpPost]
        public ActionResult Index(int[] SelectedCities)
        {
            ViewBag.PostedCities = SelectedCities;

            return View(new CountryInfo
            {
                Cities = GetCities(),
                SelectedCities = SelectedCities
            });
        }

        public List<City> GetCities()
        {
            return new List<City>()
            {
                new City() { ID = 1, Name= "Sao Paulo" },
                new City() { ID = 2, Name= "Toronto" },
                new City() { ID = 3, Name= "New York" },
                new City() { ID = 4, Name= "Vancouver" }
            };
        }
    }
}