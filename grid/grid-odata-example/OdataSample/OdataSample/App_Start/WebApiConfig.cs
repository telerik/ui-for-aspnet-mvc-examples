using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Batch;
using System.Web.OData.Batch;
using System.Web.OData.Builder;
using System.Web.OData.Extensions;

namespace OdataSample.App_Start
{
    public class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
            config.Count().Filter().OrderBy().Expand().Select().MaxTop(null);
            var products = builder.EntitySet<Product>("Products");
            
            config.MapODataServiceRoute("odata", "odata", builder.GetEdmModel(), new DefaultODataBatchHandler(GlobalConfiguration.DefaultServer));
            
        }
    }
}