using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.OData.Formatter;
using System.Web.Routing;
using Microsoft.Data.OData;
namespace OdataTest
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
            List<ODataPayloadKind> data = new List<ODataPayloadKind>()
            {
                ODataPayloadKind.Value,
                ODataPayloadKind.Property,
                ODataPayloadKind.Collection,
                ODataPayloadKind.Parameter,
                ODataPayloadKind.Entry,
                ODataPayloadKind.Batch
            };
            GlobalConfiguration.Configuration.Formatters.Insert(0, new ODataMediaTypeFormatter(data));            
        }
    }
}
