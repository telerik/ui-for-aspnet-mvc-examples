using Kendo.Mvc.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.GridAjaxBindingCustomJsonResult.Serialization
{
    public class CustomJsonInitializer : JavaScriptInitializer
    {
        public override IJavaScriptSerializer CreateSerializer()
        {
            return new CustomJavaScriptSerializer();
        }
    }
}