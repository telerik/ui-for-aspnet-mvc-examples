using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Kendo.Mvc.UI;

namespace GridHandlingUnauthorizedRequest.Attributes
{
    public class DataSourceRedirectAuthorizeAttribute : AuthorizeAttribute
    {
        protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
        {            
            if (filterContext.HttpContext.Request.IsAjaxRequest())
            {
                UrlHelper urlHelper = new UrlHelper(filterContext.RequestContext);
                filterContext.Result = new JsonResult
                {
                    Data = new DataSourceResult { Errors = new { RedirectUrl = urlHelper.Action("Login", "Account") } }
                };
            }
            else
            {
                base.HandleUnauthorizedRequest(filterContext);
            }
        }
    }
}