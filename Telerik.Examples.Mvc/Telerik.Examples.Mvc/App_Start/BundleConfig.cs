using System.Web;
using System.Web.Optimization;

namespace Telerik.Examples.Mvc
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new Bundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.min.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/Site.css"));

            bundles.Add(new StyleBundle("~/Content/bootstrap").Include(
       "~/Content/bootstrap.css"));

            // The Kendo JavaScript bundle
            bundles.Add(new Bundle("~/bundles/kendo").Include(
                    "~/Areas/Bundles/Scripts/kendo.all.min.js",
                    "~/Areas/Bundles/Scripts/kendo.aspnetmvc.min.js"));

            // The Kendo CSS bundle
            bundles.Add(new StyleBundle("~/Content/kendo").Include(
                    "~/Areas/Bundles/Styles/default-ocean-blue.css",
                    "~/Areas/Bundles/Styles/index.css"));

            // Clear all items from the default ignore list to allow minified CSS and JavaScript files to be included in debug mode
            bundles.IgnoreList.Clear();

            // Add back some of the default ignore list rules
            bundles.IgnoreList.Ignore("*.intellisense.js");
            bundles.IgnoreList.Ignore("*-vsdoc.js");
            bundles.IgnoreList.Ignore("*.debug.js", OptimizationMode.WhenEnabled);
        }
    }
}
