using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq.Expressions;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Html;
using System.Web.Routing;

namespace SalesHub.Client.Extensions
{
    public static class HtmlExtensions
    {
        public static MvcHtmlString RadioButtonForEnum<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper,
                                                                          Expression<Func<TModel, TProperty>> expression)
        {
            return RadioButtonForEnum<TModel, TProperty>(htmlHelper, expression, null);
        }

        public static MvcHtmlString RadioButtonForEnum<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper,
                                                                          Expression<Func<TModel, TProperty>> expression, object htmlAttributes)
        {
            ModelMetadata metaData = ModelMetadata.FromLambdaExpression(expression, htmlHelper.ViewData);
            string[] names = Enum.GetNames(metaData.ModelType);
            var sb = new StringBuilder();

            foreach (string name in names)
            {
                string id = String.Format("{0}_{1}_{2}", htmlHelper.ViewData.TemplateInfo.HtmlFieldPrefix,
                                       metaData.PropertyName, name);

                if (htmlAttributes == null)
                {
                    htmlAttributes = new object();
                }
                var routeValueDictionary = new RouteValueDictionary(htmlAttributes);
                routeValueDictionary["id"] = id;

                string radioButton = htmlHelper.RadioButtonFor(expression, name, routeValueDictionary).ToHtmlString();
                sb.AppendFormat("<label for=\"{0}\">{1}</label> {2}", id, HttpUtility.HtmlEncode(name), radioButton);
            }

            return MvcHtmlString.Create(sb.ToString());
        }

        public static MvcHtmlString PartialFor<TModel, TProperty>(this HtmlHelper<TModel> helper, string partialViewName, Expression<Func<TModel, TProperty>> expression)
        {
            string name = ExpressionHelper.GetExpressionText(expression);
            object model = ModelMetadata.FromLambdaExpression(expression, helper.ViewData).Model;
            var viewData = new ViewDataDictionary(helper.ViewData)
            {
                TemplateInfo = new System.Web.Mvc.TemplateInfo
                {
                    HtmlFieldPrefix = name
                }
            };

            return helper.Partial(partialViewName, model, viewData);
        }
    }
}