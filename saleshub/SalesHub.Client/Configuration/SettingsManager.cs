using System.Configuration;

namespace SalesHub.Client.Configuration
{
    public static class SettingsManager
    {
        public static string BaseServiceUrl
        {
            get { return ConfigurationManager.AppSettings["BaseServiceUrl"]; }
        }
    }
}