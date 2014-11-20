using Kendo.Mvc.Infrastructure;
using Newtonsoft.Json;

namespace KendoUIMVC5.Serialization
{
    public class CustomJavaScriptSerializer : IJavaScriptSerializer
    {
        public string Serialize(object value)
        {
            return JsonConvert.SerializeObject(value);
        }
    }
}