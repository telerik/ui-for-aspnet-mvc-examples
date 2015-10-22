using KendoDropDownList_WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Type = KendoDropDownList_WebApi.Models.Type;

namespace KendoDropDownList_WebApi.Controllers
{
    public class TypeController : ApiController
    {
        // GET api/Specialty
        public IEnumerable<Type> Get()
        {
            List<Type> types = new List<Type>();

            types.Add(new Type { Name = "Type1", Id = 1 });
            types.Add(new Type { Name = "Type2", Id = 2 });
            types.Add(new Type { Name = "Type3", Id = 3 });


            return types.AsEnumerable();
        }
    }
}