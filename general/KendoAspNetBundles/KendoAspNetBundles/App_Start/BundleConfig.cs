using System.Web;
using System.Web.Optimization;

namespace KendoAspNetBundles
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/kendo.web.*"));

            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/site.css"));

            // The Kendo JavaScript bundle
            bundles.Add(new ScriptBundle("~/bundles/kendo").Include(
                    "~/Scripts/kendo.web.*", // or kendo.all.* if you want to use Kendo UI Web and Kendo UI DataViz
                    "~/Scripts/kendo.aspnetmvc.*"));


            // The Kendo CSS bundle
            bundles.Add(new StyleBundle("~/Content/kendo").Include(
                    "~/Content/kendo.common.*",
                    "~/Content/kendo.default.*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            // Clear all items from the default ignore list to allow minified CSS and JavaScript files to be included in debug mode
            bundles.IgnoreList.Clear();

            // Add back some of the default ignore list rules
            bundles.IgnoreList.Ignore("*.intellisense.js");
            bundles.IgnoreList.Ignore("*-vsdoc.js");
            bundles.IgnoreList.Ignore("*.debug.js", OptimizationMode.WhenEnabled);
        }

    }
}