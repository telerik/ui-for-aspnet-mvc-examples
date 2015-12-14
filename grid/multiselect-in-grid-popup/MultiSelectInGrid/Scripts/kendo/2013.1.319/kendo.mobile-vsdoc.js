var kendo = {
    ui: {},
    mobile: {ui: {}},
    dataviz: {ui: {}},
    data: {}
};


FX = function() { };

FX.prototype = {




    kendoAnimate: function(duration,reverse,complete,show,hide) {
        /// <summary>
        /// Applies the specified animation effect/s to all selected elements and triggers the callback on every element when it completes its animation.
/// Uses transitions and transformations where available and falls back to jQuery animate where not. kendoAnimate can be used to run one of the provided
/// animation effects or you can define one yourself, using the same format.
        /// </summary>
        /// <param name="duration" type="Number" >The effect duration (speed) in milliseconds.</param>
        /// <param name="reverse" type="Boolean" >Whether the effect should play backwards, useful when doing the same animation but with the opposite direction, like opening and closing.</param>
        /// <param name="complete" type="Function" >Completion callback that should be called after animation completion. It gets fired for every animated element and is passed the said element as its only argument.</param>
        /// <param name="show" type="Boolean" >Whether the element should be shown before animating.</param>
        /// <param name="hide" type="Boolean" >Whether the element should be hidden after the animation completes.</param>

    },


    kendoStop: function(gotoEnd) {
        /// <summary>
        /// Stops the animation effect running on the specified elements and optionally jumps to the end and clears the animation effect queue.
/// In browsers that don't support transitions falls back to jQuery stop().This functionality is useful to avoid chaining many effects, causing them to run longer than expected.
        /// </summary>
        /// <param name="gotoEnd" type="Boolean" >Whether to jump to the animation end position when stopping or just leave the element at its current position.</param>

    },


    kendoAddClass: function(classes,options) {
        /// <summary>
        /// Adds a CSS class to the element, while doing a transition to the new state. If the browser doesn't support transitions,
/// the method falls back to jQuery addClass();
        /// </summary>
        /// <param name="classes" type="String" >A list of the classes that should be added to the element/s, separated by a space.</param>
        /// <param name="options" type="" >An object containing several additional options, like duration and exclusive.</param>

    },


    kendoRemoveClass: function(classes,options) {
        /// <summary>
        /// Removes a CSS class from the element, while doing a transition to the new state. If the browser doesn't support transitions,
/// the method falls back to jQuery removeClass();
        /// </summary>
        /// <param name="classes" type="String" >A list of the classes that should be removed from the element/s, separated by a space.</param>
        /// <param name="options" type="" >An object containing several additional options, like duration and exclusive.</param>

    },


    kendoToggleClass: function(classes,options,toggle) {
        /// <summary>
        /// Toggle a CSS class on the element, based on a flag, while doing a transition to the new state. If the browser doesn't support transitions,
/// the method falls back to jQuery toggleClass();
        /// </summary>
        /// <param name="classes" type="String" >A list of the classes that should be toggled on the element/s, separated by a space.</param>
        /// <param name="options" type="" >An object containing several additional options, like duration and exclusive.</param>
        /// <param name="toggle" type="Boolean" >A boolean flag to control the toggle - true to add or false to remove the CSS class. If omitted the method will assume the opposite state should be toggled.</param>

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

$.fn.getKendoFX = function() {
    /// <summary>
    /// Returns a reference to the FX widget, instantiated on the selector.
    /// </summary>
    /// <returns type="FX">The FX instance (if present).</returns>
};

$.fn.kendoFX = function(options) {
    /// <summary>
    /// Instantiates a FX widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
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


kendo.Layout = function() { };

kendo.Layout.prototype = {




    showIn: function(container,view) {
        /// <summary>
        /// Renders the View element in the element specified by the selector
        /// </summary>
        /// <param name="container" type="String" >The selector of the container in which the view element will be appended.</param>
        /// <param name="view" type="kendo.View" >The view instance that will be rendered.</param>

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
        /// <param name="handler" type="Function" >The handler which should no loger be executed. If not specified all handlers listening to that event will be removed.</param>

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
        /// Activates the router binding to the URL fragment part changes.
        /// </summary>

    },


    Example: function() {
        /// <summary>
        /// 
        /// </summary>

    },


    route: function(route,callback) {
        /// <summary>
        /// Specifies a callback for the given route. The route definition can contain bound parameters, optional segments, and route globbing.
/// The parsed parts of the URL are passed as parameters to the route callback.
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
        /// <param name="container" type="jQuery" >(Optional) the element in which the view element will be appended.</param>
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
    /// &#10;tagName — String (default: "div")
    /// &#10;The tag used for the root element of the view.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.data.Binder = function() { };

kendo.data.Binder.prototype = {



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
        /// Adds a new data item to the DataSource.
        /// </summary>
        /// <param name="model" type="Object" >Either a kendo.data.Model instance or JavaScript object containing the field values.</param>
        /// <returns type="kendo.data.Model">The instance which has been added.</returns>

    },


    aggregate: function(val) {
        /// <summary>
        /// Get current aggregate descriptors or applies aggregates to the data.
        /// </summary>
        /// <param name="val" type="Object" >Aggregate(s) to be applied to the data.</param>
        /// <returns type="Array">Current aggregate descriptors</returns>

    },


    aggregates: function() {
        /// <summary>
        /// Get result of aggregates calculation
        /// </summary>
        /// <returns type="Array">Aggregates result</returns>

    },


    at: function(index) {
        /// <summary>
        /// Returns the data item at the specified index.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index of the data item.</param>
        /// <returns type="kendo.data.ObservableObject | kendo.data.Model">The type depends on the schema.</returns>

    },


    cancelChanges: function(model) {
        /// <summary>
        /// Cancel the changes made to the DataSource after the last sync. Any changes currently existing in the model
/// will be discarded.
        /// </summary>
        /// <param name="model" type="kendo.data.Model" >Optional model instance. If specified only the changes of this model will be discarded. If omitted all changes will be discarded.</param>

    },


    data: function(value) {
        /// <summary>
        /// Gets or sets the data of the DataSource.
        /// </summary>
        /// <param name="value" type="Array" >An Array of items to set as the current data of the DataSource. If omitted the current data will be returned.</param>
        /// <returns type="kendo.data.ObservableArray">the items of the DataSource</returns>

    },


    fetch: function(callback) {
        /// <summary>
        /// Fetches data using the current filter/sort/group/paging information.
/// If data is not available and remote operations are enabled data is requested through the transport,
/// otherwise operations are executed over the available data.
        /// </summary>
        /// <param name="callback" type="Function" >Optional callback which will be executed when the data is ready.</param>

    },


    filter: function(filters) {
        /// <summary>
        /// Get current filters or filter the data.Supported filter operators/aliases are:
        /// </summary>
        /// <param name="filters" type="Object" >Filter(s) to be applied to the data.</param>
        /// <returns type="Array">The current filter descriptors.</returns>

    },


    get: function(id) {
        /// <summary>
        /// Retrieves a model instance by given id.
        /// </summary>
        /// <param name="id" type="Object" >The id of the model to be retrieved. The id of the model is defined via schema.model.id.</param>
        /// <returns type="kendo.data.Model">the model instance. If not found undefined is returned.</returns>

    },


    getByUid: function(uid) {
        /// <summary>
        /// Retrieves a data item by its uid field.
        /// </summary>
        /// <param name="uid" type="String" >The uid of the item to be retrieved</param>
        /// <returns type="kendo.data.ObservableObject">or kendo.data.Model (if schema.model is set). If not found undefined is returned.</returns>

    },


    group: function(groups) {
        /// <summary>
        /// Get current group descriptors or group the data.
        /// </summary>
        /// <param name="groups" type="Object" >Group(s) to be applied to the data.</param>
        /// <returns type="Array">The current group descriptors.</returns>

    },


    hasChanges: function() {
        /// <summary>
        /// Get if DataSource has changes.
        /// </summary>
        /// <returns type="Boolean">True if DataSource records are modified. Otherwise, false.</returns>

    },


    indexOf: function(value) {
        /// <summary>
        /// Get the index of the specified kendo.data.ObservableObject or kendo.data.Model.
        /// </summary>
        /// <param name="value" type="kendo.data.ObservableObject" ></param>
        /// <returns type="Number">the index of the specified value.</returns>

    },


    insert: function(index,model) {
        /// <summary>
        /// Inserts a new data item in the DataSource.
        /// </summary>
        /// <param name="index" type="Number" >The zer-based index at which the data item will be inserted</param>
        /// <param name="model" type="Object" >Either a kendo.data.Model instance or JavaScript object containing the field values.</param>
        /// <returns type="kendo.data.Model">The instance which has been inserted.</returns>

    },


    page: function(page) {
        /// <summary>
        /// Get/set the current page index.
        /// </summary>
        /// <param name="page" type="Number" >The index of the page to be retrieved</param>
        /// <returns type="Number">Current page index</returns>

    },


    pageSize: function(size) {
        /// <summary>
        /// Get/set the current pageSize or request a page with specified number of records.
        /// </summary>
        /// <param name="size" type="Number" >The of number of records to be retrieved.</param>
        /// <returns type="Number">Current page size</returns>

    },


    query: function(options) {
        /// <summary>
        /// Executes a query over the data. Available operations are paging, sorting, filtering, grouping.
/// If data is not available or remote operations are enabled, data is requested through the transport.
/// Otherwise operations are executed over the available data.
        /// </summary>
        /// <param name="options" type="Object" >Contains the settings for the operations.</param>

    },


    read: function(data) {
        /// <summary>
        /// Read data into the DataSource using the transport.read setting.
        /// </summary>
        /// <param name="data" type="Object" >Optional data to pass to the remote service configured via transport.read.</param>

    },


    remove: function(model) {
        /// <summary>
        /// Remove a given kendo.data.Model instance from the DataSource.
        /// </summary>
        /// <param name="model" type="Object" >The kendo.data.Model instance to be removed.</param>

    },


    sort: function(sort) {
        /// <summary>
        /// Get current sort descriptors or sorts the data.
        /// </summary>
        /// <param name="sort" type="Object" >Sort options to be applied to the data</param>
        /// <returns type="Array">the current sort descriptors.</returns>

    },


    sync: function() {
        /// <summary>
        /// Synchronizes changes through the transport. Any pending CRUD operations will be sent to the server.
/// If the DataSource is in batch mode, only one call will be made for each type of operation (Create, Update, Destroy).
/// Otherwise, the DataSource will send one request per item change and change type.
        /// </summary>

    },


    total: function() {
        /// <summary>
        /// Get the total number of data items.
        /// </summary>
        /// <returns type="Number">the number of data items.</returns>

    },


    totalPages: function() {
        /// <summary>
        /// Get the number of available pages.
        /// </summary>
        /// <returns type="Number">the available pages.</returns>

    },


    view: function() {
        /// <summary>
        /// Returns a the current state of the data items - with applied paging, sorting, filtering and grouping.To ensure that data is available this method should be use from within change event of the DataSource.
        /// </summary>
        /// <returns type="kendo.data.ObservableArray">the data items.</returns>

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
    /// &#10;aggregate — Array|Object 
    /// &#10;Sets fields on which initial aggregates should be calculated
    /// &#10;
    /// &#10;autoSync — Boolean (default: false)
    /// &#10;Enables (true) or disables (false) the automatic invocation of the sync() method for each change made.
    /// &#10;
    /// &#10;batch — Boolean (default: false)
    /// &#10;Enables (true) or disables (false) batch mode.
    /// &#10;
    /// &#10;data — Array 
    /// &#10;Specifies the local JavaScript object to use for the data source.
    /// &#10;
    /// &#10;filter — Array|Object 
    /// &#10;Sets the initial filter.
    /// &#10;
    /// &#10;group — Array|Object 
    /// &#10;Sets initial grouping
    /// &#10;
    /// &#10;page — Number (default: undefined)
    /// &#10;Sets the index of the displayed page of data.
    /// &#10;
    /// &#10;pageSize — Number (default: undefined)
    /// &#10;Sets the number of records which contains a given page of data.
    /// &#10;
    /// &#10;schema — Object 
    /// &#10;Set the object responsible for describing the raw data format.
    /// &#10;
    /// &#10;serverAggregates — Boolean (default: false)
    /// &#10;Determines if aggregates are calculated on the server or not. By default aggregates are calculated client-side.
    /// &#10;
    /// &#10;serverFiltering — Boolean (default: false)
    /// &#10;Determines if filtering of the data is handled on the server. By default filtering is performed client-side.By default, a filter object is sent to the server with the query string in the following form:Possible values for operator include:
    /// &#10;
    /// &#10;serverGrouping — Boolean (default: false)
    /// &#10;Determines if grouping of the data is handled on the server. By default grouping is performed client-side.By default, a group object is sent to the server with the query string in the following form:It is possible to modify these parameters by using the parameterMap function found on the transport.
    /// &#10;
    /// &#10;serverPaging — Boolean (default: false)
    /// &#10;Determines if paging of the data is on the server. By default paging is performed client-side. If serverPaging is enabled the
/// &#10;total number of data items should also be returned in the response. Use the schema.total setting to customize that.The following options are sent to the server as part of the query string by default:
    /// &#10;
    /// &#10;serverSorting — Boolean (default: false)
    /// &#10;Determines if sorting of the data should is handled on the server. By default sorting is performed client-side.By default, a sort object is sent to the server with the query string in the following form:It is possible to modify these parameters by using the parameterMap function found on the transport.
    /// &#10;
    /// &#10;sort — Array|Object 
    /// &#10;Sets initial sort order
    /// &#10;
    /// &#10;transport — Object 
    /// &#10;Specifies the settings for loading and saving data. This can be a remote or local/in-memory data.
    /// &#10;
    /// &#10;type — String 
    /// &#10;Loads transport with preconfigured settings. Currently supports only "odata" (Requires kendo.data.odata.js to be included).
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
    /// &#10;schema.model — Object 
    /// &#10;The model configuration of the HierarchicalDataSource.
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
        /// Attaches a handler to an event. More info can be found in the bind section of the
        /// </summary>

    },


    editable: function(field) {
        /// <summary>
        /// Determines if the specified field is editable or not.
        /// </summary>
        /// <param name="field" type="String" >The field to check.</param>

    },


    get: function() {
        /// <summary>
        /// Gets the value of the specified field. Inherited from ObservableObject. More info can be found in the get section of the
/// ObservableObject API reference.
        /// </summary>

    },


    isNew: function() {
        /// <summary>
        /// Checks if the Model is new or not. The id field is used to determine if a model instance is new or existing one.
/// If the value of the field specified is equal to the default value (specifed through the fields configuration) the model is considered as new.
        /// </summary>

    },


    set: function() {
        /// <summary>
        /// Sets the value of the specified field. Inherited from ObservableObject. More info can be found in the set section of the
/// ObservableObject API reference.
        /// </summary>

    },


    toJSON: function() {
        /// <summary>
        /// Creates a plain JavaScript object which contains all fields of the Model. Inherited from ObservableObject. More info can be found in the toJSON section of the
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
        /// Appends a new item to the children datasource, and initializes the datasource, if necessary.
        /// </summary>
        /// <param name="model" type="Object" >The data for the new item</param>

    },


    level: function() {
        /// <summary>
        /// Gets the current nesting level of the Node within the HierarchicalDataSource.
        /// </summary>

    },


    load: function() {
        /// <summary>
        /// Loads the child nodes in the child datasource, supplying the id of the Node to the request.
        /// </summary>

    },


    loaded: function() {
        /// <summary>
        /// Gets or sets the loaded flag of the Node. Setting the loaded flag to false allows reloading of child items.
        /// </summary>

    },


    parentNode: function() {
        /// <summary>
        /// Gets the parent node of the Node, if any.
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
        /// Returns the parent ObservableObject. If the current ObservableArray is not nested
/// returns undefined.
        /// </summary>

    },


    pop: function() {
        /// <summary>
        /// Removes the last item from an array and returns that item. Equivalent of
/// Array.prototype.pop.
        /// </summary>

    },


    push: function() {
        /// <summary>
        /// Appends the given items to the array and returns the new length of the array. Equivalent of
/// Array.prototype.push.
/// The new items are wrapped as ObservableObject if they are complex objects.
        /// </summary>

    },


    slice: function(begin,end) {
        /// <summary>
        /// Returns a one-level deep copy of a portion of an array. Equivalent of
/// Array.prototype.slice.
/// The result of the slice method is not an instance of ObvservableArray. It is a regular JavaScript Array object.
/// > Important: The slice method does not modify the original ObservableArray.
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
        /// <param name="howMany" type="Number" >An integer indicating the number of items to remove. If howMany is 0, no items are removed. In this case, you should specify at least one new item.</param>
        /// <returns type="Array">An Array containing the removed items. The result of the splice method is not an instance of ObvservableArray.</returns>

    },


    shift: function() {
        /// <summary>
        /// Removes the first item from an ObvservableArray and returns that item. Equivalent of
/// Array.prototype.shift.
        /// </summary>

    },


    toJSON: function() {
        /// <summary>
        /// Returns a JavaScript Array which represents the contents of the ObservableArray.
        /// </summary>

    },


    unshift: function() {
        /// <summary>
        /// Adds one or more items to the beginning of an ObservableArray and returns the new length.
/// Equivalent of Array.prototype.unshift.
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
        /// Attaches a handler to an event. More info can be found in the bind section of the
/// kendo.Observable API reference.
        /// </summary>

    },


    get: function(name) {
        /// <summary>
        /// Gets the value of the specified field.
        /// </summary>
        /// <param name="name" type="String" >The name of the field whose value is going to be returned.</param>
        /// <returns type="Object">The value of the specified field.</returns>

    },


    parent: function() {
        /// <summary>
        /// Returns the parent ObservableObject. If the current ObservableObject is not
/// nested returns undefined;
        /// </summary>

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
        /// <returns type="Object">An Object which contains only the fields of the ObservableObject.</returns>

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


kendo.mobile.Application = function() { };

kendo.mobile.Application.prototype = {




    hideLoading: function() {
        /// <summary>
        /// Hide the loading animation.
        /// </summary>

    },


    navigate: function(url,transition) {
        /// <summary>
        /// Navigate to local or to remote view.
        /// </summary>
        /// <param name="url" type="String" >The id or url of the view.</param>
        /// <param name="transition" type="String" >The transition to apply when navigating. See View Transitions section for more information.</param>

    },


    scroller: function() {
        /// <summary>
        /// Get a reference to the current view's scroller widget instance.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Scroller">the scroller widget instance.</returns>

    },


    showLoading: function() {
        /// <summary>
        /// Show the loading animation.
        /// </summary>

    },


    view: function() {
        /// <summary>
        /// Get a reference to the current view.
        /// </summary>
        /// <returns type="kendo.mobile.ui.View">the view instance.</returns>

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

$.fn.getKendoApplication = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.Application widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.Application">The kendo.mobile.Application instance (if present).</returns>
};

$.fn.kendoApplication = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.Application widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;hideAddressBar — Boolean (default: true)
    /// &#10;Whether to hide the browser address bar. Supported only in iPhone and iPod. Doesn't affect standalone mode as there the address bar is always hidden.
    /// &#10;
    /// &#10;updateDocumentTitle — Boolean (default: true)
    /// &#10;Whether to update the document title.
    /// &#10;
    /// &#10;initial — String 
    /// &#10;The id of the initial mobile View to display.
    /// &#10;
    /// &#10;layout — String 
    /// &#10;The id of the default Application Layout.
    /// &#10;
    /// &#10;loading — String (default: )
    /// &#10;The text displayed in the loading popup. Setting this value to false will disable the loading popup.
    /// &#10;
    /// &#10;platform — String 
    /// &#10;Which platform look to force on the application. Can be one of "ios", "android", "blackberry".
    /// &#10;
    /// &#10;serverNavigation — Boolean 
    /// &#10;If set to true, the application will not use ajax to load remote views.
    /// &#10;
    /// &#10;transition — String 
    /// &#10;The default View transition.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.ActionSheet = function() { };

kendo.mobile.ui.ActionSheet.prototype = {




    close: function() {
        /// <summary>
        /// Close the ActionSheet.
        /// </summary>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the ActionSheet for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    open: function(target,context) {
        /// <summary>
        /// Open the ActionSheet.
        /// </summary>
        /// <param name="target" type="jQuery" >(optional) The target element of the ActionSheet, available in the callback methods.Notice The target element is mandatory on tablets, as the ActionSheet widget positions itself relative to opening element when a tablet is detected.</param>
        /// <param name="context" type="Object" >(optional) The context of the ActionSheet, available in the callback methods.</param>

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

$.fn.getKendoActionSheet = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.ActionSheet widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.ActionSheet">The kendo.mobile.ui.ActionSheet instance (if present).</returns>
};

$.fn.kendoActionSheet = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.ActionSheet widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;cancel — String (default: Cancel)
    /// &#10;The text of the cancel button.
    /// &#10;
    /// &#10;popup — Object 
    /// &#10;The popup configuration options (tablet only).
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.BackButton = function() { };

kendo.mobile.ui.BackButton.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the BackButton for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
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

$.fn.getKendoBackButton = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.BackButton widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.BackButton">The kendo.mobile.ui.BackButton instance (if present).</returns>
};

$.fn.kendoBackButton = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.BackButton widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.Button = function() { };

kendo.mobile.ui.Button.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the Button for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
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

$.fn.getKendoButton = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.Button widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.Button">The kendo.mobile.ui.Button instance (if present).</returns>
};

$.fn.kendoButton = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.Button widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;icon — String 
    /// &#10;The icon of the button. It can be either one of the built-in icons, or a custom one.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.ButtonGroup = function() { };

kendo.mobile.ui.ButtonGroup.prototype = {




    current: function() {
        /// <summary>
        /// Get the currently selected Button.
        /// </summary>
        /// <returns type="jQuery">the jQuery object representing the currently selected button.</returns>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the ButtonGroup for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    select: function(li) {
        /// <summary>
        /// Select a Button.
        /// </summary>
        /// <param name="li" type="Object" >LI element or index of the Button.</param>

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

$.fn.getKendoButtonGroup = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.ButtonGroup widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.ButtonGroup">The kendo.mobile.ui.ButtonGroup instance (if present).</returns>
};

$.fn.kendoButtonGroup = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.ButtonGroup widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;index — Number 
    /// &#10;Defines the initially selected Button.
    /// &#10;
    /// &#10;selectOn — String (default: default "down")
    /// &#10;Sets the DOM event used to select the button. Accepts "up" as an alias for touchend, mouseup and MSPointerUp vendor specific events.By default, buttons are selected immediately after the user presses the button (on touchstart or mousedown or MSPointerDown, depending on the mobile device).
/// &#10;However, if the widget is placed in a scrollable view, the user may accidentally press the button when scrolling. In such cases, it is recommended to set this option to "up".
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.DetailButton = function() { };

kendo.mobile.ui.DetailButton.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the DetailButton for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
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

$.fn.getKendoDetailButton = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.DetailButton widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.DetailButton">The kendo.mobile.ui.DetailButton instance (if present).</returns>
};

$.fn.kendoDetailButton = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.DetailButton widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.Layout = function() { };

kendo.mobile.ui.Layout.prototype = {



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
    /// Returns a reference to the kendo.mobile.ui.Layout widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.Layout">The kendo.mobile.ui.Layout instance (if present).</returns>
};

$.fn.kendoLayout = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.Layout widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;id — String (default: null)
    /// &#10;The id of the layout. Required.
    /// &#10;
    /// &#10;platform — String 
    /// &#10;The specific platform this layout targets. By default, layouts are displayed
/// &#10;on all platforms.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.ListView = function() { };

kendo.mobile.ui.ListView.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the ListView for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    items: function() {
        /// <summary>
        /// Get the listview DOM element items
        /// </summary>
        /// <returns type="jQuery">The listview DOM element items</returns>

    },


    refresh: function() {
        /// <summary>
        /// repaints the listview (works only in databound mode).
        /// </summary>

    },


    setDataSource: function(dataSource) {
        /// <summary>
        /// Sets the dataSource of an existing ListView and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" ></param>

    },


    stopEndlessScrolling: function() {
        /// <summary>
        /// Stops the 'endless scroll' of the ListView.
        /// </summary>

    },


    stopLoadMore: function() {
        /// <summary>
        /// Stops the 'load more' functionality of the ListView.
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

$.fn.getKendoListView = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.ListView widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.ListView">The kendo.mobile.ui.ListView instance (if present).</returns>
};

$.fn.kendoListView = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.ListView widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;appendOnRefresh — Boolean (default: false)
    /// &#10;Used in combination with pullToRefresh. If set to true, newly loaded data will be appended on top when refershing.
    /// &#10;
    /// &#10;autoBind — Boolean (default: true)
    /// &#10;Indicates whether the listview will call read on the DataSource initially.
    /// &#10;
    /// &#10;dataSource — Object 
    /// &#10;Instance of DataSource or the data that the mobile ListView will be bound to.
    /// &#10;
    /// &#10;endlessScroll — Boolean (default: false)
    /// &#10;If set to true, the listview gets the next page of data when the user scrolls near the bottom of the view.
    /// &#10;
    /// &#10;endlessScrollParameters — Function 
    /// &#10;A callback function used when the 'endlessScroll' option is enabled. The result of the function will be send as additional parameters to the DataSource's next method.
    /// &#10;
    /// &#10;fixedHeaders — Boolean (default: false)
    /// &#10;If set to true, the group headers will persist their position when the user scrolls through the listview. Applicable only when the type is set to group, or when binding to grouped datasource.
    /// &#10;
    /// &#10;headerTemplate — String (default: #:value#)
    /// &#10;The header item template (applicable when the type is set to group).
    /// &#10;
    /// &#10;loadMore — Boolean (default: false)
    /// &#10;If set to true, a button is rendered at the bottom of the listview, which fetch the next page of data when tapped.
    /// &#10;
    /// &#10;loadMoreText — String (default: "Press to load more")
    /// &#10;The text of the rendered load-more button (applies only if loadMore is set to true).
    /// &#10;
    /// &#10;loadMoreParameters — Function 
    /// &#10;Check the 'endlessScrollParameters' option.
    /// &#10;
    /// &#10;pullTemplate — String (default: "Pull to refresh")
    /// &#10;The message template displayed when the user pulls the listView. Applicable only when pullToRefresh is set to true.
    /// &#10;
    /// &#10;pullToRefresh — Boolean (default: false)
    /// &#10;If set to true, the listview will reload its data when the user pulls the view over the top limit.
    /// &#10;
    /// &#10;pullParameters — Function 
    /// &#10;A callback function used when the 'pullToRefresh' option is enabled. The result of the function will be send as additional parameters to the DataSource's next method.
    /// &#10;
    /// &#10;refreshTemplate — String (default: "Refreshing")
    /// &#10;The message template displayed during the refresh. Applicable only when pullToRefresh is set to true.
    /// &#10;
    /// &#10;releaseTemplate — String (default: "Release to refresh")
    /// &#10;The message template indicating that pullToRefresh will occur. Applicable only when pullToRefresh is set to true.
    /// &#10;
    /// &#10;scrollTreshold — String (default: 30)
    /// &#10;The distance to the bottom in pixels, after which the listview will start fetching the next page. Applicable only when endlessScroll is set to true.
    /// &#10;
    /// &#10;style — String 
    /// &#10;The style of the control. Can be either empty string(""), or inset.
    /// &#10;
    /// &#10;template — String (default: #:data#)
    /// &#10;The item template.
    /// &#10;
    /// &#10;type — String 
    /// &#10;The type of the control. Can be either flat (default) or group. Determined automatically in databound mode.
    /// &#10;
    /// &#10;filterable — Boolean (default: false)
    /// &#10;Indicates whether the filter input must be visible or not.
    /// &#10;
    /// &#10;filterable — Object 
    /// &#10;Indicates whether the filter input must be visible or not.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.Loader = function() { };

kendo.mobile.ui.Loader.prototype = {




    hide: function() {
        /// <summary>
        /// Hide the loading animation.
        /// </summary>

    },


    show: function() {
        /// <summary>
        /// Show the loading animation.
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

$.fn.getKendoLoader = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.Loader widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.Loader">The kendo.mobile.ui.Loader instance (if present).</returns>
};

$.fn.kendoLoader = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.Loader widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.ModalView = function() { };

kendo.mobile.ui.ModalView.prototype = {




    close: function() {
        /// <summary>
        /// Close the ModalView
        /// </summary>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the ModalView for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    open: function(target) {
        /// <summary>
        /// Open the ModalView
        /// </summary>
        /// <param name="target" type="jQuery" >(optional) The target of the ModalView</param>

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

$.fn.getKendoModalView = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.ModalView widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.ModalView">The kendo.mobile.ui.ModalView instance (if present).</returns>
};

$.fn.kendoModalView = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.ModalView widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;height — Number 
    /// &#10;The height of the ModalView container in pixels. If not set, the element style is used.
    /// &#10;
    /// &#10;modal — Boolean (default: true)
    /// &#10;When set to false, the ModalView will close when the user taps outside of its element.
    /// &#10;
    /// &#10;width — Number 
    /// &#10;The width of the ModalView container in pixels. If not set, the element style is used.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.NavBar = function() { };

kendo.mobile.ui.NavBar.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the NavBar for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    title: function(value) {
        /// <summary>
        /// Update the title element text. The title element is specified by setting the role data attribute to view-title.
        /// </summary>
        /// <param name="value" type="String" >The text of title</param>

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

$.fn.getKendoNavBar = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.NavBar widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.NavBar">The kendo.mobile.ui.NavBar instance (if present).</returns>
};

$.fn.kendoNavBar = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.NavBar widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.Pane = function() { };

kendo.mobile.ui.Pane.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the Pane for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    hideLoading: function() {
        /// <summary>
        /// Hide the loading animation.
        /// </summary>

    },


    navigate: function(url,transition) {
        /// <summary>
        /// Navigate the local or remote view.
        /// </summary>
        /// <param name="url" type="String" >The id or URL of the view.</param>
        /// <param name="transition" type="String" >The transition to apply when navigating. See View Transitions section for more information.</param>

    },


    showLoading: function() {
        /// <summary>
        /// Show the loading animation.
        /// </summary>

    },


    view: function() {
        /// <summary>
        /// Get a reference to the current view.
        /// </summary>
        /// <returns type="kendo.mobile.ui.View">the view instance.</returns>

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

$.fn.getKendoPane = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.Pane widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.Pane">The kendo.mobile.ui.Pane instance (if present).</returns>
};

$.fn.kendoPane = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.Pane widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;initial — String 
    /// &#10;The id of the initial mobile View to display.
    /// &#10;
    /// &#10;layout — String 
    /// &#10;The id of the default Pane Layout.
    /// &#10;
    /// &#10;loading — String (default: Loading...)
    /// &#10;The text displayed in the loading popup. Setting this value to false will disable the loading popup.
    /// &#10;
    /// &#10;transition — String 
    /// &#10;The default View transition.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.PopOver = function() { };

kendo.mobile.ui.PopOver.prototype = {




    close: function() {
        /// <summary>
        /// Close the popover.
        /// </summary>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the PopOver for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    open: function(target) {
        /// <summary>
        /// Open the PopOver.
        /// </summary>
        /// <param name="target" type="jQuery" >The target of the Popover, to which the visual arrow will point to. This parameter is required for a tablet OS.</param>

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

$.fn.getKendoPopOver = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.PopOver widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.PopOver">The kendo.mobile.ui.PopOver instance (if present).</returns>
};

$.fn.kendoPopOver = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.PopOver widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;pane — Object 
    /// &#10;The pane configuration options.
    /// &#10;
    /// &#10;popup — Object 
    /// &#10;The popup configuration options.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.ScrollView = function() { };

kendo.mobile.ui.ScrollView.prototype = {




    content: function(content) {
        /// <summary>
        /// Update the scrollview HTML content
        /// </summary>
        /// <param name="content" type="Object" >the new scrollView content.</param>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the ScrollView for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    refresh: function() {
        /// <summary>
        /// Redraw the mobile ScrollView pager. Called automatically on device orientation change event.
        /// </summary>

    },


    scrollTo: function(page,instant) {
        /// <summary>
        /// Scroll to the given page. Pages are zero-based indexed.
        /// </summary>
        /// <param name="page" type="Number" >The page to scroll to.</param>
        /// <param name="instant" type="Boolean" >If set to true, the scrollview will jump instantly to the given page without any animation effects.</param>

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

$.fn.getKendoScrollView = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.ScrollView widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.ScrollView">The kendo.mobile.ui.ScrollView instance (if present).</returns>
};

$.fn.kendoScrollView = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.ScrollView widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;bounceVelocityThreshold — Number (default: 1.6)
    /// &#10;The velocity threshold after which a swipe will result in a bounce effect.
    /// &#10;
    /// &#10;duration — Number (default: 300)
    /// &#10;The milliseconds that take the ScrollView to snap to the current page after released.
    /// &#10;
    /// &#10;page — Number (default: 0)
    /// &#10;The initial page to display.
    /// &#10;
    /// &#10;pageSize — Number (default: 1)
    /// &#10;Multiplier applied to the snap amount of the ScrollView. By default, the widget scrolls to the next screen when swipe. If the pageSize property is set to 0.5, the ScrollView will scroll by half of the widget width.
    /// &#10;
    /// &#10;velocityThreshold — Number (default: 0.8)
    /// &#10;The velocity threshold after which a swipe will navigate to the next page (as opposed to snapping back to the current page).
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.Scroller = function() { };

kendo.mobile.ui.Scroller.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the Scroller for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    pullHandled: function() {
        /// <summary>
        /// Indicate that the pull event is handled (i.e. data from the server has been retrieved).
        /// </summary>

    },


    reset: function() {
        /// <summary>
        /// Scrolls the container to the top.
        /// </summary>

    },


    scrollHeight: function() {
        /// <summary>
        /// Returns the height in pixels of the scroller content.
        /// </summary>

    },


    scrollTo: function(x,y) {
        /// <summary>
        /// Scrolls the container to the specified location. The arguments should be negative numbers.
        /// </summary>
        /// <param name="x" type="Number" >The horizontal offset in pixels to scroll to.</param>
        /// <param name="y" type="Number" >The vertical offset in pixels to scroll to.</param>

    },


    scrollWidth: function() {
        /// <summary>
        /// Returns the width in pixels of the scroller content.
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

$.fn.getKendoScroller = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.Scroller widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.Scroller">The kendo.mobile.ui.Scroller instance (if present).</returns>
};

$.fn.kendoScroller = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.Scroller widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;zoom — Boolean (default: false)
    /// &#10;If set to true, the user can zoom in/out the contents of the widget using the pinch/zoom gesture.
    /// &#10;
    /// &#10;elastic — Boolean (default: true)
    /// &#10;Weather or not to allow out of bounds dragging and easing.
    /// &#10;
    /// &#10;pullOffset — Number (default: 140)
    /// &#10;The threshold below which a releasing the scroller will trigger the pull event.
/// &#10;Has effect only when the pullToRefresh option is set to true.
    /// &#10;
    /// &#10;pullTemplate — String (default: Pull to refresh)
    /// &#10;The message template displayed when the user pulls the scroller.
/// &#10;Has effect only when the pullToRefresh option is set to true.
    /// &#10;
    /// &#10;pullToRefresh — Boolean (default: false)
    /// &#10;If set to true, the scroller will display a hint when the user pulls the container beyond its top limit.
/// &#10;If a pull beyond the specified pullOffset occurs, a pull event will be triggered.
    /// &#10;
    /// &#10;refreshTemplate — String (default: Refreshing)
    /// &#10;The message template displayed during the refresh.
/// &#10;Has effect only when the pullToRefresh option is set to true.
    /// &#10;
    /// &#10;releaseTemplate — String (default: Release to refresh)
    /// &#10;The message template displayed when the user pulls the scroller below the
/// &#10;pullOffset, indicating that pullToRefresh will occur.
/// &#10;Has effect only when the pullToRefresh option is set to true.
    /// &#10;
    /// &#10;useNative — Boolean (default: false)
    /// &#10;If set to true, the scroller will use the native scrolling available in the current platform. This should help with form issues on some platforms (namely Android and WP8).
/// &#10;Native scrolling is only enabled on platforms that support it: iOS > 4, Android > 2, WP8. BlackBerry devices do support it, but the native scroller is flaky.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.SplitView = function() { };

kendo.mobile.ui.SplitView.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the SplitView for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
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

$.fn.getKendoSplitView = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.SplitView widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.SplitView">The kendo.mobile.ui.SplitView instance (if present).</returns>
};

$.fn.kendoSplitView = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.SplitView widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;style — String (default: horizontal)
    /// &#10;Defines the SplitView style - horizontal or vertical.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.Swipe = function() { };

kendo.mobile.ui.Swipe.prototype = {



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

$.fn.getKendoSwipe = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.Swipe widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.Swipe">The kendo.mobile.ui.Swipe instance (if present).</returns>
};

$.fn.kendoSwipe = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.Swipe widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.Switch = function() { };

kendo.mobile.ui.Switch.prototype = {




    check: function(check) {
        /// <summary>
        /// Get/Set the checked state of the widget.
        /// </summary>
        /// <param name="check" type="Boolean" >Whether to turn the widget on or off.</param>
        /// <returns type="Boolean">The checked state of the widget.</returns>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the Switch for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    toggle: function() {
        /// <summary>
        /// Toggle the checked state of the widget.
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

$.fn.getKendoSwitch = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.Switch widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.Switch">The kendo.mobile.ui.Switch instance (if present).</returns>
};

$.fn.kendoSwitch = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.Switch widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;checked — Boolean (default: false)
    /// &#10;The checked state of the widget.
    /// &#10;
    /// &#10;offLabel — String (default: OFF)
    /// &#10;The OFF label.
    /// &#10;
    /// &#10;onLabel — String (default: ON)
    /// &#10;The ON label.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.TabStrip = function() { };

kendo.mobile.ui.TabStrip.prototype = {




    currentItem: function() {
        /// <summary>
        /// Get the currently selected tab DOM element.
        /// </summary>
        /// <returns type="jQuery">the currently selected tab DOM element.</returns>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the TabStrip for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    switchTo: function(url) {
        /// <summary>
        /// Set the mobile TabStrip active tab to the tab with the specified url. This method doesn't change the current View. To change the View, use Application's navigate method instead.
        /// </summary>
        /// <param name="url" type="String" >The url of the tab.</param>

    },


    clear: function() {
        /// <summary>
        /// Clear the currently selected tab.
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
    /// Returns a reference to the kendo.mobile.ui.TabStrip widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.TabStrip">The kendo.mobile.ui.TabStrip instance (if present).</returns>
};

$.fn.kendoTabStrip = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.TabStrip widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;selectedIndex — Number (default: 0)
    /// &#10;The index of the initially selected tab.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.View = function() { };

kendo.mobile.ui.View.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the View for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    contentElement: function() {
        /// <summary>
        /// Retrieves the current content holder of the View - this is the content element if the View is stretched or the scroll container otherwise.
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

$.fn.getKendoView = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.View widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.View">The kendo.mobile.ui.View instance (if present).</returns>
};

$.fn.kendoView = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.View widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;model — String (default: null)
    /// &#10;The MVVM model to bind to. If a string is passed, The view will try to resolve a reference to the view model variable in the global scope.
    /// &#10;
    /// &#10;reload — Boolean (default: null)
    /// &#10;Applicable to remote views only. If set to true, the remote view contents will be reloaded from the server (using Ajax) each time the view is navigated to.
    /// &#10;
    /// &#10;stretch — Boolean (default: false)
    /// &#10;If set to true, the view will stretch its child contents to occupy the entire view, while disabling kinetic scrolling.
/// &#10;Useful if the view contains an image or a map.
    /// &#10;
    /// &#10;title — String 
    /// &#10;The text to display in the navbar title (if present) and the browser title.
    /// &#10;
    /// &#10;useNativeScrolling — Boolean (default: false)
    /// &#10;If set to true, the view will use the native scrolling available in the current platform. This should help with form issues on some platforms (namely Android and WP8).
/// &#10;Native scrolling is only enabled on platforms that support it: iOS > 4, Android > 2, WP8. BlackBerry devices do support it, but the native scroller is flaky.
    /// &#10;
    /// &#10;zoom — Boolean (default: false)
    /// &#10;If set to true, the user can zoom in/out the contents of the view using the pinch/zoom gesture.
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
        /// Returns the kendo.mobile.ui.View which contains the widget.
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

$.fn.getKendoWidget = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.Widget widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.Widget">The kendo.mobile.ui.Widget instance (if present).</returns>
};

$.fn.kendoWidget = function(options) {
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
    /// &#10;hint — Function 
    /// &#10;Provides a way for customization of the drag indicator. If a function is supplied, it receives one argument - the draggable element's jQuery object.
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
    /// &#10;filter — String (default: ")
    /// &#10;Selector to filter the drop targets in the area. Every matched element acts as a drop target and fires events on the DropTargetArea.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.Touch = function() { };

kendo.ui.Touch.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the Touch for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
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

$.fn.getKendoTouch = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.Touch widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.Touch">The kendo.ui.Touch instance (if present).</returns>
};

$.fn.kendoTouch = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.Touch widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;global — Boolean (default: false)
    /// &#10;If set to true, the document element will be used a s surface for the user drags.
    /// &#10;
    /// &#10;multiTouch — Boolean (default: false)
    /// &#10;If set to true, the widget will capture and trigger the gesturestart, gesturechange, and gestureend events when the user touches the element with two fingers.
    /// &#10;
    /// &#10;enableSwipe — Boolean (default: false)
    /// &#10;If set to true, the Touch widget will recognize horizontal swipes and trigger the swipe event.Notice: if the enableSwipe option is set to true, the dragstart, drag and dragend events will not be triggered.
    /// &#10;
    /// &#10;minXDelta — Number (default: 30)
    /// &#10;The minimum horizontal distance in pixels the user should swipe before the swipe event is triggered.
    /// &#10;
    /// &#10;maxYDelta — Number (default: 20)
    /// &#10;The maximum vertical deviation in pixels of the swipe event. Swipes with higher deviation are discarded.
    /// &#10;
    /// &#10;maxDuration — Number (default: 1000)
    /// &#10;The maximum amount of time in milliseconds the swipe event can last. Slower swipes are discarded.
    /// &#10;
    /// &#10;minHold — Number (default: 800)
    /// &#10;The timeout in milliseconds before the hold event is fired.Notice: the hold event will be triggered after the time passes, not after the user lifts his/hers finger.
    /// &#10;
    /// &#10;doubleTapTimeout — Number (default: 400)
    /// &#10;The maximum period (in milliseconds) between two consecutive taps which will trigger the doubletap event.
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
        /// <param name="input" type="Element" >Input element to be validated.</param>
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
        /// Attaches a handler to an event. More info can be found in the bind section of the
/// kendo.Observable API reference.
        /// </summary>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the widget for safe removal from the DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    one: function() {
        /// <summary>
        /// Attaches a handler to an event. The handler is executed only once. More info can be found in the one section of the
/// kendo.Observable API reference.
        /// </summary>

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

