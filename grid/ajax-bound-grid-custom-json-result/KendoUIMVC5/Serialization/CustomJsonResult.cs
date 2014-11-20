using System;
using System.Web.Mvc;
using Newtonsoft.Json;

namespace KendoUIMVC5.Serialization
{
    public class CustomJsonResult : JsonResult
    {
        const string JsonRequest_GetNotAllowed = "This request has been blocked because sensitive information could be disclosed to third party web sites when this is used in a GET request. To allow GET requests, set JsonRequestBehavior to AllowGet.";

        public JsonSerializerSettings Settings { get; private set; }        

        public override void ExecuteResult(ControllerContext context)
        {
            if (context == null)
            {
                throw new ArgumentNullException("context");
            }

            if ((JsonRequestBehavior == JsonRequestBehavior.DenyGet) && string.Equals(context.HttpContext.Request.HttpMethod, "GET", StringComparison.OrdinalIgnoreCase))
            {
                throw new InvalidOperationException(JsonRequest_GetNotAllowed);
            }

            var response = context.HttpContext.Response;
            if (!string.IsNullOrEmpty(ContentType))
            {
                response.ContentType = ContentType;
            }
            else
            {
                response.ContentType = "application/json";
            }

            if (ContentEncoding != null)
            {
                response.ContentEncoding = ContentEncoding;
            }

            if (Data != null)
            {
                response.Write(JsonConvert.SerializeObject(this.Data));
            }
        }
    }
}