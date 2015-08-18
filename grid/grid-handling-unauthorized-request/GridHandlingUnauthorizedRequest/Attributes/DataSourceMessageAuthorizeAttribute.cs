using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Kendo.Mvc.UI;

namespace GridHandlingUnauthorizedRequest.Attributes
{
    public class DataSourceMessageAuthorizeAttribute: AuthorizeAttribute
    {
        protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
        {
            if (filterContext.HttpContext.Request.IsAjaxRequest())
            {
                filterContext.Result = new JsonResult
                {
                    Data = new DataSourceResult { Errors = new { AuthenticationError = new { errors = new[] { "Authentication Error Message" } } } }
                };
            }
            else
            {
                base.HandleUnauthorizedRequest(filterContext);
            }
        }
    }
}