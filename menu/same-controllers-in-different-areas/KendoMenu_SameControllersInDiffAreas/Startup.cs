using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(KendoMenu_SameControllersInDiffAreas.Startup))]
namespace KendoMenu_SameControllersInDiffAreas
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
