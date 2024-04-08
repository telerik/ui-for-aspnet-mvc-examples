<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<object>" %>

<%= Html.Kendo().TextBoxFor(model => model).HtmlAttributes(new { title = Html.ViewContext.ViewData.TemplateInfo.GetFullHtmlFieldName("")})%>