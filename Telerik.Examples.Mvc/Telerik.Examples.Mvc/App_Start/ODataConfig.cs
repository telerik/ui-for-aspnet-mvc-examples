using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Routing;
using Telerik.Examples.Mvc.Areas.ODataWebApiWrappers.Models;
using Microsoft.AspNet.OData;
using Microsoft.AspNet.OData.Extensions;
using Microsoft.AspNet.OData.Builder;
using System.Security.Policy;

namespace Telerik.Examples.Mvc.App_Start
{
    public class ODataConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
            builder.EntitySet<ODataWebApiWrappersProduct>("ODataWebApiWrappersProducts");
            builder.EntitySet<ODataWebApiWrappersEmployee>("ODataWebApiWrappersEmployees/GetEmployees");
            config.MapODataServiceRoute(routeName: "odata", routePrefix: "odata", model: builder.GetEdmModel());

            config.EnableDependencyInjection();

            config.Routes.MapHttpRoute(
                  name: "OdataApi",
                 //routeTemplate: "odata/{controller}/{id}",
                 routeTemplate: "odata/{controller}/{action}/{id}",
                  defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}

