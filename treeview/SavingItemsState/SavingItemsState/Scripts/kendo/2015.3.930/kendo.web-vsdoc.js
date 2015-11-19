// jshint unused: false
var kendo = {
    ui: {},
    mobile: {ui: {}},
    dataviz: {ui: {}},
    data: {}
};


if (!kendo.kendo) {
    kendo.kendo = {};
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


    toHSV: function() {
        /// <summary>
        /// Returns the color in HSV representation.  As HSV object, it has the
/// following properties:This does not modify the current object, it creates a new one instead.
        /// </summary>
        /// <returns type="Object">An object with h, s, v and a fields.</returns>

    },


    toRGB: function() {
        /// <summary>
        /// Returns the color in RGB representation.  The result has the following
/// properties:This does not modify the current object, it creates a new one instead.
        /// </summary>
        /// <returns type="Object">An object with r, g, b and a fields.</returns>

    },


    toBytes: function() {
        /// <summary>
        /// Returns the color in "Bytes" representation.  It has the same properties as
/// RGB, but r, g and b are integers between 0 and 255 instead of floats.This does not modify the current object, it creates a new one instead.
        /// </summary>
        /// <returns type="Object">An object with r, g and b fields.</returns>

    },


    toHex: function() {
        /// <summary>
        /// Returns a string in "FF0000" form (without a leading #).
        /// </summary>
        /// <returns type="String">The color in hex notation.</returns>

    },


    toCss: function() {
        /// <summary>
        /// Like toHex, but includes a leading #.
        /// </summary>
        /// <returns type="String">The color in CSS notation.</returns>

    },


    toCssRgba: function() {
        /// <summary>
        /// Returns the color in RGBA notation (includes the opacity).
        /// </summary>
        /// <returns type="String">The color in RGBA notation.</returns>

    },


    toDisplay: function() {
        /// <summary>
        /// Returns the color in the best notation supported by the current browser.  In
/// IE < 9 this returns the #FF0000 form; in all other browsers it returns the
/// RGBA form.
        /// </summary>
        /// <returns type="String">The color in the best notation supported by the current browser.</returns>

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




    start: function() {
        /// <summary>
        /// Activates the router binding to the URL changes.
        /// </summary>

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
        /// Navigates to the given route, replacing the current view in the history stack (like window.history.replaceState or location.replace work).
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
    /// &#10;ignoreCase — Boolean (default: true)
    /// &#10;Introduced with Q3 2014. If set to false, the router instance will perform case sensitive match of the url against the defined routes.
    /// &#10;
    /// &#10;pushState — Boolean (default: false)
    /// &#10;If set to true, the router will use the history pushState API.
    /// &#10;
    /// &#10;root — String (default: "/")
    /// &#10;Applicable if pushState is used and the application is deployed to a path different than /. If the application start page is hosted on http://foo.com/myapp/, the root option should be set to /myapp/.
    /// &#10;
    /// &#10;hashBang — Boolean (default: false)
    /// &#10;Introduced in the 2014 Q1 Service Pack 1 release. If set to true, the hash based navigation will parse and prefix the fragment value with !,
/// &#10;which should be SEO friendly, and allows non-prefixed anchor links to work as expected.
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
/// the data method will return the group items.Compare with the view method, which will return the data items that correspond to the current page, filter, sort and group configuration.
        /// </summary>
        /// <param name="value" type="Object" >The data items which will replace the current ones in the data source. If omitted the current data items will be returned.</param>
        /// <returns type="kendo.data.ObservableArray">the data items of the data source. Returns empty array if the data source hasn't been populated with data items via the read, fetch or query methods.</returns>

    },


    fetch: function(callback) {
        /// <summary>
        /// Reads the data items from a remote service (if the transport option is set) or from a JavaScript array (if the data option is set).
        /// </summary>
        /// <param name="callback" type="Function" >The optional function which is executed when the remote request is finished.  The function context (available via the this keyword) will be set to the data source instance.</param>
        /// <returns type="Promise">A promise that will be resolved when the data has been loaded, or rejected if an HTTP error occurs.</returns>

    },


    filter: function(value) {
        /// <summary>
        /// Gets or sets the filter configuration.
        /// </summary>
        /// <param name="value" type="Object" >The filter configuration. Accepts the same values as the filter option (check there for more examples).</param>
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
        /// Checks if the data items have changed.
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


    online: function(value) {
        /// <summary>
        /// Gets or sets the online state of the data source.
        /// </summary>
        /// <param name="value" type="Boolean" >The online state - true for online, false for offline.</param>
        /// <returns type="Boolean">the current online state - true if online; otherwise false.</returns>

    },


    offlineData: function(data) {
        /// <summary>
        /// Gets or sets the offline state of the data source.
        /// </summary>
        /// <param name="data" type="Array" >The array of data items that replace the current offline state of the data source.</param>
        /// <returns type="Array">array of JavaScript objects that represent the data items. Changed data items have a __state__ field attached. That field indicates the type of change: "create", "update" or "destroy". Unmodified data items don't have a __state__ field.</returns>

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
        /// Executes the specified query over the data items. Makes a HTTP request if bound to a remote service.This method is useful when you need to modify several parameters of the data request at the same time (e.g. filtering and sorting).
/// If you execute filter() and then sort(), the DataSource will make two separate requests. With query(), it will make one request.
        /// </summary>
        /// <param name="options" type="" >The query options which should be applied.</param>
        /// <returns type="Promise">A promise that will be resolved when the data has been loaded, or rejected if an HTTP error occurs.</returns>

    },


    read: function(data) {
        /// <summary>
        /// Reads data items from a remote service (if the transport option is set) or from a JavaScript array (if the data option is set).
        /// </summary>
        /// <param name="data" type="Object" >Optional data to pass to the remote service. If you need to filter, it is better to use the filter() method or the query() method with a filter parameter.</param>
        /// <returns type="Promise">A promise that will be resolved when the data has been loaded, or rejected if an HTTP error occurs.</returns>

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
        /// <returns type="Promise">A promise that will be resolved when all sync requests have finished succesfully, or rejected if any single request fails.</returns>

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
        /// Returns the data items which correspond to the current page, filter, sort and group configuration.
/// Compare with the data method, which will return data items from all pages, if local data binding and paging are used.To ensure that data is available this method should be used within the change event handler or the fetch method.
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
    /// &#10;offlineStorage — String|Object 
    /// &#10;The offline storage key or custom offline storage implementation.
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
/// &#10;The supported values are "odata" which supports the OData v.2 protocol, "odata-v4" which partially supports
/// &#10;odata version 4 and "signalr".
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
    /// &#10;The type of the dependency. The type is a value between 0 and 3, representing the four different dependency types: 0 - Finish-Finish, 1 - Finish-Start, 2 - Start-Finish, 3 - Start-Start.
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
    /// &#10;measures — Array|Object 
    /// &#10;The configuration of measures. An string array which values are interpreted as the name of the measures to be loaded.
/// &#10;Measures can be defined as a list of objects with name and type fields:
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
    /// &#10;The recurrence exceptions. A list of semi-colon separated dates formatted using the yyyyMMddTHHmmssZ format string.
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


kendo.data.TreeListDataSource = function() { };

kendo.data.TreeListDataSource.prototype = {




    load: function(model) {
        /// <summary>
        /// Loads the child nodes of a model.
        /// </summary>
        /// <param name="model" type="kendo.data.TreeListModel" >The model that must be loaded.</param>
        /// <returns type="Promise">A promise that will be resolved when the child nodes have been loaded, or rejected if an HTTP error occurs.</returns>

    },


    childNodes: function(model) {
        /// <summary>
        /// Child nodes for model.
        /// </summary>
        /// <param name="model" type="kendo.data.TreeListModel" >The model whose children must be returned.</param>
        /// <returns type="Array">of the child items.</returns>

    },


    rootNodes: function() {
        /// <summary>
        /// Return all root nodes.
        /// </summary>
        /// <returns type="Array">of the root items.</returns>

    },


    parentNode: function(model) {
        /// <summary>
        /// The parent of given node.
        /// </summary>
        /// <param name="model" type="kendo.data.TreeListModel" >The model whose parent must be returned.</param>
        /// <returns type="kendo.data.TreeListModel">parent of the node.</returns>

    },


    level: function(model) {
        /// <summary>
        /// The hierarchical level of the node.
        /// </summary>
        /// <param name="model" type="kendo.data.TreeListModel" >The model whose level must be calculated.</param>
        /// <returns type="Number">the hierachy level of the node.</returns>

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

$.fn.getKendoTreeListDataSource = function() {
    /// <summary>
    /// Returns a reference to the kendo.data.TreeListDataSource widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.data.TreeListDataSource">The kendo.data.TreeListDataSource instance (if present).</returns>
};

$.fn.kendoTreeListDataSource = function(options) {
    /// <summary>
    /// Instantiates a kendo.data.TreeListDataSource widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;schema — Object 
    /// &#10;The schema configuration of the TreeListDataSource.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.data.TreeListModel = function() { };

kendo.data.TreeListModel.prototype = {




    loaded: function() {
        /// <summary>
        /// Gets or sets the loaded flag of the TreeList. Setting the loaded flag to false allows reloading of child items.
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

$.fn.getKendoTreeListModel = function() {
    /// <summary>
    /// Returns a reference to the kendo.data.TreeListModel widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.data.TreeListModel">The kendo.data.TreeListModel instance (if present).</returns>
};

$.fn.kendoTreeListModel = function(options) {
    /// <summary>
    /// Instantiates a kendo.data.TreeListModel widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


if (!kendo.drawing) {
    kendo.drawing = {};
}

kendo.drawing.Arc = function() { };

kendo.drawing.Arc.prototype = {




    bbox: function() {
        /// <summary>
        /// Returns the bounding box of the element with transformations applied.
/// Inherited from Element.bbox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with transformations applied.</returns>

    },


    clip: function(clip) {
        /// <summary>
        /// Gets or sets the element clipping path.
/// Inherited from Element.clip
        /// </summary>
        /// <param name="clip" type="kendo.drawing.Path" >The element clipping path.</param>
        /// <returns type="kendo.drawing.Path">The current element clipping path.</returns>

    },


    clippedBBox: function() {
        /// <summary>
        /// Returns the bounding box of the element with clipping and transformations applied.
/// Inherited from Element.clippedBBox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with clipping transformations applied.</returns>

    },


    geometry: function(value) {
        /// <summary>
        /// Gets or sets the arc geometry.
        /// </summary>
        /// <param name="value" type="kendo.geometry.Arc" >The new geometry to use.</param>
        /// <returns type="kendo.geometry.Arc">The current arc geometry.</returns>

    },


    fill: function(color,opacity) {
        /// <summary>
        /// Sets the shape fill.
        /// </summary>
        /// <param name="color" type="String" >The fill color to set.</param>
        /// <param name="opacity" type="Number" >The fill opacity to set.</param>
        /// <returns type="kendo.drawing.Arc">The current instance to allow chaining.</returns>

    },


    opacity: function(opacity) {
        /// <summary>
        /// Gets or sets the element opacity.
/// Inherited from Element.opacityIf set, the stroke and fill opacity will be multiplied by the element opacity.
        /// </summary>
        /// <param name="opacity" type="Number" >The element opacity. Ranges from 0 (completely transparent) to 1 (completely opaque).</param>
        /// <returns type="Number">The current element opacity.</returns>

    },


    stroke: function(color,width,opacity) {
        /// <summary>
        /// Sets the shape stroke.
        /// </summary>
        /// <param name="color" type="String" >The stroke color to set.</param>
        /// <param name="width" type="Number" >The stroke width to set.</param>
        /// <param name="opacity" type="Number" >The stroke opacity to set.</param>
        /// <returns type="kendo.drawing.Arc">The current instance to allow chaining.</returns>

    },


    transform: function(transform) {
        /// <summary>
        /// Gets or sets the transformation of the element.
/// Inherited from Element.transform
        /// </summary>
        /// <param name="transform" type="kendo.geometry.Transformation" >The transformation to apply to the element.</param>
        /// <returns type="kendo.geometry.Transformation">The current transformation on the element.</returns>

    },


    visible: function(visible) {
        /// <summary>
        /// Gets or sets the visibility of the element.
/// Inherited from Element.visible
        /// </summary>
        /// <param name="visible" type="Boolean" >A flag indicating if the element should be visible.</param>
        /// <returns type="Boolean">true if the element is visible; false otherwise.</returns>

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

$.fn.getKendoArc = function() {
    /// <summary>
    /// Returns a reference to the kendo.drawing.Arc widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.drawing.Arc">The kendo.drawing.Arc instance (if present).</returns>
};

$.fn.kendoArc = function(options) {
    /// <summary>
    /// Instantiates a kendo.drawing.Arc widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;clip — kendo.drawing.Path 
    /// &#10;The element clipping path.
/// &#10;Inherited from Element.clip
    /// &#10;
    /// &#10;fill — kendo.drawing.FillOptions 
    /// &#10;The fill options of the shape.
    /// &#10;
    /// &#10;opacity — Number 
    /// &#10;The element opacity.
/// &#10;Inherited from Element.opacity
    /// &#10;
    /// &#10;stroke — kendo.drawing.StrokeOptions 
    /// &#10;The stroke options of the shape.
    /// &#10;
    /// &#10;transform — kendo.geometry.Transformation 
    /// &#10;The transformation to apply to this element.
/// &#10;Inherited from Element.transform
    /// &#10;
    /// &#10;visible — Boolean 
    /// &#10;A flag, indicating if the element is visible.
/// &#10;Inherited from Element.visible
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.drawing.Circle = function() { };

kendo.drawing.Circle.prototype = {




    bbox: function() {
        /// <summary>
        /// Returns the bounding box of the element with transformations applied.
/// Inherited from Element.bbox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with transformations applied.</returns>

    },


    clip: function(clip) {
        /// <summary>
        /// Gets or sets the element clipping path.
/// Inherited from Element.clip
        /// </summary>
        /// <param name="clip" type="kendo.drawing.Path" >The element clipping path.</param>
        /// <returns type="kendo.drawing.Path">The current element clipping path.</returns>

    },


    clippedBBox: function() {
        /// <summary>
        /// Returns the bounding box of the element with clipping and transformations applied.
/// Inherited from Element.clippedBBox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with clipping transformations applied.</returns>

    },


    geometry: function(value) {
        /// <summary>
        /// Gets or sets the circle geometry.
        /// </summary>
        /// <param name="value" type="kendo.geometry.Circle" >The new geometry to use.</param>
        /// <returns type="kendo.geometry.Circle">The current circle geometry.</returns>

    },


    fill: function(color,opacity) {
        /// <summary>
        /// Sets the shape fill.
        /// </summary>
        /// <param name="color" type="String" >The fill color to set.</param>
        /// <param name="opacity" type="Number" >The fill opacity to set.</param>
        /// <returns type="kendo.drawing.Circle">The current instance to allow chaining.</returns>

    },


    opacity: function(opacity) {
        /// <summary>
        /// Gets or sets the element opacity.
/// Inherited from Element.opacityIf set, the stroke and fill opacity will be multiplied by the element opacity.
        /// </summary>
        /// <param name="opacity" type="Number" >The element opacity. Ranges from 0 (completely transparent) to 1 (completely opaque).</param>
        /// <returns type="Number">The current element opacity.</returns>

    },


    stroke: function(color,width,opacity) {
        /// <summary>
        /// Sets the shape stroke.
        /// </summary>
        /// <param name="color" type="String" >The stroke color to set.</param>
        /// <param name="width" type="Number" >The stroke width to set.</param>
        /// <param name="opacity" type="Number" >The stroke opacity to set.</param>
        /// <returns type="kendo.drawing.Circle">The current instance to allow chaining.</returns>

    },


    transform: function(transform) {
        /// <summary>
        /// Gets or sets the transformation of the element.
/// Inherited from Element.transform
        /// </summary>
        /// <param name="transform" type="kendo.geometry.Transformation" >The transformation to apply to the element.</param>
        /// <returns type="kendo.geometry.Transformation">The current transformation on the element.</returns>

    },


    visible: function(visible) {
        /// <summary>
        /// Gets or sets the visibility of the element.
/// Inherited from Element.visible
        /// </summary>
        /// <param name="visible" type="Boolean" >A flag indicating if the element should be visible.</param>
        /// <returns type="Boolean">true if the element is visible; false otherwise.</returns>

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
    /// Returns a reference to the kendo.drawing.Circle widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.drawing.Circle">The kendo.drawing.Circle instance (if present).</returns>
};

$.fn.kendoCircle = function(options) {
    /// <summary>
    /// Instantiates a kendo.drawing.Circle widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;clip — kendo.drawing.Path 
    /// &#10;The element clipping path.
/// &#10;Inherited from Element.clip
    /// &#10;
    /// &#10;fill — kendo.drawing.FillOptions 
    /// &#10;The fill options of the shape.
    /// &#10;
    /// &#10;opacity — Number 
    /// &#10;The element opacity.
/// &#10;Inherited from Element.opacity
    /// &#10;
    /// &#10;stroke — kendo.drawing.StrokeOptions 
    /// &#10;The stroke options of the shape.
    /// &#10;
    /// &#10;transform — kendo.geometry.Transformation 
    /// &#10;The transformation to apply to this element.
/// &#10;Inherited from Element.transform
    /// &#10;
    /// &#10;visible — Boolean 
    /// &#10;A flag, indicating if the element is visible.
/// &#10;Inherited from Element.visible
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.drawing.Element = function() { };

kendo.drawing.Element.prototype = {




    bbox: function() {
        /// <summary>
        /// Returns the bounding box of the element with transformations applied.
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with transformations applied.</returns>

    },


    clip: function(clip) {
        /// <summary>
        /// Gets or sets the element clipping path.
        /// </summary>
        /// <param name="clip" type="kendo.drawing.Path" >The element clipping path.</param>
        /// <returns type="kendo.drawing.Path">The current element clipping path.</returns>

    },


    clippedBBox: function() {
        /// <summary>
        /// Returns the bounding box of the element with clipping and transformations applied.This is the rectangle that will fit around the actual rendered element.
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with clipping and transformations applied.</returns>

    },


    opacity: function(opacity) {
        /// <summary>
        /// Gets or sets the element opacity.
        /// </summary>
        /// <param name="opacity" type="Number" >The element opacity. Ranges from 0 (completely transparent) to 1 (completely opaque).</param>
        /// <returns type="Number">The current element opacity.</returns>

    },


    transform: function(transform) {
        /// <summary>
        /// Gets or sets the transformation of the element.
        /// </summary>
        /// <param name="transform" type="kendo.geometry.Transformation" >The transformation to apply to the element.</param>
        /// <returns type="kendo.geometry.Transformation">The current transformation on the element.</returns>

    },


    visible: function(visible) {
        /// <summary>
        /// Gets or sets the visibility of the element.
        /// </summary>
        /// <param name="visible" type="Boolean" >A flag indicating if the element should be visible.</param>
        /// <returns type="Boolean">true if the element is visible; false otherwise.</returns>

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

$.fn.getKendoElement = function() {
    /// <summary>
    /// Returns a reference to the kendo.drawing.Element widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.drawing.Element">The kendo.drawing.Element instance (if present).</returns>
};

$.fn.kendoElement = function(options) {
    /// <summary>
    /// Instantiates a kendo.drawing.Element widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;clip — kendo.drawing.Path 
    /// &#10;The clipping path for this element.The path instance will be monitored for changes.
/// &#10;It can be replaced by calling the clip method.
    /// &#10;
    /// &#10;opacity — Number 
    /// &#10;The element opacity.
    /// &#10;
    /// &#10;transform — kendo.geometry.Transformation 
    /// &#10;The transformation to apply to this element.
    /// &#10;
    /// &#10;visible — Boolean 
    /// &#10;A flag, indicating if the element is visible.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.drawing.FillOptions = function() { };

kendo.drawing.FillOptions.prototype = {



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

$.fn.getKendoFillOptions = function() {
    /// <summary>
    /// Returns a reference to the kendo.drawing.FillOptions widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.drawing.FillOptions">The kendo.drawing.FillOptions instance (if present).</returns>
};

$.fn.kendoFillOptions = function(options) {
    /// <summary>
    /// Instantiates a kendo.drawing.FillOptions widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.drawing.Gradient = function() { };

kendo.drawing.Gradient.prototype = {




    addStop: function(offset,color,opacity) {
        /// <summary>
        /// Adds a color stop to the gradient.
        /// </summary>
        /// <param name="offset" type="Number" >The stop offset from the start of the element. Ranges from 0 (start of gradient) to 1 (end of gradient).</param>
        /// <param name="color" type="String" >The color in any of the following formats.| Format         | Description | ---            | --- | --- | red            | Basic or Extended CSS Color name | #ff0000        | Hex RGB value | rgb(255, 0, 0) | RGB valueSpecifying 'none', 'transparent' or '' (empty string) will clear the fill.</param>
        /// <param name="opacity" type="Number" >The fill opacity. Ranges from 0 (completely transparent) to 1 (completely opaque).</param>
        /// <returns type="kendo.drawing.GradientStop">The new gradient color stop.</returns>

    },


    removeStop: function(stop) {
        /// <summary>
        /// Removes a color stop from the gradient.
        /// </summary>
        /// <param name="stop" type="kendo.drawing.GradientStop" >The gradient color stop to remove.</param>

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

$.fn.getKendoGradient = function() {
    /// <summary>
    /// Returns a reference to the kendo.drawing.Gradient widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.drawing.Gradient">The kendo.drawing.Gradient instance (if present).</returns>
};

$.fn.kendoGradient = function(options) {
    /// <summary>
    /// Instantiates a kendo.drawing.Gradient widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;stops — Array 
    /// &#10;The color stops of the gradient.
/// &#10;Can contain either plain objects or GradientStop instances.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.drawing.GradientStop = function() { };

kendo.drawing.GradientStop.prototype = {



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

$.fn.getKendoGradientStop = function() {
    /// <summary>
    /// Returns a reference to the kendo.drawing.GradientStop widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.drawing.GradientStop">The kendo.drawing.GradientStop instance (if present).</returns>
};

$.fn.kendoGradientStop = function(options) {
    /// <summary>
    /// Instantiates a kendo.drawing.GradientStop widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;offset — Number 
    /// &#10;The stop offset from the start of the element.
/// &#10;Ranges from 0 (start of gradient) to 1 (end of gradient).
    /// &#10;
    /// &#10;color — String 
    /// &#10;The color in any of the following formats.| Format         | Description
/// &#10;| ---            | --- | ---
/// &#10;| red            | Basic or Extended CSS Color name
/// &#10;| #ff0000        | Hex RGB value
/// &#10;| rgb(255, 0, 0) | RGB valueSpecifying 'none', 'transparent' or '' (empty string) will clear the fill.
    /// &#10;
    /// &#10;opacity — Number 
    /// &#10;The fill opacity.
/// &#10;Ranges from 0 (completely transparent) to 1 (completely opaque).
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.drawing.Group = function() { };

kendo.drawing.Group.prototype = {




    append: function(element) {
        /// <summary>
        /// Appends the specified element as a last child of the group.
        /// </summary>
        /// <param name="element" type="kendo.drawing.Element" >The element to append. Multiple parameters are accepted.</param>

    },


    clear: function() {
        /// <summary>
        /// Removes all child elements from the group.
        /// </summary>

    },


    clip: function(clip) {
        /// <summary>
        /// Gets or sets the group clipping path.
/// Inherited from Element.clip
        /// </summary>
        /// <param name="clip" type="kendo.drawing.Path" >The group clipping path.</param>
        /// <returns type="kendo.drawing.Path">The current group clipping path.</returns>

    },


    clippedBBox: function() {
        /// <summary>
        /// Returns the bounding box of the element with clipping and transformations applied.
/// Inherited from Element.clippedBBox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with clipping transformations applied.</returns>

    },


    insert: function(position,element) {
        /// <summary>
        /// Inserts an element at the specified position.
        /// </summary>
        /// <param name="position" type="Number" >The position to insert the element at. Existing children beyond this position will be shifted right.</param>
        /// <param name="element" type="kendo.drawing.Element" >The element to insert.</param>

    },


    opacity: function(opacity) {
        /// <summary>
        /// Gets or sets the group opacity.
/// Inherited from Element.opacityThe opacity of any child groups and elements will be multiplied by this value.
        /// </summary>
        /// <param name="opacity" type="Number" >The group opacity. Ranges from 0 (completely transparent) to 1 (completely opaque).</param>
        /// <returns type="Number">The current group opacity.</returns>

    },


    remove: function(element) {
        /// <summary>
        /// Removes the specified element from the group.
        /// </summary>
        /// <param name="element" type="kendo.drawing.Element" >The element to remove.</param>

    },


    removeAt: function(index) {
        /// <summary>
        /// Removes the child element at the specified position.
        /// </summary>
        /// <param name="index" type="Number" >The index at which the element currently resides.</param>

    },


    visible: function(visible) {
        /// <summary>
        /// Gets or sets the visibility of the element.
        /// </summary>
        /// <param name="visible" type="Boolean" >A flag indicating if the element should be visible.</param>
        /// <returns type="Boolean">true if the element is visible; false otherwise.</returns>

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
    /// Returns a reference to the kendo.drawing.Group widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.drawing.Group">The kendo.drawing.Group instance (if present).</returns>
};

$.fn.kendoGroup = function(options) {
    /// <summary>
    /// Instantiates a kendo.drawing.Group widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;clip — kendo.drawing.Path 
    /// &#10;The group clipping path.
/// &#10;Inherited from Element.clip
    /// &#10;
    /// &#10;opacity — Number 
    /// &#10;The group opacity.
/// &#10;Inherited from Element.opacityThe opacity of any child groups and elements will be multiplied by this value.
    /// &#10;
    /// &#10;pdf — kendo.drawing.PDFOptions 
    /// &#10;Page options to apply during PDF export.
    /// &#10;
    /// &#10;transform — kendo.geometry.Transformation 
    /// &#10;The transformation to apply to this group and its children.
/// &#10;Inherited from Element.transform
    /// &#10;
    /// &#10;visible — Boolean 
    /// &#10;A flag, indicating if the group and its children are visible.
/// &#10;Inherited from Element.visible
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.drawing.Image = function() { };

kendo.drawing.Image.prototype = {




    bbox: function() {
        /// <summary>
        /// Returns the bounding box of the element with transformations applied.
/// Inherited from Element.bbox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with transformations applied.</returns>

    },


    clip: function(clip) {
        /// <summary>
        /// Gets or sets the element clipping path.
/// Inherited from Element.clip
        /// </summary>
        /// <param name="clip" type="kendo.drawing.Path" >The element clipping path.</param>
        /// <returns type="kendo.drawing.Path">The current element clipping path.</returns>

    },


    clippedBBox: function() {
        /// <summary>
        /// Returns the bounding box of the element with clipping and transformations applied.
/// Inherited from Element.clippedBBox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with clipping transformations applied.</returns>

    },


    opacity: function(opacity) {
        /// <summary>
        /// Gets or sets the element opacity.
/// Inherited from Element.opacity
        /// </summary>
        /// <param name="opacity" type="Number" >The element opacity. Ranges from 0 (completely transparent) to 1 (completely opaque).</param>
        /// <returns type="Number">The current element opacity.</returns>

    },


    src: function(value) {
        /// <summary>
        /// Gets or sets the image source URL.
        /// </summary>
        /// <param name="value" type="String" >The new source URL.</param>
        /// <returns type="String">The current image source URL.</returns>

    },


    rect: function(value) {
        /// <summary>
        /// Gets or sets the rectangle defines the image position and size.
        /// </summary>
        /// <param name="value" type="kendo.geometry.Rect" >The new image rectangle.</param>
        /// <returns type="kendo.geometry.Rect">The current image rectangle.</returns>

    },


    transform: function(transform) {
        /// <summary>
        /// Gets or sets the transformation of the element.
/// Inherited from Element.transform
        /// </summary>
        /// <param name="transform" type="kendo.geometry.Transformation" >The transformation to apply to the element.</param>
        /// <returns type="kendo.geometry.Transformation">The current transformation on the element.</returns>

    },


    visible: function(visible) {
        /// <summary>
        /// Gets or sets the visibility of the element.
/// Inherited from Element.visible
        /// </summary>
        /// <param name="visible" type="Boolean" >A flag indicating if the element should be visible.</param>
        /// <returns type="Boolean">true if the element is visible; false otherwise.</returns>

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
    /// Returns a reference to the kendo.drawing.Image widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.drawing.Image">The kendo.drawing.Image instance (if present).</returns>
};

$.fn.kendoImage = function(options) {
    /// <summary>
    /// Instantiates a kendo.drawing.Image widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;clip — kendo.drawing.Path 
    /// &#10;The element clipping path.
/// &#10;Inherited from Element.clip
    /// &#10;
    /// &#10;opacity — Number 
    /// &#10;The element opacity.
/// &#10;Inherited from Element.opacity
    /// &#10;
    /// &#10;transform — kendo.geometry.Transformation 
    /// &#10;The transformation to apply to this element.
/// &#10;Inherited from Element.transform
    /// &#10;
    /// &#10;visible — Boolean 
    /// &#10;A flag, indicating if the element is visible.
/// &#10;Inherited from Element.visible
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.drawing.Layout = function() { };

kendo.drawing.Layout.prototype = {




    rect: function(rect) {
        /// <summary>
        /// Gets or sets the layout rectangle.
        /// </summary>
        /// <param name="rect" type="kendo.geometry.Rect" >The layout rectangle.</param>
        /// <returns type="kendo.geometry.Rect">The current rectangle.</returns>

    },


    reflow: function() {
        /// <summary>
        /// Arranges the elements based on the current options.
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

$.fn.getKendoLayout = function() {
    /// <summary>
    /// Returns a reference to the kendo.drawing.Layout widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.drawing.Layout">The kendo.drawing.Layout instance (if present).</returns>
};

$.fn.kendoLayout = function(options) {
    /// <summary>
    /// Instantiates a kendo.drawing.Layout widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;alignContent — String (default: "start")
    /// &#10;Specifies the alignment of the content.
    /// &#10;
    /// &#10;alignItems — String (default: "start")
    /// &#10;Specifies the alignment of the items based.
    /// &#10;
    /// &#10;justifyContent — String (default: "start")
    /// &#10;Specifies how should the content be justified.
    /// &#10;
    /// &#10;lineSpacing — Number (default: 0)
    /// &#10;Specifies the distance between the lines for wrapped layout.
    /// &#10;
    /// &#10;spacing — Number (default: 0)
    /// &#10;Specifies the distance between the elements.
    /// &#10;
    /// &#10;orientation — String (default: "horizontal")
    /// &#10;Specifies layout orientation. The supported values are:
    /// &#10;
    /// &#10;wrap — Boolean (default: true)
    /// &#10;Specifies the behavior when the elements size exceeds the rectangle size. If set to true, the elements will be moved to the next "line". If set to false, the layout will be scaled so that the elements fit in the rectangle.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.drawing.LinearGradient = function() { };

kendo.drawing.LinearGradient.prototype = {




    addStop: function(offset,color,opacity) {
        /// <summary>
        /// Adds a color stop to the gradient.
/// Inherited from Gradient.addStop
        /// </summary>
        /// <param name="offset" type="Number" ></param>
        /// <param name="color" type="String" >The color of the stop.</param>
        /// <param name="opacity" type="Number" >The fill opacity.</param>
        /// <returns type="kendo.drawing.GradientStop">The new gradient color stop.</returns>

    },


    end: function(end) {
        /// <summary>
        /// Gets or sets the end point of the gradient.
        /// </summary>
        /// <param name="end" type="Object" >The end point of the gradient.Coordinates are relative to the shape bounding box. For example [0, 0] is top left and [1, 1] is bottom right.</param>
        /// <returns type="kendo.geometry.Point">The current end point of the gradient.</returns>

    },


    start: function(start) {
        /// <summary>
        /// Gets or sets the start point of the gradient.
        /// </summary>
        /// <param name="start" type="Object" >The start point of the gradient.Coordinates are relative to the shape bounding box. For example [0, 0] is top left and [1, 1] is bottom right.</param>
        /// <returns type="kendo.geometry.Point">The current start point of the gradient.</returns>

    },


    removeStop: function(stop) {
        /// <summary>
        /// Removes a color stop from the gradient.
/// Inherited from Gradient.removeStop
        /// </summary>
        /// <param name="stop" type="kendo.drawing.GradientStop" >The gradient color stop to remove.</param>

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

$.fn.getKendoLinearGradient = function() {
    /// <summary>
    /// Returns a reference to the kendo.drawing.LinearGradient widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.drawing.LinearGradient">The kendo.drawing.LinearGradient instance (if present).</returns>
};

$.fn.kendoLinearGradient = function(options) {
    /// <summary>
    /// Instantiates a kendo.drawing.LinearGradient widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;stops — Array 
    /// &#10;The color stops of the gradient.
/// &#10;Can contain either plain objects or GradientStop instances.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.drawing.MultiPath = function() { };

kendo.drawing.MultiPath.prototype = {




    bbox: function() {
        /// <summary>
        /// Returns the bounding box of the element with transformations applied.
/// Inherited from Element.bbox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with transformations applied.</returns>

    },


    clip: function(clip) {
        /// <summary>
        /// Gets or sets the element clipping path.
/// Inherited from Element.clip
        /// </summary>
        /// <param name="clip" type="kendo.drawing.Path" >The element clipping path.</param>
        /// <returns type="kendo.drawing.Path">The current element clipping path.</returns>

    },


    clippedBBox: function() {
        /// <summary>
        /// Returns the bounding box of the element with clipping and transformations applied.
/// Inherited from Element.clippedBBox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with clipping transformations applied.</returns>

    },


    close: function() {
        /// <summary>
        /// Closes the current sub-path by linking its current end point with its start point.
        /// </summary>
        /// <returns type="kendo.drawing.MultiPath">The current instance to allow chaining.</returns>

    },


    curveTo: function(controlOut,controlIn) {
        /// <summary>
        /// Draws a cubic Bézier curve (with two control points).A quadratic Bézier curve (with one control point) can be plotted by making the control point equal.
        /// </summary>
        /// <param name="controlOut" type="Object" >The first control point for the curve.</param>
        /// <param name="controlIn" type="Object" >The second control point for the curve.</param>
        /// <returns type="kendo.drawing.MultiPath">The current instance to allow chaining.</returns>

    },


    fill: function(color,opacity) {
        /// <summary>
        /// Sets the shape fill.
        /// </summary>
        /// <param name="color" type="String" >The fill color to set.</param>
        /// <param name="opacity" type="Number" >The fill opacity to set.</param>
        /// <returns type="kendo.drawing.MultiPath">The current instance to allow chaining.</returns>

    },


    lineTo: function(x,y) {
        /// <summary>
        /// Draws a straight line to the specified absolute coordinates.
        /// </summary>
        /// <param name="x" type="Object" >The line end X coordinate or a Point/Array with X and Y coordinates.</param>
        /// <param name="y" type="Number" >The line end Y coordinate.Optional if the first parameter is a Point/Array.</param>
        /// <returns type="kendo.drawing.MultiPath">The current instance to allow chaining.</returns>

    },


    moveTo: function(x,y) {
        /// <summary>
        /// Creates a new sub-path or clears all segments and moves the starting point to the specified absolute coordinates.
        /// </summary>
        /// <param name="x" type="Object" >The starting X coordinate or a Point/Array with X and Y coordinates.</param>
        /// <param name="y" type="Number" >The starting Y coordinate.Optional if the first parameter is a Point/Array.</param>
        /// <returns type="kendo.drawing.MultiPath">The current instance to allow chaining.</returns>

    },


    opacity: function(opacity) {
        /// <summary>
        /// Gets or sets the element opacity.
/// Inherited from Element.opacityIf set, the stroke and fill opacity will be multiplied by the element opacity.
        /// </summary>
        /// <param name="opacity" type="Number" >The element opacity. Ranges from 0 (completely transparent) to 1 (completely opaque).</param>
        /// <returns type="Number">The current element opacity.</returns>

    },


    stroke: function(color,width,opacity) {
        /// <summary>
        /// Sets the shape stroke.
        /// </summary>
        /// <param name="color" type="String" >The stroke color to set.</param>
        /// <param name="width" type="Number" >The stroke width to set.</param>
        /// <param name="opacity" type="Number" >The stroke opacity to set.</param>
        /// <returns type="kendo.drawing.MultiPath">The current instance to allow chaining.</returns>

    },


    transform: function(transform) {
        /// <summary>
        /// Gets or sets the transformation of the element.
/// Inherited from Element.transform
        /// </summary>
        /// <param name="transform" type="kendo.geometry.Transformation" >The transformation to apply to the element.</param>
        /// <returns type="kendo.geometry.Transformation">The current transformation on the element.</returns>

    },


    visible: function(visible) {
        /// <summary>
        /// Gets or sets the visibility of the element.
/// Inherited from Element.visible
        /// </summary>
        /// <param name="visible" type="Boolean" >A flag indicating if the element should be visible.</param>
        /// <returns type="Boolean">true if the element is visible; false otherwise.</returns>

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

$.fn.getKendoMultiPath = function() {
    /// <summary>
    /// Returns a reference to the kendo.drawing.MultiPath widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.drawing.MultiPath">The kendo.drawing.MultiPath instance (if present).</returns>
};

$.fn.kendoMultiPath = function(options) {
    /// <summary>
    /// Instantiates a kendo.drawing.MultiPath widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;clip — kendo.drawing.Path 
    /// &#10;The element clipping path.
/// &#10;Inherited from Element.clip
    /// &#10;
    /// &#10;fill — kendo.drawing.FillOptions 
    /// &#10;The fill options of the shape.
    /// &#10;
    /// &#10;opacity — Number 
    /// &#10;The element opacity.
/// &#10;Inherited from Element.opacity
    /// &#10;
    /// &#10;stroke — kendo.drawing.StrokeOptions 
    /// &#10;The stroke options of the shape.
    /// &#10;
    /// &#10;transform — kendo.geometry.Transformation 
    /// &#10;The transformation to apply to this element.
/// &#10;Inherited from Element.transform
    /// &#10;
    /// &#10;visible — Boolean 
    /// &#10;A flag, indicating if the element is visible.
/// &#10;Inherited from Element.visible
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.drawing.OptionsStore = function() { };

kendo.drawing.OptionsStore.prototype = {




    get: function(field) {
        /// <summary>
        /// Gets the value of the specified option.
        /// </summary>
        /// <param name="field" type="String" >The field name to retrieve. Must be a fully qualified name (e.g. "foo.bar") for nested options.</param>
        /// <returns type="Object">The current option value.</returns>

    },


    set: function(field,value) {
        /// <summary>
        /// Sets the value of the specified option.
        /// </summary>
        /// <param name="field" type="String" >The name of the option to set. Must be a fully qualified name (e.g. "foo.bar") for nested options.</param>
        /// <param name="value" type="Object" >The new option value.If the new value is exactly the same as the new value the operation will not trigger options change on the observer (if any).</param>

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

$.fn.getKendoOptionsStore = function() {
    /// <summary>
    /// Returns a reference to the kendo.drawing.OptionsStore widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.drawing.OptionsStore">The kendo.drawing.OptionsStore instance (if present).</returns>
};

$.fn.kendoOptionsStore = function(options) {
    /// <summary>
    /// Instantiates a kendo.drawing.OptionsStore widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.drawing.PDFOptions = function() { };

kendo.drawing.PDFOptions.prototype = {



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

$.fn.getKendoPDFOptions = function() {
    /// <summary>
    /// Returns a reference to the kendo.drawing.PDFOptions widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.drawing.PDFOptions">The kendo.drawing.PDFOptions instance (if present).</returns>
};

$.fn.kendoPDFOptions = function(options) {
    /// <summary>
    /// Instantiates a kendo.drawing.PDFOptions widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.drawing.Path = function() { };

kendo.drawing.Path.prototype = {




    bbox: function() {
        /// <summary>
        /// Returns the bounding box of the element with transformations applied.
/// Inherited from Element.bbox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with transformations applied.</returns>

    },


    clip: function(clip) {
        /// <summary>
        /// Gets or sets the element clipping path.
/// Inherited from Element.clip
        /// </summary>
        /// <param name="clip" type="kendo.drawing.Path" >The element clipping path.</param>
        /// <returns type="kendo.drawing.Path">The current element clipping path.</returns>

    },


    clippedBBox: function() {
        /// <summary>
        /// Returns the bounding box of the element with clipping and transformations applied.
/// Inherited from Element.clippedBBox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with clipping transformations applied.</returns>

    },


    close: function() {
        /// <summary>
        /// Closes the path by linking the current end point with the start point.
        /// </summary>
        /// <returns type="kendo.drawing.Path">The current instance to allow chaining.</returns>

    },


    curveTo: function(controlOut,controlIn) {
        /// <summary>
        /// Draws a cubic Bézier curve (with two control points).A quadratic Bézier curve (with one control point) can be plotted by making the control point equal.
        /// </summary>
        /// <param name="controlOut" type="Object" >The first control point for the curve.</param>
        /// <param name="controlIn" type="Object" >The second control point for the curve.</param>
        /// <returns type="kendo.drawing.Path">The current instance to allow chaining.</returns>

    },


    fill: function(color,opacity) {
        /// <summary>
        /// Sets the shape fill.
        /// </summary>
        /// <param name="color" type="String" >The fill color to set.</param>
        /// <param name="opacity" type="Number" >The fill opacity to set.</param>
        /// <returns type="kendo.drawing.Path">The current instance to allow chaining.</returns>

    },


    lineTo: function(x,y) {
        /// <summary>
        /// Draws a straight line to the specified absolute coordinates.
        /// </summary>
        /// <param name="x" type="Object" >The line end X coordinate or a Point/Array with X and Y coordinates.</param>
        /// <param name="y" type="Number" >The line end Y coordinate.Optional if the first parameter is a Point/Array.</param>
        /// <returns type="kendo.drawing.Path">The current instance to allow chaining.</returns>

    },


    moveTo: function(x,y) {
        /// <summary>
        /// Clears all existing segments and moves the starting point to the specified absolute coordinates.
        /// </summary>
        /// <param name="x" type="Object" >The starting X coordinate or a Point/Array with X and Y coordinates.</param>
        /// <param name="y" type="Number" >The starting Y coordinate.Optional if the first parameter is a Point/Array.</param>
        /// <returns type="kendo.drawing.Path">The current instance to allow chaining.</returns>

    },


    opacity: function(opacity) {
        /// <summary>
        /// Gets or sets the element opacity.
/// Inherited from Element.opacityIf set, the stroke and fill opacity will be multiplied by the element opacity.
        /// </summary>
        /// <param name="opacity" type="Number" >The element opacity. Ranges from 0 (completely transparent) to 1 (completely opaque).</param>
        /// <returns type="Number">The current element opacity.</returns>

    },


    stroke: function(color,width,opacity) {
        /// <summary>
        /// Sets the shape stroke.
        /// </summary>
        /// <param name="color" type="String" >The stroke color to set.</param>
        /// <param name="width" type="Number" >The stroke width to set.</param>
        /// <param name="opacity" type="Number" >The stroke opacity to set.</param>
        /// <returns type="kendo.drawing.Path">The current instance to allow chaining.</returns>

    },


    transform: function(transform) {
        /// <summary>
        /// Gets or sets the transformation of the element.
/// Inherited from Element.transform
        /// </summary>
        /// <param name="transform" type="kendo.geometry.Transformation" >The transformation to apply to the element.</param>
        /// <returns type="kendo.geometry.Transformation">The current transformation on the element.</returns>

    },


    visible: function(visible) {
        /// <summary>
        /// Gets or sets the visibility of the element.
/// Inherited from Element.visible
        /// </summary>
        /// <param name="visible" type="Boolean" >A flag indicating if the element should be visible.</param>
        /// <returns type="Boolean">true if the element is visible; false otherwise.</returns>

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

$.fn.getKendoPath = function() {
    /// <summary>
    /// Returns a reference to the kendo.drawing.Path widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.drawing.Path">The kendo.drawing.Path instance (if present).</returns>
};

$.fn.kendoPath = function(options) {
    /// <summary>
    /// Instantiates a kendo.drawing.Path widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;clip — kendo.drawing.Path 
    /// &#10;The element clipping path.
/// &#10;Inherited from Element.clip
    /// &#10;
    /// &#10;fill — kendo.drawing.FillOptions 
    /// &#10;The fill options of the shape.
    /// &#10;
    /// &#10;opacity — Number 
    /// &#10;The element opacity.
/// &#10;Inherited from Element.opacity
    /// &#10;
    /// &#10;stroke — kendo.drawing.StrokeOptions 
    /// &#10;The stroke options of the shape.
    /// &#10;
    /// &#10;transform — kendo.geometry.Transformation 
    /// &#10;The transformation to apply to this element.
/// &#10;Inherited from Element.transform
    /// &#10;
    /// &#10;visible — Boolean 
    /// &#10;A flag, indicating if the element is visible.
/// &#10;Inherited from Element.visible
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.drawing.RadialGradient = function() { };

kendo.drawing.RadialGradient.prototype = {




    addStop: function(offset,color,opacity) {
        /// <summary>
        /// Adds a color stop to the gradient.
/// Inherited from Gradient.addStop
        /// </summary>
        /// <param name="offset" type="Number" ></param>
        /// <param name="color" type="String" >The color of the stop.</param>
        /// <param name="opacity" type="Number" >The fill opacity.</param>
        /// <returns type="kendo.drawing.GradientStop">The new gradient color stop.</returns>

    },


    center: function(center) {
        /// <summary>
        /// Gets or sets the center point of the gradient.
        /// </summary>
        /// <param name="center" type="Object" >The center point of the gradient.Coordinates are relative to the shape bounding box. For example [0, 0] is top left and [1, 1] is bottom right.</param>
        /// <returns type="kendo.geometry.Point">The current radius of the gradient.</returns>

    },


    radius: function(value) {
        /// <summary>
        /// Gets or sets the radius of the gradient.
        /// </summary>
        /// <param name="value" type="Number" >The new radius of the gradient.</param>
        /// <returns type="Number">The current radius of the gradient.</returns>

    },


    removeStop: function(stop) {
        /// <summary>
        /// Removes a color stop from the gradient.
/// Inherited from Gradient.removeStop
        /// </summary>
        /// <param name="stop" type="kendo.drawing.GradientStop" >The gradient color stop to remove.</param>

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

$.fn.getKendoRadialGradient = function() {
    /// <summary>
    /// Returns a reference to the kendo.drawing.RadialGradient widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.drawing.RadialGradient">The kendo.drawing.RadialGradient instance (if present).</returns>
};

$.fn.kendoRadialGradient = function(options) {
    /// <summary>
    /// Instantiates a kendo.drawing.RadialGradient widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;center — Array|kendo.geometry.Point 
    /// &#10;The center of the gradient.Coordinates are relative to the shape bounding box.
/// &#10;For example [0, 0] is top left and [1, 1] is bottom right.
    /// &#10;
    /// &#10;radius — Number (default: 1)
    /// &#10;The radius of the radial gradient relative to the shape bounding box.
    /// &#10;
    /// &#10;stops — Array 
    /// &#10;The color stops of the gradient.
/// &#10;Can contain either plain objects or GradientStop instances.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.drawing.Rect = function() { };

kendo.drawing.Rect.prototype = {




    bbox: function() {
        /// <summary>
        /// Returns the bounding box of the element with transformations applied.
/// Inherited from Element.bbox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with transformations applied.</returns>

    },


    clip: function(clip) {
        /// <summary>
        /// Gets or sets the element clipping path.
/// Inherited from Element.clip
        /// </summary>
        /// <param name="clip" type="kendo.drawing.Path" >The element clipping path.</param>
        /// <returns type="kendo.drawing.Path">The current element clipping path.</returns>

    },


    clippedBBox: function() {
        /// <summary>
        /// Returns the bounding box of the element with clipping and transformations applied.
/// Inherited from Element.clippedBBox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with clipping transformations applied.</returns>

    },


    geometry: function(value) {
        /// <summary>
        /// Gets or sets the rectangle geometry.
        /// </summary>
        /// <param name="value" type="kendo.geometry.Rect" >The new geometry to use.</param>
        /// <returns type="kendo.geometry.Rect">The current rectangle geometry.</returns>

    },


    fill: function(color,opacity) {
        /// <summary>
        /// Sets the shape fill.
        /// </summary>
        /// <param name="color" type="String" >The fill color to set.</param>
        /// <param name="opacity" type="Number" >The fill opacity to set.</param>
        /// <returns type="kendo.drawing.Rect">The current instance to allow chaining.</returns>

    },


    opacity: function(opacity) {
        /// <summary>
        /// Gets or sets the element opacity.
/// Inherited from Element.opacityIf set, the stroke and fill opacity will be multiplied by the element opacity.
        /// </summary>
        /// <param name="opacity" type="Number" >The element opacity. Ranges from 0 (completely transparent) to 1 (completely opaque).</param>
        /// <returns type="Number">The current element opacity.</returns>

    },


    stroke: function(color,width,opacity) {
        /// <summary>
        /// Sets the shape stroke.
        /// </summary>
        /// <param name="color" type="String" >The stroke color to set.</param>
        /// <param name="width" type="Number" >The stroke width to set.</param>
        /// <param name="opacity" type="Number" >The stroke opacity to set.</param>
        /// <returns type="kendo.drawing.Rect">The current instance to allow chaining.</returns>

    },


    transform: function(transform) {
        /// <summary>
        /// Gets or sets the transformation of the element.
/// Inherited from Element.transform
        /// </summary>
        /// <param name="transform" type="kendo.geometry.Transformation" >The transformation to apply to the element.</param>
        /// <returns type="kendo.geometry.Transformation">The current transformation on the element.</returns>

    },


    visible: function(visible) {
        /// <summary>
        /// Gets or sets the visibility of the element.
/// Inherited from Element.visible
        /// </summary>
        /// <param name="visible" type="Boolean" >A flag indicating if the element should be visible.</param>
        /// <returns type="Boolean">true if the element is visible; false otherwise.</returns>

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

$.fn.getKendoRect = function() {
    /// <summary>
    /// Returns a reference to the kendo.drawing.Rect widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.drawing.Rect">The kendo.drawing.Rect instance (if present).</returns>
};

$.fn.kendoRect = function(options) {
    /// <summary>
    /// Instantiates a kendo.drawing.Rect widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;clip — kendo.drawing.Path 
    /// &#10;The element clipping path.
/// &#10;Inherited from Element.clip
    /// &#10;
    /// &#10;fill — kendo.drawing.FillOptions 
    /// &#10;The fill options of the shape.
    /// &#10;
    /// &#10;opacity — Number 
    /// &#10;The element opacity.
/// &#10;Inherited from Element.opacity
    /// &#10;
    /// &#10;stroke — kendo.drawing.StrokeOptions 
    /// &#10;The stroke options of the shape.
    /// &#10;
    /// &#10;transform — kendo.geometry.Transformation 
    /// &#10;The transformation to apply to this element.
/// &#10;Inherited from Element.transform
    /// &#10;
    /// &#10;visible — Boolean 
    /// &#10;A flag, indicating if the element is visible.
/// &#10;Inherited from Element.visible
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.drawing.Segment = function() { };

kendo.drawing.Segment.prototype = {




    anchor: function(value) {
        /// <summary>
        /// Gets or sets the segment anchor point.The setter returns the current Segment to allow chaining.
        /// </summary>
        /// <param name="value" type="kendo.geometry.Point" >The new anchor point.</param>
        /// <returns type="kendo.geometry.Point">The current anchor point.</returns>

    },


    controlIn: function(value) {
        /// <summary>
        /// Gets or sets the first curve control point of this segment.The setter returns the current Segment to allow chaining.
        /// </summary>
        /// <param name="value" type="kendo.geometry.Point" >The new control point.</param>
        /// <returns type="kendo.geometry.Point">The current control point.</returns>

    },


    controlOut: function(value) {
        /// <summary>
        /// Gets or sets the second curve control point of this segment.The setter returns the current Segment to allow chaining.
        /// </summary>
        /// <param name="value" type="kendo.geometry.Point" >The new control point.</param>
        /// <returns type="kendo.geometry.Point">The current control point.</returns>

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

$.fn.getKendoSegment = function() {
    /// <summary>
    /// Returns a reference to the kendo.drawing.Segment widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.drawing.Segment">The kendo.drawing.Segment instance (if present).</returns>
};

$.fn.kendoSegment = function(options) {
    /// <summary>
    /// Instantiates a kendo.drawing.Segment widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.drawing.StrokeOptions = function() { };

kendo.drawing.StrokeOptions.prototype = {



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

$.fn.getKendoStrokeOptions = function() {
    /// <summary>
    /// Returns a reference to the kendo.drawing.StrokeOptions widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.drawing.StrokeOptions">The kendo.drawing.StrokeOptions instance (if present).</returns>
};

$.fn.kendoStrokeOptions = function(options) {
    /// <summary>
    /// Instantiates a kendo.drawing.StrokeOptions widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.drawing.Surface = function() { };

kendo.drawing.Surface.prototype = {




    clear: function() {
        /// <summary>
        /// Clears the drawing surface.
        /// </summary>

    },


    draw: function(element) {
        /// <summary>
        /// Draws the element and its children on the surface.
/// Existing elements will remain visible.
        /// </summary>
        /// <param name="element" type="kendo.drawing.Element" >The element to draw.</param>

    },


    eventTarget: function(e) {
        /// <summary>
        /// Returns the target drawing element of a DOM event.
        /// </summary>
        /// <param name="e" type="Object" >The original DOM or jQuery event object.</param>
        /// <returns type="kendo.drawing.Element">The target drawing element, if any.</returns>

    },


    resize: function(force) {
        /// <summary>
        /// Resizes the surface to match the size of the container.
        /// </summary>
        /// <param name="force" type="Boolean" >Whether to proceed with resizing even if the container dimensions have not changed.</param>

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

$.fn.getKendoSurface = function() {
    /// <summary>
    /// Returns a reference to the kendo.drawing.Surface widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.drawing.Surface">The kendo.drawing.Surface instance (if present).</returns>
};

$.fn.kendoSurface = function(options) {
    /// <summary>
    /// Instantiates a kendo.drawing.Surface widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;type — String 
    /// &#10;The preferred type of surface to create.
/// &#10;Supported types (case insensitive):
/// &#10;- svg
/// &#10;- canvas
/// &#10;- vmlThis option will be ignored if not supported by the browser.
/// &#10;See Supported Browsers
    /// &#10;
    /// &#10;height — String (default: "100%")
    /// &#10;The height of the surface element.
/// &#10;By default the surface will expand to fill the height of the first positioned container.
    /// &#10;
    /// &#10;width — String (default: "100%")
    /// &#10;The width of the surface element.
/// &#10;By default the surface will expand to fill the width of the first positioned container.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.drawing.Text = function() { };

kendo.drawing.Text.prototype = {




    bbox: function() {
        /// <summary>
        /// Returns the bounding box of the element with transformations applied.
/// Inherited from Element.bbox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with transformations applied.</returns>

    },


    clip: function(clip) {
        /// <summary>
        /// Gets or sets the element clipping path.
/// Inherited from Element.clip
        /// </summary>
        /// <param name="clip" type="kendo.drawing.Path" >The element clipping path.</param>
        /// <returns type="kendo.drawing.Path">The current element clipping path.</returns>

    },


    clippedBBox: function() {
        /// <summary>
        /// Returns the bounding box of the element with clipping and transformations applied.
/// Inherited from Element.clippedBBox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with clipping transformations applied.</returns>

    },


    content: function(value) {
        /// <summary>
        /// Gets or sets the text content.
        /// </summary>
        /// <param name="value" type="String" >The new text content to set.</param>
        /// <returns type="String">The current content of the text.</returns>

    },


    fill: function(color,opacity) {
        /// <summary>
        /// Sets the text fill.
        /// </summary>
        /// <param name="color" type="String" >The fill color to set.</param>
        /// <param name="opacity" type="Number" >The fill opacity to set.</param>
        /// <returns type="kendo.drawing.Text">The current instance to allow chaining.</returns>

    },


    opacity: function(opacity) {
        /// <summary>
        /// Gets or sets the element opacity.
/// Inherited from Element.opacityIf set, the stroke and fill opacity will be multiplied by the element opacity.
        /// </summary>
        /// <param name="opacity" type="Number" >The element opacity. Ranges from 0 (completely transparent) to 1 (completely opaque).</param>
        /// <returns type="Number">The current element opacity.</returns>

    },


    position: function(value) {
        /// <summary>
        /// Gets or sets the position of the text upper left corner.
        /// </summary>
        /// <param name="value" type="kendo.geometry.Point" >The new position of the text upper left corner.</param>
        /// <returns type="kendo.geometry.Point">The current position of the text upper left corner.</returns>

    },


    stroke: function(color,width,opacity) {
        /// <summary>
        /// Sets the text stroke.
        /// </summary>
        /// <param name="color" type="String" >The stroke color to set.</param>
        /// <param name="width" type="Number" >The stroke width to set.</param>
        /// <param name="opacity" type="Number" >The stroke opacity to set.</param>
        /// <returns type="kendo.drawing.Text">The current instance to allow chaining.</returns>

    },


    transform: function(transform) {
        /// <summary>
        /// Gets or sets the transformation of the element.
/// Inherited from Element.transform
        /// </summary>
        /// <param name="transform" type="kendo.geometry.Transformation" >The transformation to apply to the element.</param>
        /// <returns type="kendo.geometry.Transformation">The current transformation on the element.</returns>

    },


    visible: function(visible) {
        /// <summary>
        /// Gets or sets the visibility of the element.
/// Inherited from Element.visible
        /// </summary>
        /// <param name="visible" type="Boolean" >A flag indicating if the element should be visible.</param>
        /// <returns type="Boolean">true if the element is visible; false otherwise.</returns>

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

$.fn.getKendoText = function() {
    /// <summary>
    /// Returns a reference to the kendo.drawing.Text widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.drawing.Text">The kendo.drawing.Text instance (if present).</returns>
};

$.fn.kendoText = function(options) {
    /// <summary>
    /// Instantiates a kendo.drawing.Text widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;clip — kendo.drawing.Path 
    /// &#10;The element clipping path.
/// &#10;Inherited from Element.clip
    /// &#10;
    /// &#10;fill — kendo.drawing.FillOptions 
    /// &#10;The fill options of the text.
    /// &#10;
    /// &#10;font — String 
    /// &#10;The font to use for rendering the text.
/// &#10;Accepts the standard CSS font syntax.Examples of valid font values:
/// &#10;* Size and family: "2em 'Open Sans', sans-serif"
/// &#10;* Style, size and family: "italic 2em 'Open Sans', sans-serif"
    /// &#10;
    /// &#10;opacity — Number 
    /// &#10;The element opacity.
/// &#10;Inherited from Element.opacity
    /// &#10;
    /// &#10;stroke — kendo.drawing.StrokeOptions 
    /// &#10;The stroke options of the text.
    /// &#10;
    /// &#10;transform — kendo.geometry.Transformation 
    /// &#10;The transformation to apply to this element.
/// &#10;Inherited from Element.transform
    /// &#10;
    /// &#10;visible — Boolean 
    /// &#10;A flag, indicating if the element is visible.
/// &#10;Inherited from Element.visible
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


if (!kendo.effects) {
    kendo.effects = {};
}

kendo.geometry.Arc = function() { };

kendo.geometry.Arc.prototype = {




    bbox: function(matrix) {
        /// <summary>
        /// Returns the bounding box of this arc after applying the specified transformation matrix.
        /// </summary>
        /// <param name="matrix" type="kendo.geometry.Matrix" >Transformation matrix to apply.</param>
        /// <returns type="kendo.geometry.Rect">The bounding box after applying the transformation matrix.</returns>

    },


    getAnticlockwise: function() {
        /// <summary>
        /// Gets the arc anticlokwise flag.
        /// </summary>
        /// <returns type="Boolean">The anticlokwise flag of the arc.</returns>

    },


    getCenter: function() {
        /// <summary>
        /// Gets the arc center location.
        /// </summary>
        /// <returns type="kendo.geometry.Point">The location of the arc center.</returns>

    },


    getEndAngle: function() {
        /// <summary>
        /// Gets the end angle of the arc in decimal degrees.
/// Measured in clockwise direction with 0 pointing "right".
        /// </summary>
        /// <returns type="Number">The end angle of the arc.</returns>

    },


    getRadiusX: function() {
        /// <summary>
        /// Gets the x radius of the arc.
        /// </summary>
        /// <returns type="Number">The x radius of the arc.</returns>

    },


    getRadiusY: function() {
        /// <summary>
        /// Gets the y radius of the arc.
        /// </summary>
        /// <returns type="Number">The y radius of the arc.</returns>

    },


    getStartAngle: function() {
        /// <summary>
        /// Gets the start angle of the arc in decimal degrees.
/// Measured in clockwise direction with 0 pointing "right".
        /// </summary>
        /// <returns type="Number">The start angle of the arc.</returns>

    },


    pointAt: function(angle) {
        /// <summary>
        /// Gets the location of a point on the arc's circumference at a given angle.
        /// </summary>
        /// <param name="angle" type="Number" >Angle in decimal degrees. Measured in clockwise direction with 0 pointing "right". Negative values or values greater than 360 will be normalized.</param>
        /// <returns type="kendo.geometry.Point">The point on the arc's circumference.</returns>

    },


    setAnticlockwise: function(value) {
        /// <summary>
        /// Sets the arc anticlokwise flag.
        /// </summary>
        /// <param name="value" type="Boolean" >The new anticlockwise value.</param>
        /// <returns type="kendo.geometry.Arc">The current arc instance.</returns>

    },


    setCenter: function(value) {
        /// <summary>
        /// Sets the arc center location.
        /// </summary>
        /// <param name="value" type="kendo.geometry.Point" >The new arc center.</param>
        /// <returns type="kendo.geometry.Arc">The current arc instance.</returns>

    },


    setEndAngle: function(value) {
        /// <summary>
        /// Sets the end angle of the arc in decimal degrees.
/// Measured in clockwise direction with 0 pointing "right".
        /// </summary>
        /// <param name="value" type="Number" >The new arc end angle.</param>
        /// <returns type="kendo.geometry.Arc">The current arc instance.</returns>

    },


    setRadiusX: function(value) {
        /// <summary>
        /// Sets the x radius of the arc.
        /// </summary>
        /// <param name="value" type="Number" >The new arc x radius.</param>
        /// <returns type="kendo.geometry.Arc">The current arc instance.</returns>

    },


    setRadiusY: function(value) {
        /// <summary>
        /// Sets the y radius of the arc.
        /// </summary>
        /// <param name="value" type="Number" >The new arc y radius.</param>
        /// <returns type="kendo.geometry.Arc">The current arc instance.</returns>

    },


    setStartAngle: function(value) {
        /// <summary>
        /// Sets the start angle of the arc in decimal degrees.
/// Measured in clockwise direction with 0 pointing "right".
        /// </summary>
        /// <param name="value" type="Number" >The new arc atart angle.</param>
        /// <returns type="kendo.geometry.Arc">The current arc instance.</returns>

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

$.fn.getKendoArc = function() {
    /// <summary>
    /// Returns a reference to the kendo.geometry.Arc widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.geometry.Arc">The kendo.geometry.Arc instance (if present).</returns>
};

$.fn.kendoArc = function(options) {
    /// <summary>
    /// Instantiates a kendo.geometry.Arc widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.geometry.Circle = function() { };

kendo.geometry.Circle.prototype = {




    bbox: function(matrix) {
        /// <summary>
        /// Returns the bounding box of this circle after applying the
/// specified transformation matrix.
        /// </summary>
        /// <param name="matrix" type="kendo.geometry.Matrix" >Transformation matrix to apply.</param>
        /// <returns type="kendo.geometry.Rect">The bounding box after applying the transformation matrix.</returns>

    },


    clone: function() {
        /// <summary>
        /// Creates a new instance with the same center and radius.
        /// </summary>
        /// <returns type="kendo.geometry.Circle">A new Circle instance with the same center and radius.</returns>

    },


    equals: function(other) {
        /// <summary>
        /// Compares this circle with another instance.
        /// </summary>
        /// <param name="other" type="kendo.geometry.Circle" >The circle to compare with.</param>
        /// <returns type="Boolean">true if the point coordinates match; false otherwise.</returns>

    },


    getCenter: function() {
        /// <summary>
        /// Gets the circle center location.
        /// </summary>
        /// <returns type="kendo.geometry.Point">The location of the circle center.</returns>

    },


    getRadius: function() {
        /// <summary>
        /// Gets the circle radius.
        /// </summary>
        /// <returns type="Number">The radius of the circle.</returns>

    },


    pointAt: function(angle) {
        /// <summary>
        /// Gets the location of a point on the circle's circumference at a given angle.
        /// </summary>
        /// <param name="angle" type="Number" >Angle in decimal degrees. Measured in clockwise direction with 0 pointing "right". Negative values or values greater than 360 will be normalized.</param>
        /// <returns type="kendo.geometry.Point">The point on the circle's circumference.</returns>

    },


    setCenter: function(value) {
        /// <summary>
        /// Sets the location of the circle center.
        /// </summary>
        /// <param name="value" type="Object" >The new center Point or equivalent [x, y] array.</param>
        /// <returns type="kendo.geometry.Point">The location of the circle center.</returns>

    },


    setRadius: function(value) {
        /// <summary>
        /// Sets the circle radius.
        /// </summary>
        /// <param name="value" type="Number" >The new circle radius.</param>
        /// <returns type="kendo.geometry.Circle">The current circle instance.</returns>

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
    /// Returns a reference to the kendo.geometry.Circle widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.geometry.Circle">The kendo.geometry.Circle instance (if present).</returns>
};

$.fn.kendoCircle = function(options) {
    /// <summary>
    /// Instantiates a kendo.geometry.Circle widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.geometry.Matrix = function() { };

kendo.geometry.Matrix.prototype = {




    clone: function() {
        /// <summary>
        /// Creates a new instance with the same element values.
        /// </summary>
        /// <returns type="kendo.geometry.Matrix">A new Matrix instance with the same element values.</returns>

    },


    equals: function(other) {
        /// <summary>
        /// Compares this matrix with another instance.
        /// </summary>
        /// <param name="other" type="kendo.geometry.Matrix" >The matrix instance to compare with.</param>
        /// <returns type="Boolean">true if the matrix elements match; false otherwise.</returns>

    },


    round: function(digits) {
        /// <summary>
        /// Rounds the matrix elements to the specified number of fractional digits.
        /// </summary>
        /// <param name="digits" type="Number" >Number of fractional digits.</param>
        /// <returns type="kendo.geometry.Matrix">The current matrix instance.</returns>

    },


    multiplyCopy: function(matrix) {
        /// <summary>
        /// Multiplies the matrix with another one and returns the result as new instance.
/// The current instance elements are not altered.
        /// </summary>
        /// <param name="matrix" type="kendo.geometry.Matrix" >The matrix to multiply by.</param>
        /// <returns type="kendo.geometry.Matrix">The result of the multiplication.</returns>

    },


    toArray: function(digits) {
        /// <summary>
        /// Returns the matrix elements as an [a, b, c, d, e, f] array.
        /// </summary>
        /// <param name="digits" type="Number" >(Optional) Number of fractional digits.</param>
        /// <returns type="Array">An array representation of the matrix.</returns>

    },


    toString: function(digits,separator) {
        /// <summary>
        /// Formats the matrix elements as a string.
        /// </summary>
        /// <param name="digits" type="Number" >(Optional) Number of fractional digits.</param>
        /// <param name="separator" type="String" >The separator to place between elements.</param>
        /// <returns type="String">A string representation of the matrix, e.g. "1, 0, 0, 1, 0, 0".</returns>

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

$.fn.getKendoMatrix = function() {
    /// <summary>
    /// Returns a reference to the kendo.geometry.Matrix widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.geometry.Matrix">The kendo.geometry.Matrix instance (if present).</returns>
};

$.fn.kendoMatrix = function(options) {
    /// <summary>
    /// Instantiates a kendo.geometry.Matrix widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.geometry.Point = function() { };

kendo.geometry.Point.prototype = {




    clone: function() {
        /// <summary>
        /// Creates a new instance with the same coordinates.
        /// </summary>
        /// <returns type="kendo.geometry.Point">A new Point instance with the same coordinates.</returns>

    },


    distanceTo: function(point) {
        /// <summary>
        /// Calculates the distance to another point.
        /// </summary>
        /// <param name="point" type="kendo.geometry.Point" >The point to calculate the distance to.</param>
        /// <returns type="Number">The straight line distance to the given point.</returns>

    },


    equals: function(other) {
        /// <summary>
        /// Compares this point with another instance.
        /// </summary>
        /// <param name="other" type="kendo.geometry.Point" >The point to compare with.</param>
        /// <returns type="Boolean">true if the point coordinates match; false otherwise.</returns>

    },


    getX: function() {
        /// <summary>
        /// Gets the x coordinate value.
        /// </summary>
        /// <returns type="Number">The current x coordinate value.</returns>

    },


    getY: function() {
        /// <summary>
        /// Gets the y coordinate value.
        /// </summary>
        /// <returns type="Number">The current y coordinate value.</returns>

    },


    move: function(x,y) {
        /// <summary>
        /// Moves the point to the specified x and y coordinates.
        /// </summary>
        /// <param name="x" type="Number" >The new X coordinate.</param>
        /// <param name="y" type="Number" >The new Y coordinate.</param>
        /// <returns type="kendo.geometry.Point">The current point instance.</returns>

    },


    rotate: function(angle,center) {
        /// <summary>
        /// Rotates the point around the given center.
        /// </summary>
        /// <param name="angle" type="Number" >Angle in decimal degrees. Measured in clockwise direction with 0 pointing "right". Negative values or values greater than 360 will be normalized.</param>
        /// <param name="center" type="Object" >The rotation center. Can be a Point instance or an [x, y] array.</param>
        /// <returns type="kendo.geometry.Point">The current Point instance.</returns>

    },


    round: function(digits) {
        /// <summary>
        /// Rounds the point coordinates to the specified number of fractional digits.
        /// </summary>
        /// <param name="digits" type="Number" >Number of fractional digits.</param>
        /// <returns type="kendo.geometry.Point">The current Point instance.</returns>

    },


    scale: function(scaleX,scaleY) {
        /// <summary>
        /// Scales the point coordinates along the x and y axis.
        /// </summary>
        /// <param name="scaleX" type="Number" >The x scale multiplier.</param>
        /// <param name="scaleY" type="Number" >The y scale multiplier.</param>
        /// <returns type="kendo.geometry.Point">The current point instance.</returns>

    },


    scaleCopy: function(scaleX,scaleY) {
        /// <summary>
        /// Scales the point coordinates on a copy of the current point.
/// The callee coordinates will remain unchanged.
        /// </summary>
        /// <param name="scaleX" type="Number" >The x scale multiplier.</param>
        /// <param name="scaleY" type="Number" >The y scale multiplier.</param>
        /// <returns type="kendo.geometry.Point">The new Point instance.</returns>

    },


    setX: function(value) {
        /// <summary>
        /// Sets the x coordinate to a new value.
        /// </summary>
        /// <param name="value" type="Number" >The new x coordinate value.</param>
        /// <returns type="kendo.geometry.Point">The current Point instance.</returns>

    },


    setY: function(value) {
        /// <summary>
        /// Sets the y coordinate to a new value.
        /// </summary>
        /// <param name="value" type="Number" >The new y coordinate value.</param>
        /// <returns type="kendo.geometry.Point">The current Point instance.</returns>

    },


    toArray: function(digits) {
        /// <summary>
        /// Returns the point coordinates as an [x, y] array.
        /// </summary>
        /// <param name="digits" type="Number" >(Optional) Number of fractional digits.</param>
        /// <returns type="Array">An array representation of the point, e.g. [10, 20]</returns>

    },


    toString: function(digits,separator) {
        /// <summary>
        /// Formats the point value to a string.
        /// </summary>
        /// <param name="digits" type="Number" >(Optional) Number of fractional digits.</param>
        /// <param name="separator" type="String" >The separator to place between coordinates.</param>
        /// <returns type="String">A string representation of the point, e.g. "10 20".</returns>

    },


    transform: function(tansformation) {
        /// <summary>
        /// Applies a transformation to the point coordinates.
/// The current coordinates will be overriden.
        /// </summary>
        /// <param name="tansformation" type="kendo.geometry.Transformation" >The transformation to apply.</param>
        /// <returns type="kendo.geometry.Point">The current Point instance.</returns>

    },


    transformCopy: function(tansformation) {
        /// <summary>
        /// Applies a transformation on a copy of the current point.
/// The callee coordinates will remain unchanged.
        /// </summary>
        /// <param name="tansformation" type="kendo.geometry.Transformation" >The transformation to apply.</param>
        /// <returns type="kendo.geometry.Point">The new Point instance.</returns>

    },


    translate: function(dx,dy) {
        /// <summary>
        /// Translates the point along the x and y axis.
        /// </summary>
        /// <param name="dx" type="Number" >The distance to move along the X axis.</param>
        /// <param name="dy" type="Number" >The distance to move along the Y axis.</param>
        /// <returns type="kendo.geometry.Point">The current point instance.</returns>

    },


    translateWith: function(vector) {
        /// <summary>
        /// Translates the point by using a Point instance as a vector of translation.
        /// </summary>
        /// <param name="vector" type="Object" >The vector of translation. Can be either a Point instance or an [x, y] array.</param>
        /// <returns type="kendo.geometry.Point">The current point instance.</returns>

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

$.fn.getKendoPoint = function() {
    /// <summary>
    /// Returns a reference to the kendo.geometry.Point widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.geometry.Point">The kendo.geometry.Point instance (if present).</returns>
};

$.fn.kendoPoint = function(options) {
    /// <summary>
    /// Instantiates a kendo.geometry.Point widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.geometry.Rect = function() { };

kendo.geometry.Rect.prototype = {




    bbox: function(matrix) {
        /// <summary>
        /// Returns the bounding box of this rectangle after applying the
/// specified transformation matrix.
        /// </summary>
        /// <param name="matrix" type="kendo.geometry.Matrix" >Transformation matrix to apply.</param>
        /// <returns type="kendo.geometry.Rect">The bounding box after applying the transformation matrix.</returns>

    },


    bottomLeft: function() {
        /// <summary>
        /// Gets the position of the bottom-left corner of the rectangle.
/// This is also the rectangle origin
        /// </summary>
        /// <returns type="kendo.geometry.Point">The position of the bottom-left corner.</returns>

    },


    bottomRight: function() {
        /// <summary>
        /// Gets the position of the bottom-right corner of the rectangle.
        /// </summary>
        /// <returns type="kendo.geometry.Point">The position of the bottom-right corner.</returns>

    },


    center: function() {
        /// <summary>
        /// Gets the position of the center of the rectangle.
        /// </summary>
        /// <returns type="kendo.geometry.Point">The position of the center.</returns>

    },


    clone: function() {
        /// <summary>
        /// Creates a new instance with the same origin and size.
        /// </summary>
        /// <returns type="kendo.geometry.Rect">A new Rect instance with the same origin and size.</returns>

    },


    equals: function(other) {
        /// <summary>
        /// Compares this rectangle with another instance.
        /// </summary>
        /// <param name="other" type="kendo.geometry.Rect" >The rectangle to compare with.</param>
        /// <returns type="Boolean">true if the origin and size is the same for both rectangles; false otherwise.</returns>

    },


    getOrigin: function() {
        /// <summary>
        /// Gets the origin (top-left point) of the rectangle.
        /// </summary>
        /// <returns type="kendo.geometry.Point">The origin (top-left point).</returns>

    },


    getSize: function() {
        /// <summary>
        /// Gets the rectangle size.
        /// </summary>
        /// <returns type="kendo.geometry.Size">The current rectangle Size.</returns>

    },


    height: function() {
        /// <summary>
        /// Gets the rectangle height.
        /// </summary>
        /// <returns type="Number">The rectangle height.</returns>

    },


    setOrigin: function(value) {
        /// <summary>
        /// Sets the origin (top-left point) of the rectangle.
        /// </summary>
        /// <param name="value" type="Object" >The new origin Point or equivalent [x, y] array.</param>
        /// <returns type="kendo.geometry.Rect">The current rectangle instance.</returns>

    },


    setSize: function(value) {
        /// <summary>
        /// Sets the rectangle size.
        /// </summary>
        /// <param name="value" type="Object" >The new rectangle Size or equivalent [width, height] array.</param>
        /// <returns type="kendo.geometry.Rect">The current rectangle instance.</returns>

    },


    topLeft: function() {
        /// <summary>
        /// Gets the position of the top-left corner of the rectangle.
/// This is also the rectangle origin
        /// </summary>
        /// <returns type="kendo.geometry.Point">The position of the top-left corner.</returns>

    },


    topRight: function() {
        /// <summary>
        /// Gets the position of the top-right corner of the rectangle.
        /// </summary>
        /// <returns type="kendo.geometry.Point">The position of the top-right corner.</returns>

    },


    width: function() {
        /// <summary>
        /// Gets the rectangle width.
        /// </summary>
        /// <returns type="Number">The rectangle width.</returns>

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

$.fn.getKendoRect = function() {
    /// <summary>
    /// Returns a reference to the kendo.geometry.Rect widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.geometry.Rect">The kendo.geometry.Rect instance (if present).</returns>
};

$.fn.kendoRect = function(options) {
    /// <summary>
    /// Instantiates a kendo.geometry.Rect widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.geometry.Size = function() { };

kendo.geometry.Size.prototype = {




    clone: function() {
        /// <summary>
        /// Creates a new instance with the same width and height.
        /// </summary>
        /// <returns type="kendo.geometry.Size">A new Size instance with the same coordinates.</returns>

    },


    equals: function(other) {
        /// <summary>
        /// Compares this Size with another instance.
        /// </summary>
        /// <param name="other" type="kendo.geometry.Size" >The Size to compare with.</param>
        /// <returns type="Boolean">true if the size members match; false otherwise.</returns>

    },


    getWidth: function() {
        /// <summary>
        /// Gets the width value.
        /// </summary>
        /// <returns type="Number">The current width value.</returns>

    },


    getHeight: function() {
        /// <summary>
        /// Gets the height value.
        /// </summary>
        /// <returns type="Number">The current height value.</returns>

    },


    setWidth: function(value) {
        /// <summary>
        /// Sets the width to a new value.
        /// </summary>
        /// <param name="value" type="Number" >The new width value.</param>
        /// <returns type="kendo.geometry.Size">The current Size instance.</returns>

    },


    setHeight: function(value) {
        /// <summary>
        /// Sets the height to a new value.
        /// </summary>
        /// <param name="value" type="Number" >The new height value.</param>
        /// <returns type="kendo.geometry.Size">The current Size instance.</returns>

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

$.fn.getKendoSize = function() {
    /// <summary>
    /// Returns a reference to the kendo.geometry.Size widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.geometry.Size">The kendo.geometry.Size instance (if present).</returns>
};

$.fn.kendoSize = function(options) {
    /// <summary>
    /// Instantiates a kendo.geometry.Size widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.geometry.Transformation = function() { };

kendo.geometry.Transformation.prototype = {




    clone: function() {
        /// <summary>
        /// Creates a new instance with the same transformation matrix.
        /// </summary>
        /// <returns type="kendo.geometry.Transformation">A new Transformation instance with the same matrix.</returns>

    },


    equals: function(other) {
        /// <summary>
        /// Compares this transformation with another instance.
        /// </summary>
        /// <param name="other" type="kendo.geometry.Transformation" >The transformation to compare with.</param>
        /// <returns type="Boolean">true if the transformation matrix is the same; false otherwise.</returns>

    },


    matrix: function() {
        /// <summary>
        /// Gets the current transformation matrix for this transformation.
        /// </summary>
        /// <returns type="kendo.geometry.Matrix">The current transformation matrix.</returns>

    },


    multiply: function(transformation) {
        /// <summary>
        /// Multiplies the transformation with another.
/// The underlying transformation matrix is updated in-place.
        /// </summary>
        /// <param name="transformation" type="kendo.geometry.Transformation" >The transformation to multiply by.</param>
        /// <returns type="kendo.geometry.Transformation">The current transformation instance.</returns>

    },


    rotate: function(angle,center) {
        /// <summary>
        /// Sets rotation with the specified parameters.
        /// </summary>
        /// <param name="angle" type="Number" >The angle of rotation in decimal degrees. Measured in clockwise direction with 0 pointing "right". Negative values or values greater than 360 will be normalized.</param>
        /// <param name="center" type="Object" >The center of rotation.</param>
        /// <returns type="kendo.geometry.Transformation">The current transformation instance.</returns>

    },


    scale: function(scaleX,scaleY) {
        /// <summary>
        /// Sets scale with the specified parameters.
        /// </summary>
        /// <param name="scaleX" type="Number" >The scale factor on the X axis.</param>
        /// <param name="scaleY" type="Number" >The scale factor on the Y axis.</param>
        /// <returns type="kendo.geometry.Transformation">The current transformation instance.</returns>

    },


    translate: function(x,y) {
        /// <summary>
        /// Sets translation with the specified parameters.
        /// </summary>
        /// <param name="x" type="Number" >The distance to translate along the X axis.</param>
        /// <param name="y" type="Number" >The distance to translate along the Y axis.</param>
        /// <returns type="kendo.geometry.Transformation">The current transformation instance.</returns>

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

$.fn.getKendoTransformation = function() {
    /// <summary>
    /// Returns a reference to the kendo.geometry.Transformation widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.geometry.Transformation">The kendo.geometry.Transformation instance (if present).</returns>
};

$.fn.kendoTransformation = function(options) {
    /// <summary>
    /// Instantiates a kendo.geometry.Transformation widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ooxml.Workbook = function() { };

kendo.ooxml.Workbook.prototype = {




    toDataURL: function() {
        /// <summary>
        /// Creates an Excel file that represents the current workbook and returns it as a data URL.
        /// </summary>
        /// <returns type="String">the Excel file as data URL.</returns>

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

$.fn.getKendoWorkbook = function() {
    /// <summary>
    /// Returns a reference to the kendo.ooxml.Workbook widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ooxml.Workbook">The kendo.ooxml.Workbook instance (if present).</returns>
};

$.fn.kendoWorkbook = function(options) {
    /// <summary>
    /// Instantiates a kendo.ooxml.Workbook widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;creator — String (default: "Kendo UI")
    /// &#10;The creator of the workbook.
    /// &#10;
    /// &#10;date — Date 
    /// &#10;The date when the workbook is created. The default value is new Date().
    /// &#10;
    /// &#10;sheets — Array 
    /// &#10;The sheets of the workbook. Every sheet represents a page from the final Excel file.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.spreadsheet.CustomFilter = function() { };

kendo.spreadsheet.CustomFilter.prototype = {




    init: function(options) {
        /// <summary>
        /// The constructor of the filter.
        /// </summary>
        /// <param name="options" type="Object" >An object which may contain the following keys:The supported criteria operators are: eq (equal to), neq (not equal to), lt (less than), lte (less than or equal to), gt (greater than), gte (greater than or equal to). In addition, startswith, endswith, contains, doesnotstartwith and doesnotendwith are supported for cells that contain strings.</param>

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

$.fn.getKendoCustomFilter = function() {
    /// <summary>
    /// Returns a reference to the kendo.spreadsheet.CustomFilter widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.spreadsheet.CustomFilter">The kendo.spreadsheet.CustomFilter instance (if present).</returns>
};

$.fn.kendoCustomFilter = function(options) {
    /// <summary>
    /// Instantiates a kendo.spreadsheet.CustomFilter widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.spreadsheet.DynamicFilter = function() { };

kendo.spreadsheet.DynamicFilter.prototype = {




    init: function(options) {
        /// <summary>
        /// The constructor of the filter.
        /// </summary>
        /// <param name="options" type="Object" >An object which should have a type field set to:</param>

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

$.fn.getKendoDynamicFilter = function() {
    /// <summary>
    /// Returns a reference to the kendo.spreadsheet.DynamicFilter widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.spreadsheet.DynamicFilter">The kendo.spreadsheet.DynamicFilter instance (if present).</returns>
};

$.fn.kendoDynamicFilter = function(options) {
    /// <summary>
    /// Instantiates a kendo.spreadsheet.DynamicFilter widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.spreadsheet.Range = function() { };

kendo.spreadsheet.Range.prototype = {




    borderBottom: function(value) {
        /// <summary>
        /// Gets or sets the state of the bottom border of the cells. If the range includes more than a single cell, the setting is applied to all cells.
        /// </summary>
        /// <param name="value" type="Object" >The border configuration object. It may contain size and color keys.The color may be set to any valid CSS color. The size accepts any valid Length value.</param>
        /// <returns type="Object">the current value of the top-left cell of the range.</returns>

    },


    borderLeft: function(value) {
        /// <summary>
        /// Gets or sets the state of the left border of the cells. If the range includes more than a single cell, the setting is applied to all cells.
        /// </summary>
        /// <param name="value" type="Object" >The border configuration object. It may contain size and color keys.The color may be set to any valid CSS color. The size accepts any valid Length value.</param>
        /// <returns type="Object">the current value of the top-left cell of the range.</returns>

    },


    borderRight: function(value) {
        /// <summary>
        /// Gets or sets the state of the right border of the cells. If the range includes more than a single cell, the setting is applied to all cells.
        /// </summary>
        /// <param name="value" type="Object" >The border configuration object. It may contain size and color keys.The color may be set to any valid CSS color. The size accepts any valid Length value.</param>
        /// <returns type="Object">the current value of the top-left cell of the range.</returns>

    },


    borderTop: function(value) {
        /// <summary>
        /// Gets or sets the state of the top border of the cells. If the range includes more than a single cell, the setting is applied to all cells.
        /// </summary>
        /// <param name="value" type="Object" >The border configuration object. It may contain size and color keys.The color may be set to any valid CSS color. The size accepts any valid Length value.</param>
        /// <returns type="Object">the current value of the top-left cell of the range.</returns>

    },


    clear: function(options) {
        /// <summary>
        /// Clears the contents of the range cells.
        /// </summary>
        /// <param name="options" type="Object" >An object which may contain contentsOnly: true or formatOnly: true key values. Clearing the format will remove the cell formatting and visual styles.If a parameter is not passed, the method will clear both the cells values and the formatting.</param>

    },


    clearFilter: function(indices) {
        /// <summary>
        /// Clears the set filters for the given column(s). The indices is relative to the beginning of the range.
        /// </summary>
        /// <param name="indices" type="Object" >The column(s) which filters should be cleared.</param>

    },


    filter: function(filter) {
        /// <summary>
        /// Enables/disables or sets the filter for a given range.
        /// </summary>
        /// <param name="filter" type="Object" >Determines the action performed by the method.</param>

    },


    format: function(format) {
        /// <summary>
        /// Gets or sets the format of the cells.
        /// </summary>
        /// <param name="format" type="String" >The new format for the cells.</param>
        /// <returns type="String">the format of the top-left cell of the range.  When used as asetter, format returns the Range object to allow chained calls.More details about the supported format may be found in the cell formatting help topic.</returns>

    },


    formula: function(formula) {
        /// <summary>
        /// Gets or sets the formula of the cells.
        /// </summary>
        /// <param name="formula" type="String" >The new formula of the cell. The string may optionally start with =.</param>
        /// <returns type="String">the formula of the top-left cell of the range.</returns>

    },


    hasFilter: function() {
        /// <summary>
        /// Returns true if the sheet of the range has filter enabled.
        /// </summary>
        /// <returns type="Boolean">true if the sheet has a filter, false otherwise.</returns>

    },


    input: function(value) {
        /// <summary>
        /// Gets or sets the value of the cells.  This is similar to value, but it parses the argument as if it was entered through the text box:
        /// </summary>
        /// <param name="value" type="Object" >The value to be set to the cells.</param>
        /// <returns type="Object">the current value of the top-left cell of the range.</returns>

    },


    merge: function() {
        /// <summary>
        /// Merges the range cells into a single merged cell. If the range already includes a merged cell, they are merged, too.
        /// </summary>

    },


    select: function() {
        /// <summary>
        /// Sets the sheet selection to the range cells.```html
///     <div id="spreadsheet"></div>
///     script```
        /// </summary>

    },


    values: function(values) {
        /// <summary>
        /// Sets the values of the range cells. The argument should be an array of arrays which match the dimensions of the range.
        /// </summary>
        /// <param name="values" type="Array" >The cell values.</param>

    },


    unmerge: function() {
        /// <summary>
        /// Un-merges any merged cells which are included in the range.```html
///     <div id="spreadsheet"></div>
///     script```
        /// </summary>

    },


    validation: function(value) {
        /// <summary>
        /// Gets or sets the validation of the cells.
        /// </summary>
        /// <param name="value" type="Object" >The validation configuration object. It may contain type, comparerType, dataType, from, to, allowNulls, messageTemplate and titleTemplate keys.The type Can be set to "warning" or "reject". By default the type is "warning".The comparerType Can be set to "greaterThan", "lessThan", "between", "equalTo", "notEqualTo", "greaterThanOrEqualTo", "lessThanOrEqualTo", "notBetween" or "custom".The dataType Can be set to "date", "text", "number" or "custom".The from This key holds formula or value. Used as first or only compare value depending on specified comparer.The to This key can be set to formula or value. It's optional depending on the specified comparer.The allowNulls Can be set to boolean value.The messageTemplate The message which will be displayed in the "reject" validation window.The titleTemplate The title of the "reject" validation window.</param>
        /// <returns type="Object">the current validation of the top-left cell of the range.</returns>

    },


    value: function(value) {
        /// <summary>
        /// Gets or sets the value of the cells.
        /// </summary>
        /// <param name="value" type="Object" >The value to be set to the cells.</param>
        /// <returns type="Object">the current value of the top-left cell of the range.</returns>

    },


    wrap: function(value) {
        /// <summary>
        /// Gets or sets the wrap of the range cells.
        /// </summary>
        /// <param name="value" type="Boolean" >if to enable wrapping, false otherwise.</param>
        /// <returns type="Boolean">the current wrap state of the top-left cell of the range.</returns>

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

$.fn.getKendoRange = function() {
    /// <summary>
    /// Returns a reference to the kendo.spreadsheet.Range widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.spreadsheet.Range">The kendo.spreadsheet.Range instance (if present).</returns>
};

$.fn.kendoRange = function(options) {
    /// <summary>
    /// Instantiates a kendo.spreadsheet.Range widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.spreadsheet.Sheet = function() { };

kendo.spreadsheet.Sheet.prototype = {




    clearFilter: function(indexes) {
        /// <summary>
        /// Clears the filters for the passed column index. If an array is passed, clearFilter will clear the filter for each column index.
        /// </summary>
        /// <param name="indexes" type="Object" >The column index(es)</param>

    },


    columnWidth: function(index,width) {
        /// <summary>
        /// Gets or sets the width of the column at the given index.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index of the column</param>
        /// <param name="width" type="Number" >If passed, the method will set the width of the column at the passed index.</param>

    },


    deleteColumn: function(index) {
        /// <summary>
        /// Deletes the contents of the column at the provided index and shifts the remaining contents of the sheet to the left.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index of the column</param>

    },


    fromJSON: function(data) {
        /// <summary>
        /// Loads the widget state and sheet data from JSON.The schema follows the same structure as the widget configuration.
        /// </summary>
        /// <param name="data" type="Object" >The object to load data from.  This should be the deserialized object, not the JSON string.</param>

    },


    frozenColumns: function(count) {
        /// <summary>
        /// Gets or sets the amount of frozen columns displayed by the sheet.
        /// </summary>
        /// <param name="count" type="Number" >The amount of columns to be frozen. Pass 0 to remove the frozen pane.</param>
        /// <returns type="Number">The current frozen columns. By default, returns 0.</returns>

    },


    frozenRows: function(count) {
        /// <summary>
        /// Gets or sets the amount of frozen rows displayed by the sheet.
        /// </summary>
        /// <param name="count" type="Number" >The amount of columns to be frozen. Pass 0 to remove the frozen pane.</param>
        /// <returns type="Number">The current frozen rows. By default, returns 0.</returns>

    },


    hideColumn: function(index) {
        /// <summary>
        /// Hides the column at the provided index.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index of the column</param>

    },


    hideRow: function(index) {
        /// <summary>
        /// Hides the row at the provided index.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index of the row</param>

    },


    insertColumn: function(index) {
        /// <summary>
        /// Inserts a new, empty column at the provided index. The contents of the spreadsheet (including the ones in the current column index) are shifted to the right.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index of the column</param>

    },


    insertRow: function(index) {
        /// <summary>
        /// Inserts a new, empty row at the provided index. The contents of the spreadsheet (including the ones in the current row index) are shifted down.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index of the column</param>

    },


    range: function(ref) {
        /// <summary>
        /// Returns a Range for the given range specification.
        /// </summary>
        /// <param name="ref" type="String" >A1 or RC notation reference of the cells.</param>
        /// <returns type="kendo.spreadsheet.Range">a range object, which may be used to manipulate the cell state further.</returns>

    },


    rowHeight: function(index,width) {
        /// <summary>
        /// Gets or sets the height of the row at the given index.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index of the row</param>
        /// <param name="width" type="Number" >If passed, the method will set the height of the row at the passed index.</param>

    },


    selection: function() {
        /// <summary>
        /// Returns a range with the current active selection.
        /// </summary>
        /// <returns type="kendo.spreadsheet.Range">the selection range.</returns>

    },


    toJSON: function() {
        /// <summary>
        /// Stores the widget state and sheet data to JSON format.The schema follows the same structure as the widget configuration.
        /// </summary>

    },


    unhideColumn: function(index) {
        /// <summary>
        /// Shows the hidden column at the provided index. Does not have any effect if the column is already visible.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index of the column</param>

    },


    unhideRow: function(index) {
        /// <summary>
        /// Shows the hidden row at the provided index. Does not have any effect if the row is already visible.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index of the row</param>

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

$.fn.getKendoSheet = function() {
    /// <summary>
    /// Returns a reference to the kendo.spreadsheet.Sheet widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.spreadsheet.Sheet">The kendo.spreadsheet.Sheet instance (if present).</returns>
};

$.fn.kendoSheet = function(options) {
    /// <summary>
    /// Instantiates a kendo.spreadsheet.Sheet widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.spreadsheet.TopFilter = function() { };

kendo.spreadsheet.TopFilter.prototype = {




    init: function(options) {
        /// <summary>
        /// The constructor of the filter.
        /// </summary>
        /// <param name="options" type="Object" >An object which may contain the following keys:</param>

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

$.fn.getKendoTopFilter = function() {
    /// <summary>
    /// Returns a reference to the kendo.spreadsheet.TopFilter widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.spreadsheet.TopFilter">The kendo.spreadsheet.TopFilter instance (if present).</returns>
};

$.fn.kendoTopFilter = function(options) {
    /// <summary>
    /// Instantiates a kendo.spreadsheet.TopFilter widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.spreadsheet.ValueFilter = function() { };

kendo.spreadsheet.ValueFilter.prototype = {




    init: function(options) {
        /// <summary>
        /// The constructor of the filter.
        /// </summary>
        /// <param name="options" type="Object" >An object which may contain the following keys:</param>

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

$.fn.getKendoValueFilter = function() {
    /// <summary>
    /// Returns a reference to the kendo.spreadsheet.ValueFilter widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.spreadsheet.ValueFilter">The kendo.spreadsheet.ValueFilter instance (if present).</returns>
};

$.fn.kendoValueFilter = function(options) {
    /// <summary>
    /// Instantiates a kendo.spreadsheet.ValueFilter widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


if (!kendo.ui) {
    kendo.ui = {};
}

kendo.ui.AutoComplete = function() { };

kendo.ui.AutoComplete.prototype = {




    close: function() {
        /// <summary>
        /// Closes the widget suggestion popup.
        /// </summary>

    },


    dataItem: function(index) {
        /// <summary>
        /// Returns the data item at the specified index.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index of of the data item.</param>
        /// <returns type="Object">the data item at the specified index. Returns undefined if the index is not within bounds.</returns>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    enable: function(enable) {
        /// <summary>
        /// Enables or disables the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >If set to true the widget will be enabled. If set to false the widget will be disabled.</param>

    },


    focus: function() {
        /// <summary>
        /// Focuses the widget.
        /// </summary>

    },


    readonly: function(readonly) {
        /// <summary>
        /// Toggles the readonly state of the widget. When the widget is readonly it doesn't allow user input.
        /// </summary>
        /// <param name="readonly" type="Boolean" >If set to true the widget will not allow user input. If set to false the widget will allow user input.</param>

    },


    refresh: function() {
        /// <summary>
        /// Refresh the suggestion popup by rendering all items again.
        /// </summary>

    },


    search: function(word) {
        /// <summary>
        /// Searches the data source for the provided value and displays any matches as suggestions.
        /// </summary>
        /// <param name="word" type="String" >The value to search for. All matches are displayed in the suggestion popup.</param>

    },


    select: function(item) {
        /// <summary>
        /// Selects the item provided as an argument and updates the value of the widget.
        /// </summary>
        /// <param name="item" type="Object" >A string, DOM element or jQuery object which represents the item to be selected. A string is treated as a jQuery selector.</param>

    },


    setDataSource: function(dataSource) {
        /// <summary>
        /// Sets the data source of the widget.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" >The data source to which the widget should be bound.</param>

    },


    suggest: function(value) {
        /// <summary>
        /// Sets the value of the widget to the specified argument and visually selects the text.
        /// </summary>
        /// <param name="value" type="String" >The value to set.</param>

    },


    value: function(value) {
        /// <summary>
        /// Gets or sets the value of the widget.
        /// </summary>
        /// <param name="value" type="String" >The value to set.</param>
        /// <returns type="String">the value of the widget.</returns>

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

$.fn.getKendoAutoComplete = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.AutoComplete widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.AutoComplete">The kendo.ui.AutoComplete instance (if present).</returns>
};

$.fn.kendoAutoComplete = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.AutoComplete widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;animation — Object 
    /// &#10;Configures the opening and closing animations of the suggestion popup. Setting the animation option to false will disable the opening and closing animations. As a result the suggestion popup will open and close instantly.
    /// &#10;
    /// &#10;dataSource — Object|Array|kendo.data.DataSource 
    /// &#10;The data source of the widget which is used to display suggestions for the current value. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
/// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.DataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.DataSource instance the widget will use that instance and will not initialize a new one.
    /// &#10;
    /// &#10;dataTextField — String (default: null)
    /// &#10;The field of the data item used when searching for suggestions.  This is the text that will be displayed in the list of matched results.
    /// &#10;
    /// &#10;delay — Number (default: 200)
    /// &#10;The delay in milliseconds between a keystroke and when the widget displays the suggestion popup.
    /// &#10;
    /// &#10;enable — Boolean (default: true)
    /// &#10;If set to false the widget will be disabled and will not allow user input. The widget is enabled by default and allows user input.
    /// &#10;
    /// &#10;filter — String (default: "startswith")
    /// &#10;The filtering method used to determine the suggestions for the current value. The default filter is "startswith" -
/// &#10;all data items which begin with the current widget value are displayed in the suggestion popup. The supported filter values are startswith, endswith and contains.
    /// &#10;
    /// &#10;fixedGroupTemplate — String|Function 
    /// &#10;The template used to render the fixed header group. By default the widget displays only the value of the current group.
    /// &#10;
    /// &#10;groupTemplate — String|Function 
    /// &#10;The template used to render the groups. By default the widget displays only the value of the group.
    /// &#10;
    /// &#10;height — Number (default: 200)
    /// &#10;The height of the suggestion popup in pixels. The default value is 200 pixels.
    /// &#10;
    /// &#10;highlightFirst — Boolean (default: true)
    /// &#10;If set to true the first suggestion will be automatically highlighted.
    /// &#10;
    /// &#10;ignoreCase — Boolean (default: true)
    /// &#10;If set to false case-sensitive search will be performed to find suggestions. The widget performs case-insensitive searching by default.
    /// &#10;
    /// &#10;minLength — Number (default: 1)
    /// &#10;The minimum number of characters the user must type before a search is performed. Set to higher value than 1 if the search could match a lot of items.
    /// &#10;
    /// &#10;placeholder — String (default: "")
    /// &#10;The hint displayed by the widget when it is empty. Not set by default.
    /// &#10;
    /// &#10;popup — Object 
    /// &#10;The options that will be used for the popup initialization. For more details about the available options
/// &#10;refer to Popup documentation.
    /// &#10;
    /// &#10;separator — String (default: "")
    /// &#10;The character used to separate multiple values. Empty by default.
    /// &#10;
    /// &#10;suggest — Boolean (default: false)
    /// &#10;If set to true the widget will automatically use the first suggestion as its value.
    /// &#10;
    /// &#10;headerTemplate — String|Function 
    /// &#10;Specifies a static HTML content, which will be rendered as a header of the popup element.
    /// &#10;
    /// &#10;template — String|Function 
    /// &#10;The template used to render the suggestions. By default the widget displays only the text of the suggestion (configured via dataTextField).
    /// &#10;
    /// &#10;valuePrimitive — Boolean (default: false)
    /// &#10;Specifies the value binding behavior for the widget when the initial model value is null. If set to true, the View-Model field will be updated with the selected item text field. If set to false, the View-Model field will be updated with the selected item.
    /// &#10;
    /// &#10;virtual — Boolean (default: false)
    /// &#10;Enables the virtualization feature of the widget.
    /// &#10;
    /// &#10;virtual — Object (default: false)
    /// &#10;Enables the virtualization feature of the widget.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.Button = function() { };

kendo.ui.Button.prototype = {




    enable: function(toggle) {
        /// <summary>
        /// Enables or disables the Button.
        /// </summary>
        /// <param name="toggle" type="Boolean" >Indicates whether the Button should be enabled or disabled. true and false arguments are accepted. If no argument is supplied, the Button will assume true and will be enabled.</param>

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

$.fn.getKendoButton = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.Button widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.Button">The kendo.ui.Button instance (if present).</returns>
};

$.fn.kendoButton = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.Button widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;enable — Boolean (default: true)
    /// &#10;Indicates whether the Button should be enabled or disabled. By default, it is enabled, unless a disabled="disabled" attribute is detected.
    /// &#10;
    /// &#10;icon — String 
    /// &#10;Defines a name of an existing icon in the Kendo UI theme sprite. The icon will be applied as background image of a span element inside the Button.
/// &#10;The span element can be added automatically by the widget, or an existing element can be used, if it has a k-icon CSS class applied.
/// &#10;For a list of available icon names, please refer to the Icons demo.
    /// &#10;
    /// &#10;imageUrl — String 
    /// &#10;Defines a URL, which will be used for an img element inside the Button. The URL can be relative or absolute. In case it is relative, it will be evaluated with relation to the web page URL.The img element can be added automatically by the widget, or an existing element can be used, if it has a k-image CSS class applied.
    /// &#10;
    /// &#10;spriteCssClass — String 
    /// &#10;Defines a CSS class (or multiple classes separated by spaces), which will be used for applying a background image to a span element inside the Button.
/// &#10;In case you want to use an icon from the Kendo UI theme sprite background image, it is easier to use the icon property.The span element can be added automatically by the widget, or an existing element can be used, if it has a k-sprite CSS class applied.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.Calendar = function() { };

kendo.ui.Calendar.prototype = {




    current: function() {
        /// <summary>
        /// Gets currently focused date.
        /// </summary>
        /// <returns type="Date">The current focused date shown in the calendar.</returns>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the Calendar for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    max: function(value) {
        /// <summary>
        /// Gets/Sets the max value of the calendar.
        /// </summary>
        /// <param name="value" type="Object" >The max date to set.</param>
        /// <returns type="Date">The max value of the calendar.</returns>

    },


    min: function(value) {
        /// <summary>
        /// Gets/Sets the min value of the calendar.
        /// </summary>
        /// <param name="value" type="Object" >The min date to set.</param>
        /// <returns type="Date">The min value of the calendar.</returns>

    },


    navigate: function(value,view) {
        /// <summary>
        /// Navigates to view.
        /// </summary>
        /// <param name="value" type="Date" >Desired date.</param>
        /// <param name="view" type="String" >Desired view.</param>

    },


    navigateDown: function(value) {
        /// <summary>
        /// Navigates to the lower view.
        /// </summary>
        /// <param name="value" type="Date" >Desired date.</param>

    },


    navigateToFuture: function() {
        /// <summary>
        /// Navigates to the future.
        /// </summary>

    },


    navigateToPast: function() {
        /// <summary>
        /// Navigates to the past.
        /// </summary>

    },


    navigateUp: function() {
        /// <summary>
        /// Navigates to the upper view.
        /// </summary>

    },


    value: function(value) {
        /// <summary>
        /// Gets/Sets the value of the calendar.
        /// </summary>
        /// <param name="value" type="Object" >The date to set.</param>
        /// <returns type="Date">The value of the calendar.</returns>

    },


    view: function() {
        /// <summary>
        /// Gets an instance of the current view used by the calendar.
        /// </summary>
        /// <returns type="Object">The instance of the current view used by the calendar.</returns>

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

$.fn.getKendoCalendar = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.Calendar widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.Calendar">The kendo.ui.Calendar instance (if present).</returns>
};

$.fn.kendoCalendar = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.Calendar widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;culture — String (default: "en-US")
    /// &#10;Specifies the culture info used by the widget.
    /// &#10;
    /// &#10;dates — Array 
    /// &#10;Specifies a list of dates, which will be passed to the month template.
    /// &#10;
    /// &#10;depth — String 
    /// &#10;Specifies the navigation depth. The following
/// &#10;settings are available for the depth value:
    /// &#10;
    /// &#10;footer — String|Function 
    /// &#10;The template which renders the footer. If false, the footer will not be rendered.
    /// &#10;
    /// &#10;format — String (default: "MM/dd/yyyy")
    /// &#10;Specifies the format, which is used to parse value set with value() method.
    /// &#10;
    /// &#10;max — Date (default: Date(2099, 11, 31))
    /// &#10;Specifies the maximum date, which the calendar can show.
    /// &#10;
    /// &#10;min — Date (default: Date(1900, 0, 1))
    /// &#10;Specifies the minimum date, which the calendar can show.
    /// &#10;
    /// &#10;month — Object 
    /// &#10;Templates for the cells rendered in "month" view.
    /// &#10;
    /// &#10;start — String (default: "month")
    /// &#10;Specifies the start view.
/// &#10;The following settings are available for the start value:
    /// &#10;
    /// &#10;value — Date (default: null)
    /// &#10;Specifies the selected date.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ColorPalette = function() { };

kendo.ui.ColorPalette.prototype = {




    value: function(color) {
        /// <summary>
        /// Get or set the selected color. If no argument is given, this returns the currently selected color as a string in format #FFFFFF.If one argument is given, it selects the new color and updates the UI. The argument can be a string in hex, rgb or rgba format, or a kendo.Color object object.
        /// </summary>
        /// <param name="color" type="String" ></param>
        /// <returns type="String">the string representation of the current color.</returns>

    },


    color: function(color) {
        /// <summary>
        /// Get or set the selected color. If no argument is given, this returns the currently selected color as a kendo.Color object.
        /// </summary>
        /// <param name="color" type="kendo.Color" >The color that should be set as the current value</param>
        /// <returns type="kendo.Color">the current value</returns>

    },


    enable: function(enable) {
        /// <summary>
        /// Enables or disables the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >Whether the widget should be enabled (true) or disabled (false). If not specified, the method will enable the widget.</param>

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

$.fn.getKendoColorPalette = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.ColorPalette widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ColorPalette">The kendo.ui.ColorPalette instance (if present).</returns>
};

$.fn.kendoColorPalette = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.ColorPalette widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;palette — String|Array (default: "basic")
    /// &#10;Specifies the color palette to display.
/// &#10;It can be a string with comma-separated colors in hex representation, an array of kendo.Color object objects or of strings that parseColor understands.  As a shortcut, you can pass "basic" to get the simple palette (this is the default) or "websafe" to get the Web-safe palette.
    /// &#10;
    /// &#10;columns — Number (default: 10)
    /// &#10;The number of columns to display.  When you use the "websafe" palette, this will automatically default to 18.
    /// &#10;
    /// &#10;tileSize — Number (default: 14)
    /// &#10;The size of a color cell.
    /// &#10;
    /// &#10;tileSize — Object (default: 14)
    /// &#10;The size of a color cell.
    /// &#10;
    /// &#10;value — String (default: null)
    /// &#10;Specifies the initially selected color.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ColorPicker = function() { };

kendo.ui.ColorPicker.prototype = {




    close: function() {
        /// <summary>
        /// Closes the popup.
        /// </summary>

    },


    open: function() {
        /// <summary>
        /// Opens the popup element with the color selector.
        /// </summary>

    },


    toggle: function() {
        /// <summary>
        /// Toggles the popup.
        /// </summary>

    },


    value: function(color) {
        /// <summary>
        /// Get or set the selected color. If no argument is given, this returns the
/// currently selected color as a string in format #FFFFFF when the opacity
/// option is off, or rgba(255, 255, 255, 1) when opacity is requested.If one argument is given, it selects the new color and updates the UI.  The
/// argument can be a string in hex, rgb or rgba format, or a Color object.
/// This does not trigger the "change" event.
        /// </summary>
        /// <param name="color" type="String" ></param>
        /// <returns type="String">the string representation of the current color.</returns>

    },


    color: function(color) {
        /// <summary>
        /// Get or set the selected color. If no argument is given, this returns the currently selected color as a kendo.Color object.
        /// </summary>
        /// <param name="color" type="kendo.Color" >The color that should be set as the current value</param>
        /// <returns type="kendo.Color">the current value</returns>

    },


    enable: function(enable) {
        /// <summary>
        /// Enables or disables the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >Whether the widget should be enabled (true) or disabled (false). If not specified, the method will enable the widget.</param>

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

$.fn.getKendoColorPicker = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.ColorPicker widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ColorPicker">The kendo.ui.ColorPicker instance (if present).</returns>
};

$.fn.kendoColorPicker = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.ColorPicker widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;buttons — Boolean (default: true)
    /// &#10;Specifies whether the widget should display the Apply / Cancel buttons.Applicable only for the HSV selector, when a pallete is not specified.
    /// &#10;
    /// &#10;columns — Number 
    /// &#10;The number of columns to show in the color dropdown when a pallete is specified.
/// &#10;This is automatically initialized for the "basic" and "websafe" palettes.
/// &#10;If you use a custom palette then you can set this to some value that makes sense for your colors.
    /// &#10;
    /// &#10;tileSize — Number (default: 14)
    /// &#10;The size of a color cell.
    /// &#10;
    /// &#10;tileSize — Object (default: 14)
    /// &#10;The size of a color cell.
    /// &#10;
    /// &#10;messages — Object 
    /// &#10;Allows localization of the strings that are used in the widget.
    /// &#10;
    /// &#10;palette — String|Array (default: null)
    /// &#10;When a non-null palette argument is supplied, the drop-down will be
/// &#10;a simple color picker that lists the colors. The following are supported:If palette is missing or null, the widget will display the HSV
/// &#10;selector.
    /// &#10;
    /// &#10;opacity — Boolean (default: false)
    /// &#10;Only for the HSV selector.  If true, the widget will display the opacity slider.
/// &#10;Note that currently in HTML5 the  does not support opacity.
    /// &#10;
    /// &#10;preview — Boolean (default: true)
    /// &#10;Only applicable for the HSV selector.Displays the color preview element, along with an input field where the end user can paste a color in a CSS-supported notation.
    /// &#10;
    /// &#10;toolIcon — String (default: null)
    /// &#10;A CSS class name to display an icon in the color picker button.  If
/// &#10;specified, the HTML for the element will look like this:
    /// &#10;
    /// &#10;value — String (default: null)
    /// &#10;The initially selected color.
/// &#10;Note that when initializing the widget from an  element, the initial color will be decided by the field instead.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ComboBox = function() { };

kendo.ui.ComboBox.prototype = {




    close: function() {
        /// <summary>
        /// Closes the widget popup.
        /// </summary>

    },


    dataItem: function(index) {
        /// <summary>
        /// Returns the data item at the specified index. If the index is not specified, the selected index will be used.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index of the data record.</param>
        /// <returns type="Object">The raw data record. Returns undefined if no data.</returns>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the ComboBox for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    enable: function(enable) {
        /// <summary>
        /// Enables or disables the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >If set to true the widget will be enabled. If set to false the widget will be disabled.</param>

    },


    readonly: function(readonly) {
        /// <summary>
        /// Toggles the readonly state of the widget. When the widget is readonly it doesn't allow user input.
        /// </summary>
        /// <param name="readonly" type="Boolean" >If set to true the widget will not allow user input. If set to false the widget will allow user input.</param>

    },


    focus: function() {
        /// <summary>
        /// Focuses the widget.
        /// </summary>

    },


    open: function() {
        /// <summary>
        /// Opens the popup.
        /// </summary>

    },


    refresh: function() {
        /// <summary>
        /// Refresh the popup by rendering all items again.
        /// </summary>

    },


    search: function(word) {
        /// <summary>
        /// Searches the data source for the provided value and displays any matches as suggestions.
        /// </summary>
        /// <param name="word" type="String" >The filter value.</param>

    },


    select: function(li) {
        /// <summary>
        /// Gets or sets the selected item. Selects the item provided as an argument and updates the value and text of the widget.
        /// </summary>
        /// <param name="li" type="Object" >A string, DOM element or jQuery object which represents the item to be selected. A string is treated as a jQuery selector. A number representing the index of the item or function predicate which returns the correct data item.</param>
        /// <returns type="Number">The index of the selected item, if called with no parameters. If a custom value is entered, the returned selected index is -1. If called with a parameter as a setter.</returns>

    },


    setDataSource: function(dataSource) {
        /// <summary>
        /// Sets the dataSource of an existing ComboBox and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" ></param>

    },


    suggest: function(value) {
        /// <summary>
        /// Sets the value of the widget to the specified argument and visually selects the text.
        /// </summary>
        /// <param name="value" type="String" >Characters to force a suggestion.</param>

    },


    text: function(text) {
        /// <summary>
        /// Gets or sets the text of the ComboBox. Widget will select the item with same text. If
/// there are no matches then the text will be considered as a custom value of the widget.
        /// </summary>
        /// <param name="text" type="String" >The text to set.</param>
        /// <returns type="String">The text of the ComboBox.</returns>

    },


    toggle: function(toggle) {
        /// <summary>
        /// Opens or closes the widget popup.
        /// </summary>
        /// <param name="toggle" type="Boolean" >Defines the whether to open/close the drop-down list.</param>

    },


    value: function(value) {
        /// <summary>
        /// Gets or sets the value of the ComboBox.
        /// </summary>
        /// <param name="value" type="String" >The value to set.</param>
        /// <returns type="String">The value of the ComboBox.</returns>

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

$.fn.getKendoComboBox = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.ComboBox widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ComboBox">The kendo.ui.ComboBox instance (if present).</returns>
};

$.fn.kendoComboBox = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.ComboBox widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;animation — Object 
    /// &#10;Configures the opening and closing animations of the suggestion popup. Setting the animation option to false will disable the opening and closing animations. As a result the suggestion popup will open and close instantly.
    /// &#10;
    /// &#10;autoBind — Boolean (default: true)
    /// &#10;Controls whether to bind the widget to the data source on initialization.
    /// &#10;
    /// &#10;cascadeFrom — String 
    /// &#10;Use it to set the Id of the parent ComboBox widget.
/// &#10;Help topic showing how cascading functionality works
    /// &#10;
    /// &#10;cascadeFromField — String 
    /// &#10;Defines the field to be used to filter the data source. If not defined the parent's dataValueField option will be used.
/// &#10;Help topic showing how cascading functionality works
    /// &#10;
    /// &#10;dataSource — Object|Array|kendo.data.DataSource 
    /// &#10;The data source of the widget which is used to display a list of values. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
/// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.DataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.DataSource instance the widget will use that instance and will not initialize a new one.
    /// &#10;
    /// &#10;dataTextField — String (default: "")
    /// &#10;The field of the data item that provides the text content of the list items. The widget will filter the data source based on this field.
    /// &#10;
    /// &#10;dataValueField — String (default: "")
    /// &#10;The field of the data item that provides the value of the widget.
    /// &#10;
    /// &#10;delay — Number (default: 200)
    /// &#10;The delay in milliseconds between a keystroke and when the widget displays the popup.
    /// &#10;
    /// &#10;enable — Boolean (default: true)
    /// &#10;If set to false the widget will be disabled and will not allow user input. The widget is enabled by default and allows user input.
    /// &#10;
    /// &#10;filter — String (default: "none")
    /// &#10;The filtering method used to determine the suggestions for the current value. Filtration is turned off by default.
/// &#10;The supported filter values are startswith, endswith and contains.
    /// &#10;
    /// &#10;fixedGroupTemplate — String|Function 
    /// &#10;The template used to render the fixed header group. By default the widget displays only the value of the current group.
    /// &#10;
    /// &#10;groupTemplate — String|Function 
    /// &#10;The template used to render the groups. By default the widget displays only the value of the group.
    /// &#10;
    /// &#10;height — Number (default: 200)
    /// &#10;The height of the suggestion popup in pixels. The default value is 200 pixels.
    /// &#10;
    /// &#10;highlightFirst — Boolean (default: true)
    /// &#10;If set to true the first suggestion will be automatically highlighted.
    /// &#10;
    /// &#10;ignoreCase — String (default: true)
    /// &#10;If set to false case-sensitive search will be performed to find suggestions. The widget performs case-insensitive searching by default.
    /// &#10;
    /// &#10;index — Number (default: -1)
    /// &#10;The index of the initially selected item. The index is 0 based.
    /// &#10;
    /// &#10;minLength — Number (default: 1)
    /// &#10;The minimum number of characters the user must type before a search is performed. Set to higher value than 1 if the search could match a lot of items.
    /// &#10;
    /// &#10;placeholder — String (default: "")
    /// &#10;The hint displayed by the widget when it is empty. Not set by default.
    /// &#10;
    /// &#10;popup — Object 
    /// &#10;The options that will be used for the popup initialization. For more details about the available options
/// &#10;refer to Popup documentation.
    /// &#10;
    /// &#10;suggest — Boolean (default: false)
    /// &#10;If set to true the widget will automatically use the first suggestion as its value.
    /// &#10;
    /// &#10;headerTemplate — String|Function 
    /// &#10;Specifies a static HTML content, which will be rendered as a header of the popup element.
    /// &#10;
    /// &#10;template — String|Function 
    /// &#10;The template used to render the items. By default the widget displays only the text of the data item (configured via dataTextField).
    /// &#10;
    /// &#10;text — String (default: "")
    /// &#10;The text of the widget used when the autoBind is set to false.
    /// &#10;
    /// &#10;value — String (default: "")
    /// &#10;The value of the widget.
    /// &#10;
    /// &#10;valuePrimitive — Boolean (default: false)
    /// &#10;Specifies the value binding behavior for the widget when the initial model value is null. If set to true, the View-Model field will be updated with the selected item value field. If set to false, the View-Model field will be updated with the selected item.
    /// &#10;
    /// &#10;virtual — Boolean (default: false)
    /// &#10;Enables the virtualization feature of the widget.
    /// &#10;
    /// &#10;virtual — Object (default: false)
    /// &#10;Enables the virtualization feature of the widget.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ContextMenu = function() { };

kendo.ui.ContextMenu.prototype = {




    append: function(item,referenceItem) {
        /// <summary>
        /// Appends an item to a ContextMenu in the specified referenceItem's sub menu (or the root context menu if not specified).
        /// </summary>
        /// <param name="item" type="Object" >Item to be appended, specified as a JSON object. An array of objects can also be passed.</param>
        /// <param name="referenceItem" type="Object" >A reference item to append the new item in. Root context menu if not specified.</param>
        /// <returns type="kendo.ui.ContextMenu">Returns the ContextMenu object to support chaining.</returns>

    },


    close: function(element) {
        /// <summary>
        /// Closes the ContextMenu. This method can be prevented to stop the closure.
        /// </summary>
        /// <param name="element" type="Object" >If called without arguments, will close the ContextMenu. If passed an item, it will be closed (if opened).</param>
        /// <returns type="kendo.ui.ContextMenu">Returns the ContextMenu object to support chaining.</returns>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the ContextMenu for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    enable: function(element,enable) {
        /// <summary>
        /// Enables or disables an item of a ContextMenu. This can optionally be accomplished on
/// initialization by setting the disabled="disabled" on the desired menu item html element.
        /// </summary>
        /// <param name="element" type="Object" >Target element</param>
        /// <param name="enable" type="Boolean" >Desired state</param>
        /// <returns type="kendo.ui.ContextMenu">Returns the ContextMenu object to support chaining.</returns>

    },


    insertAfter: function(item,referenceItem) {
        /// <summary>
        /// Inserts an item into a ContextMenu after the specified referenceItem.
        /// </summary>
        /// <param name="item" type="Object" >Target item, specified as a JSON object. Can also handle an array of such objects.</param>
        /// <param name="referenceItem" type="Object" >A reference item to insert the new item after.</param>
        /// <returns type="kendo.ui.ContextMenu">Returns the ContextMenu object to support chaining.</returns>

    },


    insertBefore: function(item,referenceItem) {
        /// <summary>
        /// Inserts an item into a ContextMenu before the specified referenceItem.
        /// </summary>
        /// <param name="item" type="Object" >Target item, specified as a JSON object. Can also handle an array of such objects.</param>
        /// <param name="referenceItem" type="Object" >A reference item to insert the new item before</param>
        /// <returns type="kendo.ui.ContextMenu">Returns the ContextMenu object to support chaining.</returns>

    },


    open: function(x,y) {
        /// <summary>
        /// Shows the ContextMenu at the specified coordinates in pixels or aligned to the specified anchor. If passed an item, it will be opened. This method can be prevented to stop the ContextMenu from opening.
        /// </summary>
        /// <param name="x" type="Object" >X coordinate in pixels or the anchor element to which to align. If passed an item - jQuery object or element - it will be opened.</param>
        /// <param name="y" type="Number" >Y coordinate in pixels. If not specified, ContextMenu will assume the first parameter is an anchor element.</param>
        /// <returns type="kendo.ui.ContextMenu">Returns the ContextMenu object to support chaining.</returns>

    },


    remove: function(element) {
        /// <summary>
        /// Removes a specified item(s) from a ContextMenu.
        /// </summary>
        /// <param name="element" type="Object" >Target item selector.</param>
        /// <returns type="kendo.ui.ContextMenu">Returns the ContextMenu object to support chaining.</returns>

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

$.fn.getKendoContextMenu = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.ContextMenu widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ContextMenu">The kendo.ui.ContextMenu instance (if present).</returns>
};

$.fn.kendoContextMenu = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.ContextMenu widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;alignToAnchor — Boolean (default: false)
    /// &#10;Specifies that ContextMenu should be shown aligned to the target or the filter element if specified.
    /// &#10;
    /// &#10;animation — Object 
    /// &#10;A collection of Animation objects, used to change default animations. A value of false will disable all animations in the widget.Available animations for the ContextMenu are listed below.  Each animation has a reverse options which is used for the close effect by default, but can be over-ridden
/// &#10;by setting the close animation. Each animation also has a direction which can be set off the animation (i.e. slideIn:Down).
    /// &#10;
    /// &#10;closeOnClick — Boolean (default: true)
    /// &#10;Specifies that sub menus should close after item selection (provided they won't navigate).
    /// &#10;
    /// &#10;dataSource — Object|Array 
    /// &#10;The data source of the widget which is used to render its items. Can be a JSON object/Array that contains an item or an Array of items to be rendered.
/// &#10;Refer to the example below for a list of the supported properties.
    /// &#10;
    /// &#10;direction — String (default: "default")
    /// &#10;Specifies ContextMenu's sub menu opening direction. Can be "top", "bottom", "left", "right".
/// &#10;The example below will initialize the sub menus to open to the left.
    /// &#10;
    /// &#10;filter — String 
    /// &#10;Specifies ContextMenu filter selector - the ContextMenu will only be shown on items that satisfy the provided selector.
    /// &#10;
    /// &#10;hoverDelay — Number (default: 100)
    /// &#10;Specifies the delay in ms before the sub menus are opened/closed - used to avoid accidental closure on leaving.
    /// &#10;
    /// &#10;orientation — String (default: "vertical")
    /// &#10;Root menu orientation. Could be horizontal or vertical.
    /// &#10;
    /// &#10;popupCollision — String 
    /// &#10;Specifies how ContextMenu should adjust to screen boundaries. By default the strategy is "fit" for a sub menu with a horizontal parent or the root menu,
/// &#10;meaning it will move to fit in screen boundaries in all directions, and "fit flip" for a sub menu with vertical parent, meaning it will fit vertically and flip over
/// &#10;its parent horizontally. You can also switch off the screen boundary detection completely if you set the popupCollision to false.
    /// &#10;
    /// &#10;showOn — String 
    /// &#10;Specifies the event or events on which ContextMenu should open. By default ContextMenu will show on contextmenu event on desktop and hold event on touch devices.
/// &#10;Could be any pointer/mouse/touch event, also several, separated by spaces.
    /// &#10;
    /// &#10;target — String|jQuery (default: "body")
    /// &#10;Specifies the element on which ContextMenu should open. The default element is the document body.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.DatePicker = function() { };

kendo.ui.DatePicker.prototype = {




    close: function() {
        /// <summary>
        /// Closes the calendar.
        /// </summary>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the DatePicker for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    enable: function(enable) {
        /// <summary>
        /// Enable/Disable the DatePicker widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >The argument, which defines whether to enable/disable the DatePicker.</param>

    },


    readonly: function(readonly) {
        /// <summary>
        /// Toggles the readonly state of the widget. When the widget is readonly it doesn't allow user input.
        /// </summary>
        /// <param name="readonly" type="Boolean" >The argument, which defines whether the DatePicker should be readonly or editable.</param>

    },


    max: function(value) {
        /// <summary>
        /// Gets/Sets the max value of the DatePicker.
        /// </summary>
        /// <param name="value" type="Object" >The max date to set.</param>
        /// <returns type="Date">The max value of the DatePicker.</returns>

    },


    min: function(value) {
        /// <summary>
        /// Gets/Sets the min value of the DatePicker.
        /// </summary>
        /// <param name="value" type="Object" >The min date to set.</param>
        /// <returns type="Date">The min value of the DatePicker.</returns>

    },


    open: function() {
        /// <summary>
        /// Opens the calendar.
        /// </summary>

    },


    setOptions: function(options) {
        /// <summary>
        /// Changes the initial DatePicker configuration.
        /// </summary>
        /// <param name="options" type="Object" >The new configuration options.</param>

    },


    value: function(value) {
        /// <summary>
        /// Gets/Sets the value of the DatePicker.
        /// </summary>
        /// <param name="value" type="Object" >The value to set.</param>
        /// <returns type="Date">The value of the DatePicker.</returns>

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

$.fn.getKendoDatePicker = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.DatePicker widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.DatePicker">The kendo.ui.DatePicker instance (if present).</returns>
};

$.fn.kendoDatePicker = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.DatePicker widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;animation — Object 
    /// &#10;Configures the opening and closing animations of the calendar popup. Setting the animation option to false will disable the opening and closing animations. As a result the calendar popup will open and close instantly.
    /// &#10;
    /// &#10;ARIATemplate — String (default: "Current focused date is #=kendo.toString(data.current, 'D'#"))
    /// &#10;Specifies a template used to populate value of the aria-label attribute.
    /// &#10;
    /// &#10;culture — String (default: "en-US")
    /// &#10;Specifies the culture info used by the widget.
    /// &#10;
    /// &#10;dates — Array 
    /// &#10;Specifies a list of dates, which will be passed to the month template.
    /// &#10;
    /// &#10;depth — String 
    /// &#10;Specifies the navigation depth. The following
/// &#10;settings are available for the depth value:
    /// &#10;
    /// &#10;footer — String|Function 
    /// &#10;The template which renders the footer of the calendar. If false, the footer will not be rendered.
    /// &#10;
    /// &#10;format — String (default: "MM/dd/yyyy")
    /// &#10;Specifies the format, which is used to format the value of the DatePicker displayed in the input. The format also will be used to parse the input.
    /// &#10;
    /// &#10;max — Date (default: Date(2099, 11, 31))
    /// &#10;Specifies the maximum date, which the calendar can show.
    /// &#10;
    /// &#10;min — Date (default: Date(1900, 0, 1))
    /// &#10;Specifies the minimum date that the calendar can show.
    /// &#10;
    /// &#10;month — Object 
    /// &#10;Templates for the cells rendered in the calendar "month" view.
    /// &#10;
    /// &#10;parseFormats — Array 
    /// &#10;Specifies a list of date formats used to parse the value set with value() method or by direct user input. If not set the value of the format will be used.
/// &#10; Note that the format option is always used during parsing.
    /// &#10;
    /// &#10;start — String (default: "month")
    /// &#10;Specifies the start view.
/// &#10;The following settings are available for the start value:
    /// &#10;
    /// &#10;value — Date (default: null)
    /// &#10;Specifies the selected date.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.DateTimePicker = function() { };

kendo.ui.DateTimePicker.prototype = {




    close: function(view) {
        /// <summary>
        /// Closes the calendar or the time drop-down list.
        /// </summary>
        /// <param name="view" type="String" >The view of the DateTimePicker, expressed as a string. Available views are "time" and "date".</param>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the DateTimePicker for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    enable: function(enable) {
        /// <summary>
        /// Enables or disables a DateTimePicker.
        /// </summary>
        /// <param name="enable" type="Boolean" >Enables (true or undefined) or disables (false) a DateTimePicker.</param>

    },


    readonly: function(readonly) {
        /// <summary>
        /// Toggles the readonly state of the widget. When the widget is readonly it doesn't allow user input.
        /// </summary>
        /// <param name="readonly" type="Boolean" >The argument, which defines whether the DateTimePicker should be readonly or editable.</param>

    },


    max: function(value) {
        /// <summary>
        /// Gets or sets the maximum value of the DateTimePicker.
        /// </summary>
        /// <param name="value" type="Object" >The maximum time value to set for a DateTimePicker, expressed as a Date object or as a string.</param>
        /// <returns type="Date">The maximum time value of a DateTimePicker.</returns>

    },


    min: function(value) {
        /// <summary>
        /// Gets or sets the minimum value of the DateTimePicker.
        /// </summary>
        /// <param name="value" type="Object" >The minimum time value to set for a DateTimePicker, expressed as a Date object or as a string.</param>
        /// <returns type="Date">The minimum time value of a DateTimePicker.</returns>

    },


    open: function(view) {
        /// <summary>
        /// Opens the calendar or the time drop-down list.
        /// </summary>
        /// <param name="view" type="String" >The view of the DateTimePicker, expressed as a string. Available views are "time" and "date".</param>

    },


    setOptions: function(options) {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="options" type="Object" >The new configuration options.</param>

    },


    toggle: function(view) {
        /// <summary>
        /// Toggles the calendar or the time drop-down list.
        /// </summary>
        /// <param name="view" type="String" >The view of the DateTimePicker, expressed as a string. Available views are "time" and "date".</param>

    },


    value: function(value) {
        /// <summary>
        /// Gets or sets the value of the DateTimePicker.
        /// </summary>
        /// <param name="value" type="Object" >The time value to set for a DateTimePicker, expressed as a Date object or as a string.</param>
        /// <returns type="Date">The time value of a DateTimePicker.</returns>

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

$.fn.getKendoDateTimePicker = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.DateTimePicker widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.DateTimePicker">The kendo.ui.DateTimePicker instance (if present).</returns>
};

$.fn.kendoDateTimePicker = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.DateTimePicker widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;animation — Object 
    /// &#10;Configures the opening and closing animations of the popups. Setting the animation option to false will disable the opening and closing animations. As a result the popup will open and close instantly.
    /// &#10;
    /// &#10;ARIATemplate — String (default: "Current focused date is #=kendo.toString(data.current, 'G'#"))
    /// &#10;Specifies a template used to populate value of the aria-label attribute.
    /// &#10;
    /// &#10;culture — String (default: "en-US")
    /// &#10;Specifies the culture info used by the widget.
    /// &#10;
    /// &#10;dates — Array 
    /// &#10;Specifies a list of dates, which will be passed to the month template of the DateView. All dates, which match the date portion of the selected date will be used to re-bind the TimeView.
    /// &#10;
    /// &#10;depth — String 
    /// &#10;Specifies the navigation depth of the calendar. The following
/// &#10;settings are available for the depth value:
    /// &#10;
    /// &#10;footer — String 
    /// &#10;The template which renders the footer of the calendar. If false, the footer will not be rendered.
    /// &#10;
    /// &#10;format — String (default: "MM/dd/yyyy h:mm tt")
    /// &#10;Specifies the format, which is used to format the value of the DateTimePicker displayed in the input. The format also will be used to parse the input.
    /// &#10;
    /// &#10;interval — Number (default: 30)
    /// &#10;Specifies the interval, between values in the popup list, in minutes.
    /// &#10;
    /// &#10;max — Date (default: Date(2099, 11, 31))
    /// &#10;Specifies the maximum date, which the calendar can show.
    /// &#10;
    /// &#10;min — Date (default: Date(1900, 0, 1))
    /// &#10;Specifies the minimum date that the calendar can show.
    /// &#10;
    /// &#10;month — Object 
    /// &#10;Templates for the cells rendered in the calendar "month" view.
    /// &#10;
    /// &#10;parseFormats — Array 
    /// &#10;Specifies the formats, which are used to parse the value set with value() method or by direct input. If not set the value of the options.format and options.timeFormat will be used.
/// &#10; Note that value of the format option is always used. The timeFormat value also will be used if defined.
    /// &#10;
    /// &#10;start — String (default: "month")
    /// &#10;Specifies the start view of the calendar.
/// &#10; The following settings are available for the start value:
    /// &#10;
    /// &#10;timeFormat — String (default: "h:mm tt")
    /// &#10;Specifies the format, which is used to format the values in the time drop-down list.
    /// &#10;
    /// &#10;value — Date (default: null)
    /// &#10;Specifies the selected value.
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
    /// &#10;autoScroll — Boolean (default: false)
    /// &#10;If set to true the widget will auto-scroll the container when the mouse/finger is close to the top/bottom of it.
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
    /// &#10;Suitable for touch oriented user interface, in order to avoid collision with the touch scrolling gesture.
/// &#10;When set to true, the widget will be activated after the user taps and holds the finger on the element for a short amount of time.The draggable will also be activated by pressing, holding and lifting the finger without any movement. Dragging it afterwards will initiate the drag immediately.
/// &#10;The activated mode can be canceled by calling cancelHold.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.DropDownList = function() { };

kendo.ui.DropDownList.prototype = {




    close: function() {
        /// <summary>
        /// Closes the widget popup.
        /// </summary>

    },


    dataItem: function(index) {
        /// <summary>
        /// Returns the data item at the specified index. If the index is not specified, the selected index will be used.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index of the data record.</param>
        /// <returns type="Object">The raw data record. Returns undefined if no data.</returns>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the DropDownList for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    focus: function() {
        /// <summary>
        /// Focuses the widget.
        /// </summary>

    },


    open: function() {
        /// <summary>
        /// Opens the popup.
        /// </summary>

    },


    enable: function(enable) {
        /// <summary>
        /// Enables or disables the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >If set to true the widget will be enabled. If set to false the widget will be disabled.</param>

    },


    readonly: function(readonly) {
        /// <summary>
        /// Controls whether the widget is editable or readonly.
        /// </summary>
        /// <param name="readonly" type="Boolean" >The argument, which defines whether the DropDownList should be readonly or editable.</param>

    },


    refresh: function() {
        /// <summary>
        /// Refresh the popup by rendering all items again.
        /// </summary>

    },


    search: function(word) {
        /// <summary>
        /// Selects an item, which starts with the provided value.
        /// </summary>
        /// <param name="word" type="String" >The search value.</param>

    },


    select: function(li) {
        /// <summary>
        /// Gets or sets the selected item. Selects the item provided as an argument and updates the value and text of the widget.
        /// </summary>
        /// <param name="li" type="Object" >A string, DOM element or jQuery object which represents the item to be selected. A string is treated as a jQuery selector. A number representing the index of the item or function predicate which returns the correct data item.</param>
        /// <returns type="Number">The index of the selected item, if called with no parameters. If a custom value is entered, the returned selected index is -1. If called with a parameter as a setter.</returns>

    },


    setDataSource: function(dataSource) {
        /// <summary>
        /// Sets the dataSource of an existing DropDownList and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" ></param>

    },


    text: function(text) {
        /// <summary>
        /// Gets or sets the text of the DropDownList.
        /// </summary>
        /// <param name="text" type="String" >The text to set.</param>
        /// <returns type="String">The text of the DropDownList.</returns>

    },


    toggle: function(toggle) {
        /// <summary>
        /// Opens or closes the widget popup.
        /// </summary>
        /// <param name="toggle" type="Boolean" >Defines the whether to open/close the drop-down list.</param>

    },


    value: function(value) {
        /// <summary>
        /// Gets or sets the value of the DropDownList. The value will not be set if there is no item with such value. If value is undefined, text of the data item is used.
        /// </summary>
        /// <param name="value" type="String" >The value to set.</param>
        /// <returns type="String">The value of the DropDownList.</returns>

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

$.fn.getKendoDropDownList = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.DropDownList widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.DropDownList">The kendo.ui.DropDownList instance (if present).</returns>
};

$.fn.kendoDropDownList = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.DropDownList widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;animation — Object 
    /// &#10;Configures the opening and closing animations of the suggestion popup. Setting the animation option to false will disable the opening and closing animations. As a result the suggestion popup will open and close instantly.
    /// &#10;
    /// &#10;autoBind — Boolean (default: true)
    /// &#10;Controls whether to bind the widget to the data source on initialization.
    /// &#10;
    /// &#10;cascadeFrom — String 
    /// &#10;Use it to set the Id of the parent DropDownList widget.
/// &#10;Help topic showing how cascading functionality works
    /// &#10;
    /// &#10;cascadeFromField — String 
    /// &#10;Defines the field to be used to filter the data source. If not defined the parent's dataValueField option will be used.
/// &#10;Help topic showing how cascading functionality works
    /// &#10;
    /// &#10;dataSource — Object|Array|kendo.data.DataSource 
    /// &#10;The data source of the widget which is used to display a list of values. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
/// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.DataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.DataSource instance the widget will use that instance and will not initialize a new one.
    /// &#10;
    /// &#10;dataTextField — String (default: "")
    /// &#10;The field of the data item that provides the text content of the list items. The widget will filter the data source based on this field.
    /// &#10;
    /// &#10;dataValueField — String (default: "")
    /// &#10;The field of the data item that provides the value of the widget.
    /// &#10;
    /// &#10;delay — Number (default: 500)
    /// &#10;Specifies the delay in milliseconds before the search-text typed by the end user is cleared.
    /// &#10;
    /// &#10;enable — Boolean (default: true)
    /// &#10;If set to false the widget will be disabled and will not allow user input. The widget is enabled by default and allows user input.
    /// &#10;
    /// &#10;filter — String (default: "none")
    /// &#10;The filtering method used to determine the suggestions for the current value. Filtration is turned off by default.
/// &#10;The supported filter values are startswith, endswith and contains.
    /// &#10;
    /// &#10;fixedGroupTemplate — String|Function 
    /// &#10;The template used to render the fixed header group. By default the widget displays only the value of the current group.
    /// &#10;
    /// &#10;groupTemplate — String|Function 
    /// &#10;The template used to render the groups. By default the widget displays only the value of the group.
    /// &#10;
    /// &#10;height — Number (default: 200)
    /// &#10;The height of the suggestion popup in pixels. The default value is 200 pixels.
    /// &#10;
    /// &#10;ignoreCase — String (default: true)
    /// &#10;If set to false case-sensitive search will be performed to find suggestions. The widget performs case-insensitive searching by default.
    /// &#10;
    /// &#10;index — Number (default: 0)
    /// &#10;The index of the initially selected item. The index is 0 based.
    /// &#10;
    /// &#10;minLength — Number (default: 1)
    /// &#10;The minimum number of characters the user must type before a filter is performed. Set to higher value than 1 if the search could match a lot of items.
    /// &#10;
    /// &#10;popup — Object 
    /// &#10;The options that will be used for the popup initialization. For more details about the available options
/// &#10;refer to Popup documentation.
    /// &#10;
    /// &#10;optionLabel — String|Object (default: "")
    /// &#10;Define the text of the default empty item. If the value is an object, then the widget will use it as a valid data item.
/// &#10; Note that the optionLabel will not be available if the widget is empty.
    /// &#10;
    /// &#10;optionLabelTemplate — String|Function 
    /// &#10;The template used to render the option label.
    /// &#10;
    /// &#10;headerTemplate — String|Function 
    /// &#10;Specifies a static HTML content, which will be rendered as a header of the popup element.
    /// &#10;
    /// &#10;template — String|Function 
    /// &#10;The template used to render the items. By default the widget displays only the text of the data item (configured via dataTextField).
    /// &#10;
    /// &#10;valueTemplate — String|Function 
    /// &#10;The valueTemplate used to render the selected value. By default the widget displays only the text of the data item (configured via dataTextField).
    /// &#10;
    /// &#10;text — String (default: "")
    /// &#10;The text of the widget used when the autoBind is set to false.
    /// &#10;
    /// &#10;value — String (default: "")
    /// &#10;The value of the widget.
    /// &#10;
    /// &#10;valuePrimitive — Boolean (default: false)
    /// &#10;Specifies the value binding behavior for the widget when the initial model value is null. If set to true, the View-Model field will be updated with the selected item value field. If set to false, the View-Model field will be updated with the selected item.
    /// &#10;
    /// &#10;virtual — Boolean (default: false)
    /// &#10;Enables the virtualization feature of the widget.
    /// &#10;
    /// &#10;virtual — Object (default: false)
    /// &#10;Enables the virtualization feature of the widget.
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


kendo.ui.Editor = function() { };

kendo.ui.Editor.prototype = {




    createRange: function(document) {
        /// <summary>
        /// Creates a W3C-compatible Range object.
        /// </summary>
        /// <param name="document" type="Document" >The document that the range is associated with. If omitted, the document of the editor editing area will be used.</param>
        /// <returns type="Range">The created Range object.</returns>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    encodedValue: function() {
        /// <summary>
        /// Gets the HTML encoded value of the editor.
        /// </summary>

    },


    exec: function(name,params) {
        /// <summary>
        /// Executes an editor command on the currently selected text.
        /// </summary>
        /// <param name="name" type="String" >The name of the command to be executed. The available names match the list of tools, plus "undo" and "redo".</param>
        /// <param name="params" type="String" >The parameters for the executed command.</param>

    },


    focus: function() {
        /// <summary>
        /// Focuses the editable area.
        /// </summary>

    },


    getRange: function() {
        /// <summary>
        /// Gets a Range object form the editable area.
        /// </summary>
        /// <returns type="Range">A W3C-compatible Range object that represents the currently selected text in the editor area.</returns>

    },


    getSelection: function() {
        /// <summary>
        /// Gets a W3C-compatible Selection object form the editable area.
        /// </summary>
        /// <returns type="Selection">a W3C-compatible Selection object form the editable area.</returns>

    },


    paste: function(html,options) {
        /// <summary>
        /// Inserts HTML into the editable area. Cleans up MS Word formatting.
        /// </summary>
        /// <param name="html" type="String" >The HTML to be inserted.</param>
        /// <param name="options" type="" >Options that configure how the content is processed when pasting.</param>

    },


    selectedHtml: function() {
        /// <summary>
        /// Serializes the currently selected text to a XHTML string.
        /// </summary>
        /// <returns type="String">The selected text as valid XHTML.</returns>

    },


    refresh: function() {
        /// <summary>
        /// Reinitializes the editing area iframe. Should be used after moving the editor in the DOM.
        /// </summary>

    },


    saveAsPDF: function() {
        /// <summary>
        /// Initiates the PDF export and returns a promise. Also triggers the pdfExport event.
        /// </summary>
        /// <returns type="Promise">A promise that will be resolved when the export completes. The same promise is available in the pdfExport event arguments.</returns>

    },


    selectRange: function(range) {
        /// <summary>
        /// Focuses the editable area and selects the range described by the range parameter.
        /// </summary>
        /// <param name="range" type="Range" >The Range object that describes the new selection.</param>

    },


    update: function() {
        /// <summary>
        /// Serializes the current state of the editable area to the <textarea> element.
/// This method should be called after modifying the editor content through the DOM.
        /// </summary>

    },


    state: function(toolName) {
        /// <summary>
        /// Get the state of a given tool. Introduced in the 2013.2.923 internal build.
        /// </summary>
        /// <param name="toolName" type="String" >The name of the tool that will be tested if formatted.</param>
        /// <returns type="Boolean">The state of the tool.</returns>

    },


    value: function(value) {
        /// <summary>
        /// Gets or sets the editor value.
        /// </summary>
        /// <param name="value" type="String" >The value to set.</param>
        /// <returns type="String">The value of the Editor as HTML string.</returns>

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

$.fn.getKendoEditor = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.Editor widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.Editor">The kendo.ui.Editor instance (if present).</returns>
};

$.fn.kendoEditor = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.Editor widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;domain — String 
    /// &#10;Relaxes the same-origin policy when using the iframe-based editor.
/// &#10;This is done automatically for all cases except when the policy is relaxed by document.domain = document.domain.
/// &#10;In that case, this property must be used to allow the editor to function properly across browsers.
/// &#10;This property has been introduced in internal builds after 2014.1.319.
    /// &#10;
    /// &#10;encoded — Boolean (default: true)
    /// &#10;Indicates whether the Editor should submit encoded HTML tags. By default, the submitted value is encoded.
    /// &#10;
    /// &#10;messages — Object 
    /// &#10;Defines the text of the labels that are shown within the editor. Used primarily for localization.
    /// &#10;
    /// &#10;pdf — Object 
    /// &#10;Configures the Kendo UI Editor PDF export settings.
    /// &#10;
    /// &#10;resizable — Boolean (default: false)
    /// &#10;If enabled, the editor renders a resize handle to allow users to resize it.
    /// &#10;
    /// &#10;resizable — Object (default: false)
    /// &#10;If enabled, the editor renders a resize handle to allow users to resize it.
    /// &#10;
    /// &#10;serialization — Object 
    /// &#10;Allows setting of serialization options.
    /// &#10;
    /// &#10;stylesheets — Array 
    /// &#10;Allows custom stylesheets to be included within the editing area. This setting is applicable only when the Editor is initialized from a textarea
/// &#10;and a contenteditable iframe is generated.
    /// &#10;
    /// &#10;tools — Array 
    /// &#10;A collection of tools that are used to interact with the Editor.
/// &#10;Tools may be switched on by specifying their name.
/// &#10;Custom tools and tools that require configuration are defined as objects.The available editor commands are:
    /// &#10;
    /// &#10;imageBrowser — Object 
    /// &#10;Configuration for image browser dialog.
    /// &#10;
    /// &#10;fileBrowser — Object 
    /// &#10;Configuration for file browser dialog.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.FlatColorPicker = function() { };

kendo.ui.FlatColorPicker.prototype = {




    focus: function() {
        /// <summary>
        /// Focuses the widget.
        /// </summary>

    },


    value: function(color) {
        /// <summary>
        /// Get or set the selected color. If no argument is given, this returns the
/// currently selected color as a string in format #FFFFFF when the opacity
/// option is off, or rgba(255, 255, 255, 1) when opacity is requested.If one argument is given, it selects the new color and updates the UI.  The
/// argument can be a string in hex, rgb or rgba format, or a Color object.
/// This does not trigger the "change" event.
        /// </summary>
        /// <param name="color" type="String" ></param>
        /// <returns type="String">the string representation of the current color.</returns>

    },


    color: function(color) {
        /// <summary>
        /// Get or set the selected color. If no argument is given, this returns the currently selected color as a kendo.Color object.
        /// </summary>
        /// <param name="color" type="kendo.Color" >The color that should be set as the current value</param>
        /// <returns type="kendo.Color">the current value</returns>

    },


    enable: function(enable) {
        /// <summary>
        /// Enables or disables the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >Whether the widget should be enabled (true) or disabled (false). If not specified, the method will enable the widget.</param>

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

$.fn.getKendoFlatColorPicker = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.FlatColorPicker widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.FlatColorPicker">The kendo.ui.FlatColorPicker instance (if present).</returns>
};

$.fn.kendoFlatColorPicker = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.FlatColorPicker widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;opacity — Boolean (default: false)
    /// &#10;Specifies whether we should display the opacity slider to allow
/// &#10;selection of transparency.
    /// &#10;
    /// &#10;buttons — Boolean (default: false)
    /// &#10;Specifies whether the widget should display the Apply / Cancel buttons.
    /// &#10;
    /// &#10;value — String (default: null)
    /// &#10;Specifies the initially selected color.
    /// &#10;
    /// &#10;preview — Boolean (default: true)
    /// &#10;Specifies whether we should display the preview bar which displays the
/// &#10;current color and the input field.
    /// &#10;
    /// &#10;autoupdate — Boolean (default: true)
    /// &#10;Specifies whether the UI should be updated while the user is typing in
/// &#10;the input field, whenever a valid color can be parsed.  If you pass
/// &#10;false for this, the widget will update only when ENTER is pressed.
    /// &#10;
    /// &#10;messages — Object 
    /// &#10;Allows customization of "Apply" / "Cancel" labels.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.Gantt = function() { };

kendo.ui.Gantt.prototype = {




    clearSelection: function() {
        /// <summary>
        /// Clears the currently selected task or dependency.
        /// </summary>

    },


    dataItem: function(row) {
        /// <summary>
        /// Returns the data item to which the specified table row from the TreeList is bound
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the table row. A string is treated as a jQuery selector.</param>
        /// <returns type="kendo.data.GanttTask">the task data item to which the specified table row is bound.</returns>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    refresh: function() {
        /// <summary>
        /// Renders all tasks and dependencies using the current data items.
        /// </summary>

    },


    refreshDependencies: function() {
        /// <summary>
        /// Renders all dependencies using the current data items.
        /// </summary>

    },


    removeDependency: function(dependency) {
        /// <summary>
        /// Removes the specified Gantt dependency.
        /// </summary>
        /// <param name="dependency" type="Object" >The dependency which should be removed. Also accepts a string which is the uid of the dependency which should be removed.</param>

    },


    removeTask: function(task) {
        /// <summary>
        /// Removes the specified Gantt task.
        /// </summary>
        /// <param name="task" type="Object" >The task which should be removed. Also accepts a string which is the uid of the task which should be removed.</param>

    },


    saveAsPDF: function() {
        /// <summary>
        /// Initiates the PDF export and returns a promise. Also triggers the pdfExport event.
        /// </summary>
        /// <returns type="Promise">A promise that will be resolved when the export completes. The same promise is available in the pdfExport event arguments.</returns>

    },


    select: function(row) {
        /// <summary>
        /// Gets or sets the table row which is selected.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the table row. A string is treated as a jQuery selector.</param>
        /// <returns type="jQuery">the selected table row.</returns>

    },


    setDataSource: function(dataSource) {
        /// <summary>
        /// Sets the tasks data source of the widget.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.GanttDataSource" >The tasks data source to which the widget should be bound.</param>

    },


    setDependenciesDataSource: function(dataSource) {
        /// <summary>
        /// Sets the dependencies data source of the widget.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.GanttDependencyDataSource" >The dependencies data source to which the widget should be bound.</param>

    },


    view: function(type) {
        /// <summary>
        /// Gets or sets the current Gantt view.
        /// </summary>
        /// <param name="type" type="String" >The view type to select.</param>
        /// <returns type="kendo.ui.GanttView">the current Gantt view.</returns>

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

$.fn.getKendoGantt = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.Gantt widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.Gantt">The kendo.ui.Gantt instance (if present).</returns>
};

$.fn.kendoGantt = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.Gantt widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;assignments — Object 
    /// &#10;The configuration of the assignments of the gantt resources. An assignment is a one-to-one mapping between a gantt task and a gantt resource containing the number of units for which a resource is assigned to a task.
    /// &#10;
    /// &#10;autoBind — Boolean (default: true)
    /// &#10;If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
/// &#10;data source is fired. By default the widget will bind to the data source specified in the configuration.
    /// &#10;
    /// &#10;columnResizeHandleWidth — Number (default: 3)
    /// &#10;Defines the width of the column resize handle in pixels. Apply a larger value for easier grasping.
    /// &#10;
    /// &#10;columns — Array 
    /// &#10;The configuration of the Gantt columns. An array of JavaScript objects or strings. A JavaScript objects are interpreted as column configurations. Strings are interpreted as the
/// &#10;field to which the column is bound. The Gantt will create a column for every item of the array.
    /// &#10;
    /// &#10;currentTimeMarker — Boolean 
    /// &#10;If set to false the "current time" marker of the Gantt would not be displayed.
    /// &#10;
    /// &#10;currentTimeMarker — Object 
    /// &#10;If set to false the "current time" marker of the Gantt would not be displayed.
    /// &#10;
    /// &#10;dataSource — Object|Array|kendo.data.GanttDataSource 
    /// &#10;The data source of the widget which contains the tasks. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.GanttDataSource
/// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.GanttDataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.GanttDataSource instance the widget will use that instance and will not initialize a new one.
    /// &#10;
    /// &#10;dependencies — Object|Array|kendo.data.GanttDependencyDataSource 
    /// &#10;The data source of the widget which contains the dependencies. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.GanttDependencyDataSource
/// &#10;instance.If the dependencies option is set to a JavaScript object or array the widget will initialize a new kendo.data.GanttDependencyDataSource instance using that value as data source configuration.If the dependencies option is an existing kendo.data.GanttDependencyDataSource instance the widget will use that instance and will not initialize a new one.
    /// &#10;
    /// &#10;editable — Boolean (default: true)
    /// &#10;If set to false the user won't be able to create, modify or delete tasks and dependencies.
    /// &#10;
    /// &#10;editable — Object (default: true)
    /// &#10;If set to false the user won't be able to create, modify or delete tasks and dependencies.
    /// &#10;
    /// &#10;navigatable — Boolean (default: false)
    /// &#10;If set to true the user could navigate the widget using the keyboard. By default keyboard navigation is disabled.
    /// &#10;
    /// &#10;workDayStart — Date 
    /// &#10;Sets the start of the work day.
    /// &#10;
    /// &#10;workDayEnd — Date 
    /// &#10;Sets the end of the work day.
    /// &#10;
    /// &#10;workWeekStart — Number (default: 1)
    /// &#10;The start of working week (index based).
    /// &#10;
    /// &#10;workWeekEnd — Number (default: 5)
    /// &#10;The end of working week (index based).
    /// &#10;
    /// &#10;hourSpan — Number (default: 1)
    /// &#10;The span of an hour slot.
    /// &#10;
    /// &#10;snap — Boolean (default: true)
    /// &#10;If set to true the Gantt will snap tasks to the nearest slot during dragging (resizing or moving). Set it to false to allow free moving and resizing of tasks.
    /// &#10;
    /// &#10;height — Number|String (default: 600)
    /// &#10;The height of the widget. Numeric values are treated as pixels.
    /// &#10;
    /// &#10;listWidth — String|Number (default: "30%")
    /// &#10;The width of the task list. Numeric values are treated as pixels.
    /// &#10;
    /// &#10;messages — Object 
    /// &#10;The configuration of the Gantt messages. Use this option to customize or localize the Gantt messages.
    /// &#10;
    /// &#10;pdf — Object 
    /// &#10;Configures the Kendo UI Gantt PDF export settings.
    /// &#10;
    /// &#10;resizable — Boolean (default: false)
    /// &#10;If set to true allows users to resize columns by dragging their header borders. By default resizing is disabled.
    /// &#10;
    /// &#10;selectable — Boolean (default: true)
    /// &#10;If set to false the user won't be able to select tasks in the Gantt. By default selection is enabled and triggers the change event.
    /// &#10;
    /// &#10;showWorkDays — Boolean (default: true)
    /// &#10;If set to false, Gantt views will show all days of the week. By default the views display only business days.
    /// &#10;
    /// &#10;showWorkHours — Boolean (default: true)
    /// &#10;If set to false, the day view will show all hours of the day. By default the view displays only business hours.
    /// &#10;
    /// &#10;taskTemplate — String|Function 
    /// &#10;The template used to render the gantt tasks.The fields which can be used in the template are the task fields
    /// &#10;
    /// &#10;toolbar — String|Function 
    /// &#10;If a String value is assigned to the toolbar configuration option, it will be treated as a single string template for the whole Gantt Toolbar,
/// &#10;and the string value will be passed as an argument to a kendo.template() function.If a Function value is assigned (it may be a kendo.template() function call or a generic function reference), then the return value of the function will be used to render the Gantt Toolbar contents.If an Array value is assigned, it will be treated as the list of commands displayed in the Gantt Toolbar. Commands can be custom or built-in ("append", "pdf").The "append" command adds a new task to the gantt.The "pdf" command exports the gantt in PDF format.
    /// &#10;
    /// &#10;toolbar — Array 
    /// &#10;If a String value is assigned to the toolbar configuration option, it will be treated as a single string template for the whole Gantt Toolbar,
/// &#10;and the string value will be passed as an argument to a kendo.template() function.If a Function value is assigned (it may be a kendo.template() function call or a generic function reference), then the return value of the function will be used to render the Gantt Toolbar contents.If an Array value is assigned, it will be treated as the list of commands displayed in the Gantt Toolbar. Commands can be custom or built-in ("append", "pdf").The "append" command adds a new task to the gantt.The "pdf" command exports the gantt in PDF format.
    /// &#10;
    /// &#10;tooltip — Object 
    /// &#10;The task tooltip configuration options.
    /// &#10;
    /// &#10;views — Array 
    /// &#10;The views displayed by the Gantt and their configuration. The array items can be either objects specifying the view configuration or strings representing the view types (assuming default configuration).
/// &#10;By default the Kendo UI Gantt widget displays "day", "week", and "month" views.
    /// &#10;
    /// &#10;resources — Object 
    /// &#10;The configuration of the gantt resource(s). A gantt resource is optional metadata that can be associated
/// &#10;with a gantt task.
    /// &#10;
    /// &#10;rowHeight — Number|String 
    /// &#10;The height of the table rows. Numeric values are treated as pixels.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.Grid = function() { };

kendo.ui.Grid.prototype = {




    addRow: function() {
        /// <summary>
        /// Adds an empty data item to the grid. In "incell" and "inline" editing mode a table row will be appended. Popup window will be displayed in "popup" editing mode.Fires the edit event.
        /// </summary>

    },


    autoFitColumn: function(column) {
        /// <summary>
        /// Applies the minimum possible width for the specified column, so that all text fits without wrapping.
        /// </summary>
        /// <param name="column" type="Object" >The index of the column, or the field to which the columns is bound, or the column object obtained from the columns collection.When using multicolumn headers, using an index is not allowed. In such scenarios, please use a field name or a column object as a method argument.</param>

    },


    cancelChanges: function() {
        /// <summary>
        /// Cancels any pending changes in the data source. Deleted data items are restored, new data items are removed and updated data items are restored to their initial state.
        /// </summary>

    },


    cancelRow: function() {
        /// <summary>
        /// Cancels editing for the table row which is in edit mode. Reverts any changes made.
        /// </summary>

    },


    cellIndex: function(cell) {
        /// <summary>
        /// Returns the index of the specified table cell. Skips group and detail table cells.
        /// </summary>
        /// <param name="cell" type="Object" >A string, DOM element or jQuery object which represents the table cell. A string is treated as a jQuery selector.</param>
        /// <returns type="Number">the index of the specified table cell.</returns>

    },


    clearSelection: function() {
        /// <summary>
        /// Clears the currently selected table rows or cells (depending on the current selection mode).
        /// </summary>

    },


    closeCell: function(isCancel) {
        /// <summary>
        /// Stops editing the table cell which is in edit mode. Requires "incell" edit mode.
        /// </summary>
        /// <param name="isCancel" type="Boolean" >A flag specifying whether to fire the cancel event. By default the event is not fired.</param>

    },


    collapseGroup: function(row) {
        /// <summary>
        /// Collapses the specified group. This hides the group items.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the group table row. A string is treated as a jQuery selector.</param>

    },


    collapseRow: function(row) {
        /// <summary>
        /// Collapses the specified master table row. This hides its detail table row.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the master table row. A string is treated as a jQuery selector.</param>

    },


    current: function(cell) {
        /// <summary>
        /// Gets or sets the current cell for keyboard navigation.
        /// </summary>
        /// <param name="cell" type="jQuery" >DOM element or jQuery object which represents the navigatable cell.</param>
        /// <returns type="jQuery">the current cell.</returns>

    },


    dataItem: function(row) {
        /// <summary>
        /// Returns the data item to which the specified table row is bound. The data item is a Kendo UI Model instance.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the table row. A string is treated as a jQuery selector.</param>
        /// <returns type="kendo.data.ObservableObject">the data item to which the specified table row is bound. More information about the ObservableObject type...</returns>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls the destroy method of any child Kendo widgets.
        /// </summary>

    },


    editCell: function(cell) {
        /// <summary>
        /// Switches the specified table cell in edit mode. Requires "incell" edit mode.Fires the edit event.
        /// </summary>
        /// <param name="cell" type="jQuery" >The jQuery object which represents the table cell.</param>

    },


    editRow: function(row) {
        /// <summary>
        /// Switches the specified table row in edit mode. Requires "inline" or "popup" edit mode.Fires the edit event.
        /// </summary>
        /// <param name="row" type="jQuery" >The jQuery object which represents the table row.</param>

    },


    expandGroup: function(row) {
        /// <summary>
        /// Expands the specified group. This shows the group items.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the group table row. A string is treated as a jQuery selector. Expands specified group.</param>

    },


    expandRow: function(row) {
        /// <summary>
        /// Expands the specified master table row. This shows its detail table row.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the master table row. A string is treated as a jQuery selector. Expands specified master row.</param>

    },


    getOptions: function() {
        /// <summary>
        /// Retrieves the options that are currently enabled or disabled on the Grid, also gives the current state of the dataSource.
/// Use this method if you want to save the state of the Grid into a variable.
        /// </summary>
        /// <returns type="Object">The configuration options of the widget.</returns>

    },


    hideColumn: function(column) {
        /// <summary>
        /// Hides the specified grid column.
        /// </summary>
        /// <param name="column" type="Object" >The index of the column, or the field to which the columns is bound, or the column object obtained from the columns collection.When using multicolumn headers, using an index will hide a top-level column together will all its "child columns". In such scenarios, using field names or column objects may be more appropriate.</param>

    },


    lockColumn: function(column) {
        /// <summary>
        /// Locks (freezes) a column, allowing users to see it at all times when scrolling.
        /// </summary>
        /// <param name="column" type="Object" >The index of the column or the field to which the columns is bound.</param>

    },


    refresh: function() {
        /// <summary>
        /// Renders all table rows using the current data items.
        /// </summary>

    },


    removeRow: function(row) {
        /// <summary>
        /// Removes the specified table row from the grid. Also removes the corresponding data item from the data source.Fires the remove event.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the table row. A string is treated as a jQuery selector.</param>

    },


    reorderColumn: function(destIndex,column) {
        /// <summary>
        /// Changes the position of the specified column.
        /// </summary>
        /// <param name="destIndex" type="Number" >The new position of the column. The destination index should be calculated with regard to all columns, including the hidden ones.</param>
        /// <param name="column" type="Object" >The column whose position should be changed.</param>

    },


    saveAsExcel: function() {
        /// <summary>
        /// Initiates the Excel export. Also fires the excelExport event.
        /// </summary>

    },


    saveAsPDF: function() {
        /// <summary>
        /// Initiates the PDF export and returns a promise. Also triggers the pdfExport event.
        /// </summary>
        /// <returns type="Promise">A promise that will be resolved when the export completes. The same promise is available in the pdfExport event arguments.</returns>

    },


    saveChanges: function() {
        /// <summary>
        /// Saves any pending changes by calling the sync method.Fires the saveChanges event.
        /// </summary>

    },


    saveRow: function() {
        /// <summary>
        /// Switches the table row which is in edit mode and saves any changes made by the user.
        /// </summary>

    },


    select: function(rows) {
        /// <summary>
        /// Gets or sets the table rows (or cells) which are selected.
        /// </summary>
        /// <param name="rows" type="Object" >A string, DOM element or jQuery object which represents the table row(s) or cell(s). A string is treated as a jQuery selector.</param>
        /// <returns type="jQuery">the selected table rows or cells.</returns>

    },


    setDataSource: function(dataSource) {
        /// <summary>
        /// Sets the data source of the widget.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" >The data source to which the widget should be bound.</param>

    },


    setOptions: function(options) {
        /// <summary>
        /// Sets the options of the Grid. Use this method if you want to enable/disable a particular feature/option or to load
/// the complete state obtained previously with the getOptions method.
        /// </summary>
        /// <param name="options" type="Object" >The configuration options to be set.</param>

    },


    showColumn: function(column) {
        /// <summary>
        /// Shows the specified column.
        /// </summary>
        /// <param name="column" type="Object" >The index of the column, or the field to which the columns is bound, or the column object obtained from the columns collection.When using multicolumn headers, using an index will hide a top-level column together will all its "child columns". In such scenarios, using field names or column objects may be more appropriate.</param>

    },


    unlockColumn: function(column) {
        /// <summary>
        /// Unlocks (unfreezes) a column.
        /// </summary>
        /// <param name="column" type="Object" >The index of the column or the field to which the columns is bound.</param>

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

$.fn.getKendoGrid = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.Grid widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.Grid">The kendo.ui.Grid instance (if present).</returns>
};

$.fn.kendoGrid = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.Grid widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;allowCopy — Boolean (default: false)
    /// &#10;If set to true and selection of the Grid is enabled the user could copy the selection into the clipboard and paste it into Excel or other similar programs that understand TSV/CSV formats. By default allowCopy is disabled and the default format is TSV.
/// &#10;Can be set to a JavaScript object which represents the allowCopy configuration.
    /// &#10;
    /// &#10;allowCopy — Object (default: false)
    /// &#10;If set to true and selection of the Grid is enabled the user could copy the selection into the clipboard and paste it into Excel or other similar programs that understand TSV/CSV formats. By default allowCopy is disabled and the default format is TSV.
/// &#10;Can be set to a JavaScript object which represents the allowCopy configuration.
    /// &#10;
    /// &#10;altRowTemplate — String|Function 
    /// &#10;The template which renders the alternating table rows. Be default the grid renders a table row () for every data source item.
    /// &#10;
    /// &#10;autoBind — Boolean (default: true)
    /// &#10;If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
/// &#10;data source is fired. By default the widget will bind to the data source specified in the configuration.
    /// &#10;
    /// &#10;columnResizeHandleWidth — Number (default: 3)
    /// &#10;Defines the width of the column resize handle in pixels. Apply a larger value for easier grasping.
    /// &#10;
    /// &#10;columns — Array 
    /// &#10;The configuration of the grid columns. An array of JavaScript objects or strings. A JavaScript objects are interpreted as column configurations. Strings are interpreted as the
/// &#10;field to which the column is bound. The grid will create a column for every item of the array.
    /// &#10;
    /// &#10;columnMenu — Boolean (default: false)
    /// &#10;If set to true the grid will display the column menu when the user clicks the chevron icon in the column headers. The column menu allows the user to show and hide columns, filter and sort (if filtering and sorting are enabled).
/// &#10;By default the column menu is not enabled.Can be set to a JavaScript object which represents the column menu configuration.
    /// &#10;
    /// &#10;columnMenu — Object (default: false)
    /// &#10;If set to true the grid will display the column menu when the user clicks the chevron icon in the column headers. The column menu allows the user to show and hide columns, filter and sort (if filtering and sorting are enabled).
/// &#10;By default the column menu is not enabled.Can be set to a JavaScript object which represents the column menu configuration.
    /// &#10;
    /// &#10;dataSource — Object|Array|kendo.data.DataSource 
    /// &#10;The data source of the widget which is used render table rows. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
/// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.DataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.DataSource instance the widget will use that instance and will not initialize a new one.
    /// &#10;
    /// &#10;detailTemplate — String|Function 
    /// &#10;The template which renders the detail rows.
/// &#10;Check Detail Template for a live demo.
    /// &#10;
    /// &#10;editable — Boolean (default: false)
    /// &#10;If set to true the user would be able to edit the data to which the grid is bound. By default editing is disabled.Can be set to a string ("inline", "incell" or "popup") to specify the editing mode. The default editing mode is "incell".Can be set to a JavaScript object which represents the editing configuration.
    /// &#10;
    /// &#10;editable — Object (default: false)
    /// &#10;If set to true the user would be able to edit the data to which the grid is bound. By default editing is disabled.Can be set to a string ("inline", "incell" or "popup") to specify the editing mode. The default editing mode is "incell".Can be set to a JavaScript object which represents the editing configuration.
    /// &#10;
    /// &#10;excel — Object 
    /// &#10;Configures the Kendo UI Grid Excel export settings.
    /// &#10;
    /// &#10;filterable — Boolean (default: false)
    /// &#10;If set to true the user can filter the data source using the grid filter menu. Filtering is disabled by default.Can be set to a JavaScript object which represents the filter menu configuration.
    /// &#10;
    /// &#10;filterable — Object (default: false)
    /// &#10;If set to true the user can filter the data source using the grid filter menu. Filtering is disabled by default.Can be set to a JavaScript object which represents the filter menu configuration.
    /// &#10;
    /// &#10;groupable — Boolean (default: false)
    /// &#10;If set to true the user could group the grid by dragging the column header cells. By default grouping is disabled.Can be set to a JavaScript object which represents the grouping configuration.
    /// &#10;
    /// &#10;groupable — Object (default: false)
    /// &#10;If set to true the user could group the grid by dragging the column header cells. By default grouping is disabled.Can be set to a JavaScript object which represents the grouping configuration.
    /// &#10;
    /// &#10;height — Number|String 
    /// &#10;The height of the grid. Numeric values are treated as pixels.
    /// &#10;
    /// &#10;messages — Object 
    /// &#10;Defines the text of the command buttons that are shown within the Grid. Used primarily for localization.
    /// &#10;
    /// &#10;mobile — Boolean|String (default: false)
    /// &#10;If set to true and the grid is viewed on mobile browser it will use adaptive rendering.Can be set to a string phone or tablet which will force the widget to use adaptive rendering regardless of browser type.
/// &#10;The grid uses same layout for both phone and tablet.
    /// &#10;
    /// &#10;navigatable — Boolean (default: false)
    /// &#10;If set to true the use could navigate the widget using the keyboard navigation. By default keyboard navigation is disabled.
    /// &#10;
    /// &#10;noRecords — Boolean (default: false)
    /// &#10;If set to true and current view contains no records, message similar to "No records available" will be displayed. By default this option is disabled.
    /// &#10;
    /// &#10;noRecords — Object (default: false)
    /// &#10;If set to true and current view contains no records, message similar to "No records available" will be displayed. By default this option is disabled.
    /// &#10;
    /// &#10;pageable — Boolean (default: false)
    /// &#10;If set to true the grid will display a pager. By default paging is disabled.Can be set to a JavaScript object which represents the pager configuration.
    /// &#10;
    /// &#10;pageable — Object (default: false)
    /// &#10;If set to true the grid will display a pager. By default paging is disabled.Can be set to a JavaScript object which represents the pager configuration.
    /// &#10;
    /// &#10;pdf — Object 
    /// &#10;Configures the Kendo UI Grid PDF export settings.
    /// &#10;
    /// &#10;reorderable — Boolean (default: false)
    /// &#10;If set to true the user could reorder the columns by dragging their header cells. By default reordering is disabled.
/// &#10;Multi-level headers allow reordering only in same level.
    /// &#10;
    /// &#10;resizable — Boolean (default: false)
    /// &#10;If set to true, users can resize columns by dragging the edges (resize handles) of their header cells. As of Kendo UI Q1 2015, users can also auto-fit a column by double-clicking
/// &#10;its resize handle. In this case the column will assume the smallest possible width, which allows the column content to fit without wrapping.By default, column resizing is disabled.
    /// &#10;
    /// &#10;rowTemplate — String|Function 
    /// &#10;The template which renders rows. Be default renders a table row () for every data source item.
    /// &#10;
    /// &#10;scrollable — Boolean (default: true)
    /// &#10;If set to true the grid will display a scrollbar when the total row height (or width) exceeds the grid height (or width). By default scrolling is enabled.Can be set to a JavaScript object which represents the scrolling configuration.
    /// &#10;
    /// &#10;scrollable — Object (default: true)
    /// &#10;If set to true the grid will display a scrollbar when the total row height (or width) exceeds the grid height (or width). By default scrolling is enabled.Can be set to a JavaScript object which represents the scrolling configuration.
    /// &#10;
    /// &#10;selectable — Boolean|String (default: false)
    /// &#10;If set to true the user would be able to select grid rows. By default selection is disabled.Can also be set to the following string values:
    /// &#10;
    /// &#10;sortable — Boolean (default: false)
    /// &#10;If set to true the user could sort the grid by clicking the column header cells. By default sorting is disabled.Can be set to a JavaScript object which represents the sorting configuration.
    /// &#10;
    /// &#10;sortable — Object (default: false)
    /// &#10;If set to true the user could sort the grid by clicking the column header cells. By default sorting is disabled.Can be set to a JavaScript object which represents the sorting configuration.
    /// &#10;
    /// &#10;toolbar — String|Function 
    /// &#10;If a String value is assigned to the toolbar configuration option, it will be treated as a single string template for the whole grid Toolbar,
/// &#10;and the string value will be passed as an argument to a kendo.template() function.If a Function value is assigned (it may be a kendo.template() function call or a generic function reference), then the return value of the function will be used to render the Grid Toolbar contents.If an Array value is assigned, it will be treated as the list of commands displayed in the grid's Toolbar. Commands can be custom or built-in ("cancel", "create", "save", "excel", "pdf").The "cancel" built-in command reverts any data changes done by the end user.The "create" command adds an empty data item to the grid.The "save" command persists any data changes done by the end user.The "excel" command exports the grid data in MS Excel format.The "pdf" command exports the grid data in PDF format.
    /// &#10;
    /// &#10;toolbar — Array 
    /// &#10;If a String value is assigned to the toolbar configuration option, it will be treated as a single string template for the whole grid Toolbar,
/// &#10;and the string value will be passed as an argument to a kendo.template() function.If a Function value is assigned (it may be a kendo.template() function call or a generic function reference), then the return value of the function will be used to render the Grid Toolbar contents.If an Array value is assigned, it will be treated as the list of commands displayed in the grid's Toolbar. Commands can be custom or built-in ("cancel", "create", "save", "excel", "pdf").The "cancel" built-in command reverts any data changes done by the end user.The "create" command adds an empty data item to the grid.The "save" command persists any data changes done by the end user.The "excel" command exports the grid data in MS Excel format.The "pdf" command exports the grid data in PDF format.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ListView = function() { };

kendo.ui.ListView.prototype = {




    add: function() {
        /// <summary>
        /// Inserts empty item as first item on the current view and prepare it for editing.
        /// </summary>

    },


    cancel: function() {
        /// <summary>
        /// Cancels changes in currently edited item.
        /// </summary>

    },


    clearSelection: function() {
        /// <summary>
        /// Clears ListView selected items and triggers change event.
        /// </summary>

    },


    dataItem: function(row) {
        /// <summary>
        /// Returns the specified data item.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the listview item. A string is treated as a jQuery selector.</param>
        /// <returns type="kendo.data.ObservableObject">the data item to which the specified listview item is bound. More information about the ObservableObject type...</returns>

    },


    dataItems: function() {
        /// <summary>
        /// Returns the array that is bound to the widget
        /// </summary>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the ListView for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    edit: function(item) {
        /// <summary>
        /// Edit specified ListView item. Fires the edit event.
        /// </summary>
        /// <param name="item" type="jQuery" >jQuery object which represents the item to be edited.</param>

    },


    refresh: function() {
        /// <summary>
        /// Reloads the data and repaints the list view.
        /// </summary>

    },


    remove: function(item) {
        /// <summary>
        /// Removes specified ListView item. Triggers remove event and if not prevented calls DataSource sync method.
        /// </summary>
        /// <param name="item" type="Object" >jQuery object which represents the item to be removed.</param>

    },


    save: function() {
        /// <summary>
        /// Saves edited ListView item. Triggers save event. If save event is not prevented and validation succeeds will call DataSource sync method.
        /// </summary>

    },


    select: function(items) {
        /// <summary>
        /// Get/set the selected ListView item(s).
        /// </summary>
        /// <param name="items" type="Object" >Items to select.</param>
        /// <returns type="jQuery">the selected items if called without arguments.</returns>

    },


    setDataSource: function(dataSource) {
        /// <summary>
        /// Sets the dataSource of an existing ListView and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" >The data source to which the widget should be bound.</param>

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

$.fn.getKendoListView = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.ListView widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ListView">The kendo.ui.ListView instance (if present).</returns>
};

$.fn.kendoListView = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.ListView widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;autoBind — Boolean (default: true)
    /// &#10;If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
/// &#10;data source is fired. By default the widget will bind to the data source specified in the configuration.
    /// &#10;
    /// &#10;dataSource — Object|Array|kendo.data.DataSource 
    /// &#10;The data source of the widget which is used render table rows. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
/// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.DataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.DataSource instance the widget will use that instance and will not initialize a new one.
    /// &#10;
    /// &#10;editTemplate — Function 
    /// &#10;Specifies ListView item template in edit mode.
    /// &#10;
    /// &#10;navigatable — Boolean (default: false)
    /// &#10;Indicates whether keyboard navigation is enabled/disabled.
    /// &#10;
    /// &#10;selectable — Boolean|String (default: false)
    /// &#10;Indicates whether selection is enabled/disabled. Possible values:
    /// &#10;
    /// &#10;template — Function 
    /// &#10;Specifies ListView item template.
    /// &#10;
    /// &#10;altTemplate — Function 
    /// &#10;Template to be used for rendering the alternate items in the ListView.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.MaskedTextBox = function() { };

kendo.ui.MaskedTextBox.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the MaskedTextBox for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks.
        /// </summary>

    },


    enable: function(enable) {
        /// <summary>
        /// Enables or disables the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >If set to true the widget will be enabled. If set to false the widget will be disabled.</param>

    },


    readonly: function(readonly) {
        /// <summary>
        /// Toggles the readonly state of the widget. When the widget is readonly it doesn't allow user input.
        /// </summary>
        /// <param name="readonly" type="Boolean" >If set to true the widget will not allow user input. If set to false the widget will allow user input.</param>

    },


    raw: function() {
        /// <summary>
        /// Gets the unmasked value of the MaskedTextBox.
        /// </summary>
        /// <returns type="String">The raw value of the widget.</returns>

    },


    value: function(value) {
        /// <summary>
        /// Gets or sets the value of the MaskedTextBox.
        /// </summary>
        /// <param name="value" type="String" >The value to set.</param>
        /// <returns type="String">The value of the widget.</returns>

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

$.fn.getKendoMaskedTextBox = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.MaskedTextBox widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.MaskedTextBox">The kendo.ui.MaskedTextBox instance (if present).</returns>
};

$.fn.kendoMaskedTextBox = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.MaskedTextBox widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;clearPromptChar — Boolean (default: false)
    /// &#10;Specifies whether the widget will replace the prompt characters with spaces on blur. Prompt chars will be shown again on focus (available since Q2 2014 SP1).
    /// &#10;
    /// &#10;culture — String (default: "en-US")
    /// &#10;Specifies the culture info used by the widget.
    /// &#10;
    /// &#10;mask — String (default: "")
    /// &#10;Specifies the input mask. The following mask rules are supported:
    /// &#10;
    /// &#10;promptChar — String (default: "_")
    /// &#10;Specifies the character used to represent the absence of user input in the widget
    /// &#10;
    /// &#10;rules — Object 
    /// &#10;Defines an object of custom mask rules.
    /// &#10;
    /// &#10;unmaskOnPost — Boolean (default: false)
    /// &#10;Specifies whether the widget will unmask the input value on form post (available since Q1 2015).
    /// &#10;
    /// &#10;value — String (default: "")
    /// &#10;Specifies the value of the MaskedTextBox widget.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.Menu = function() { };

kendo.ui.Menu.prototype = {




    append: function(item,referenceItem) {
        /// <summary>
        /// Appends an item to a Menu in the specified referenceItem's sub menu.
        /// </summary>
        /// <param name="item" type="Object" >Item to be appended, specified as a JSON object. An array of objects can also be passed.</param>
        /// <param name="referenceItem" type="Object" >A reference item to append the new item in.</param>
        /// <returns type="kendo.ui.Menu">Returns the Menu object to support chaining.</returns>

    },


    close: function(element) {
        /// <summary>
        /// Closes a sub-menu of a specified item(s) in a Menu.
        /// </summary>
        /// <param name="element" type="Object" >Target item selector.</param>
        /// <returns type="kendo.ui.Menu">Returns the Menu object to support chaining.</returns>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the Menu for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    enable: function(element,enable) {
        /// <summary>
        /// Enables or disables an item of a Menu. This can optionally be accomplished on
/// initialization by setting the disabled="disabled" on the desired menu item html element.
        /// </summary>
        /// <param name="element" type="Object" >Target element</param>
        /// <param name="enable" type="Boolean" >Desired state</param>
        /// <returns type="kendo.ui.Menu">Returns the Menu object to support chaining.</returns>

    },


    insertAfter: function(item,referenceItem) {
        /// <summary>
        /// Inserts an item into a Menu after the specified referenceItem.
        /// </summary>
        /// <param name="item" type="Object" >Target item, specified as a JSON object. Can also handle an array of such objects.</param>
        /// <param name="referenceItem" type="Object" >A reference item to insert the new item after.</param>
        /// <returns type="kendo.ui.Menu">Returns the Menu object to support chaining.</returns>

    },


    insertBefore: function(item,referenceItem) {
        /// <summary>
        /// Inserts an item into a Menu before the specified referenceItem.
        /// </summary>
        /// <param name="item" type="Object" >Target item, specified as a JSON object. Can also handle an array of such objects.</param>
        /// <param name="referenceItem" type="Object" >A reference item to insert the new item before</param>
        /// <returns type="kendo.ui.Menu">Returns the Menu object to support chaining.</returns>

    },


    open: function(element) {
        /// <summary>
        /// Opens a sub-menu of a specified item(s) in a Menu.
        /// </summary>
        /// <param name="element" type="Object" >Target item selector.</param>
        /// <returns type="kendo.ui.Menu">Returns the Menu object to support chaining.</returns>

    },


    remove: function(element) {
        /// <summary>
        /// Removes a specified item(s) from a Menu.
        /// </summary>
        /// <param name="element" type="Object" >Target item selector.</param>
        /// <returns type="kendo.ui.Menu">Returns the Menu object to support chaining.</returns>

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

$.fn.getKendoMenu = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.Menu widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.Menu">The kendo.ui.Menu instance (if present).</returns>
};

$.fn.kendoMenu = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.Menu widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;animation — Object 
    /// &#10;A collection of Animation objects, used to change default animations. A value of false will disable all animations in the widget.Available animations for the Menu are listed below.  Each animation has a reverse options which is used for the close effect by default, but can be over-ridden
/// &#10;by setting the close animation.  Each animation also has a direction which can be set off the animation (i.e. slideIn:Down).
    /// &#10;
    /// &#10;closeOnClick — Boolean (default: true)
    /// &#10;Specifies that sub menus should close after item selection (provided they won't navigate).
    /// &#10;
    /// &#10;dataSource — Object|Array 
    /// &#10;The data source of the widget which is used to render its items. Can be a JSON object/Array that contains an item or an Array of items to be rendered.
/// &#10;Refer to the example below for a list of the supported properties.
    /// &#10;
    /// &#10;direction — String (default: "default")
    /// &#10;Specifies Menu opening direction. Can be "top", "bottom", "left", "right".
/// &#10;You can also specify different direction for root and sub menu items, separating them with space. The example below will initialize the root menu to open upwards and
/// &#10;its sub menus to the left.
    /// &#10;
    /// &#10;hoverDelay — Number (default: 100)
    /// &#10;Specifies the delay in ms before the menu is opened/closed - used to avoid accidental closure on leaving.
    /// &#10;
    /// &#10;openOnClick — Boolean (default: false)
    /// &#10;Specifies that the root sub menus will be opened on item click.
    /// &#10;
    /// &#10;orientation — String (default: "horizontal")
    /// &#10;Root menu orientation. Could be horizontal or vertical.
    /// &#10;
    /// &#10;popupCollision — String 
    /// &#10;Specifies how Menu should adjust to screen boundaries. By default the strategy is "fit" for a sub menu with a horizontal parent,
/// &#10;meaning it will move to fit in screen boundaries in all directions, and "fit flip" for a sub menu with vertical parent, meaning it will fit vertically and flip over
/// &#10;its parent horizontally. You can also switch off the screen boundary detection completely if you set the popupCollision to false.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.MultiSelect = function() { };

kendo.ui.MultiSelect.prototype = {




    close: function() {
        /// <summary>
        /// Closes the widget popup.
        /// </summary>

    },


    dataItems: function() {
        /// <summary>
        /// Returns list of raw data records corresponding to the selected items.
        /// </summary>
        /// <returns type="Array">The raw data records. Returns empty array ([]) if no selected options</returns>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the MultiSelect for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    enable: function(enable) {
        /// <summary>
        /// Enables or disables the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >If set to true the widget will be enabled. If set to false the widget will be disabled.</param>

    },


    readonly: function(readonly) {
        /// <summary>
        /// Toggles the readonly state of the widget. When the widget is readonly it doesn't allow user input.
        /// </summary>
        /// <param name="readonly" type="Boolean" >If set to true the widget will not allow user input. If set to false the widget will allow user input.</param>

    },


    focus: function() {
        /// <summary>
        /// Focuses the widget.
        /// </summary>

    },


    open: function() {
        /// <summary>
        /// Opens the popup.
        /// </summary>

    },


    refresh: function() {
        /// <summary>
        /// Refresh the popup by rendering all items again.
        /// </summary>

    },


    search: function(word) {
        /// <summary>
        /// Searches the data source for the provided value and displays any matches as suggestions.
        /// </summary>
        /// <param name="word" type="String" >The filter value.</param>

    },


    setDataSource: function(dataSource) {
        /// <summary>
        /// Sets the dataSource of an existing MultiSelect and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" ></param>

    },


    toggle: function(toggle) {
        /// <summary>
        /// Opens or closes the widget popup.
        /// </summary>
        /// <param name="toggle" type="Boolean" >Defines the whether to open/close the drop-down list.</param>

    },


    value: function(value) {
        /// <summary>
        /// Gets or sets the value of the MultiSelect.
        /// </summary>
        /// <param name="value" type="Object" >The value to set. A String value or an Array of strings is accepted. To clear the value, pass an empty array.</param>
        /// <returns type="Array">The value of the MultiSelect.</returns>

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

$.fn.getKendoMultiSelect = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.MultiSelect widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.MultiSelect">The kendo.ui.MultiSelect instance (if present).</returns>
};

$.fn.kendoMultiSelect = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.MultiSelect widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;animation — Object 
    /// &#10;Configures the opening and closing animations of the suggestion popup. Setting the animation option to false will disable the opening and closing animations. As a result the suggestion popup will open and close instantly.
    /// &#10;
    /// &#10;autoBind — Boolean (default: true)
    /// &#10;Controls whether to bind the widget to the data source on initialization.
    /// &#10;
    /// &#10;autoClose — Boolean (default: true)
    /// &#10;Controls whether to close the widget suggestion list on item selection.
    /// &#10;
    /// &#10;dataSource — Object|Array|kendo.data.DataSource 
    /// &#10;The data source of the widget which is used to display a list of values. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
/// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.DataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.DataSource instance the widget will use that instance and will not initialize a new one.
    /// &#10;
    /// &#10;dataTextField — String (default: "")
    /// &#10;The field of the data item that provides the text content of the list items. The widget will filter the data source based on this field.
    /// &#10;
    /// &#10;dataValueField — String (default: "")
    /// &#10;The field of the data item that provides the value of the widget.
    /// &#10;
    /// &#10;delay — Number (default: 200)
    /// &#10;Specifies the delay in milliseconds after which the MultiSelect will start filtering dataSource.
    /// &#10;
    /// &#10;enable — Boolean (default: true)
    /// &#10;If set to false the widget will be disabled and will not allow user input. The widget is enabled by default and allows user input.
    /// &#10;
    /// &#10;filter — String (default: "startswith")
    /// &#10;The filtering method used to determine the suggestions for the current value. Filtration is turned of by default.
/// &#10;The supported filter values are startswith, endswith and contains.
    /// &#10;
    /// &#10;fixedGroupTemplate — String|Function 
    /// &#10;The template used to render the fixed header group. By default the widget displays only the value of the current group.
    /// &#10;
    /// &#10;groupTemplate — String|Function 
    /// &#10;The template used to render the groups. By default the widget displays only the value of the group.
    /// &#10;
    /// &#10;height — Number (default: 200)
    /// &#10;The height of the suggestion popup in pixels. The default value is 200 pixels.
    /// &#10;
    /// &#10;highlightFirst — Boolean (default: true)
    /// &#10;If set to true the first suggestion will be automatically highlighted.
    /// &#10;
    /// &#10;ignoreCase — String (default: true)
    /// &#10;If set to false case-sensitive search will be performed to find suggestions. The widget performs case-insensitive searching by default.
    /// &#10;
    /// &#10;minLength — Number (default: 0)
    /// &#10;The minimum number of characters the user must type before a search is performed. Set to a higher value if the search could match a lot of items.
/// &#10;A zero value means that a request will be made as soon as the user focuses the widget.
    /// &#10;
    /// &#10;maxSelectedItems — Number (default: null)
    /// &#10;Defines the limit of the selected items. If set to null widget will not limit number of the selected items.
    /// &#10;
    /// &#10;placeholder — String (default: "")
    /// &#10;The hint displayed by the widget when it is empty. Not set by default.
    /// &#10;
    /// &#10;popup — Object 
    /// &#10;The options that will be used for the popup initialization. For more details about the available options
/// &#10;refer to Popup documentation.
    /// &#10;
    /// &#10;headerTemplate — String|Function 
    /// &#10;Specifies a static HTML content, which will be rendered as a header of the popup element.
    /// &#10;
    /// &#10;itemTemplate — String|Function 
    /// &#10;The template used to render the items in the popup list.
    /// &#10;
    /// &#10;tagTemplate — String 
    /// &#10;The template used to render the tags.
    /// &#10;
    /// &#10;tagMode — String (default: "multiple")
    /// &#10;The mode used to render the selected tags. The available modes are:
/// &#10;- multiple - renders a tag for every selected value
/// &#10;- single - renders only one tag that shows the number of the selected values
    /// &#10;
    /// &#10;value — Array (default: [])
    /// &#10;Define the value of the widget
    /// &#10;
    /// &#10;valuePrimitive — Boolean (default: false)
    /// &#10;Specifies the value binding behavior for the widget. If set to true, the View-Model field will be updated with the selected item value field. If set to false, the View-Model field will be updated with the selected item.
    /// &#10;
    /// &#10;virtual — Boolean (default: false)
    /// &#10;Enables the virtualization feature of the widget.
    /// &#10;
    /// &#10;virtual — Object (default: false)
    /// &#10;Enables the virtualization feature of the widget.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.Notification = function() { };

kendo.ui.Notification.prototype = {




    error: function(data) {
        /// <summary>
        /// This is a shorthand method for show(data, "error")
        /// </summary>
        /// <param name="data" type="Object" >Required. The string content for the notification; or the object with the values for the variables inside the notification template; or the function, which returns the required string or an object.</param>

    },


    getNotifications: function() {
        /// <summary>
        /// Returns a jQuery collection of all visible notifications, displayed by the given widget instance. Each item in the collection is a div.k-notification element.This method is useful for quick removal of all visible messages before showing new ones. After obtaining all visible messages, remove them from the DOM
/// instead of hiding them, unless animations are disabled. This is because animations are asynchronous and the new messages
/// will be shown on the wrong places before the old ones have been hidden. Another thing to keep in mind is that when using
/// popup notification messages, you should remove the parent
/// of each member of the collection, returned by the getNotifications() method. In this case the parent will be a div.k-animation-container element.
        /// </summary>
        /// <returns type="jQuery">A collection of all visible notifications.</returns>

    },


    hide: function() {
        /// <summary>
        /// Hides all notifications from the given widget instance.If you intend to use this method to dispose of all visible messages before showing new ones,
/// then use the getNotifications() method instead, unless animations are disabled.
        /// </summary>

    },


    info: function(data) {
        /// <summary>
        /// This is a shorthand method for show(data, "info")
        /// </summary>
        /// <param name="data" type="Object" >Required. The string content for the notification; or the object with the values for the variables inside the notification template; or the function, which returns the required string or an object.</param>

    },


    show: function(data,type) {
        /// <summary>
        /// Displays a notification.
        /// </summary>
        /// <param name="data" type="Object" >Required. The string content for the notification; or the object with the values for the variables inside the notification template; or the function, which returns the required string or an object.</param>
        /// <param name="type" type="String" >The notification type. Built-in types include "info", "success", "warning" and "error". Custom types should match the types from the template configuration. If this argument is not supplied, then "info" is assumed.</param>

    },


    success: function(data) {
        /// <summary>
        /// This is a shorthand method for show(data, "success")
        /// </summary>
        /// <param name="data" type="Object" >Required. The string content for the notification; or the object with the values for the variables inside the notification template; or the function, which returns the required string or an object.</param>

    },


    warning: function(data) {
        /// <summary>
        /// This is a shorthand method for show(data, "warning")
        /// </summary>
        /// <param name="data" type="Object" >Required. The string content for the notification; or the object with the values for the variables inside the notification template; or the function, which returns the required string or an object.</param>

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

$.fn.getKendoNotification = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.Notification widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.Notification">The kendo.ui.Notification instance (if present).</returns>
};

$.fn.kendoNotification = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.Notification widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;allowHideAfter — Number (default: 0)
    /// &#10;Indicates the period in milliseconds after which a notification can be dismissed (hidden) by the user.
    /// &#10;
    /// &#10;animation — Object|Boolean 
    /// &#10;Defines custom show and hide animations via an Kendo UI Animation object. Setting the value to false disables animations.
    /// &#10;
    /// &#10;appendTo — String|jQuery (default: null)
    /// &#10;Defines the element to which the notifications will be appended or prepended (depending on the stacking direction).
    /// &#10;
    /// &#10;autoHideAfter — Number (default: 5000)
    /// &#10;Indicates the period in milliseconds after which a notification disappears automatically. Setting a zero value disables this behavior.
    /// &#10;
    /// &#10;button — Boolean (default: false)
    /// &#10;Determines whether the notifications will include a hide button. This setting works with the built-in templates only.
    /// &#10;
    /// &#10;height — Number|String (default: null)
    /// &#10;Defines the notifications' height. Numbers are treated as pixels.
    /// &#10;
    /// &#10;hideOnClick — Boolean (default: true)
    /// &#10;Determines whether notifications can be hidden by clicking anywhere on their content.
    /// &#10;
    /// &#10;position — Object 
    /// &#10;This setting applies to popup notifications only, i.e. in cases when appendTo is not set.
/// &#10;It determines the position of the first notification on the screen, as well as whether the notifications will move together with the page content during scrolling.
/// &#10;top takes precedence over bottom and left takes precedence over right.
    /// &#10;
    /// &#10;stacking — String (default: "default")
    /// &#10;Determines the direction in which multiple notification will stack (arrange) with regard to the first one. Possible values are "up", "right", "down", "left" and "default".
/// &#10;The "default" setting takes into consideration the applied position settings and is evaluated to "up" or "down".
    /// &#10;
    /// &#10;templates — Array (default: [])
    /// &#10;Describes the HTML markup of the different notification types as Kendo UI template strings. The built-in types are "info", "success", "warning" and "error".This documentation section assumes that you are familiar with Kendo UI templates.
    /// &#10;
    /// &#10;width — Number|String (default: null)
    /// &#10;Defines the notifications' width. Numbers are treated as pixels.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.NumericTextBox = function() { };

kendo.ui.NumericTextBox.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the NumericTextBox for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    enable: function(enable) {
        /// <summary>
        /// Enables or disables the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >If set to true the widget will be enabled. If set to false the widget will be disabled.</param>

    },


    readonly: function(readonly) {
        /// <summary>
        /// Toggles the readonly state of the widget. When the widget is readonly it doesn't allow user input.
        /// </summary>
        /// <param name="readonly" type="Boolean" >If set to true the widget will not allow user input. If set to false the widget will allow user input.</param>

    },


    focus: function() {
        /// <summary>
        /// Focuses the widget.
        /// </summary>

    },


    max: function(value) {
        /// <summary>
        /// Gets or sets the max value of the widget.
        /// </summary>
        /// <param name="value" type="Object" >The max value to set.</param>
        /// <returns type="Number">The max value of the widget.</returns>

    },


    min: function(value) {
        /// <summary>
        /// Gets or sets the min value of the widget.
        /// </summary>
        /// <param name="value" type="Object" >The min value to set.</param>
        /// <returns type="Number">The min value of the widget.</returns>

    },


    step: function(value) {
        /// <summary>
        /// Gets or sets the step value of the widget.
        /// </summary>
        /// <param name="value" type="Object" >The step value to set.</param>
        /// <returns type="Number">The step value of the widget.</returns>

    },


    value: function(value) {
        /// <summary>
        /// Gets or sets the value of the NumericTextBox.
        /// </summary>
        /// <param name="value" type="Object" >The value to set.</param>
        /// <returns type="Number">The value of the widget.</returns>

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

$.fn.getKendoNumericTextBox = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.NumericTextBox widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.NumericTextBox">The kendo.ui.NumericTextBox instance (if present).</returns>
};

$.fn.kendoNumericTextBox = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.NumericTextBox widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;culture — String (default: "en-US")
    /// &#10;Specifies the culture info used by the widget.
    /// &#10;
    /// &#10;decimals — Number (default: null)
    /// &#10;Specifies the number precision. If not set precision defined by current culture is used.
    /// &#10;
    /// &#10;downArrowText — String (default: "Decrease value")
    /// &#10;Specifies the text of the tooltip on the down arrow.
    /// &#10;
    /// &#10;format — String (default: "n")
    /// &#10;Specifies the format of the number. Any valid number format is allowed.
    /// &#10;
    /// &#10;max — Number (default: null)
    /// &#10;Specifies the largest value the user can enter.
    /// &#10;
    /// &#10;min — Number (default: null)
    /// &#10;Specifies the smallest value the user can enter.
    /// &#10;
    /// &#10;placeholder — String (default: "")
    /// &#10;The hint displayed by the widget when it is empty. Not set by default.
    /// &#10;
    /// &#10;spinners — Boolean (default: true)
    /// &#10;Specifies whether the up and down spin buttons should be rendered
    /// &#10;
    /// &#10;step — Number (default: 1)
    /// &#10;Specifies the value used to increment or decrement widget value.
    /// &#10;
    /// &#10;upArrowText — String (default: "Increase value")
    /// &#10;Specifies the text of the tooltip on the up arrow.
    /// &#10;
    /// &#10;value — Number (default: null)
    /// &#10;Specifies the value of the NumericTextBox widget.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.Pager = function() { };

kendo.ui.Pager.prototype = {




    totalPages: function() {
        /// <summary>
        /// Returns the number of pages.
        /// </summary>
        /// <returns type="Number">The number of pages.</returns>

    },


    pageSize: function() {
        /// <summary>
        /// Returns the page size - maximum number of items allowed on one page.
        /// </summary>
        /// <returns type="Number">The maximum number of items allowed on one page.</returns>

    },


    page: function(page) {
        /// <summary>
        /// Sets or gets the current page.
        /// </summary>
        /// <param name="page" type="Boolean" >The new page number.</param>
        /// <returns type="Number">The current page number.</returns>

    },


    refresh: function() {
        /// <summary>
        /// Updates all values of pager elements so that these values fit the values of DataSource. This method is automatically called after DataSource change event is fired.
        /// </summary>

    },


    destroy: function() {
        /// <summary>
        /// Unbinds all callbacks created within pager initialization. This method doesn't remove pager element from DOM.
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

$.fn.getKendoPager = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.Pager widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.Pager">The kendo.ui.Pager instance (if present).</returns>
};

$.fn.kendoPager = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.Pager widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;autoBind — Boolean (default: true)
    /// &#10;Indicates whether the pager refresh method will be called within its initialization.
    /// &#10;
    /// &#10;buttonCount — Number (default: 10)
    /// &#10;Defines the number of buttons displayed in the numeric pager.
    /// &#10;
    /// &#10;dataSource — Object|kendo.data.DataSource 
    /// &#10;Instance of kendo DataSource. See the kendo.data.DataSource.This option is mandatory because the Pager is tightly connected with DataSource. The pager is UI widget for managing paging over the DataSource. The Pager gets values like page size or total count of items from DataSource.
    /// &#10;
    /// &#10;selectTemplate — String 
    /// &#10;The template for selected page number link.
    /// &#10;
    /// &#10;linkTemplate — String 
    /// &#10;The template for page number links.
    /// &#10;
    /// &#10;info — Boolean (default: true)
    /// &#10;Defines if a label showing current paging information will be displayed.
    /// &#10;
    /// &#10;input — Boolean (default: false)
    /// &#10;Defines if an input element which allows the user to navigate to given page will be displayed.
    /// &#10;
    /// &#10;numeric — Boolean (default: true)
    /// &#10;Defines if numeric portion of the pager will be shown.
    /// &#10;
    /// &#10;pageSizes — Boolean|Array (default: false)
    /// &#10;If set to true the pager will display a drop-down which allows the user to pick a page size.
/// &#10;By default the page size drop-down is not displayed.Can be set to an array of predefined page sizes to override the default list.
/// &#10;A special all value is supported. It sets the page size to the total number of records.If a pageSize setting is provided for the data source then this value will be selected initially.
    /// &#10;
    /// &#10;previousNext — Boolean (default: true)
    /// &#10;Defines if buttons for navigating to the first, last, previous and next pages will be shown.
    /// &#10;
    /// &#10;refresh — Boolean (default: false)
    /// &#10;Defines if a refresh button will be displayed. Click on that button will call DataSource read() method to get actual data.
    /// &#10;
    /// &#10;messages — Object 
    /// &#10;Defines texts shown within the pager. Use this option to customize or localize the pager messages.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.PanelBar = function() { };

kendo.ui.PanelBar.prototype = {




    append: function(item,referenceItem) {
        /// <summary>
        /// Appends an item(s) to the PanelBar.
        /// </summary>
        /// <param name="item" type="Object" >Target item, specified as the JSON representation of an object. You can pass item text, content or contentUrl here. Can handle an HTML string or array of such strings or JSON.</param>
        /// <param name="referenceItem" type="Object" >A reference item to append the new item in the PanelBar, can be omitted.</param>
        /// <returns type="kendo.ui.PanelBar">Returns the PanelBar object to support chaining.</returns>

    },


    clearSelection: function() {
        /// <summary>
        /// Clears the currently selected PanelBar items.
        /// </summary>

    },


    collapse: function(element,useAnimation) {
        /// <summary>
        /// Collapses the specified item(s) of a PanelBar.
        /// </summary>
        /// <param name="element" type="Object" >The PanelBar item(s) to be collapsed, expressed as a string containing a selector expression or represented by a jQuery selector.</param>
        /// <param name="useAnimation" type="Boolean" >_optional, default: _Temporarily enables (true) or disables (false) any visual animation(s) when collapsing items.</param>
        /// <returns type="kendo.ui.PanelBar">Returns the PanelBar object to support chaining.</returns>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the PanelBar for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    enable: function(element,enable) {
        /// <summary>
        /// Enables (true) or disables (false) the specified item(s) of the
/// PanelBar.
        /// </summary>
        /// <param name="element" type="Object" >The PanelBar item(s) to be enabled (true) or disabled (false), expressed as a string containing a selector expression or represented by a jQuery selector.</param>
        /// <param name="enable" type="Boolean" >The desired state - enabled (true) or disabled (false) - of the target element(s).</param>

    },


    expand: function(element,useAnimation) {
        /// <summary>
        /// Expands the specified item(s) of a PanelBar.
        /// </summary>
        /// <param name="element" type="Object" >The PanelBar item(s) to be expanded, expressed as a selector.</param>
        /// <param name="useAnimation" type="Boolean" >_optional, default: _Temporarily enables (true) or disables (false) any visual animation(s) when expanding items.</param>
        /// <returns type="kendo.ui.PanelBar">Returns the PanelBar object to support chaining.</returns>

    },


    insertAfter: function(item,referenceItem) {
        /// <summary>
        /// Inserts a PanelBar item after the specified referenceItem
        /// </summary>
        /// <param name="item" type="Object" >Target item, specified as a JSON object. You can pass item text, content or contentUrl here. Can handle an HTML string or array of such strings or JSON.</param>
        /// <param name="referenceItem" type="Object" >A reference item to insert the new item after</param>

    },


    insertBefore: function(item,referenceItem) {
        /// <summary>
        /// Inserts a PanelBar item before the specified referenceItem
        /// </summary>
        /// <param name="item" type="Object" >Target item, specified as a JSON object. You can pass item text, content or contentUrl here. Can handle an TML string or array of such strings or JSON.</param>
        /// <param name="referenceItem" type="Object" >A reference item to insert the new item before.</param>
        /// <returns type="kendo.ui.PanelBar">Returns the PanelBar object to support chaining.</returns>

    },


    reload: function(element) {
        /// <summary>
        /// Reloads the content of a PanelBar from an AJAX request.
        /// </summary>
        /// <param name="element" type="Object" >Target element</param>

    },


    remove: function(element) {
        /// <summary>
        /// Removes the specified PanelBar item(s).
        /// </summary>
        /// <param name="element" type="Object" >The PanelBar item(s) to be removed, expressed as a selector string, DOM element or a jQuery object.</param>

    },


    select: function(element) {
        /// <summary>
        /// Gets or sets the selected item.
        /// </summary>
        /// <param name="element" type="Object" >The PanelBar item to be selected, expressed as a string containing a selector expression or represented by a jQuery selector.</param>
        /// <returns type="jQuery">the selected item if called without arguments. kendo.ui.PanelBar if called with arguments.</returns>

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

$.fn.getKendoPanelBar = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.PanelBar widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.PanelBar">The kendo.ui.PanelBar instance (if present).</returns>
};

$.fn.kendoPanelBar = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.PanelBar widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;animation — Boolean 
    /// &#10;A collection of visual animations used when PanelBar items are expand or collapsed through
/// &#10;user interactions. Setting this option to false will disable all animations.
    /// &#10;
    /// &#10;animation — Object 
    /// &#10;A collection of visual animations used when PanelBar items are expand or collapsed through
/// &#10;user interactions. Setting this option to false will disable all animations.
    /// &#10;
    /// &#10;contentUrls — Array 
    /// &#10;Sets an array with the URLs from which the PanelBar items content to be loaded from. If only specific items should be loaded via Ajax, then you should set the URLs to the corresponding positions in the array and set the other elements to null.
    /// &#10;
    /// &#10;dataSource — Object|Array 
    /// &#10;The data source of the widget which is used to render its items. Can be a JSON object/Array that contains an item or an Array of items to be rendered.
/// &#10;Refer to the example below for a list of the supported properties.
    /// &#10;
    /// &#10;expandMode — String (default: "multiple")
    /// &#10;Specifies how the PanelBar items are displayed when opened and closed. The following values
/// &#10;are available:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.PivotConfigurator = function() { };

kendo.ui.PivotConfigurator.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    refresh: function() {
        /// <summary>
        /// Refresh widget content
        /// </summary>

    },


    setDataSource: function(dataSource) {
        /// <summary>
        /// Sets the data source of the widget.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.PivotDataSource" >The data source to which the widget should be bound.</param>

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

$.fn.getKendoPivotConfigurator = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.PivotConfigurator widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.PivotConfigurator">The kendo.ui.PivotConfigurator instance (if present).</returns>
};

$.fn.kendoPivotConfigurator = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.PivotConfigurator widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;dataSource — Object|kendo.data.PivotDataSource 
    /// &#10;The data source of the widget which is used to display values. Can be a JavaScript object which represents a valid data source configuration or an existing kendo.data.PivotDataSource
/// &#10;instance.If the dataSource option is set to a JavaScript object the widget will initialize a new kendo.data.PivotDataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.PivotDataSource instance the widget will use that instance and will not initialize a new one.
    /// &#10;
    /// &#10;filterable — Boolean (default: false)
    /// &#10;If set to true the user will be able to filter by using the field menu.
    /// &#10;
    /// &#10;sortable — Boolean (default: false)
    /// &#10;If set to true the user could sort the widget by clicking the dimension fields. By default sorting is disabled.Can be set to a JavaScript object which represents the sorting configuration.
    /// &#10;
    /// &#10;sortable — Object (default: false)
    /// &#10;If set to true the user could sort the widget by clicking the dimension fields. By default sorting is disabled.Can be set to a JavaScript object which represents the sorting configuration.
    /// &#10;
    /// &#10;height — Number|String 
    /// &#10;The height of the PivotConfigurator. Numeric values are treated as pixels.
    /// &#10;
    /// &#10;messages — Object 
    /// &#10;The text messages displayed in the fields sections.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.PivotGrid = function() { };

kendo.ui.PivotGrid.prototype = {




    cellInfo: function(columnIndex,rowIndex) {
        /// <summary>
        /// Returns an information about a data cell at a specific column and row index.
        /// </summary>
        /// <param name="columnIndex" type="Number" >The index of the column cell that crosses the data cell.</param>
        /// <param name="rowIndex" type="Number" >The index of the row cell that crosses the data cell.</param>
        /// <returns type="Object">the data cell information.The fields of the result object:</returns>

    },


    cellInfoByElement: function(cell) {
        /// <summary>
        /// Returns an information about for a specific data cell element
        /// </summary>
        /// <param name="cell" type="Object" >A string, DOM element or jQuery object which represents the data table cell. A string is treated as a jQuery selector.</param>
        /// <returns type="Object">the data cell information.The fields of the result object:</returns>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    refresh: function() {
        /// <summary>
        /// Renders all content using the current data items.
        /// </summary>

    },


    setDataSource: function(dataSource) {
        /// <summary>
        /// Sets the data source of the widget.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.PivotDataSource" >The data source to which the widget should be bound.</param>

    },


    saveAsExcel: function() {
        /// <summary>
        /// Initiates the Excel export. Also fires the excelExport event.
        /// </summary>

    },


    saveAsPDF: function() {
        /// <summary>
        /// Initiates the PDF export and returns a promise. Also triggers the pdfExport event.
        /// </summary>
        /// <returns type="Promise">A promise that will be resolved when the export completes. The same promise is available in the pdfExport event arguments.</returns>

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

$.fn.getKendoPivotGrid = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.PivotGrid widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.PivotGrid">The kendo.ui.PivotGrid instance (if present).</returns>
};

$.fn.kendoPivotGrid = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.PivotGrid widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;dataSource — Object|kendo.data.PivotDataSource 
    /// &#10;The data source of the widget which is used to display values. Can be a JavaScript object which represents a valid data source configuration or an existing kendo.data.PivotDataSource
/// &#10;instance.If the dataSource option is set to a JavaScript object the widget will initialize a new kendo.data.PivotDataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.PivotDataSource instance the widget will use that instance and will not initialize a new one.
    /// &#10;
    /// &#10;autoBind — Boolean (default: true)
    /// &#10;If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
/// &#10;data source is fired. By default the widget will bind to the data source specified in the configuration.
    /// &#10;
    /// &#10;reorderable — Boolean (default: true)
    /// &#10;If set to false the user will not be able to add/close/reorder current fields for columns/rows/measures.
    /// &#10;
    /// &#10;excel — Object 
    /// &#10;Configures the Kendo UI PivotGrid Excel export settings.
    /// &#10;
    /// &#10;pdf — Object 
    /// &#10;Configures the Kendo UI PivotGrid PDF export settings.
    /// &#10;
    /// &#10;filterable — Boolean (default: false)
    /// &#10;If set to true the user will be able to filter by using the field menu.
    /// &#10;
    /// &#10;sortable — Boolean (default: false)
    /// &#10;If set to true the user could sort the pivotgrid by clicking the dimension fields. By default sorting is disabled.Can be set to a JavaScript object which represents the sorting configuration.
    /// &#10;
    /// &#10;sortable — Object (default: false)
    /// &#10;If set to true the user could sort the pivotgrid by clicking the dimension fields. By default sorting is disabled.Can be set to a JavaScript object which represents the sorting configuration.
    /// &#10;
    /// &#10;columnWidth — Number 
    /// &#10;The width of the table columns. Value is treated as pixels.
    /// &#10;
    /// &#10;height — Number|String 
    /// &#10;The height of the PivotGrid. Numeric values are treated as pixels.
    /// &#10;
    /// &#10;columnHeaderTemplate — String|Function 
    /// &#10;The template which renders the content of the column header cell. By default it renders the caption of the tuple member.The fields which can be used in the template are:For information about the tuple structure check this link.
    /// &#10;
    /// &#10;dataCellTemplate — String|Function 
    /// &#10;The template which renders the content of the data cell. By default renders the formatted value (fmtValue) of the data item.The fields which can be used in the template are:For information about the tuple structure check this link.
/// &#10;About the data item structure review this help topic.
    /// &#10;
    /// &#10;kpiStatusTemplate — String|Function 
    /// &#10;The template which renders the content of the KPI Status value. By default renders "open", "hold" and "denied" status icons.The fields which can be used in the template are:For information about the tuple structure check this link.
/// &#10;About the data item structure review this help topic.
    /// &#10;
    /// &#10;kpiTrendTemplate — String|Function 
    /// &#10;The template which renders the content of the KPI Trend value. By default renders "increase", "decrease" and "equal" status icons.The fields which can be used in the template are:For information about the tuple structure check this link.
/// &#10;About the data item structure review this help topic.
    /// &#10;
    /// &#10;rowHeaderTemplate — String|Function 
    /// &#10;The template which renders the content of the row header cell. By default it renders the caption of the tuple member.The fields which can be used in the template are:For information about the tuple structure check this link.
    /// &#10;
    /// &#10;messages — Object 
    /// &#10;The text messages displayed in the fields sections.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.Popup = function() { };

kendo.ui.Popup.prototype = {




    close: function() {
        /// <summary>
        /// Closes the popup.
        /// </summary>

    },


    open: function() {
        /// <summary>
        /// Opens the popup.
        /// </summary>

    },


    position: function() {
        /// <summary>
        /// Re-positions the popup element
        /// </summary>

    },


    setOptions: function(options) {
        /// <summary>
        /// Changes the initial Popup configuration.
        /// </summary>
        /// <param name="options" type="Object" >The new configuration options.</param>

    },


    visible: function() {
        /// <summary>
        /// Checks whether the popup is visible
        /// </summary>
        /// <returns type="Boolean">True when the popup is visible</returns>

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

$.fn.getKendoPopup = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.Popup widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.Popup">The kendo.ui.Popup instance (if present).</returns>
};

$.fn.kendoPopup = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.Popup widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;animation — Object 
    /// &#10;Configures the opening and closing animations of the popup. Setting the animation option to false will disable the opening and closing animations. As a result the popup will open and close instantly.
    /// &#10;
    /// &#10;anchor — String|jQuery 
    /// &#10;Specifies the element that will be used as an anchor. The widget will open next to that element.
    /// &#10;
    /// &#10;appendTo — String|jQuery (default: document.body)
    /// &#10;Which element the popup will be appended to.
    /// &#10;
    /// &#10;origin — String (default: "bottom left")
    /// &#10;Specifies how to position the popup element based on achor point. The value is
/// &#10;space separated "y" plus "x" position.The available "y" positions are:
/// &#10;- "bottom"
/// &#10;- "center"
/// &#10;- "top"The available "x" positions are:
/// &#10;- "left"
/// &#10;- "center"
/// &#10;- "right"
    /// &#10;
    /// &#10;position — String (default: "top left")
    /// &#10;Specifies which point of the popup element to attach to the anchor's origin point. The value is
/// &#10;space separated "y" plus "x" position.The available "y" positions are:
/// &#10;- "bottom"
/// &#10;- "center"
/// &#10;- "top"The available "x" positions are:
/// &#10;- "left"
/// &#10;- "center"
/// &#10;- "right"
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ProgressBar = function() { };

kendo.ui.ProgressBar.prototype = {




    enable: function(enable) {
        /// <summary>
        /// Enables/Disables the ProgressBar widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >The argument, which defines whether to enable/disable the ProgressBar. If no argument is passed, the widget will be enabled.</param>

    },


    value: function(value) {
        /// <summary>
        /// Gets or sets the value of the ProgressBar. It accepts a number, a string or false as a parameter. Setting the value to false will set the state of the ProgressBar to indeterminate. If no parameter is passed, it returns the underlying value.
        /// </summary>
        /// <param name="value" type="Number" >The value to be set.</param>
        /// <returns type="Number">the value of the widget.</returns>

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

$.fn.getKendoProgressBar = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.ProgressBar widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ProgressBar">The kendo.ui.ProgressBar instance (if present).</returns>
};

$.fn.kendoProgressBar = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.ProgressBar widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;animation — Object 
    /// &#10;Configures the progress animation. Currently only the duration of the animation could be set.
    /// &#10;
    /// &#10;chunkCount — Number (default: 5)
    /// &#10;Specifies the number of chunks.
    /// &#10;
    /// &#10;enable — Boolean (default: true)
    /// &#10;If set to false the widget will be disabled. It will still allow changing the value. The widget is enabled by default.
    /// &#10;
    /// &#10;max — Number (default: 100)
    /// &#10;The maximum value of the ProgressBar.
    /// &#10;
    /// &#10;min — Number (default: 0)
    /// &#10;The minimum value of the ProgressBar.
    /// &#10;
    /// &#10;orientation — String (default: "horizontal")
    /// &#10;The orientation of the ProgressBar. Possible values are horizontal and vertical.
    /// &#10;
    /// &#10;reverse — Boolean (default: false)
    /// &#10;Specifies if the progress direction will be reversed.
    /// &#10;
    /// &#10;showStatus — Boolean (default: true)
    /// &#10;Specifies if the progress status will be shown.
    /// &#10;
    /// &#10;type — String (default: "value")
    /// &#10;Specifies the type of the ProgressBar. The supported types are value, percent and chunk.
    /// &#10;
    /// &#10;value — Number 
    /// &#10;The underlying value of the ProgressBar. It should be a number or false. Setting the value to false will set the state of the ProgressBar to indeterminate.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.RangeSlider = function() { };

kendo.ui.RangeSlider.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the RangeSlider for safe removal from the DOM.Detaches event handlers and removes data entries in order to avoid memory leaks.
        /// </summary>

    },


    enable: function(enable) {
        /// <summary>
        /// Enable/Disable the RangeSlider widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >The argument, which defines whether to enable/disable the RangeSlider.</param>

    },


    value: function(selectionStart,selectionEnd) {
        /// <summary>
        /// The value method gets or sets the start and end values of the RangeSlider. It
/// accepts an array as parameter, and returns an object array with the start and end
/// selection values.
        /// </summary>
        /// <param name="selectionStart" type="Number" >The selection start value of the RangeSlider.</param>
        /// <param name="selectionEnd" type="Number" >The selection start value of the RangeSlider.</param>
        /// <returns type="Array">The value of the RangeSlider.</returns>

    },


    resize: function() {
        /// <summary>
        /// Adjusts the RangeSlider layout to match the size of the container.
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

$.fn.getKendoRangeSlider = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.RangeSlider widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.RangeSlider">The kendo.ui.RangeSlider instance (if present).</returns>
};

$.fn.kendoRangeSlider = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.RangeSlider widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;largeStep — Number (default: 5)
    /// &#10;The delta with which the value will change when the user presses the Page Up or Page Down key (the drag
/// &#10;handle must be focused). Note: The allied largeStep will also set large tick for every large step.
    /// &#10;
    /// &#10;max — Number (default: 10)
    /// &#10;The maximum value of the RangeSlider.
    /// &#10;
    /// &#10;min — Number (default: 0)
    /// &#10;The minimum value of the RangeSlider.
    /// &#10;
    /// &#10;orientation — String (default: "horizontal")
    /// &#10;F
/// &#10;The orientation of a RangeSlider; "horizontal" or
/// &#10;"vertical".
    /// &#10;
    /// &#10;selectionEnd — Number 
    /// &#10;The selection end value of the RangeSlider.
    /// &#10;
    /// &#10;selectionStart — Number 
    /// &#10;The selection start value of the RangeSlider.
    /// &#10;
    /// &#10;smallStep — Number (default: 1)
    /// &#10;The small step value of the RangeSlider. The underlying value will be changed when the end
/// &#10;user (1) clicks on the increase or decrease buttons of the RangeSlider, (2) presses the
/// &#10;arrow keys (the drag handle must be focused), or (3) drags the drag handle.
    /// &#10;
    /// &#10;tickPlacement — String (default: "both")
    /// &#10;Denotes the location of the tick marks in the RangeSlider. The available options are:
    /// &#10;
    /// &#10;tooltip — Object 
    /// &#10;Configuration of the RangeSlider tooltip.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ResponsivePanel = function() { };

kendo.ui.ResponsivePanel.prototype = {




    close: function() {
        /// <summary>
        /// Closes the responsive panel.
        /// </summary>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls the destroy method of any child Kendo widgets.
        /// </summary>

    },


    open: function() {
        /// <summary>
        /// Opens the responsive panel.
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

$.fn.getKendoResponsivePanel = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.ResponsivePanel widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ResponsivePanel">The kendo.ui.ResponsivePanel instance (if present).</returns>
};

$.fn.kendoResponsivePanel = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.ResponsivePanel widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;autoClose — Boolean (default: true)
    /// &#10;If set to false the widget will not close when the page content is touched, after it was opened on a mobile device. You will need to call the close method when the panel needs to close.
    /// &#10;
    /// &#10;breakpoint — Number (default: 640)
    /// &#10;Specifies the page width at which the widget will be hidden and its toggle button will become visible.
    /// &#10;
    /// &#10;orientation — String (default: "left")
    /// &#10;Specifies the direction from which the hidden element will open up, once the toggle button has been activated. Valid values are "left", "right", and "top".
    /// &#10;
    /// &#10;toggleButton — String (default: ".k-rpanel-toggle")
    /// &#10;Specifies the selector for the toggle button that will show and hide the responsive panel.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.Scheduler = function() { };

kendo.ui.Scheduler.prototype = {




    addEvent: function(data) {
        /// <summary>
        /// Adds a new scheduler event and opens the edit form.
        /// </summary>
        /// <param name="data" type="Object" >The object containing the scheduler event fields.</param>

    },


    cancelEvent: function() {
        /// <summary>
        /// Cancels the scheduler event editing. Closes the edit form.
        /// </summary>

    },


    data: function() {
        /// <summary>
        /// Gets currently expanded scheduler events.
        /// </summary>

    },


    date: function(value) {
        /// <summary>
        /// Gets or sets the current scheduler date.
        /// </summary>
        /// <param name="value" type="Date" >The new date to set.</param>
        /// <returns type="Date">the current date.</returns>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    editEvent: function(event) {
        /// <summary>
        /// Opens the specified scheduler event in the edit form.
        /// </summary>
        /// <param name="event" type="Object" >The event which should be put in edit mode. Also accepts a string which is the uid of the event which should be edited.</param>

    },


    occurrenceByUid: function(uid) {
        /// <summary>
        /// Gets the event occurrence with the specified uid.
        /// </summary>
        /// <param name="uid" type="String" >The uid of the occurrence to look for.</param>
        /// <returns type="kendo.data.SchedulerEvent">the occurrence instance. Returns undefined if an occurrence with the specified uid is not found.</returns>

    },


    occurrencesInRange: function(start,end) {
        /// <summary>
        /// Gets a list of event occurrences in specified time range.
        /// </summary>
        /// <param name="start" type="Date" >The start date of the period.</param>
        /// <param name="end" type="Date" >The end date of the period.</param>
        /// <returns type="Array">a list of scheduler events filtered by the specified start/end period.</returns>

    },


    refresh: function() {
        /// <summary>
        /// Refreshes the Scheduler rendering using the current data items.
        /// </summary>

    },


    removeEvent: function(event) {
        /// <summary>
        /// Removes the specified scheduler event.
        /// </summary>
        /// <param name="event" type="Object" >The event which should be removed. Also accepts a string which is the uid of the event which should be removed.</param>

    },


    resourcesBySlot: function(slot) {
        /// <summary>
        /// Get the relevant resources for a given slot.
        /// </summary>
        /// <param name="slot" type="Object" ></param>
        /// <returns type="Object">The relevant resources.</returns>

    },


    saveAsPDF: function() {
        /// <summary>
        /// Initiates the PDF export and returns a promise. Also triggers the pdfExport event.
        /// </summary>
        /// <returns type="Promise">A promise that will be resolved when the export completes. The same promise is available in the pdfExport event arguments.</returns>

    },


    saveEvent: function() {
        /// <summary>
        /// Saves the scheduler event which is open in the edit form and closes it.
        /// </summary>

    },


    select: function(events,options) {
        /// <summary>
        /// Gets or sets the events (or slots) which are selected.
        /// </summary>
        /// <param name="events" type="Array" >The Uids of events which should be selected. List of the available events can be get using the data method.</param>
        /// <param name="options" type="" ></param>

    },


    setDataSource: function(dataSource) {
        /// <summary>
        /// Sets the data source of the widget.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.SchedulerDataSource" >The data source to which the widget should be bound.</param>

    },


    slotByPosition: function(xPosition,yPosition) {
        /// <summary>
        /// Get the time slot from given horizontal (x) and vertical (y) position.
        /// </summary>
        /// <param name="xPosition" type="Number" >The horizontal position.</param>
        /// <param name="yPosition" type="Number" >The vertical position.</param>
        /// <returns type="Object">The time slot.</returns>

    },


    slotByElement: function(element) {
        /// <summary>
        /// Get the time slot from given element.
        /// </summary>
        /// <param name="element" type="Object" ></param>
        /// <returns type="Object">The time slot.</returns>

    },


    view: function(type) {
        /// <summary>
        /// Gets or sets the current scheduler view.
        /// </summary>
        /// <param name="type" type="String" >The view type to select.</param>
        /// <returns type="kendo.ui.SchedulerView">the current scheduler view.</returns>

    },


    viewName: function() {
        /// <summary>
        /// The name of the current view. Can be used for refreshing the current view data.
        /// </summary>
        /// <returns type="String">the name of the current scheduler view.</returns>

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

$.fn.getKendoScheduler = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.Scheduler widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.Scheduler">The kendo.ui.Scheduler instance (if present).</returns>
};

$.fn.kendoScheduler = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.Scheduler widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;allDayEventTemplate — String|Function 
    /// &#10;The template used to render the "all day" scheduler events.The fields which can be used in the template are:
    /// &#10;
    /// &#10;allDaySlot — Boolean (default: true)
    /// &#10;If set to true the scheduler will display a slot for "all day" events.
    /// &#10;
    /// &#10;autoBind — Boolean (default: true)
    /// &#10;If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
/// &#10;data source is fired. By default the widget will bind to the data source specified in the configuration.
    /// &#10;
    /// &#10;currentTimeMarker — Boolean 
    /// &#10;If set to false the "current time" marker of the scheduler would not be displayed.
    /// &#10;
    /// &#10;currentTimeMarker — Object 
    /// &#10;If set to false the "current time" marker of the scheduler would not be displayed.
    /// &#10;
    /// &#10;dataSource — Object|Array|kendo.data.SchedulerDataSource 
    /// &#10;The data source of the widget which contains the scheduler events. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.SchedulerDataSource
/// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.SchedulerDataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.SchedulerDataSource instance the widget will use that instance and will not initialize a new one.
    /// &#10;
    /// &#10;date — Date 
    /// &#10;The current date of the scheduler. Used to determine the period which is displayed by the widget.
    /// &#10;
    /// &#10;dateHeaderTemplate — String|Function 
    /// &#10;The template used to render the date header cells.By default the scheduler renders the date using a custom date format - "ddd M/dd".
/// &#10;The "ddd" specifier represents the abbreviated name of the week day and will be localized using the current Kendo UI culture.
/// &#10;If the developer wants to control the day and month order, then one needs to define a custom template.The fields which can be used in the template are:
    /// &#10;
    /// &#10;editable — Boolean (default: true)
    /// &#10;If set to true the user would be able to create new scheduler events and modify or delete existing ones.
    /// &#10;
    /// &#10;editable — Object (default: true)
    /// &#10;If set to true the user would be able to create new scheduler events and modify or delete existing ones.
    /// &#10;
    /// &#10;endTime — Date 
    /// &#10;The end time of the week and day views. The scheduler will display events ending before the endTime.
    /// &#10;
    /// &#10;eventTemplate — String|Function 
    /// &#10;The template used to render the scheduler events.The fields which can be used in the template are:
    /// &#10;
    /// &#10;footer — Boolean 
    /// &#10;If set to false the footer of the scheduler would not be displayed.
    /// &#10;
    /// &#10;footer — Object 
    /// &#10;If set to false the footer of the scheduler would not be displayed.
    /// &#10;
    /// &#10;group — Object 
    /// &#10;The configuration of the scheduler resource(s) grouping.
    /// &#10;
    /// &#10;height — Number|String 
    /// &#10;The height of the widget. Numeric values are treated as pixels.
    /// &#10;
    /// &#10;majorTick — Number (default: 60)
    /// &#10;The number of minutes represented by a major tick.
    /// &#10;
    /// &#10;majorTimeHeaderTemplate — String|Function 
    /// &#10;The template used to render the major ticks.By default the scheduler renders the time using the current culture time format.The fields which can be used in the template are:
    /// &#10;
    /// &#10;max — Date (default: 31/12/2099)
    /// &#10;Constraints the maximum date which can be selected via the scheduler navigation.
    /// &#10;
    /// &#10;messages — Object 
    /// &#10;The configuration of the scheduler messages. Use this option to customize or localize the scheduler messages.
    /// &#10;
    /// &#10;min — Date (default: 1/1/1900)
    /// &#10;Constraints the minimum date which can be selected via the scheduler navigation.
    /// &#10;
    /// &#10;minorTickCount — Number (default: 2)
    /// &#10;The number of time slots to display per major tick.
    /// &#10;
    /// &#10;minorTimeHeaderTemplate — String|Function 
    /// &#10;The template used to render the minor ticks.By default the scheduler renders a "&nbsp;".The fields which can be used in the template are:
    /// &#10;
    /// &#10;mobile — Boolean|String (default: false)
    /// &#10;If set to true and the scheduler is viewed on mobile browser it will use adaptive rendering.Can be set to a string phone or tablet which will force the widget to use adaptive rendering regardless of browser type.
    /// &#10;
    /// &#10;pdf — Object 
    /// &#10;Configures the Kendo UI Scheduler PDF export settings.
    /// &#10;
    /// &#10;resources — Array 
    /// &#10;The configuration of the scheduler resource(s). A scheduler resource is optional metadata that can be associated
/// &#10;with a scheduler event.
    /// &#10;
    /// &#10;selectable — Boolean (default: false)
    /// &#10;If set to true the user would be able to select scheduler cells and events. By default selection is disabled.
    /// &#10;
    /// &#10;showWorkHours — Boolean (default: false)
    /// &#10;If set to true the view will be initially shown in business hours mode. By default view is displayed in full day mode.
    /// &#10;
    /// &#10;snap — Boolean (default: true)
    /// &#10;If set to true the scheduler will snap events to the nearest slot during dragging (resizing or moving). Set it to false to allow free moving and resizing of events.
    /// &#10;
    /// &#10;startTime — Date 
    /// &#10;The start time of the week and day views. The scheduler will display events starting after the startTime.
    /// &#10;
    /// &#10;timezone — String 
    /// &#10;The timezone which the scheduler will use to display the scheduler appointment dates. By default the current system timezone is used. This is an acceptable default when the
/// &#10;scheduler widget is bound to local array of events. It is advisable to specify a timezone if the scheduler is bound to a remote service.
/// &#10;That way all users would see the same dates and times no matter their configured system timezone.The complete list of the supported timezones is available in the List of IANA time zones Wikipedia page.
    /// &#10;
    /// &#10;toolbar — Array 
    /// &#10;List of commands that the scheduler will display in its toolbar as buttons. Currently supports only the "pdf" command.The "pdf" command exports the scheduler in PDF format.
    /// &#10;
    /// &#10;views — Array 
    /// &#10;The views displayed by the scheduler and their configuration. The array items can be either objects specifying the view configuration or strings representing the view types (assuming default configuration).
/// &#10;By default the Kendo UI Scheduler widget displays "day" and "week" view.
    /// &#10;
    /// &#10;groupHeaderTemplate — String|Function 
    /// &#10;The template used to render the group headers of scheduler day, week, workWeek and timeline views.The fields which can be used in the template are:
    /// &#10;
    /// &#10;width — Number|String 
    /// &#10;The width of the widget. Numeric values are treated as pixels.
    /// &#10;
    /// &#10;workDayStart — Date 
    /// &#10;Sets the start of the work day when the  "Show business hours" button is clicked.
    /// &#10;
    /// &#10;workDayEnd — Date 
    /// &#10;Sets the end of the work day when the  "Show business hours" button is clicked.
    /// &#10;
    /// &#10;workWeekStart — Number (default: 1)
    /// &#10;The start of working week (index based).
    /// &#10;
    /// &#10;workWeekEnd — Number (default: 5)
    /// &#10;The end of working week (index based).
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.Slider = function() { };

kendo.ui.Slider.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the Slider for safe removal from the DOM.Detaches event handlers and removes data entries in order to avoid memory leaks.
        /// </summary>

    },


    enable: function(enable) {
        /// <summary>
        /// Enable/Disable the Slider widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >The argument, which defines whether to enable/disable the Slider.</param>

    },


    value: function(value) {
        /// <summary>
        /// Gets or sets the value of a Slider. It accepts a string or number as parameters and returns
/// a number representing the underlying value.
        /// </summary>
        /// <param name="value" type="Number" >_optional, default: _The value to be set for a Slider.</param>
        /// <returns type="Number">The value of the Slider.</returns>

    },


    resize: function() {
        /// <summary>
        /// Adjusts the Slider layout to match the size of the container.
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

$.fn.getKendoSlider = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.Slider widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.Slider">The kendo.ui.Slider instance (if present).</returns>
};

$.fn.kendoSlider = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.Slider widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;decreaseButtonTitle — String (default: "Decrease")
    /// &#10;The title of the decrease button of the Slider.
    /// &#10;
    /// &#10;increaseButtonTitle — String (default: "Increase")
    /// &#10;The title of the increase button of the Slider.
    /// &#10;
    /// &#10;largeStep — Number (default: 5)
    /// &#10;The delta with which the value will change when the user presses the Page Up or Page Down key (the drag
/// &#10;handle must be focused). Note: largeStep will also set a large tick for every large step.Must be a positive number, larger than smallStep.
    /// &#10;
    /// &#10;max — Number (default: 10)
    /// &#10;The maximum value of the Slider.
    /// &#10;
    /// &#10;min — Number (default: 0)
    /// &#10;The minimum value of the Slider.
    /// &#10;
    /// &#10;orientation — String (default: "horizontal")
    /// &#10;The orientation of a Slider: "horizontal" or "vertical".
    /// &#10;
    /// &#10;showButtons — Boolean (default: true)
    /// &#10;Can be used to show (true) or hide (false) the
/// &#10;increase and decrease buttons of a Slider.
    /// &#10;
    /// &#10;smallStep — Number (default: 1)
    /// &#10;The small step value of the Slider. Must be a positive number, otherwise an Javascript exception will be thrown.The small step value determines the amount of Slider value change when the end user
    /// &#10;
    /// &#10;tickPlacement — String (default: "both")
    /// &#10;Denotes the location of the tick marks in the Slider. The available options are:
    /// &#10;
    /// &#10;tooltip — Object 
    /// &#10;Configuration of the Slider tooltip.
    /// &#10;
    /// &#10;value — Number 
    /// &#10;The underlying value of the Slider.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.Sortable = function() { };

kendo.ui.Sortable.prototype = {




    indexOf: function(element) {
        /// <summary>
        /// Returns the index of specified item. Filtered items are excluded from the collection.
        /// </summary>
        /// <param name="element" type="jQuery" >jQuery object which represents the sortable element.</param>
        /// <returns type="Number">the index of specified item.</returns>

    },


    items: function() {
        /// <summary>
        /// Returns the sortable elements. Filtered items and the placeholder are excluded from the collection.
        /// </summary>
        /// <returns type="jQuery">the sortable items</returns>

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

$.fn.getKendoSortable = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.Sortable widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.Sortable">The kendo.ui.Sortable instance (if present).</returns>
};

$.fn.kendoSortable = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.Sortable widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;axis — String (default: null)
    /// &#10;Constrains the hint movement to either the horizontal (x) or vertical (y) axis. Can be set to either "x" or "y".
    /// &#10;
    /// &#10;autoScroll — Boolean (default: false)
    /// &#10;If set to true the widget will auto-scroll the container when the mouse/finger is close to the top/bottom of it.
    /// &#10;
    /// &#10;container — String|jQuery (default: null)
    /// &#10;Selector that determines the container to which boundaries the hint movement will be constrained.
    /// &#10;
    /// &#10;connectWith — String (default: null)
    /// &#10;Selector which determines if items from the current Sortable widget can be accepted from another Sortable container(s). The connectWith option describes one way relationship, if the developer wants a two way connection then the connectWith option should be set on both widgets.
    /// &#10;
    /// &#10;cursor — String (default: "auto")
    /// &#10;The cursor that will be shown while user drags sortable item.
    /// &#10;
    /// &#10;cursorOffset — Object (default: null)
    /// &#10;If set, specifies the offset of the hint relative to the mouse cursor/finger.
/// &#10;By default, the hint is initially positioned on top of the draggable source offset. The option accepts an object with two keys: top and left.
    /// &#10;
    /// &#10;disabled — String (default: null)
    /// &#10;Selector that determines which items are disabled. Disabled items cannot be dragged but are valid sort targets.
    /// &#10;
    /// &#10;filter — String (default: null)
    /// &#10;Selector that determines which items are sortable. Filtered items cannot be dragged and are not valid sort targets.
    /// &#10;
    /// &#10;handler — String (default: null)
    /// &#10;Selector that determines which element will be used as a draggable handler. If a handler is defined, the user will be able to move the Sortable items only if the cursor/finger is positioned onto the handler element.
    /// &#10;
    /// &#10;hint — Function|String|jQuery 
    /// &#10;Provides a way for customization of the sortable item hint. If a function is supplied, it receives one argument - the draggable element's jQuery object.
/// &#10;If hint function is not provided the widget will clone dragged item and use it as a hint.
    /// &#10;
    /// &#10;holdToDrag — Boolean (default: false)
    /// &#10;Suitable for touch oriented user interface, in order to avoid collision with the touch scrolling gesture. When set to true, the item will be activated after the user taps and holds the finger on the element for a short amount of time.
/// &#10;The item will also be activated by pressing, holding and lifting the finger without any movement. Dragging it afterwards will initiate the drag immediately.
    /// &#10;
    /// &#10;ignore — String (default: null)
    /// &#10;Selector that determines which elements inside the sorted item's container will be ignored. Useful if the sortable item contains input elements.
    /// &#10;
    /// &#10;placeholder — Function|String|jQuery 
    /// &#10;Provides a way for customization of the sortable item placeholder. If a function is supplied, it receives one argument - the draggable element's jQuery object.
/// &#10;If placeholder function is not provided the widget will clone dragged item, remove its ID attribute, set its visibility to hidden and use it as a placeholder.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.Splitter = function() { };

kendo.ui.Splitter.prototype = {




    ajaxRequest: function(pane,url,data) {
        /// <summary>
        /// Loads the content of a pane from a local or remote URL.
        /// </summary>
        /// <param name="pane" type="Object" >The targeted pane whose content is to be loaded via a URL.</param>
        /// <param name="url" type="String" >A local or remote URL from which the content of the pane is to be loaded.</param>
        /// <param name="data" type="Object" >Any data that is necessary to be sent to the server.</param>

    },


    append: function(config) {
        /// <summary>
        /// Appends a new pane. The method returns the pane element, so it can be populated with arbitrary content, if contentUrl is not set.
/// Invoking this method will force the widget to redraw and it will trigger the resize event.
        /// </summary>
        /// <param name="config" type="Object" >The new pane configuration</param>
        /// <returns type="jQuery">the pane element.</returns>

    },


    collapse: function(pane) {
        /// <summary>
        /// Collapses a specified pane. Invoking this method will force the widget to redraw and it will trigger the resize event.
/// Note: Invoking the method will not trigger a collapse event.
        /// </summary>
        /// <param name="pane" type="Object" >The pane to be collapsed.</param>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    expand: function(pane) {
        /// <summary>
        /// Expands a specified pane. Invoking this method will force the widget to redraw and it will trigger the resize event.
/// Note: Invoking the method will not trigger an expand event.
        /// </summary>
        /// <param name="pane" type="Object" >The pane to be expanded.</param>

    },


    insertAfter: function(config,referencePane) {
        /// <summary>
        /// Inserts a new pane after the specified one. The method returns the pane element, so it can be populated with arbitrary content, if contentUrl is not set.
/// Invoking this method will force the widget to redraw and it will trigger the resize event.
        /// </summary>
        /// <param name="config" type="Object" >The new pane configuration.</param>
        /// <param name="referencePane" type="Object" >The existing pane after which the new one will be inserted.</param>
        /// <returns type="jQuery">the pane element.</returns>

    },


    insertBefore: function(config,referencePane) {
        /// <summary>
        /// Inserts a new pane before the specified one. The method returns the pane element, so it can be populated with arbitrary content, if contentUrl is not set.
/// Invoking this method will force the widget to redraw and it will trigger the resize event.
        /// </summary>
        /// <param name="config" type="Object" >The new pane configuration.</param>
        /// <param name="referencePane" type="Object" >The existing pane before which the new one will be inserted.</param>
        /// <returns type="jQuery">the pane element.</returns>

    },


    max: function(pane,value) {
        /// <summary>
        /// Sets the maximum size of a pane. Setting this value will not cause the widget to redraw, nor will it trigger any events.
        /// </summary>
        /// <param name="pane" type="Object" >The pane being targeted for a new minimum size configuration value.</param>
        /// <param name="value" type="String" >The maximum size value of the pane defined as pixels (i.e. "200px") or as a percentage (i.e. "50%").</param>

    },


    min: function(pane,value) {
        /// <summary>
        /// Sets the minimum size of a pane. Setting this value will not cause the widget to redraw, nor will it trigger any events.
        /// </summary>
        /// <param name="pane" type="Object" >The pane being targeted for a new minimum size configuration value.</param>
        /// <param name="value" type="String" >The minimum size value of the pane defined as pixels (i.e. "200px") or as a percentage (i.e. "50%").</param>

    },


    remove: function(pane) {
        /// <summary>
        /// Removes one or more panes. The method returns the Splitter instance.
/// Invoking this method will force the widget to redraw and it will trigger the resize event.
        /// </summary>
        /// <param name="pane" type="Object" >The pane(s) to be removed.</param>

    },


    size: function(pane,value) {
        /// <summary>
        /// Set the size of the pane. Setting this value will cause the widget to redraw and it will trigger the resize event.
        /// </summary>
        /// <param name="pane" type="Object" >The pane to be resized.</param>
        /// <param name="value" type="String" >The new size of the pane defined as pixels (i.e. "200px") or as a percentage (i.e. "50%"). Note: This value must not exceed panes.max or be less then panes.min.</param>

    },


    toggle: function(pane,expand) {
        /// <summary>
        /// Toggles the state of a specified pane (i.e. collapsed or expanded).
/// Invoking this method will force the widget to redraw and it will trigger the resize event.
/// Note: Invoking the method will not trigger collapse or expand events.
        /// </summary>
        /// <param name="pane" type="Object" >The pane to be collapsed.</param>
        /// <param name="expand" type="Boolean" >Represents the desired state of the specified pane; to be expanded (true) or collapsed (false). If undefined, toggle() will collapse the pane if it is expanded or will expand the pane if it is collapsed.</param>

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

$.fn.getKendoSplitter = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.Splitter widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.Splitter">The kendo.ui.Splitter instance (if present).</returns>
};

$.fn.kendoSplitter = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.Splitter widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;orientation — String (default: "horizontal")
    /// &#10;Specifies the orientation of the widget. Supported values are "horizontal" and "vertical".
    /// &#10;
    /// &#10;panes — Array 
    /// &#10;An array of pane definitions.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.Spreadsheet = function() { };

kendo.ui.Spreadsheet.prototype = {




    activeSheet: function(sheet) {
        /// <summary>
        /// Gets or sets the active sheet.
        /// </summary>
        /// <param name="sheet" type="kendo.spreadsheet.Sheet" >The sheet to set as active.</param>
        /// <returns type="kendo.spreadsheet.Sheet">the active sheet.</returns>

    },


    sheets: function() {
        /// <summary>
        /// Returns an array with the sheets in the workbook.
        /// </summary>
        /// <returns type="Array">the available sheets.</returns>

    },


    saveAsExcel: function() {
        /// <summary>
        /// Initiates the Excel export. Also fires the excelExport event.
        /// </summary>

    },


    sheetByName: function(name) {
        /// <summary>
        /// Returns a sheet matching the specified name, if any.
        /// </summary>
        /// <param name="name" type="String" >The name of the sheet to locate.</param>
        /// <returns type="kendo.spreadsheet.Sheet">the sheet that match the name.</returns>

    },


    sheetIndex: function(sheet) {
        /// <summary>
        /// Returns the index of the specified sheet.
        /// </summary>
        /// <param name="sheet" type="kendo.spreadsheet.Sheet" >The sheet to determine the index of.</param>
        /// <returns type="Number">the sheet index.</returns>

    },


    sheetByIndex: function(index) {
        /// <summary>
        /// Locates a sheet by its index in the workbook.
        /// </summary>
        /// <param name="index" type="Number" >The index of the sheet to locate.</param>
        /// <returns type="kendo.spreadsheet.Sheet">the sheet that match the index.</returns>

    },


    insertSheet: function(options) {
        /// <summary>
        /// Inserts a sheet with the specified options.
        /// </summary>
        /// <param name="options" type="" >The configuration options for the sheet.</param>
        /// <returns type="kendo.spreadsheet.Sheet">the inserted sheet.</returns>

    },


    moveSheetToIndex: function(sheet,index) {
        /// <summary>
        /// Moves the sheet to the specified index.
        /// </summary>
        /// <param name="sheet" type="kendo.spreadsheet.Sheet" >The sheet instance to move.</param>
        /// <param name="index" type="Number" >The new zero-based index of the sheet.</param>

    },


    removeSheet: function(sheet) {
        /// <summary>
        /// Removes the specified sheet.
        /// </summary>
        /// <param name="sheet" type="kendo.spreadsheet.Sheet" >The sheet instance to remove.</param>

    },


    renameSheet: function(sheet,newSheetName) {
        /// <summary>
        /// Renames the specified sheet.
        /// </summary>
        /// <param name="sheet" type="kendo.spreadsheet.Sheet" >The sheet instance to rename.</param>
        /// <param name="newSheetName" type="String" >The new name of the sheet.</param>
        /// <returns type="kendo.spreadsheet.Sheet">the renamed sheet.</returns>

    },


    toJSON: function() {
        /// <summary>
        /// Serializes the workbook in the format defined in the configuration.
        /// </summary>
        /// <returns type="Object">the serialized workbook.</returns>

    },


    fromJSON: function(options) {
        /// <summary>
        /// Loads the workbook data from an object with the format defined in the configuration.
        /// </summary>
        /// <param name="options" type="Object" >The source data.</param>

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

$.fn.getKendoSpreadsheet = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.Spreadsheet widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.Spreadsheet">The kendo.ui.Spreadsheet instance (if present).</returns>
};

$.fn.kendoSpreadsheet = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.Spreadsheet widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;activeSheet — String 
    /// &#10;The name of the currently active sheet.Must match one of the (sheet names)[#configuration-sheets.name] exactly.
    /// &#10;
    /// &#10;columnWidth — Number (default: 64)
    /// &#10;The default column width in pixels.
    /// &#10;
    /// &#10;columns — Number (default: 50)
    /// &#10;The number of columns in the document.
    /// &#10;
    /// &#10;headerHeight — Number (default: 20)
    /// &#10;The height of the header row in pixels.
    /// &#10;
    /// &#10;headerWidth — Number (default: 32)
    /// &#10;The width of the header column in pixels.
    /// &#10;
    /// &#10;excel — Object 
    /// &#10;Configures the Kendo UI Spreadsheet Excel export settings.
    /// &#10;
    /// &#10;rowHeight — Number (default: 20)
    /// &#10;The default row height in pixels.
    /// &#10;
    /// &#10;rows — Number (default: 200)
    /// &#10;The number of rows in the document.
    /// &#10;
    /// &#10;sheets — Array 
    /// &#10;An array defining the document sheets and their content.
    /// &#10;
    /// &#10;toolbar — Boolean (default: true)
    /// &#10;A boolean value indicating if the toolbar should be displayed.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.TabStrip = function() { };

kendo.ui.TabStrip.prototype = {




    activateTab: function(item) {
        /// <summary>
        /// Activates a tab specified as a selector. Note: Invoking this method will not trigger any events.
        /// </summary>
        /// <param name="item" type="jQuery" >The target tab, specified as a selector, to be activated.</param>

    },


    append: function(tab) {
        /// <summary>
        /// Appends a tab to the collection of tabs in a TabStrip.
        /// </summary>
        /// <param name="tab" type="Object" >Target tab, specified as a JSON object. You can pass tab text, content or contentUrl here. Can handle an HTML string or array of such strings or JSON.</param>
        /// <returns type="kendo.ui.TabStrip">Returns the TabStrip object to support chaining.</returns>

    },


    contentElement: function(itemIndex) {
        /// <summary>
        /// Obtains the DOM element that encloses tab content by its tab index in the TabStrip.
        /// </summary>
        /// <param name="itemIndex" type="Number" >The index of the tab in the TabStrip.</param>
        /// <returns type="Element">The DOM element enclosing tab content by its tab index in the TabStrip.</returns>

    },


    contentHolder: function(itemIndex) {
        /// <summary>
        /// Obtains the DOM element that holds tab content by its tab index in the TabStrip.
/// The difference between contentElement and contentHolder is that contentHolder returns the DOM element that really holds the content, which on mobile is the scroll container.
        /// </summary>
        /// <param name="itemIndex" type="Number" >The index of the tab in the TabStrip.</param>
        /// <returns type="Element">The DOM element holding tab content by its tab index in the TabStrip.</returns>

    },


    deactivateTab: function(item) {
        /// <summary>
        /// Deactivates a tab specified as a selector. Note: Invoking this method will not trigger any events.
        /// </summary>
        /// <param name="item" type="jQuery" >The target tab, specified as a selector, to be deactivated.</param>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the TabStrip for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    disable: function(element) {
        /// <summary>
        /// Disables a tab(s) of a TabStrip.
        /// </summary>
        /// <param name="element" type="Object" >The target tab(s), specified as a selector, to be disabled.</param>
        /// <returns type="kendo.ui.TabStrip">Returns the TabStrip object to support chaining.</returns>

    },


    enable: function(element,enable) {
        /// <summary>
        /// Disables (false) or enables (true) a tab(s) of a TabStrip.
        /// </summary>
        /// <param name="element" type="Object" >The target tab(s), specified as a selector, to be enabled (true) or disabled (false).</param>
        /// <param name="enable" type="Boolean" >Desired state of the tab(s) specified by the selector; enabled (true) or disabled (false).</param>
        /// <returns type="kendo.ui.TabStrip">Returns the TabStrip object to support chaining.</returns>

    },


    insertAfter: function(item,referenceTab) {
        /// <summary>
        /// Inserts a newly-created tab after a specified tab.
        /// </summary>
        /// <param name="item" type="Object" >Target tab, specified as a JSON object. You can pass tab text, content or contentUrl here. Can handle an HTML string or array of such strings or JSON.</param>
        /// <param name="referenceTab" type="Object" >A reference tab to insert the new item after.</param>
        /// <returns type="kendo.ui.TabStrip">Returns the TabStrip object to support chaining.</returns>

    },


    insertBefore: function(item,referenceTab) {
        /// <summary>
        /// Inserts a newly-created tab before a specified tab.
        /// </summary>
        /// <param name="item" type="Object" >Target tab, specified as a JSON object. You can pass tab text, content or contentUrl here. Can handle an HTML string or array of such strings or JSON.</param>
        /// <param name="referenceTab" type="Object" >A reference tab to insert the new item before</param>
        /// <returns type="kendo.ui.TabStrip">Returns the TabStrip object to support chaining.</returns>

    },


    items: function() {
        /// <summary>
        /// Gets the list of DOM elements that represent the tabs.
        /// </summary>
        /// <returns type="HTMLCollection">the tabs as an HTML collection of elements.</returns>

    },


    reload: function(element) {
        /// <summary>
        /// Reloads TabStrip tab(s) via AJAX.
        /// </summary>
        /// <param name="element" type="Object" >The target tab(s), specified as a selector or jQuery object, to be reloaded via AJAX.</param>
        /// <returns type="kendo.ui.TabStrip">Returns the TabStrip object to support chaining.</returns>

    },


    remove: function(element) {
        /// <summary>
        /// Removes a specified tab from a TabStrip.
        /// </summary>
        /// <param name="element" type="Object" >The target tab(s), specified as a selector or jQuery object, to be removed.</param>
        /// <returns type="kendo.ui.TabStrip">Returns the TabStrip object to support chaining.</returns>

    },


    select: function(element) {
        /// <summary>
        /// Get/set the selected tab. If called without arguments, it returns the
/// currently selected tab.
        /// </summary>
        /// <param name="element" type="Object" >The target tab(s), specified as a selector, jQuery object or index in the tab group.</param>
        /// <returns type="jQuery">the selected tab if called without arguments. kendo.ui.TabStrip if called with arguments.</returns>

    },


    setDataSource: function() {
        /// <summary>
        /// Sets the data source of the widget.
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

$.fn.getKendoTabStrip = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.TabStrip widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.TabStrip">The kendo.ui.TabStrip instance (if present).</returns>
};

$.fn.kendoTabStrip = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.TabStrip widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;animation — Boolean 
    /// &#10;A collection of visual animations used when TabStrip tab are selected through
/// &#10;user interactions. Setting this option to false will disable all animations.
    /// &#10;
    /// &#10;animation — Object 
    /// &#10;A collection of visual animations used when TabStrip tab are selected through
/// &#10;user interactions. Setting this option to false will disable all animations.
    /// &#10;
    /// &#10;collapsible — Boolean (default: false)
    /// &#10;Specifies whether the TabStrip should be able to collapse completely when clicking an expanded tab.
    /// &#10;
    /// &#10;contentUrls — Array 
    /// &#10;Sets an array with the URLs from which the tabs content to be loaded from. If only specific tabs should be loaded via Ajax, then you should set the URLs to the corresponding positions in the array and set the other elements to null.
    /// &#10;
    /// &#10;dataContentField — String (default: "")
    /// &#10;Sets the field of the data item that provides the text content of the tab content element.
    /// &#10;
    /// &#10;dataContentUrlField — String (default: "")
    /// &#10;Sets the field of the data item that provides the URL for the Ajax loaded tab content.
    /// &#10;
    /// &#10;dataImageUrlField — String (default: "")
    /// &#10;Sets the field of the data item that provides the image URL of the tab.
    /// &#10;
    /// &#10;dataSpriteCssClass — String (default: "")
    /// &#10;Sets the field of the data item that provides the CSS class of the tab.
    /// &#10;
    /// &#10;dataTextField — String (default: "")
    /// &#10;Sets the field of the data item that provides the text name of the tab.
    /// &#10;
    /// &#10;dataUrlField — String (default: "")
    /// &#10;Sets the field of the data item that provides the link URL for the tab.
    /// &#10;
    /// &#10;navigatable — Boolean (default: true)
    /// &#10;Specifies whether the TabStrip should be keyboard navigatable.
    /// &#10;
    /// &#10;scrollable — Boolean 
    /// &#10;If enabled, the TabStrip will display buttons that will scroll the tabs horizontally, when they cannot fit the TabStrip width. By default scrolling is enabled.The feature requires "top" or "bottom" tabPosition.Unless disabled, scrollable must be set to a JavaScript object, which represents the scrolling configuration.See Scrollable Tabs for more information.
    /// &#10;
    /// &#10;scrollable — Object 
    /// &#10;If enabled, the TabStrip will display buttons that will scroll the tabs horizontally, when they cannot fit the TabStrip width. By default scrolling is enabled.The feature requires "top" or "bottom" tabPosition.Unless disabled, scrollable must be set to a JavaScript object, which represents the scrolling configuration.See Scrollable Tabs for more information.
    /// &#10;
    /// &#10;tabPosition — String (default: "top")
    /// &#10;Specifies the position of the widget tabs. Valid values are "top" (default), "left", "right" and "bottom".
/// &#10;A fade animation is highly recommended with any of the non-default tab position settings.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.TimePicker = function() { };

kendo.ui.TimePicker.prototype = {




    close: function() {
        /// <summary>
        /// Closes the drop-down list of a TimePicker.
        /// </summary>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the TimePicker for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    enable: function(enable) {
        /// <summary>
        /// Enables or disables a TimePicker.
        /// </summary>
        /// <param name="enable" type="Boolean" >Enables (true or undefined) or disables (false) a TimePicker.</param>

    },


    readonly: function(readonly) {
        /// <summary>
        /// Toggles the readonly state of the widget. When the widget is readonly it doesn't allow user input.
        /// </summary>
        /// <param name="readonly" type="Boolean" >The argument, which defines whether the TimePicker should be readonly or editable.</param>

    },


    max: function(value) {
        /// <summary>
        /// Gets or sets the maximum value of the TimePicker.
        /// </summary>
        /// <param name="value" type="Object" >The maximum time value to set for a TimePicker, expressed as a Date object or as a string.</param>
        /// <returns type="Date">The maximum time value of a TimePicker.</returns>

    },


    min: function(value) {
        /// <summary>
        /// Gets or sets the minimum value of the TimePicker.
        /// </summary>
        /// <param name="value" type="Object" >The minimum time value to set for a TimePicker, expressed as a Date object or as a string.</param>
        /// <returns type="Date">The minimum time value of a TimePicker.</returns>

    },


    open: function() {
        /// <summary>
        /// Opens the drop-down list of a TimePicker.
        /// </summary>

    },


    setOptions: function(options) {
        /// <summary>
        /// Changes the initial TimePicker configuration. Will be included in Q3 2013 SP1. Currently available in Q3 2013 internal builds only.
        /// </summary>
        /// <param name="options" type="Object" >The new configuration options.</param>

    },


    value: function(value) {
        /// <summary>
        /// Gets or sets the value of the TimePicker.
        /// </summary>
        /// <param name="value" type="Object" >The time value to set for a TimePicker, expressed as a Date object or as a string.</param>
        /// <returns type="Date">The time value of a TimePicker.</returns>

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

$.fn.getKendoTimePicker = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.TimePicker widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.TimePicker">The kendo.ui.TimePicker instance (if present).</returns>
};

$.fn.kendoTimePicker = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.TimePicker widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;animation — Object 
    /// &#10;Configures the opening and closing animations of the popup. Setting the animation option to false will disable the opening and closing animations. As a result the popup will open and close instantly.
    /// &#10;
    /// &#10;culture — String (default: "en-US")
    /// &#10;Specifies the culture info used by the widget.
    /// &#10;
    /// &#10;dates — Array 
    /// &#10;Specifies a list of dates, which are shown in the time drop-down list. If not set, the TimePicker will auto-generate the available times.
    /// &#10;
    /// &#10;format — String (default: "h:mm tt")
    /// &#10;Specifies the format, which is used to format the value of the TimePicker displayed in the input. The format also will be used to parse the input.
    /// &#10;
    /// &#10;interval — Number (default: "30")
    /// &#10;Specifies the interval, between values in the popup list, in minutes.
    /// &#10;
    /// &#10;max — Date (default: "00:00")
    /// &#10;Specifies the end value in the popup list.
    /// &#10;
    /// &#10;min — Date (default: "00:00")
    /// &#10;Specifies the start value in the popup list.
    /// &#10;
    /// &#10;parseFormats — Array 
    /// &#10;Specifies the formats, which are used to parse the value set with the value method or by direct input. If not set the value of the options.format will be used. Note that value of the format option is always used.
    /// &#10;
    /// &#10;value — Date (default: null)
    /// &#10;Specifies the selected time.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.ToolBar = function() { };

kendo.ui.ToolBar.prototype = {




    add: function(command) {
        /// <summary>
        /// Adds new command to the ToolBar widget. Accepts object with valid command configuration options.
        /// </summary>
        /// <param name="command" type="Object" >An object with valid command configuration options.</param>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    enable: function(command,enable) {
        /// <summary>
        /// Enables or disables the specified command. If the second parameter is omitted it will be treated as true and the command will be enabled.
        /// </summary>
        /// <param name="command" type="Object" >A string, DOM element or jQuery object which represents the command to be enabled or disabled. A string is treated as jQuery selector.</param>
        /// <param name="enable" type="Boolean" >A boolean flag that determines whether the command should be enabled (true) or disabled (false). If omitted the command will be enabled.</param>

    },


    getSelectedFromGroup: function(groupName) {
        /// <summary>
        /// Returns the selected toggle button from the specified group.
        /// </summary>
        /// <param name="groupName" type="String" >The name of the group.</param>

    },


    hide: function(command) {
        /// <summary>
        /// Hides a command from the ToolBar widget. The command is hidden from the ToolBar container and overflow popup (if resizable is enabled).
        /// </summary>
        /// <param name="command" type="Object" >A string, DOM element or jQuery object which represents the command to be hidden. A string is treated as jQuery selector.</param>

    },


    remove: function(command) {
        /// <summary>
        /// Removes a command from the ToolBar widget. The command is removed from the ToolBar container and overflow popup (if resizable is enabled).
        /// </summary>
        /// <param name="command" type="Object" >A string, DOM element or jQuery object which represents the command to be removed. A string is treated as jQuery selector.</param>

    },


    show: function(command) {
        /// <summary>
        /// Shows a hidden command in the ToolBar widget. The command is shown in the ToolBar container and overflow popup (if resizable is enabled).
        /// </summary>
        /// <param name="command" type="Object" >A string, DOM element or jQuery object which represents the command to be shown. A string is treated as jQuery selector.</param>

    },


    toggle: function() {
        /// <summary>
        /// Change the state of a togglable button.
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

$.fn.getKendoToolBar = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.ToolBar widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.ToolBar">The kendo.ui.ToolBar instance (if present).</returns>
};

$.fn.kendoToolBar = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.ToolBar widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;resizable — Boolean (default: true)
    /// &#10;If resizable is set to true the widget will detect changes in the viewport width and hides the overflowing controls in the command overflow popup.
    /// &#10;
    /// &#10;items — Array 
    /// &#10;A JavaScript array that contains the ToolBar's commands configuration.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.Tooltip = function() { };

kendo.ui.Tooltip.prototype = {




    show: function(element) {
        /// <summary>
        /// Shows the Tooltip for given target.
        /// </summary>
        /// <param name="element" type="jQuery" >The target element for which the Tooltip should be shown.</param>

    },


    hide: function() {
        /// <summary>
        /// Hides the Tooltip.
        /// </summary>

    },


    refresh: function() {
        /// <summary>
        /// Refresh the Tooltip content.
        /// </summary>

    },


    target: function() {
        /// <summary>
        /// Gets the Tooltip current target.
        /// </summary>
        /// <returns type="jQuery">The target element or null.</returns>

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

$.fn.getKendoTooltip = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.Tooltip widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.Tooltip">The kendo.ui.Tooltip instance (if present).</returns>
};

$.fn.kendoTooltip = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.Tooltip widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;autoHide — Boolean (default: true)
    /// &#10;Specifies if the Tooltip will be hidden when mouse leaves the target element. If set to false a close button will be shown within Tooltip. If set to false, showAfter is specified and the showOn is set to "mouseenter" the Tooltip will be displayed after the given timeout even if the element is no longer hovered.
    /// &#10;
    /// &#10;animation — Object 
    /// &#10;A collection of {Animation} objects, used to change default animations. A value of false
/// &#10;will disable all animations in the widget.
    /// &#10;
    /// &#10;content — String|Function 
    /// &#10;The text or a function which result will be shown within the Tooltip.
/// &#10;By default the Tooltip will display the target element title attribute content.
    /// &#10;
    /// &#10;content — Object 
    /// &#10;The text or a function which result will be shown within the Tooltip.
/// &#10;By default the Tooltip will display the target element title attribute content.
    /// &#10;
    /// &#10;callout — Boolean (default: true)
    /// &#10;Specifies if the Tooltip callout will be displayed.
    /// &#10;
    /// &#10;filter — String 
    /// &#10;Specifies a selector for elements, within the container, for which the Tooltip will be displayed.
    /// &#10;
    /// &#10;iframe — Boolean 
    /// &#10;Explicitly states whether content iframe should be created.
    /// &#10;
    /// &#10;height — Number (default: Infinity)
    /// &#10;The height (in pixels) of the Tooltip.
    /// &#10;
    /// &#10;width — Number (default: Infinity)
    /// &#10;The width (in pixels) of the Tooltip.
    /// &#10;
    /// &#10;position — String (default: "bottom")
    /// &#10;The position relative to the target element, at which the Tooltip will be shown. Predefined values are "bottom", "top", "left", "right", "center".
    /// &#10;
    /// &#10;showAfter — Number (default: 100)
    /// &#10;Specify the delay in milliseconds before the Tooltip is shown. This option is ignored if showOn is set to "click" or "focus".
    /// &#10;
    /// &#10;showOn — String (default: "mouseenter")
    /// &#10;The event on which the Tooltip will be shown. Predefined values are "mouseenter", "click" and "focus".
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.TreeList = function() { };

kendo.ui.TreeList.prototype = {




    addRow: function(parentRow) {
        /// <summary>
        /// Adds an empty data item to the treelist. In "inline" editing mode a table row will be appended. A popup window will be displayed in "popup" editing mode.Fires the edit event.
        /// </summary>
        /// <param name="parentRow" type="Object" >A string, DOM element or jQuery object which represents the parent table row. A string is treated as a jQuery selector.</param>

    },


    cancelRow: function() {
        /// <summary>
        /// Cancels editing for the table row which is in edit mode. Reverts any changes made.
        /// </summary>

    },


    clearSelection: function() {
        /// <summary>
        /// Clears the currently selected table rows or cells (depending on the current selection mode).
        /// </summary>

    },


    collapse: function() {
        /// <summary>
        /// This method collapse the row.
        /// </summary>

    },


    dataItem: function(row) {
        /// <summary>
        /// Returns the data item to which the specified table row is bound.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the table row. A string is treated as a jQuery selector.</param>
        /// <returns type="kendo.data.TreeListModel">the data item to which the specified table row is bound.</returns>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls the destroy method of any child Kendo widgets.
        /// </summary>

    },


    editRow: function(row) {
        /// <summary>
        /// Switches the specified table row to edit mode.Fires the edit event.
        /// </summary>
        /// <param name="row" type="jQuery" >The jQuery object which represents the table row.</param>

    },


    expand: function() {
        /// <summary>
        /// This method expands the row.
        /// </summary>

    },


    refresh: function() {
        /// <summary>
        /// Renders all table rows using the current data items.
        /// </summary>

    },


    removeRow: function(row) {
        /// <summary>
        /// Removes the specified table row from the treelist. Also removes the corresponding data item from the data source.Fires the remove event.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the table row. A string is treated as a jQuery selector.</param>

    },


    saveAsExcel: function() {
        /// <summary>
        /// Initiates the Excel export. Also fires the excelExport event.
        /// </summary>

    },


    saveAsPDF: function() {
        /// <summary>
        /// Initiates the PDF export and returns a promise. Also triggers the pdfExport event.
        /// </summary>
        /// <returns type="Promise">A promise that will be resolved when the export completes. The same promise is available in the pdfExport event arguments.</returns>

    },


    saveRow: function() {
        /// <summary>
        /// Switches the table row which is in edit mode and saves any changes made by the user.Fires the edit event.
        /// </summary>

    },


    select: function(rows) {
        /// <summary>
        /// Gets or sets the table rows (or cells) which are selected.
        /// </summary>
        /// <param name="rows" type="Object" >A string, DOM element or jQuery object which represents the table row(s) or cell(s). A string is treated as a jQuery selector.</param>
        /// <returns type="jQuery">the selected table rows or cells.</returns>

    },


    setDataSource: function(dataSource) {
        /// <summary>
        /// Sets the data source of the widget.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.TreeListDataSource" >The data source to which the widget should be bound.</param>

    },


    showColumn: function(column) {
        /// <summary>
        /// Shows the specified column.
        /// </summary>
        /// <param name="column" type="Object" >The index of the column, or the field to which the columns is bound.</param>

    },


    hideColumn: function(column) {
        /// <summary>
        /// Hides the specified column.
        /// </summary>
        /// <param name="column" type="Object" >The index of the column, or the field to which the columns is bound.</param>

    },


    lockColumn: function(column) {
        /// <summary>
        /// Locks (freezes) a column, allowing users to see it at all times when scrolling.
        /// </summary>
        /// <param name="column" type="Object" >The index of the column or the field to which the columns is bound.</param>

    },


    unlockColumn: function(column) {
        /// <summary>
        /// Unlocks (unfreezes) a column.
        /// </summary>
        /// <param name="column" type="Object" >The index of the column or the field to which the columns is bound.</param>

    },


    reorderColumn: function(destIndex,column) {
        /// <summary>
        /// Changes the position of the specified column.
        /// </summary>
        /// <param name="destIndex" type="Number" >The new position of the column. The destination index should be calculated with regard to all columns, including the hidden ones.</param>
        /// <param name="column" type="Object" >The column whose position should be changed.</param>

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

$.fn.getKendoTreeList = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.TreeList widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.TreeList">The kendo.ui.TreeList instance (if present).</returns>
};

$.fn.kendoTreeList = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.TreeList widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;autoBind — Boolean (default: true)
    /// &#10;If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
/// &#10;data source is fired. By default the widget will bind to the data source specified in the configuration.
    /// &#10;
    /// &#10;columns — Array 
    /// &#10;The configuration of the treelist columns. An array of JavaScript objects or strings. JavaScript objects are interpreted as column configurations. Strings are interpreted as the
/// &#10;field to which the column is bound. The treelist will create a column for every item of the array.
    /// &#10;
    /// &#10;resizable — Boolean (default: false)
    /// &#10;If set to true allows users to resize columns by dragging their header borders. By default resizing is disabled.
    /// &#10;
    /// &#10;reorderable — Boolean (default: false)
    /// &#10;If set to true the user could reorder the columns by dragging their header cells. By default reordering is disabled.
    /// &#10;
    /// &#10;columnMenu — Boolean (default: false)
    /// &#10;If set to true the treelist will display the column menu when the user clicks the chevron icon in the column headers. The column menu allows the user to show and hide columns, filter and sort (if filtering and sorting are enabled).
/// &#10;By default the column menu is not enabled.Can be set to a JavaScript object which represents the column menu configuration.
    /// &#10;
    /// &#10;columnMenu — Object (default: false)
    /// &#10;If set to true the treelist will display the column menu when the user clicks the chevron icon in the column headers. The column menu allows the user to show and hide columns, filter and sort (if filtering and sorting are enabled).
/// &#10;By default the column menu is not enabled.Can be set to a JavaScript object which represents the column menu configuration.
    /// &#10;
    /// &#10;dataSource — Object|Array|kendo.data.TreeListDataSource 
    /// &#10;The data source of the widget which is used to render table rows. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
/// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.DataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.DataSource instance, the widget will use that instance and will not initialize a new one.
    /// &#10;
    /// &#10;editable — Boolean (default: false)
    /// &#10;If set to true the user would be able to edit the data to which the treelist is bound. By default editing is disabled.Can be set to a string ("inline" or "popup") to specify the editing mode. The default editing mode is "inline".Can be set to a JavaScript object which represents the editing configuration.
    /// &#10;
    /// &#10;editable — Object (default: false)
    /// &#10;If set to true the user would be able to edit the data to which the treelist is bound. By default editing is disabled.Can be set to a string ("inline" or "popup") to specify the editing mode. The default editing mode is "inline".Can be set to a JavaScript object which represents the editing configuration.
    /// &#10;
    /// &#10;excel — Object 
    /// &#10;Configures the Kendo UI TreeList Excel export settings.
    /// &#10;
    /// &#10;filterable — Boolean (default: false)
    /// &#10;If set to true the user can filter the data source using the treelist filter menu. Filtering is disabled by default.Can be set to a JavaScript object which represents the filter menu configuration.
    /// &#10;
    /// &#10;filterable — Object (default: false)
    /// &#10;If set to true the user can filter the data source using the treelist filter menu. Filtering is disabled by default.Can be set to a JavaScript object which represents the filter menu configuration.
    /// &#10;
    /// &#10;height — Number|String 
    /// &#10;The height of the treelist. Numeric values are treated as pixels.
    /// &#10;
    /// &#10;messages — Object 
    /// &#10;Defines the text of the command buttons that are shown within the TreeList. Used primarily for localization.
    /// &#10;
    /// &#10;pdf — Object 
    /// &#10;Configures the Kendo UI TreeList PDF export settings.
    /// &#10;
    /// &#10;scrollable — Boolean|Object (default: true)
    /// &#10;If set to true the TreeList will display a scrollbar when the total row height (or width) exceeds the TreeList height (or width). By default scrolling is enabled.Scrolling renders separate tables for the header and data area. For accessibility-conscious applications, disable scrolling.
    /// &#10;
    /// &#10;selectable — Boolean|String (default: false)
    /// &#10;If set to true the user would be able to select treelist rows. By default selection is disabled.Can also be set to the following string values:
    /// &#10;
    /// &#10;sortable — Boolean (default: false)
    /// &#10;If set to true the user could sort the treelist by clicking the column header cells. By default sorting is disabled.Can be set to a JavaScript object which represents the sorting configuration.
    /// &#10;
    /// &#10;sortable — Object (default: false)
    /// &#10;If set to true the user could sort the treelist by clicking the column header cells. By default sorting is disabled.Can be set to a JavaScript object which represents the sorting configuration.
    /// &#10;
    /// &#10;toolbar — String|Function 
    /// &#10;If a String value is assigned to the toolbar configuration option, it will be treated as a single string template for the whole treelist Toolbar,
/// &#10;and the string value will be passed as an argument to a kendo.template() function.If a Function value is assigned (it may be a kendo.template() function call or a generic function reference), then the return value of the function will be used to render the treelist Toolbar contents.If an Array value is assigned, it will be treated as the list of commands displayed in the treelist Toolbar. Commands can be custom or built-in ("create", "excel", "pdf").
    /// &#10;
    /// &#10;toolbar — Array 
    /// &#10;If a String value is assigned to the toolbar configuration option, it will be treated as a single string template for the whole treelist Toolbar,
/// &#10;and the string value will be passed as an argument to a kendo.template() function.If a Function value is assigned (it may be a kendo.template() function call or a generic function reference), then the return value of the function will be used to render the treelist Toolbar contents.If an Array value is assigned, it will be treated as the list of commands displayed in the treelist Toolbar. Commands can be custom or built-in ("create", "excel", "pdf").
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.TreeView = function() { };

kendo.ui.TreeView.prototype = {




    append: function(nodeData,parentNode,success) {
        /// <summary>
        /// Appends a node to any level of the TreeView . This method may also be used to reorder nodes.
        /// </summary>
        /// <param name="nodeData" type="Object" >A JSON-formatted string or selector that specifies the node to be appended. If the argument is a plain JavaScript object, a new item will be created. If the argument is a jQuery element that holds a node, the TreeView node will be moved. If the argument is an array of objects, each item of the array will be appended.</param>
        /// <param name="parentNode" type="jQuery" >The node that will contain the newly appended node. If not specified, the new node will be appended to the root group of the TreeView.</param>
        /// <param name="success" type="Function" >A success callback that will be called once the new node has been appended. Useful in the case of remote binding where an item is appended to an unfetched node. The callback is called once the siblings have been fetched.</param>
        /// <returns type="jQuery">The inserted <li> element, wrapped in a jQuery object,or null if the new model has not been inserted immediately.</returns>

    },


    collapse: function(nodes) {
        /// <summary>
        /// Collapses nodes.
        /// </summary>
        /// <param name="nodes" type="Object" >The nodes that will be collapsed.</param>

    },


    dataItem: function(node) {
        /// <summary>
        /// Returns the data item to which the specified node is bound.
        /// </summary>
        /// <param name="node" type="Object" >A string, DOM element or jQuery object which represents the node. A string is treated as a jQuery selector.</param>
        /// <returns type="kendo.data.Node">The model of the item that was passed as a parameter.</returns>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    detach: function(node) {
        /// <summary>
        /// Removes a node from a TreeView, but keeps its jQuery.data() objects.
        /// </summary>
        /// <param name="node" type="Object" >The node that is to be detached.</param>
        /// <returns type="jQuery">The node that has been detached.</returns>

    },


    enable: function(nodes,enable) {
        /// <summary>
        /// Enables or disables nodes.
        /// </summary>
        /// <param name="nodes" type="Object" >The nodes that are to be enabled/disabled.</param>
        /// <param name="enable" type="Boolean" >Whether the nodes should be enabled or disabled.</param>

    },


    expand: function(nodes) {
        /// <summary>
        /// Expands collapsed nodes.
        /// </summary>
        /// <param name="nodes" type="Object" >The nodes that are to be expanded.</param>

    },


    expandPath: function(path,complete) {
        /// <summary>
        /// Expands all nodes to a given element. Nodes may be loaded from a remote end-point.
        /// </summary>
        /// <param name="path" type="Array" >The IDs of the nodes that need to be expanded.</param>
        /// <param name="complete" type="Function" >Callback function that will be called once the path has been expanded.</param>

    },


    expandTo: function(targetNode) {
        /// <summary>
        /// Expands all nodes up to a given element. The element needs to be already loaded.
        /// </summary>
        /// <param name="targetNode" type="Object" >The dataItem of the node up to which to expand. Can also be the node ID</param>

    },


    findByText: function(text) {
        /// <summary>
        /// Searches for a node that has specific text.
        /// </summary>
        /// <param name="text" type="String" >The text that is being searched for.</param>
        /// <returns type="jQuery">All nodes that have the text.</returns>

    },


    findByUid: function(text) {
        /// <summary>
        /// Searches for a node with the given unique identifier.
/// Applicable when the widget is bound to a HierarchicalDataSource.
/// If you want to find a node by its id, use the dataSource.get() method and supply its uid to the findByUid method.
        /// </summary>
        /// <param name="text" type="String" >The text that is being searched for.</param>
        /// <returns type="jQuery">All nodes that have the text.</returns>

    },


    insertAfter: function(nodeData,referenceNode) {
        /// <summary>
        /// Inserts a node after a specified node.
/// This method may also be used to reorder nodes.
        /// </summary>
        /// <param name="nodeData" type="Object" >A JSON-formatted string or selector that specifies the node to be inserted.</param>
        /// <param name="referenceNode" type="jQuery" >The node that will precede the newly-appended node.</param>

    },


    insertBefore: function(nodeData,referenceNode) {
        /// <summary>
        /// Inserts a node before another node. This method may also be used to reorder nodes.
        /// </summary>
        /// <param name="nodeData" type="Object" >A JSON-formatted string or selector that specifies the node to be inserted.</param>
        /// <param name="referenceNode" type="jQuery" >The node that follows the inserted node.</param>

    },


    parent: function(node) {
        /// <summary>
        /// Gets the parent node of the item
        /// </summary>
        /// <param name="node" type="Object" >The child node whose parent will be returned.</param>
        /// <returns type="jQuery">The parent node of the given parameter node.</returns>

    },


    remove: function(node) {
        /// <summary>
        /// Removes a node from the widget.
        /// </summary>
        /// <param name="node" type="Object" >The node that is to be removed.</param>

    },


    select: function(node) {
        /// <summary>
        /// Gets or sets the selected node.
        /// </summary>
        /// <param name="node" type="Object" >If provided, the node that should be selected.</param>
        /// <returns type="jQuery">The currently selected node.</returns>

    },


    setDataSource: function(dataSource) {
        /// <summary>
        /// Sets and binds a dataSource to the widget.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.HierarchicalDataSource" >The new dataSource that the widget will bind to</param>

    },


    text: function(node,newText) {
        /// <summary>
        /// Gets or sets the text of a node in a TreeView.
        /// </summary>
        /// <param name="node" type="Object" >The node of which the text is being retrieved or set.</param>
        /// <param name="newText" type="String" >Optional. When passed, sets the node text to the specified string</param>
        /// <returns type="String">The text of a node.</returns>

    },


    toggle: function(node) {
        /// <summary>
        /// Toggles the node of a TreeView between its expanded and collapsed states.
        /// </summary>
        /// <param name="node" type="Object" >The node that should be toggled.</param>

    },


    updateIndeterminate: function(node) {
        /// <summary>
        /// Updates the indeterminate state of the TreeView checkboxes.
/// Call it after using the insert / remove API on TreeViews with checkChildren: true.
/// Use to improve performance when checking multiple checkboxes through code.
        /// </summary>
        /// <param name="node" type="jQuery" >Optional. The root of the hierarchy that will be looped through. Allows only a subtree to be processed. The default value is the TreeView root.</param>

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

$.fn.getKendoTreeView = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.TreeView widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.TreeView">The kendo.ui.TreeView instance (if present).</returns>
};

$.fn.kendoTreeView = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.TreeView widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;animation — Boolean 
    /// &#10;A collection of visual animations used when items are expanded or collapsed through user interaction.
/// &#10;Setting this option to false will disable all animations.
    /// &#10;
    /// &#10;animation — Object 
    /// &#10;A collection of visual animations used when items are expanded or collapsed through user interaction.
/// &#10;Setting this option to false will disable all animations.
    /// &#10;
    /// &#10;autoBind — Boolean (default: true)
    /// &#10;If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
/// &#10;data source is fired. By default the widget will bind to the data source specified in the configuration.
    /// &#10;
    /// &#10;autoScroll — Boolean (default: false)
    /// &#10;If set to true the widget will auto-scroll the containing element when the mouse/finger is close to the top/bottom of it.
    /// &#10;
    /// &#10;checkboxes — Boolean 
    /// &#10;If true or an object, renders checkboxes beside each node.
    /// &#10;
    /// &#10;checkboxes — Object 
    /// &#10;If true or an object, renders checkboxes beside each node.
    /// &#10;
    /// &#10;dataImageUrlField — String (default: null)
    /// &#10;Sets the field of the data item that provides the image URL of the TreeView nodes.
    /// &#10;
    /// &#10;dataSource — Object|Array|kendo.data.HierarchicalDataSource 
    /// &#10;The data source of the widget which is used render nodes. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.HierarchicalDataSource instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.HierarchicalDataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.HierarchicalDataSource instance the widget will use that instance and will not initialize a new one.
    /// &#10;
    /// &#10;dataSpriteCssClassField — String (default: null)
    /// &#10;Sets the field of the data item that provides the sprite CSS class of the nodes.
/// &#10;If an array, each level uses the field that is at the same index in the array, or the last item in the array.
    /// &#10;
    /// &#10;dataTextField — String|Array (default: null)
    /// &#10;Sets the field of the data item that provides the text content of the nodes.
/// &#10;If an array, each level uses the field that is at the same index in the array, or the last item in the array.
    /// &#10;
    /// &#10;dataUrlField — String (default: null)
    /// &#10;Sets the field of the data item that provides the link URL of the nodes.
    /// &#10;
    /// &#10;dragAndDrop — Boolean (default: false)
    /// &#10;Disables (false) or enables (true) drag-and-drop of the nodes.
    /// &#10;
    /// &#10;loadOnDemand — Boolean (default: true)
    /// &#10;Indicates whether the child DataSources should be fetched lazily when parent groups get expanded.
/// &#10;Setting this to false causes all child DataSources to be loaded at initialization time.
    /// &#10;
    /// &#10;messages — Object 
    /// &#10;The text messages displayed in the widget. Use it to customize or localize the messages.
    /// &#10;
    /// &#10;template — String|Function 
    /// &#10;Template for rendering each node.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.Upload = function() { };

kendo.ui.Upload.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the Upload for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    disable: function() {
        /// <summary>
        /// Disables the upload.
        /// </summary>

    },


    enable: function(enable) {
        /// <summary>
        /// Enables the upload.
        /// </summary>
        /// <param name="enable" type="Boolean" >The argument, which defines whether to enable/disable the upload.</param>

    },


    toggle: function(enable) {
        /// <summary>
        /// Toggles the upload enabled state.
        /// </summary>
        /// <param name="enable" type="Boolean" >(Optional) The new enabled state.</param>

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

$.fn.getKendoUpload = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.Upload widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.Upload">The kendo.ui.Upload instance (if present).</returns>
};

$.fn.kendoUpload = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.Upload widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;async — Object 
    /// &#10;Configures the ability to upload a file(s) in an asynchronous manner. Please refer to the
/// &#10;async mode help topic
/// &#10;for more details.
    /// &#10;
    /// &#10;enabled — Boolean (default: true)
    /// &#10;Enables (true) or disables (false) an Upload. A disabled
/// &#10;Upload may be re-enabled via enable().
    /// &#10;
    /// &#10;files — Array 
    /// &#10;List of files to be initially rendered in the Upload widget files list.
    /// &#10;
    /// &#10;localization — Object 
    /// &#10;Sets the strings rendered by the Upload.
    /// &#10;
    /// &#10;multiple — Boolean (default: true)
    /// &#10;Enables (true) or disables (false) the ability to select multiple files.
/// &#10;If false, users will be able to select only one file at a time. Note: This option does not
/// &#10;limit the total number of uploaded files in an asynchronous configuration.
    /// &#10;
    /// &#10;showFileList — Boolean (default: true)
    /// &#10;Enables (true) or disables (false) the ability to display a file listing
/// &#10;for uploading a file(s). Disabling a file listing may be useful you wish to customize the UI; use the
/// &#10;client-side events to build your own UI.
    /// &#10;
    /// &#10;template — String|Function 
    /// &#10;The template used to render the files in the list
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


kendo.ui.Window = function() { };

kendo.ui.Window.prototype = {




    center: function() {
        /// <summary>
        /// Centers the window within the viewport.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the window object to support chaining.</returns>

    },


    close: function() {
        /// <summary>
        /// Closes a Window.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the window object to support chaining.</returns>

    },


    content: function(content) {
        /// <summary>
        /// Gets or set the content of a window.
        /// </summary>
        /// <param name="content" type="String" >The content of the Window.</param>
        /// <returns type="Object">If the content parameter is provided, this method will return the widget object to support chaining. Otherwise, it will return the current content of the widget.</returns>

    },


    destroy: function() {
        /// <summary>
        /// Destroys the window and its modal overlay, if necessary. Removes the widget HTML elements from the DOM.
        /// </summary>

    },


    maximize: function() {
        /// <summary>
        /// Maximizes a Window to the entire viewing area of the user agent. Triggers the resize event.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the window object to support chaining.</returns>

    },


    minimize: function() {
        /// <summary>
        /// Maximizes a Window to its title bar.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the window object to support chaining.</returns>

    },


    open: function() {
        /// <summary>
        /// Opens a Window.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the window object to support chaining.</returns>

    },


    pin: function() {
        /// <summary>
        /// Pins the Window at its current position with a position:fixed style, i.e. the widget stops moving together with the other page content when the page is scrolled.
/// The user will still be able to move the Window with the mouse or keyboard.
        /// </summary>

    },


    refresh: function(options) {
        /// <summary>
        /// Refreshes the content of a Window from a remote URL or the initially defined content template.
/// Note that passing data and non-GET requests cannot be sent to an iframe, as they require a form with a target attribute.
        /// </summary>
        /// <param name="options" type="String" >Options for requesting data from the server. If omitted, the window uses the content property that was supplied when the window was created. Any options specified here are passed to jQuery.ajax().</param>
        /// <returns type="kendo.ui.Window">Returns the window object to support chaining.</returns>

    },


    restore: function() {
        /// <summary>
        /// Restores a maximized or minimized Window to its previous state. Triggers the resize event.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the window object to support chaining.</returns>

    },


    setOptions: function(options) {
        /// <summary>
        /// Allows the window to be configured with new options. If you change the content url, call refresh afterwards.
/// Another option is to execute the refresh method with the new URL directly.
        /// </summary>
        /// <param name="options" type="Object" >The configuration options to be set.</param>

    },


    title: function(text) {
        /// <summary>
        /// Gets or set the title of a Window.
        /// </summary>
        /// <param name="text" type="String" >The title of the Window.</param>
        /// <returns type="kendo.ui.Window">If a title is provided, this method will return the window object to support chaining. Otherwise, it will return the current title of the window.</returns>

    },


    toFront: function() {
        /// <summary>
        /// Brings forward a Window to the top of the z-index.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the window object to support chaining.</returns>

    },


    toggleMaximization: function() {
        /// <summary>
        /// Toggles a Window between a maximized and restored state. Triggers the resize event.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the window object to support chaining.</returns>

    },


    unpin: function() {
        /// <summary>
        /// Disables the Window's pinned state, so that the widget will move together with the other page content when the page is scrolled.
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

$.fn.getKendoWindow = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.Window widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.Window">The kendo.ui.Window instance (if present).</returns>
};

$.fn.kendoWindow = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.Window widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;actions — Array (default: ["Close"])
    /// &#10;The buttons for interacting with the window. Predefined array values are "Close", "Refresh", "Minimize",
/// &#10;and "Maximize".
    /// &#10;
    /// &#10;animation — Object 
    /// &#10;A collection of {Animation} objects, used to change default animations. A value of false
/// &#10;will disable all animations in the widget.
    /// &#10;
    /// &#10;appendTo — Object|String (default: document.body)
    /// &#10;The element that the Window will be appended to. Beneficial if the Window is used together with a form.
/// &#10;Note that this does not constrain the window dragging within the given element.
    /// &#10;
    /// &#10;autoFocus — Boolean (default: true)
    /// &#10;Determines whether the Window will be focused automatically when opened. The property also influences the focus behavior when the Window is clicked when already opened.
    /// &#10;
    /// &#10;content — String 
    /// &#10;Specifies a URL or request options that the window should load its content from.Note: For URLs starting with a protocol (e.g. http://),
/// &#10;a container iframe element is automatically created. This behavior may change in future
/// &#10;versions, so it is advisable to always use the iframe configuration option.
    /// &#10;
    /// &#10;content — Object 
    /// &#10;Specifies a URL or request options that the window should load its content from.Note: For URLs starting with a protocol (e.g. http://),
/// &#10;a container iframe element is automatically created. This behavior may change in future
/// &#10;versions, so it is advisable to always use the iframe configuration option.
    /// &#10;
    /// &#10;draggable — Boolean (default: true)
    /// &#10;Enables (true) or disables (false) the ability for users to move/drag the widget.
    /// &#10;
    /// &#10;iframe — Boolean 
    /// &#10;Explicitly states whether a content iframe should be created. For more information, please read Using iframes.
    /// &#10;
    /// &#10;maxHeight — Number (default: Infinity)
    /// &#10;The maximum height (in pixels) that may be achieved by resizing the window.
    /// &#10;
    /// &#10;maxWidth — Number (default: Infinity)
    /// &#10;The maximum width (in pixels) that may be achieved by resizing the window.
    /// &#10;
    /// &#10;minHeight — Number (default: 50)
    /// &#10;The minimum height (in pixels) that may be achieved by resizing the window.
    /// &#10;
    /// &#10;minWidth — Number (default: 50)
    /// &#10;The minimum width (in pixels) that may be achieved by resizing the window.
    /// &#10;
    /// &#10;modal — Boolean (default: false)
    /// &#10;Specifies whether the window should show a modal overlay over the page.
    /// &#10;
    /// &#10;pinned — Boolean (default: false)
    /// &#10;Specifies whether the window should be pinned, i.e. it will not move together with the page content during scrolling.
    /// &#10;
    /// &#10;position — Object 
    /// &#10;A collection of one or two members, which define the initial Window's top and/or left position on the page.
    /// &#10;
    /// &#10;resizable — Boolean (default: true)
    /// &#10;Enables (true) or disables (false) the ability for users to resize a Window.
    /// &#10;
    /// &#10;scrollable — Boolean (default: true)
    /// &#10;Enables (true) or disables (false) the ability for users to scroll the window contents.
    /// &#10;
    /// &#10;title — String|Boolean (default: "")
    /// &#10;The text in the window title bar. If false, the window will be displayed without a title bar. Note that this will prevent the window from being dragged, and the window titlebar buttons will not be shown.
    /// &#10;
    /// &#10;visible — Boolean (default: true)
    /// &#10;Specifies whether the window will be initially visible.
    /// &#10;
    /// &#10;width — Number|String 
    /// &#10;Specifies width of the window.
    /// &#10;
    /// &#10;height — Number|String 
    /// &#10;Specifies height of the window.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};

