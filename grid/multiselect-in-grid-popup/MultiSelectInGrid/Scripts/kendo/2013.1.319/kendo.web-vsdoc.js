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


if (!ui) {
    ui = {};
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
        /// <param name="item" type="Object" >A string, DOM element or jQuery object which represents the item to be selected. A string is provided it would be treated as a jQuery selector.</param>

    },


    setDataSource: function(dataSource) {
        /// <summary>
        /// Sets the data source of the widget.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" ></param>

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
    /// &#10;Configures the opening and closing animations of the suggestion popup. Setting the animation option to false will disable the opening and closing animations. As a result the
/// &#10;suggestion popup will open and close instantly.
    /// &#10;
    /// &#10;dataSource — Object|Array 
    /// &#10;The data source of the widget which is used to display suggestions for the current value. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
/// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.DataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.DataSource instance the widget will use that instance and will not initialize a new one.
    /// &#10;
    /// &#10;dataTextField — String (default: null)
    /// &#10;The field of the data item used when searching for suggestions.
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
    /// &#10;separator — String (default: "")
    /// &#10;The character used to separate multiple values. Empty by default.
    /// &#10;
    /// &#10;suggest — Boolean (default: false)
    /// &#10;If set to true the widget will automatically use the first suggestion as its value.
    /// &#10;
    /// &#10;template — String|Function 
    /// &#10;The template used to render the suggestions. By default the widget displays only the text of the suggestion (configured via dataTextField).
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.Calendar = function() { };

kendo.ui.Calendar.prototype = {




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
        /// Navigates to view
        /// </summary>
        /// <param name="value" type="Date" >Desired date</param>
        /// <param name="view" type="String" >Desired view</param>

    },


    navigateDown: function(value) {
        /// <summary>
        /// Navigates to the lower view
        /// </summary>
        /// <param name="value" type="Date" >Desired date</param>

    },


    navigateToFuture: function() {
        /// <summary>
        /// Navigates to the future
        /// </summary>

    },


    navigateToPast: function() {
        /// <summary>
        /// Navigates to the past
        /// </summary>

    },


    navigateUp: function() {
        /// <summary>
        /// Navigates to the upper view
        /// </summary>

    },


    value: function(value) {
        /// <summary>
        /// Gets/Sets the value of the calendar.
        /// </summary>
        /// <param name="value" type="Object" >The date to set.</param>
        /// <returns type="Date">The value of the calendar.</returns>

    },


    current: function() {
        /// <summary>
        /// Gets currently focused date.
        /// </summary>
        /// <returns type="Date">The current focused date shown in the calendar.</returns>

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
    /// &#10;culture — String (default: en-US)
    /// &#10;Specifies the culture info used by the widget.
    /// &#10;
    /// &#10;dates — Array 
    /// &#10;Specifies a list of dates, which will be passed to the month template.
    /// &#10;
    /// &#10;depth — String 
    /// &#10;Specifies the navigation depth.
    /// &#10;
    /// &#10;footer — String 
    /// &#10;Template to be used for rendering the footer. If false, the footer will not be rendered.
    /// &#10;
    /// &#10;format — String (default: MM/dd/yyyy)
    /// &#10;Specifies the format, which is used to parse value set with value() method.
    /// &#10;
    /// &#10;max — Date (default: Date(2099, 11, 31))
    /// &#10;Specifies the maximum date, which the calendar can show.
    /// &#10;
    /// &#10;min — Date (default: Date(1900, 0, 1))
    /// &#10;Specifies the minimum date, which the calendar can show.
    /// &#10;
    /// &#10;month — Object 
    /// &#10;Templates for the cells rendered in the "month" view.
    /// &#10;
    /// &#10;start — String (default: month)
    /// &#10;Specifies the start view.
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
        /// Get or set the selected color. If no argument is given, this returns the
/// currently selected color as a string in format #FFFFFF when the opacity
/// option is off, or rgba(255, 255, 255, 1) when opacity is requested.If one argument is given, it selects the new color and updates the UI.  The
/// argument can be a string in hex, rgb or rgba format, or a Color object.
/// This does not trigger the "change" event.
        /// </summary>
        /// <param name="color" type="String" ></param>
        /// <returns type="String">the string representation of the current color.</returns>

    },


    color: function() {
        /// <summary>
        /// Like value(), but it returns a Color object.
        /// </summary>

    },


    enable: function() {
        /// <summary>
        /// Enables or disables the widget.  It will enable it with no arguments
/// or with a true argument, or disable with a false argument.
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
    /// &#10;Specifies the color palette to display.  It can be a string with
/// &#10;comma-separated colors in hex representation, an array of Color
/// &#10;objects or of strings that parseColor understands.  As a shortcut,
/// &#10;you can pass "basic" to get the simple palette (this is the default)
/// &#10;or "websafe" to get the Web-safe palette.
    /// &#10;
    /// &#10;columns — Number (default: 10)
    /// &#10;The number of columns to display.  When you pass "websafe" this will
/// &#10;automatically default to 18.
    /// &#10;
    /// &#10;tileSize — Number (default: 14)
    /// &#10;The size of a color cell.
    /// &#10;
    /// &#10;tileSize — Object 
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


    color: function() {
        /// <summary>
        /// Like value(), but it returns a Color object.
        /// </summary>

    },


    enable: function(color) {
        /// <summary>
        /// Set the widget's enabled state.  Called with no arguments, this
/// method will ensure that the widget gets enabled.  Pass a false
/// argument to disable it.
        /// </summary>
        /// <param name="color" type="String" >The color should be either a Color object or a string that parseColor can understand (the CSS hex, rgb or rgba notations).</param>

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
    /// &#10;Applicable only for the HSV selector (that is, when pallete is
/// &#10;null).  This specifies whether the "Apply" / "Cancel" buttons are to
/// &#10;be displayed in the drop-down HSV picker.
    /// &#10;
    /// &#10;columns — Number 
    /// &#10;The number of columns to show in the simple color dropdown.  For the
/// &#10;"basic" and "websafe" palettes this is automatically initialized; if
/// &#10;you pass a custom palette then you can set this to some value that
/// &#10;makes sense for your colors.
    /// &#10;
    /// &#10;tileSize — Number (default: 14)
    /// &#10;The size of a color cell.
    /// &#10;
    /// &#10;tileSize — Object 
    /// &#10;The size of a color cell.
    /// &#10;
    /// &#10;messages — Object 
    /// &#10;Allows customization of "Apply" / "Cancel" labels.
    /// &#10;
    /// &#10;palette — String (default: null)
    /// &#10;When a non-null palette argument is supplied, the drop-down will be
/// &#10;a simple color picker.  The following are supported:If palette is missing or null, the widget will display the HSV
/// &#10;selector.
    /// &#10;
    /// &#10;opacity — Boolean (default: false)
    /// &#10;Only for the HSV selector.  If true, the widget will display the
/// &#10;opacity slider.  Note that currently in HTML5 the  does not support opacity.
    /// &#10;
    /// &#10;preview — Boolean (default: true)
    /// &#10;Only for the HSV selector.  Displays the color preview element, along
/// &#10;with an input field where the end user can paste a color in a
/// &#10;CSS-supported notation.
    /// &#10;
    /// &#10;toolIcon — String (default: null)
    /// &#10;A CSS class name to display an icon in the color picker button.  If
/// &#10;specified, the HTML for the element will look like this:
    /// &#10;
    /// &#10;value — String (default: null)
    /// &#10;The initially selected color.  This can be a string supported by
/// &#10;parseColor or a Color object.  Note that when initializing the
/// &#10;widget from an  element, the initial color will be decided by the
/// &#10;field instead.
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
        /// Closes the drop-down list.
        /// </summary>

    },


    dataItem: function(index) {
        /// <summary>
        /// Returns the raw data record at the specified index. If the index is not specified, the selected index will be used.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index of the data record</param>
        /// <returns type="Object">The raw data record. Returns undefined if no data.</returns>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the ComboBox for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    enable: function(enable) {
        /// <summary>
        /// Enables/disables the combobox widget
        /// </summary>
        /// <param name="enable" type="Boolean" >Desired state</param>

    },


    readonly: function(readonly) {
        /// <summary>
        /// Controls whether the widget is editable or readonly.
        /// </summary>
        /// <param name="readonly" type="Boolean" >The argument, which defines whether the combobox should be readonly or editable.</param>

    },


    focus: function() {
        /// <summary>
        /// Focuses the widget.
        /// </summary>

    },


    open: function() {
        /// <summary>
        /// Opens the drop-down list.
        /// </summary>

    },


    refresh: function() {
        /// <summary>
        /// Re-render the items of the drop-down list.
        /// </summary>

    },


    search: function(word) {
        /// <summary>
        /// Filters dataSource using the provided parameter and rebinds drop-down list.
        /// </summary>
        /// <param name="word" type="String" >The filter value.</param>

    },


    select: function(li) {
        /// <summary>
        /// Selects drop-down list item and sets the value and the text of the combobox.
        /// </summary>
        /// <param name="li" type="Object" >LI element or index of the item or predicate function, which defines the item that should be selected.</param>
        /// <returns type="Number">The index of the selected LI element.</returns>

    },


    setDataSource: function(dataSource) {
        /// <summary>
        /// Sets the dataSource of an existing ComboBox and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" ></param>

    },


    suggest: function(value) {
        /// <summary>
        /// Forces a suggestion onto the text of the ComboBox.
        /// </summary>
        /// <param name="value" type="String" >Characters to force a suggestion.</param>

    },


    text: function(text) {
        /// <summary>
        /// Gets/Sets the text of the ComboBox.
        /// </summary>
        /// <param name="text" type="String" >The text to set.</param>
        /// <returns type="String">The text of the combobox.</returns>

    },


    toggle: function(toggle) {
        /// <summary>
        /// Toggles the drop-down list between opened and closed state.
        /// </summary>
        /// <param name="toggle" type="Boolean" >Defines the whether to open/close the drop-down list.</param>

    },


    value: function(value) {
        /// <summary>
        /// Gets/Sets the value of the combobox. If the value is undefined, text of the data item will be used.
        /// </summary>
        /// <param name="value" type="String" >The value to set.</param>
        /// <returns type="String">The value of the combobox.</returns>

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
    /// &#10;Animations to be used for opening/closing the popup. Setting to false will turn off the animation.
    /// &#10;
    /// &#10;autoBind — Boolean (default: true)
    /// &#10;Controls whether to bind the widget to the DataSource on initialization.
    /// &#10;
    /// &#10;cascadeFrom — String 
    /// &#10;Use it to set the Id of the parent DropDownList.
    /// &#10;
    /// &#10;dataSource — Object 
    /// &#10;A local JavaScript object or instance of DataSource or the data that the ComboBox will be bound to.
    /// &#10;
    /// &#10;dataTextField — String (default: "")
    /// &#10;Sets the field of the data item that provides the text content of the list items.
    /// &#10;
    /// &#10;dataValueField — String (default: "")
    /// &#10;Sets the field of the data item that provides the value content of the list items.
    /// &#10;
    /// &#10;delay — Number (default: 200)
    /// &#10;Specifies the delay in ms after which the ComboBox will start filtering dataSource.
    /// &#10;
    /// &#10;enable — Boolean (default: true)
    /// &#10;Controls whether the ComboBox should be initially enabled.
    /// &#10;
    /// &#10;filter — String (default: "none")
    /// &#10;Defines the type of filtration. If "none" the ComboBox will not filter the items.
    /// &#10;
    /// &#10;height — Number (default: 200)
    /// &#10;Define the height of the drop-down list in pixels.
    /// &#10;
    /// &#10;highlightFirst — Boolean (default: true)
    /// &#10;Controls whether the first item will be automatically highlighted.
    /// &#10;
    /// &#10;ignoreCase — String (default: true)
    /// &#10;Defines whether the filtration should be case sensitive.
    /// &#10;
    /// &#10;index — Number (default: -1)
    /// &#10;Defines the initial selected item.
    /// &#10;
    /// &#10;minLength — Number (default: 1)
    /// &#10;Specifies the minimum characters that should be typed before the ComboBox activates
    /// &#10;
    /// &#10;placeholder — String (default: "")
    /// &#10;A string that appears in the textbox when the combobox has no value.
    /// &#10;
    /// &#10;suggest — Boolean (default: false)
    /// &#10;Controls whether the ComboBox should automatically auto-type the rest of text.
    /// &#10;
    /// &#10;template — String 
    /// &#10;Template to be used for rendering the items in the list.
    /// &#10;
    /// &#10;text — String (default: "")
    /// &#10;Define the text of the widget, when the autoBind is set to false.
    /// &#10;
    /// &#10;value — String (default: "")
    /// &#10;Define the value of the widget
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
        /// Enable/Disable the datePicker widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >The argument, which defines whether to enable/disable the datePicker.</param>

    },


    readonly: function(readonly) {
        /// <summary>
        /// Controls whether the widget is editable or readonly.
        /// </summary>
        /// <param name="readonly" type="Boolean" >The argument, which defines whether the datepicker should be readonly or editable.</param>

    },


    max: function(value) {
        /// <summary>
        /// Gets/Sets the max value of the datePicker.
        /// </summary>
        /// <param name="value" type="Object" >The max date to set.</param>
        /// <returns type="Date">The max value of the datePicker.</returns>

    },


    min: function(value) {
        /// <summary>
        /// Gets/Sets the min value of the datePicker.
        /// </summary>
        /// <param name="value" type="Object" >The min date to set.</param>
        /// <returns type="Date">The min value of the datePicker.</returns>

    },


    open: function() {
        /// <summary>
        /// Opens the calendar.
        /// </summary>

    },


    value: function(value) {
        /// <summary>
        /// Gets/Sets the value of the datePicker.
        /// </summary>
        /// <param name="value" type="Object" >The value to set.</param>
        /// <returns type="Date">The value of the datePicker.</returns>

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
    /// &#10;The animation(s) used for opening and/or closing the pop-up. Setting this value to false
/// &#10;will disable the animation(s).
    /// &#10;
    /// &#10;culture — String (default: en-US)
    /// &#10;Specifies the culture info used by the widget.
    /// &#10;
    /// &#10;dates — Array 
    /// &#10;Specifies a list of dates, which will be passed to the month template.
    /// &#10;
    /// &#10;depth — String 
    /// &#10;Specifies the navigation depth. The following
/// &#10;settings are available for the depth value:
    /// &#10;
    /// &#10;footer — String 
    /// &#10;Template to be used for rendering the footer of the calendar.
    /// &#10;
    /// &#10;format — String (default: MM/dd/yyyy)
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
    /// &#10;Specifies the formats, which are used to parse the value set with value() method or by direct input. If not set the value of the format will be used. Note that value of the format option is always used.
    /// &#10;
    /// &#10;start — String (default: month)
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
        /// Controls whether the widget is editable or readonly.
        /// </summary>
        /// <param name="readonly" type="Boolean" >The argument, which defines whether the datetimepicker should be readonly or editable.</param>

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
    /// &#10;The animation(s) used for opening and/or closing the pop-ups. Setting this value to false
/// &#10;will disable the animation(s).
    /// &#10;
    /// &#10;culture — String (default: en-US)
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
    /// &#10;Template to be used for rendering the footer of the calendar.
    /// &#10;
    /// &#10;format — String (default: MM/dd/yyyy h:mm tt)
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
    /// &#10;Specifies the formats, which are used to parse the value set with value() method or by direct input. If not set the value of the options.format and options.timeFormat will be used. Note that value of the format option is always used.
    /// &#10;
    /// &#10;start — String (default: month)
    /// &#10;Specifies the start view of the calendar.
/// &#10;The following settings are available for the start value:
    /// &#10;
    /// &#10;timeFormat — String (default: h:mm tt)
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


kendo.ui.DropDownList = function() { };

kendo.ui.DropDownList.prototype = {




    close: function() {
        /// <summary>
        /// Closes the drop-down list.
        /// </summary>

    },


    dataItem: function(index) {
        /// <summary>
        /// Returns the raw data record at the specified index. If the index is not specified, the selected index will be used.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index of the data record</param>
        /// <returns type="Object">The raw data record. Returns undefined if no data.</returns>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the DropDownList for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    enable: function(enable) {
        /// <summary>
        /// Enables/disables the dropdownlist widget
        /// </summary>
        /// <param name="enable" type="Boolean" >Desired state</param>

    },


    readonly: function(readonly) {
        /// <summary>
        /// Controls whether the widget is editable or readonly.
        /// </summary>
        /// <param name="readonly" type="Boolean" >The argument, which defines whether the timepicker should be readonly or editable.</param>

    },


    focus: function() {
        /// <summary>
        /// Focuses the widget.
        /// </summary>

    },


    open: function() {
        /// <summary>
        /// Opens the drop-down list.
        /// </summary>

    },


    refresh: function() {
        /// <summary>
        /// Re-render the items in drop-down list.
        /// </summary>

    },


    search: function(word) {
        /// <summary>
        /// Selects item, which starts with the provided parameter.
        /// </summary>
        /// <param name="word" type="String" >The search value.</param>

    },


    select: function(li) {
        /// <summary>
        /// Selects drop-down list item and sets the value and the text of the dropdownlist.
        /// </summary>
        /// <param name="li" type="Object" >LI element or index of the item or predicate function, which defines the item that should be selected.</param>
        /// <returns type="Number">The index of the selected LI element.</returns>

    },


    setDataSource: function(dataSource) {
        /// <summary>
        /// Sets the dataSource of an existing DropDownList and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" ></param>

    },


    text: function(text) {
        /// <summary>
        /// Gets/Sets the text of the dropdownlist.
        /// </summary>
        /// <param name="text" type="String" >The text to set.</param>
        /// <returns type="String">The text of the dropdownlist.</returns>

    },


    toggle: function(toggle) {
        /// <summary>
        /// Toggles the drop-down list between opened and closed state.
        /// </summary>
        /// <param name="toggle" type="Boolean" >Defines the whether to open/close the drop-down list.</param>

    },


    value: function(value) {
        /// <summary>
        /// Gets/Sets the value of the dropdownlist. The value will not be set if there is no item with such value. If value is undefined, text of the data item is used.
        /// </summary>
        /// <param name="value" type="String" >The value to set.</param>
        /// <returns type="String">The value of the dropdownlist.</returns>

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
    /// &#10;Animations to be used for opening/closing the popup. Setting to false will turn of the animation.
    /// &#10;
    /// &#10;autoBind — Boolean (default: true)
    /// &#10;Controls whether to bind the widget on initialization.
    /// &#10;
    /// &#10;cascadeFrom — String 
    /// &#10;Use it to set the Id of the parent DropDownList.
    /// &#10;
    /// &#10;dataSource — Object 
    /// &#10;Instance of DataSource or the data that the DropDownList will be bound to.
    /// &#10;
    /// &#10;dataTextField — String (default: "")
    /// &#10;Sets the field of the data item that provides the text content of the list items.
    /// &#10;
    /// &#10;dataValueField — String (default: "")
    /// &#10;Sets the field of the data item that provides the value content of the list items.
    /// &#10;
    /// &#10;delay — Number (default: 500)
    /// &#10;Specifies the delay in ms before the search text typed by the end user is cleared.
    /// &#10;
    /// &#10;enable — Boolean (default: true)
    /// &#10;Controls whether the DropDownList should be initially enabled.
    /// &#10;
    /// &#10;height — Number (default: 200)
    /// &#10;Define the height of the drop-down list in pixels.
    /// &#10;
    /// &#10;ignoreCase — String (default: true)
    /// &#10;Controls whether the search should be case sensitive.
    /// &#10;
    /// &#10;index — Number (default: 0)
    /// &#10;Defines the initial selected item.
    /// &#10;
    /// &#10;optionLabel — String|Object (default: "")
    /// &#10;Define the text of the default empty item. If the value is an object, then the widget will use it directly.
/// &#10; Note that object should have atleast the dataValueField and dataTextField properties. Otherwise, widget will show undefined.
    /// &#10;
    /// &#10;template — String 
    /// &#10;Template to be used for rendering the items in the list.
    /// &#10;
    /// &#10;text — String (default: "")
    /// &#10;Define the text of the widget, when the autoBind is set to false.
    /// &#10;
    /// &#10;value — String (default: "")
    /// &#10;Define the value of the widget
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


kendo.ui.Editor = function() { };

kendo.ui.Editor.prototype = {




    createRange: function(document) {
        /// <summary>
        /// Creates a W3C-compatible Range object.
        /// </summary>
        /// <param name="document" type="Document" >The document that the range is associated with. If ommited, the document of the editor editing area will be used.</param>
        /// <returns type="Range">The created Range object.</returns>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the Editor for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
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
        /// <param name="name" type="String" >The name of the command to be executed.</param>
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


    paste: function(html) {
        /// <summary>
        /// Pastes HTML into the editable area.
        /// </summary>
        /// <param name="html" type="String" >The HTML to be pasted.</param>

    },


    selectedHtml: function() {
        /// <summary>
        /// Serializes the currently selected text to a XHTML string.
        /// </summary>
        /// <returns type="String">The selectied text as valid XHTML.</returns>

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
    /// &#10;encoded — Boolean (default: true)
    /// &#10;Indicates whether the Editor should submit encoded HTML tags.
    /// &#10;
    /// &#10;messages — Object 
    /// &#10;Defines the text of the labels that are shown within the editor. Used primarily for localization.
    /// &#10;
    /// &#10;stylesheets — Array 
    /// &#10;Allows custom stylesheets to be included within the editing area.
    /// &#10;
    /// &#10;tools — Array 
    /// &#10;A collection of tools that should render a button, combobox, etc, to interact with the Editor. Custom tools are defined
/// &#10;as a collection of required properties, while the insertHtml tool requires a collection of text-value pairs. A separator may be included multiple times.
    /// &#10;
    /// &#10;imageBrowser — Object 
    /// &#10;Configuration for image browser dialog.
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


    color: function() {
        /// <summary>
        /// Like value(), but it returns a Color object.
        /// </summary>

    },


    enable: function() {
        /// <summary>
        /// Enables or disables the widget.  It will enable it with no arguments
/// or with a true argument, or disable with a false argument.
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
    /// &#10;buttons — Boolean (default: true)
    /// &#10;Specifies whether we should display the Apply / Cancel buttons.
    /// &#10;
    /// &#10;value — String (default: null)
    /// &#10;Specifies the initially selected color.
    /// &#10;
    /// &#10;preview — Boolean (default: true)
    /// &#10;Specifies whether we should display the preview bar which displays the
/// &#10;current color and the input field.
    /// &#10;
    /// &#10;messages — Object 
    /// &#10;Allows customization of "Apply" / "Cancel" labels.
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
        /// Adds a new empty table row in edit mode. The addRow method triggers edit event.
        /// </summary>

    },


    cancelChanges: function() {
        /// <summary>
        /// Cancels any pending changes during. Deleted rows are restored. Inserted rows are removed. Updated rows are restored to their original values.
        /// </summary>

    },


    cancelRow: function() {
        /// <summary>
        /// Switch the current edited row into display mode and revert changes made to the data
        /// </summary>

    },


    cellIndex: function(cell) {
        /// <summary>
        /// Returns the index of the cell in the grid item skipping group and hierarchy cells.
        /// </summary>
        /// <param name="cell" type="Object" >Target cell.</param>

    },


    clearSelection: function() {
        /// <summary>
        /// Clears currently selected items.
        /// </summary>

    },


    closeCell: function() {
        /// <summary>
        /// Closes current edited cell.
        /// </summary>

    },


    collapseGroup: function(group) {
        /// <summary>
        /// Collapses specified group.
        /// </summary>
        /// <param name="group" type="Object" >Target group item to collapse.</param>

    },


    collapseRow: function(row) {
        /// <summary>
        /// Collapses specified master row.
        /// </summary>
        /// <param name="row" type="Object" >Target master row to collapse.</param>

    },


    dataItem: function(tr) {
        /// <summary>
        /// Returns the data item to which a given table row (tr DOM element) is bound.
        /// </summary>
        /// <param name="tr" type="Object" >Target row.</param>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the Grid for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    editCell: function(cell) {
        /// <summary>
        /// Puts the specified table cell in edit mode. It requires a jQuery object representing the cell. The editCell method triggers edit event.
        /// </summary>
        /// <param name="cell" type="Object" >Cell to be edited.</param>

    },


    editRow: function(row) {
        /// <summary>
        /// Switches the specified row from the grid into edit mode. The editRow method triggers edit event.
        /// </summary>
        /// <param name="row" type="Object" >Row to be edited.</param>

    },


    expandGroup: function(group) {
        /// <summary>
        /// Expands specified group.
        /// </summary>
        /// <param name="group" type="Object" >Target group item to expand.</param>

    },


    expandRow: function(row) {
        /// <summary>
        /// Expands specified master row.
        /// </summary>
        /// <param name="row" type="Object" >Target master row to expand.</param>

    },


    hideColumn: function(column) {
        /// <summary>
        /// Hides the specified column.
        /// </summary>
        /// <param name="column" type="Object" >The index or the bound field of the column to hide.</param>

    },


    refresh: function() {
        /// <summary>
        /// Redraws the grid using the current data of the DataSource.
        /// </summary>

    },


    removeRow: function(row) {
        /// <summary>
        /// Removes the specified row from the grid. The removeRow method triggers remove event.
/// (Note: In inline or popup edit modes the changes will be automatically synced)
        /// </summary>
        /// <param name="row" type="Object" >Row to be removed.</param>

    },


    reorderColumn: function(destIndex,column) {
        /// <summary>
        /// Changes the position of the specified column.
        /// </summary>
        /// <param name="destIndex" type="Number" ></param>
        /// <param name="column" type="Object" ></param>

    },


    saveChanges: function() {
        /// <summary>
        /// Calls DataSource sync to submit any pending changes if state is valid. The saveChanges method triggers saveChanges event.
        /// </summary>

    },


    saveRow: function() {
        /// <summary>
        /// Switch the current edited row into dislay mode and save changes made to the data
/// (Note: the changes will be automatically synced)
        /// </summary>

    },


    select: function(items) {
        /// <summary>
        /// Gets/Sets the selected rows/cells.
        /// </summary>
        /// <param name="items" type="Object" >Items to select.</param>
        /// <returns type="jQuery">the selected rows or cells.</returns>

    },


    setDataSource: function(dataSource) {
        /// <summary>
        /// Sets the dataSource of an existing Grid and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" ></param>

    },


    showColumn: function(column) {
        /// <summary>
        /// Shows the specified column.
        /// </summary>
        /// <param name="column" type="Object" >The index or the bound field of the column to show.</param>

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
    /// &#10;altRowTemplate — Function 
    /// &#10;Template to be used for rendering the alternate rows in the grid.
    /// &#10;
    /// &#10;autoBind — Boolean (default: true)
    /// &#10;Indicates whether the grid will call read on the DataSource initially.
    /// &#10;
    /// &#10;columns — Array 
    /// &#10;A collection of column objects or collection of strings that represents the name of the fields.
    /// &#10;
    /// &#10;columnMenu — Boolean 
    /// &#10;Enables column header menu
    /// &#10;
    /// &#10;columnMenu — Object 
    /// &#10;Enables column header menu
    /// &#10;
    /// &#10;dataSource — Object 
    /// &#10;Instance of DataSource or Object with DataSource configuration.
    /// &#10;
    /// &#10;detailTemplate — Function 
    /// &#10;Template to be used for rendering the detail rows in the grid.
/// &#10;See the Detail Template example.
    /// &#10;
    /// &#10;editable — Boolean (default: false)
    /// &#10;Indicates whether editing is enabled/disabled.
    /// &#10;
    /// &#10;editable — Object 
    /// &#10;Indicates whether editing is enabled/disabled.
    /// &#10;
    /// &#10;filterable — Boolean (default: false)
    /// &#10;Indicates whether filtering is enabled/disabled.
    /// &#10;
    /// &#10;filterable — Object 
    /// &#10;Indicates whether filtering is enabled/disabled.
    /// &#10;
    /// &#10;reorderable — Boolean (default: false)
    /// &#10;Indicates whether column reordering is enabled/disable.
    /// &#10;
    /// &#10;resizable — Boolean (default: false)
    /// &#10;Indicates whether column resizing is enabled/disable.
    /// &#10;
    /// &#10;groupable — Boolean (default: false)
    /// &#10;Indicates whether grouping is enabled/disabled.
    /// &#10;
    /// &#10;groupable — Object 
    /// &#10;Indicates whether grouping is enabled/disabled.
    /// &#10;
    /// &#10;height — Number|String 
    /// &#10;Sets the height of the grid.
    /// &#10;
    /// &#10;navigatable — Boolean (default: false)
    /// &#10;Indicates whether keyboard navigation is enabled/disabled.
    /// &#10;
    /// &#10;pageable — Boolean (default: false)
    /// &#10;Indicates whether paging is enabled/disabled.
    /// &#10;
    /// &#10;pageable — Object 
    /// &#10;Indicates whether paging is enabled/disabled.
    /// &#10;
    /// &#10;rowTemplate — Function 
    /// &#10;Template to be used for rendering the rows in the grid.
    /// &#10;
    /// &#10;scrollable — Boolean (default: true)
    /// &#10;Enable/disable grid scrolling.
    /// &#10;
    /// &#10;scrollable — Object 
    /// &#10;Enable/disable grid scrolling.
    /// &#10;
    /// &#10;selectable — String (default: undefined)
    /// &#10;Indicates whether selection is enabled/disabled. Possible values:
    /// &#10;
    /// &#10;sortable — Boolean 
    /// &#10;Defines whether grid columns are sortable.
    /// &#10;
    /// &#10;sortable — Object 
    /// &#10;Defines whether grid columns are sortable.
    /// &#10;
    /// &#10;toolbar — Array 
    /// &#10;This is a list of commands for which the corresponding buttons will be rendered.
/// &#10;The supported built-in commands are: "create", "cancel", "save", "destroy".
/// &#10;Or template to be used for rendering the toolbar content.
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


    destroy: function() {
        /// <summary>
        /// Prepares the ListView for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    edit: function(item) {
        /// <summary>
        /// Edit specified ListView item. Triggers edit event.
        /// </summary>
        /// <param name="item" type="Object" >jQuery object containing the item to be edited.</param>

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
        /// <param name="item" type="Object" >jQuery object containing the item to be removed.</param>

    },


    save: function() {
        /// <summary>
        /// Saves edited ListView item. If validation succeeds will call DataSource sync method.
        /// </summary>

    },


    select: function(items) {
        /// <summary>
        /// Get/set the selected listview item(s).
        /// </summary>
        /// <param name="items" type="Object" >Items to select.</param>
        /// <returns type="jQuery">the selected items if called without arguments.</returns>

    },


    setDataSource: function(dataSource) {
        /// <summary>
        /// Sets the dataSource of an existing ListView and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" ></param>

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
    /// &#10;Indicates whether the list view will call read on the DataSource initially.
    /// &#10;
    /// &#10;dataSource — Object 
    /// &#10;Instance of DataSource or Object with DataSource configuration.
    /// &#10;
    /// &#10;editTemplate — Function 
    /// &#10;Specifies ListView item template in edit mode.
    /// &#10;
    /// &#10;navigatable — Boolean (default: false)
    /// &#10;Indicates whether keyboard navigation is enabled/disabled.
    /// &#10;
    /// &#10;selectable — String (default: false)
    /// &#10;Indicates whether selection is enabled/disabled. Possible values:
    /// &#10;
    /// &#10;template — Function 
    /// &#10;Specifies ListView item template.
    /// &#10;
    /// &#10;altTemplate — Function 
    /// &#10;Template to be used for rendering the alternate items in the listview.
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
        /// <param name="item" type="Selector" >Target item, specified as a JSON object. Can also handle an array of such objects.</param>
        /// <param name="referenceItem" type="Selector" >A reference item to append the new item in.</param>
        /// <returns type="kendo.ui.Menu">Returns the Menu object to support chaining.</returns>

    },


    close: function(element) {
        /// <summary>
        /// Closes a sub-menu of a specified item(s) in a Menu.
        /// </summary>
        /// <param name="element" type="Selector" >Target item selector.</param>
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
        /// <param name="element" type="Selector" >Target element</param>
        /// <param name="enable" type="Boolean" >Desired state</param>
        /// <returns type="kendo.ui.Menu">Returns the Menu object to support chaining.</returns>

    },


    insertAfter: function(item,referenceItem) {
        /// <summary>
        /// Inserts an item into a Menu after the specified referenceItem.
        /// </summary>
        /// <param name="item" type="Selector" >Target item, specified as a JSON object. Can also handle an array of such objects.</param>
        /// <param name="referenceItem" type="Selector" >A reference item to insert the new item after.</param>
        /// <returns type="kendo.ui.Menu">Returns the Menu object to support chaining.</returns>

    },


    insertBefore: function(item,referenceItem) {
        /// <summary>
        /// Inserts an item into a Menu before the specified referenceItem.
        /// </summary>
        /// <param name="item" type="Selector" >Target item, specified as a JSON object. Can also handle an array of such objects.</param>
        /// <param name="referenceItem" type="Selector" >A reference item to insert the new item before</param>
        /// <returns type="kendo.ui.Menu">Returns the Menu object to support chaining.</returns>

    },


    open: function(element) {
        /// <summary>
        /// Opens a sub-menu of a specified item(s) in a Menu.
        /// </summary>
        /// <param name="element" type="Selector" >Target item selector.</param>
        /// <returns type="kendo.ui.Menu">Returns the Menu object to support chaining.</returns>

    },


    remove: function(element) {
        /// <summary>
        /// Removes a specified item(s) from a Menu.
        /// </summary>
        /// <param name="element" type="Selector" >Target item selector.</param>
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
        /// Closes the drop-down list.
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
        /// Prepares the multiselect for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    enable: function(enable) {
        /// <summary>
        /// Enables/disables the multiselect widget
        /// </summary>
        /// <param name="enable" type="Boolean" >Desired state</param>

    },


    readonly: function(readonly) {
        /// <summary>
        /// Controls whether the widget is editable or readonly.
        /// </summary>
        /// <param name="readonly" type="Boolean" >The argument, which defines whether the multiselect should be readonly or editable.</param>

    },


    focus: function() {
        /// <summary>
        /// Focuses the widget.
        /// </summary>

    },


    open: function() {
        /// <summary>
        /// Opens the drop-down list.
        /// </summary>

    },


    refresh: function() {
        /// <summary>
        /// Re-render the items of the drop-down list.
        /// </summary>

    },


    search: function(word) {
        /// <summary>
        /// Filters dataSource using the provided parameter and rebinds drop-down list.
        /// </summary>
        /// <param name="word" type="String" >The filter value.</param>

    },


    setDataSource: function(dataSource) {
        /// <summary>
        /// Sets the dataSource of an existing multiselect and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" ></param>

    },


    toggle: function(toggle) {
        /// <summary>
        /// Toggles the drop-down list between opened and closed state.
        /// </summary>
        /// <param name="toggle" type="Boolean" >Defines the whether to open/close the drop-down list.</param>

    },


    value: function(value) {
        /// <summary>
        /// Gets/Sets the value of the multiselect. Accepts string value or Array of strings.
        /// </summary>
        /// <param name="value" type="Object" >The value to set.</param>
        /// <returns type="Array">The value of the multiselect.</returns>

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
    /// &#10;Animations to be used for opening/closing the popup. Setting to false will turn off the animation.
    /// &#10;
    /// &#10;autoBind — Boolean (default: true)
    /// &#10;Controls whether to bind the widget to the DataSource on initialization.
    /// &#10;
    /// &#10;dataSource — Object 
    /// &#10;A local JavaScript object or instance of DataSource or the data that the multiselect will be bound to.
    /// &#10;
    /// &#10;dataTextField — String (default: "")
    /// &#10;Sets the field of the data item that provides the text content of the list items.
    /// &#10;
    /// &#10;dataValueField — String (default: "")
    /// &#10;Sets the field of the data item that provides the value content of the list items.
    /// &#10;
    /// &#10;delay — Number (default: 200)
    /// &#10;Specifies the delay in ms after which the multiselect will start filtering dataSource.
    /// &#10;
    /// &#10;enable — Boolean (default: true)
    /// &#10;Controls whether the multiselect should be initially enabled.
    /// &#10;
    /// &#10;filter — String (default: "none")
    /// &#10;Defines the type of filtration.
    /// &#10;
    /// &#10;height — Number (default: 200)
    /// &#10;Define the height of the drop-down list in pixels.
    /// &#10;
    /// &#10;highlightFirst — Boolean (default: true)
    /// &#10;Controls whether the first item will be automatically highlighted.
    /// &#10;
    /// &#10;ignoreCase — String (default: true)
    /// &#10;Defines whether the filtration should be case sensitive.
    /// &#10;
    /// &#10;minLength — Number (default: 1)
    /// &#10;Specifies the minimum characters that should be typed before the multiselect activates
    /// &#10;
    /// &#10;maxSelectedItems — Number (default: null)
    /// &#10;Defines the limit of the selected items. If set to null widget will not limit number of the selected items.
    /// &#10;
    /// &#10;placeholder — String (default: "")
    /// &#10;A string that appears in the textbox when the multiselect has no value.
    /// &#10;
    /// &#10;itemTemplate — String 
    /// &#10;Template to be used for rendering the items in the list.
    /// &#10;
    /// &#10;tagTemplate — String 
    /// &#10;Template to be used for rendering the tags of the selected items.
    /// &#10;
    /// &#10;value — Array (default: [])
    /// &#10;Define the value of the widget
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
        /// Enable/Disable the numerictextbox widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >The argument, which defines whether to enable/disable tha numerictextbox.</param>

    },


    readonly: function(readonly) {
        /// <summary>
        /// Controls whether the widget is editable or readonly.
        /// </summary>
        /// <param name="readonly" type="Boolean" >The argument, which defines whether the numerictextbox should be readonly or editable.</param>

    },


    focus: function() {
        /// <summary>
        /// Focuses the numerictextbox widget.
        /// </summary>

    },


    max: function(value) {
        /// <summary>
        /// Gets/Sets the max value of the NumericTextBox.
        /// </summary>
        /// <param name="value" type="Object" >The max value to set.</param>
        /// <returns type="Number">The max value of the NumericTextBox.</returns>

    },


    min: function(value) {
        /// <summary>
        /// Gets/Sets the min value of the NumericTextBox.
        /// </summary>
        /// <param name="value" type="Object" >The min value to set.</param>
        /// <returns type="Number">The min value of the NumericTextBox.</returns>

    },


    step: function(value) {
        /// <summary>
        /// Gets/Sets the step value of the NumericTextBox.
        /// </summary>
        /// <param name="value" type="Object" >The step value to set.</param>
        /// <returns type="Number">The step value of the NumericTextBox.</returns>

    },


    value: function(value) {
        /// <summary>
        /// Gets/Sets the value of the numerictextbox.
        /// </summary>
        /// <param name="value" type="Object" >The value to set.</param>
        /// <returns type="Number">The value of the numerictextbox.</returns>

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
    /// &#10;culture — String (default: en-US)
    /// &#10;Specifies the culture info used by the NumericTextBox widget.
    /// &#10;
    /// &#10;decimals — Number (default: null)
    /// &#10;Specifies the number precision. If not set precision defined by current culture is used.
    /// &#10;
    /// &#10;downArrowText — String (default: Decrease value)
    /// &#10;Specifies the text of the tooltip on the down arrow.
    /// &#10;
    /// &#10;format — String (default: n)
    /// &#10;Specifies the format of the number. Any valid number format is allowed.
    /// &#10;
    /// &#10;max — Number (default: null)
    /// &#10;Specifies the largest value the user can enter.
    /// &#10;
    /// &#10;min — Number (default: null)
    /// &#10;Specifies the smallest value the user can enter.
    /// &#10;
    /// &#10;placeholder — String (default: "")
    /// &#10;Specifies the text displayed when the input is empty.
    /// &#10;
    /// &#10;spinners — Boolean (default: true)
    /// &#10;Specifies whether the up/down spin buttons should be rendered
    /// &#10;
    /// &#10;step — Number (default: 1)
    /// &#10;Specifies the increment/decrement step.
    /// &#10;
    /// &#10;upArrowText — String (default: Increase value)
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

    },


    pageSize: function() {
        /// <summary>
        /// Returns the page size - maximum number of items allowed on one page.
        /// </summary>

    },


    page: function() {
        /// <summary>
        /// Set the specified page as a current page. If called without arguments - returns the current page.
        /// </summary>

    },


    refresh: function() {
        /// <summary>
        /// Updates all values of pager elements so that these values fit the values of DataSource. This method is automaticaly called after DataSource change event is fired.
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
    /// &#10;dataSource — Object 
    /// &#10;Instance of kendo DataSource. See the kendo.data.DataSource.This option is mandatory because the Pager is tightly connected with DataSource. The pager is UI widget for managing paging over the DataSource. The Pager gets values like page size or total count of items from DataSource.
    /// &#10;
    /// &#10;selectTemplate — String 
    /// &#10;The template for selectbox with predefined page sizes.
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
    /// &#10;pageSizes — Boolean|Array (default: false | [5,10,20])
    /// &#10;Displays a list with predefined page sizes. An array of values to be displayed can be provided. If pageSize option is provided for DataSource then this pageSize value will be automaticaly selected in created selectbox.
    /// &#10;
    /// &#10;previousNext — Boolean (default: true)
    /// &#10;Defines if buttons for navigating to the first, last, previous and next pages will be shown.
    /// &#10;
    /// &#10;refresh — Boolean (default: false)
    /// &#10;Defines if a refresh button will be displayed. Click on that button will call DataSource read() method to get actual data.
    /// &#10;
    /// &#10;messages — Object 
    /// &#10;Defines texts shown within the pager.
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
        /// Appends an item to the PanelBar.
        /// </summary>
        /// <param name="item" type="Selector" >Target item, specified as the JSON representation of an object. You can pass item text, content or contentUrl here. Can handle an HTML string or array of such strings or JSON.</param>
        /// <param name="referenceItem" type="Selector" >A reference item to append the new item in</param>
        /// <returns type="kendo.ui.PanelBar">Returns the PanelBar object to support chaining.</returns>

    },


    collapse: function(element,useAnimation) {
        /// <summary>
        /// Collapses the specified item(s) of a PanelBar.
        /// </summary>
        /// <param name="element" type="Selector" >The PanelBar item(s) to be collapsed, expressed as a string containing a selector expression or represented by a jQuery selector.</param>
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
        /// <param name="element" type="Selector" >The PanelBar item(s) to be expanded, expressed as a selector.</param>
        /// <param name="useAnimation" type="Boolean" >_optional, default: _Temporariliy enables (true) or disables (false) any visual animation(s) when expanding items.</param>
        /// <returns type="kendo.ui.PanelBar">Returns the PanelBar object to support chaining.</returns>

    },


    insertAfter: function(item,referenceItem) {
        /// <summary>
        /// Inserts a PanelBar item after the specified referenceItem
        /// </summary>
        /// <param name="item" type="Selector" >Target item, specified as a JSON object. You can pass item text, content or contentUrl here. Can handle an HTML string or array of such strings or JSON.</param>
        /// <param name="referenceItem" type="Selector" >A reference item to insert the new item after</param>

    },


    insertBefore: function(item,referenceItem) {
        /// <summary>
        /// Inserts a PanelBar item before the specified referenceItem
        /// </summary>
        /// <param name="item" type="Selector" >Target item, specified as a JSON object. You can pass item text, content or contentUrl here. Can handle an TML string or array of such strings or JSON.</param>
        /// <param name="referenceItem" type="Selector" >A reference item to insert the new item before.</param>
        /// <returns type="kendo.ui.PanelBar">Returns the PanelBar object to support chaining.</returns>

    },


    reload: function(element) {
        /// <summary>
        /// Reloads the content of a PanelBar from an AJAX request.
        /// </summary>
        /// <param name="element" type="Selector" >Target element</param>

    },


    remove: function(element) {
        /// <summary>
        /// Removes the specified PanelBar item(s).
        /// </summary>
        /// <param name="element" type="Object" >The PanelBar item(s) to be removed, expressed as a selector string, DOM element or a jQuery object.</param>

    },


    select: function(element) {
        /// <summary>
        /// Selects the specified item of the PanelBar. If this method is invoked without arguments, it
/// returns the currently selected item.
        /// </summary>
        /// <param name="element" type="Object" >The PanelBar item to be selected, expressed as a string containing a selector expression or represented by a jQuery selector.</param>

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
    /// &#10;A collection of visual animations used when PanelBar items are exapnd or collapsed through
/// &#10;user interactions. Setting this option to false will disable all animations.
    /// &#10;
    /// &#10;animation — Object 
    /// &#10;A collection of visual animations used when PanelBar items are exapnd or collapsed through
/// &#10;user interactions. Setting this option to false will disable all animations.
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


    value: function(value) {
        /// <summary>
        /// The value method gets or sets the start and end values of the RangeSlider. It
/// accepts an array as parameter, and returns an object array with the start and end
/// selection values.
        /// </summary>
        /// <param name="value" type="Number" >The new value of the RangeSlider.</param>

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
        /// <param name="value" type="String" >_optional, default: _The value to be set for a Slider.</param>

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
/// &#10;handle must be focused). Note: The allied largeStep will also set large tick for every large step.
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
    /// &#10;The small step value of the Slider. The underlying value will be changed when the end user
/// &#10;(1) clicks on the increase or decrease buttons of the Slider, (2) presses the arrow keys
/// &#10;(the drag handle must be focused), or (3) drags the drag handle.
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


kendo.ui.Splitter = function() { };

kendo.ui.Splitter.prototype = {




    ajaxRequest: function(pane,url,data) {
        /// <summary>
        /// Loads the content of a pane from a local or remote URL.
        /// </summary>
        /// <param name="pane" type="Object" >The targetted pane whose content is to be loaded via a URL.</param>
        /// <param name="url" type="String" >A local or remote URL from which the content of the pane is to be loaded.</param>
        /// <param name="data" type="Object" >Any data that is necessary to be sent to the server.</param>

    },


    collapse: function(pane) {
        /// <summary>
        /// Collapses a specified pane. Invoking this method will force the Splitter to redraw and it
/// will trigger layoutChange and resize events. Note: Invoking the method will not trigger a collapse event.
        /// </summary>
        /// <param name="pane" type="Object" >The pane to be collapsed.</param>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the Splitter for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    expand: function(pane) {
        /// <summary>
        /// Expands a specified pane. Invoking this method will force the Splitter to redraw and it
/// will trigger layoutChange and resize events. Note: Invoking the method will not trigger an expand event.
        /// </summary>
        /// <param name="pane" type="Object" >The pane to be expanded.</param>

    },


    max: function(pane,value) {
        /// <summary>
        /// Sets the maximum size of a pane. Setting this value will not cause the Splitter to
/// redraw, nor will it trigger any events.
        /// </summary>
        /// <param name="pane" type="Object" >The pane being targetted for a new minimum size configuration value.</param>
        /// <param name="value" type="String" >The maximum size value of the pane defined as pixels (i.e. "200px") or as a percentage (i.e. "50%").</param>

    },


    min: function(pane,value) {
        /// <summary>
        /// Sets the minimum size of a pane. Setting this value will not cause the Splitter to
/// redraw, nor will it trigger any events.
        /// </summary>
        /// <param name="pane" type="Object" >The pane being targetted for a new minimum size configuration value.</param>
        /// <param name="value" type="String" >The minimum size value of the pane defined as pixels (i.e. "200px") or as a percentage (i.e. "50%").</param>

    },


    size: function(pane,value) {
        /// <summary>
        /// Set the size of the pane. Setting this value will cause the Splitter to redraw and it will
/// trigger layoutChange and resize events.
        /// </summary>
        /// <param name="pane" type="Object" >The pane to be resized.</param>
        /// <param name="value" type="String" >The new size of the pane defined as pixels (i.e. "200px") or as a percentage (i.e. "50%"). Note: This value must not exceed panes.max or be less then panes.min.</param>

    },


    toggle: function(pane,expand) {
        /// <summary>
        /// Toggles the state of a specified pane (i.e. collapsed or expanded). Invoking this method will force the
/// Splitter to redraw and it will trigger layoutChange and resize events. Note: Invoking the
/// method will not trigger collapse or expand events.
        /// </summary>
        /// <param name="pane" type="Object" >The pane to be collapsed.</param>
        /// <param name="expand" type="Boolean" >(Optional) Represents the desired state of the specified pane; to be expanded (true) or collapsed (false). If undefined, toggle() will collapse the pane if it is expanded or will expand the pane if it is collapsed.</param>

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
    /// &#10;orientation — String (default: horizontal)
    /// &#10;Specifies the orientation of the Splitter.
    /// &#10;
    /// &#10;panes — Array 
    /// &#10;An array of pane definitions.
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
        /// <param name="item" type="Selector" >The target tab, specified as a selector, to be activated.</param>
        /// <returns type="Boolean">Returns true if successful; otherwise, false.</returns>

    },


    append: function(tab) {
        /// <summary>
        /// Appends a tab to the collection of tabs in a TabStrip.
        /// </summary>
        /// <param name="tab" type="Selector" >Target tab, specified as a JSON object. You can pass tab text, content or contentUrl here. Can handle an HTML string or array of such strings or JSON.</param>
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
        /// <param name="item" type="Selector" >The target tab, specified as a selector, to be deactivated.</param>

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
        /// <param name="element" type="Selector" >The target tab(s), specified as a selector, to be disabled.</param>
        /// <returns type="kendo.ui.TabStrip">Returns the TabStrip object to support chaining.</returns>

    },


    enable: function(element,enable) {
        /// <summary>
        /// Disables (false) or enables (true) a tab(s) of a TabStrip.
        /// </summary>
        /// <param name="element" type="Selector" >The target tab(s), specified as a selector, to be enabled (true) or disabled (false).</param>
        /// <param name="enable" type="Boolean" >Desired state of the tab(s) specified by the selector; enabled (true) or disabled (false).</param>
        /// <returns type="kendo.ui.TabStrip">Returns the TabStrip object to support chaining.</returns>

    },


    insertAfter: function(item,referenceTab) {
        /// <summary>
        /// Inserts a newly-created tab after a specified tab.
        /// </summary>
        /// <param name="item" type="Selector" >Target tab, specified as a JSON object. You can pass tab text, content or contentUrl here. Can handle an HTML string or array of such strings or JSON.</param>
        /// <param name="referenceTab" type="Selector" >A reference tab to insert the new item after.</param>
        /// <returns type="kendo.ui.TabStrip">Returns the TabStrip object to support chaining.</returns>

    },


    insertBefore: function(item,referenceTab) {
        /// <summary>
        /// Inserts a newly-created tab before a specified tab.
        /// </summary>
        /// <param name="item" type="Selector" >Target tab, specified as a JSON object. You can pass tab text, content or contentUrl here. Can handle an HTML string or array of such strings or JSON.</param>
        /// <param name="referenceTab" type="Selector" >A reference tab to insert the new item before</param>
        /// <returns type="kendo.ui.TabStrip">Returns the TabStrip object to support chaining.</returns>

    },


    reload: function(element) {
        /// <summary>
        /// Reloads TabStrip tab(s) via AJAX.
        /// </summary>
        /// <param name="element" type="Selector" >The target tab(s), specified as a selector, to be reloaded via AJAX.</param>
        /// <returns type="kendo.ui.TabStrip">Returns the TabStrip object to support chaining.</returns>

    },


    remove: function(element) {
        /// <summary>
        /// Removes a specified tab from a TabStrip.
        /// </summary>
        /// <param name="element" type="Selector" >The target tab(s), specified as a selector, to be removed.</param>
        /// <returns type="kendo.ui.TabStrip">Returns the TabStrip object to support chaining.</returns>

    },


    select: function(element) {
        /// <summary>
        /// Get/set the selected tab. If called without arguments, it returns the
/// currently selected tab.
        /// </summary>
        /// <param name="element" type="Object" >The target tab(s), specified as a selector or index in the tab group.</param>
        /// <returns type="jQuery">the selected tab if called without arguments. kendo.ui.TabStrip if called with arguments.</returns>

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
    /// &#10;animation — Object 
    /// &#10;A collection of visual animations used when TabStrip tab are selected through
/// &#10;user interactions. Setting this option to false will disable all animations.
    /// &#10;
    /// &#10;collapsible — Boolean (default: false)
    /// &#10;Specifies whether the TabStrip should be able to collapse completely when clicking an expanded tab.
    /// &#10;
    /// &#10;dataContentField — String (default: "")
    /// &#10;Sets the field of the data item that provides the text content of
/// &#10;the tab content element.
    /// &#10;
    /// &#10;dataContentUrlField — String (default: "")
    /// &#10;Sets the field of the data item that provides the URL for
/// &#10;the ajax loaded tab content.
    /// &#10;
    /// &#10;dataImageUrlField — String (default: "")
    /// &#10;Sets the field of the data item that provides the image URL of
/// &#10;the tab.
    /// &#10;
    /// &#10;dataSpriteCssClass — String (default: "")
    /// &#10;Sets the field of the data item that provides the CSS class of
/// &#10;the tab.
    /// &#10;
    /// &#10;dataTextField — String (default: "")
    /// &#10;Sets the field of the data item that provides the text name of the tab.
    /// &#10;
    /// &#10;dataUrlField — String (default: "")
    /// &#10;Sets the field of the data item that provides the link URL for the
/// &#10;tab.
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
        /// Controls whether the widget is editable or readonly.
        /// </summary>
        /// <param name="readonly" type="Boolean" >The argument, which defines whether the timepicker should be readonly or editable.</param>

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
    /// &#10;Animations to be used for opening/closing the popup. Setting to false will turn of the animation.
    /// &#10;
    /// &#10;culture — String (default: en-US)
    /// &#10;Specifies the culture info used by the widget.
    /// &#10;
    /// &#10;dates — Array 
    /// &#10;Specifies a list of dates, which are shown in the time drop-down list. If not set, the DateTimePicker will auto-generate the available times.
    /// &#10;
    /// &#10;format — String (default: h:mm tt)
    /// &#10;Specifies the format, which is used to format the value of the TimePicker displayed in the input. The format also will be used to parse the input.
    /// &#10;
    /// &#10;interval — Number (default: 30)
    /// &#10;Specifies the interval, between values in the popup list, in minutes.
    /// &#10;
    /// &#10;max — Date (default: 00:00)
    /// &#10;Specifies the end value in the popup list.
    /// &#10;
    /// &#10;min — Date (default: 00:00)
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


kendo.ui.Tooltip = function() { };

kendo.ui.Tooltip.prototype = {




    show: function(element) {
        /// <summary>
        /// Shows the tooltip for given target.
        /// </summary>
        /// <param name="element" type="jQuery" >The target element for which the tooltip should be shown.</param>

    },


    hide: function() {
        /// <summary>
        /// Hides the tooltip.
        /// </summary>

    },


    target: function() {
        /// <summary>
        /// Gets the tooltip current target.
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
    /// &#10;Specifies if the tooltip will be hidden when mouse leaves the target element. If set to false a close button will be shown within tooltip.
    /// &#10;
    /// &#10;animation — Object 
    /// &#10;A collection of {Animation} objects, used to change default animations. A value of false
/// &#10;will disable all animations in the widget.
    /// &#10;
    /// &#10;content — String|Function 
    /// &#10;The text or a function which result will be shown within the tooltip.
/// &#10;By default the tooltip will display the target element title attribute content.
    /// &#10;
    /// &#10;content — Object 
    /// &#10;The text or a function which result will be shown within the tooltip.
/// &#10;By default the tooltip will display the target element title attribute content.
    /// &#10;
    /// &#10;callout — Boolean (default: true)
    /// &#10;Specifies if the tooltip callout will be displayed.
    /// &#10;
    /// &#10;filter — String 
    /// &#10;Specifies a selector for elements, within the container, for which the tooltip will be displayed.
    /// &#10;
    /// &#10;iframe — Boolean 
    /// &#10;Explicitly states whether content iframe should be created.
    /// &#10;
    /// &#10;height — Number (default: Infinity)
    /// &#10;The height (in pixels) of the tooltip.
    /// &#10;
    /// &#10;width — Number (default: Infinity)
    /// &#10;The width (in pixels) of the tooltip.
    /// &#10;
    /// &#10;position — String (default: bottom)
    /// &#10;The position relative to the target element, at which the tooltip will be shown. Predefined values are "bottom", "top", "left", "right", "center".
    /// &#10;
    /// &#10;showAfter — Number (default: 100)
    /// &#10;Specify the delay in milliseconds before the tooltip is shown. This option is ignored if showOn is set to "click" or "focus".
    /// &#10;
    /// &#10;showOn — String (default: mouseenter)
    /// &#10;The event on which the tooltip will be shown. Predefined values are "mouseenter", "click" and "focus".
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.TreeView = function() { };

kendo.ui.TreeView.prototype = {




    append: function(nodeData,parentNode) {
        /// <summary>
        /// Appends a node to a group of a TreeView. This method may also be used to reorder the nodes of a
/// TreeView.
        /// </summary>
        /// <param name="nodeData" type="Object" >A JSON-formatted string or selector that specifies the node to be appended.</param>
        /// <param name="parentNode" type="Element" >The node that will contain the newly appended node. If not specified, the new node will be appended to the root group of the TreeView.</param>

    },


    collapse: function(nodes) {
        /// <summary>
        /// Collapses nodes.
        /// </summary>
        /// <param name="nodes" type="Object" >The nodes that are to be collapsed.</param>

    },


    dataItem: function(node) {
        /// <summary>
        /// Returns the model dataItem that corresponds to a TreeView node
        /// </summary>
        /// <param name="node" type="Object" >The element or selector that specifies a node.</param>
        /// <returns type="kendo.data.Node">The model of the item that was passed as a parameter.</returns>

    },


    destroy: function() {
        /// <summary>
        /// Prepares the TreeView for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

    },


    detach: function(node) {
        /// <summary>
        /// Removes a node from a TreeView, but keeps its jQuery.data() objects.
        /// </summary>
        /// <param name="node" type="Selector" >The node that is to be detached.</param>
        /// <returns type="jQuery">The node that has been detached.</returns>

    },


    enable: function(nodes,enable) {
        /// <summary>
        /// Enables or disables nodes.
        /// </summary>
        /// <param name="nodes" type="Selector" >The nodes that are to be enabled/disabled.</param>
        /// <param name="enable" type="Boolean" >Whether the nodes should be enabled or disabled.</param>

    },


    expand: function(nodes) {
        /// <summary>
        /// Expands nodes.
        /// </summary>
        /// <param name="nodes" type="Object" >The nodes that are to be collapsed.</param>

    },


    findByText: function(text) {
        /// <summary>
        /// Searches a TreeView for a node that has specific text.
        /// </summary>
        /// <param name="text" type="String" >The text that is being searched for.</param>
        /// <returns type="jQuery">All nodes that have the text.</returns>

    },


    findByUid: function(text) {
        /// <summary>
        /// Searches a TreeView for a node with the given unique identifier.
/// Applicable when the widget is bound to a HierarchicalDataSource.
        /// </summary>
        /// <param name="text" type="String" >The text that is being searched for.</param>
        /// <returns type="jQuery">All nodes that have the text.</returns>

    },


    insertAfter: function(nodeData,referenceNode) {
        /// <summary>
        /// Inserts a node after a specified node in a TreeView. This method may also be used to reorder the nodes of a
/// TreeView.
        /// </summary>
        /// <param name="nodeData" type="Object" >A JSON-formatted string or selector that specifies the node to be inserted.</param>
        /// <param name="referenceNode" type="Element" >The node that will be preceed the newly-appended node.</param>

    },


    insertBefore: function(nodeData,referenceNode) {
        /// <summary>
        /// Inserts a node before another node. This method may also be used to reorder the nodes of a
/// TreeView.
        /// </summary>
        /// <param name="nodeData" type="Object" >A JSON-formatted string or selector that specifies the node to be inserted.</param>
        /// <param name="referenceNode" type="Element" >The node that follows the inserted node.</param>

    },


    parent: function(node) {
        /// <summary>
        /// Gets the parent node of the item
        /// </summary>
        /// <param name="node" type="Element" >The child node whose parent will be returned.</param>

    },


    remove: function(node) {
        /// <summary>
        /// Removes a node from a TreeView.
        /// </summary>
        /// <param name="node" type="Selector" >The node that is to be removed.</param>

    },


    select: function(node) {
        /// <summary>
        /// Gets or sets the selected node of a TreeView.
        /// </summary>
        /// <param name="node" type="Object" >If provided, the node of a TreeView that should be selected.</param>
        /// <returns type="jQuery">The selected node of a TreeView.</returns>

    },


    setDataSource: function(dataSource) {
        /// <summary>
        /// Sets the dataSource of an existing TreeView and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.HierarchicalDataSource" ></param>

    },


    text: function(node,newText) {
        /// <summary>
        /// Gets or sets the text of a node in a TreeView.
        /// </summary>
        /// <param name="node" type="Selector" >The node of which the text is being retrieved.</param>
        /// <param name="newText" type="String" >Optional. When passed, sets the node text to the specified string</param>
        /// <returns type="String">The text of a node.</returns>

    },


    toggle: function(node) {
        /// <summary>
        /// Toggles the node of a TreeView between its expanded and collapsed states.
        /// </summary>
        /// <param name="node" type="Selector" >The node that should be toggled.</param>

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
    /// &#10;animation — Object 
    /// &#10;A collection of visual animations used when items are expanded or collapsed through user interaction.
/// &#10;Setting this option to false will disable all animations.
    /// &#10;
    /// &#10;checkboxes — Boolean 
    /// &#10;If true or an object, renders checkboxes within each treeview item.
    /// &#10;
    /// &#10;checkboxes — Object 
    /// &#10;If true or an object, renders checkboxes within each treeview item.
    /// &#10;
    /// &#10;dataImageUrlField — String (default: null)
    /// &#10;Sets the field of the data item that provides
/// &#10;the image URL of the treeview nodes.
    /// &#10;
    /// &#10;dataSource — Array 
    /// &#10;The data that the TreeView will be bound to.
    /// &#10;
    /// &#10;dataSpriteCssClassField — String (default: null)
    /// &#10;Sets the field of the data item that provides
/// &#10;the sprite CSS class of the treeview nodes.
    /// &#10;
    /// &#10;dataTextField — String|Array (default: null)
    /// &#10;Sets the field of the data item that provides the text content of the treeview nodes.
/// &#10;If an array, each level uses the field that is at the same index in the array, or the last item in the array.
    /// &#10;
    /// &#10;dataUrlField — String (default: null)
    /// &#10;Sets the field of the data item that provides
/// &#10;the link URL of the treeview nodes.
    /// &#10;
    /// &#10;dragAndDrop — Boolean (default: false)
    /// &#10;Disables (false) or enables (true) drag-and-drop on the nodes of a
/// &#10;TreeView.
    /// &#10;
    /// &#10;loadOnDemand — Boolean (default: true)
    /// &#10;Indicates whether the child datasources should be fetched
/// &#10;lazily, when parent groups get expanded. Setting this to false causes all child dataSources to
/// &#10;be loaded at initialization time. Note: when initializing a TreeView from array (rather than from a
/// &#10;HierarchicalDataSource instance), the default value of this option is false.
    /// &#10;
    /// &#10;template — String|Function 
    /// &#10;Template for rendering of the nodes of the treeview.
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


kendo.ui.Window = function() { };

kendo.ui.Window.prototype = {




    center: function() {
        /// <summary>
        /// Centers a Window within the viewport.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the (Kendo UI) Window object to support chaining.</returns>

    },


    close: function() {
        /// <summary>
        /// Closes a Window.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the (Kendo UI) Window object to support chaining.</returns>

    },


    content: function(content) {
        /// <summary>
        /// Gets or set the content of a Window.
        /// </summary>
        /// <param name="content" type="String" >_optional, default: _The content of the Window.</param>
        /// <returns type="kendo.ui.Window">If content is provided, this method will return the (Kendo UI) Window object to support chaining. Otherwise,it will return the current content of the (Kendo UI) Window.</returns>

    },


    destroy: function() {
        /// <summary>
        /// Destroys the window and its modal overlay, if necessary. Removes the Window HTML elements from the DOM.
        /// </summary>

    },


    maximize: function() {
        /// <summary>
        /// Maximizes a Window to the entire viewing area of the user agent. Triggers the resize event.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the (Kendo UI) Window object to support chaining.</returns>

    },


    minimize: function() {
        /// <summary>
        /// Maximizes a Window to its title bar.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the (Kendo UI) Window object to support chaining.</returns>

    },


    open: function() {
        /// <summary>
        /// Opens a Window.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the (Kendo UI) Window object to support chaining.</returns>

    },


    refresh: function(options) {
        /// <summary>
        /// Refreshes the content of a Window from a remote URL.
        /// </summary>
        /// <param name="options" type="String" >Options for requesting data from the server. If omitted, the window uses the content property that was supplied when the window was created. Any options specified here are passed to jQuery.ajax().</param>
        /// <returns type="kendo.ui.Window">Returns the (Kendo UI) Window object to support chaining.</returns>

    },


    restore: function() {
        /// <summary>
        /// Restores a maximized or minimized Window to its previous state. Triggers the resize event.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the (Kendo UI) Window object to support chaining.</returns>

    },


    setOptions: function() {
        /// <summary>
        /// Allows the window to be configured with new options.
        /// </summary>

    },


    title: function(text) {
        /// <summary>
        /// Gets or set the title of a Window.
        /// </summary>
        /// <param name="text" type="String" >_optional, default: _The title of the Window.</param>
        /// <returns type="kendo.ui.Window">If a title is provided, this method will return the (Kendo UI) Window object to support chaining. Otherwise,it will return the current title of the (Kendo UI) Window.</returns>

    },


    toFront: function() {
        /// <summary>
        /// Brings forward a Window to the top of the z-index.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the (Kendo UI) Window object to support chaining.</returns>

    },


    toggleMaximization: function() {
        /// <summary>
        /// Toggles a Window between a maximized and restored state. Triggers the resize event.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the (Kendo UI) Window object to support chaining.</returns>

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
    /// &#10;The element that the Window will be appended to.
/// &#10;Note that this does not constrain the window dragging within the given element.
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
    /// &#10;Enables (true) or disables (false) the ability for users to move/drag a
/// &#10;Window.
    /// &#10;
    /// &#10;iframe — Boolean 
    /// &#10;Explicitly states whether content iframe should be created.
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
    /// &#10;resizable — Boolean (default: true)
    /// &#10;Enables (true) or disables (false) the ability for users to resize a
/// &#10;Window.
    /// &#10;
    /// &#10;title — String|Boolean (default: "")
    /// &#10;The text in the window title bar. If false, the window will be displayed without a title bar. Note that this will prevent the window from being dragged, and the window titlebar buttons will not be shown.
    /// &#10;
    /// &#10;visible — Boolean (default: true)
    /// &#10;Specifies whether the window will be initially visible.
    /// &#10;
    /// &#10;width — Number 
    /// &#10;Specifies width of the window.
    /// &#10;
    /// &#10;height — Number 
    /// &#10;Specifies height of the window.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};

