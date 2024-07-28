using Telerik.Examples.Mvc.Areas.DropDownListWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Type = Telerik.Examples.Mvc.Areas.DropDownListWebApi.Models.Type;

namespace Telerik.Examples.Mvc.Areas.DropDownListWebApi.Controllers
{
    public class TypeController : ApiController
    {
        // GET api/Type
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