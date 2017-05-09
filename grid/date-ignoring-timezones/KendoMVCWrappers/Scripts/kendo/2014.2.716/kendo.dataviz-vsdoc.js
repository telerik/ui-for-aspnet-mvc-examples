var kendo = {
    ui: {},
    mobile: {ui: {}},
    dataviz: {ui: {}},
    data: {}
};


if (!kendo) {
    kendo = {};
}

kendo.Class = function() { };

kendo.Class.prototype = {



    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoClass = function() {
    /// <summary>
    /// Returns a reference to the kendo.Class widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.Class">The kendo.Class instance (if present).</returns>
};

$.fn.kendoClass = function(options) {
    /// <summary>
    /// Instantiates a kendo.Class widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.Color = function() { };

kendo.Color.prototype = {




    diff: function() {
        /// <summary>
        /// Computes the relative luminance between two colors.
        /// </summary>
        /// <returns type="Number">The relative luminance.</returns>

    },


    equals: function() {
        /// <summary>
        /// Compares two color objects for equality.
        /// </summary>
        /// <returns type="Boolean">returns true if the two colors are the same. Otherwise, false</returns>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoColor = function() {
    /// <summary>
    /// Returns a reference to the kendo.Color widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.Color">The kendo.Color instance (if present).</returns>
};

$.fn.kendoColor = function(options) {
    /// <summary>
    /// Instantiates a kendo.Color widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.Layout = function() { };

kendo.Layout.prototype = {




    showIn: function(container,view,transitionClass) {
        /// <summary>
        /// Renders the View element in the element specified by the selector
        /// </summary>
        /// <param name="container" type="String" >The selector of the container in which the view element will be appended.</param>
        /// <param name="view" type="kendo.View" >The view instance that will be rendered.</param>
        /// <param name="transitionClass" type="string" >Optional. If provided, the new view will replace the current one with a replace effect.</param>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoLayout = function() {
    /// <summary>
    /// Returns a reference to the kendo.Layout widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.Layout">The kendo.Layout instance (if present).</returns>
};

$.fn.kendoLayout = function(options) {
    /// <summary>
    /// Instantiates a kendo.Layout widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.Observable = function() { };

kendo.Observable.prototype = {




    bind: function(eventName,handler) {
        /// <summary>
        /// Attaches a handler to an event.
        /// </summary>
        /// <param name="eventName" type="String" >The name of the event.</param>
        /// <param name="handler" type="Function" >A function to execute each time the event is triggered. That function should have a single parameter which will contain any event specific data.</param>

    },


    one: function(eventName,handler) {
        /// <summary>
        /// Attaches a handler to an event. The handler is executed only once.
        /// </summary>
        /// <param name="eventName" type="String" >The name of the event.</param>
        /// <param name="handler" type="Function" >A function to execute each time the event is triggered. That function should have a single parameter which will contain any event specific data.</param>

    },


    trigger: function(eventName,eventData) {
        /// <summary>
        /// Executes all handlers attached to the given event.
        /// </summary>
        /// <param name="eventName" type="String" >The name of the event to trigger.</param>
        /// <param name="eventData" type="Object" >Optional event data which will be passed as an argument to the event handlers.</param>

    },


    unbind: function(eventName,handler) {
        /// <summary>
        /// Remove a previously attached event handler.
        /// </summary>
        /// <param name="eventName" type="String" >The name of the event. If not specified all handlers of all events will be removed.</param>
        /// <param name="handler" type="Function" >The handler which should no longer be executed. If not specified all handlers listening to that event will be removed.</param>

    },


    self: null

};

$.fn.getKendoObservable = function() {
    /// <summary>
    /// Returns a reference to the kendo.Observable widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.Observable">The kendo.Observable instance (if present).</returns>
};

$.fn.kendoObservable = function(options) {
    /// <summary>
    /// Instantiates a kendo.Observable widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.Router = function() { };

kendo.Router.prototype = {




    start: function(options) {
        /// <summary>
        /// Activates the router binding to the URL fragment part changes.
        /// </summary>
        /// <param name="options" type="" >The router configuration options. The following options are supported:</param>

    },


    route: function(route,callback) {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="route" type="String" >The route definition.</param>
        /// <param name="callback" type="Function" >The callback to be executed when the route is matched.</param>

    },


    navigate: function(route,silent) {
        /// <summary>
        /// Navigates to the given route.
        /// </summary>
        /// <param name="route" type="String" >The route to navigate to.</param>
        /// <param name="silent" type="Boolean" >If set to true, the router callbacks will not be called.</param>

    },


    replace: function(route,silent) {
        /// <summary>
        /// Navigates to the given route, replacing the current view in the history stack (like history.replaceState or location.replace work).
        /// </summary>
        /// <param name="route" type="String" >The route to navigate to.</param>
        /// <param name="silent" type="Boolean" >If set to true, the router callbacks will not be called.</param>

    },


    destroy: function() {
        /// <summary>
        /// Unbinds the router instance listeners from the URL fragment part changes.
        /// </summary>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoRouter = function() {
    /// <summary>
    /// Returns a reference to the kendo.Router widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.Router">The kendo.Router instance (if present).</returns>
};

$.fn.kendoRouter = function(options) {
    /// <summary>
    /// Instantiates a kendo.Router widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.View = function() { };

kendo.View.prototype = {




    destroy: function() {
        /// <summary>
        /// Removes the View element from the DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    render: function(container) {
        /// <summary>
        /// Renders the view contents. Accepts a jQuery selector (or jQuery object) to which the contents will be appended.
/// Alternatively, the render method can be called without parameters in order to retrieve the View element for manual insertion/further manipulation.
        /// </summary>
        /// <param name="container" type="jQuery" >(optional) the element in which the view element will be appended.</param>
        /// <returns type="jQuery">the view element.</returns>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoView = function() {
    /// <summary>
    /// Returns a reference to the kendo.View widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.View">The kendo.View instance (if present).</returns>
};

$.fn.kendoView = function(options) {
    /// <summary>
    /// Instantiates a kendo.View widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;evalTemplate — Boolean (default: false)
    /// &#10;If set to true, the view template will be treated as kendo template and evaluated against the provided model instance.
    /// &#10;
    /// &#10;tagName — String (default: "div")
    /// &#10;The tag used for the root element of the view.
    /// &#10;
    /// &#10;wrap — Boolean (default: true)
    /// &#10;If set to false, the view will not wrap its contents in a root element. In that case, the view element will point to the root element in the template. If false, the view template should have a single root element.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.data.Binder = function() { };

kendo.data.Binder.prototype = {




    refresh: function() {
        /// <summary>
        /// Invoked by the Kendo UI MVVM framework when the bound view model value is changed. The binder should update the UI (HTML element or Kendo UI widget) to reflect the view model change.
        /// </summary>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoBinder = function() {
    /// <summary>
    /// Returns a reference to the kendo.data.Binder widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.data.Binder">The kendo.data.Binder instance (if present).</returns>
};

$.fn.kendoBinder = function(options) {
    /// <summary>
    /// Instantiates a kendo.data.Binder widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.data.DataSource = function() { };

kendo.data.DataSource.prototype = {




    add: function(model) {
        /// <summary>
        /// Appends a data item to the data source.
        /// </summary>
        /// <param name="model" type="Object" >Either a kendo.data.Model instance or JavaScript object containing the data item field values.</param>
        /// <returns type="kendo.data.Model">the data item which is inserted.</returns>

    },


    aggregate: function(value) {
        /// <summary>
        /// Gets or sets the aggregate configuration.
        /// </summary>
        /// <param name="value" type="Object" >The aggregate configuration. Accepts the same values as the aggregate option.</param>
        /// <returns type="Array">the current aggregate configuration.</returns>

    },


    aggregates: function() {
        /// <summary>
        /// Returns the aggregate results.
        /// </summary>
        /// <returns type="Object">the aggregate results. There is a key for every aggregated field.</returns>

    },


    at: function(index) {
        /// <summary>
        /// Returns the data item at the specified index. The index is zero-based.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index of the data item.</param>
        /// <returns type="kendo.data.ObservableObject">the data item at the specified index. Returns undefined if a data item is not found at the specified index.Returns a kendo.data.Model instance if the schema.model option is set.</returns>

    },


    cancelChanges: function(model) {
        /// <summary>
        /// Cancels any pending changes in the data source. Deleted data items are restored, new data items are removed and updated data items are restored to their initial state.
        /// </summary>
        /// <param name="model" type="kendo.data.Model" >The optional data item (model). If specified only the changes of this data item will be discarded. If omitted all changes will be discarded.</param>

    },


    data: function(value) {
        /// <summary>
        /// Gets or sets the data items of the data source.If the data source is bound to a remote service (via the transport option) the data method will return the service response.
/// Every item from the response is wrapped in a kendo.data.ObservableObject or kendo.data.Model (if the schema.model option is set).If the data source is bound to a JavaScript array (via the data option) the data method will return the items of that array.
/// Every item from the array is wrapped in a kendo.data.ObservableObject or kendo.data.Model (if the schema.model option is set).If the data source is grouped (via the group option or the group method) and the serverGrouping is set to true
/// the data method will return the group items.
        /// </summary>
        /// <param name="value" type="Object" >The data items which will replace the current ones in the data source. If omitted the current data items will be returned.</param>
        /// <returns type="kendo.data.ObservableArray">the data items of the data source. Returns empty array if the data source hasn't been populated with data items via the read, fetch or query methods.</returns>

    },


    fetch: function(callback) {
        /// <summary>
        /// Reads the data items from a remote service (if the transport option is set) or from a JavaScript array (if the data option is set).
        /// </summary>
        /// <param name="callback" type="Function" >The optional function which is executed when the remote request is finished.  The function context (available via the this keyword) will be set to the data source instance.</param>

    },


    filter: function(value) {
        /// <summary>
        /// Gets or sets the filter configuration.
        /// </summary>
        /// <param name="value" type="Object" >The filter configuration. Accepts the same values as the filter option (check there fo more examples).</param>
        /// <returns type="Object">the current filter configuration.</returns>

    },


    get: function(id) {
        /// <summary>
        /// Gets the data item (model) with the specified id.
        /// </summary>
        /// <param name="id" type="Object" >The id of the model to look for.</param>
        /// <returns type="kendo.data.Model">the model instance. Returns undefined if a model with the specified id is not found.</returns>

    },


    getByUid: function(uid) {
        /// <summary>
        /// Gets the data item (model) with the specified uid.
        /// </summary>
        /// <param name="uid" type="String" >The uid of the model to look for.</param>
        /// <returns type="kendo.data.ObservableObject">the model instance. Returns undefined if a model with the specified uid is not found.</returns>

    },


    group: function(value) {
        /// <summary>
        /// Gets or sets the grouping configuration.
        /// </summary>
        /// <param name="value" type="Object" >The grouping configuration. Accepts the same values as the group option.</param>
        /// <returns type="Array">the current grouping configuration.</returns>

    },


    hasChanges: function() {
        /// <summary>
        /// Cheks if the data itams have changed.
        /// </summary>
        /// <returns type="Boolean">returns true if the data items have changed. Otherwise, false.</returns>

    },


    indexOf: function(dataItem) {
        /// <summary>
        /// Gets the index of the specified data item.
        /// </summary>
        /// <param name="dataItem" type="kendo.data.ObservableObject" >The target data item.</param>
        /// <returns type="Number">the index of the specified data item. Returns -1 if the data item is not found.</returns>

    },


    insert: function(index,model) {
        /// <summary>
        /// Inserts a data item in the data source at the specified index.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index at which the data item will be inserted.</param>
        /// <param name="model" type="Object" >Either a kendo.data.Model instance or JavaScript object containing the field values.</param>
        /// <returns type="kendo.data.Model">the data item which is inserted.</returns>

    },


    page: function(page) {
        /// <summary>
        /// Gets or sets the current page.
        /// </summary>
        /// <param name="page" type="Number" >The new page.</param>
        /// <returns type="Number">the current page.</returns>

    },


    pageSize: function(size) {
        /// <summary>
        /// Gets or sets the current page size.
        /// </summary>
        /// <param name="size" type="Number" >The new page size.</param>
        /// <returns type="Number">the current page size.</returns>

    },


    pushCreate: function(items) {
        /// <summary>
        /// Appends the specified data item(s) to the data source without marking them as "new". The data source will not sync data items appended via pushCreate.
        /// </summary>
        /// <param name="items" type="Object" >The data item or data items to append to the data source.</param>

    },


    pushDestroy: function(items) {
        /// <summary>
        /// Removes the specified data item(s) from the data source without marking them as "removed". The data source will not sync data items appended via pushDestroy.
        /// </summary>
        /// <param name="items" type="Object" >The data item or data items to remove from the data source.</param>

    },


    pushUpdate: function(items) {
        /// <summary>
        /// Updates the specified data item(s) without marking them as "dirty". The data source will not sync data items appended via pushUpdate.
/// If the data items are not found (using schema.model.id) they will be appended.
        /// </summary>
        /// <param name="items" type="Object" >The data item or data items to update.</param>

    },


    query: function(options) {
        /// <summary>
        /// Executes the specified query over the data items. Makes a HTTP request if bound to a remote service.
        /// </summary>
        /// <param name="options" type="" >The query options which should be applied.</param>

    },


    read: function(data) {
        /// <summary>
        /// Reads data items from a remote service (if the transport option is set) or from a JavaScript array (if the data option is set).
        /// </summary>
        /// <param name="data" type="Object" >Optional data to pass to the remote service.</param>

    },


    remove: function(model) {
        /// <summary>
        /// Removes the specified data item from the data source.
        /// </summary>
        /// <param name="model" type="kendo.data.Model" >The data item which should be removed.</param>

    },


    sort: function(value) {
        /// <summary>
        /// Gets or sets the sort order which will be applied over the data items.
        /// </summary>
        /// <param name="value" type="Object" >The sort configuration. Accepts the same values as the sort option.</param>
        /// <returns type="Array">the current sort configuration.</returns>

    },


    sync: function() {
        /// <summary>
        /// Saves any data item changes.The sync method will request the remote service if:
        /// </summary>

    },


    total: function() {
        /// <summary>
        /// Gets the total number of data items. Uses schema.total if the transport.read option is set.
        /// </summary>
        /// <returns type="Number">the total number of data items. Returns the length of the array returned by the data method if schema.total or transport.read are not set.Returns 0 if the data source hasn't been populated with data items via the read, fetch or query methods.</returns>

    },


    totalPages: function() {
        /// <summary>
        /// Gets the number of available pages.
        /// </summary>
        /// <returns type="Number">the available pages.</returns>

    },


    view: function() {
        /// <summary>
        /// Returns the data items which correspond to the current page, filter, sort and group configuration.To ensure that data is available this method should be used within the change event handler or the fetch method.
        /// </summary>
        /// <returns type="kendo.data.ObservableArray">the data items. Returns groups if the data items are grouped (via the group option or the group method).</returns>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoDataSource = function() {
    /// <summary>
    /// Returns a reference to the kendo.data.DataSource widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.data.DataSource">The kendo.data.DataSource instance (if present).</returns>
};

$.fn.kendoDataSource = function(options) {
    /// <summary>
    /// Instantiates a kendo.data.DataSource widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;aggregate — Array 
    /// &#10;The aggregate(s) which are calculated when the data source populates with data. The supported aggregates are "average", "count", "max", "min" and "sum".
    /// &#10;
    /// &#10;autoSync — Boolean (default: false)
    /// &#10;If set to true the data source would automatically save any changed data items by calling the sync method. By default changes are not automatically saved.
    /// &#10;
    /// &#10;batch — Boolean (default: false)
    /// &#10;If set to true the data source will batch CRUD operation requests. For example updating two data items would cause one HTTP request instead of two. By default the data source
/// &#10;makes a HTTP request for every CRUD operation.
    /// &#10;
    /// &#10;data — Array|String 
    /// &#10;The array of data items which the data source contains. The data source will wrap those items as kendo.data.ObservableObject or kendo.data.Model (if schema.model is set).Can be set to a string value if the schema.type option is set to "xml".
    /// &#10;
    /// &#10;filter — Array|Object 
    /// &#10;The filter(s) which is (are) applied over the data items. By default no filter is applied.
    /// &#10;
    /// &#10;group — Array|Object 
    /// &#10;The grouping configuration of the data source. If set the data items will be grouped when the data source is populated. By default grouping is not applied.
    /// &#10;
    /// &#10;page — Number 
    /// &#10;The page of data which the data source will return when the view method is invoked or request from the remote service.
    /// &#10;
    /// &#10;pageSize — Number 
    /// &#10;The number of data items per page.
    /// &#10;
    /// &#10;schema — Object 
    /// &#10;The configuration used to parse the remote service response.
    /// &#10;
    /// &#10;serverAggregates — Boolean (default: false)
    /// &#10;If set to true the data source will leave the aggregate calculation to the remote service. By default the data source calculates aggregates client-side.
    /// &#10;
    /// &#10;serverFiltering — Boolean (default: false)
    /// &#10;If set to true the data source will leave the filtering implementation to the remote service. By default the data source performs filtering client-side.By default the filter is sent to the server following jQuery's conventions.For example the filter { logic: "and", filters: [ { field: "name", operator: "startswith", value: "Jane" } ] } is sent as:Use the parameterMap option to send the filter option in a different format.
    /// &#10;
    /// &#10;serverGrouping — Boolean (default: false)
    /// &#10;If set to true the data source will leave the grouping implementation to the remote service. By default the data source performs grouping client-side.By default the group is sent to the server following jQuery's conventions.For example the group { field: "category", dir: "desc" } is sent as:Use the parameterMap option to send the group option in a different format.
    /// &#10;
    /// &#10;serverPaging — Boolean (default: false)
    /// &#10;If set to true the data source will leave the data item paging implementation to the remote service. By default the data source performs paging client-side.The following options are sent to the server when server paging is enabled:Use the parameterMap option to send the paging options in a different format.
    /// &#10;
    /// &#10;serverSorting — Boolean (default: false)
    /// &#10;If set to true the data source will leave the data item sorting implementation to the remote service. By default the data source performs sorting client-side.By default the sort is sent to the server following jQuery's conventions.For example the sort { field: "age", dir: "desc" } is sent as:Use the parameterMap option to send the paging options in a different format.
    /// &#10;
    /// &#10;sort — Array|Object 
    /// &#10;The sort order which will be applied over the data items. By default the data items are not sorted.
    /// &#10;
    /// &#10;transport — Object 
    /// &#10;The configuration used to load and save the data items. A data source is remote or local based on the way of it retrieves data items.Remote data sources load and save data items from and to a remote end-point (a.k.a. remote service or server). The transport option describes the remote service configuration - URL, HTTP verb, HTTP headers etc.
/// &#10;The transport option can also be used to implement custom data loading and saving.Local data sources are bound to a JavaScript array via the data option.
    /// &#10;
    /// &#10;type — String 
    /// &#10;If set the data source will use a predefined transport and/or schema.
/// &#10;The supported values are "odata" which supports the OData v.2 protocol and "signalr".
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.data.GanttDataSource = function() { };

kendo.data.GanttDataSource.prototype = {




    taskAllChildren: function(task) {
        /// <summary>
        /// Returns a list of all child tasks. The search is recursive.
        /// </summary>
        /// <param name="task" type="kendo.data.GanttTask" >The parent task. If this parameter is not specified, all gantt tasks will be returned.</param>
        /// <returns type="Array">the list of all child tasks.</returns>

    },


    taskChildren: function(task) {
        /// <summary>
        /// Returns a list of all direct child tasks.
        /// </summary>
        /// <param name="task" type="kendo.data.GanttTask" >The parent task. If this parameter is not specified, all root level tasks will be returned.</param>
        /// <returns type="Array">the list of all direct child tasks.</returns>

    },


    taskLevel: function(task) {
        /// <summary>
        /// Returns the level of the task in the hierrarchy. 0 for root level taks.
        /// </summary>
        /// <param name="task" type="kendo.data.GanttTask" >The reference task.</param>
        /// <returns type="Number">the level of the task in the hierarchy.</returns>

    },


    taskParent: function(task) {
        /// <summary>
        /// Returns the parent task of a certain task.
        /// </summary>
        /// <param name="task" type="kendo.data.GanttTask" >The reference task.</param>
        /// <returns type="kendo.data.GanttTask">the parent task.</returns>

    },


    taskSiblings: function(task) {
        /// <summary>
        /// Returns a list of all tasks that have the same parent.
        /// </summary>
        /// <param name="task" type="kendo.data.GanttTask" >The reference task.</param>
        /// <returns type="Array">the list of all tasks with the same parent as the parameter task. If the parameter task is a root level task, all root level tasks are returned.</returns>

    },


    taskTree: function(task) {
        /// <summary>
        /// Returns a list of all child gantt tasks, ordered by their hierarchical index (Depth-First). a parent is collapsed, it's children are not returned.
        /// </summary>
        /// <param name="task" type="kendo.data.GanttTask" >The reference task. If this parameter is specified, the result will be all child tasks of this task, ordered by their hierarchical index.</param>
        /// <returns type="Array">the list of all child gantt tasks, ordered by their hierarchical index (Depth-First).</returns>

    },


    update: function(task,taskInfo) {
        /// <summary>
        /// Updates a gantt task.
        /// </summary>
        /// <param name="task" type="kendo.data.GanttTask" >The task to be updated.</param>
        /// <param name="taskInfo" type="Object" >The new values, which will be used to update the task.</param>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoGanttDataSource = function() {
    /// <summary>
    /// Returns a reference to the kendo.data.GanttDataSource widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.data.GanttDataSource">The kendo.data.GanttDataSource instance (if present).</returns>
};

$.fn.kendoGanttDataSource = function(options) {
    /// <summary>
    /// Instantiates a kendo.data.GanttDataSource widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;schema — Object 
    /// &#10;The schema configuration of the GanttDataSource.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.data.GanttDependency = function() { };

kendo.data.GanttDependency.prototype = {



    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoGanttDependency = function() {
    /// <summary>
    /// Returns a reference to the kendo.data.GanttDependency widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.data.GanttDependency">The kendo.data.GanttDependency instance (if present).</returns>
};

$.fn.kendoGanttDependency = function(options) {
    /// <summary>
    /// Instantiates a kendo.data.GanttDependency widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;id — String|Number|Object 
    /// &#10;The mandatory unique identifier of the dependency.
    /// &#10;
    /// &#10;predecessorId — String|Number|Object 
    /// &#10;The  mandatory 'id' of the predecessor task.
    /// &#10;
    /// &#10;successorId — String|Number|Object 
    /// &#10;The  mandatory 'id' of the successor task.
    /// &#10;
    /// &#10;type — String|Number|Object 
    /// &#10;The type of the dependency.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.data.GanttDependencyDataSource = function() { };

kendo.data.GanttDependencyDataSource.prototype = {




    dependencies: function(id) {
        /// <summary>
        /// Returns a list of all dependencies for a certain task.
        /// </summary>
        /// <param name="id" type="Object" >The id of the gantt task, based on which the dependencies are filtered.</param>
        /// <returns type="Array">the list of all task dependencies.</returns>

    },


    predecessors: function(id) {
        /// <summary>
        /// Returns a list of all predecessor dependencies for a certain task.
        /// </summary>
        /// <param name="id" type="Object" >The id of the gantt task, based on which the dependencies are filtered.</param>
        /// <returns type="Array">the list of all task predecessors.</returns>

    },


    successors: function(id) {
        /// <summary>
        /// Returns a list of all successor dependencies for a certain task.
        /// </summary>
        /// <param name="id" type="Object" >The id of the gantt task, based on which the dependencies are filtered.</param>
        /// <returns type="Array">the list of all task successors.</returns>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoGanttDependencyDataSource = function() {
    /// <summary>
    /// Returns a reference to the kendo.data.GanttDependencyDataSource widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.data.GanttDependencyDataSource">The kendo.data.GanttDependencyDataSource instance (if present).</returns>
};

$.fn.kendoGanttDependencyDataSource = function(options) {
    /// <summary>
    /// Instantiates a kendo.data.GanttDependencyDataSource widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;schema — Object 
    /// &#10;The schema configuration of the GanttDependencyDataSource.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.data.GanttTask = function() { };

kendo.data.GanttTask.prototype = {




    duration: function() {
        /// <summary>
        /// Returns the gantt task length in milliseconds.
        /// </summary>
        /// <returns type="Number">the length of the task.</returns>

    },


    isMilestone: function() {
        /// <summary>
        /// Checks whether the event has zero duration.
        /// </summary>
        /// <returns type="Boolean">return true if the task start is equal to the task end.</returns>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoGanttTask = function() {
    /// <summary>
    /// Returns a reference to the kendo.data.GanttTask widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.data.GanttTask">The kendo.data.GanttTask instance (if present).</returns>
};

$.fn.kendoGanttTask = function(options) {
    /// <summary>
    /// Instantiates a kendo.data.GanttTask widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;end — Date 
    /// &#10;The date at which the gantt task ends. The end date is mandatory.
    /// &#10;
    /// &#10;expanded — Boolean (default: true)
    /// &#10;If set to true the task is expanded and it's child tasks are visible.
    /// &#10;
    /// &#10;id — String|Number|Object 
    /// &#10;The mandatory unique identifier of the task.
    /// &#10;
    /// &#10;orderId — String|Number|Object (default: 0)
    /// &#10;The position of the task relative to its sibling tasks.
    /// &#10;
    /// &#10;parentId — String|Number|Object (default: null)
    /// &#10;The 'id' of the parent task. Required for child tasks.
    /// &#10;
    /// &#10;percentComplete — String|Number|Object (default: 0)
    /// &#10;The percentage of completion of the task. A value between 0 and 1, representing how much of a task is completed.
    /// &#10;
    /// &#10;start — Date 
    /// &#10;The date at which the gantt task starts. The start date is mandatory.
    /// &#10;
    /// &#10;summary — Boolean (default: true)
    /// &#10;If set to true the task has child tasks.
    /// &#10;
    /// &#10;title — String (default: "")
    /// &#10;The title of the task which is displayed by the gantt widget.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.data.HierarchicalDataSource = function() { };

kendo.data.HierarchicalDataSource.prototype = {



    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoHierarchicalDataSource = function() {
    /// <summary>
    /// Returns a reference to the kendo.data.HierarchicalDataSource widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.data.HierarchicalDataSource">The kendo.data.HierarchicalDataSource instance (if present).</returns>
};

$.fn.kendoHierarchicalDataSource = function(options) {
    /// <summary>
    /// Instantiates a kendo.data.HierarchicalDataSource widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;schema — Object 
    /// &#10;The schema configuration. See the DataSource.schema configuration for all available options.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.data.Model = function() { };

kendo.data.Model.prototype = {




    bind: function() {
        /// <summary>
        /// Attaches a handler to an event. Examples and more info can be found in the bind section of the kendo.Observable API reference.
        /// </summary>

    },


    editable: function(field) {
        /// <summary>
        /// Determines if the specified field is editable or not.
        /// </summary>
        /// <param name="field" type="String" >The field to check.</param>
        /// <returns type="Boolean">true if the field is editable; false otherwise.</returns>

    },


    get: function() {
        /// <summary>
        /// Gets the value of the specified field. Inherited from kendo.data.ObservableObject. Examples and more info can be found in the get section of the
/// ObservableObject API reference.
        /// </summary>

    },


    isNew: function() {
        /// <summary>
        /// Checks if the Model is new or not. The id field is used to determine if a model instance is new or existing one.
/// If the value of the field specified is equal to the default value (specified through the fields configuration) the model is considered as new.
        /// </summary>
        /// <returns type="Boolean">true if the model is new; false otherwise.</returns>

    },


    set: function() {
        /// <summary>
        /// Sets the value of the specified field. Inherited from kendo.data.ObservableObject. Examples and more info can be found in the set section of the
/// ObservableObject API reference.
        /// </summary>

    },


    toJSON: function() {
        /// <summary>
        /// Creates a plain JavaScript object which contains all fields of the Model. Inherited from kendo.data.ObservableObject. Examples and more info can be found in the toJSON section of the
/// ObservableObject API reference.
        /// </summary>

    },


    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoModel = function() {
    /// <summary>
    /// Returns a reference to the kendo.data.Model widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.data.Model">The kendo.data.Model instance (if present).</returns>
};

$.fn.kendoModel = function(options) {
    /// <summary>
    /// Instantiates a kendo.data.Model widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.data.Node = function() { };

kendo.data.Node.prototype = {




    append: function(model) {
        /// <summary>
        /// Appends a new item to the children data source, and initializes it if necessary.
        /// </summary>
        /// <param name="model" type="Object" >The data for the new item</param>

    },


    level: function() {
        /// <summary>
        /// Gets the current nesting level of the node within the data source.
        /// </summary>
        /// <returns type="Number">the zero based level of the node.</returns>

    },


    load: function() {
        /// <summary>
        /// Loads the child nodes in the child data source, supplying the id of the Node to the request.
        /// </summary>

    },


    loaded: function() {
        /// <summary>
        /// Gets or sets the loaded flag of the Node. Setting the loaded flag to false allows reloading of child items.
        /// </summary>

    },


    parentNode: function() {
        /// <summary>
        /// Gets the parent node.
        /// </summary>
        /// <returns type="kendo.data.Node">the parent of the node; null if the node is a root node or doesn't have a parent.</returns>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoNode = function() {
    /// <summary>
    /// Returns a reference to the kendo.data.Node widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.data.Node">The kendo.data.Node instance (if present).</returns>
};

$.fn.kendoNode = function(options) {
    /// <summary>
    /// Instantiates a kendo.data.Node widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.data.ObservableArray = function() { };

kendo.data.ObservableArray.prototype = {




    bind: function(eventName,handler) {
        /// <summary>
        /// Attaches an event handler for the specified event.
        /// </summary>
        /// <param name="eventName" type="String" >The name of the event.</param>
        /// <param name="handler" type="Function" >The function which will be invoked when the event is raised.</param>

    },


    join: function(separator) {
        /// <summary>
        /// Joins all items of an ObservableArray into a string. Equivalent of
/// Array.prototype.join.
        /// </summary>
        /// <param name="separator" type="String" >Specifies the string to separate each item of the array. If omitted the array items are separated with a comma (,)</param>

    },


    parent: function() {
        /// <summary>
        /// Gets the parent of the array if such parent exists.
        /// </summary>
        /// <returns type="kendo.data.ObservableObject">the parent of the array; undefined if the array is not nested and doesn't have a parent.</returns>

    },


    pop: function() {
        /// <summary>
        /// Removes the last item from an array and returns that item. Equivalent of Array.prototype.pop.
        /// </summary>
        /// <returns type="Object">the item which was removed.</returns>

    },


    push: function() {
        /// <summary>
        /// Appends the given items to the array and returns the new length of the array. Equivalent of Array.prototype.push.
/// The new items are wrapped as ObservableObject if they are complex objects.
        /// </summary>
        /// <returns type="Number">the new length of the array.</returns>

    },


    slice: function(begin,end) {
        /// <summary>
        /// Returns a one-level deep copy of a portion of an array. Equivalent of
/// Array.prototype.slice.
/// The result of the slice method is not an instance of ObvservableArray. It is a regular JavaScript Array object.
        /// </summary>
        /// <param name="begin" type="Number" >Zero-based index at which to begin extraction.</param>
        /// <param name="end" type="Number" >Zero-based index at which to end extraction. If end is omitted, slice extracts to the end of the sequence.</param>

    },


    splice: function(index,howMany) {
        /// <summary>
        /// Changes an ObservableArray, by adding new items while removing old items. Equivalent of
/// Array.prototype.splice
        /// </summary>
        /// <param name="index" type="Number" >Index at which to start changing the array. If negative, will begin that many elements from the end.</param>
        /// <param name="howMany" type="Number" >An integer indicating the number of items to remove. If set to 0, no items are removed. In this case, you should specify at least one new item.</param>
        /// <returns type="Array">containing the removed items. The result of the splice method is not an instance of ObvservableArray.</returns>

    },


    shift: function() {
        /// <summary>
        /// Removes the first item from an ObvservableArray and returns that item. Equivalent of Array.prototype.shift.
        /// </summary>
        /// <returns type="Object">the item which was removed.</returns>

    },


    toJSON: function() {
        /// <summary>
        /// Returns a JavaScript Array which represents the contents of the ObservableArray.
        /// </summary>

    },


    unshift: function() {
        /// <summary>
        /// Adds one or more items to the beginning of an ObservableArray and returns the new length.  Equivalent of Array.prototype.unshift.
        /// </summary>
        /// <returns type="Number">the new length of the array.</returns>

    },


    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoObservableArray = function() {
    /// <summary>
    /// Returns a reference to the kendo.data.ObservableArray widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.data.ObservableArray">The kendo.data.ObservableArray instance (if present).</returns>
};

$.fn.kendoObservableArray = function(options) {
    /// <summary>
    /// Instantiates a kendo.data.ObservableArray widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.data.ObservableObject = function() { };

kendo.data.ObservableObject.prototype = {




    bind: function() {
        /// <summary>
        /// Attaches a handler to an event. Examples and more info can be found in the bind section of the
/// kendo.Observable API reference.
        /// </summary>

    },


    get: function(name) {
        /// <summary>
        /// Gets the value of the specified field.
        /// </summary>
        /// <param name="name" type="String" >The name of the field whose value is going to be returned.</param>
        /// <returns type="Object">the value of the specified field.</returns>

    },


    parent: function() {
        /// <summary>
        /// Gets the parent of the object if such parent exists.
        /// </summary>
        /// <returns type="kendo.data.ObservableObject">the parent of the object; undefined if the object is not nested and doesn't have a parent.</returns>

    },


    set: function(name,value) {
        /// <summary>
        /// Sets the value of the specified field.
        /// </summary>
        /// <param name="name" type="String" >The name of the field whose value is going to be returned.</param>
        /// <param name="value" type="Object" >The new value of the field.</param>

    },


    toJSON: function() {
        /// <summary>
        /// Creates a plain JavaScript object which contains all fields of the ObservableObject.
        /// </summary>
        /// <returns type="Object">which contains only the fields of the ObservableObject.</returns>

    },


    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoObservableObject = function() {
    /// <summary>
    /// Returns a reference to the kendo.data.ObservableObject widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.data.ObservableObject">The kendo.data.ObservableObject instance (if present).</returns>
};

$.fn.kendoObservableObject = function(options) {
    /// <summary>
    /// Instantiates a kendo.data.ObservableObject widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.data.PivotDataSource = function() { };

kendo.data.PivotDataSource.prototype = {




    axes: function() {
        /// <summary>
        /// Get the parsed axes data
        /// </summary>
        /// <returns type="Object">the parsed axes data</returns>

    },


    catalog: function(name) {
        /// <summary>
        /// Get or sets the current catalog name.
        /// </summary>
        /// <param name="name" type="String" >The name of the catalog.</param>
        /// <returns type="String">the current catalog name.</returns>

    },


    columns: function(val) {
        /// <summary>
        /// Get or sets the columns configuration.
        /// </summary>
        /// <param name="val" type="Array" >The columns configuration. Accepts the same values as the columns option.</param>
        /// <returns type="Array">the current columns configuration.</returns>

    },


    cube: function(name) {
        /// <summary>
        /// Get or sets the current cube name.
        /// </summary>
        /// <param name="name" type="String" >The name of the cube.</param>
        /// <returns type="String">the current cube name.</returns>

    },


    discover: function(options) {
        /// <summary>
        /// Starts discover request with given options.
        /// </summary>
        /// <param name="options" type="String" >The options of the discover request</param>
        /// <returns type="Object">Deferred object</returns>

    },


    measures: function(val) {
        /// <summary>
        /// Get or sets the measures configuration.
        /// </summary>
        /// <param name="val" type="Array" >The measures configuration. Accepts the same values as the measures option.</param>
        /// <returns type="Array">the current measures configuration.</returns>

    },


    measuresAxis: function() {
        /// <summary>
        /// Get the name of the axis on which measures are displayed.
        /// </summary>
        /// <returns type="String">the axis name.</returns>

    },


    rows: function(val) {
        /// <summary>
        /// Get or sets the rows configuration.
        /// </summary>
        /// <param name="val" type="Array" >The rows configuration. Accepts the same values as the row option.</param>
        /// <returns type="Array">the current rows configuration.</returns>

    },


    schemaCatalogs: function() {
        /// <summary>
        /// Request catalogs information.
        /// </summary>
        /// <returns type="Object">Deferred object</returns>

    },


    schemaCubes: function() {
        /// <summary>
        /// Request cubes schema information.
        /// </summary>
        /// <returns type="Object">Deferred object</returns>

    },


    schemaDimensions: function() {
        /// <summary>
        /// Request dimensions schema information.
        /// </summary>
        /// <returns type="Object">Deferred object</returns>

    },


    schemaHierarchies: function(dimensionName) {
        /// <summary>
        /// Request hierarchies schema information.
        /// </summary>
        /// <param name="dimensionName" type="String" >The name of the dimensions which is 'owner' of the hierarchy.</param>
        /// <returns type="Object">Deferred object</returns>

    },


    schemaLevels: function(hierarchyName) {
        /// <summary>
        /// Request levels schema information.
        /// </summary>
        /// <param name="hierarchyName" type="String" >The name of the hierarchy which is 'owner' of the level.</param>
        /// <returns type="Object">Deferred object</returns>

    },


    schemaMeasures: function() {
        /// <summary>
        /// Request measures schema information.
        /// </summary>
        /// <returns type="Object">Deferred object</returns>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoPivotDataSource = function() {
    /// <summary>
    /// Returns a reference to the kendo.data.PivotDataSource widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.data.PivotDataSource">The kendo.data.PivotDataSource instance (if present).</returns>
};

$.fn.kendoPivotDataSource = function(options) {
    /// <summary>
    /// Instantiates a kendo.data.PivotDataSource widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;columns — Array 
    /// &#10;The configuration of columns axis members. An array of JavaScript objects or strings. A JavaScript objects are interpreted as column descriptors. Strings are interpreted as the hierarchal name of the member.
    /// &#10;
    /// &#10;measures — Array 
    /// &#10;The configuration of measures. An string array which values are interpreted as the name of the measures to be loaded.
    /// &#10;
    /// &#10;rows — Array 
    /// &#10;The configuration of rows axis members. An array of JavaScript objects or strings. A JavaScript objects are interpreted as rows descriptors. Strings are interpreted as the hierarchal name of the member.
    /// &#10;
    /// &#10;transport — Object 
    /// &#10;The configuration used to load data items and discover schema information.
    /// &#10;
    /// &#10;schema — Object 
    /// &#10;The schema configuration of the PivotDataSource.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.data.SchedulerDataSource = function() { };

kendo.data.SchedulerDataSource.prototype = {




    expand: function(start,end) {
        /// <summary>
        /// Expands all recurring events in the data and returns a list of events for a specific period.
        /// </summary>
        /// <param name="start" type="Date" >The start date of the period.</param>
        /// <param name="end" type="Date" >The end date of the period.</param>
        /// <returns type="Array">the expanded list of scheduler events filtered by the specified start/end period.</returns>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoSchedulerDataSource = function() {
    /// <summary>
    /// Returns a reference to the kendo.data.SchedulerDataSource widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.data.SchedulerDataSource">The kendo.data.SchedulerDataSource instance (if present).</returns>
};

$.fn.kendoSchedulerDataSource = function(options) {
    /// <summary>
    /// Instantiates a kendo.data.SchedulerDataSource widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;schema — Object 
    /// &#10;The schema configuration of the SchedulerDataSource.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.data.SchedulerEvent = function() { };

kendo.data.SchedulerEvent.prototype = {




    clone: function(options,updateUid) {
        /// <summary>
        /// Clones the scheduler event.
        /// </summary>
        /// <param name="options" type="Object" >Additional options passed to the SchedulerEvent constructor.</param>
        /// <param name="updateUid" type="Boolean" >If you pass true the uid of the event will be updated.</param>
        /// <returns type="kendo.data.SchedulerEvent">the cloned scheduler event.</returns>

    },


    duration: function() {
        /// <summary>
        /// Returns the scheduler event length in milliseconds.
        /// </summary>
        /// <returns type="Number">the length of the event.</returns>

    },


    expand: function(start,end,timeZoneId) {
        /// <summary>
        /// Expands the event for a specific period based on the recurrenceRule option.
        /// </summary>
        /// <param name="start" type="Date" >The start date of the occurrence period.</param>
        /// <param name="end" type="Date" >The end date of the occurrence period.</param>
        /// <param name="timeZoneId" type="String" >The time zone ID used to convert the recurrence rule dates.</param>
        /// <returns type="Array">list of occurrences.</returns>

    },


    update: function(eventInfo) {
        /// <summary>
        /// Updates the scheduler event.
        /// </summary>
        /// <param name="eventInfo" type="Object" >The new values, which will be used to update the event.</param>

    },


    isMultiDay: function() {
        /// <summary>
        /// Checks whether the event is equal to or longer then twenty four hours.
        /// </summary>
        /// <returns type="Boolean">return true if event is equal to or longer then 24 hours.</returns>

    },


    isException: function() {
        /// <summary>
        /// Checks whether the event is a recurrence exception.
        /// </summary>
        /// <returns type="Boolean">return true if event is a recurrence exception.</returns>

    },


    isOccurrence: function() {
        /// <summary>
        /// Checks whether the event is an occurrence part of a recurring series.
        /// </summary>
        /// <returns type="Boolean">return true if event is an occurrence.</returns>

    },


    isRecurring: function() {
        /// <summary>
        /// Checks whether the event is part of a recurring series.
        /// </summary>
        /// <returns type="Boolean">return true if event is recurring.</returns>

    },


    isRecurrenceHead: function() {
        /// <summary>
        /// Checks whether the event is the head of a recurring series.
        /// </summary>
        /// <returns type="Boolean">return true if event is a recurrence head.</returns>

    },


    toOccurrence: function(options) {
        /// <summary>
        /// Converts the scheduler event to a event occurrence. Method will remove recurrenceRule, recurrenceException options, will add a recurrenceId field and will set id to the default one.
        /// </summary>
        /// <param name="options" type="Object" >Additional options passed to the SchedulerEvent constructor.</param>
        /// <returns type="kendo.data.SchedulerEvent">the occurrence.</returns>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoSchedulerEvent = function() {
    /// <summary>
    /// Returns a reference to the kendo.data.SchedulerEvent widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.data.SchedulerEvent">The kendo.data.SchedulerEvent instance (if present).</returns>
};

$.fn.kendoSchedulerEvent = function(options) {
    /// <summary>
    /// Instantiates a kendo.data.SchedulerEvent widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;description — String (default: "")
    /// &#10;The optional event description.
    /// &#10;
    /// &#10;end — Date 
    /// &#10;The date at which the scheduler event ends. The end date is mandatory.
    /// &#10;
    /// &#10;endTimezone — String (default: undefined)
    /// &#10;The timezone of the end date. If not specified the timezone will be used.The complete list of the supported timezones is available in the List of IANA time zones Wikipedia page.
    /// &#10;
    /// &#10;id — String|Number|Object 
    /// &#10;The mandatory unique identifier of the event.
    /// &#10;
    /// &#10;isAllDay — Boolean (default: false)
    /// &#10;If set to true the event is "all day". By default events are not all day.
    /// &#10;
    /// &#10;recurrenceException — String (default: undefined)
    /// &#10;The recurrence exceptions. A list of semicolon separated dates formatted using the yyyyMMddTHHmmssZ format string.
    /// &#10;
    /// &#10;recurrenceId — String|Number|Object (default: undefined)
    /// &#10;The id of the recurrence parent event. Required for events that are recurrence exceptions.
    /// &#10;
    /// &#10;recurrenceRule — String (default: undefined)
    /// &#10;The recurrence rule describing the recurring pattern of the event. The format follows the iCal specification.
    /// &#10;
    /// &#10;start — Date 
    /// &#10;The date at which the scheduler event starts. The start date is mandatory.
    /// &#10;
    /// &#10;startTimezone — String (default: undefined)
    /// &#10;The timezone of the start date. If not specified the timezone will be used.The complete list of the supported timezones is available in the List of IANA time zones Wikipedia page.
    /// &#10;
    /// &#10;title — String (default: "")
    /// &#10;The title of the event which is displayed by the scheduler widget.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.dataviz.diagram.Circle = function() { };

kendo.dataviz.diagram.Circle.prototype = {




    visible: function(visible) {
        /// <summary>
        /// Gets or sets the visibilty of the current element.
        /// </summary>
        /// <param name="visible" type="Boolean" >The new visibility state.</param>
        /// <returns type="Boolean">True if the element is visible, false otherwise.</returns>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoCircle = function() {
    /// <summary>
    /// Returns a reference to the kendo.dataviz.diagram.Circle widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.dataviz.diagram.Circle">The kendo.dataviz.diagram.Circle instance (if present).</returns>
};

$.fn.kendoCircle = function(options) {
    /// <summary>
    /// Instantiates a kendo.dataviz.diagram.Circle widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;background — String 
    /// &#10;The fill color of the circle.
    /// &#10;
    /// &#10;stroke — Object 
    /// &#10;Defines the stroke configuration.
    /// &#10;
    /// &#10;center — Object 
    /// &#10;The center of the circle.
    /// &#10;
    /// &#10;radius — Number 
    /// &#10;The radius of the circle.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.dataviz.diagram.Connection = function() { };

kendo.dataviz.diagram.Connection.prototype = {




    source: function(source) {
        /// <summary>
        /// Gets or sets the current source of the connection.This object can be a Point for a floating endpoint (i.e. not attached to a shape), a Shape or a Connector of a Shape. You can use the Shape.getConnector() method to fetch a Connector on the basis of its name. If a Shape is specified the Connection will attach to the "Auto" connector.
        /// </summary>
        /// <param name="source" type="Object" >If no source is specified the method will return the current object to which the Connection's endpoint is attached.</param>
        /// <returns type="Object">the connection source.</returns>

    },


    sourcePoint: function() {
        /// <summary>
        /// Gets the global coordinate of the connection's start (initial endpoint).
/// The method returns a Point independently of the object to which the source is attached.
        /// </summary>
        /// <returns type="kendo.dataviz.diagram.Point">the coordinates of the connection source.</returns>

    },


    target: function(target) {
        /// <summary>
        /// Gets or set the target of the Connection.This object can be a Point for a floating endpoint (i.e. not attached to a shape), a Shape or a Connector of a Shape. You can use the Shape.getConnector() method to fetch a Connector on the basis of its name. If a Shape is specified the Connection will attach to the "Auto" connector.
        /// </summary>
        /// <param name="target" type="Object" >If no source is specified the method will return the current object to which the Connection's endpoint is attached.</param>
        /// <returns type="Object">the connection target.</returns>

    },


    targetPoint: function() {
        /// <summary>
        /// Similar to the sourcePoint, this gets the coordinates of the target of the Connection independently of its endpoint attachement.
        /// </summary>
        /// <returns type="kendo.dataviz.diagram.Point">the coordinates of the connection target.</returns>

    },


    select: function(value) {
        /// <summary>
        /// Select or deselects the Connection.
        /// </summary>
        /// <param name="value" type="Boolean" >True to select the Connection and false to deselect it.</param>

    },


    type: function(value) {
        /// <summary>
        /// Gets or sets the (sub-) type of the Connection which defines the way it routes.The routing of a connection is the way that intermediate points of a Connection defines a route. A route is usually defined on the basis of constraints or behaviors. Currently the framework defines a default polyline route (which simply connects the given intermediate points) and a simple rectangular (aka cascading) route. The cascading type is useful when using tree layout and hierarchies; the routed Connection will in this case enhance the representation of the hierarchy and thus reproduce a classic organization diagram.
        /// </summary>
        /// <param name="value" type="String" ></param>

    },


    points: function() {
        /// <summary>
        /// Gets the intermediate points of the connection.
        /// </summary>
        /// <returns type="Array">the intermediate points of the connection.</returns>

    },


    allPoints: function() {
        /// <summary>
        /// Gets all points of the Connection.
/// This is the union of the endpoints and the intermediate points.
        /// </summary>
        /// <returns type="Array">all points of the connection.</returns>

    },


    redraw: function() {
        /// <summary>
        /// Redraws the Connection with the given options.
        /// </summary>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoConnection = function() {
    /// <summary>
    /// Returns a reference to the kendo.dataviz.diagram.Connection widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.dataviz.diagram.Connection">The kendo.dataviz.diagram.Connection instance (if present).</returns>
};

$.fn.kendoConnection = function(options) {
    /// <summary>
    /// Instantiates a kendo.dataviz.diagram.Connection widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;stroke — Object 
    /// &#10;Defines the stroke configuration.
    /// &#10;
    /// &#10;hover — Object 
    /// &#10;Defines the hover configuration.
    /// &#10;
    /// &#10;startCap — String (default: "FilledCircle")
    /// &#10;The start cap (arrow, head or decoration) of the connection:
    /// &#10;
    /// &#10;endCap — String (default: "ArrowEnd")
    /// &#10;The start cap (arrow, head or decoration) of the connection:Note that you can also use the "ArrowStart" for the endCap but its direction will be inversed.
    /// &#10;
    /// &#10;points — Array 
    /// &#10;Sets the intermediate points (in global coordinates) of the connection.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.dataviz.diagram.Connector = function() { };

kendo.dataviz.diagram.Connector.prototype = {




    position: function(position) {
        /// <summary>
        /// Gets or sets the position of the Connector.
        /// </summary>
        /// <param name="position" type="kendo.dataviz.diagram.Point" >The new position of the connector.</param>
        /// <returns type="kendo.dataviz.diagram.Point">the current position of the connector.</returns>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoConnector = function() {
    /// <summary>
    /// Returns a reference to the kendo.dataviz.diagram.Connector widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.dataviz.diagram.Connector">The kendo.dataviz.diagram.Connector instance (if present).</returns>
};

$.fn.kendoConnector = function(options) {
    /// <summary>
    /// Instantiates a kendo.dataviz.diagram.Connector widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;width — Number (default: 8)
    /// &#10;Defines the width of the connector.
    /// &#10;
    /// &#10;height — Number (default: 8)
    /// &#10;Defines the height of the connector.
    /// &#10;
    /// &#10;background — String 
    /// &#10;Defines the background color of the Connector.
    /// &#10;
    /// &#10;hoveredBackground — String 
    /// &#10;Defines the color of the Connector when the pointer hovers over it.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.dataviz.diagram.Group = function() { };

kendo.dataviz.diagram.Group.prototype = {




    append: function(element) {
        /// <summary>
        /// Appends the given element to the group
        /// </summary>
        /// <param name="element" type="Object" >The element to append.</param>

    },


    clear: function() {
        /// <summary>
        /// Removes all elements from the group.
        /// </summary>

    },


    remove: function(element) {
        /// <summary>
        /// Removes the given element from the group
        /// </summary>
        /// <param name="element" type="Object" >The element to remove.</param>

    },


    visible: function(visible) {
        /// <summary>
        /// Gets or sets the visibilty of the current element.
        /// </summary>
        /// <param name="visible" type="Boolean" >The new visibility state.</param>
        /// <returns type="Boolean">True if the element is visible, false otherwise.</returns>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoGroup = function() {
    /// <summary>
    /// Returns a reference to the kendo.dataviz.diagram.Group widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.dataviz.diagram.Group">The kendo.dataviz.diagram.Group instance (if present).</returns>
};

$.fn.kendoGroup = function(options) {
    /// <summary>
    /// Instantiates a kendo.dataviz.diagram.Group widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;x — Number 
    /// &#10;The X position of the top-left corner of the group.
    /// &#10;
    /// &#10;y — Number 
    /// &#10;The Y position of the top-left corner of the group.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.dataviz.diagram.Image = function() { };

kendo.dataviz.diagram.Image.prototype = {




    visible: function(visible) {
        /// <summary>
        /// Gets or sets the visibilty of the current element.
        /// </summary>
        /// <param name="visible" type="Boolean" >The new visibility state.</param>
        /// <returns type="Boolean">True if the element is visible, false otherwise.</returns>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoImage = function() {
    /// <summary>
    /// Returns a reference to the kendo.dataviz.diagram.Image widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.dataviz.diagram.Image">The kendo.dataviz.diagram.Image instance (if present).</returns>
};

$.fn.kendoImage = function(options) {
    /// <summary>
    /// Instantiates a kendo.dataviz.diagram.Image widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;height — Number 
    /// &#10;The height of the image.
    /// &#10;
    /// &#10;width — Number 
    /// &#10;The width of the image.
    /// &#10;
    /// &#10;x — Number 
    /// &#10;The X position of the top-left corner of the element.
    /// &#10;
    /// &#10;y — Number 
    /// &#10;The Y position of the top-left corner of the element.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.dataviz.diagram.Line = function() { };

kendo.dataviz.diagram.Line.prototype = {




    visible: function(visible) {
        /// <summary>
        /// Gets or sets the visibilty of the current element.
        /// </summary>
        /// <param name="visible" type="Boolean" >The new visibility state.</param>
        /// <returns type="Boolean">True if the element is visible, false otherwise.</returns>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoLine = function() {
    /// <summary>
    /// Returns a reference to the kendo.dataviz.diagram.Line widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.dataviz.diagram.Line">The kendo.dataviz.diagram.Line instance (if present).</returns>
};

$.fn.kendoLine = function(options) {
    /// <summary>
    /// Instantiates a kendo.dataviz.diagram.Line widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;stroke — Object 
    /// &#10;Defines the stroke configuration.
    /// &#10;
    /// &#10;from — Object 
    /// &#10;The first point of the line.
    /// &#10;
    /// &#10;to — Object 
    /// &#10;The second point of the line.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.dataviz.diagram.Point = function() { };

kendo.dataviz.diagram.Point.prototype = {



    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoPoint = function() {
    /// <summary>
    /// Returns a reference to the kendo.dataviz.diagram.Point widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.dataviz.diagram.Point">The kendo.dataviz.diagram.Point instance (if present).</returns>
};

$.fn.kendoPoint = function(options) {
    /// <summary>
    /// Instantiates a kendo.dataviz.diagram.Point widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;x — Number 
    /// &#10;Defines the x-coordinate of the point.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.dataviz.diagram.Rect = function() { };

kendo.dataviz.diagram.Rect.prototype = {



    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoRect = function() {
    /// <summary>
    /// Returns a reference to the kendo.dataviz.diagram.Rect widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.dataviz.diagram.Rect">The kendo.dataviz.diagram.Rect instance (if present).</returns>
};

$.fn.kendoRect = function(options) {
    /// <summary>
    /// Instantiates a kendo.dataviz.diagram.Rect widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;height — Number 
    /// &#10;Sets the height of the rectangle.
    /// &#10;
    /// &#10;width — Number 
    /// &#10;Sets the width of the rectangle.
    /// &#10;
    /// &#10;x — Number 
    /// &#10;The x-coordinate of the top-left corner of the rectangle.
    /// &#10;
    /// &#10;y — Number 
    /// &#10;The y-coordinate of the top-left corner of the rectangle.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.dataviz.diagram.Rectangle = function() { };

kendo.dataviz.diagram.Rectangle.prototype = {




    visible: function(visible) {
        /// <summary>
        /// Gets or sets the visibilty of the current element.
        /// </summary>
        /// <param name="visible" type="Boolean" >The new visibility state.</param>
        /// <returns type="Boolean">True if the element is visible, false otherwise.</returns>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoRectangle = function() {
    /// <summary>
    /// Returns a reference to the kendo.dataviz.diagram.Rectangle widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.dataviz.diagram.Rectangle">The kendo.dataviz.diagram.Rectangle instance (if present).</returns>
};

$.fn.kendoRectangle = function(options) {
    /// <summary>
    /// Instantiates a kendo.dataviz.diagram.Rectangle widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;background — String 
    /// &#10;Defines the fill color of the rectangle.
    /// &#10;
    /// &#10;height — Number 
    /// &#10;Sets the height of the rectangle.
    /// &#10;
    /// &#10;stroke — Object 
    /// &#10;Defines the stroke configuration.
    /// &#10;
    /// &#10;width — Number 
    /// &#10;Sets the width of the rectangle.
    /// &#10;
    /// &#10;x — Number 
    /// &#10;The X position of the top-left corner of the rectangle.
    /// &#10;
    /// &#10;y — Number 
    /// &#10;The Y position of the top-left corner of the rectangle.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.dataviz.diagram.Shape = function() { };

kendo.dataviz.diagram.Shape.prototype = {




    position: function(point) {
        /// <summary>
        /// Get or set method returning the current global position or sets the position specified.
        /// </summary>
        /// <param name="point" type="kendo.dataviz.diagram.Point" >Either the location to set or if no parameter given returns the current location.</param>

    },


    clone: function() {
        /// <summary>
        /// Returns a clone (with a different id) of the shape.
        /// </summary>
        /// <returns type="kendo.dataviz.diagram.Shape">A clone of the current shape.</returns>

    },


    select: function(value) {
        /// <summary>
        /// Selects or deselects the shape.
        /// </summary>
        /// <param name="value" type="Boolean" >Use 'true' to select the shape or 'false' to deselect it.</param>

    },


    connections: function(type) {
        /// <summary>
        /// Returns the connections attached to the shape. You can optionally specify to return only the incoming or outgoing connections.
        /// </summary>
        /// <param name="type" type="String" >If not parameter specified all connections are returned, if "in" then only the incoming (i.e. towards the shape) are returned, if "out" the only the outgoing (i.e. away from the shape) are returned.</param>

    },


    getConnector: function() {
        /// <summary>
        /// Fetches a (default or custom) Connector defined on the Shape by its name.
        /// </summary>

    },


    getPosition: function(side) {
        /// <summary>
        /// Returns the middle positions of the sides of the bounds or the center of the shape's bounds. This method is useful when defining custom connectors where a position function relative to the shape's coordinate system is required.
        /// </summary>
        /// <param name="side" type="String" >One of the four sides of a bound; "left", "right", "top", "bottom". If none specified the center of the shape's bounds will be returned.</param>

    },


    redraw: function() {
        /// <summary>
        /// Renders the shape with the given options. It redefines the options and redraws the shape accordingly.
        /// </summary>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoShape = function() {
    /// <summary>
    /// Returns a reference to the kendo.dataviz.diagram.Shape widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.dataviz.diagram.Shape">The kendo.dataviz.diagram.Shape instance (if present).</returns>
};

$.fn.kendoShape = function(options) {
    /// <summary>
    /// Instantiates a kendo.dataviz.diagram.Shape widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;id — String 
    /// &#10;The unique identifier for a Shape.
    /// &#10;
    /// &#10;path — String 
    /// &#10;The path option of a Shape is a description of a custom geometry. The format follows the standard SVG format (http://www.w3.org/TR/SVG/paths.html#PathData "SVG Path data.").
    /// &#10;
    /// &#10;stroke — Object 
    /// &#10;Defines the stroke configuration.
    /// &#10;
    /// &#10;type — String (default: "rectangle")
    /// &#10;Specifies the type of the Shape using any of the built-in shape type.
    /// &#10;
    /// &#10;x — Number (default: 0)
    /// &#10;Defines the x-coordinate of the shape when added to the diagram.
    /// &#10;
    /// &#10;y — Number (default: 0)
    /// &#10;Defines the y-coordinate of the shape when added to the diagram.
    /// &#10;
    /// &#10;minWidth — Number (default: 20)
    /// &#10;Defines the minimum width the shape should have, i.e. it cannot be resized to a value smaller than the given one.
    /// &#10;
    /// &#10;minHeight — Number (default: 20)
    /// &#10;Defines the minimum height the shape should have, i.e. it cannot be resized to a value smaller than the given one.
    /// &#10;
    /// &#10;width — Number (default: 100)
    /// &#10;Defines the width of the shape when added to the diagram.
    /// &#10;
    /// &#10;height — Number (default: 100)
    /// &#10;Defines the height of the shape when added to the diagram.
    /// &#10;
    /// &#10;background — String (default: "SteelBlue")
    /// &#10;Defines the fill-color of the shape.
    /// &#10;
    /// &#10;hover — Object 
    /// &#10;Defines the hover configuration.
    /// &#10;
    /// &#10;connectors — Array 
    /// &#10;Defines the connectors the shape owns.
    /// &#10;
    /// &#10;rotation — Object 
    /// &#10;The shape rotation settings.
    /// &#10;
    /// &#10;content — Object 
    /// &#10;Defines the shapes content settings.
    /// &#10;
    /// &#10;visual — Function 
    /// &#10;A function returning a visual element to render for this shape.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.dataviz.diagram.TextBlock = function() { };

kendo.dataviz.diagram.TextBlock.prototype = {




    content: function(content) {
        /// <summary>
        /// Gets or sets the text block content.
        /// </summary>
        /// <param name="content" type="String" >The new text content.</param>
        /// <returns type="String">the current text content.</returns>

    },


    visible: function(visible) {
        /// <summary>
        /// Gets or sets the visibilty of the current element.
        /// </summary>
        /// <param name="visible" type="Boolean" >The new visibility state.</param>
        /// <returns type="Boolean">True if the element is visible, false otherwise.</returns>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoTextBlock = function() {
    /// <summary>
    /// Returns a reference to the kendo.dataviz.diagram.TextBlock widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.dataviz.diagram.TextBlock">The kendo.dataviz.diagram.TextBlock instance (if present).</returns>
};

$.fn.kendoTextBlock = function(options) {
    /// <summary>
    /// Instantiates a kendo.dataviz.diagram.TextBlock widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;background — String 
    /// &#10;The background color of the text block.
    /// &#10;
    /// &#10;color — String 
    /// &#10;The text color of the text block.
    /// &#10;
    /// &#10;fontFamily — String 
    /// &#10;The font family of the text block.
    /// &#10;
    /// &#10;fontSize — Number 
    /// &#10;The font size of the text block.
    /// &#10;
    /// &#10;height — Number 
    /// &#10;The height of the text block.
    /// &#10;
    /// &#10;text — String 
    /// &#10;The content of the text block.
    /// &#10;
    /// &#10;width — Number 
    /// &#10;The width of the text block.
    /// &#10;
    /// &#10;x — Number 
    /// &#10;The X position of the top-left corner of the text block.
    /// &#10;
    /// &#10;y — Number 
    /// &#10;The Y position of the top-left corner of the text block.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.dataviz.ui.Barcode = function() { };

kendo.dataviz.ui.Barcode.prototype = {




    imageDataURL: function() {
        /// <summary>
        /// Returns a PNG image of the barcode encoded as a Data URL.
        /// </summary>
        /// <returns type="String">A data URL with image/png MIME type. Will be null if the browser does not support the canvas element.</returns>

    },


    redraw: function() {
        /// <summary>
        /// Redraws the barcode.
        /// </summary>

    },


    resize: function(force) {
        /// <summary>
        /// Adjusts the widget layout to match the size of the container.
        /// </summary>
        /// <param name="force" type="Boolean" >Defines whether the widget should proceed with resizing even if the element dimensions have not changed.</param>

    },


    svg: function() {
        /// <summary>
        /// Returns the SVG representation of the barcode. The returned string is a self-contained SVG document that can be used as is or converted to other formats using tools like Inkscape and
/// ImageMagick. Both programs provide command-line interface suitable for server-side processing.
        /// </summary>
        /// <returns type="String">the SVG representation of the barcode.</returns>

    },


    value: function(value) {
        /// <summary>
        /// Gets/Sets the value of the barcode.
        /// </summary>
        /// <param name="value" type="Object" >The value to set.</param>
        /// <returns type="String">The value of the barcode.</returns>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoBarcode = function() {
    /// <summary>
    /// Returns a reference to the kendo.dataviz.ui.Barcode widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.dataviz.ui.Barcode">The kendo.dataviz.ui.Barcode instance (if present).</returns>
};

$.fn.kendoBarcode = function(options) {
    /// <summary>
    /// Instantiates a kendo.dataviz.ui.Barcode widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;renderAs — String (default: "canvas")
    /// &#10;Sets the preferred rendering engine.
/// &#10;If it is not supported by the browser, the Barcode will switch to the first available mode.The supported values are:
    /// &#10;
    /// &#10;background — String (default: "white")
    /// &#10;The background of the barcode area.
/// &#10;Any valid CSS color string will work here, including hex and rgb.
    /// &#10;
    /// &#10;border — Object 
    /// &#10;The border of the barcode area.
    /// &#10;
    /// &#10;checksum — Boolean (default: false)
    /// &#10;If set to true the barcode will not display the checksum digit next to the value in the text area.
    /// &#10;
    /// &#10;color — String (default: "black")
    /// &#10;The color of the bar elements.
/// &#10;Any valid CSS color string will work here, including hex and rgb.
    /// &#10;
    /// &#10;height — Number (default: 100)
    /// &#10;The height of the barcode in pixels.  By default the height is 100.
    /// &#10;
    /// &#10;padding — Object 
    /// &#10;The padding of the barcode.
    /// &#10;
    /// &#10;text — Object 
    /// &#10;Can be set to a JavaScript object which represents the text configuration.
    /// &#10;
    /// &#10;type — String (default: "code39")
    /// &#10;The symbology (encoding) the barcode will use.The supported values are:
    /// &#10;
    /// &#10;value — String 
    /// &#10;The initial value of the Barcode
    /// &#10;
    /// &#10;width — Number (default: 300)
    /// &#10;The width of the barcode in pixels.  By default the width is 300.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.dataviz.ui.Chart = function() { };

kendo.dataviz.ui.Chart.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    redraw: function() {
        /// <summary>
        /// Repaints the chart using the currently loaded data.
        /// </summary>

    },


    refresh: function() {
        /// <summary>
        /// Reloads the data and renders the chart.
        /// </summary>

    },


    resize: function(force) {
        /// <summary>
        /// Adjusts the chart layout to match the size of the container.
        /// </summary>
        /// <param name="force" type="Boolean" >Defines whether the widget should proceed with resizing even if the element dimensions have not changed.</param>

    },


    setDataSource: function(dataSource) {
        /// <summary>
        /// Sets the data source of the widget.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" >The data source to which the widget should be bound.</param>

    },


    setOptions: function(options) {
        /// <summary>
        /// Sets the widget options. Changes are cumulative.
        /// </summary>
        /// <param name="options" type="Object" >The chart settings to update.</param>

    },


    svg: function() {
        /// <summary>
        /// Returns the SVG representation of the chart.
/// The returned string is a self-contained SVG document that can be used as is or
/// converted to other formats using tools like Inkscape and
/// ImageMagick.
/// Both programs provide command-line interface suitable for server-side processing.
        /// </summary>
        /// <returns type="String">the SVG representation of the chart.</returns>

    },


    imageDataURL: function() {
        /// <summary>
        /// Returns a PNG image of the chart encoded as a Data URL.
        /// </summary>
        /// <returns type="String">A data URL with image/png MIME type. Will be null if the browser does not support the canvas element.</returns>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoChart = function() {
    /// <summary>
    /// Returns a reference to the kendo.dataviz.ui.Chart widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.dataviz.ui.Chart">The kendo.dataviz.ui.Chart instance (if present).</returns>
};

$.fn.kendoChart = function(options) {
    /// <summary>
    /// Instantiates a kendo.dataviz.ui.Chart widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;autoBind — Boolean (default: true)
    /// &#10;If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
/// &#10;data source is fired. By default the widget will bind to the data source specified in the configuration.
    /// &#10;
    /// &#10;axisDefaults — Object 
    /// &#10;The default options for all chart axes. Accepts the options supported by categoryAxis, valueAxis, xAxis and yAxis.
    /// &#10;
    /// &#10;categoryAxis — Array|Object 
    /// &#10;The category axis configuration options.
    /// &#10;
    /// &#10;chartArea — Object 
    /// &#10;The chart area configuration options. Represents the entire visible area of the chart.
    /// &#10;
    /// &#10;dataSource — Object|Array 
    /// &#10;The data source of the chart which is used to display the series. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
/// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.DataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.DataSource instance the widget will use that instance and will not initialize a new one.
    /// &#10;
    /// &#10;legend — Object 
    /// &#10;The chart legend configuration options.
    /// &#10;
    /// &#10;panes — Array 
    /// &#10;The chart panes configuration.Panes are used to split the chart in two or more parts. The panes are ordered from top to bottom.Each axis can be associated with a pane by setting its pane option to the name of the desired pane.
/// &#10;Axis that don't have specified pane are placed in the top (default) pane.Series are moved to the desired pane by associating them with an axis.
    /// &#10;
    /// &#10;plotArea — Object 
    /// &#10;The plot area configuration options. The plot area is the area which displays the series.
    /// &#10;
    /// &#10;renderAs — String 
    /// &#10;Sets the preferred rendering engine.
/// &#10;If it is not supported by the browser, the Chart will switch to the first available mode.The supported values are:
    /// &#10;
    /// &#10;series — Array 
    /// &#10;The configuration of the chart series.The series type is determined by the value of the type field.
/// &#10;If a type value is missing, the type is assumed to be the one specified in seriesDefaults.
    /// &#10;
    /// &#10;seriesColors — Array 
    /// &#10;The default colors for the chart's series. When all colors are used, new colors are pulled from the start again.
    /// &#10;
    /// &#10;seriesDefaults — Object 
    /// &#10;The default options for all series.
    /// &#10;
    /// &#10;theme — String 
    /// &#10;The chart theme.The supported values are:
    /// &#10;
    /// &#10;title — String 
    /// &#10;The chart title configuration options or text.
    /// &#10;
    /// &#10;title — Object 
    /// &#10;The chart title configuration options or text.
    /// &#10;
    /// &#10;tooltip — Object 
    /// &#10;The chart series tooltip configuration options.
    /// &#10;
    /// &#10;transitions — Boolean (default: true)
    /// &#10;If set to true the chart will play animations when displaying the series. By default animations are enabled.
    /// &#10;
    /// &#10;valueAxis — Array 
    /// &#10;The value axis configuration options.
    /// &#10;
    /// &#10;xAxis — Array 
    /// &#10;The X-axis configuration options of the scatter chart X-axis. Supports all valueAxis options.
    /// &#10;
    /// &#10;yAxis — Array 
    /// &#10;The y axis configuration options of the scatter chart. Supports all valueAxis options.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.dataviz.ui.Diagram = function() { };

kendo.dataviz.ui.Diagram.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the widget for safe removal from the DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    zoom: function(zoom,staticPoint) {
        /// <summary>
        /// Zooms in or out of the diagram.
        /// </summary>
        /// <param name="zoom" type="Number" >The zoom factor.</param>
        /// <param name="staticPoint" type="Object" >The point to zoom into or out of.</param>

    },


    setDataSource: function(dataSource) {
        /// <summary>
        /// Sets the data source of the diagram.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" >The data source to which the widget should be bound.</param>

    },


    save: function() {
        /// <summary>
        /// Saves the diagram.
        /// </summary>

    },


    load: function(json) {
        /// <summary>
        /// Loads a saved diagram.
        /// </summary>
        /// <param name="json" type="String" >The serialized diagram in JSON format.</param>

    },


    pan: function(pan) {
        /// <summary>
        /// Pans the diagram with a specified delta (represented as a Point).
        /// </summary>
        /// <param name="pan" type="Object" >The translation delta to apply to the diagram.</param>

    },


    viewport: function() {
        /// <summary>
        /// The bounds of the diagramming canvas.
        /// </summary>

    },


    viewToDocument: function(point) {
        /// <summary>
        /// Transforms a point from View coordinates to Page document coordinates. View origin is the diagram container.
        /// </summary>
        /// <param name="point" type="Object" >The point in Page document coordinates.</param>
        /// <returns type="Object">the transformed point</returns>

    },


    documentToView: function(point) {
        /// <summary>
        /// Transforms a point from Page document coordinates to View coordinates. View origin is the diagram container.
        /// </summary>
        /// <param name="point" type="Object" >The point in View coordinates.</param>
        /// <returns type="Object">the transformed point</returns>

    },


    viewToModel: function(point) {
        /// <summary>
        /// Transforms a point from View coordinates to Model coordinates. Model coordinates are independent coordinates to define Shape bounds.
        /// </summary>
        /// <param name="point" type="Object" >The point in View coordinates.</param>
        /// <returns type="Object">the transformed point</returns>

    },


    modelToView: function(point) {
        /// <summary>
        /// Transforms a point from Model coordinates to View coordinates. Model coordinates are independent coordinates to define Shape bounds.
        /// </summary>
        /// <param name="point" type="Object" >The point in Model coordinates.</param>
        /// <returns type="Object">the transformed point</returns>

    },


    modelToLayer: function(point) {
        /// <summary>
        /// Transforms a point from Model coordinates to Layer coordinates. Layer coordinates are relative to the drawing surface.
        /// </summary>
        /// <param name="point" type="Object" >The point in Model coordinates.</param>
        /// <returns type="Object">the transformed point</returns>

    },


    layerToModel: function(point) {
        /// <summary>
        /// Transforms a point from Layer coordinates to Model coordinates. Layer coordinates are relative to the drawable surface.
        /// </summary>
        /// <param name="point" type="Object" >The point in layer coordinates.</param>
        /// <returns type="Object">the transformed point</returns>

    },


    documentToModel: function(point) {
        /// <summary>
        /// Transforms a point from Page document coordinates to Model coordinates. Shortcut for viewToModel(documentToView(point))
        /// </summary>
        /// <param name="point" type="Object" >The point in Page document coordinates.</param>
        /// <returns type="Object">the transformed point</returns>

    },


    modelToDocument: function(point) {
        /// <summary>
        /// Transforms a point from Model coordinates to Page document coordinates. Shortcut for viewToDocument(modelToView(point))
        /// </summary>
        /// <param name="point" type="Object" >The point in Model coordinates.</param>
        /// <returns type="Object">the transformed point</returns>

    },


    transformPoint: function(p) {
        /// <summary>
        /// Transforms a point from the main canvas coordinates to the non-transformed origin.
        /// </summary>
        /// <param name="p" type="Object" >An arbitrary point to transform to the diagram coordinate system.</param>

    },


    transformRect: function(r) {
        /// <summary>
        /// Transforms a given rectangle to the diagram coordinate system.
        /// </summary>
        /// <param name="r" type="Object" >The rectangle to be transformed.</param>

    },


    focus: function() {
        /// <summary>
        /// Sets the focus on the diagram.
        /// </summary>

    },


    clear: function() {
        /// <summary>
        /// Clears the content of the diagram.
        /// </summary>

    },


    connect: function(source,target,options) {
        /// <summary>
        /// Creates a connection which can be either attached on both ends to a shape, half attached or floating (not attached to any shape). When a connection is (half) attached to a shape it happens through the intermediate Connector object. Connectors are part of a Shape's definition and you can specify the binding of a connection to a shape directly via the shape or via one of its connectors. If you specify a Shape as a connection's endpoint the Auto-connector will be used. This means that the endpoint of the connection will switch to the most convenient (in the sense of shortest path) connector automatically. If you specify a shape's connector as an endpoint for a connection the endpoint will remain attached to that given Connector instance.
/// Finally, if you wish to have a (half) floating connection endpoint you should specify a Point as parameter for the floating end.
        /// </summary>
        /// <param name="source" type="Object" >The source definition of the connection. This can be a Shape, a Connector or a Point.</param>
        /// <param name="target" type="Object" >The target definition of the connection. This can be a Shape, a Connector or a Point.</param>
        /// <param name="options" type="Object" >The options of the new connection. See connections options.</param>

    },


    connected: function(source,target) {
        /// <summary>
        /// Returns whether the two given shapes are connected through a connection.
        /// </summary>
        /// <param name="source" type="Object" >A Shape in the diagram.</param>
        /// <param name="target" type="Object" >A Shape in the diagram.</param>

    },


    addConnection: function(connection,undoable) {
        /// <summary>
        /// Adds the given Connection to the diagram.
        /// </summary>
        /// <param name="connection" type="Object" >The Connection instance to be added to the diagram.</param>
        /// <param name="undoable" type="Boolean" >Whether the addition should be recorded in the undo-redo stack.</param>

    },


    addShape: function(obj,undoable) {
        /// <summary>
        /// Adds a new shape to the diagram.
        /// </summary>
        /// <param name="obj" type="Object" >A Shape instance or a Point where the default shape type will be added.</param>
        /// <param name="undoable" type="Boolean" >Whether the addition should be recorded in the undo-redo stack.</param>

    },


    undo: function() {
        /// <summary>
        /// Undoes the previous action.
        /// </summary>

    },


    redo: function() {
        /// <summary>
        /// Executes again the previously undone action.
        /// </summary>

    },


    remove: function(items,undoable) {
        /// <summary>
        /// Removes one or more items from the diagram
        /// </summary>
        /// <param name="items" type="Object" >A diagram item or an array of diagram items to remove.</param>
        /// <param name="undoable" type="Boolean" >Whether the removal should be recorded in the undo-redo stack.</param>

    },


    select: function(obj,options) {
        /// <summary>
        /// Gets the currently selected items is no parameter is specified. If a parameter is specified this selects items in the diagram on the basis of the given input.
        /// </summary>
        /// <param name="obj" type="Object" ></param>
        /// <param name="options" type="Object" >Only one Boolean option is currently defined; addToSelection. If set to true the newly selected items will be added to the existing selection. Otherwise a new selection set is created. The default is false.</param>

    },


    toFront: function(items,undoable) {
        /// <summary>
        /// Brings the specified items in front, i.e. it's reordering items to ensure they are on top of the complementary items.
        /// </summary>
        /// <param name="items" type="Array" >An array of diagram items.</param>
        /// <param name="undoable" type="Boolean" >Whether the change should be recorded in the undo-redo stack.</param>

    },


    toBack: function(items,undoable) {
        /// <summary>
        /// Sends the specified items to the back, i.e. it's reordering items to ensure they are underneath the complementary items.
        /// </summary>
        /// <param name="items" type="Array" >An array of diagram items.</param>
        /// <param name="undoable" type="Boolean" >Whether the change should be recorded in the undo-redo stack.</param>

    },


    bringIntoView: function(obj,options) {
        /// <summary>
        /// Brings one or more items into the view in function of various criteria.
        /// </summary>
        /// <param name="obj" type="Object" ></param>
        /// <param name="options" type="Object" ></param>

    },


    boundingBox: function(items) {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="items" type="Array" >The items (shapes and connections) to include in the bounding box. Defaults to all items if not specified.</param>
        /// <returns type="kendo.dataviz.diagram.Rect">The bounding rectangle of the specified items. If nothing is specified the bounding box of the all diagram will be returned.</returns>

    },


    copy: function() {
        /// <summary>
        /// Puts a copy of the currently selected diagram to an internal clipboard.
        /// </summary>

    },


    cut: function() {
        /// <summary>
        /// Cuts the currently selected diagram items to an internal clipboard.
        /// </summary>

    },


    paste: function() {
        /// <summary>
        /// Pastes the content of the internal diagram clipboard.
        /// </summary>

    },


    layout: function(options) {
        /// <summary>
        /// Applies a layout algorithm on the current diagram.A more detailed overview of layout and graph analysis can be found below.
        /// </summary>
        /// <param name="options" type="Object" >The layout options. See options.layout for a full reference.</param>

    },


    alignShapes: function(direction) {
        /// <summary>
        /// Aligns the edges (as defined by the bounding box) of the selected shapes.
        /// </summary>
        /// <param name="direction" type="String" >This can be one of the four supported directions:</param>

    },


    getShapeById: function(id) {
        /// <summary>
        /// Returns the shape or connection with the specified identifier.
        /// </summary>
        /// <param name="id" type="String" >The unique identifier of the Shape or Connection</param>
        /// <returns type="Object">the item that has the provided ID.</returns>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoDiagram = function() {
    /// <summary>
    /// Returns a reference to the kendo.dataviz.ui.Diagram widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.dataviz.ui.Diagram">The kendo.dataviz.ui.Diagram instance (if present).</returns>
};

$.fn.kendoDiagram = function(options) {
    /// <summary>
    /// Instantiates a kendo.dataviz.ui.Diagram widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;autoBind — Boolean (default: true)
    /// &#10;If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
/// &#10;data source is fired. By default the widget will bind to the data source specified in the configuration.
    /// &#10;
    /// &#10;zoomRate — Number (default: 0.1)
    /// &#10;The zoom step when using the mouse-wheel to zoom in or out.
    /// &#10;
    /// &#10;zoom — Number (default: 1)
    /// &#10;The zoom level in percentages.
    /// &#10;
    /// &#10;zoomMin — Number (default: 0.1)
    /// &#10;The zoom min level in percentages.
    /// &#10;
    /// &#10;zoomMax — Number (default: 2)
    /// &#10;The zoom max level in percentages.
    /// &#10;
    /// &#10;editable — Boolean 
    /// &#10;Specifies the shape editable.
    /// &#10;
    /// &#10;editable — Object 
    /// &#10;Specifies the shape editable.
    /// &#10;
    /// &#10;dataSource — Object|Array 
    /// &#10;See the dataSource field.
    /// &#10;
    /// &#10;draggable — Boolean (default: true)
    /// &#10;Defines whether items can be dropped on the diagram.
    /// &#10;
    /// &#10;layout — Object 
    /// &#10;The layout of a diagram consists in arranging the shapes (sometimes also the connections) in some fashion in order to achieve an aesthetically pleasing experience to the user. It aims at giving a more direct insight in the information contained within the diagram and its relational structure.On a technical level, layout consists of a multitude of algorithms and optimizations:and various ad-hoc calculations which depend on the type of layout. The criteria on which an algorithm is based vary but the common denominator is:Kendo diagram includes three of the most used layout algorithms which should cover most of your layout needs - tree layout, force-directed layout and layered layout. Please, check the type property for more details regarding each type.The generic way to apply a layout is by calling the layout() method on the diagram. The method has a single parameter options. It is an object, which can contain parameters which are specific to the layout as well as parameters customizing the global grid layout. Parameters which apply to other layout algorithms can be included but are overlooked if not applicable to the chose layout type. This means that you can define a set of parameters which cover all possible layout types and simply pass it in the method whatever the layout define in the first parameter.
    /// &#10;
    /// &#10;template — String|Function (default: "")
    /// &#10;The template which renders the content of the shape when bound to a dataSource. The names you can use in the template correspond to the properties used in the dataSource. See the dataSource topic below for a concrete example.
    /// &#10;
    /// &#10;connectionDefaults — Object 
    /// &#10;Defines the connections configuration.
    /// &#10;
    /// &#10;connections — Array 
    /// &#10;Defines the connections configuration.
    /// &#10;
    /// &#10;shapeDefaults — Object 
    /// &#10;Defines the shape options.
    /// &#10;
    /// &#10;shapes — Array 
    /// &#10;Defines the shape options.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.dataviz.ui.LinearGauge = function() { };

kendo.dataviz.ui.LinearGauge.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the Gauge for safe removal from the DOM.Detaches event handlers and removes data entries in order to avoid memory leaks.
        /// </summary>

    },


    redraw: function() {
        /// <summary>
        /// Redraws the gauge.
        /// </summary>

    },


    resize: function(force) {
        /// <summary>
        /// Adjusts the widget layout to match the size of the container.
        /// </summary>
        /// <param name="force" type="Boolean" >Defines whether the widget should proceed with resizing even if the element dimensions have not changed.</param>

    },


    svg: function() {
        /// <summary>
        /// Returns the SVG representation of the gauge.
/// The returned string is a self-contained SVG document that can be used as is or
/// converted to other formats using tools like Inkscape and
/// ImageMagick.
/// Both programs provide command-line interface suitable for server-side processing.
        /// </summary>

    },


    imageDataURL: function() {
        /// <summary>
        /// Returns a PNG image of the gauge encoded as a Data URL.
        /// </summary>
        /// <returns type="String">A data URL with image/png MIME type. Will be null if the browser does not support the canvas element.</returns>

    },


    value: function() {
        /// <summary>
        /// Change the value of the gauge.
        /// </summary>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoLinearGauge = function() {
    /// <summary>
    /// Returns a reference to the kendo.dataviz.ui.LinearGauge widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.dataviz.ui.LinearGauge">The kendo.dataviz.ui.LinearGauge instance (if present).</returns>
};

$.fn.kendoLinearGauge = function(options) {
    /// <summary>
    /// Instantiates a kendo.dataviz.ui.LinearGauge widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;gaugeArea — Object 
    /// &#10;The gauge area configuration options.
/// &#10;This is the entire visible area of the gauge.
    /// &#10;
    /// &#10;pointer — Object 
    /// &#10;The pointer configuration options.
    /// &#10;
    /// &#10;renderAs — String 
    /// &#10;Sets the preferred rendering engine.
/// &#10;If it is not supported by the browser, the Gauge will switch to the first available mode.The supported values are:
    /// &#10;
    /// &#10;scale — Object 
    /// &#10;Configures the scale.
    /// &#10;
    /// &#10;transitions — Boolean (default: true)
    /// &#10;A value indicating if transition animations should be played.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.dataviz.ui.Map = function() { };

kendo.dataviz.ui.Map.prototype = {




    center: function(center) {
        /// <summary>
        /// Gets or sets the map center.
/// The setter is chainable, i.e. returns the map instance.
        /// </summary>
        /// <param name="center" type="Object" >The location of the new map center. An array argument is assumed to be in [Latitude, Lonigude] order.</param>
        /// <returns type="kendo.dataviz.map.Location">The current map center.</returns>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    eventOffset: function(e) {
        /// <summary>
        /// Returns the event coordinates relative to the map element.
/// Offset coordinates are not synchronized to a particular location on the map.
        /// </summary>
        /// <param name="e" type="Object" >The DOM or jQuery mouse event.</param>
        /// <returns type="kendo.dataviz.geometry.Point">The event coordinates relative to the map element.</returns>

    },


    eventToLayer: function(e) {
        /// <summary>
        /// Retrieves projected (layer) coordinates that correspond to this mouse event.
/// Layer coordinates are absolute and change only when the zoom level is changed.
        /// </summary>
        /// <param name="e" type="Object" >The DOM or jQuery mouse event.</param>
        /// <returns type="kendo.dataviz.geometry.Point">The projected (layer) coordinates that correspond to this mouse event.</returns>

    },


    eventToLocation: function(e) {
        /// <summary>
        /// Retrieves the geographic location that correspond to this mouse event.
        /// </summary>
        /// <param name="e" type="Object" >The DOM or jQuery mouse event.</param>
        /// <returns type="kendo.dataviz.geometry.Point">The geographic location that correspond to this mouse event.</returns>

    },


    eventToView: function(e) {
        /// <summary>
        /// Retrieves relative (view) coordinates that correspond to this mouse event.
/// Layer elements positioned on these coordinates will appear under the mouse cursor.View coordinates are no longer valid after a map reset.
        /// </summary>
        /// <param name="e" type="Object" >The DOM or jQuery mouse event.</param>
        /// <returns type="kendo.dataviz.geometry.Point">The relative (view) coordinates that correspond to this mouse event.</returns>

    },


    extent: function() {
        /// <summary>
        /// Gets the map current map extent.
        /// </summary>
        /// <returns type="kendo.dataviz.map.Extent">The current map extent.</returns>

    },


    layerToLocation: function(point,zoom) {
        /// <summary>
        /// Transforms layer (projected) coordinates to geographical location.
        /// </summary>
        /// <param name="point" type="Object" >The layer (projected) coordinates. An array argument is assumed to be in x, y order.</param>
        /// <param name="zoom" type="Number" >Optional. Assumed zoom level. Defaults to the current zoom level.</param>
        /// <returns type="kendo.dataviz.map.Location">The geographic location that corresponds to the layer coordinates.</returns>

    },


    locationToLayer: function(location,zoom) {
        /// <summary>
        /// Returns the layer (projected) coordinates that correspond to a geographical location.
        /// </summary>
        /// <param name="location" type="Object" >The geographic location. An array argument is assumed to be in [Latitude, Lonigude] order.</param>
        /// <param name="zoom" type="Number" >Optional. Assumed zoom level. Defaults to the current zoom level.</param>
        /// <returns type="kendo.dataviz.geometry.Point">The layer (projected) coordinates.</returns>

    },


    locationToView: function(location) {
        /// <summary>
        /// Returns the view (relative) coordinates that correspond to a geographical location.
        /// </summary>
        /// <param name="location" type="Object" >The geographic location. An array argument is assumed to be in [Latitude, Lonigude] order.</param>
        /// <returns type="kendo.dataviz.geometry.Point">The view coordinates that correspond to a geographical location.</returns>

    },


    resize: function(force) {
        /// <summary>
        /// Adjusts the widget layout to match the size of the container.
        /// </summary>
        /// <param name="force" type="Boolean" >Defines whether the widget should proceed with resizing even if the element dimensions have not changed.</param>

    },


    setOptions: function(options) {
        /// <summary>
        /// Resets the map and applies new options over the current state.
        /// </summary>
        /// <param name="options" type="Object" >The new options to be applied.</param>

    },


    viewSize: function() {
        /// <summary>
        /// Retrieves the size of the visible portion of the map.
        /// </summary>
        /// <returns type="Object">The size (width and height) of the visible portion of the map.</returns>

    },


    viewToLocation: function(point,zoom) {
        /// <summary>
        /// Returns the geographical location that correspond to the view (relative) coordinates.
        /// </summary>
        /// <param name="point" type="Object" >The view coordinates. An array argument is assumed to be in x, y order.</param>
        /// <param name="zoom" type="Number" >Optional. Assumed zoom level. Defaults to the current zoom level.</param>
        /// <returns type="kendo.dataviz.map.Location">The geographic location that corresponds to the view coordinates.</returns>

    },


    zoom: function(level) {
        /// <summary>
        /// Gets or sets the map zoom level.
/// The setter is chainable, i.e. returns the map instance.
        /// </summary>
        /// <param name="level" type="Number" >The new zoom level. The value is clamped to the  [minZoom, maxZoom] interval.</param>
        /// <returns type="Number">The current zoom level.</returns>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoMap = function() {
    /// <summary>
    /// Returns a reference to the kendo.dataviz.ui.Map widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.dataviz.ui.Map">The kendo.dataviz.ui.Map instance (if present).</returns>
};

$.fn.kendoMap = function(options) {
    /// <summary>
    /// Instantiates a kendo.dataviz.ui.Map widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;center — Array 
    /// &#10;The map center. Coordinates are listed as [Latitude, Longitude].
    /// &#10;
    /// &#10;controls — Object 
    /// &#10;The configuration of built-in map controls.
    /// &#10;
    /// &#10;layerDefaults — Object 
    /// &#10;The default configuration for map layers by type.
    /// &#10;
    /// &#10;layers — Array 
    /// &#10;The configuration of the map layers.
/// &#10;The layer type is determined by the value of the type field.
    /// &#10;
    /// &#10;markerDefaults — Object 
    /// &#10;The default options for all markers.
    /// &#10;
    /// &#10;markers — Array 
    /// &#10;Static markers to display on the map.
    /// &#10;
    /// &#10;minZoom — Number (default: 1)
    /// &#10;The minimum zoom level.
/// &#10;Typical web maps use zoom levels from 0 (whole world) to 19 (sub-meter features).
    /// &#10;
    /// &#10;maxZoom — Number (default: 19)
    /// &#10;The maximum zoom level.
/// &#10;Typical web maps use zoom levels from 0 (whole world) to 19 (sub-meter features).
    /// &#10;
    /// &#10;minSize — Number (default: 256)
    /// &#10;The size of the map in pixels at zoom level 0.
    /// &#10;
    /// &#10;pannable — Boolean (default: true)
    /// &#10;Controls whether the user can pan the map.
    /// &#10;
    /// &#10;wraparound — Boolean (default: true)
    /// &#10;Specifies whether the map should wrap around the east-west edges.
    /// &#10;
    /// &#10;zoom — Number (default: 3)
    /// &#10;The initial zoom level.Typical web maps use zoom levels from 0 (whole world) to 19 (sub-meter features).The map size is derived from the zoom level and minScale options: size = (2 ^ zoom) * minSize
    /// &#10;
    /// &#10;zoomable — Boolean (default: true)
    /// &#10;Controls whether the map zoom level can be changed by the user.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.dataviz.ui.QRCode = function() { };

kendo.dataviz.ui.QRCode.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the QRCode for safe removal from the DOM.Removes data entries in order to avoid memory leaks.
        /// </summary>

    },


    imageDataURL: function() {
        /// <summary>
        /// Returns a PNG image of the qrcode encoded as a Data URL.
        /// </summary>
        /// <returns type="String">A data URL with image/png MIME type. Will be null if the browser does not support the canvas element.</returns>

    },


    redraw: function() {
        /// <summary>
        /// Redraws the QR code using the current value and options.
        /// </summary>

    },


    resize: function(force) {
        /// <summary>
        /// Adjusts the widget layout to match the size of the container.
        /// </summary>
        /// <param name="force" type="Boolean" >Defines whether the widget should proceed with resizing even if the element dimensions have not changed.</param>

    },


    setOptions: function(options) {
        /// <summary>
        /// Sets new options to the QRCode and redraws it.
        /// </summary>
        /// <param name="options" type="Object" >An object with the new options. All configuration options can be set.</param>

    },


    svg: function() {
        /// <summary>
        /// Returns the SVG representation of the qrcode. The returned string is a self-contained SVG document that can be used as is or converted to other formats using tools like Inkscape and
/// ImageMagick. Both programs provide command-line interface suitable for server-side processing.
        /// </summary>
        /// <returns type="String">the SVG representation of the qrcode.</returns>

    },


    value: function(options) {
        /// <summary>
        /// Change the value of the QR code.
        /// </summary>
        /// <param name="options" type="Object" >The new value to be set.</param>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoQRCode = function() {
    /// <summary>
    /// Returns a reference to the kendo.dataviz.ui.QRCode widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.dataviz.ui.QRCode">The kendo.dataviz.ui.QRCode instance (if present).</returns>
};

$.fn.kendoQRCode = function(options) {
    /// <summary>
    /// Instantiates a kendo.dataviz.ui.QRCode widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;background — String (default: "#fff")
    /// &#10;The background color of the QR code. Accepts a valid CSS color string, including hex and rgb.
    /// &#10;
    /// &#10;border — Object 
    /// &#10;The border of the QR code.
    /// &#10;
    /// &#10;color — String (default: "#000")
    /// &#10;The color of the QR code. Accepts a valid CSS color string, including hex and rgb.
    /// &#10;
    /// &#10;encoding — String (default: "ISO_8859_1")
    /// &#10;The encoding mode used to encode the value.The possible values are:
    /// &#10;
    /// &#10;errorCorrection — String (default: "L")
    /// &#10;The error correction level used to encode the value.The possible values are:
    /// &#10;
    /// &#10;padding — Number (default: 0)
    /// &#10;Sets the minimum distance in pixels that should be left between the border and the QR modules.
    /// &#10;
    /// &#10;renderAs — String (default: "canvas")
    /// &#10;Sets the preferred rendering engine.
/// &#10;If it is not supported by the browser, the QRCode will switch to the first available mode.The supported values are:
    /// &#10;
    /// &#10;size — Number|String 
    /// &#10;Specifies the size of a QR code in pixels (i.e. "200px"). Numeric values are treated as pixels. If no size is specified, it will be determined from the element width and height. In case the element does not have width or height bigger than zero, a default value of 200 pixels will be used.
    /// &#10;
    /// &#10;value — Number|String 
    /// &#10;The value of the QRCode.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.dataviz.ui.RadialGauge = function() { };

kendo.dataviz.ui.RadialGauge.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the Gauge for safe removal from the DOM.Detaches event handlers and removes data entries in order to avoid memory leaks.
        /// </summary>

    },


    redraw: function() {
        /// <summary>
        /// Redraws the gauge.
        /// </summary>

    },


    resize: function(force) {
        /// <summary>
        /// Adjusts the widget layout to match the size of the container.
        /// </summary>
        /// <param name="force" type="Boolean" >Defines whether the widget should proceed with resizing even if the element dimensions have not changed.</param>

    },


    svg: function() {
        /// <summary>
        /// Returns the SVG representation of the gauge.
/// The returned string is a self-contained SVG document that can be used as is or
/// converted to other formats using tools like Inkscape and
/// ImageMagick.
/// Both programs provide command-line interface suitable for server-side processing.
        /// </summary>

    },


    imageDataURL: function() {
        /// <summary>
        /// Returns a PNG image of the gauge encoded as a Data URL.
        /// </summary>
        /// <returns type="String">A data URL with image/png MIME type. Will be null if the browser does not support the canvas element.</returns>

    },


    value: function() {
        /// <summary>
        /// Change the value of the gauge.
        /// </summary>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoRadialGauge = function() {
    /// <summary>
    /// Returns a reference to the kendo.dataviz.ui.RadialGauge widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.dataviz.ui.RadialGauge">The kendo.dataviz.ui.RadialGauge instance (if present).</returns>
};

$.fn.kendoRadialGauge = function(options) {
    /// <summary>
    /// Instantiates a kendo.dataviz.ui.RadialGauge widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;gaugeArea — Object 
    /// &#10;The gauge area configuration options.
/// &#10;This is the entire visible area of the gauge.
    /// &#10;
    /// &#10;pointer — Object 
    /// &#10;The pointer configuration options.
    /// &#10;
    /// &#10;renderAs — String 
    /// &#10;Sets the preferred rendering engine.
/// &#10;If it is not supported by the browser, the Gauge will switch to the first available mode.The supported values are:
    /// &#10;
    /// &#10;scale — Object 
    /// &#10;Configures the scale.
    /// &#10;
    /// &#10;transitions — Boolean (default: true)
    /// &#10;A value indicating if transition animations should be played.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.dataviz.ui.Sparkline = function() { };

kendo.dataviz.ui.Sparkline.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the Sparkline for safe removal from the DOM.Detaches event handlers and removes data entries in order to avoid memory leaks.
        /// </summary>

    },


    refresh: function() {
        /// <summary>
        /// Reloads the data and repaints the chart.
        /// </summary>

    },


    setDataSource: function(dataSource) {
        /// <summary>
        /// Sets the dataSource of an existing Chart and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" ></param>

    },


    setOptions: function(options) {
        /// <summary>
        /// Sets the widget options. Changes are cumulative.
        /// </summary>
        /// <param name="options" type="Object" >The chart settings to update.</param>

    },


    svg: function() {
        /// <summary>
        /// Returns the SVG representation of the chart.
/// The returned string is a self-contained SVG document that can be used as is or
/// converted to other formats using tools like Inkscape and
/// ImageMagick.
/// Both programs provide command-line interface suitable for server-side processing.
        /// </summary>
        /// <returns type="String">the SVG representation of the sparkline.</returns>

    },


    imageDataURL: function() {
        /// <summary>
        /// Returns a PNG image of the sparkline encoded as a Data URL.
        /// </summary>
        /// <returns type="String">A data URL with image/png MIME type. Will be null if the browser does not support the canvas element.</returns>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoSparkline = function() {
    /// <summary>
    /// Returns a reference to the kendo.dataviz.ui.Sparkline widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.dataviz.ui.Sparkline">The kendo.dataviz.ui.Sparkline instance (if present).</returns>
};

$.fn.kendoSparkline = function(options) {
    /// <summary>
    /// Instantiates a kendo.dataviz.ui.Sparkline widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;axisDefaults — Object 
    /// &#10;Default options for all chart axes.
    /// &#10;
    /// &#10;categoryAxis — Array 
    /// &#10;The category axis configuration options.
    /// &#10;
    /// &#10;chartArea — Object 
    /// &#10;The chart area configuration options.
/// &#10;This is the entire visible area of the chart.
    /// &#10;
    /// &#10;data — Array 
    /// &#10;The data for the default sparkline series.Will be discareded if series are supplied.
    /// &#10;
    /// &#10;dataSource — Object 
    /// &#10;DataSource configuration or instance.
    /// &#10;
    /// &#10;autoBind — Boolean (default: true)
    /// &#10;Indicates whether the chart will call read on the data source initially.
    /// &#10;
    /// &#10;plotArea — Object 
    /// &#10;The plot area configuration options. This is the area containing the plotted series.
    /// &#10;
    /// &#10;pointWidth — Number (default: 5)
    /// &#10;The width to allocate for each data point.
    /// &#10;
    /// &#10;renderAs — String 
    /// &#10;Sets the preferred rendering engine.
/// &#10;If it is not supported by the browser, the Sparkline will switch to the first available mode.The supported values are:
    /// &#10;
    /// &#10;series — Array 
    /// &#10;Array of series definitions.The series type is determined by the value of the type field.
/// &#10;If a type value is missing, the type is assumed to be the one specified in seriesDefaults.Each series type has a different set of options.
    /// &#10;
    /// &#10;seriesColors — Array 
    /// &#10;The default colors for the chart's series. When all colors are used, new colors are pulled from the start again.
    /// &#10;
    /// &#10;seriesDefaults — Object 
    /// &#10;Default values for each series.
    /// &#10;
    /// &#10;theme — String 
    /// &#10;Sets Chart theme. Available themes: default, blueOpal, black.
    /// &#10;
    /// &#10;tooltip — Object 
    /// &#10;The data point tooltip configuration options.
    /// &#10;
    /// &#10;transitions — Boolean (default: false)
    /// &#10;A value indicating if transition animations should be played.
    /// &#10;
    /// &#10;type — String (default: "line")
    /// &#10;The default series type.
    /// &#10;
    /// &#10;valueAxis — Array 
    /// &#10;The value axis configuration options.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.dataviz.ui.StockChart = function() { };

kendo.dataviz.ui.StockChart.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    redraw: function() {
        /// <summary>
        /// Repaints the chart using the currently loaded data.
        /// </summary>

    },


    refresh: function() {
        /// <summary>
        /// Reloads the data and renders the chart.
        /// </summary>

    },


    resize: function(force) {
        /// <summary>
        /// Adjusts the chart layout to match the size of the container.
        /// </summary>
        /// <param name="force" type="Boolean" >Defines whether the widget should proceed with resizing even if the element dimensions have not changed.</param>

    },


    setDataSource: function(dataSource) {
        /// <summary>
        /// Sets the data source of the widget.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" >The data source to which the widget should be bound.</param>

    },


    svg: function() {
        /// <summary>
        /// Returns the SVG representation of the chart.
/// The returned string is a self-contained SVG document that can be used as is or
/// converted to other formats using tools like Inkscape and
/// ImageMagick.
/// Both programs provide command-line interface suitable for server-side processing.
        /// </summary>
        /// <returns type="String">the SVG representation of the chart.</returns>

    },


    imageDataURL: function() {
        /// <summary>
        /// Returns a PNG image of the chart encoded as a Data URL.
        /// </summary>
        /// <returns type="String">A data URL with image/png MIME type. Will be null if the browser does not support the canvas element.</returns>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoStockChart = function() {
    /// <summary>
    /// Returns a reference to the kendo.dataviz.ui.StockChart widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.dataviz.ui.StockChart">The kendo.dataviz.ui.StockChart instance (if present).</returns>
};

$.fn.kendoStockChart = function(options) {
    /// <summary>
    /// Instantiates a kendo.dataviz.ui.StockChart widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;dateField — String (default: "date")
    /// &#10;The field containing the point date.
/// &#10;It is used as a default categoryField for all series.The data item field value must be either:
    /// &#10;
    /// &#10;navigator — Object 
    /// &#10;The data navigator configuration options.
    /// &#10;
    /// &#10;axisDefaults — Object 
    /// &#10;Default options for all chart axes.
    /// &#10;
    /// &#10;categoryAxis — Array 
    /// &#10;The category axis configuration options.
    /// &#10;
    /// &#10;chartArea — Object 
    /// &#10;The chart area configuration options.
/// &#10;This is the entire visible area of the chart.
    /// &#10;
    /// &#10;dataSource — Object 
    /// &#10;DataSource configuration or instance.
    /// &#10;
    /// &#10;autoBind — Boolean (default: true)
    /// &#10;Indicates whether the chart will call read on the data source initially.
    /// &#10;
    /// &#10;legend — Object 
    /// &#10;The chart legend configuration options.
    /// &#10;
    /// &#10;panes — Array 
    /// &#10;The chart panes configuration.Panes are used to split the chart in two or more parts. The panes are ordered from top to bottom.Each axis can be associated with a pane by setting its pane option to the name of the desired pane.
/// &#10;Axis that don't have specified pane are placed in the top (default) pane.Series are moved to the desired pane by associating them with an axis.
    /// &#10;
    /// &#10;plotArea — Object 
    /// &#10;The plot area configuration options. This is the area containing the plotted series.
    /// &#10;
    /// &#10;renderAs — String 
    /// &#10;Sets the preferred rendering engine.
/// &#10;If it is not supported by the browser, the Chart will switch to the first available mode.The supported values are:
    /// &#10;
    /// &#10;series — Array 
    /// &#10;Array of series definitions.The series type is determined by the value of the type field.
/// &#10;If a type value is missing, the type is assumed to be the one specified in seriesDefaults.Each series type has a different set of options.
    /// &#10;
    /// &#10;seriesColors — Array 
    /// &#10;The default colors for the chart's series. When all colors are used, new colors are pulled from the start again.
    /// &#10;
    /// &#10;seriesDefaults — Object 
    /// &#10;Default values for each series.
    /// &#10;
    /// &#10;theme — String 
    /// &#10;Sets Chart theme. Available themes: default, blueOpal, black.
    /// &#10;
    /// &#10;title — Object 
    /// &#10;The chart title configuration options or text.
    /// &#10;
    /// &#10;tooltip — Object 
    /// &#10;The data point tooltip configuration options.
    /// &#10;
    /// &#10;transitions — Boolean (default: true)
    /// &#10;A value indicating if transition animations should be played.
    /// &#10;
    /// &#10;valueAxis — Array 
    /// &#10;The value axis configuration options.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.dataviz.ui.TreeMap = function() { };

kendo.dataviz.ui.TreeMap.prototype = {



    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoTreeMap = function() {
    /// <summary>
    /// Returns a reference to the kendo.dataviz.ui.TreeMap widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.dataviz.ui.TreeMap">The kendo.dataviz.ui.TreeMap instance (if present).</returns>
};

$.fn.kendoTreeMap = function(options) {
    /// <summary>
    /// Instantiates a kendo.dataviz.ui.TreeMap widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;dataSource — Object|Array 
    /// &#10;The data source of the treeMap which is used to display the tiles and titles. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.HierarchicalDataSource
/// &#10;instance.If the HierarchicalDataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.HierarchicalDataSource instance using that value as data source configuration.If the HierarchicalDataSource option is an existing kendo.data.HierarchicalDataSource instance the widget will use that instance and will not initialize a new one.
    /// &#10;
    /// &#10;autoBind — Boolean (default: true)
    /// &#10;If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
/// &#10;data source is fired. By default the widget will bind to the data source specified in the configuration.
    /// &#10;
    /// &#10;valueField — String (default: "value")
    /// &#10;The data item field which contains the tile value.
    /// &#10;
    /// &#10;colorField — String (default: "color")
    /// &#10;The data item field which contains the tile color.
    /// &#10;
    /// &#10;textField — String (default: "text")
    /// &#10;The data item field which contains the tile title.
    /// &#10;
    /// &#10;template — String|Function 
    /// &#10;The template which renders the treeMap tile content.The fields which can be used in the template are:
    /// &#10;
    /// &#10;colors — Array 
    /// &#10;The default colors for the treemap tiles. When all colors are used, new colors are pulled from the start again.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.Widget = function() { };

kendo.mobile.ui.Widget.prototype = {




    view: function() {
        /// <summary>
        /// Returns the kendo.mobile.ui.View which contains the widget. If the widget is contained in a splitview, modalview, or drawer, the respective widget instance is returned.
        /// </summary>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoMobileWidget = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.Widget widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.Widget">The kendo.mobile.ui.Widget instance (if present).</returns>
};

$.fn.kendoMobileWidget = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.Widget widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.Draggable = function() { };

kendo.ui.Draggable.prototype = {




    cancelHold: function() {
        /// <summary>
        /// Has effect only when holdToDrag is set to true. Cancels the activated state of the widget, caused by pressing and holding.
        /// </summary>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoDraggable = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.Draggable widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.Draggable">The kendo.ui.Draggable instance (if present).</returns>
};

$.fn.kendoDraggable = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.Draggable widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;axis — String (default: null)
    /// &#10;Constrains the hint movement to either the horizontal (x) or vertical (y) axis. Can be set to either "x" or "y".
    /// &#10;
    /// &#10;container — jQuery 
    /// &#10;If set, the hint movement is constrained to the container boundaries.
    /// &#10;
    /// &#10;cursorOffset — Object (default: null)
    /// &#10;If set, specifies the offset of the hint relative to the mouse cursor/finger.
/// &#10;By default, the hint is initially positioned on top of the draggable source offset. The option accepts an object with two keys: top and left.
    /// &#10;
    /// &#10;distance — Number (default: 5)
    /// &#10;The required distance that the mouse should travel in order to initiate a drag.
    /// &#10;
    /// &#10;group — String (default: "default")
    /// &#10;Used to group sets of draggable and drop targets. A draggable with the same group value as a drop target will be accepted by the drop target.
    /// &#10;
    /// &#10;hint — Function|jQuery 
    /// &#10;Provides a way for customization of the drag indicator. If a function is supplied, it receives one argument - the draggable element's jQuery object.
    /// &#10;
    /// &#10;holdToDrag — Boolean (default: false)
    /// &#10;Suitable for touch oriented user interface, in order to avoid collision with the touch scrolling gesture. When set to true, the widget will be activated after the user taps and holds the finger on the element for a short amount of time.The draggable will also be activated by pressing, holding and lifting the finger without any movement. Dragging it afterwards will initiate the drag immediately. The activated mode can be canceled by calling cancelHold.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.DropTarget = function() { };

kendo.ui.DropTarget.prototype = {




    destroyGroup: function() {
        /// <summary>
        /// Destroys all DropTarget instances from the group with the given name.
        /// </summary>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoDropTarget = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.DropTarget widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.DropTarget">The kendo.ui.DropTarget instance (if present).</returns>
};

$.fn.kendoDropTarget = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.DropTarget widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;group — String (default: "default")
    /// &#10;Used to group sets of draggable and drop targets. A draggable with the same group value as a drop target will be accepted by the drop target.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.DropTargetArea = function() { };

kendo.ui.DropTargetArea.prototype = {



    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoDropTargetArea = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.DropTargetArea widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.DropTargetArea">The kendo.ui.DropTargetArea instance (if present).</returns>
};

$.fn.kendoDropTargetArea = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.DropTargetArea widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;group — String (default: "default")
    /// &#10;Used to group sets of draggable and drop targets. A draggable with the same group value as a drop target will be accepted by the drop target.
    /// &#10;
    /// &#10;filter — String (default: null)
    /// &#10;Selector to filter the drop targets in the area. Every matched element acts as a drop target and fires events on the DropTargetArea. Specifying the filter is mandatory.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.Validator = function() { };

kendo.ui.Validator.prototype = {




    errors: function() {
        /// <summary>
        /// Get the error messages if any.
        /// </summary>
        /// <returns type="Array">Messages for the failed validation rules.</returns>

    },


    hideMessages: function() {
        /// <summary>
        /// Hides the validation messages.
        /// </summary>

    },


    validate: function() {
        /// <summary>
        /// Validates the input element(s) against the declared validation rules.
        /// </summary>
        /// <returns type="Boolean">true if all validation rules passed successfully.Note that if a HTML form element is set as validation container, the form submits will be automatically prevented if validation fails.</returns>

    },


    validateInput: function(input) {
        /// <summary>
        /// Validates the input element against the declared validation rules.
        /// </summary>
        /// <param name="input" type="Object" >Input element to be validated.</param>
        /// <returns type="Boolean">true if all validation rules passed successfully.</returns>

    },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoValidator = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.Validator widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.Validator">The kendo.ui.Validator instance (if present).</returns>
};

$.fn.kendoValidator = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.Validator widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;errorTemplate — String 
    /// &#10;The template which renders the validation message.
    /// &#10;
    /// &#10;messages — Object 
    /// &#10;Set of messages (either strings or functions) which will be shown when given validation rule fails.
/// &#10;By setting already existing key the appropriate built-in message will be overridden.
    /// &#10;
    /// &#10;rules — Object 
    /// &#10;Set of custom validation rules. Those rules will extend the built-in ones.
    /// &#10;
    /// &#10;validateOnBlur — Boolean 
    /// &#10;Determines if validation will be triggered when element loses focus. Default value is true.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.Widget = function() { };

kendo.ui.Widget.prototype = {




    bind: function() {
        /// <summary>
        /// Attaches a handler to an event. Examples and more info can be found in the bind section of the kendo.Observable API reference.
        /// </summary>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the widget for safe removal from the DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    one: function() {
        /// <summary>
        /// Attaches a handler to an event. The handler is executed only once. Examples and more info can be found in the one section of the
/// kendo.Observable API reference.
        /// </summary>

    },


    setOptions: function(newOptions) {
        /// <summary>
        /// Allows changing the widget configuration after initialization. Depending on the widget, some properties may not be changed, e.g. ones that influence the widget's HTML output (such as Grid scrollability or columns).
        /// </summary>
        /// <param name="newOptions" type="Object" >The options to be changed or added.</param>

    },


    trigger: function() {
        /// <summary>
        /// Executes all handlers attached to the given event. More info can be found in the trigger section of the
/// kendo.Observable API reference.
        /// </summary>

    },


    unbind: function() {
        /// <summary>
        /// Remove a previously attached event handler. More info can be found in the unbind section of the
/// kendo.Observable API reference.
        /// </summary>

    },


    self: null

};

$.fn.getKendoWidget = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.Widget widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.Widget">The kendo.ui.Widget instance (if present).</returns>
};

$.fn.kendoWidget = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.Widget widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};

