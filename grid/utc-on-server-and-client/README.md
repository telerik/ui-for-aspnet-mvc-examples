# Using UTC time on both client and the server

This project shows how to keep a DateTime property in UTC format on both server and the client when using a Grid with Ajax Binding. It avoids the problem with the offset that is being added automatically.

Every time a date is being retrieved from the database or received from the client, the [DateTime Kind](https://msdn.microsoft.com/en-us/library/system.datetime.kind(v=vs.110).aspx) property is left unspecified. The .NET framework implicitly converts such dates to local format.

Similar thing happens on the client side. Browsers convert all dates according to local time when the Date is initialized from milliseconds value.

For example, when you create a JavaScript date like this `new Date(1353397262112)` browsers in different time zones will show different dates.

So in order to keep time in UTC, explicit transformation should be applied to the dates on both client and server sides.
