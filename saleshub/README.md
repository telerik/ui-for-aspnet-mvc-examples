# Kendo UI SalesHub Sample Project

This project demonstrates the usage of the [Kendo UI MVC extensions](http://www.kendoui.com/server-wrappers/mvc.aspx) in an enterprise-like environment.

> This is the source code for the live demo site, located at [http://www.kendouisaleshub.com/](http://www.kendouisaleshub.com/).

> Documentation for the Sales Hub Sample is located in the
> [Kendo UI Tutorials](http://docs.telerik.com/kendo-ui/aspnet-mvc/tutorials/tutorial-saleshub/kendo-saleshub-intro).

## Features:

- Kendo UI MVC Extensions in action
- Custom client-side code to make Kendo UI Widgets declared with the MVC extensions interact with each other
- Server-side filtering support for Kendo UI DataSources
- ASP.NET MVC web services powered by Entity Framework

## Database

The example uses a [`SalesHub.mdf` file](https://github.com/telerik/ui-for-aspnet-mvc-examples/blob/master/saleshub/SalesHub.Client/Web.config#L12), which is [created on the fly](https://github.com/telerik/ui-for-aspnet-mvc-examples/blob/master/saleshub/SalesHub.Data/SalesHubDbInitializer.cs) in [Global.asax](https://github.com/telerik/ui-for-aspnet-mvc-examples/blob/master/saleshub/SalesHub.Client/Global.asax.cs#L29) when the project is started.
