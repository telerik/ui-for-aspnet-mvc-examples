# How to Select Panel Bar Item on Load

This project shows two ways you can pre-select a panelbar item when the page (view) loads and when remote data loads.

## Remote Data (Load on Demand)

With remote binding, the panelbar items are traversed and when a text match is found to the data the controller sent (e.g., the current page name), the item is selected. 

In this case the item can only be selected after the user has expanded the item that holds the item we want selected - before that it simply is not loaded on the client yet.

This can be suitable for cases where the list of items is very large and you don't want it to load/render initially.

## Local Data

You can bind to local data provided by the controller as the view loads. This lets you set a property in the model for the item you want selected, and use it to indicate it as selected on the client, and then expand all its parents so it is visible.

This approach renders HTML elements for the panelbar items from the server which may be better for SEO or screen readers, but if there are many items it may slow down or bloat the page.