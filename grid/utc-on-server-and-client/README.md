# Using UTC time on both client and server sides.

This project shows how to keep a DateTime property in UTC format on both server and client sides when using a Grid with Ajax Binding and editing, and avoid the offset that is being added automatically.

Every time a date is being retrieved from the database or received from the client, the `DateTime Kind` property is left unspecified. The .NET framework implicitly converts such dates to local format.

Similar thing happens on the client side. Browsers convert all dates according to local time when the Date.

For example when you create a JavaScript date like this `new Date(1353397262112)` different browsers which machines use different TimeZones will show different string representations of that Date.

So in order to keep time in UTC, explicit transformation should be applied to the dates on both client and server sides.
