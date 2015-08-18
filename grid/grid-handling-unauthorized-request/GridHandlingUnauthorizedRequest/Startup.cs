using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(GridHandlingUnauthorizedRequest.Startup))]
namespace GridHandlingUnauthorizedRequest
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
