# Odata 4 with WebAPI controller
This project shows how to configure the dataSource to communicate with the WebAPI controller through the Odata 4 protocol. 
Notice Odata v4 is not fully supported. There is limitation when working with Dates, since [WebAPI does not support DateTime type anymore](http://damienbod.wordpress.com/2014/06/16/web-api-and-odata-v4-crud-and-actions-part-3/). 
WebAPI now uses the DateTimeOffset time as a main type when it comes to dates. However DateTimeOffset requires the [Model](http://docs.telerik.com/kendo-ui/api/javascript/data/model) (that the dataSource creates) to keep information for both Date and Offset which is not possible with the current architecture of the DataSource and Model of Kendo.

## UPDATE - Sept 2017

OData v4 has added support for DateTime so the Kendo UI DataSource `odata-v4` type works correctly in terms of dates now.

To have full suport for this data source type, we have these tasks to implement:

- batch editing - we will definitely support it, work put on hold
- server grouping - research phase
- $expand - research phase
