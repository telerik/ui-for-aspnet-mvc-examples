# Using Kendo Window for MVC with AJAX Forms

This example is not the most optimal one but it illustrates how you can use Kendo Window and load partial views that utilize [Ajax.BeginForm](https://msdn.microsoft.com/en-us/library/system.web.mvc.ajax.ajaxextensions.beginform(v=vs.118).aspx) helper. 

## Prerequisites

Make sure that the needed jQuery libraries for unobtrusive validation are installed and added as references to the page/application. This guide here shows best how to get to a working AJAX form: [Post Data To Controller Without Page Refresh In ASP.NET MVC](http://www.c-sharpcorner.com/UploadFile/0c1bb2/post-data-without-whole-postback/)

Learn the [API of Kendo Window](http://docs.telerik.com/kendo-ui/api/javascript/ui/window) and use the needed methods to open, close and refresh it based on data fetched from the AJAX form.

