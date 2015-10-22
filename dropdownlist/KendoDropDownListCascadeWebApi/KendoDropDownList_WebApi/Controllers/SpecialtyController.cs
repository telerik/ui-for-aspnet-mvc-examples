using KendoDropDownList_WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace KendoDropDownList_WebApi.Controllers
{
    public class SpecialtyController : ApiController
    {
        // GET api/Specialty
        public IEnumerable<Specialty> Get(int typeId, string filterValue)
        {
            List<Specialty> specialty = new List<Specialty>();

            specialty.Add(new Specialty { Name = "Test" + new Random().Next(1000).ToString(), Value = 1, TypeId = typeId });
            specialty.Add(new Specialty { Name = "Test" + new Random().Next(1000).ToString(), Value = 2, TypeId = typeId });
            specialty.Add(new Specialty { Name = "Test" + new Random().Next(1000).ToString(), Value = 3, TypeId = typeId });
            specialty.Add(new Specialty { Name = "Test" + new Random().Next(1000).ToString(), Value = 4, TypeId = typeId });

            if (!string.IsNullOrWhiteSpace(filterValue))
            {
                specialty = specialty.Where(s => s.Name.StartsWith(filterValue)).ToList();
            }

            return specialty.AsEnumerable();
        }
    }
}