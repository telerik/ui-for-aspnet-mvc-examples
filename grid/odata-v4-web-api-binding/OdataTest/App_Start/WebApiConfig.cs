using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using OdataTest.Models;
using System.Web.OData.Builder;
using System.Web.OData.Extensions;
namespace OdataTest
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            ODataModelBuilder builder = new ODataConventionModelBuilder();
            builder.EntitySet<Product>("Products");
            builder.EntitySet<Employee>("Employees");
            config.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());

            //ODataModelBuilder builderEmployees = new ODataConventionModelBuilder();
            //builderEmployees.EntitySet<Employee>("Employees");
            //config.MapODataServiceRoute("odata", "odata", builderEmployees.GetEdmModel());      
            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
