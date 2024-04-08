<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<object>" %>

<span class="k-input k-textbox k-input-solid k-input-md k-rounded-md">
    <%= Html.TextBoxFor(model => model, new {@class="k-input-inner", type="password" })%>
</span>