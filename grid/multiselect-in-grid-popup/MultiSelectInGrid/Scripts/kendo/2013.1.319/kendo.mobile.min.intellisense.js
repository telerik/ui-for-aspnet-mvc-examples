

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


intellisense.annotate(kendo.mobile, {
    Application: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.Application</summary>
        /// </signature>
    }
});

kendo.mobile.Application = (function() {
var original = kendo.mobile.Application;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    hideLoading: function() {
        /// <signature>
        /// <summary>
        /// Hide the loading animation.
        /// </summary>
        /// </signature>
    },
    navigate: function(url,transition) {
        /// <signature>
        /// <summary>
        /// Navigate to local or to remote view.
        /// </summary>
        /// <param name="url" type="String" >The id or url of the view.</param>
        /// <param name="transition" type="String" >The transition to apply when navigating. See View Transitions section for more information.</param>
        /// </signature>
    },
    scroller: function() {
        /// <signature>
        /// <summary>
        /// Get a reference to the current view's scroller widget instance.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Scroller">the scroller widget instance.</returns>
        /// </signature>
    },
    showLoading: function() {
        /// <signature>
        /// <summary>
        /// Show the loading animation.
        /// </summary>
        /// </signature>
    },
    view: function() {
        /// <signature>
        /// <summary>
        /// Get a reference to the current view.
        /// </summary>
        /// <returns type="kendo.mobile.ui.View">the view instance.</returns>
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


intellisense.annotate(kendo.mobile.ui, {
    ActionSheet: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.ActionSheet</summary>
        /// </signature>
    }
});

kendo.mobile.ui.ActionSheet = (function() {
var original = kendo.mobile.ui.ActionSheet;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    close: function() {
        /// <signature>
        /// <summary>
        /// Close the ActionSheet.
        /// </summary>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the ActionSheet for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    open: function(target,context) {
        /// <signature>
        /// <summary>
        /// Open the ActionSheet.
        /// </summary>
        /// <param name="target" type="jQuery" >(optional) The target element of the ActionSheet, available in the callback methods.Notice The target element is mandatory on tablets, as the ActionSheet widget positions itself relative to opening element when a tablet is detected.</param>
        /// <param name="context" type="Object" >(optional) The context of the ActionSheet, available in the callback methods.</param>
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


jQuery.fn.kendoActionSheet = function() {
    this.data("kendoActionSheet", new kendo.mobile.ui.ActionSheet());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoActionSheet: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.ActionSheet widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.ActionSheet">The kendo.mobile.ui.ActionSheet instance (if present).</returns>
        /// </signature>
    },
    kendoActionSheet: function(options) {
        /// <signature>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    BackButton: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.BackButton</summary>
        /// </signature>
    }
});

kendo.mobile.ui.BackButton = (function() {
var original = kendo.mobile.ui.BackButton;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the BackButton for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
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


jQuery.fn.kendoBackButton = function() {
    this.data("kendoBackButton", new kendo.mobile.ui.BackButton());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoBackButton: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.BackButton widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.BackButton">The kendo.mobile.ui.BackButton instance (if present).</returns>
        /// </signature>
    },
    kendoBackButton: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.BackButton widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    Button: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.Button</summary>
        /// </signature>
    }
});

kendo.mobile.ui.Button = (function() {
var original = kendo.mobile.ui.Button;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Button for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
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


jQuery.fn.kendoButton = function() {
    this.data("kendoButton", new kendo.mobile.ui.Button());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoButton: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.Button widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Button">The kendo.mobile.ui.Button instance (if present).</returns>
        /// </signature>
    },
    kendoButton: function(options) {
        /// <signature>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    ButtonGroup: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.ButtonGroup</summary>
        /// </signature>
    }
});

kendo.mobile.ui.ButtonGroup = (function() {
var original = kendo.mobile.ui.ButtonGroup;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    current: function() {
        /// <signature>
        /// <summary>
        /// Get the currently selected Button.
        /// </summary>
        /// <returns type="jQuery">the jQuery object representing the currently selected button.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the ButtonGroup for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    select: function(li) {
        /// <signature>
        /// <summary>
        /// Select a Button.
        /// </summary>
        /// <param name="li" type="Object" >LI element or index of the Button.</param>
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


jQuery.fn.kendoButtonGroup = function() {
    this.data("kendoButtonGroup", new kendo.mobile.ui.ButtonGroup());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoButtonGroup: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.ButtonGroup widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.ButtonGroup">The kendo.mobile.ui.ButtonGroup instance (if present).</returns>
        /// </signature>
    },
    kendoButtonGroup: function(options) {
        /// <signature>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    DetailButton: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.DetailButton</summary>
        /// </signature>
    }
});

kendo.mobile.ui.DetailButton = (function() {
var original = kendo.mobile.ui.DetailButton;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the DetailButton for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
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


jQuery.fn.kendoDetailButton = function() {
    this.data("kendoDetailButton", new kendo.mobile.ui.DetailButton());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoDetailButton: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.DetailButton widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.DetailButton">The kendo.mobile.ui.DetailButton instance (if present).</returns>
        /// </signature>
    },
    kendoDetailButton: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.DetailButton widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    Layout: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.Layout</summary>
        /// </signature>
    }
});

kendo.mobile.ui.Layout = (function() {
var original = kendo.mobile.ui.Layout;
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


jQuery.fn.kendoLayout = function() {
    this.data("kendoLayout", new kendo.mobile.ui.Layout());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoLayout: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.Layout widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Layout">The kendo.mobile.ui.Layout instance (if present).</returns>
        /// </signature>
    },
    kendoLayout: function(options) {
        /// <signature>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    ListView: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.ListView</summary>
        /// </signature>
    }
});

kendo.mobile.ui.ListView = (function() {
var original = kendo.mobile.ui.ListView;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the ListView for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    items: function() {
        /// <signature>
        /// <summary>
        /// Get the listview DOM element items
        /// </summary>
        /// <returns type="jQuery">The listview DOM element items</returns>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// repaints the listview (works only in databound mode).
        /// </summary>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the dataSource of an existing ListView and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" ></param>
        /// </signature>
    },
    stopEndlessScrolling: function() {
        /// <signature>
        /// <summary>
        /// Stops the 'endless scroll' of the ListView.
        /// </summary>
        /// </signature>
    },
    stopLoadMore: function() {
        /// <signature>
        /// <summary>
        /// Stops the 'load more' functionality of the ListView.
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


jQuery.fn.kendoListView = function() {
    this.data("kendoListView", new kendo.mobile.ui.ListView());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoListView: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.ListView widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.ListView">The kendo.mobile.ui.ListView instance (if present).</returns>
        /// </signature>
    },
    kendoListView: function(options) {
        /// <signature>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    Loader: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.Loader</summary>
        /// </signature>
    }
});

kendo.mobile.ui.Loader = (function() {
var original = kendo.mobile.ui.Loader;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    hide: function() {
        /// <signature>
        /// <summary>
        /// Hide the loading animation.
        /// </summary>
        /// </signature>
    },
    show: function() {
        /// <signature>
        /// <summary>
        /// Show the loading animation.
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


jQuery.fn.kendoLoader = function() {
    this.data("kendoLoader", new kendo.mobile.ui.Loader());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoLoader: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.Loader widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Loader">The kendo.mobile.ui.Loader instance (if present).</returns>
        /// </signature>
    },
    kendoLoader: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.Loader widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    ModalView: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.ModalView</summary>
        /// </signature>
    }
});

kendo.mobile.ui.ModalView = (function() {
var original = kendo.mobile.ui.ModalView;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    close: function() {
        /// <signature>
        /// <summary>
        /// Close the ModalView
        /// </summary>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the ModalView for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    open: function(target) {
        /// <signature>
        /// <summary>
        /// Open the ModalView
        /// </summary>
        /// <param name="target" type="jQuery" >(optional) The target of the ModalView</param>
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


jQuery.fn.kendoModalView = function() {
    this.data("kendoModalView", new kendo.mobile.ui.ModalView());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoModalView: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.ModalView widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.ModalView">The kendo.mobile.ui.ModalView instance (if present).</returns>
        /// </signature>
    },
    kendoModalView: function(options) {
        /// <signature>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    NavBar: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.NavBar</summary>
        /// </signature>
    }
});

kendo.mobile.ui.NavBar = (function() {
var original = kendo.mobile.ui.NavBar;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the NavBar for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    title: function(value) {
        /// <signature>
        /// <summary>
        /// Update the title element text. The title element is specified by setting the role data attribute to view-title.
        /// </summary>
        /// <param name="value" type="String" >The text of title</param>
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


jQuery.fn.kendoNavBar = function() {
    this.data("kendoNavBar", new kendo.mobile.ui.NavBar());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoNavBar: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.NavBar widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.NavBar">The kendo.mobile.ui.NavBar instance (if present).</returns>
        /// </signature>
    },
    kendoNavBar: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.NavBar widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    Pane: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.Pane</summary>
        /// </signature>
    }
});

kendo.mobile.ui.Pane = (function() {
var original = kendo.mobile.ui.Pane;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Pane for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    hideLoading: function() {
        /// <signature>
        /// <summary>
        /// Hide the loading animation.
        /// </summary>
        /// </signature>
    },
    navigate: function(url,transition) {
        /// <signature>
        /// <summary>
        /// Navigate the local or remote view.
        /// </summary>
        /// <param name="url" type="String" >The id or URL of the view.</param>
        /// <param name="transition" type="String" >The transition to apply when navigating. See View Transitions section for more information.</param>
        /// </signature>
    },
    showLoading: function() {
        /// <signature>
        /// <summary>
        /// Show the loading animation.
        /// </summary>
        /// </signature>
    },
    view: function() {
        /// <signature>
        /// <summary>
        /// Get a reference to the current view.
        /// </summary>
        /// <returns type="kendo.mobile.ui.View">the view instance.</returns>
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


jQuery.fn.kendoPane = function() {
    this.data("kendoPane", new kendo.mobile.ui.Pane());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoPane: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.Pane widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Pane">The kendo.mobile.ui.Pane instance (if present).</returns>
        /// </signature>
    },
    kendoPane: function(options) {
        /// <signature>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    PopOver: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.PopOver</summary>
        /// </signature>
    }
});

kendo.mobile.ui.PopOver = (function() {
var original = kendo.mobile.ui.PopOver;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    close: function() {
        /// <signature>
        /// <summary>
        /// Close the popover.
        /// </summary>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the PopOver for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    open: function(target) {
        /// <signature>
        /// <summary>
        /// Open the PopOver.
        /// </summary>
        /// <param name="target" type="jQuery" >The target of the Popover, to which the visual arrow will point to. This parameter is required for a tablet OS.</param>
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


jQuery.fn.kendoPopOver = function() {
    this.data("kendoPopOver", new kendo.mobile.ui.PopOver());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoPopOver: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.PopOver widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.PopOver">The kendo.mobile.ui.PopOver instance (if present).</returns>
        /// </signature>
    },
    kendoPopOver: function(options) {
        /// <signature>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    ScrollView: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.ScrollView</summary>
        /// </signature>
    }
});

kendo.mobile.ui.ScrollView = (function() {
var original = kendo.mobile.ui.ScrollView;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    content: function(content) {
        /// <signature>
        /// <summary>
        /// Update the scrollview HTML content
        /// </summary>
        /// <param name="content" type="Object" >the new scrollView content.</param>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the ScrollView for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Redraw the mobile ScrollView pager. Called automatically on device orientation change event.
        /// </summary>
        /// </signature>
    },
    scrollTo: function(page,instant) {
        /// <signature>
        /// <summary>
        /// Scroll to the given page. Pages are zero-based indexed.
        /// </summary>
        /// <param name="page" type="Number" >The page to scroll to.</param>
        /// <param name="instant" type="Boolean" >If set to true, the scrollview will jump instantly to the given page without any animation effects.</param>
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


jQuery.fn.kendoScrollView = function() {
    this.data("kendoScrollView", new kendo.mobile.ui.ScrollView());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoScrollView: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.ScrollView widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.ScrollView">The kendo.mobile.ui.ScrollView instance (if present).</returns>
        /// </signature>
    },
    kendoScrollView: function(options) {
        /// <signature>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    Scroller: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.Scroller</summary>
        /// </signature>
    }
});

kendo.mobile.ui.Scroller = (function() {
var original = kendo.mobile.ui.Scroller;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Scroller for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    pullHandled: function() {
        /// <signature>
        /// <summary>
        /// Indicate that the pull event is handled (i.e. data from the server has been retrieved).
        /// </summary>
        /// </signature>
    },
    reset: function() {
        /// <signature>
        /// <summary>
        /// Scrolls the container to the top.
        /// </summary>
        /// </signature>
    },
    scrollHeight: function() {
        /// <signature>
        /// <summary>
        /// Returns the height in pixels of the scroller content.
        /// </summary>
        /// </signature>
    },
    scrollTo: function(x,y) {
        /// <signature>
        /// <summary>
        /// Scrolls the container to the specified location. The arguments should be negative numbers.
        /// </summary>
        /// <param name="x" type="Number" >The horizontal offset in pixels to scroll to.</param>
        /// <param name="y" type="Number" >The vertical offset in pixels to scroll to.</param>
        /// </signature>
    },
    scrollWidth: function() {
        /// <signature>
        /// <summary>
        /// Returns the width in pixels of the scroller content.
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


jQuery.fn.kendoScroller = function() {
    this.data("kendoScroller", new kendo.mobile.ui.Scroller());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoScroller: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.Scroller widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Scroller">The kendo.mobile.ui.Scroller instance (if present).</returns>
        /// </signature>
    },
    kendoScroller: function(options) {
        /// <signature>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    SplitView: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.SplitView</summary>
        /// </signature>
    }
});

kendo.mobile.ui.SplitView = (function() {
var original = kendo.mobile.ui.SplitView;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the SplitView for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
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


jQuery.fn.kendoSplitView = function() {
    this.data("kendoSplitView", new kendo.mobile.ui.SplitView());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoSplitView: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.SplitView widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.SplitView">The kendo.mobile.ui.SplitView instance (if present).</returns>
        /// </signature>
    },
    kendoSplitView: function(options) {
        /// <signature>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    Swipe: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.Swipe</summary>
        /// </signature>
    }
});

kendo.mobile.ui.Swipe = (function() {
var original = kendo.mobile.ui.Swipe;
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


jQuery.fn.kendoSwipe = function() {
    this.data("kendoSwipe", new kendo.mobile.ui.Swipe());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoSwipe: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.Swipe widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Swipe">The kendo.mobile.ui.Swipe instance (if present).</returns>
        /// </signature>
    },
    kendoSwipe: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.Swipe widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    Switch: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.Switch</summary>
        /// </signature>
    }
});

kendo.mobile.ui.Switch = (function() {
var original = kendo.mobile.ui.Switch;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    check: function(check) {
        /// <signature>
        /// <summary>
        /// Get/Set the checked state of the widget.
        /// </summary>
        /// <param name="check" type="Boolean" >Whether to turn the widget on or off.</param>
        /// <returns type="Boolean">The checked state of the widget.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Switch for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    toggle: function() {
        /// <signature>
        /// <summary>
        /// Toggle the checked state of the widget.
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


jQuery.fn.kendoSwitch = function() {
    this.data("kendoSwitch", new kendo.mobile.ui.Switch());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoSwitch: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.Switch widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Switch">The kendo.mobile.ui.Switch instance (if present).</returns>
        /// </signature>
    },
    kendoSwitch: function(options) {
        /// <signature>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    TabStrip: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.TabStrip</summary>
        /// </signature>
    }
});

kendo.mobile.ui.TabStrip = (function() {
var original = kendo.mobile.ui.TabStrip;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    currentItem: function() {
        /// <signature>
        /// <summary>
        /// Get the currently selected tab DOM element.
        /// </summary>
        /// <returns type="jQuery">the currently selected tab DOM element.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the TabStrip for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    switchTo: function(url) {
        /// <signature>
        /// <summary>
        /// Set the mobile TabStrip active tab to the tab with the specified url. This method doesn't change the current View. To change the View, use Application's navigate method instead.
        /// </summary>
        /// <param name="url" type="String" >The url of the tab.</param>
        /// </signature>
    },
    clear: function() {
        /// <signature>
        /// <summary>
        /// Clear the currently selected tab.
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


jQuery.fn.kendoTabStrip = function() {
    this.data("kendoTabStrip", new kendo.mobile.ui.TabStrip());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoTabStrip: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.TabStrip widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.TabStrip">The kendo.mobile.ui.TabStrip instance (if present).</returns>
        /// </signature>
    },
    kendoTabStrip: function(options) {
        /// <signature>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    View: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.View</summary>
        /// </signature>
    }
});

kendo.mobile.ui.View = (function() {
var original = kendo.mobile.ui.View;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the View for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    contentElement: function() {
        /// <signature>
        /// <summary>
        /// Retrieves the current content holder of the View - this is the content element if the View is stretched or the scroll container otherwise.
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


jQuery.fn.kendoView = function() {
    this.data("kendoView", new kendo.mobile.ui.View());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoView: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.View widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.View">The kendo.mobile.ui.View instance (if present).</returns>
        /// </signature>
    },
    kendoView: function(options) {
        /// <signature>
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
    Touch: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Touch</summary>
        /// </signature>
    }
});

kendo.ui.Touch = (function() {
var original = kendo.ui.Touch;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Touch for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
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


jQuery.fn.kendoTouch = function() {
    this.data("kendoTouch", new kendo.ui.Touch());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoTouch: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Touch widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Touch">The kendo.ui.Touch instance (if present).</returns>
        /// </signature>
    },
    kendoTouch: function(options) {
        /// <signature>
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
