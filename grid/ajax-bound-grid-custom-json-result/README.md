#Using custom JsonResult with Ajax bound Grid

This project demonstrates how to use a custom JSON serializer for the controller and for the widgets server bound data. For the controller this is achieved by overriding the Json method and for the widgets through registration (with the DI) of custom IJavaScriptInitializer implementation on application start event.
