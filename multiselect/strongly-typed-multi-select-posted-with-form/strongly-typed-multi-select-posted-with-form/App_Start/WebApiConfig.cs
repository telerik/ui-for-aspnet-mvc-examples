using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace strongly_typed_multi_select_posted_with_form
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
