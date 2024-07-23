using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(Telerik.Examples.Mvc.Areas.GridSignalR.Startup))]
namespace Telerik.Examples.Mvc.Areas.GridSignalR
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}