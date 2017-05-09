

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
        /// Appends a data item to the data source.
        /// </summary>
        /// <param name="model" type="Object" >Either a kendo.data.Model instance or JavaScript object containing the data item field values.</param>
        /// <returns type="kendo.data.Model">the data item which is inserted.</returns>
        /// </signature>
    },
    aggregate: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the aggregate configuration.
        /// </summary>
        /// <param name="value" type="Object" >The aggregate configuration. Accepts the same values as the aggregate option.</param>
        /// <returns type="Array">the current aggregate configuration.</returns>
        /// </signature>
    },
    aggregates: function() {
        /// <signature>
        /// <summary>
        /// Returns the aggregate results.
        /// </summary>
        /// <returns type="Object">the aggregate results. There is a key for every aggregated field.</returns>
        /// </signature>
    },
    at: function(index) {
        /// <signature>
        /// <summary>
        /// Returns the data item at the specified index. The index is zero-based.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index of the data item.</param>
        /// <returns type="kendo.data.ObservableObject">the data item at the specified index. Returns undefined if a data item is not found at the specified index.Returns a kendo.data.Model instance if the schema.model option is set.</returns>
        /// </signature>
    },
    cancelChanges: function(model) {
        /// <signature>
        /// <summary>
        /// Cancels any pending changes in the data source. Deleted data items are restored, new data items are removed and updated data items are restored to their initial state.
        /// </summary>
        /// <param name="model" type="kendo.data.Model" >The optional data item (model). If specified only the changes of this data item will be discarded. If omitted all changes will be discarded.</param>
        /// </signature>
    },
    data: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the data items of the data source.If the data source is bound to a remote service (via the transport option) the data method will return the service response.
/// Every item from the response is wrapped in a kendo.data.ObservableObject or kendo.data.Model (if the schema.model option is set).If the data source is bound to a JavaScript array (via the data option) the data method will return the items of that array.
/// Every item from the array is wrapped in a kendo.data.ObservableObject or kendo.data.Model (if the schema.model option is set).If the data source is grouped (via the group option or the group method) and the serverGrouping is set to true
/// the data method will return the group items.
        /// </summary>
        /// <param name="value" type="Object" >The data items which will replace the current ones in the data source. If omitted the current data items will be returned.</param>
        /// <returns type="kendo.data.ObservableArray">the data items of the data source. Returns empty array if the data source hasn't been populated with data items via the read, fetch or query methods.</returns>
        /// </signature>
    },
    fetch: function(callback) {
        /// <signature>
        /// <summary>
        /// Reads the data items from a remote service (if the transport option is set) or from a JavaScript array (if the data option is set).
        /// </summary>
        /// <param name="callback" type="Function" >The optional function which is executed when the remote request is finished.  The function context (available via the this keyword) will be set to the data source instance.</param>
        /// </signature>
    },
    filter: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the filter configuration.
        /// </summary>
        /// <param name="value" type="Object" >The filter configuration. Accepts the same values as the filter option.</param>
        /// <returns type="Object">the current filter configuration.</returns>
        /// </signature>
    },
    get: function(id) {
        /// <signature>
        /// <summary>
        /// Gets the data item (model) with the specified id.
        /// </summary>
        /// <param name="id" type="Object" >The id of the model to look for.</param>
        /// <returns type="kendo.data.Model">the model instance. Returns undefined if a model with the specified id is not found.</returns>
        /// </signature>
    },
    getByUid: function(uid) {
        /// <signature>
        /// <summary>
        /// Gets the data item (model) with the specified uid.
        /// </summary>
        /// <param name="uid" type="String" >The uid of the model to look for.</param>
        /// <returns type="kendo.data.ObservableObject">the model instance. Returns undefined if a model with the specified uid is not found.</returns>
        /// </signature>
    },
    group: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the grouping configuration.
        /// </summary>
        /// <param name="value" type="Object" >The grouping configuration. Accepts the same values as the group option.</param>
        /// <returns type="Array">the current grouping configuration.</returns>
        /// </signature>
    },
    hasChanges: function() {
        /// <signature>
        /// <summary>
        /// Cheks if the data itams have changed.
        /// </summary>
        /// <returns type="Boolean">returns true if the data items have changed. Otherwise, false.</returns>
        /// </signature>
    },
    indexOf: function(dataItem) {
        /// <signature>
        /// <summary>
        /// Gets the index of the specified data item.
        /// </summary>
        /// <param name="dataItem" type="kendo.data.ObservableObject" >The target data item.</param>
        /// <returns type="Number">the index of the specified data item. Returns -1 if the data item is not found.</returns>
        /// </signature>
    },
    insert: function(index,model) {
        /// <signature>
        /// <summary>
        /// Inserts a data item in the data source at the specified index.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index at which the data item will be inserted.</param>
        /// <param name="model" type="Object" >Either a kendo.data.Model instance or JavaScript object containing the field values.</param>
        /// <returns type="kendo.data.Model">the data item which is inserted.</returns>
        /// </signature>
    },
    page: function(page) {
        /// <signature>
        /// <summary>
        /// Gets or sets the current page.
        /// </summary>
        /// <param name="page" type="Number" >The new page.</param>
        /// <returns type="Number">the current page.</returns>
        /// </signature>
    },
    pageSize: function(size) {
        /// <signature>
        /// <summary>
        /// Gets or sets the current page size.
        /// </summary>
        /// <param name="size" type="Number" >The new page size.</param>
        /// <returns type="Number">the current page size.</returns>
        /// </signature>
    },
    query: function(options) {
        /// <signature>
        /// <summary>
        /// Executes the specified query over the data items. Makes a HTTP request if bound to a remote service.
        /// </summary>
        /// <param name="options" type="" >The query options which should be applied.</param>
        /// </signature>
    },
    read: function(data) {
        /// <signature>
        /// <summary>
        /// Reads data items from a remote service (if the transport option is set) or from a JavaScript array (if the data option is set).
        /// </summary>
        /// <param name="data" type="Object" >Optional data to pass to the remote service.</param>
        /// </signature>
    },
    remove: function(model) {
        /// <signature>
        /// <summary>
        /// Removes the specified data item from the data source.
        /// </summary>
        /// <param name="model" type="kendo.data.Model" >The data item which should be removed.</param>
        /// </signature>
    },
    sort: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the sort order which will be applied over the data items.
        /// </summary>
        /// <param name="value" type="Object" >The sort configuration. Accepts the same values as the sort option.</param>
        /// <returns type="Array">the current sort configuration.</returns>
        /// </signature>
    },
    sync: function() {
        /// <signature>
        /// <summary>
        /// Saves any data item changes.The sync method will request the remote service if:
        /// </summary>
        /// </signature>
    },
    total: function() {
        /// <signature>
        /// <summary>
        /// Gets the total number of data items. Uses schema.total if the transport.read option is set.
        /// </summary>
        /// <returns type="Number">the total number of data items. Returns the length of the array returned by the data method if schema.total or transport.read are not set.Returns 0 if the data source hasn't been populated with data items via the read, fetch or query methods.</returns>
        /// </signature>
    },
    totalPages: function() {
        /// <signature>
        /// <summary>
        /// Gets the number of available pages.
        /// </summary>
        /// <returns type="Number">the available pages.</returns>
        /// </signature>
    },
    view: function() {
        /// <signature>
        /// <summary>
        /// Returns the data items which correspond to the current page, filter, sort and group configuration.To ensure that data is available this method should be used within the change event handler or the fetch method.
        /// </summary>
        /// <returns type="kendo.data.ObservableArray">the data items. Returns groups if the data items are grouped (via the group option or the group method).</returns>
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
        /// Attaches a handler to an event. More info can be found in the bind section of the Observable API reference.
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


intellisense.annotate(kendo.data, {
    SchedulerDataSource: function() {
        /// <signature>
        /// <summary>Constructor of kendo.data.SchedulerDataSource</summary>
        /// </signature>
    }
});

kendo.data.SchedulerDataSource = (function() {
var original = kendo.data.SchedulerDataSource;
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
    SchedulerEvent: function() {
        /// <signature>
        /// <summary>Constructor of kendo.data.SchedulerEvent</summary>
        /// </signature>
    }
});

kendo.data.SchedulerEvent = (function() {
var original = kendo.data.SchedulerEvent;
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


intellisense.annotate(kendo.dataviz.ui, {
    Barcode: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.ui.Barcode</summary>
        /// </signature>
    }
});

kendo.dataviz.ui.Barcode = (function() {
var original = kendo.dataviz.ui.Barcode;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    imageDataURL: function() {
        /// <signature>
        /// <summary>
        /// Returns a PNG image of the barcode encoded as a Data URL.
        /// </summary>
        /// <returns type="String">A data URL with image/png MIME type. Will be null if the browser does not support the canvas element.</returns>
        /// </signature>
    },
    redraw: function() {
        /// <signature>
        /// <summary>
        /// Redraws the barcode.
        /// </summary>
        /// </signature>
    },
    svg: function() {
        /// <signature>
        /// <summary>
        /// Returns the SVG representation of the barcode. The returned string is a self-contained SVG document that can be used as is or converted to other formats using tools like Inkscape and
/// ImageMagick. Both programs provide command-line interface suitable for server-side processing.
        /// </summary>
        /// <returns type="String">the SVG representation of the barcode.</returns>
        /// </signature>
    },
    value: function(value) {
        /// <signature>
        /// <summary>
        /// Gets/Sets the value of the barcode.
        /// </summary>
        /// <param name="value" type="Object" >The value to set.</param>
        /// <returns type="String">The value of the barcode.</returns>
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


jQuery.fn.kendoBarcode = function() {
    this.data("kendoBarcode", new kendo.dataviz.ui.Barcode());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoBarcode: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.dataviz.ui.Barcode widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.dataviz.ui.Barcode">The kendo.dataviz.ui.Barcode instance (if present).</returns>
        /// </signature>
    },
    kendoBarcode: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.dataviz.ui.Barcode widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
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
        /// &#10;renderAs — String (default: "canvas")
        /// &#10;Sets the preferred rendering engine.
/// &#10;If it is not supported by the browser, the Barcode will switch to the first available mode.The supported values are:
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
        /// </signature>
    }
});

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
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    redraw: function() {
        /// <signature>
        /// <summary>
        /// Repaints the chart using the currently loaded data.
        /// </summary>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Reloads the data and renders the chart.
        /// </summary>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the data source of the widget.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" >The data source to which the widget should be bound.</param>
        /// </signature>
    },
    svg: function() {
        /// <signature>
        /// <summary>
        /// Returns the SVG representation of the chart.
/// The returned string is a self-contained SVG document that can be used as is or
/// converted to other formats using tools like Inkscape and
/// ImageMagick.
/// Both programs provide command-line interface suitable for server-side processing.
        /// </summary>
        /// <returns type="String">the SVG representation of the chart.</returns>
        /// </signature>
    },
    imageDataURL: function() {
        /// <signature>
        /// <summary>
        /// Returns a PNG image of the chart encoded as a Data URL.
        /// </summary>
        /// <returns type="String">A data URL with image/png MIME type. Will be null if the browser does not support the canvas element.</returns>
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
        /// Returns the SVG representation of the gauge.
/// The returned string is a self-contained SVG document that can be used as is or
/// converted to other formats using tools like Inkscape and
/// ImageMagick.
/// Both programs provide command-line interface suitable for server-side processing.
        /// </summary>
        /// </signature>
    },
    imageDataURL: function() {
        /// <signature>
        /// <summary>
        /// Returns a PNG image of the gauge encoded as a Data URL.
        /// </summary>
        /// <returns type="String">A data URL with image/png MIME type. Will be null if the browser does not support the canvas element.</returns>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.dataviz.ui, {
    QRCode: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.ui.QRCode</summary>
        /// </signature>
    }
});

kendo.dataviz.ui.QRCode = (function() {
var original = kendo.dataviz.ui.QRCode;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the QRCode for safe removal from the DOM.Removes data entries in order to avoid memory leaks.
        /// </summary>
        /// </signature>
    },
    imageDataURL: function() {
        /// <signature>
        /// <summary>
        /// Returns a PNG image of the qrcode encoded as a Data URL.
        /// </summary>
        /// <returns type="String">A data URL with image/png MIME type. Will be null if the browser does not support the canvas element.</returns>
        /// </signature>
    },
    redraw: function() {
        /// <signature>
        /// <summary>
        /// Redraws the QR code using the current value and options.
        /// </summary>
        /// </signature>
    },
    setOptions: function(options) {
        /// <signature>
        /// <summary>
        /// Sets new options to the QRCode and redraws it.
        /// </summary>
        /// <param name="options" type="Object" >An object with the new options. All configuration options can be set.</param>
        /// </signature>
    },
    svg: function() {
        /// <signature>
        /// <summary>
        /// Returns the SVG representation of the qrcode. The returned string is a self-contained SVG document that can be used as is or converted to other formats using tools like Inkscape and
/// ImageMagick. Both programs provide command-line interface suitable for server-side processing.
        /// </summary>
        /// <returns type="String">the SVG representation of the qrcode.</returns>
        /// </signature>
    },
    value: function(options) {
        /// <signature>
        /// <summary>
        /// Change the value of the QR code.
        /// </summary>
        /// <param name="options" type="Object" >The new value to be set.</param>
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


jQuery.fn.kendoQRCode = function() {
    this.data("kendoQRCode", new kendo.dataviz.ui.QRCode());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoQRCode: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.dataviz.ui.QRCode widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.dataviz.ui.QRCode">The kendo.dataviz.ui.QRCode instance (if present).</returns>
        /// </signature>
    },
    kendoQRCode: function(options) {
        /// <signature>
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
        /// Returns the SVG representation of the gauge.
/// The returned string is a self-contained SVG document that can be used as is or
/// converted to other formats using tools like Inkscape and
/// ImageMagick.
/// Both programs provide command-line interface suitable for server-side processing.
        /// </summary>
        /// </signature>
    },
    imageDataURL: function() {
        /// <signature>
        /// <summary>
        /// Returns a PNG image of the gauge encoded as a Data URL.
        /// </summary>
        /// <returns type="String">A data URL with image/png MIME type. Will be null if the browser does not support the canvas element.</returns>
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
        /// &#10;renderAs — String 
        /// &#10;Sets the preferred rendering engine.
/// &#10;If it is not supported by the browser, the Gauge will switch to the first available mode.The supported values are:
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
        /// Returns the SVG representation of the chart.
/// The returned string is a self-contained SVG document that can be used as is or
/// converted to other formats using tools like Inkscape and
/// ImageMagick.
/// Both programs provide command-line interface suitable for server-side processing.
        /// </summary>
        /// <returns type="String">the SVG representation of the sparkline.</returns>
        /// </signature>
    },
    imageDataURL: function() {
        /// <signature>
        /// <summary>
        /// Returns a PNG image of the sparkline encoded as a Data URL.
        /// </summary>
        /// <returns type="String">A data URL with image/png MIME type. Will be null if the browser does not support the canvas element.</returns>
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
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    redraw: function() {
        /// <signature>
        /// <summary>
        /// Repaints the chart using the currently loaded data.
        /// </summary>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Reloads the data and renders the chart.
        /// </summary>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the data source of the widget.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" >The data source to which the widget should be bound.</param>
        /// </signature>
    },
    svg: function() {
        /// <signature>
        /// <summary>
        /// Returns the SVG representation of the chart.
/// The returned string is a self-contained SVG document that can be used as is or
/// converted to other formats using tools like Inkscape and
/// ImageMagick.
/// Both programs provide command-line interface suitable for server-side processing.
        /// </summary>
        /// <returns type="String">the SVG representation of the chart.</returns>
        /// </signature>
    },
    imageDataURL: function() {
        /// <signature>
        /// <summary>
        /// Returns a PNG image of the chart encoded as a Data URL.
        /// </summary>
        /// <returns type="String">A data URL with image/png MIME type. Will be null if the browser does not support the canvas element.</returns>
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
        /// </signature>
    }
});

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
    skin: function(skin) {
        /// <signature>
        /// <summary>
        /// Change the current skin of the mobile application. When used without parameters, returns the currently used skin. Available as of Q2 2013.
        /// </summary>
        /// <param name="skin" type="String" >The skin name to switch to or empty string to return to native.</param>
        /// <returns type="String">Current skin in effect.</returns>
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
        /// &#10;cancel — String (default: "Cancel")
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
    badge: function(value) {
        /// <signature>
        /// <summary>
        /// Introduced in Q1 2013 SP Sets a badge on the Button with the specified value. If invoked without parameters, returns the current badge value. Set the value to false to remove the badge.
        /// </summary>
        /// <param name="value" type="Object" >The target value to be set or false to be removed.</param>
        /// <returns type="String|kendo.mobile.ui.Button">Returns the badge value if invoked without parameters, otherwise returns the Button object.</returns>
        /// </signature>
    },
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
        /// &#10;badge — String 
        /// &#10;The badge of the button.
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
    badge: function(button,value) {
        /// <signature>
        /// <summary>
        /// Introduced in Q1 2013 SP Sets a badge on one of the ButtonGroup buttons with the specified value. If invoked without parameters, returns the button's current badge value. Set the value to false to remove the badge.
        /// </summary>
        /// <param name="button" type="Object" >The target button specified either as a jQuery selector/object or as an button index.</param>
        /// <param name="value" type="Object" >The target value to be set or false to be removed.</param>
        /// <returns type="String|kendo.mobile.ui.Button">Returns the badge value if invoked without parameters, otherwise returns the ButtonGroup object.</returns>
        /// </signature>
    },
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
    Drawer: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.Drawer</summary>
        /// </signature>
    }
});

kendo.mobile.ui.Drawer = (function() {
var original = kendo.mobile.ui.Drawer;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Drawer for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    hide: function() {
        /// <signature>
        /// <summary>
        /// Hide the Drawer
        /// </summary>
        /// </signature>
    },
    show: function() {
        /// <signature>
        /// <summary>
        /// Show the Drawer
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


jQuery.fn.kendoDrawer = function() {
    this.data("kendoDrawer", new kendo.mobile.ui.Drawer());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoDrawer: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.Drawer widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Drawer">The kendo.mobile.ui.Drawer instance (if present).</returns>
        /// </signature>
    },
    kendoDrawer: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.Drawer widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;position — String (default: 'left')
        /// &#10;The position of the drawer. Can be left (default) or right.
        /// &#10;
        /// &#10;title — String 
        /// &#10;The text to display in the navbar title (if present).
        /// &#10;
        /// &#10;views — Array 
        /// &#10;A list of the view ids on which the drawer will appear. If omitted, the drawer can be revealed on any view in the application.
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
    append: function(dataItems) {
        /// <signature>
        /// <summary>
        /// Appends new items generated by rendering the given data items with the listview template to the bottom of the listview.
        /// </summary>
        /// <param name="dataItems" type="Array" ></param>
        /// </signature>
    },
    prepend: function(dataItems) {
        /// <signature>
        /// <summary>
        /// Prepends new items generated by rendering the given data items with the listview template to the top of the listview.
        /// </summary>
        /// <param name="dataItems" type="Array" ></param>
        /// </signature>
    },
    replace: function(dataItems) {
        /// <signature>
        /// <summary>
        /// Replaces the contents of the listview with the passed rendered data items.
        /// </summary>
        /// <param name="dataItems" type="Array" ></param>
        /// </signature>
    },
    remove: function(dataItems) {
        /// <signature>
        /// <summary>
        /// Removes the listview items which are rendered with the passed data items.
        /// </summary>
        /// <param name="dataItems" type="Array" ></param>
        /// </signature>
    },
    setDataItem: function(item,dataItem) {
        /// <signature>
        /// <summary>
        /// Re-renders the given listview item with the new dataItem provided. In order for the method to work as expected, the data items should be of type kendo.data.Model.
        /// </summary>
        /// <param name="item" type="jQuery" >The listview item to update</param>
        /// <param name="dataItem" type="kendo.data.Model" >The new dataItem</param>
        /// </signature>
    },
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
        /// &#10;Used in combination with pullToRefresh. If set to true, newly loaded data will be appended on top when refershing. Notice: not applicable if ListView is in a virtual mode.
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
        /// &#10;fixedHeaders — Boolean (default: false)
        /// &#10;If set to true, the group headers will persist their position when the user scrolls through the listview.
/// &#10;Applicable only when the type is set to group, or when binding to grouped datasource.Notice: this feature is not available in virtual mode
        /// &#10;
        /// &#10;headerTemplate — String|Function (default: "#:value#")
        /// &#10;The header item template (applicable when the type is set to group).
        /// &#10;
        /// &#10;loadMore — Boolean (default: false)
        /// &#10;If set to true, a button is rendered at the bottom of the listview. Tapping it fetches and displayes the items from the next page of the datasource.
        /// &#10;
        /// &#10;loadMoreText — String (default: "Press to load more")
        /// &#10;The text of the rendered load-more button (applies only if loadMore is set to true).
        /// &#10;
        /// &#10;pullTemplate — String|Function (default: "Pull to refresh")
        /// &#10;The message template displayed when the user pulls the listView. Applicable only when pullToRefresh is set to true.
        /// &#10;
        /// &#10;pullToRefresh — Boolean (default: false)
        /// &#10;If set to true, the listview will reload its data when the user pulls the view over the top limit.
        /// &#10;
        /// &#10;pullParameters — Function 
        /// &#10;A callback function used when the 'pullToRefresh' option is enabled. The result of the function will be send as additional parameters to the DataSource's next method.Notice: When the listview is in a virtual mode, the pull to refresh action removes the previously loaded items in the listview (instead of appending new records at the top).
/// &#10;Previously loaded pages in the datasource are also discarded.
        /// &#10;
        /// &#10;refreshTemplate — String|Function (default: "Refreshing")
        /// &#10;The message template displayed during the refresh. Applicable only when pullToRefresh is set to true.
        /// &#10;
        /// &#10;releaseTemplate — String|Function (default: "Release to refresh")
        /// &#10;The message template indicating that pullToRefresh will occur. Applicable only when pullToRefresh is set to true.
        /// &#10;
        /// &#10;style — String 
        /// &#10;The style of the control. Can be either empty string(""), or inset.
        /// &#10;
        /// &#10;template — String|Function (default: "#:data#")
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
        /// &#10;loading — String (default: "Loading...")
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
        /// Update the scrollview HTML content.
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
        /// &#10;autoBind — Boolean (default: true)
        /// &#10;If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the data source is fired. By default the widget will bind to the data source specified in the configuration.Applicable only in data bound mode.
        /// &#10;
        /// &#10;bounceVelocityThreshold — Number (default: 1.6)
        /// &#10;The velocity threshold after which a swipe will result in a bounce effect.
        /// &#10;
        /// &#10;contentHeight — Number|String (default: "auto")
        /// &#10;The height of the ScrollView content.
        /// &#10;
        /// &#10;dataSource — Object 
        /// &#10;Instance of DataSource that the mobile ScrollView will be bound to. If DataSource is set, the widget will operate in data bound mode.
        /// &#10;
        /// &#10;duration — Number (default: 300)
        /// &#10;The milliseconds that take the ScrollView to snap to the current page after released.
        /// &#10;
        /// &#10;emptyTemplate — String (default: "")
        /// &#10;The template which is used to render the pages without content. By default the ScrollView renders a blank page.Applicable only in data bound mode.
        /// &#10;
        /// &#10;enablePager — Boolean (default: true)
        /// &#10;If set to true the ScrollView will display a pager. By default pager is enabled.
        /// &#10;
        /// &#10;itemsPerPage — Number (default: 1)
        /// &#10;Determines how many data items will be passed to the page template.Applicable only in data bound mode.
        /// &#10;
        /// &#10;page — Number (default: 0)
        /// &#10;The initial page to display.
        /// &#10;
        /// &#10;pageSize — Number (default: 1)
        /// &#10;Multiplier applied to the snap amount of the ScrollView. By default, the widget scrolls to the next screen when swipe. If the pageSize property is set to 0.5, the ScrollView will scroll by half of the widget width.Not applicable in data bound mode.
        /// &#10;
        /// &#10;template — String (default: "#:data#")
        /// &#10;The template which is used to render the content of pages. By default the ScrollView renders a div element for every page.Applicable only in data bound mode.
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
    disable: function() {
        /// <signature>
        /// <summary>
        /// Disables the scrolling of the element.
        /// </summary>
        /// </signature>
    },
    enable: function() {
        /// <signature>
        /// <summary>
        /// Enables the scrolling of the element after it has been disabled by calling disable.
        /// </summary>
        /// </signature>
    },
    height: function() {
        /// <signature>
        /// <summary>
        /// Returns the viewport height of the scrollable element.
        /// </summary>
        /// <returns type="Number">the viewport height in pixels.</returns>
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
        /// &#10;pullTemplate — String (default: "Pull to refresh")
        /// &#10;The message template displayed when the user pulls the scroller.
/// &#10;Has effect only when the pullToRefresh option is set to true.
        /// &#10;
        /// &#10;pullToRefresh — Boolean (default: false)
        /// &#10;If set to true, the scroller will display a hint when the user pulls the container beyond its top limit.
/// &#10;If a pull beyond the specified pullOffset occurs, a pull event will be triggered.
        /// &#10;
        /// &#10;refreshTemplate — String (default: "Refreshing")
        /// &#10;The message template displayed during the refresh.
/// &#10;Has effect only when the pullToRefresh option is set to true.
        /// &#10;
        /// &#10;releaseTemplate — String (default: "Release to refresh")
        /// &#10;The message template displayed when the user pulls the scroller below the
/// &#10;pullOffset, indicating that pullToRefresh will occur.
/// &#10;Has effect only when the pullToRefresh option is set to true.
        /// &#10;
        /// &#10;useNative — Boolean (default: false)
        /// &#10;(available since Q1 2013)
/// &#10; If set to true, the scroller will use the native scrolling available in the current platform. This should help with form issues on some platforms (namely Android and WP8).
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
        /// &#10;style — String (default: "horizontal")
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
        /// &#10;offLabel — String (default: "OFF")
        /// &#10;The OFF label.
        /// &#10;
        /// &#10;onLabel — String (default: "ON")
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
    badge: function(tab,value) {
        /// <signature>
        /// <summary>
        /// Introduced in Q1 2013 SP Sets a badge on one of the tabs with the specified value. If invoked without second parameter, returns the tab's current badge value. Set the value to false to remove the badge.
        /// </summary>
        /// <param name="tab" type="Object" >The target tab specified either as a jQuery selector/object or as an item index.</param>
        /// <param name="value" type="Object" >The target value to be set or false to be removed.</param>
        /// <returns type="String|kendo.mobile.ui.TabStrip">Returns the badge value if invoked without parameters, otherwise returns the TabStrip object.</returns>
        /// </signature>
    },
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
        /// &#10;(available since Q1 2013)
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
    AutoComplete: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.AutoComplete</summary>
        /// </signature>
    }
});

kendo.ui.AutoComplete = (function() {
var original = kendo.ui.AutoComplete;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    close: function() {
        /// <signature>
        /// <summary>
        /// Closes the widget suggestion popup.
        /// </summary>
        /// </signature>
    },
    dataItem: function(index) {
        /// <signature>
        /// <summary>
        /// Returns the data item at the specified index.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index of of the data item.</param>
        /// <returns type="Object">the data item at the specified index. Returns undefined if the index is not within bounds.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enables or disables the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >If set to true the widget will be enabled. If set to false the widget will be disabled.</param>
        /// </signature>
    },
    readonly: function(readonly) {
        /// <signature>
        /// <summary>
        /// Toggles the readonly state of the widget. When the widget is readonly it doesn't allow user input.
        /// </summary>
        /// <param name="readonly" type="Boolean" >If set to true the widget will not allow user input. If set to false the widget will allow user input.</param>
        /// </signature>
    },
    focus: function() {
        /// <signature>
        /// <summary>
        /// Focuses the widget.
        /// </summary>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Refresh the suggestion popup by rendering all items again.
        /// </summary>
        /// </signature>
    },
    search: function(word) {
        /// <signature>
        /// <summary>
        /// Searches the data source for the provided value and displays any matches as suggestions.
        /// </summary>
        /// <param name="word" type="String" >The value to search for. All matches are displayed in the suggestion popup.</param>
        /// </signature>
    },
    select: function(item) {
        /// <signature>
        /// <summary>
        /// Selects the item provided as an argument and updates the value of the widget.
        /// </summary>
        /// <param name="item" type="Object" >A string, DOM element or jQuery object which represents the item to be selected. A string is treated as a jQuery selector.</param>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the data source of the widget.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" >The data source to which the widget should be bound.</param>
        /// </signature>
    },
    suggest: function(value) {
        /// <signature>
        /// <summary>
        /// Sets the value of the widget to the specified argument and visually selects the text.
        /// </summary>
        /// <param name="value" type="String" >The value to set.</param>
        /// </signature>
    },
    value: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the value of the widget.
        /// </summary>
        /// <param name="value" type="String" >The value to set.</param>
        /// <returns type="String">the value of the widget.</returns>
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


jQuery.fn.kendoAutoComplete = function() {
    this.data("kendoAutoComplete", new kendo.ui.AutoComplete());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoAutoComplete: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.AutoComplete widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.AutoComplete">The kendo.ui.AutoComplete instance (if present).</returns>
        /// </signature>
    },
    kendoAutoComplete: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.AutoComplete widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;animation — Object 
        /// &#10;Configures the opening and closing animations of the suggestion popup. Setting the animation option to false will disable the opening and closing animations. As a result the suggestion popup will open and close instantly.
        /// &#10;
        /// &#10;dataSource — Object|Array 
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
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Calendar: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Calendar</summary>
        /// </signature>
    }
});

kendo.ui.Calendar = (function() {
var original = kendo.ui.Calendar;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Calendar for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    max: function(value) {
        /// <signature>
        /// <summary>
        /// Gets/Sets the max value of the calendar.
        /// </summary>
        /// <param name="value" type="Object" >The max date to set.</param>
        /// <returns type="Date">The max value of the calendar.</returns>
        /// </signature>
    },
    min: function(value) {
        /// <signature>
        /// <summary>
        /// Gets/Sets the min value of the calendar.
        /// </summary>
        /// <param name="value" type="Object" >The min date to set.</param>
        /// <returns type="Date">The min value of the calendar.</returns>
        /// </signature>
    },
    navigate: function(value,view) {
        /// <signature>
        /// <summary>
        /// Navigates to view
        /// </summary>
        /// <param name="value" type="Date" >Desired date</param>
        /// <param name="view" type="String" >Desired view</param>
        /// </signature>
    },
    navigateDown: function(value) {
        /// <signature>
        /// <summary>
        /// Navigates to the lower view
        /// </summary>
        /// <param name="value" type="Date" >Desired date</param>
        /// </signature>
    },
    navigateToFuture: function() {
        /// <signature>
        /// <summary>
        /// Navigates to the future
        /// </summary>
        /// </signature>
    },
    navigateToPast: function() {
        /// <signature>
        /// <summary>
        /// Navigates to the past
        /// </summary>
        /// </signature>
    },
    navigateUp: function() {
        /// <signature>
        /// <summary>
        /// Navigates to the upper view
        /// </summary>
        /// </signature>
    },
    value: function(value) {
        /// <signature>
        /// <summary>
        /// Gets/Sets the value of the calendar.
        /// </summary>
        /// <param name="value" type="Object" >The date to set.</param>
        /// <returns type="Date">The value of the calendar.</returns>
        /// </signature>
    },
    current: function() {
        /// <signature>
        /// <summary>
        /// Gets currently focused date.
        /// </summary>
        /// <returns type="Date">The current focused date shown in the calendar.</returns>
        /// </signature>
    },
    view: function() {
        /// <signature>
        /// <summary>
        /// Gets an instance of the current view used by the calendar.
        /// </summary>
        /// <returns type="Object">The instance of the current view used by the calendar.</returns>
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


jQuery.fn.kendoCalendar = function() {
    this.data("kendoCalendar", new kendo.ui.Calendar());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoCalendar: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Calendar widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Calendar">The kendo.ui.Calendar instance (if present).</returns>
        /// </signature>
    },
    kendoCalendar: function(options) {
        /// <signature>
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
        /// &#10;Specifies the navigation depth.
        /// &#10;
        /// &#10;footer — String 
        /// &#10;Template to be used for rendering the footer. If false, the footer will not be rendered.
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
        /// &#10;Templates for the cells rendered in the "month" view.
        /// &#10;
        /// &#10;start — String (default: "month")
        /// &#10;Specifies the start view.
        /// &#10;
        /// &#10;value — Date (default: null)
        /// &#10;Specifies the selected date.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    ColorPalette: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.ColorPalette</summary>
        /// </signature>
    }
});

kendo.ui.ColorPalette = (function() {
var original = kendo.ui.ColorPalette;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    value: function(color) {
        /// <signature>
        /// <summary>
        /// Get or set the selected color. If no argument is given, this returns the
/// currently selected color as a string in format #FFFFFF when the opacity
/// option is off, or rgba(255, 255, 255, 1) when opacity is requested.If one argument is given, it selects the new color and updates the UI.  The
/// argument can be a string in hex, rgb or rgba format, or a Color object.
/// This does not trigger the "change" event.
        /// </summary>
        /// <param name="color" type="String" ></param>
        /// <returns type="String">the string representation of the current color.</returns>
        /// </signature>
    },
    color: function() {
        /// <signature>
        /// <summary>
        /// Like value(), but it returns a Color object.
        /// </summary>
        /// </signature>
    },
    enable: function() {
        /// <signature>
        /// <summary>
        /// Enables or disables the widget.  It will enable it with no arguments
/// or with a true argument, or disable with a false argument.
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


jQuery.fn.kendoColorPalette = function() {
    this.data("kendoColorPalette", new kendo.ui.ColorPalette());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoColorPalette: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.ColorPalette widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.ColorPalette">The kendo.ui.ColorPalette instance (if present).</returns>
        /// </signature>
    },
    kendoColorPalette: function(options) {
        /// <signature>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    ColorPicker: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.ColorPicker</summary>
        /// </signature>
    }
});

kendo.ui.ColorPicker = (function() {
var original = kendo.ui.ColorPicker;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    close: function() {
        /// <signature>
        /// <summary>
        /// Closes the popup.
        /// </summary>
        /// </signature>
    },
    open: function() {
        /// <signature>
        /// <summary>
        /// Opens the popup element with the color selector.
        /// </summary>
        /// </signature>
    },
    toggle: function() {
        /// <signature>
        /// <summary>
        /// Toggles the popup.
        /// </summary>
        /// </signature>
    },
    value: function(color) {
        /// <signature>
        /// <summary>
        /// Get or set the selected color. If no argument is given, this returns the
/// currently selected color as a string in format #FFFFFF when the opacity
/// option is off, or rgba(255, 255, 255, 1) when opacity is requested.If one argument is given, it selects the new color and updates the UI.  The
/// argument can be a string in hex, rgb or rgba format, or a Color object.
/// This does not trigger the "change" event.
        /// </summary>
        /// <param name="color" type="String" ></param>
        /// <returns type="String">the string representation of the current color.</returns>
        /// </signature>
    },
    color: function() {
        /// <signature>
        /// <summary>
        /// Like value(), but it returns a Color object.
        /// </summary>
        /// </signature>
    },
    enable: function(color) {
        /// <signature>
        /// <summary>
        /// Set the widget's enabled state.  Called with no arguments, this
/// method will ensure that the widget gets enabled.  Pass a false
/// argument to disable it.
        /// </summary>
        /// <param name="color" type="String" >The color should be either a Color object or a string that parseColor can understand (the CSS hex, rgb or rgba notations).</param>
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


jQuery.fn.kendoColorPicker = function() {
    this.data("kendoColorPicker", new kendo.ui.ColorPicker());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoColorPicker: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.ColorPicker widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.ColorPicker">The kendo.ui.ColorPicker instance (if present).</returns>
        /// </signature>
    },
    kendoColorPicker: function(options) {
        /// <signature>
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
        /// &#10;palette — String|Array (default: null)
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
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    ComboBox: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.ComboBox</summary>
        /// </signature>
    }
});

kendo.ui.ComboBox = (function() {
var original = kendo.ui.ComboBox;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    close: function() {
        /// <signature>
        /// <summary>
        /// Closes the drop-down list.
        /// </summary>
        /// </signature>
    },
    dataItem: function(index) {
        /// <signature>
        /// <summary>
        /// Returns the raw data record at the specified index. If the index is not specified, the selected index will be used.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index of the data record</param>
        /// <returns type="Object">The raw data record. Returns undefined if no data.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the ComboBox for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enables/disables the combobox widget
        /// </summary>
        /// <param name="enable" type="Boolean" >Desired state</param>
        /// </signature>
    },
    readonly: function(readonly) {
        /// <signature>
        /// <summary>
        /// Controls whether the widget is editable or readonly.
        /// </summary>
        /// <param name="readonly" type="Boolean" >The argument, which defines whether the combobox should be readonly or editable.</param>
        /// </signature>
    },
    focus: function() {
        /// <signature>
        /// <summary>
        /// Focuses the widget.
        /// </summary>
        /// </signature>
    },
    open: function() {
        /// <signature>
        /// <summary>
        /// Opens the drop-down list.
        /// </summary>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Re-render the items of the drop-down list.
        /// </summary>
        /// </signature>
    },
    search: function(word) {
        /// <signature>
        /// <summary>
        /// Filters dataSource using the provided parameter and rebinds drop-down list.
        /// </summary>
        /// <param name="word" type="String" >The filter value.</param>
        /// </signature>
    },
    select: function(li) {
        /// <signature>
        /// <summary>
        /// Selects a dropdown item and sets the value and the text of the combobox, or retrieves the selected item index.
        /// </summary>
        /// <param name="li" type="Object" >LI element or index of the item or predicate function, which defines the item that should be selected.</param>
        /// <returns type="Number">The index of the selected item, if called with no parameters. If a custom value is entered, the returned selected index is -1. If called with a parameter as a setter.</returns>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the dataSource of an existing ComboBox and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" ></param>
        /// </signature>
    },
    suggest: function(value) {
        /// <signature>
        /// <summary>
        /// Forces a suggestion onto the text of the ComboBox.
        /// </summary>
        /// <param name="value" type="String" >Characters to force a suggestion.</param>
        /// </signature>
    },
    text: function(text) {
        /// <signature>
        /// <summary>
        /// Gets/Sets the text of the ComboBox.
        /// </summary>
        /// <param name="text" type="String" >The text to set.</param>
        /// <returns type="String">The text of the combobox.</returns>
        /// </signature>
    },
    toggle: function(toggle) {
        /// <signature>
        /// <summary>
        /// Toggles the drop-down list between opened and closed state.
        /// </summary>
        /// <param name="toggle" type="Boolean" >Defines the whether to open/close the drop-down list.</param>
        /// </signature>
    },
    value: function(value) {
        /// <signature>
        /// <summary>
        /// Gets/Sets the value of the combobox. If the value is undefined, text of the data item will be used.
        /// </summary>
        /// <param name="value" type="String" >The value to set.</param>
        /// <returns type="String">The value of the combobox.</returns>
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


jQuery.fn.kendoComboBox = function() {
    this.data("kendoComboBox", new kendo.ui.ComboBox());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoComboBox: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.ComboBox widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.ComboBox">The kendo.ui.ComboBox instance (if present).</returns>
        /// </signature>
    },
    kendoComboBox: function(options) {
        /// <signature>
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
        /// &#10;template — String|Function 
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
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    DatePicker: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.DatePicker</summary>
        /// </signature>
    }
});

kendo.ui.DatePicker = (function() {
var original = kendo.ui.DatePicker;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    close: function() {
        /// <signature>
        /// <summary>
        /// Closes the calendar.
        /// </summary>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the DatePicker for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enable/Disable the datePicker widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >The argument, which defines whether to enable/disable the datePicker.</param>
        /// </signature>
    },
    readonly: function(readonly) {
        /// <signature>
        /// <summary>
        /// Controls whether the widget is editable or readonly.
        /// </summary>
        /// <param name="readonly" type="Boolean" >The argument, which defines whether the datepicker should be readonly or editable.</param>
        /// </signature>
    },
    max: function(value) {
        /// <signature>
        /// <summary>
        /// Gets/Sets the max value of the datePicker.
        /// </summary>
        /// <param name="value" type="Object" >The max date to set.</param>
        /// <returns type="Date">The max value of the datePicker.</returns>
        /// </signature>
    },
    min: function(value) {
        /// <signature>
        /// <summary>
        /// Gets/Sets the min value of the datePicker.
        /// </summary>
        /// <param name="value" type="Object" >The min date to set.</param>
        /// <returns type="Date">The min value of the datePicker.</returns>
        /// </signature>
    },
    open: function() {
        /// <signature>
        /// <summary>
        /// Opens the calendar.
        /// </summary>
        /// </signature>
    },
    value: function(value) {
        /// <signature>
        /// <summary>
        /// Gets/Sets the value of the datePicker.
        /// </summary>
        /// <param name="value" type="Object" >The value to set.</param>
        /// <returns type="Date">The value of the datePicker.</returns>
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


jQuery.fn.kendoDatePicker = function() {
    this.data("kendoDatePicker", new kendo.ui.DatePicker());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoDatePicker: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.DatePicker widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.DatePicker">The kendo.ui.DatePicker instance (if present).</returns>
        /// </signature>
    },
    kendoDatePicker: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.DatePicker widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;animation — Object 
        /// &#10;The animation(s) used for opening and/or closing the pop-up. Setting this value to false
/// &#10;will disable the animation(s).
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
        /// &#10;footer — String 
        /// &#10;Template to be used for rendering the footer of the calendar.
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
        /// &#10;Specifies the formats, which are used to parse the value set with value() method or by direct input. If not set the value of the format will be used. Note that value of the format option is always used.
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
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    DateTimePicker: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.DateTimePicker</summary>
        /// </signature>
    }
});

kendo.ui.DateTimePicker = (function() {
var original = kendo.ui.DateTimePicker;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    close: function(view) {
        /// <signature>
        /// <summary>
        /// Closes the calendar or the time drop-down list.
        /// </summary>
        /// <param name="view" type="String" >The view of the DateTimePicker, expressed as a string. Available views are "time" and "date".</param>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the DateTimePicker for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enables or disables a DateTimePicker.
        /// </summary>
        /// <param name="enable" type="Boolean" >Enables (true or undefined) or disables (false) a DateTimePicker.</param>
        /// </signature>
    },
    readonly: function(readonly) {
        /// <signature>
        /// <summary>
        /// Controls whether the widget is editable or readonly.
        /// </summary>
        /// <param name="readonly" type="Boolean" >The argument, which defines whether the datetimepicker should be readonly or editable.</param>
        /// </signature>
    },
    max: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the maximum value of the DateTimePicker.
        /// </summary>
        /// <param name="value" type="Object" >The maximum time value to set for a DateTimePicker, expressed as a Date object or as a string.</param>
        /// <returns type="Date">The maximum time value of a DateTimePicker.</returns>
        /// </signature>
    },
    min: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the minimum value of the DateTimePicker.
        /// </summary>
        /// <param name="value" type="Object" >The minimum time value to set for a DateTimePicker, expressed as a Date object or as a string.</param>
        /// <returns type="Date">The minimum time value of a DateTimePicker.</returns>
        /// </signature>
    },
    open: function(view) {
        /// <signature>
        /// <summary>
        /// Opens the calendar or the time drop-down list.
        /// </summary>
        /// <param name="view" type="String" >The view of the DateTimePicker, expressed as a string. Available views are "time" and "date".</param>
        /// </signature>
    },
    toggle: function(view) {
        /// <signature>
        /// <summary>
        /// Toggles the calendar or the time drop-down list.
        /// </summary>
        /// <param name="view" type="String" >The view of the DateTimePicker, expressed as a string. Available views are "time" and "date".</param>
        /// </signature>
    },
    value: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the value of the DateTimePicker.
        /// </summary>
        /// <param name="value" type="Object" >The time value to set for a DateTimePicker, expressed as a Date object or as a string.</param>
        /// <returns type="Date">The time value of a DateTimePicker.</returns>
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


jQuery.fn.kendoDateTimePicker = function() {
    this.data("kendoDateTimePicker", new kendo.ui.DateTimePicker());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoDateTimePicker: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.DateTimePicker widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.DateTimePicker">The kendo.ui.DateTimePicker instance (if present).</returns>
        /// </signature>
    },
    kendoDateTimePicker: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.DateTimePicker widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;animation — Object 
        /// &#10;The animation(s) used for opening and/or closing the pop-ups. Setting this value to false
/// &#10;will disable the animation(s).
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
        /// &#10;Template to be used for rendering the footer of the calendar.
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
        /// &#10;Specifies the formats, which are used to parse the value set with value() method or by direct input. If not set the value of the options.format and options.timeFormat will be used. Note that value of the format option is always used.
        /// &#10;
        /// &#10;start — String (default: "month")
        /// &#10;Specifies the start view of the calendar.
/// &#10;The following settings are available for the start value:
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
    DropDownList: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.DropDownList</summary>
        /// </signature>
    }
});

kendo.ui.DropDownList = (function() {
var original = kendo.ui.DropDownList;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    close: function() {
        /// <signature>
        /// <summary>
        /// Closes the drop-down list.
        /// </summary>
        /// </signature>
    },
    dataItem: function(index) {
        /// <signature>
        /// <summary>
        /// Returns the raw data record at the specified index. If the index is not specified, the selected index will be used.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index of the data record</param>
        /// <returns type="Object">The raw data record. Returns undefined if no data.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the DropDownList for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enables/disables the dropdownlist widget
        /// </summary>
        /// <param name="enable" type="Boolean" >Desired state</param>
        /// </signature>
    },
    readonly: function(readonly) {
        /// <signature>
        /// <summary>
        /// Controls whether the widget is editable or readonly.
        /// </summary>
        /// <param name="readonly" type="Boolean" >The argument, which defines whether the timepicker should be readonly or editable.</param>
        /// </signature>
    },
    focus: function() {
        /// <signature>
        /// <summary>
        /// Focuses the widget.
        /// </summary>
        /// </signature>
    },
    open: function() {
        /// <signature>
        /// <summary>
        /// Opens the drop-down list.
        /// </summary>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Re-render the items in drop-down list.
        /// </summary>
        /// </signature>
    },
    search: function(word) {
        /// <signature>
        /// <summary>
        /// Selects item, which starts with the provided parameter.
        /// </summary>
        /// <param name="word" type="String" >The search value.</param>
        /// </signature>
    },
    select: function(li) {
        /// <signature>
        /// <summary>
        /// Selects a dropdown item and sets the value and the text of the dropdownlist, or retrieves the selected item index.
        /// </summary>
        /// <param name="li" type="Object" >LI element or index of the item or predicate function, which defines the item that should be selected.</param>
        /// <returns type="Number">The index of the selected item, if called with no parameters. If called with a parameter as a setter.</returns>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the dataSource of an existing DropDownList and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" ></param>
        /// </signature>
    },
    text: function(text) {
        /// <signature>
        /// <summary>
        /// Gets/Sets the text of the dropdownlist.
        /// </summary>
        /// <param name="text" type="String" >The text to set.</param>
        /// <returns type="String">The text of the dropdownlist.</returns>
        /// </signature>
    },
    toggle: function(toggle) {
        /// <signature>
        /// <summary>
        /// Toggles the drop-down list between opened and closed state.
        /// </summary>
        /// <param name="toggle" type="Boolean" >Defines the whether to open/close the drop-down list.</param>
        /// </signature>
    },
    value: function(value) {
        /// <signature>
        /// <summary>
        /// Gets/Sets the value of the dropdownlist. The value will not be set if there is no item with such value. If value is undefined, text of the data item is used.
        /// </summary>
        /// <param name="value" type="String" >The value to set.</param>
        /// <returns type="String">The value of the dropdownlist.</returns>
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


jQuery.fn.kendoDropDownList = function() {
    this.data("kendoDropDownList", new kendo.ui.DropDownList());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoDropDownList: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.DropDownList widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.DropDownList">The kendo.ui.DropDownList instance (if present).</returns>
        /// </signature>
    },
    kendoDropDownList: function(options) {
        /// <signature>
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
        /// &#10;template — String|Function 
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
    Editor: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Editor</summary>
        /// </signature>
    }
});

kendo.ui.Editor = (function() {
var original = kendo.ui.Editor;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    createRange: function(document) {
        /// <signature>
        /// <summary>
        /// Creates a W3C-compatible Range object.
        /// </summary>
        /// <param name="document" type="Document" >The document that the range is associated with. If ommited, the document of the editor editing area will be used.</param>
        /// <returns type="Range">The created Range object.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Editor for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    encodedValue: function() {
        /// <signature>
        /// <summary>
        /// Gets the HTML encoded value of the editor.
        /// </summary>
        /// </signature>
    },
    exec: function(name,params) {
        /// <signature>
        /// <summary>
        /// Executes an editor command on the currently selected text.
        /// </summary>
        /// <param name="name" type="String" >The name of the command to be executed.</param>
        /// <param name="params" type="String" >The parameters for the executed command.</param>
        /// </signature>
    },
    focus: function() {
        /// <signature>
        /// <summary>
        /// Focuses the editable area.
        /// </summary>
        /// </signature>
    },
    getRange: function() {
        /// <signature>
        /// <summary>
        /// Gets a Range object form the editable area.
        /// </summary>
        /// <returns type="Range">A W3C-compatible Range object that represents the currently selected text in the editor area.</returns>
        /// </signature>
    },
    getSelection: function() {
        /// <signature>
        /// <summary>
        /// Gets a W3C-compatible Selection object form the editable area.
        /// </summary>
        /// <returns type="Selection">a W3C-compatible Selection object form the editable area.</returns>
        /// </signature>
    },
    paste: function(html) {
        /// <signature>
        /// <summary>
        /// Pastes HTML into the editable area.
        /// </summary>
        /// <param name="html" type="String" >The HTML to be pasted.</param>
        /// </signature>
    },
    selectedHtml: function() {
        /// <signature>
        /// <summary>
        /// Serializes the currently selected text to a XHTML string.
        /// </summary>
        /// <returns type="String">The selectied text as valid XHTML.</returns>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Reinitializes the editing area iframe. Should be used after moving the editor in the DOM.
        /// </summary>
        /// </signature>
    },
    selectRange: function(range) {
        /// <signature>
        /// <summary>
        /// Focuses the editable area and selects the range described by the range parameter.
        /// </summary>
        /// <param name="range" type="Range" >The Range object that describes the new selection.</param>
        /// </signature>
    },
    update: function() {
        /// <signature>
        /// <summary>
        /// Serializes the current state of the editable area to the <textarea> element.
/// This method should be called after modifying the editor content through the DOM.
        /// </summary>
        /// </signature>
    },
    value: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the editor value.
        /// </summary>
        /// <param name="value" type="String" >The value to set.</param>
        /// <returns type="String">The value of the Editor as HTML string.</returns>
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


jQuery.fn.kendoEditor = function() {
    this.data("kendoEditor", new kendo.ui.Editor());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoEditor: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Editor widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Editor">The kendo.ui.Editor instance (if present).</returns>
        /// </signature>
    },
    kendoEditor: function(options) {
        /// <signature>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    FlatColorPicker: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.FlatColorPicker</summary>
        /// </signature>
    }
});

kendo.ui.FlatColorPicker = (function() {
var original = kendo.ui.FlatColorPicker;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    focus: function() {
        /// <signature>
        /// <summary>
        /// Focuses the widget.
        /// </summary>
        /// </signature>
    },
    value: function(color) {
        /// <signature>
        /// <summary>
        /// Get or set the selected color. If no argument is given, this returns the
/// currently selected color as a string in format #FFFFFF when the opacity
/// option is off, or rgba(255, 255, 255, 1) when opacity is requested.If one argument is given, it selects the new color and updates the UI.  The
/// argument can be a string in hex, rgb or rgba format, or a Color object.
/// This does not trigger the "change" event.
        /// </summary>
        /// <param name="color" type="String" ></param>
        /// <returns type="String">the string representation of the current color.</returns>
        /// </signature>
    },
    color: function() {
        /// <signature>
        /// <summary>
        /// Like value(), but it returns a Color object.
        /// </summary>
        /// </signature>
    },
    enable: function() {
        /// <signature>
        /// <summary>
        /// Enables or disables the widget.  It will enable it with no arguments
/// or with a true argument, or disable with a false argument.
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


jQuery.fn.kendoFlatColorPicker = function() {
    this.data("kendoFlatColorPicker", new kendo.ui.FlatColorPicker());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoFlatColorPicker: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.FlatColorPicker widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.FlatColorPicker">The kendo.ui.FlatColorPicker instance (if present).</returns>
        /// </signature>
    },
    kendoFlatColorPicker: function(options) {
        /// <signature>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Grid: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Grid</summary>
        /// </signature>
    }
});

kendo.ui.Grid = (function() {
var original = kendo.ui.Grid;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    addRow: function() {
        /// <signature>
        /// <summary>
        /// Adds an empty data item to the grid. In "incell" and "inline" editing mode a table row will be appended. Popup window will be displayed in "popup" editing mode.Fires the edit event.
        /// </summary>
        /// </signature>
    },
    cancelChanges: function() {
        /// <signature>
        /// <summary>
        /// Cancels any pending changes in the data source. Deleted data items are restored, new data items are removed and updated data items are restored to their initial state.
        /// </summary>
        /// </signature>
    },
    cancelRow: function() {
        /// <signature>
        /// <summary>
        /// Cancels editing for the table row which is in edit mode. Reverts any changes made.
        /// </summary>
        /// </signature>
    },
    cellIndex: function(cell) {
        /// <signature>
        /// <summary>
        /// Returns the index of the specified table cell. Skips group and detail table cells.
        /// </summary>
        /// <param name="cell" type="Object" >A string, DOM element or jQuery object which represents the table cell. A string is treated as a jQuery selector.</param>
        /// <returns type="Number">the index of the specified table cell.</returns>
        /// </signature>
    },
    clearSelection: function() {
        /// <signature>
        /// <summary>
        /// Clears the currently selected table rows or cells (depending on the current selection mode).
        /// </summary>
        /// </signature>
    },
    closeCell: function() {
        /// <signature>
        /// <summary>
        /// Stops editing the table cell which is in edit mode. Requires "incell" edit mode.
        /// </summary>
        /// </signature>
    },
    collapseGroup: function(row) {
        /// <signature>
        /// <summary>
        /// Collapses the specified group. This hides the group items.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the group table row. A string is treated as a jQuery selector.</param>
        /// </signature>
    },
    collapseRow: function(row) {
        /// <signature>
        /// <summary>
        /// Collapses the specified master table row. This hides its detail table row.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the master table row. A string is treated as a jQuery selector.</param>
        /// </signature>
    },
    dataItem: function(row) {
        /// <signature>
        /// <summary>
        /// Returns the data item to which the specified table row is bound.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the table row. A string is treated as a jQuery selector.</param>
        /// <returns type="kendo.data.ObservableObject">the data item to which the specified table row is bound.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    editCell: function(cell) {
        /// <signature>
        /// <summary>
        /// Switches the specified table cell in edit mode. Requires "incell" edit mode.Fires the edit event.
        /// </summary>
        /// <param name="cell" type="jQuery" >The jQuery object which represents the table cell.</param>
        /// </signature>
    },
    editRow: function(row) {
        /// <signature>
        /// <summary>
        /// Switches the specified table cell in edit mode. Requires "inline" or "popup" edit mode.Fires the edit event.
        /// </summary>
        /// <param name="row" type="jQuery" >The jQuery object which represents the table row.</param>
        /// </signature>
    },
    expandGroup: function(row) {
        /// <signature>
        /// <summary>
        /// Expands the specified group. This shows the group items.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the group table row. A string is treated as a jQuery selector. Expands specified group.</param>
        /// </signature>
    },
    expandRow: function(row) {
        /// <signature>
        /// <summary>
        /// Expands the specified master table row. This shows its detail table row.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the master table row. A string is treated as a jQuery selector. Expands specified master row.</param>
        /// </signature>
    },
    hideColumn: function(column) {
        /// <signature>
        /// <summary>
        /// Hides the specified grid column.
        /// </summary>
        /// <param name="column" type="Object" >The index of the column or the field to which the columns is bound.</param>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Renders all table rows using the current data items.
        /// </summary>
        /// </signature>
    },
    removeRow: function(row) {
        /// <signature>
        /// <summary>
        /// Removes the specified table row from the grid. Also removes the corresponding data item from the data source.Fires the remove event.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the table row. A string is treated as a jQuery selector.</param>
        /// </signature>
    },
    reorderColumn: function(destIndex,column) {
        /// <signature>
        /// <summary>
        /// Changes the position of the specified column.
        /// </summary>
        /// <param name="destIndex" type="Number" >The new position of the column. The destination index should be calculated with regard to all columns, including the hidden ones.</param>
        /// <param name="column" type="Object" >The column whose position should be changed.</param>
        /// </signature>
    },
    saveChanges: function() {
        /// <signature>
        /// <summary>
        /// Saves any pending changes by calling the sync method.Fires the saveChanges event.
        /// </summary>
        /// </signature>
    },
    saveRow: function() {
        /// <signature>
        /// <summary>
        /// Switches the table row which is in edit mode and saves any changes made by the user.
        /// </summary>
        /// </signature>
    },
    select: function(rows) {
        /// <signature>
        /// <summary>
        /// Gets or sets the table rows (or cells) which are selected.
        /// </summary>
        /// <param name="rows" type="Object" >A string, DOM element or jQuery object which represents the table row(s) or cell(s). A string is treated as a jQuery selector.</param>
        /// <returns type="jQuery">the selected table rows or cells.</returns>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the data source of the widget.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" >The data source to which the widget should be bound.</param>
        /// </signature>
    },
    showColumn: function(column) {
        /// <signature>
        /// <summary>
        /// Shows the specified column.
        /// </summary>
        /// <param name="column" type="Object" >The index of the column or the field to which the columns is bound.</param>
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


jQuery.fn.kendoGrid = function() {
    this.data("kendoGrid", new kendo.ui.Grid());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoGrid: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Grid widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Grid">The kendo.ui.Grid instance (if present).</returns>
        /// </signature>
    },
    kendoGrid: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.Grid widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;altRowTemplate — String|Function 
        /// &#10;The template which renders the alternating table rows. Be default the grid renders a table row () for every data source item.
        /// &#10;
        /// &#10;autoBind — Boolean (default: true)
        /// &#10;If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
/// &#10;data source is fired. By default the widget will bind to the data source specified in the configuration.
        /// &#10;
        /// &#10;columns — Array 
        /// &#10;The configuration of the grid columns. An array of JavaScript objects or strings. A JavaScript objects are interpreted as column configurations. Strings are interpreted as the
/// &#10;field to which the column is bound. The grid will create a column for every item of the array.
        /// &#10;
        /// &#10;columnMenu — Boolean (default: false)
        /// &#10;If set to true the grid will display the column menu when the user clicks the chevron icon in the column headers. The column menu allows the user to show and hide columns, filter and sort (if filtering and sorting are enabled).
/// &#10;By default the column menu is not enabled.Can be set to a JavaScript object which represents the column menu configuration.
        /// &#10;
        /// &#10;columnMenu — Object 
        /// &#10;If set to true the grid will display the column menu when the user clicks the chevron icon in the column headers. The column menu allows the user to show and hide columns, filter and sort (if filtering and sorting are enabled).
/// &#10;By default the column menu is not enabled.Can be set to a JavaScript object which represents the column menu configuration.
        /// &#10;
        /// &#10;dataSource — Object|Array 
        /// &#10;The data source of the widget which is used render table rows. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
/// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.DataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.DataSource instance the widget will use that instance and will not initialize a new one.
        /// &#10;
        /// &#10;detailTemplate — String|Function 
        /// &#10;The template which renders the detail rows.
        /// &#10;
        /// &#10;editable — Boolean (default: false)
        /// &#10;If set to true the user would be able to edit the data to which the grid is bound to. By default editing is disabled.Can be set to a string ("inline", "incell" or "popup") to specify the editing mode. The default editing mode is "incell".Can be set to a JavaScript object which represents the editing configuration.
        /// &#10;
        /// &#10;editable — Object 
        /// &#10;If set to true the user would be able to edit the data to which the grid is bound to. By default editing is disabled.Can be set to a string ("inline", "incell" or "popup") to specify the editing mode. The default editing mode is "incell".Can be set to a JavaScript object which represents the editing configuration.
        /// &#10;
        /// &#10;filterable — Boolean (default: false)
        /// &#10;If set to true the user can filter the data source using the grid filter menu. Filtering is disabled by default.Can be set to a JavaScript object which represents the filter menu configuration.
        /// &#10;
        /// &#10;filterable — Object 
        /// &#10;If set to true the user can filter the data source using the grid filter menu. Filtering is disabled by default.Can be set to a JavaScript object which represents the filter menu configuration.
        /// &#10;
        /// &#10;groupable — Boolean (default: false)
        /// &#10;If set to true the user could group the grid by dragging the column header cells. By default grouping is disabled.Can be set to a JavaScript object which represents the grouping configuration.
        /// &#10;
        /// &#10;groupable — Object 
        /// &#10;If set to true the user could group the grid by dragging the column header cells. By default grouping is disabled.Can be set to a JavaScript object which represents the grouping configuration.
        /// &#10;
        /// &#10;height — Number|String 
        /// &#10;The height of the grid. Numeric values are treated as pixels.
        /// &#10;
        /// &#10;navigatable — Boolean (default: false)
        /// &#10;If set to true the use could navigate the widget using the keyboard navigation. By default keyboard navigation is disabled.
        /// &#10;
        /// &#10;pageable — Boolean (default: false)
        /// &#10;If set to true the grid will display a pager. By default paging is disabled.Can be set to a JavaScript object which represents the pager configuration.
        /// &#10;
        /// &#10;pageable — Object 
        /// &#10;If set to true the grid will display a pager. By default paging is disabled.Can be set to a JavaScript object which represents the pager configuration.
        /// &#10;
        /// &#10;reorderable — Boolean (default: false)
        /// &#10;If set to true the user could reorder the columns by dragging their header cells. By default reordering is disabled.
        /// &#10;
        /// &#10;resizable — Boolean (default: false)
        /// &#10;If set to true the user could resize the columns by dragging the edges of their header cells. By default resizing is disabled.
        /// &#10;
        /// &#10;rowTemplate — String|Function 
        /// &#10;The template which renders rows. Be default renders a table row () for every data source item.
        /// &#10;
        /// &#10;scrollable — Boolean (default: true)
        /// &#10;If set to true the grid will display a scrollbar when the total row height (or width) exceeds the grid height (or width). By default scrolling is enabled.Can be set to a JavaScript object which represents the scrolling configuration.
        /// &#10;
        /// &#10;scrollable — Object 
        /// &#10;If set to true the grid will display a scrollbar when the total row height (or width) exceeds the grid height (or width). By default scrolling is enabled.Can be set to a JavaScript object which represents the scrolling configuration.
        /// &#10;
        /// &#10;selectable — Boolean|String (default: false)
        /// &#10;If set to true the user would be able to select grid rows. By default selection is disabled.Can also be set to the following string values:
        /// &#10;
        /// &#10;sortable — Boolean (default: false)
        /// &#10;If set to true the user could sort the grid by clicking the column header cells. By default sorting is disabled.Can be set to a JavaScript object which represents the sorting configuration.
        /// &#10;
        /// &#10;sortable — Object 
        /// &#10;If set to true the user could sort the grid by clicking the column header cells. By default sorting is disabled.Can be set to a JavaScript object which represents the sorting configuration.
        /// &#10;
        /// &#10;toolbar — Array 
        /// &#10;The list of commands displayed in the grid toolbar. Commands can be custom or built-in ("cancel", "create", "save").The "cancel" built-in command reverts any data changes done by the end user.The "create" command adds an empty data item to the grid.The "save" command persists any data changes done by the end user.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    ListView: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.ListView</summary>
        /// </signature>
    }
});

kendo.ui.ListView = (function() {
var original = kendo.ui.ListView;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    add: function() {
        /// <signature>
        /// <summary>
        /// Inserts empty item as first item on the current view and prepare it for editing.
        /// </summary>
        /// </signature>
    },
    cancel: function() {
        /// <signature>
        /// <summary>
        /// Cancels changes in currently edited item.
        /// </summary>
        /// </signature>
    },
    clearSelection: function() {
        /// <signature>
        /// <summary>
        /// Clears ListView selected items and triggers change event.
        /// </summary>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the ListView for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    edit: function(item) {
        /// <signature>
        /// <summary>
        /// Edit specified ListView item. Triggers edit event.
        /// </summary>
        /// <param name="item" type="Object" >jQuery object containing the item to be edited.</param>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Reloads the data and repaints the list view.
        /// </summary>
        /// </signature>
    },
    remove: function(item) {
        /// <signature>
        /// <summary>
        /// Removes specified ListView item. Triggers remove event and if not prevented calls DataSource sync method.
        /// </summary>
        /// <param name="item" type="Object" >jQuery object containing the item to be removed.</param>
        /// </signature>
    },
    save: function() {
        /// <signature>
        /// <summary>
        /// Saves edited ListView item. If validation succeeds will call DataSource sync method.
        /// </summary>
        /// </signature>
    },
    select: function(items) {
        /// <signature>
        /// <summary>
        /// Get/set the selected listview item(s).
        /// </summary>
        /// <param name="items" type="Object" >Items to select.</param>
        /// <returns type="jQuery">the selected items if called without arguments.</returns>
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
    this.data("kendoListView", new kendo.ui.ListView());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoListView: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.ListView widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.ListView">The kendo.ui.ListView instance (if present).</returns>
        /// </signature>
    },
    kendoListView: function(options) {
        /// <signature>
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
        /// &#10;selectable — Boolean|String (default: false)
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
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Menu: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Menu</summary>
        /// </signature>
    }
});

kendo.ui.Menu = (function() {
var original = kendo.ui.Menu;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    append: function(item,referenceItem) {
        /// <signature>
        /// <summary>
        /// Appends an item to a Menu in the specified referenceItem's sub menu.
        /// </summary>
        /// <param name="item" type="Selector" >Target item, specified as a JSON object. Can also handle an array of such objects.</param>
        /// <param name="referenceItem" type="Selector" >A reference item to append the new item in.</param>
        /// <returns type="kendo.ui.Menu">Returns the Menu object to support chaining.</returns>
        /// </signature>
    },
    close: function(element) {
        /// <signature>
        /// <summary>
        /// Closes a sub-menu of a specified item(s) in a Menu.
        /// </summary>
        /// <param name="element" type="Selector" >Target item selector.</param>
        /// <returns type="kendo.ui.Menu">Returns the Menu object to support chaining.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Menu for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    enable: function(element,enable) {
        /// <signature>
        /// <summary>
        /// Enables or disables an item of a Menu. This can optionally be accomplished on
/// initialization by setting the disabled="disabled" on the desired menu item html element.
        /// </summary>
        /// <param name="element" type="Selector" >Target element</param>
        /// <param name="enable" type="Boolean" >Desired state</param>
        /// <returns type="kendo.ui.Menu">Returns the Menu object to support chaining.</returns>
        /// </signature>
    },
    insertAfter: function(item,referenceItem) {
        /// <signature>
        /// <summary>
        /// Inserts an item into a Menu after the specified referenceItem.
        /// </summary>
        /// <param name="item" type="Selector" >Target item, specified as a JSON object. Can also handle an array of such objects.</param>
        /// <param name="referenceItem" type="Selector" >A reference item to insert the new item after.</param>
        /// <returns type="kendo.ui.Menu">Returns the Menu object to support chaining.</returns>
        /// </signature>
    },
    insertBefore: function(item,referenceItem) {
        /// <signature>
        /// <summary>
        /// Inserts an item into a Menu before the specified referenceItem.
        /// </summary>
        /// <param name="item" type="Selector" >Target item, specified as a JSON object. Can also handle an array of such objects.</param>
        /// <param name="referenceItem" type="Selector" >A reference item to insert the new item before</param>
        /// <returns type="kendo.ui.Menu">Returns the Menu object to support chaining.</returns>
        /// </signature>
    },
    open: function(element) {
        /// <signature>
        /// <summary>
        /// Opens a sub-menu of a specified item(s) in a Menu.
        /// </summary>
        /// <param name="element" type="Selector" >Target item selector.</param>
        /// <returns type="kendo.ui.Menu">Returns the Menu object to support chaining.</returns>
        /// </signature>
    },
    remove: function(element) {
        /// <signature>
        /// <summary>
        /// Removes a specified item(s) from a Menu.
        /// </summary>
        /// <param name="element" type="Selector" >Target item selector.</param>
        /// <returns type="kendo.ui.Menu">Returns the Menu object to support chaining.</returns>
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


jQuery.fn.kendoMenu = function() {
    this.data("kendoMenu", new kendo.ui.Menu());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMenu: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Menu widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Menu">The kendo.ui.Menu instance (if present).</returns>
        /// </signature>
    },
    kendoMenu: function(options) {
        /// <signature>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    MultiSelect: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.MultiSelect</summary>
        /// </signature>
    }
});

kendo.ui.MultiSelect = (function() {
var original = kendo.ui.MultiSelect;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    close: function() {
        /// <signature>
        /// <summary>
        /// Closes the drop-down list.
        /// </summary>
        /// </signature>
    },
    dataItems: function() {
        /// <signature>
        /// <summary>
        /// Returns list of raw data records corresponding to the selected items.
        /// </summary>
        /// <returns type="Array">The raw data records. Returns empty array ([]) if no selected options</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the multiselect for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enables/disables the multiselect widget
        /// </summary>
        /// <param name="enable" type="Boolean" >Desired state</param>
        /// </signature>
    },
    readonly: function(readonly) {
        /// <signature>
        /// <summary>
        /// Controls whether the widget is editable or readonly.
        /// </summary>
        /// <param name="readonly" type="Boolean" >The argument, which defines whether the multiselect should be readonly or editable.</param>
        /// </signature>
    },
    focus: function() {
        /// <signature>
        /// <summary>
        /// Focuses the widget.
        /// </summary>
        /// </signature>
    },
    open: function() {
        /// <signature>
        /// <summary>
        /// Opens the drop-down list.
        /// </summary>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Re-render the items of the drop-down list.
        /// </summary>
        /// </signature>
    },
    search: function(word) {
        /// <signature>
        /// <summary>
        /// Filters dataSource using the provided parameter and rebinds drop-down list.
        /// </summary>
        /// <param name="word" type="String" >The filter value.</param>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the dataSource of an existing multiselect and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" ></param>
        /// </signature>
    },
    toggle: function(toggle) {
        /// <signature>
        /// <summary>
        /// Toggles the drop-down list between opened and closed state.
        /// </summary>
        /// <param name="toggle" type="Boolean" >Defines the whether to open/close the drop-down list.</param>
        /// </signature>
    },
    value: function(value) {
        /// <signature>
        /// <summary>
        /// Gets/Sets the value of the multiselect. Accepts string value or Array of strings.
        /// </summary>
        /// <param name="value" type="Object" >The value to set.</param>
        /// <returns type="Array">The value of the multiselect.</returns>
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


jQuery.fn.kendoMultiSelect = function() {
    this.data("kendoMultiSelect", new kendo.ui.MultiSelect());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMultiSelect: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.MultiSelect widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.MultiSelect">The kendo.ui.MultiSelect instance (if present).</returns>
        /// </signature>
    },
    kendoMultiSelect: function(options) {
        /// <signature>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    NumericTextBox: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.NumericTextBox</summary>
        /// </signature>
    }
});

kendo.ui.NumericTextBox = (function() {
var original = kendo.ui.NumericTextBox;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the NumericTextBox for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enable/Disable the numerictextbox widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >The argument, which defines whether to enable/disable tha numerictextbox.</param>
        /// </signature>
    },
    readonly: function(readonly) {
        /// <signature>
        /// <summary>
        /// Controls whether the widget is editable or readonly.
        /// </summary>
        /// <param name="readonly" type="Boolean" >The argument, which defines whether the numerictextbox should be readonly or editable.</param>
        /// </signature>
    },
    focus: function() {
        /// <signature>
        /// <summary>
        /// Focuses the numerictextbox widget.
        /// </summary>
        /// </signature>
    },
    max: function(value) {
        /// <signature>
        /// <summary>
        /// Gets/Sets the max value of the NumericTextBox.
        /// </summary>
        /// <param name="value" type="Object" >The max value to set.</param>
        /// <returns type="Number">The max value of the NumericTextBox.</returns>
        /// </signature>
    },
    min: function(value) {
        /// <signature>
        /// <summary>
        /// Gets/Sets the min value of the NumericTextBox.
        /// </summary>
        /// <param name="value" type="Object" >The min value to set.</param>
        /// <returns type="Number">The min value of the NumericTextBox.</returns>
        /// </signature>
    },
    step: function(value) {
        /// <signature>
        /// <summary>
        /// Gets/Sets the step value of the NumericTextBox.
        /// </summary>
        /// <param name="value" type="Object" >The step value to set.</param>
        /// <returns type="Number">The step value of the NumericTextBox.</returns>
        /// </signature>
    },
    value: function(value) {
        /// <signature>
        /// <summary>
        /// Gets/Sets the value of the numerictextbox.
        /// </summary>
        /// <param name="value" type="Object" >The value to set.</param>
        /// <returns type="Number">The value of the numerictextbox.</returns>
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


jQuery.fn.kendoNumericTextBox = function() {
    this.data("kendoNumericTextBox", new kendo.ui.NumericTextBox());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoNumericTextBox: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.NumericTextBox widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.NumericTextBox">The kendo.ui.NumericTextBox instance (if present).</returns>
        /// </signature>
    },
    kendoNumericTextBox: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.NumericTextBox widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;culture — String (default: "en-US")
        /// &#10;Specifies the culture info used by the NumericTextBox widget.
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
        /// &#10;Specifies the text displayed when the input is empty.
        /// &#10;
        /// &#10;spinners — Boolean (default: true)
        /// &#10;Specifies whether the up/down spin buttons should be rendered
        /// &#10;
        /// &#10;step — Number (default: 1)
        /// &#10;Specifies the increment/decrement step.
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
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Pager: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Pager</summary>
        /// </signature>
    }
});

kendo.ui.Pager = (function() {
var original = kendo.ui.Pager;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    totalPages: function() {
        /// <signature>
        /// <summary>
        /// Returns the number of pages.
        /// </summary>
        /// </signature>
    },
    pageSize: function() {
        /// <signature>
        /// <summary>
        /// Returns the page size - maximum number of items allowed on one page.
        /// </summary>
        /// </signature>
    },
    page: function() {
        /// <signature>
        /// <summary>
        /// Set the specified page as a current page. If called without arguments - returns the current page.
        /// </summary>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Updates all values of pager elements so that these values fit the values of DataSource. This method is automaticaly called after DataSource change event is fired.
        /// </summary>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Unbinds all callbacks created within pager initialization. This method doesn't remove pager element from DOM.
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


jQuery.fn.kendoPager = function() {
    this.data("kendoPager", new kendo.ui.Pager());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoPager: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Pager widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Pager">The kendo.ui.Pager instance (if present).</returns>
        /// </signature>
    },
    kendoPager: function(options) {
        /// <signature>
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
        /// &#10;pageSizes — Boolean|Array (default: false)
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
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    PanelBar: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.PanelBar</summary>
        /// </signature>
    }
});

kendo.ui.PanelBar = (function() {
var original = kendo.ui.PanelBar;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    append: function(item,referenceItem) {
        /// <signature>
        /// <summary>
        /// Appends an item to the PanelBar.
        /// </summary>
        /// <param name="item" type="Selector" >Target item, specified as the JSON representation of an object. You can pass item text, content or contentUrl here. Can handle an HTML string or array of such strings or JSON.</param>
        /// <param name="referenceItem" type="Selector" >A reference item to append the new item in</param>
        /// <returns type="kendo.ui.PanelBar">Returns the PanelBar object to support chaining.</returns>
        /// </signature>
    },
    collapse: function(element,useAnimation) {
        /// <signature>
        /// <summary>
        /// Collapses the specified item(s) of a PanelBar.
        /// </summary>
        /// <param name="element" type="Selector" >The PanelBar item(s) to be collapsed, expressed as a string containing a selector expression or represented by a jQuery selector.</param>
        /// <param name="useAnimation" type="Boolean" >_optional, default: _Temporarily enables (true) or disables (false) any visual animation(s) when collapsing items.</param>
        /// <returns type="kendo.ui.PanelBar">Returns the PanelBar object to support chaining.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the PanelBar for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    enable: function(element,enable) {
        /// <signature>
        /// <summary>
        /// Enables (true) or disables (false) the specified item(s) of the
/// PanelBar.
        /// </summary>
        /// <param name="element" type="Object" >The PanelBar item(s) to be enabled (true) or disabled (false), expressed as a string containing a selector expression or represented by a jQuery selector.</param>
        /// <param name="enable" type="Boolean" >The desired state - enabled (true) or disabled (false) - of the target element(s).</param>
        /// </signature>
    },
    expand: function(element,useAnimation) {
        /// <signature>
        /// <summary>
        /// Expands the specified item(s) of a PanelBar.
        /// </summary>
        /// <param name="element" type="Selector" >The PanelBar item(s) to be expanded, expressed as a selector.</param>
        /// <param name="useAnimation" type="Boolean" >_optional, default: _Temporariliy enables (true) or disables (false) any visual animation(s) when expanding items.</param>
        /// <returns type="kendo.ui.PanelBar">Returns the PanelBar object to support chaining.</returns>
        /// </signature>
    },
    insertAfter: function(item,referenceItem) {
        /// <signature>
        /// <summary>
        /// Inserts a PanelBar item after the specified referenceItem
        /// </summary>
        /// <param name="item" type="Selector" >Target item, specified as a JSON object. You can pass item text, content or contentUrl here. Can handle an HTML string or array of such strings or JSON.</param>
        /// <param name="referenceItem" type="Selector" >A reference item to insert the new item after</param>
        /// </signature>
    },
    insertBefore: function(item,referenceItem) {
        /// <signature>
        /// <summary>
        /// Inserts a PanelBar item before the specified referenceItem
        /// </summary>
        /// <param name="item" type="Selector" >Target item, specified as a JSON object. You can pass item text, content or contentUrl here. Can handle an TML string or array of such strings or JSON.</param>
        /// <param name="referenceItem" type="Selector" >A reference item to insert the new item before.</param>
        /// <returns type="kendo.ui.PanelBar">Returns the PanelBar object to support chaining.</returns>
        /// </signature>
    },
    reload: function(element) {
        /// <signature>
        /// <summary>
        /// Reloads the content of a PanelBar from an AJAX request.
        /// </summary>
        /// <param name="element" type="Selector" >Target element</param>
        /// </signature>
    },
    remove: function(element) {
        /// <signature>
        /// <summary>
        /// Removes the specified PanelBar item(s).
        /// </summary>
        /// <param name="element" type="Object" >The PanelBar item(s) to be removed, expressed as a selector string, DOM element or a jQuery object.</param>
        /// </signature>
    },
    select: function(element) {
        /// <signature>
        /// <summary>
        /// Selects the specified item of the PanelBar. If this method is invoked without arguments, it
/// returns the currently selected item.
        /// </summary>
        /// <param name="element" type="Object" >The PanelBar item to be selected, expressed as a string containing a selector expression or represented by a jQuery selector.</param>
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


jQuery.fn.kendoPanelBar = function() {
    this.data("kendoPanelBar", new kendo.ui.PanelBar());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoPanelBar: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.PanelBar widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.PanelBar">The kendo.ui.PanelBar instance (if present).</returns>
        /// </signature>
    },
    kendoPanelBar: function(options) {
        /// <signature>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    RangeSlider: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.RangeSlider</summary>
        /// </signature>
    }
});

kendo.ui.RangeSlider = (function() {
var original = kendo.ui.RangeSlider;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the RangeSlider for safe removal from the DOM.Detaches event handlers and removes data entries in order to avoid memory leaks.
        /// </summary>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enable/Disable the RangeSlider widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >The argument, which defines whether to enable/disable the RangeSlider.</param>
        /// </signature>
    },
    value: function(value) {
        /// <signature>
        /// <summary>
        /// The value method gets or sets the start and end values of the RangeSlider. It
/// accepts an array as parameter, and returns an object array with the start and end
/// selection values.
        /// </summary>
        /// <param name="value" type="Number" >The new value of the RangeSlider.</param>
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


jQuery.fn.kendoRangeSlider = function() {
    this.data("kendoRangeSlider", new kendo.ui.RangeSlider());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoRangeSlider: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.RangeSlider widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.RangeSlider">The kendo.ui.RangeSlider instance (if present).</returns>
        /// </signature>
    },
    kendoRangeSlider: function(options) {
        /// <signature>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Scheduler: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Scheduler</summary>
        /// </signature>
    }
});

kendo.ui.Scheduler = (function() {
var original = kendo.ui.Scheduler;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    addEvent: function(data) {
        /// <signature>
        /// <summary>
        /// Adds a new scheduler event and opens the edit form.
        /// </summary>
        /// <param name="data" type="Object" >The object containing the scheduler event fields.</param>
        /// </signature>
    },
    cancelEvent: function() {
        /// <signature>
        /// <summary>
        /// Cancels the scheduler event editing. Closes the edit form.
        /// </summary>
        /// </signature>
    },
    date: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the current scheduler date.
        /// </summary>
        /// <param name="value" type="Date" >The new date to set.</param>
        /// <returns type="Date">the current date.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    editEvent: function(event) {
        /// <signature>
        /// <summary>
        /// Opens the specified scheduler event in the edit form.
        /// </summary>
        /// <param name="event" type="Object" >The event which should be put in edit mode. Also accepts a string which is the uid of the event which should be edited.</param>
        /// </signature>
    },
    removeEvent: function(event) {
        /// <signature>
        /// <summary>
        /// Removes the specified scheduler event.
        /// </summary>
        /// <param name="event" type="Object" >The event which should be removed. Also accepts a string which is the uid of the event which should be removed.</param>
        /// </signature>
    },
    saveEvent: function() {
        /// <signature>
        /// <summary>
        /// Saves the scheduler event which is open in the edit form and closes it.
        /// </summary>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the data source of the widget.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.SchedulerDataSource" >The data source to which the widget should be bound.</param>
        /// </signature>
    },
    view: function(type) {
        /// <signature>
        /// <summary>
        /// Gets or sets the current scheduler view.
        /// </summary>
        /// <param name="type" type="String" >The view type to select.</param>
        /// <returns type="kendo.ui.SchedulerView">the current scheduler view.</returns>
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


jQuery.fn.kendoScheduler = function() {
    this.data("kendoScheduler", new kendo.ui.Scheduler());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoScheduler: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Scheduler widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Scheduler">The kendo.ui.Scheduler instance (if present).</returns>
        /// </signature>
    },
    kendoScheduler: function(options) {
        /// <signature>
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
        /// &#10;dataSource — Object|Array 
        /// &#10;The data source of the widget which contains the scheduler events. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.SchedulerDataSource
/// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.SchedulerDataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.SchedulerDataSource instance the widget will use that instance and will not initialize a new one.
        /// &#10;
        /// &#10;date — Date 
        /// &#10;The current date of the scheduler. Used to determine the period which is displayed by the widget.
        /// &#10;
        /// &#10;dateHeaderTemplate — String|Function 
        /// &#10;The template used to render the date header cells.By default the scheduler renders the date using the current culture date format.The fields which can be used in the template are:
        /// &#10;
        /// &#10;editable — Boolean (default: true)
        /// &#10;If set to true the user would be able to create new scheduler events and modify or delete existing ones.
        /// &#10;
        /// &#10;editable — Object 
        /// &#10;If set to true the user would be able to create new scheduler events and modify or delete existing ones.
        /// &#10;
        /// &#10;endTime — Date 
        /// &#10;The end time of the week and day views. The scheduler will display events ending before the endTime.
        /// &#10;
        /// &#10;eventTemplate — String|Function 
        /// &#10;The template used to render the scheduler events.The fields which can be used in the template are:
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
        /// &#10;minorTickCount — Number (default: 2)
        /// &#10;The number of time slots to display per major tick.
        /// &#10;
        /// &#10;minorTimeHeaderTemplate — String|Function 
        /// &#10;The template used to render the minor ticks.By default the scheduler renders a "&nbsp;".The fields which can be used in the template are:
        /// &#10;
        /// &#10;resources — Array 
        /// &#10;The configuration of the scheduler resource(s). A scheduler resource is optional metadata that can be associated
/// &#10;with a scheduler event.
        /// &#10;
        /// &#10;startTime — Date 
        /// &#10;The start time of the week and day views. The scheduler will display events starting after the startTime.
        /// &#10;
        /// &#10;timezone — String 
        /// &#10;The timezone which the scheduler will use to display the scheduler appointment dates. By default the current system timezone is used. This is an acceptable default when the
/// &#10;scheduler widget is bound to local array of events. It is advisable to specify a timezone if the scheduler is bound to a remote service.
/// &#10;That way all users would see the same dates and times no matter their configured system timezone.The complete list of the supported timezones is available in the List of IANA time zones Wikipedia page.
        /// &#10;
        /// &#10;views — Array 
        /// &#10;The views displayed by the scheduler and their configuration. The array items can be either objects specifying the view configuration or strings representing the view types (assuming default configuration).
/// &#10;By default the Kendo UI Scheduler widget displays "day" and "week" view.
        /// &#10;
        /// &#10;width — Number|String 
        /// &#10;The width of the widget. Numeric values are treated as pixels.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Slider: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Slider</summary>
        /// </signature>
    }
});

kendo.ui.Slider = (function() {
var original = kendo.ui.Slider;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Slider for safe removal from the DOM.Detaches event handlers and removes data entries in order to avoid memory leaks.
        /// </summary>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enable/Disable the Slider widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >The argument, which defines whether to enable/disable the Slider.</param>
        /// </signature>
    },
    value: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the value of a Slider. It accepts a string or number as parameters and returns
/// a number representing the underlying value.
        /// </summary>
        /// <param name="value" type="String" >_optional, default: _The value to be set for a Slider.</param>
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


jQuery.fn.kendoSlider = function() {
    this.data("kendoSlider", new kendo.ui.Slider());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoSlider: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Slider widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Slider">The kendo.ui.Slider instance (if present).</returns>
        /// </signature>
    },
    kendoSlider: function(options) {
        /// <signature>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Splitter: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Splitter</summary>
        /// </signature>
    }
});

kendo.ui.Splitter = (function() {
var original = kendo.ui.Splitter;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    ajaxRequest: function(pane,url,data) {
        /// <signature>
        /// <summary>
        /// Loads the content of a pane from a local or remote URL.
        /// </summary>
        /// <param name="pane" type="Object" >The targetted pane whose content is to be loaded via a URL.</param>
        /// <param name="url" type="String" >A local or remote URL from which the content of the pane is to be loaded.</param>
        /// <param name="data" type="Object" >Any data that is necessary to be sent to the server.</param>
        /// </signature>
    },
    collapse: function(pane) {
        /// <signature>
        /// <summary>
        /// Collapses a specified pane. Invoking this method will force the Splitter to redraw and it
/// will trigger layoutChange and resize events. Note: Invoking the method will not trigger a collapse event.
        /// </summary>
        /// <param name="pane" type="Object" >The pane to be collapsed.</param>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Splitter for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    expand: function(pane) {
        /// <signature>
        /// <summary>
        /// Expands a specified pane. Invoking this method will force the Splitter to redraw and it
/// will trigger layoutChange and resize events. Note: Invoking the method will not trigger an expand event.
        /// </summary>
        /// <param name="pane" type="Object" >The pane to be expanded.</param>
        /// </signature>
    },
    max: function(pane,value) {
        /// <signature>
        /// <summary>
        /// Sets the maximum size of a pane. Setting this value will not cause the Splitter to
/// redraw, nor will it trigger any events.
        /// </summary>
        /// <param name="pane" type="Object" >The pane being targetted for a new minimum size configuration value.</param>
        /// <param name="value" type="String" >The maximum size value of the pane defined as pixels (i.e. "200px") or as a percentage (i.e. "50%").</param>
        /// </signature>
    },
    min: function(pane,value) {
        /// <signature>
        /// <summary>
        /// Sets the minimum size of a pane. Setting this value will not cause the Splitter to
/// redraw, nor will it trigger any events.
        /// </summary>
        /// <param name="pane" type="Object" >The pane being targetted for a new minimum size configuration value.</param>
        /// <param name="value" type="String" >The minimum size value of the pane defined as pixels (i.e. "200px") or as a percentage (i.e. "50%").</param>
        /// </signature>
    },
    size: function(pane,value) {
        /// <signature>
        /// <summary>
        /// Set the size of the pane. Setting this value will cause the Splitter to redraw and it will
/// trigger layoutChange and resize events.
        /// </summary>
        /// <param name="pane" type="Object" >The pane to be resized.</param>
        /// <param name="value" type="String" >The new size of the pane defined as pixels (i.e. "200px") or as a percentage (i.e. "50%"). Note: This value must not exceed panes.max or be less then panes.min.</param>
        /// </signature>
    },
    toggle: function(pane,expand) {
        /// <signature>
        /// <summary>
        /// Toggles the state of a specified pane (i.e. collapsed or expanded). Invoking this method will force the
/// Splitter to redraw and it will trigger layoutChange and resize events. Note: Invoking the
/// method will not trigger collapse or expand events.
        /// </summary>
        /// <param name="pane" type="Object" >The pane to be collapsed.</param>
        /// <param name="expand" type="Boolean" >(Optional) Represents the desired state of the specified pane; to be expanded (true) or collapsed (false). If undefined, toggle() will collapse the pane if it is expanded or will expand the pane if it is collapsed.</param>
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


jQuery.fn.kendoSplitter = function() {
    this.data("kendoSplitter", new kendo.ui.Splitter());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoSplitter: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Splitter widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Splitter">The kendo.ui.Splitter instance (if present).</returns>
        /// </signature>
    },
    kendoSplitter: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.Splitter widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;orientation — String (default: "horizontal")
        /// &#10;Specifies the orientation of the Splitter.
        /// &#10;
        /// &#10;panes — Array 
        /// &#10;An array of pane definitions.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    TabStrip: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.TabStrip</summary>
        /// </signature>
    }
});

kendo.ui.TabStrip = (function() {
var original = kendo.ui.TabStrip;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    append: function(tab) {
        /// <signature>
        /// <summary>
        /// Appends a tab to the collection of tabs in a TabStrip.
        /// </summary>
        /// <param name="tab" type="Selector" >Target tab, specified as a JSON object. You can pass tab text, content or contentUrl here. Can handle an HTML string or array of such strings or JSON.</param>
        /// <returns type="kendo.ui.TabStrip">Returns the TabStrip object to support chaining.</returns>
        /// </signature>
    },
    contentElement: function(itemIndex) {
        /// <signature>
        /// <summary>
        /// Obtains the DOM element that encloses tab content by its tab index in the TabStrip.
        /// </summary>
        /// <param name="itemIndex" type="Number" >The index of the tab in the TabStrip.</param>
        /// <returns type="Element">The DOM element enclosing tab content by its tab index in the TabStrip.</returns>
        /// </signature>
    },
    contentHolder: function(itemIndex) {
        /// <signature>
        /// <summary>
        /// Obtains the DOM element that holds tab content by its tab index in the TabStrip.
/// The difference between contentElement and contentHolder is that contentHolder returns the DOM element that really holds the content, which on mobile is the scroll container.
        /// </summary>
        /// <param name="itemIndex" type="Number" >The index of the tab in the TabStrip.</param>
        /// <returns type="Element">The DOM element holding tab content by its tab index in the TabStrip.</returns>
        /// </signature>
    },
    deactivateTab: function(item) {
        /// <signature>
        /// <summary>
        /// Deactivates a tab specified as a selector. Note: Invoking this method will not trigger any events.
        /// </summary>
        /// <param name="item" type="Selector" >The target tab, specified as a selector, to be deactivated.</param>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the TabStrip for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    disable: function(element) {
        /// <signature>
        /// <summary>
        /// Disables a tab(s) of a TabStrip.
        /// </summary>
        /// <param name="element" type="Selector" >The target tab(s), specified as a selector, to be disabled.</param>
        /// <returns type="kendo.ui.TabStrip">Returns the TabStrip object to support chaining.</returns>
        /// </signature>
    },
    enable: function(element,enable) {
        /// <signature>
        /// <summary>
        /// Disables (false) or enables (true) a tab(s) of a TabStrip.
        /// </summary>
        /// <param name="element" type="Selector" >The target tab(s), specified as a selector, to be enabled (true) or disabled (false).</param>
        /// <param name="enable" type="Boolean" >Desired state of the tab(s) specified by the selector; enabled (true) or disabled (false).</param>
        /// <returns type="kendo.ui.TabStrip">Returns the TabStrip object to support chaining.</returns>
        /// </signature>
    },
    insertAfter: function(item,referenceTab) {
        /// <signature>
        /// <summary>
        /// Inserts a newly-created tab after a specified tab.
        /// </summary>
        /// <param name="item" type="Selector" >Target tab, specified as a JSON object. You can pass tab text, content or contentUrl here. Can handle an HTML string or array of such strings or JSON.</param>
        /// <param name="referenceTab" type="Selector" >A reference tab to insert the new item after.</param>
        /// <returns type="kendo.ui.TabStrip">Returns the TabStrip object to support chaining.</returns>
        /// </signature>
    },
    insertBefore: function(item,referenceTab) {
        /// <signature>
        /// <summary>
        /// Inserts a newly-created tab before a specified tab.
        /// </summary>
        /// <param name="item" type="Selector" >Target tab, specified as a JSON object. You can pass tab text, content or contentUrl here. Can handle an HTML string or array of such strings or JSON.</param>
        /// <param name="referenceTab" type="Selector" >A reference tab to insert the new item before</param>
        /// <returns type="kendo.ui.TabStrip">Returns the TabStrip object to support chaining.</returns>
        /// </signature>
    },
    items: function() {
        /// <signature>
        /// <summary>
        /// Gets the list of DOM elements that represent the tabs.
        /// </summary>
        /// <returns type="HTMLCollection">the tabs as jQuery objects.</returns>
        /// </signature>
    },
    reload: function(element) {
        /// <signature>
        /// <summary>
        /// Reloads TabStrip tab(s) via AJAX.
        /// </summary>
        /// <param name="element" type="Selector" >The target tab(s), specified as a selector or jQuery object, to be reloaded via AJAX.</param>
        /// <returns type="kendo.ui.TabStrip">Returns the TabStrip object to support chaining.</returns>
        /// </signature>
    },
    remove: function(element) {
        /// <signature>
        /// <summary>
        /// Removes a specified tab from a TabStrip.
        /// </summary>
        /// <param name="element" type="Object" >The target tab(s), specified as a selector or jQuery object, to be removed.</param>
        /// <returns type="kendo.ui.TabStrip">Returns the TabStrip object to support chaining.</returns>
        /// </signature>
    },
    select: function(element) {
        /// <signature>
        /// <summary>
        /// Get/set the selected tab. If called without arguments, it returns the
/// currently selected tab.
        /// </summary>
        /// <param name="element" type="Object" >The target tab(s), specified as a selector, jQuery object or index in the tab group.</param>
        /// <returns type="jQuery">the selected tab if called without arguments. kendo.ui.TabStrip if called with arguments.</returns>
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
    this.data("kendoTabStrip", new kendo.ui.TabStrip());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoTabStrip: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.TabStrip widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.TabStrip">The kendo.ui.TabStrip instance (if present).</returns>
        /// </signature>
    },
    kendoTabStrip: function(options) {
        /// <signature>
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
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    TimePicker: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.TimePicker</summary>
        /// </signature>
    }
});

kendo.ui.TimePicker = (function() {
var original = kendo.ui.TimePicker;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    close: function() {
        /// <signature>
        /// <summary>
        /// Closes the drop-down list of a TimePicker.
        /// </summary>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the TimePicker for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enables or disables a TimePicker.
        /// </summary>
        /// <param name="enable" type="Boolean" >Enables (true or undefined) or disables (false) a TimePicker.</param>
        /// </signature>
    },
    readonly: function(readonly) {
        /// <signature>
        /// <summary>
        /// Controls whether the widget is editable or readonly.
        /// </summary>
        /// <param name="readonly" type="Boolean" >The argument, which defines whether the timepicker should be readonly or editable.</param>
        /// </signature>
    },
    max: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the maximum value of the TimePicker.
        /// </summary>
        /// <param name="value" type="Object" >The maximum time value to set for a TimePicker, expressed as a Date object or as a string.</param>
        /// <returns type="Date">The maximum time value of a TimePicker.</returns>
        /// </signature>
    },
    min: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the minimum value of the TimePicker.
        /// </summary>
        /// <param name="value" type="Object" >The minimum time value to set for a TimePicker, expressed as a Date object or as a string.</param>
        /// <returns type="Date">The minimum time value of a TimePicker.</returns>
        /// </signature>
    },
    open: function() {
        /// <signature>
        /// <summary>
        /// Opens the drop-down list of a TimePicker.
        /// </summary>
        /// </signature>
    },
    value: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the value of the TimePicker.
        /// </summary>
        /// <param name="value" type="Object" >The time value to set for a TimePicker, expressed as a Date object or as a string.</param>
        /// <returns type="Date">The time value of a TimePicker.</returns>
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


jQuery.fn.kendoTimePicker = function() {
    this.data("kendoTimePicker", new kendo.ui.TimePicker());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoTimePicker: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.TimePicker widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.TimePicker">The kendo.ui.TimePicker instance (if present).</returns>
        /// </signature>
    },
    kendoTimePicker: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.TimePicker widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;animation — Object 
        /// &#10;Animations to be used for opening/closing the popup. Setting to false will turn of the animation.
        /// &#10;
        /// &#10;culture — String (default: "en-US")
        /// &#10;Specifies the culture info used by the widget.
        /// &#10;
        /// &#10;dates — Array 
        /// &#10;Specifies a list of dates, which are shown in the time drop-down list. If not set, the DateTimePicker will auto-generate the available times.
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
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Tooltip: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Tooltip</summary>
        /// </signature>
    }
});

kendo.ui.Tooltip = (function() {
var original = kendo.ui.Tooltip;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    show: function(element) {
        /// <signature>
        /// <summary>
        /// Shows the tooltip for given target.
        /// </summary>
        /// <param name="element" type="jQuery" >The target element for which the tooltip should be shown.</param>
        /// </signature>
    },
    hide: function() {
        /// <signature>
        /// <summary>
        /// Hides the tooltip.
        /// </summary>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Refresh the tooltip content.
        /// </summary>
        /// </signature>
    },
    target: function() {
        /// <signature>
        /// <summary>
        /// Gets the tooltip current target.
        /// </summary>
        /// <returns type="jQuery">The target element or null.</returns>
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


jQuery.fn.kendoTooltip = function() {
    this.data("kendoTooltip", new kendo.ui.Tooltip());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoTooltip: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Tooltip widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Tooltip">The kendo.ui.Tooltip instance (if present).</returns>
        /// </signature>
    },
    kendoTooltip: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.Tooltip widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;autoHide — Boolean (default: true)
        /// &#10;Specifies if the tooltip will be hidden when mouse leaves the target element. If set to false a close button will be shown within tooltip. If set to false, showAfter is specified and the showOn is set to "mouseenter" the Tooltip will be displayed after the given timeout even if the element is no longer hovered.
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
        /// &#10;position — String (default: "bottom")
        /// &#10;The position relative to the target element, at which the tooltip will be shown. Predefined values are "bottom", "top", "left", "right", "center".
        /// &#10;
        /// &#10;showAfter — Number (default: 100)
        /// &#10;Specify the delay in milliseconds before the tooltip is shown. This option is ignored if showOn is set to "click" or "focus".
        /// &#10;
        /// &#10;showOn — String (default: "mouseenter")
        /// &#10;The event on which the tooltip will be shown. Predefined values are "mouseenter", "click" and "focus".
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
    TreeView: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.TreeView</summary>
        /// </signature>
    }
});

kendo.ui.TreeView = (function() {
var original = kendo.ui.TreeView;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    append: function(nodeData,parentNode) {
        /// <signature>
        /// <summary>
        /// Appends a node to a group of a TreeView. This method may also be used to reorder the nodes of a
/// TreeView.
        /// </summary>
        /// <param name="nodeData" type="Object" >A JSON-formatted string or selector that specifies the node to be appended.</param>
        /// <param name="parentNode" type="jQuery" >The node that will contain the newly appended node. If not specified, the new node will be appended to the root group of the TreeView.</param>
        /// </signature>
    },
    collapse: function(nodes) {
        /// <signature>
        /// <summary>
        /// Collapses nodes.
        /// </summary>
        /// <param name="nodes" type="Object" >The nodes that are to be collapsed.</param>
        /// </signature>
    },
    dataItem: function(node) {
        /// <signature>
        /// <summary>
        /// Returns the model dataItem that corresponds to a TreeView node
        /// </summary>
        /// <param name="node" type="Object" >The element or selector that specifies a node.</param>
        /// <returns type="kendo.data.Node">The model of the item that was passed as a parameter.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the TreeView for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    detach: function(node) {
        /// <signature>
        /// <summary>
        /// Removes a node from a TreeView, but keeps its jQuery.data() objects.
        /// </summary>
        /// <param name="node" type="Object" >The node that is to be detached.</param>
        /// <returns type="jQuery">The node that has been detached.</returns>
        /// </signature>
    },
    enable: function(nodes,enable) {
        /// <signature>
        /// <summary>
        /// Enables or disables nodes.
        /// </summary>
        /// <param name="nodes" type="Object" >The nodes that are to be enabled/disabled.</param>
        /// <param name="enable" type="Boolean" >Whether the nodes should be enabled or disabled.</param>
        /// </signature>
    },
    expand: function(nodes) {
        /// <signature>
        /// <summary>
        /// Expands nodes.
        /// </summary>
        /// <param name="nodes" type="Object" >The nodes that are to be expanded.</param>
        /// </signature>
    },
    findByText: function(text) {
        /// <signature>
        /// <summary>
        /// Searches a TreeView for a node that has specific text.
        /// </summary>
        /// <param name="text" type="String" >The text that is being searched for.</param>
        /// <returns type="jQuery">All nodes that have the text.</returns>
        /// </signature>
    },
    findByUid: function(text) {
        /// <signature>
        /// <summary>
        /// Searches a TreeView for a node with the given unique identifier.
/// Applicable when the widget is bound to a HierarchicalDataSource.
        /// </summary>
        /// <param name="text" type="String" >The text that is being searched for.</param>
        /// <returns type="jQuery">All nodes that have the text.</returns>
        /// </signature>
    },
    insertAfter: function(nodeData,referenceNode) {
        /// <signature>
        /// <summary>
        /// Inserts a node after a specified node in a TreeView. This method may also be used to reorder the nodes of a
/// TreeView.
        /// </summary>
        /// <param name="nodeData" type="Object" >A JSON-formatted string or selector that specifies the node to be inserted.</param>
        /// <param name="referenceNode" type="jQuery" >The node that will be preceed the newly-appended node.</param>
        /// </signature>
    },
    insertBefore: function(nodeData,referenceNode) {
        /// <signature>
        /// <summary>
        /// Inserts a node before another node. This method may also be used to reorder the nodes of a
/// TreeView.
        /// </summary>
        /// <param name="nodeData" type="Object" >A JSON-formatted string or selector that specifies the node to be inserted.</param>
        /// <param name="referenceNode" type="jQuery" >The node that follows the inserted node.</param>
        /// </signature>
    },
    parent: function(node) {
        /// <signature>
        /// <summary>
        /// Gets the parent node of the item
        /// </summary>
        /// <param name="node" type="Object" >The child node whose parent will be returned.</param>
        /// <returns type="jQuery">The parent node of the given parameter node.</returns>
        /// </signature>
    },
    remove: function(node) {
        /// <signature>
        /// <summary>
        /// Removes a node from a TreeView.
        /// </summary>
        /// <param name="node" type="Object" >The node that is to be removed.</param>
        /// </signature>
    },
    select: function(node) {
        /// <signature>
        /// <summary>
        /// Gets or sets the selected node of a TreeView.
        /// </summary>
        /// <param name="node" type="Object" >If provided, the node of a TreeView that should be selected.</param>
        /// <returns type="jQuery">The selected node of a TreeView.</returns>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the dataSource of an existing TreeView and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.HierarchicalDataSource" ></param>
        /// </signature>
    },
    text: function(node,newText) {
        /// <signature>
        /// <summary>
        /// Gets or sets the text of a node in a TreeView.
        /// </summary>
        /// <param name="node" type="String" >The node of which the text is being retrieved.</param>
        /// <param name="newText" type="String" >Optional. When passed, sets the node text to the specified string</param>
        /// <returns type="String">The text of a node.</returns>
        /// </signature>
    },
    toggle: function(node) {
        /// <signature>
        /// <summary>
        /// Toggles the node of a TreeView between its expanded and collapsed states.
        /// </summary>
        /// <param name="node" type="String" >The node that should be toggled.</param>
        /// </signature>
    },
    updateIndeterminate: function(node) {
        /// <signature>
        /// <summary>
        /// Updates the indeterminate state of the treeview checkboxes. Should be used for better performance when checking multiple checkboxes through code.
        /// </summary>
        /// <param name="node" type="jQuery" >Optional. The root of the hierarchy that will be looped through. Allows only a subtree to be processed. The default value is the treeview root.</param>
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


jQuery.fn.kendoTreeView = function() {
    this.data("kendoTreeView", new kendo.ui.TreeView());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoTreeView: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.TreeView widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.TreeView">The kendo.ui.TreeView instance (if present).</returns>
        /// </signature>
    },
    kendoTreeView: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.TreeView widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;animation — Object 
        /// &#10;A collection of visual animations used when items are expanded or collapsed through user interaction.
/// &#10;Setting this option to false will disable all animations.
        /// &#10;
        /// &#10;autoBind — Boolean (default: true)
        /// &#10;If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
/// &#10;data source is fired. By default the widget will bind to the data source specified in the configuration.
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
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Upload: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Upload</summary>
        /// </signature>
    }
});

kendo.ui.Upload = (function() {
var original = kendo.ui.Upload;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Upload for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    disable: function() {
        /// <signature>
        /// <summary>
        /// Disables the upload.
        /// </summary>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enables the upload.
        /// </summary>
        /// <param name="enable" type="Boolean" >The argument, which defines whether to enable/disable the upload.</param>
        /// </signature>
    },
    toggle: function(enable) {
        /// <signature>
        /// <summary>
        /// Toggles the upload enabled state.
        /// </summary>
        /// <param name="enable" type="Boolean" >(Optional) The new enabled state.</param>
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


jQuery.fn.kendoUpload = function() {
    this.data("kendoUpload", new kendo.ui.Upload());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoUpload: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Upload widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Upload">The kendo.ui.Upload instance (if present).</returns>
        /// </signature>
    },
    kendoUpload: function(options) {
        /// <signature>
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
        /// <param name="input" type="Object" >Input element to be validated.</param>
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

intellisense.annotate(kendo.ui, {
    Window: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Window</summary>
        /// </signature>
    }
});

kendo.ui.Window = (function() {
var original = kendo.ui.Window;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    center: function() {
        /// <signature>
        /// <summary>
        /// Centers a Window within the viewport.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the (Kendo UI) Window object to support chaining.</returns>
        /// </signature>
    },
    close: function() {
        /// <signature>
        /// <summary>
        /// Closes a Window.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the (Kendo UI) Window object to support chaining.</returns>
        /// </signature>
    },
    content: function(content) {
        /// <signature>
        /// <summary>
        /// Gets or set the content of a Window.
        /// </summary>
        /// <param name="content" type="String" >_optional, default: _The content of the Window.</param>
        /// <returns type="kendo.ui.Window">If content is provided, this method will return the (Kendo UI) Window object to support chaining. Otherwise,it will return the current content of the (Kendo UI) Window.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Destroys the window and its modal overlay, if necessary. Removes the Window HTML elements from the DOM.
        /// </summary>
        /// </signature>
    },
    maximize: function() {
        /// <signature>
        /// <summary>
        /// Maximizes a Window to the entire viewing area of the user agent. Triggers the resize event.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the (Kendo UI) Window object to support chaining.</returns>
        /// </signature>
    },
    minimize: function() {
        /// <signature>
        /// <summary>
        /// Maximizes a Window to its title bar.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the (Kendo UI) Window object to support chaining.</returns>
        /// </signature>
    },
    open: function() {
        /// <signature>
        /// <summary>
        /// Opens a Window.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the (Kendo UI) Window object to support chaining.</returns>
        /// </signature>
    },
    pin: function() {
        /// <signature>
        /// <summary>
        /// Pins the Window at its current position with a position:fixed style, i.e. the widget stops moving together with the other page content when the page is scrolled.
/// The user will still be able to move the Window with the mouse or keyboard.
        /// </summary>
        /// </signature>
    },
    refresh: function(options) {
        /// <signature>
        /// <summary>
        /// Refreshes the content of a Window from a remote URL or the initially defined content template.
        /// </summary>
        /// <param name="options" type="String" >Options for requesting data from the server. If omitted, the window uses the content property that was supplied when the window was created. Any options specified here are passed to jQuery.ajax().</param>
        /// <returns type="kendo.ui.Window">Returns the (Kendo UI) Window object to support chaining.</returns>
        /// </signature>
    },
    restore: function() {
        /// <signature>
        /// <summary>
        /// Restores a maximized or minimized Window to its previous state. Triggers the resize event.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the (Kendo UI) Window object to support chaining.</returns>
        /// </signature>
    },
    setOptions: function() {
        /// <signature>
        /// <summary>
        /// Allows the window to be configured with new options.
        /// </summary>
        /// </signature>
    },
    title: function(text) {
        /// <signature>
        /// <summary>
        /// Gets or set the title of a Window.
        /// </summary>
        /// <param name="text" type="String" >_optional, default: _The title of the Window.</param>
        /// <returns type="kendo.ui.Window">If a title is provided, this method will return the (Kendo UI) Window object to support chaining. Otherwise,it will return the current title of the (Kendo UI) Window.</returns>
        /// </signature>
    },
    toFront: function() {
        /// <signature>
        /// <summary>
        /// Brings forward a Window to the top of the z-index.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the (Kendo UI) Window object to support chaining.</returns>
        /// </signature>
    },
    toggleMaximization: function() {
        /// <signature>
        /// <summary>
        /// Toggles a Window between a maximized and restored state. Triggers the resize event.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the (Kendo UI) Window object to support chaining.</returns>
        /// </signature>
    },
    unpin: function() {
        /// <signature>
        /// <summary>
        /// Disables the Window's pinned state, so that the widget will move together with the other page content when the page is scrolled.
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


jQuery.fn.kendoWindow = function() {
    this.data("kendoWindow", new kendo.ui.Window());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoWindow: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Window widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Window">The kendo.ui.Window instance (if present).</returns>
        /// </signature>
    },
    kendoWindow: function(options) {
        /// <signature>
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
        /// &#10;pinned — Boolean (default: false)
        /// &#10;Specifies whether the window should be pinned, i.e. it will not move together with the page content during scrolling.
        /// &#10;
        /// &#10;position — Object 
        /// &#10;A collection of one or two members, which define the initial Window's top and/or left position on the page.
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
        /// </signature>
    }
});
