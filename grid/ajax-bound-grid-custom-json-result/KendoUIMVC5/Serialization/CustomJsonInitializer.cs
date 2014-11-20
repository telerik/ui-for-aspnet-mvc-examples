using Kendo.Mvc.Infrastructure;
namespace KendoUIMVC5.Serialization
{
    public class CustomJsonInitializer : JavaScriptInitializer
    {
        public override IJavaScriptSerializer CreateSerializer()
        {
            return new CustomJavaScriptSerializer();
        }
    }
}