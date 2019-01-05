# Get MultiSelect data in POST to Controller

The MultiSelect is a `<select multiple>` element and behaves like one in a POST query - the browser will add a form data field with the name of the widget for each selected item, and the value of the form field will be the value of the item. This means that your model needs to expect a List of values for the given field.

The example also shows how you can get the selected values with JavaScript so you can use them to craft your own query in case you have more specific requirements.

You can read more about this in the [Submit MultiSelect Data to Controller POST](https://docs.telerik.com/aspnet-core/knowledge-base/multiselect-post-data-values) Knowledge Base article.
