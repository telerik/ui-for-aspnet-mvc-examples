using Kendo.Mvc;
using Kendo.Mvc.Infrastructure;
using Microsoft.AspNet.OData.Extensions;
using Microsoft.AspNet.OData.Formatter;
using Microsoft.OData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Telerik.Examples.Mvc.App_Start;

namespace Telerik.Examples.Mvc
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(config =>
            {
                ODataConfig.Register(config); 
                WebApiConfig.Register(config);

            });
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            List<ODataPayloadKind> data = new List<ODataPayloadKind>()
            {
                ODataPayloadKind.Value,
                ODataPayloadKind.Property,
                ODataPayloadKind.Collection,
                ODataPayloadKind.Parameter,
                //ODataPayloadKind.Entry,
                ODataPayloadKind.Batch
            };
            GlobalConfiguration.Configuration.Formatters.Insert(0, new ODataMediaTypeFormatter(data));
        }
    }
}
