﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StronglyTypedMultiSelectPostedWithForm.Models
{
    public class CountryInfo
    {
        public int[] SelectedCities { get; set; }
        public List<City> Cities { get; set; }
    }
}