# Grid for ASP.NET MVC and Document Processing Library Integration

## Overview
The examples hosted in this folder demonstrate a possible way to export Grid to Excel (XLSX) and CSV formats.

## Structure

The Home and Stream views are basically the same, but there are major differences in the controller code.

### Home controller 
This is a barebone example of [RadSpreadProcessing](http://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/overview) 
and [Grid](http://docs.telerik.com/kendo-ui/aspnet-mvc/helpers/grid/overview) integration. It supports CSV and XLSX formats and 
demonstrates how you could create the basic building components of the Workbook. 
There are some performance features enabled like disabling the history and suspending the layout update which 
are described in the [Performance Tips and Tricks](http://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/performance) 
section. 

```
using Telerik.Windows.Documents.Spreadsheet.FormatProviders;
using Telerik.Windows.Documents.Spreadsheet.FormatProviders.OpenXml.Xlsx;
using Telerik.Windows.Documents.Spreadsheet.FormatProviders.TextBased.Csv;
using Telerik.Windows.Documents.Spreadsheet.Model;
```

### Stream controller
Sometimes we need to get the best performance and minimal resource consumption in order to export greater amounts of records. For cases like that,
the [RadSpreadStreamProcessing](http://docs.telerik.com/devtools/document-processing/libraries/radspreadstreamprocessing/overview) may be a better choice.
This simple demo should be a good starting point for integration between [Grid](http://docs.telerik.com/kendo-ui/aspnet-mvc/helpers/grid/overview) 
and the aforementioned library. Supported format are once again, CSV and XLSX.

```
using Telerik.Documents.SpreadsheetStreaming;
```

## Workflow
An external export button triggers a HTTP POST request to the controller. The Export action creates the file using RadSpreadProcessing or 
RadSpreadStreamProcessing and saves the binary in the Session. The Download action then configures the Response object for export and returns the
output file to the browser. The code calls the second action in the success callback of the POST request.

## More Information
These examples are meant to be simple and easy to understand. The CSV format is a basic text-based format, but Excel's XLSX format supports 
a great number of features which could be used to improve the end result. Here are some useful links:  

[RadSpreadProcessing Overview](http://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/overview) 

[RadSpreadProcessing Cell Styles](http://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/features/styling/cell-styles)

[RadSpreadStreamProcessing Overview](http://docs.telerik.com/devtools/document-processing/libraries/radspreadstreamprocessing/overview)

[RadSpreadStreamProcessing Cell Styles](http://docs.telerik.com/devtools/document-processing/libraries/radspreadstreamprocessing/features/cell-styles)