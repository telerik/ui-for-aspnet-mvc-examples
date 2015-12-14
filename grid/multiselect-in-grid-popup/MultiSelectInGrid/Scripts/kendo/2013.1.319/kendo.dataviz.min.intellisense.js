

intellisense.annotate(kendo, {
    Class: function() {
        /// <signature>
        /// <summary>Constructor of kendo.Class</summary>
        /// </signature>
    }
});

kendo.Class = (function() {
var original = kendo.Class;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


intellisense.annotate(kendo, {
    Layout: function() {
        /// <signature>
        /// <summary>Constructor of kendo.Layout</summary>
        /// </signature>
    }
});

kendo.Layout = (function() {
var original = kendo.Layout;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    showIn: function(container,view) {
        /// <signature>
        /// <summary>
        /// Renders the View element in the element specified by the selector
        /// </summary>
        /// <param name="container" type="String" >The selector of the container in which the view element will be appended.</param>
        /// <param name="view" type="kendo.View" >The view instance that will be rendered.</param>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


intellisense.annotate(kendo, {
    Observable: function() {
        /// <signature>
        /// <summary>Constructor of kendo.Observable</summary>
        /// </signature>
    }
});

kendo.Observable = (function() {
var original = kendo.Observable;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    bind: function(eventName,handler) {
        /// <signature>
        /// <summary>
        /// Attaches a handler to an event.
        /// </summary>
        /// <param name="eventName" type="String" >The name of the event.</param>
        /// <param name="handler" type="Function" >A function to execute each time the event is triggered. That function should have a single parameter which will contain any event specific data.</param>
        /// </signature>
    },
    one: function(eventName,handler) {
        /// <signature>
        /// <summary>
        /// Attaches a handler to an event. The handler is executed only once.
        /// </summary>
        /// <param name="eventName" type="String" >The name of the event.</param>
        /// <param name="handler" type="Function" >A function to execute each time the event is triggered. That function should have a single parameter which will contain any event specific data.</param>
        /// </signature>
    },
    trigger: function(eventName,eventData) {
        /// <signature>
        /// <summary>
        /// Executes all handlers attached to the given event.
        /// </summary>
        /// <param name="eventName" type="String" >The name of the event to trigger.</param>
        /// <param name="eventData" type="Object" >Optional event data which will be passed as an argument to the event handlers.</param>
        /// </signature>
    },
    unbind: function(eventName,handler) {
        /// <signature>
        /// <summary>
        /// Remove a previously attached event handler.
        /// </summary>
        /// <param name="eventName" type="String" >The name of the event. If not specified all handlers of all events will be removed.</param>
        /// <param name="handler" type="Function" >The handler which should no loger be executed. If not specified all handlers listening to that event will be removed.</param>
        /// </signature>
    }



});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


intellisense.annotate(kendo, {
    Router: function() {
        /// <signature>
        /// <summary>Constructor of kendo.Router</summary>
        /// </signature>
    }
});

kendo.Router = (function() {
var original = kendo.Router;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    start: function() {
        /// <signature>
        /// <summary>
        /// Activates the router binding to the URL fragment part changes.
        /// </summary>
        /// </signature>
    },
    Example: function() {
        /// <signature>
        /// <summary>
        /// 
        /// </summary>
        /// </signature>
    },
    route: function(route,callback) {
        /// <signature>
        /// <summary>
        /// Specifies a callback for the given route. The route definition can contain bound parameters, optional segments, and route globbing.
/// The parsed parts of the URL are passed as parameters to the route callback.
        /// </summary>
        /// <param name="route" type="String" >The route definition.</param>
        /// <param name="callback" type="Function" >The callback to be executed when the route is matched.</param>
        /// </signature>
    },
    navigate: function(route,silent) {
        /// <signature>
        /// <summary>
        /// Navigates to the given route.
        /// </summary>
        /// <param name="route" type="String" >The route to navigate to.</param>
        /// <param name="silent" type="Boolean" >If set to true, the router callbacks will not be called.</param>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Unbinds the router instance listeners from the URL fragment part changes.
        /// </summary>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


intellisense.annotate(kendo, {
    View: function() {
        /// <signature>
        /// <summary>Constructor of kendo.View</summary>
        /// </signature>
    }
});

kendo.View = (function() {
var original = kendo.View;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Removes the View element from the DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    render: function(container) {
        /// <signature>
        /// <summary>
        /// Renders the view contents. Accepts a jQuery selector (or jQuery object) to which the contents will be appended.
/// Alternatively, the render method can be called without parameters in order to retrieve the View element for manual insertion/further manipulation.
        /// </summary>
        /// <param name="container" type="jQuery" >(Optional) the element in which the view element will be appended.</param>
        /// <returns type="jQuery">the view element.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


intellisense.annotate(kendo.data, {
    Binder: function() {
        /// <signature>
        /// <summary>Constructor of kendo.data.Binder</summary>
        /// </signature>
    }
});

kendo.data.Binder = (function() {
var original = kendo.data.Binder;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


intellisense.annotate(kendo.data, {
    DataSource: function() {
        /// <signature>
        /// <summary>Constructor of kendo.data.DataSource</summary>
        /// </signature>
    }
});

kendo.data.DataSource = (function() {
var original = kendo.data.DataSource;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    add: function(model) {
        /// <signature>
        /// <summary>
        /// Adds a new data item to the DataSource.
        /// </summary>
        /// <param name="model" type="Object" >Either a kendo.data.Model instance or JavaScript object containing the field values.</param>
        /// <returns type="kendo.data.Model">The instance which has been added.</returns>
        /// </signature>
    },
    aggregate: function(val) {
        /// <signature>
        /// <summary>
        /// Get current aggregate descriptors or applies aggregates to the data.
        /// </summary>
        /// <param name="val" type="Object" >Aggregate(s) to be applied to the data.</param>
        /// <returns type="Array">Current aggregate descriptors</returns>
        /// </signature>
    },
    aggregates: function() {
        /// <signature>
        /// <summary>
        /// Get result of aggregates calculation
        /// </summary>
        /// <returns type="Array">Aggregates result</returns>
        /// </signature>
    },
    at: function(index) {
        /// <signature>
        /// <summary>
        /// Returns the data item at the specified index.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index of the data item.</param>
        /// <returns type="kendo.data.ObservableObject | kendo.data.Model">The type depends on the schema.</returns>
        /// </signature>
    },
    cancelChanges: function(model) {
        /// <signature>
        /// <summary>
        /// Cancel the changes made to the DataSource after the last sync. Any changes currently existing in the model
/// will be discarded.
        /// </summary>
        /// <param name="model" type="kendo.data.Model" >Optional model instance. If specified only the changes of this model will be discarded. If omitted all changes will be discarded.</param>
        /// </signature>
    },
    data: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the data of the DataSource.
        /// </summary>
        /// <param name="value" type="Array" >An Array of items to set as the current data of the DataSource. If omitted the current data will be returned.</param>
        /// <returns type="kendo.data.ObservableArray">the items of the DataSource</returns>
        /// </signature>
    },
    fetch: function(callback) {
        /// <signature>
        /// <summary>
        /// Fetches data using the current filter/sort/group/paging information.
/// If data is not available and remote operations are enabled data is requested through the transport,
/// otherwise operations are executed over the available data.
        /// </summary>
        /// <param name="callback" type="Function" >Optional callback which will be executed when the data is ready.</param>
        /// </signature>
    },
    filter: function(filters) {
        /// <signature>
        /// <summary>
        /// Get current filters or filter the data.Supported filter operators/aliases are:
        /// </summary>
        /// <param name="filters" type="Object" >Filter(s) to be applied to the data.</param>
        /// <returns type="Array">The current filter descriptors.</returns>
        /// </signature>
    },
    get: function(id) {
        /// <signature>
        /// <summary>
        /// Retrieves a model instance by given id.
        /// </summary>
        /// <param name="id" type="Object" >The id of the model to be retrieved. The id of the model is defined via schema.model.id.</param>
        /// <returns type="kendo.data.Model">the model instance. If not found undefined is returned.</returns>
        /// </signature>
    },
    getByUid: function(uid) {
        /// <signature>
        /// <summary>
        /// Retrieves a data item by its uid field.
        /// </summary>
        /// <param name="uid" type="String" >The uid of the item to be retrieved</param>
        /// <returns type="kendo.data.ObservableObject">or kendo.data.Model (if schema.model is set). If not found undefined is returned.</returns>
        /// </signature>
    },
    group: function(groups) {
        /// <signature>
        /// <summary>
        /// Get current group descriptors or group the data.
        /// </summary>
        /// <param name="groups" type="Object" >Group(s) to be applied to the data.</param>
        /// <returns type="Array">The current group descriptors.</returns>
        /// </signature>
    },
    hasChanges: function() {
        /// <signature>
        /// <summary>
        /// Get if DataSource has changes.
        /// </summary>
        /// <returns type="Boolean">True if DataSource records are modified. Otherwise, false.</returns>
        /// </signature>
    },
    indexOf: function(value) {
        /// <signature>
        /// <summary>
        /// Get the index of the specified kendo.data.ObservableObject or kendo.data.Model.
        /// </summary>
        /// <param name="value" type="kendo.data.ObservableObject" ></param>
        /// <returns type="Number">the index of the specified value.</returns>
        /// </signature>
    },
    insert: function(index,model) {
        /// <signature>
        /// <summary>
        /// Inserts a new data item in the DataSource.
        /// </summary>
        /// <param name="index" type="Number" >The zer-based index at which the data item will be inserted</param>
        /// <param name="model" type="Object" >Either a kendo.data.Model instance or JavaScript object containing the field values.</param>
        /// <returns type="kendo.data.Model">The instance which has been inserted.</returns>
        /// </signature>
    },
    page: function(page) {
        /// <signature>
        /// <summary>
        /// Get/set the current page index.
        /// </summary>
        /// <param name="page" type="Number" >The index of the page to be retrieved</param>
        /// <returns type="Number">Current page index</returns>
        /// </signature>
    },
    pageSize: function(size) {
        /// <signature>
        /// <summary>
        /// Get/set the current pageSize or request a page with specified number of records.
        /// </summary>
        /// <param name="size" type="Number" >The of number of records to be retrieved.</param>
        /// <returns type="Number">Current page size</returns>
        /// </signature>
    },
    query: function(options) {
        /// <signature>
        /// <summary>
        /// Executes a query over the data. Available operations are paging, sorting, filtering, grouping.
/// If data is not available or remote operations are enabled, data is requested through the transport.
/// Otherwise operations are executed over the available data.
        /// </summary>
        /// <param name="options" type="Object" >Contains the settings for the operations.</param>
        /// </signature>
    },
    read: function(data) {
        /// <signature>
        /// <summary>
        /// Read data into the DataSource using the transport.read setting.
        /// </summary>
        /// <param name="data" type="Object" >Optional data to pass to the remote service configured via transport.read.</param>
        /// </signature>
    },
    remove: function(model) {
        /// <signature>
        /// <summary>
        /// Remove a given kendo.data.Model instance from the DataSource.
        /// </summary>
        /// <param name="model" type="Object" >The kendo.data.Model instance to be removed.</param>
        /// </signature>
    },
    sort: function(sort) {
        /// <signature>
        /// <summary>
        /// Get current sort descriptors or sorts the data.
        /// </summary>
        /// <param name="sort" type="Object" >Sort options to be applied to the data</param>
        /// <returns type="Array">the current sort descriptors.</returns>
        /// </signature>
    },
    sync: function() {
        /// <signature>
        /// <summary>
        /// Synchronizes changes through the transport. Any pending CRUD operations will be sent to the server.
/// If the DataSource is in batch mode, only one call will be made for each type of operation (Create, Update, Destroy).
/// Otherwise, the DataSource will send one request per item change and change type.
        /// </summary>
        /// </signature>
    },
    total: function() {
        /// <signature>
        /// <summary>
        /// Get the total number of data items.
        /// </summary>
        /// <returns type="Number">the number of data items.</returns>
        /// </signature>
    },
    totalPages: function() {
        /// <signature>
        /// <summary>
        /// Get the number of available pages.
        /// </summary>
        /// <returns type="Number">the available pages.</returns>
        /// </signature>
    },
    view: function() {
        /// <signature>
        /// <summary>
        /// Returns a the current state of the data items - with applied paging, sorting, filtering and grouping.To ensure that data is available this method should be use from within change event of the DataSource.
        /// </summary>
        /// <returns type="kendo.data.ObservableArray">the data items.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


intellisense.annotate(kendo.data, {
    HierarchicalDataSource: function() {
        /// <signature>
        /// <summary>Constructor of kendo.data.HierarchicalDataSource</summary>
        /// </signature>
    }
});

kendo.data.HierarchicalDataSource = (function() {
var original = kendo.data.HierarchicalDataSource;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


intellisense.annotate(kendo.data, {
    Model: function() {
        /// <signature>
        /// <summary>Constructor of kendo.data.Model</summary>
        /// </signature>
    }
});

kendo.data.Model = (function() {
var original = kendo.data.Model;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    bind: function() {
        /// <signature>
        /// <summary>
        /// Attaches a handler to an event. More info can be found in the bind section of the
        /// </summary>
        /// </signature>
    },
    editable: function(field) {
        /// <signature>
        /// <summary>
        /// Determines if the specified field is editable or not.
        /// </summary>
        /// <param name="field" type="String" >The field to check.</param>
        /// </signature>
    },
    get: function() {
        /// <signature>
        /// <summary>
        /// Gets the value of the specified field. Inherited from ObservableObject. More info can be found in the get section of the
/// ObservableObject API reference.
        /// </summary>
        /// </signature>
    },
    isNew: function() {
        /// <signature>
        /// <summary>
        /// Checks if the Model is new or not. The id field is used to determine if a model instance is new or existing one.
/// If the value of the field specified is equal to the default value (specifed through the fields configuration) the model is considered as new.
        /// </summary>
        /// </signature>
    },
    set: function() {
        /// <signature>
        /// <summary>
        /// Sets the value of the specified field. Inherited from ObservableObject. More info can be found in the set section of the
/// ObservableObject API reference.
        /// </summary>
        /// </signature>
    },
    toJSON: function() {
        /// <signature>
        /// <summary>
        /// Creates a plain JavaScript object which contains all fields of the Model. Inherited from ObservableObject. More info can be found in the toJSON section of the
/// ObservableObject API reference.
        /// </summary>
        /// </signature>
    },


    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


intellisense.annotate(kendo.data, {
    Node: function() {
        /// <signature>
        /// <summary>Constructor of kendo.data.Node</summary>
        /// </signature>
    }
});

kendo.data.Node = (function() {
var original = kendo.data.Node;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    append: function(model) {
        /// <signature>
        /// <summary>
        /// Appends a new item to the children datasource, and initializes the datasource, if necessary.
        /// </summary>
        /// <param name="model" type="Object" >The data for the new item</param>
        /// </signature>
    },
    level: function() {
        /// <signature>
        /// <summary>
        /// Gets the current nesting level of the Node within the HierarchicalDataSource.
        /// </summary>
        /// </signature>
    },
    load: function() {
        /// <signature>
        /// <summary>
        /// Loads the child nodes in the child datasource, supplying the id of the Node to the request.
        /// </summary>
        /// </signature>
    },
    loaded: function() {
        /// <signature>
        /// <summary>
        /// Gets or sets the loaded flag of the Node. Setting the loaded flag to false allows reloading of child items.
        /// </summary>
        /// </signature>
    },
    parentNode: function() {
        /// <signature>
        /// <summary>
        /// Gets the parent node of the Node, if any.
        /// </summary>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


intellisense.annotate(kendo.data, {
    ObservableArray: function() {
        /// <signature>
        /// <summary>Constructor of kendo.data.ObservableArray</summary>
        /// </signature>
    }
});

kendo.data.ObservableArray = (function() {
var original = kendo.data.ObservableArray;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    bind: function(eventName,handler) {
        /// <signature>
        /// <summary>
        /// Attaches an event handler for the specified event.
        /// </summary>
        /// <param name="eventName" type="String" >The name of the event.</param>
        /// <param name="handler" type="Function" >The function which will be invoked when the event is raised.</param>
        /// </signature>
    },
    join: function(separator) {
        /// <signature>
        /// <summary>
        /// Joins all items of an ObservableArray into a string. Equivalent of
/// Array.prototype.join.
        /// </summary>
        /// <param name="separator" type="String" >Specifies the string to separate each item of the array. If omitted the array items are separated with a comma (,)</param>
        /// </signature>
    },
    parent: function() {
        /// <signature>
        /// <summary>
        /// Returns the parent ObservableObject. If the current ObservableArray is not nested
/// returns undefined.
        /// </summary>
        /// </signature>
    },
    pop: function() {
        /// <signature>
        /// <summary>
        /// Removes the last item from an array and returns that item. Equivalent of
/// Array.prototype.pop.
        /// </summary>
        /// </signature>
    },
    push: function() {
        /// <signature>
        /// <summary>
        /// Appends the given items to the array and returns the new length of the array. Equivalent of
/// Array.prototype.push.
/// The new items are wrapped as ObservableObject if they are complex objects.
        /// </summary>
        /// </signature>
    },
    slice: function(begin,end) {
        /// <signature>
        /// <summary>
        /// Returns a one-level deep copy of a portion of an array. Equivalent of
/// Array.prototype.slice.
/// The result of the slice method is not an instance of ObvservableArray. It is a regular JavaScript Array object.
/// > Important: The slice method does not modify the original ObservableArray.
        /// </summary>
        /// <param name="begin" type="Number" >Zero-based index at which to begin extraction.</param>
        /// <param name="end" type="Number" >Zero-based index at which to end extraction. If end is omitted, slice extracts to the end of the sequence.</param>
        /// </signature>
    },
    splice: function(index,howMany) {
        /// <signature>
        /// <summary>
        /// Changes an ObservableArray, by adding new items while removing old items. Equivalent of
/// Array.prototype.splice
        /// </summary>
        /// <param name="index" type="Number" >Index at which to start changing the array. If negative, will begin that many elements from the end.</param>
        /// <param name="howMany" type="Number" >An integer indicating the number of items to remove. If howMany is 0, no items are removed. In this case, you should specify at least one new item.</param>
        /// <returns type="Array">An Array containing the removed items. The result of the splice method is not an instance of ObvservableArray.</returns>
        /// </signature>
    },
    shift: function() {
        /// <signature>
        /// <summary>
        /// Removes the first item from an ObvservableArray and returns that item. Equivalent of
/// Array.prototype.shift.
        /// </summary>
        /// </signature>
    },
    toJSON: function() {
        /// <signature>
        /// <summary>
        /// Returns a JavaScript Array which represents the contents of the ObservableArray.
        /// </summary>
        /// </signature>
    },
    unshift: function() {
        /// <signature>
        /// <summary>
        /// Adds one or more items to the beginning of an ObservableArray and returns the new length.
/// Equivalent of Array.prototype.unshift.
        /// </summary>
        /// </signature>
    },


    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


intellisense.annotate(kendo.data, {
    ObservableObject: function() {
        /// <signature>
        /// <summary>Constructor of kendo.data.ObservableObject</summary>
        /// </signature>
    }
});

kendo.data.ObservableObject = (function() {
var original = kendo.data.ObservableObject;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    bind: function() {
        /// <signature>
        /// <summary>
        /// Attaches a handler to an event. More info can be found in the bind section of the
/// kendo.Observable API reference.
        /// </summary>
        /// </signature>
    },
    get: function(name) {
        /// <signature>
        /// <summary>
        /// Gets the value of the specified field.
        /// </summary>
        /// <param name="name" type="String" >The name of the field whose value is going to be returned.</param>
        /// <returns type="Object">The value of the specified field.</returns>
        /// </signature>
    },
    parent: function() {
        /// <signature>
        /// <summary>
        /// Returns the parent ObservableObject. If the current ObservableObject is not
/// nested returns undefined;
        /// </summary>
        /// </signature>
    },
    set: function(name,value) {
        /// <signature>
        /// <summary>
        /// Sets the value of the specified field.
        /// </summary>
        /// <param name="name" type="String" >The name of the field whose value is going to be returned.</param>
        /// <param name="value" type="Object" >The new value of the field.</param>
        /// </signature>
    },
    toJSON: function() {
        /// <signature>
        /// <summary>
        /// Creates a plain JavaScript object which contains all fields of the ObservableObject.
        /// </summary>
        /// <returns type="Object">An Object which contains only the fields of the ObservableObject.</returns>
        /// </signature>
    },


    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


intellisense.annotate(kendo.dataviz.ui, {
    Chart: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.ui.Chart</summary>
        /// </signature>
    }
});

kendo.dataviz.ui.Chart = (function() {
var original = kendo.dataviz.ui.Chart;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Chart for safe removal from the DOM.Detaches event handlers and removes data entries in order to avoid memory leaks.
        /// </summary>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Reloads the data and repaints the chart.
        /// </summary>
        /// </signature>
    },
    redraw: function() {
        /// <signature>
        /// <summary>
        /// Repaints the chart using currently loaded data.
        /// </summary>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the dataSource of an existing Chart and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" ></param>
        /// </signature>
    },
    svg: function() {
        /// <signature>
        /// <summary>
        /// Returns the SVG representation of the current chart.
/// The returned string is a self-contained SVG document
/// that can be used as is or converted to other formats
/// using tools like Inkscape and
/// ImageMagick.
/// Both programs provide command-line interface
/// suitable for backend processing.
        /// </summary>
        /// <returns type="String">the SVG representation of the chart.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoChart = function() {
    this.data("kendoChart", new kendo.dataviz.ui.Chart());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoChart: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.dataviz.ui.Chart widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.dataviz.ui.Chart">The kendo.dataviz.ui.Chart instance (if present).</returns>
        /// </signature>
    },
    kendoChart: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.dataviz.ui.Chart widget based the DOM elements that match the selector.
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
        /// &#10;xAxis — Array 
        /// &#10;Scatter charts X-axis configuration options.
/// &#10;Includes all valueAxis options in addition to:
        /// &#10;
        /// &#10;yAxis — Array 
        /// &#10;Scatter charts Y-axis configuration options.
/// &#10;Includes all valueAxis options in addition to:
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.dataviz.ui, {
    LinearGauge: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.ui.LinearGauge</summary>
        /// </signature>
    }
});

kendo.dataviz.ui.LinearGauge = (function() {
var original = kendo.dataviz.ui.LinearGauge;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Gauge for safe removal from the DOM.Detaches event handlers and removes data entries in order to avoid memory leaks.
        /// </summary>
        /// </signature>
    },
    redraw: function() {
        /// <signature>
        /// <summary>
        /// Redraws the gauge.
        /// </summary>
        /// </signature>
    },
    svg: function() {
        /// <signature>
        /// <summary>
        /// Returns the SVG representation of the current gauge.
/// The returned string is a self-contained SVG document
/// that can be used as is or converted to other formats
/// using tools like Inkscape and
/// ImageMagick.
/// Both programs provide command-line interface
/// suitable for backend processing.
        /// </summary>
        /// </signature>
    },
    value: function() {
        /// <signature>
        /// <summary>
        /// Change the value of the gauge.
        /// </summary>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoLinearGauge = function() {
    this.data("kendoLinearGauge", new kendo.dataviz.ui.LinearGauge());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoLinearGauge: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.dataviz.ui.LinearGauge widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.dataviz.ui.LinearGauge">The kendo.dataviz.ui.LinearGauge instance (if present).</returns>
        /// </signature>
    },
    kendoLinearGauge: function(options) {
        /// <signature>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.dataviz.ui, {
    RadialGauge: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.ui.RadialGauge</summary>
        /// </signature>
    }
});

kendo.dataviz.ui.RadialGauge = (function() {
var original = kendo.dataviz.ui.RadialGauge;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Gauge for safe removal from the DOM.Detaches event handlers and removes data entries in order to avoid memory leaks.
        /// </summary>
        /// </signature>
    },
    redraw: function() {
        /// <signature>
        /// <summary>
        /// Redraws the gauge.
        /// </summary>
        /// </signature>
    },
    svg: function() {
        /// <signature>
        /// <summary>
        /// Returns the SVG representation of the current gauge.
/// The returned string is a self-contained SVG document
/// that can be used as is or converted to other formats
/// using tools like Inkscape and
/// ImageMagick.
/// Both programs provide command-line interface
/// suitable for backend processing.
        /// </summary>
        /// </signature>
    },
    value: function() {
        /// <signature>
        /// <summary>
        /// Change the value of the gauge.
        /// </summary>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoRadialGauge = function() {
    this.data("kendoRadialGauge", new kendo.dataviz.ui.RadialGauge());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoRadialGauge: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.dataviz.ui.RadialGauge widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.dataviz.ui.RadialGauge">The kendo.dataviz.ui.RadialGauge instance (if present).</returns>
        /// </signature>
    },
    kendoRadialGauge: function(options) {
        /// <signature>
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
        /// &#10;rangeSize — Number 
        /// &#10;The width of the range indicators.
        /// &#10;
        /// &#10;rangeDistance — Number 
        /// &#10;The distance from the range indicators to the ticks.
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
        /// </signature>
    }
});

intellisense.annotate(kendo.dataviz.ui, {
    Sparkline: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.ui.Sparkline</summary>
        /// </signature>
    }
});

kendo.dataviz.ui.Sparkline = (function() {
var original = kendo.dataviz.ui.Sparkline;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Sparkline for safe removal from the DOM.Detaches event handlers and removes data entries in order to avoid memory leaks.
        /// </summary>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Reloads the data and repaints the chart.
        /// </summary>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the dataSource of an existing Chart and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" ></param>
        /// </signature>
    },
    svg: function() {
        /// <signature>
        /// <summary>
        /// Returns the SVG representation of the current chart.
/// The returned string is a self-contained SVG document
/// that can be used as is or converted to other formats
/// using tools like Inkscape and
/// ImageMagick.
/// Both programs provide command-line interface
/// suitable for backend processing.
        /// </summary>
        /// <returns type="String">the SVG representation of the sparkline.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoSparkline = function() {
    this.data("kendoSparkline", new kendo.dataviz.ui.Sparkline());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoSparkline: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.dataviz.ui.Sparkline widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.dataviz.ui.Sparkline">The kendo.dataviz.ui.Sparkline instance (if present).</returns>
        /// </signature>
    },
    kendoSparkline: function(options) {
        /// <signature>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.dataviz.ui, {
    StockChart: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.ui.StockChart</summary>
        /// </signature>
    }
});

kendo.dataviz.ui.StockChart = (function() {
var original = kendo.dataviz.ui.StockChart;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoStockChart = function() {
    this.data("kendoStockChart", new kendo.dataviz.ui.StockChart());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoStockChart: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.dataviz.ui.StockChart widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.dataviz.ui.StockChart">The kendo.dataviz.ui.StockChart instance (if present).</returns>
        /// </signature>
    },
    kendoStockChart: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.dataviz.ui.StockChart widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;dateField — String (default: "date")
        /// &#10;The field containing the point date.
/// &#10;It is used as a default field for all date axes, including the navigator pane.The data item field value must be either:
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
        /// &#10;xAxis — Array 
        /// &#10;Scatter charts X-axis configuration options.
/// &#10;Includes all valueAxis options in addition to:
        /// &#10;
        /// &#10;yAxis — Array 
        /// &#10;Scatter charts Y-axis configuration options.
/// &#10;Includes all valueAxis options in addition to:
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    Widget: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.Widget</summary>
        /// </signature>
    }
});

kendo.mobile.ui.Widget = (function() {
var original = kendo.mobile.ui.Widget;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    view: function() {
        /// <signature>
        /// <summary>
        /// Returns the kendo.mobile.ui.View which contains the widget.
        /// </summary>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoWidget = function() {
    this.data("kendoWidget", new kendo.mobile.ui.Widget());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoWidget: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.Widget widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Widget">The kendo.mobile.ui.Widget instance (if present).</returns>
        /// </signature>
    },
    kendoWidget: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.Widget widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Draggable: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Draggable</summary>
        /// </signature>
    }
});

kendo.ui.Draggable = (function() {
var original = kendo.ui.Draggable;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoDraggable = function() {
    this.data("kendoDraggable", new kendo.ui.Draggable());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoDraggable: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Draggable widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Draggable">The kendo.ui.Draggable instance (if present).</returns>
        /// </signature>
    },
    kendoDraggable: function(options) {
        /// <signature>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    DropTarget: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.DropTarget</summary>
        /// </signature>
    }
});

kendo.ui.DropTarget = (function() {
var original = kendo.ui.DropTarget;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroyGroup: function() {
        /// <signature>
        /// <summary>
        /// Destroys all DropTarget instances from the group with the given name.
        /// </summary>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoDropTarget = function() {
    this.data("kendoDropTarget", new kendo.ui.DropTarget());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoDropTarget: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.DropTarget widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.DropTarget">The kendo.ui.DropTarget instance (if present).</returns>
        /// </signature>
    },
    kendoDropTarget: function(options) {
        /// <signature>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    DropTargetArea: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.DropTargetArea</summary>
        /// </signature>
    }
});

kendo.ui.DropTargetArea = (function() {
var original = kendo.ui.DropTargetArea;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoDropTargetArea = function() {
    this.data("kendoDropTargetArea", new kendo.ui.DropTargetArea());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoDropTargetArea: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.DropTargetArea widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.DropTargetArea">The kendo.ui.DropTargetArea instance (if present).</returns>
        /// </signature>
    },
    kendoDropTargetArea: function(options) {
        /// <signature>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Validator: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Validator</summary>
        /// </signature>
    }
});

kendo.ui.Validator = (function() {
var original = kendo.ui.Validator;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    errors: function() {
        /// <signature>
        /// <summary>
        /// Get the error messages if any.
        /// </summary>
        /// <returns type="Array">Messages for the failed validation rules.</returns>
        /// </signature>
    },
    hideMessages: function() {
        /// <signature>
        /// <summary>
        /// Hides the validation messages.
        /// </summary>
        /// </signature>
    },
    validate: function() {
        /// <signature>
        /// <summary>
        /// Validates the input element(s) against the declared validation rules.
        /// </summary>
        /// <returns type="Boolean">true if all validation rules passed successfully.Note that if a HTML form element is set as validation container, the form submits will be automatically prevented if validation fails.</returns>
        /// </signature>
    },
    validateInput: function(input) {
        /// <signature>
        /// <summary>
        /// Validates the input element against the declared validation rules.
        /// </summary>
        /// <param name="input" type="Element" >Input element to be validated.</param>
        /// <returns type="Boolean">true if all validation rules passed successfully.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoValidator = function() {
    this.data("kendoValidator", new kendo.ui.Validator());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoValidator: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Validator widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Validator">The kendo.ui.Validator instance (if present).</returns>
        /// </signature>
    },
    kendoValidator: function(options) {
        /// <signature>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Widget: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Widget</summary>
        /// </signature>
    }
});

kendo.ui.Widget = (function() {
var original = kendo.ui.Widget;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    bind: function() {
        /// <signature>
        /// <summary>
        /// Attaches a handler to an event. More info can be found in the bind section of the
/// kendo.Observable API reference.
        /// </summary>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the widget for safe removal from the DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    one: function() {
        /// <signature>
        /// <summary>
        /// Attaches a handler to an event. The handler is executed only once. More info can be found in the one section of the
/// kendo.Observable API reference.
        /// </summary>
        /// </signature>
    },
    trigger: function() {
        /// <signature>
        /// <summary>
        /// Executes all handlers attached to the given event. More info can be found in the trigger section of the
/// kendo.Observable API reference.
        /// </summary>
        /// </signature>
    },
    unbind: function() {
        /// <signature>
        /// <summary>
        /// Remove a previously attached event handler. More info can be found in the unbind section of the
/// kendo.Observable API reference.
        /// </summary>
        /// </signature>
    }



});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoWidget = function() {
    this.data("kendoWidget", new kendo.ui.Widget());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoWidget: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Widget widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Widget">The kendo.ui.Widget instance (if present).</returns>
        /// </signature>
    },
    kendoWidget: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.Widget widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});
