using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CascadingDropDownFilters.Startup))]
namespace CascadingDropDownFilters
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {

        }
    }
}
