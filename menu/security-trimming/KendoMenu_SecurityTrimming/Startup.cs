using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(KendoMenu_SecurityTrimming.Startup))]
namespace KendoMenu_SecurityTrimming
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
