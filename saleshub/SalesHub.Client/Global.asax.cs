using System;
using System.Configuration;
using System.Data.Entity;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Caching;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using SalesHub.Client.App_Start;
using SalesHub.Data;

namespace SalesHub.Client
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801

    public class MvcApplication : HttpApplication
    {
        private static bool _isInMaintenanceMode;

        private const string CACHE_KEY = "SalesHubDbRecreateKey";
        private const string CACHE_VALUE = "Recreate";

        protected void Application_Start()
        {
            Database.SetInitializer<SalesHubDbContext>(new SalesHubDbInitializer());

            AreaRegistration.RegisterAllAreas();

            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            ScheduleDatabaseRecreate();
        }

        private void ScheduleDatabaseRecreate()
        {
            DateTime timeToRun = DateTime.Now.AddHours(Double.Parse(ConfigurationManager.AppSettings["DatabaseRefreshTimeoutInHours"]));

            HttpRuntime.Cache.Insert(CACHE_KEY, CACHE_VALUE, null, timeToRun, Cache.NoSlidingExpiration, CacheItemPriority.NotRemovable, (key, value, reason) => RecreateDatabase());
        }

        private void RecreateDatabase()
        {
            _isInMaintenanceMode = true;

            try
            {
                var dbContext = new SalesHubDbContext();
                dbContext.TruncateData();
                var initializer = new SalesHubDbInitializer();
                initializer.Reseed(dbContext);
            }
            catch
            {
            }

            ScheduleDatabaseRecreate();
            _isInMaintenanceMode = false;
        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            if (_isInMaintenanceMode && Request.Url.AbsolutePath != "/Maintenance")
            {
                Response.Redirect("~/Maintenance", true);
            }
        }
    }
}