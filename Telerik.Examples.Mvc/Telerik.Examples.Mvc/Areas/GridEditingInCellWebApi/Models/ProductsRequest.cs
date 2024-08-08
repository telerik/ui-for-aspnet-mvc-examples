using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.GridEditingInCellWebApi.Models
{
    public class ProductsRequest
    {
        //This property should be named Models in order to correctly map the request paramter send by the DataSource
        public IEnumerable<ProductViewModel> Models { get; set; }
    }
}