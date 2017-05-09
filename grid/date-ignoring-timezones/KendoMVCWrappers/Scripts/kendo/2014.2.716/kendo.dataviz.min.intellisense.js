

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
    Color: function() {
        /// <signature>
        /// <summary>Constructor of kendo.Color</summary>
        /// </signature>
    }
});

kendo.Color = (function() {
var original = kendo.Color;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    diff: function() {
        /// <signature>
        /// <summary>
        /// Computes the relative luminance between two colors.
        /// </summary>
        /// <returns type="Number">The relative luminance.</returns>
        /// </signature>
    },
    equals: function() {
        /// <signature>
        /// <summary>
        /// Compares two color objects for equality.
        /// </summary>
        /// <returns type="Boolean">returns true if the two colors are the same. Otherwise, false</returns>
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
    showIn: function(container,view,transitionClass) {
        /// <signature>
        /// <summary>
        /// Renders the View element in the element specified by the selector
        /// </summary>
        /// <param name="container" type="String" >The selector of the container in which the view element will be appended.</param>
        /// <param name="view" type="kendo.View" >The view instance that will be rendered.</param>
        /// <param name="transitionClass" type="string" >Optional. If provided, the new view will replace the current one with a replace effect.</param>
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
        /// <param name="handler" type="Function" >The handler which should no longer be executed. If not specified all handlers listening to that event will be removed.</param>
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
    start: function(options) {
        /// <signature>
        /// <summary>
        /// Activates the router binding to the URL fragment part changes.
        /// </summary>
        /// <param name="options" type="" >The router configuration options. The following options are supported:</param>
        /// </signature>
    },
    route: function(route,callback) {
        /// <signature>
        /// <summary>
        /// 
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
    replace: function(route,silent) {
        /// <signature>
        /// <summary>
        /// Navigates to the given route, replacing the current view in the history stack (like history.replaceState or location.replace work).
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
        /// <param name="container" type="jQuery" >(optional) the element in which the view element will be appended.</param>
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
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Invoked by the Kendo UI MVVM framework when the bound view model value is changed. The binder should update the UI (HTML element or Kendo UI widget) to reflect the view model change.
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
        /// <param name="value" type="Object" >The filter configuration. Accepts the same values as the filter option (check there fo more examples).</param>
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
    pushCreate: function(items) {
        /// <signature>
        /// <summary>
        /// Appends the specified data item(s) to the data source without marking them as "new". The data source will not sync data items appended via pushCreate.
        /// </summary>
        /// <param name="items" type="Object" >The data item or data items to append to the data source.</param>
        /// </signature>
    },
    pushDestroy: function(items) {
        /// <signature>
        /// <summary>
        /// Removes the specified data item(s) from the data source without marking them as "removed". The data source will not sync data items appended via pushDestroy.
        /// </summary>
        /// <param name="items" type="Object" >The data item or data items to remove from the data source.</param>
        /// </signature>
    },
    pushUpdate: function(items) {
        /// <signature>
        /// <summary>
        /// Updates the specified data item(s) without marking them as "dirty". The data source will not sync data items appended via pushUpdate.
/// If the data items are not found (using schema.model.id) they will be appended.
        /// </summary>
        /// <param name="items" type="Object" >The data item or data items to update.</param>
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
    GanttDataSource: function() {
        /// <signature>
        /// <summary>Constructor of kendo.data.GanttDataSource</summary>
        /// </signature>
    }
});

kendo.data.GanttDataSource = (function() {
var original = kendo.data.GanttDataSource;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    taskAllChildren: function(task) {
        /// <signature>
        /// <summary>
        /// Returns a list of all child tasks. The search is recursive.
        /// </summary>
        /// <param name="task" type="kendo.data.GanttTask" >The parent task. If this parameter is not specified, all gantt tasks will be returned.</param>
        /// <returns type="Array">the list of all child tasks.</returns>
        /// </signature>
    },
    taskChildren: function(task) {
        /// <signature>
        /// <summary>
        /// Returns a list of all direct child tasks.
        /// </summary>
        /// <param name="task" type="kendo.data.GanttTask" >The parent task. If this parameter is not specified, all root level tasks will be returned.</param>
        /// <returns type="Array">the list of all direct child tasks.</returns>
        /// </signature>
    },
    taskLevel: function(task) {
        /// <signature>
        /// <summary>
        /// Returns the level of the task in the hierrarchy. 0 for root level taks.
        /// </summary>
        /// <param name="task" type="kendo.data.GanttTask" >The reference task.</param>
        /// <returns type="Number">the level of the task in the hierarchy.</returns>
        /// </signature>
    },
    taskParent: function(task) {
        /// <signature>
        /// <summary>
        /// Returns the parent task of a certain task.
        /// </summary>
        /// <param name="task" type="kendo.data.GanttTask" >The reference task.</param>
        /// <returns type="kendo.data.GanttTask">the parent task.</returns>
        /// </signature>
    },
    taskSiblings: function(task) {
        /// <signature>
        /// <summary>
        /// Returns a list of all tasks that have the same parent.
        /// </summary>
        /// <param name="task" type="kendo.data.GanttTask" >The reference task.</param>
        /// <returns type="Array">the list of all tasks with the same parent as the parameter task. If the parameter task is a root level task, all root level tasks are returned.</returns>
        /// </signature>
    },
    taskTree: function(task) {
        /// <signature>
        /// <summary>
        /// Returns a list of all child gantt tasks, ordered by their hierarchical index (Depth-First). a parent is collapsed, it's children are not returned.
        /// </summary>
        /// <param name="task" type="kendo.data.GanttTask" >The reference task. If this parameter is specified, the result will be all child tasks of this task, ordered by their hierarchical index.</param>
        /// <returns type="Array">the list of all child gantt tasks, ordered by their hierarchical index (Depth-First).</returns>
        /// </signature>
    },
    update: function(task,taskInfo) {
        /// <signature>
        /// <summary>
        /// Updates a gantt task.
        /// </summary>
        /// <param name="task" type="kendo.data.GanttTask" >The task to be updated.</param>
        /// <param name="taskInfo" type="Object" >The new values, which will be used to update the task.</param>
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
    GanttDependency: function() {
        /// <signature>
        /// <summary>Constructor of kendo.data.GanttDependency</summary>
        /// </signature>
    }
});

kendo.data.GanttDependency = (function() {
var original = kendo.data.GanttDependency;
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
    GanttDependencyDataSource: function() {
        /// <signature>
        /// <summary>Constructor of kendo.data.GanttDependencyDataSource</summary>
        /// </signature>
    }
});

kendo.data.GanttDependencyDataSource = (function() {
var original = kendo.data.GanttDependencyDataSource;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    dependencies: function(id) {
        /// <signature>
        /// <summary>
        /// Returns a list of all dependencies for a certain task.
        /// </summary>
        /// <param name="id" type="Object" >The id of the gantt task, based on which the dependencies are filtered.</param>
        /// <returns type="Array">the list of all task dependencies.</returns>
        /// </signature>
    },
    predecessors: function(id) {
        /// <signature>
        /// <summary>
        /// Returns a list of all predecessor dependencies for a certain task.
        /// </summary>
        /// <param name="id" type="Object" >The id of the gantt task, based on which the dependencies are filtered.</param>
        /// <returns type="Array">the list of all task predecessors.</returns>
        /// </signature>
    },
    successors: function(id) {
        /// <signature>
        /// <summary>
        /// Returns a list of all successor dependencies for a certain task.
        /// </summary>
        /// <param name="id" type="Object" >The id of the gantt task, based on which the dependencies are filtered.</param>
        /// <returns type="Array">the list of all task successors.</returns>
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
    GanttTask: function() {
        /// <signature>
        /// <summary>Constructor of kendo.data.GanttTask</summary>
        /// </signature>
    }
});

kendo.data.GanttTask = (function() {
var original = kendo.data.GanttTask;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    duration: function() {
        /// <signature>
        /// <summary>
        /// Returns the gantt task length in milliseconds.
        /// </summary>
        /// <returns type="Number">the length of the task.</returns>
        /// </signature>
    },
    isMilestone: function() {
        /// <signature>
        /// <summary>
        /// Checks whether the event has zero duration.
        /// </summary>
        /// <returns type="Boolean">return true if the task start is equal to the task end.</returns>
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
        /// Attaches a handler to an event. Examples and more info can be found in the bind section of the kendo.Observable API reference.
        /// </summary>
        /// </signature>
    },
    editable: function(field) {
        /// <signature>
        /// <summary>
        /// Determines if the specified field is editable or not.
        /// </summary>
        /// <param name="field" type="String" >The field to check.</param>
        /// <returns type="Boolean">true if the field is editable; false otherwise.</returns>
        /// </signature>
    },
    get: function() {
        /// <signature>
        /// <summary>
        /// Gets the value of the specified field. Inherited from kendo.data.ObservableObject. Examples and more info can be found in the get section of the
/// ObservableObject API reference.
        /// </summary>
        /// </signature>
    },
    isNew: function() {
        /// <signature>
        /// <summary>
        /// Checks if the Model is new or not. The id field is used to determine if a model instance is new or existing one.
/// If the value of the field specified is equal to the default value (specified through the fields configuration) the model is considered as new.
        /// </summary>
        /// <returns type="Boolean">true if the model is new; false otherwise.</returns>
        /// </signature>
    },
    set: function() {
        /// <signature>
        /// <summary>
        /// Sets the value of the specified field. Inherited from kendo.data.ObservableObject. Examples and more info can be found in the set section of the
/// ObservableObject API reference.
        /// </summary>
        /// </signature>
    },
    toJSON: function() {
        /// <signature>
        /// <summary>
        /// Creates a plain JavaScript object which contains all fields of the Model. Inherited from kendo.data.ObservableObject. Examples and more info can be found in the toJSON section of the
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
        /// Appends a new item to the children data source, and initializes it if necessary.
        /// </summary>
        /// <param name="model" type="Object" >The data for the new item</param>
        /// </signature>
    },
    level: function() {
        /// <signature>
        /// <summary>
        /// Gets the current nesting level of the node within the data source.
        /// </summary>
        /// <returns type="Number">the zero based level of the node.</returns>
        /// </signature>
    },
    load: function() {
        /// <signature>
        /// <summary>
        /// Loads the child nodes in the child data source, supplying the id of the Node to the request.
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
        /// Gets the parent node.
        /// </summary>
        /// <returns type="kendo.data.Node">the parent of the node; null if the node is a root node or doesn't have a parent.</returns>
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
        /// Gets the parent of the array if such parent exists.
        /// </summary>
        /// <returns type="kendo.data.ObservableObject">the parent of the array; undefined if the array is not nested and doesn't have a parent.</returns>
        /// </signature>
    },
    pop: function() {
        /// <signature>
        /// <summary>
        /// Removes the last item from an array and returns that item. Equivalent of Array.prototype.pop.
        /// </summary>
        /// <returns type="Object">the item which was removed.</returns>
        /// </signature>
    },
    push: function() {
        /// <signature>
        /// <summary>
        /// Appends the given items to the array and returns the new length of the array. Equivalent of Array.prototype.push.
/// The new items are wrapped as ObservableObject if they are complex objects.
        /// </summary>
        /// <returns type="Number">the new length of the array.</returns>
        /// </signature>
    },
    slice: function(begin,end) {
        /// <signature>
        /// <summary>
        /// Returns a one-level deep copy of a portion of an array. Equivalent of
/// Array.prototype.slice.
/// The result of the slice method is not an instance of ObvservableArray. It is a regular JavaScript Array object.
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
        /// <param name="howMany" type="Number" >An integer indicating the number of items to remove. If set to 0, no items are removed. In this case, you should specify at least one new item.</param>
        /// <returns type="Array">containing the removed items. The result of the splice method is not an instance of ObvservableArray.</returns>
        /// </signature>
    },
    shift: function() {
        /// <signature>
        /// <summary>
        /// Removes the first item from an ObvservableArray and returns that item. Equivalent of Array.prototype.shift.
        /// </summary>
        /// <returns type="Object">the item which was removed.</returns>
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
        /// Adds one or more items to the beginning of an ObservableArray and returns the new length.  Equivalent of Array.prototype.unshift.
        /// </summary>
        /// <returns type="Number">the new length of the array.</returns>
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
        /// Attaches a handler to an event. Examples and more info can be found in the bind section of the
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
        /// <returns type="Object">the value of the specified field.</returns>
        /// </signature>
    },
    parent: function() {
        /// <signature>
        /// <summary>
        /// Gets the parent of the object if such parent exists.
        /// </summary>
        /// <returns type="kendo.data.ObservableObject">the parent of the object; undefined if the object is not nested and doesn't have a parent.</returns>
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
        /// <returns type="Object">which contains only the fields of the ObservableObject.</returns>
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
    PivotDataSource: function() {
        /// <signature>
        /// <summary>Constructor of kendo.data.PivotDataSource</summary>
        /// </signature>
    }
});

kendo.data.PivotDataSource = (function() {
var original = kendo.data.PivotDataSource;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    axes: function() {
        /// <signature>
        /// <summary>
        /// Get the parsed axes data
        /// </summary>
        /// <returns type="Object">the parsed axes data</returns>
        /// </signature>
    },
    catalog: function(name) {
        /// <signature>
        /// <summary>
        /// Get or sets the current catalog name.
        /// </summary>
        /// <param name="name" type="String" >The name of the catalog.</param>
        /// <returns type="String">the current catalog name.</returns>
        /// </signature>
    },
    columns: function(val) {
        /// <signature>
        /// <summary>
        /// Get or sets the columns configuration.
        /// </summary>
        /// <param name="val" type="Array" >The columns configuration. Accepts the same values as the columns option.</param>
        /// <returns type="Array">the current columns configuration.</returns>
        /// </signature>
    },
    cube: function(name) {
        /// <signature>
        /// <summary>
        /// Get or sets the current cube name.
        /// </summary>
        /// <param name="name" type="String" >The name of the cube.</param>
        /// <returns type="String">the current cube name.</returns>
        /// </signature>
    },
    discover: function(options) {
        /// <signature>
        /// <summary>
        /// Starts discover request with given options.
        /// </summary>
        /// <param name="options" type="String" >The options of the discover request</param>
        /// <returns type="Object">Deferred object</returns>
        /// </signature>
    },
    measures: function(val) {
        /// <signature>
        /// <summary>
        /// Get or sets the measures configuration.
        /// </summary>
        /// <param name="val" type="Array" >The measures configuration. Accepts the same values as the measures option.</param>
        /// <returns type="Array">the current measures configuration.</returns>
        /// </signature>
    },
    measuresAxis: function() {
        /// <signature>
        /// <summary>
        /// Get the name of the axis on which measures are displayed.
        /// </summary>
        /// <returns type="String">the axis name.</returns>
        /// </signature>
    },
    rows: function(val) {
        /// <signature>
        /// <summary>
        /// Get or sets the rows configuration.
        /// </summary>
        /// <param name="val" type="Array" >The rows configuration. Accepts the same values as the row option.</param>
        /// <returns type="Array">the current rows configuration.</returns>
        /// </signature>
    },
    schemaCatalogs: function() {
        /// <signature>
        /// <summary>
        /// Request catalogs information.
        /// </summary>
        /// <returns type="Object">Deferred object</returns>
        /// </signature>
    },
    schemaCubes: function() {
        /// <signature>
        /// <summary>
        /// Request cubes schema information.
        /// </summary>
        /// <returns type="Object">Deferred object</returns>
        /// </signature>
    },
    schemaDimensions: function() {
        /// <signature>
        /// <summary>
        /// Request dimensions schema information.
        /// </summary>
        /// <returns type="Object">Deferred object</returns>
        /// </signature>
    },
    schemaHierarchies: function(dimensionName) {
        /// <signature>
        /// <summary>
        /// Request hierarchies schema information.
        /// </summary>
        /// <param name="dimensionName" type="String" >The name of the dimensions which is 'owner' of the hierarchy.</param>
        /// <returns type="Object">Deferred object</returns>
        /// </signature>
    },
    schemaLevels: function(hierarchyName) {
        /// <signature>
        /// <summary>
        /// Request levels schema information.
        /// </summary>
        /// <param name="hierarchyName" type="String" >The name of the hierarchy which is 'owner' of the level.</param>
        /// <returns type="Object">Deferred object</returns>
        /// </signature>
    },
    schemaMeasures: function() {
        /// <signature>
        /// <summary>
        /// Request measures schema information.
        /// </summary>
        /// <returns type="Object">Deferred object</returns>
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
    expand: function(start,end) {
        /// <signature>
        /// <summary>
        /// Expands all recurring events in the data and returns a list of events for a specific period.
        /// </summary>
        /// <param name="start" type="Date" >The start date of the period.</param>
        /// <param name="end" type="Date" >The end date of the period.</param>
        /// <returns type="Array">the expanded list of scheduler events filtered by the specified start/end period.</returns>
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
    clone: function(options,updateUid) {
        /// <signature>
        /// <summary>
        /// Clones the scheduler event.
        /// </summary>
        /// <param name="options" type="Object" >Additional options passed to the SchedulerEvent constructor.</param>
        /// <param name="updateUid" type="Boolean" >If you pass true the uid of the event will be updated.</param>
        /// <returns type="kendo.data.SchedulerEvent">the cloned scheduler event.</returns>
        /// </signature>
    },
    duration: function() {
        /// <signature>
        /// <summary>
        /// Returns the scheduler event length in milliseconds.
        /// </summary>
        /// <returns type="Number">the length of the event.</returns>
        /// </signature>
    },
    expand: function(start,end,timeZoneId) {
        /// <signature>
        /// <summary>
        /// Expands the event for a specific period based on the recurrenceRule option.
        /// </summary>
        /// <param name="start" type="Date" >The start date of the occurrence period.</param>
        /// <param name="end" type="Date" >The end date of the occurrence period.</param>
        /// <param name="timeZoneId" type="String" >The time zone ID used to convert the recurrence rule dates.</param>
        /// <returns type="Array">list of occurrences.</returns>
        /// </signature>
    },
    update: function(eventInfo) {
        /// <signature>
        /// <summary>
        /// Updates the scheduler event.
        /// </summary>
        /// <param name="eventInfo" type="Object" >The new values, which will be used to update the event.</param>
        /// </signature>
    },
    isMultiDay: function() {
        /// <signature>
        /// <summary>
        /// Checks whether the event is equal to or longer then twenty four hours.
        /// </summary>
        /// <returns type="Boolean">return true if event is equal to or longer then 24 hours.</returns>
        /// </signature>
    },
    isException: function() {
        /// <signature>
        /// <summary>
        /// Checks whether the event is a recurrence exception.
        /// </summary>
        /// <returns type="Boolean">return true if event is a recurrence exception.</returns>
        /// </signature>
    },
    isOccurrence: function() {
        /// <signature>
        /// <summary>
        /// Checks whether the event is an occurrence part of a recurring series.
        /// </summary>
        /// <returns type="Boolean">return true if event is an occurrence.</returns>
        /// </signature>
    },
    isRecurring: function() {
        /// <signature>
        /// <summary>
        /// Checks whether the event is part of a recurring series.
        /// </summary>
        /// <returns type="Boolean">return true if event is recurring.</returns>
        /// </signature>
    },
    isRecurrenceHead: function() {
        /// <signature>
        /// <summary>
        /// Checks whether the event is the head of a recurring series.
        /// </summary>
        /// <returns type="Boolean">return true if event is a recurrence head.</returns>
        /// </signature>
    },
    toOccurrence: function(options) {
        /// <signature>
        /// <summary>
        /// Converts the scheduler event to a event occurrence. Method will remove recurrenceRule, recurrenceException options, will add a recurrenceId field and will set id to the default one.
        /// </summary>
        /// <param name="options" type="Object" >Additional options passed to the SchedulerEvent constructor.</param>
        /// <returns type="kendo.data.SchedulerEvent">the occurrence.</returns>
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


intellisense.annotate(kendo.dataviz.diagram, {
    Circle: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.diagram.Circle</summary>
        /// </signature>
    }
});

kendo.dataviz.diagram.Circle = (function() {
var original = kendo.dataviz.diagram.Circle;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    visible: function(visible) {
        /// <signature>
        /// <summary>
        /// Gets or sets the visibilty of the current element.
        /// </summary>
        /// <param name="visible" type="Boolean" >The new visibility state.</param>
        /// <returns type="Boolean">True if the element is visible, false otherwise.</returns>
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


intellisense.annotate(kendo.dataviz.diagram, {
    Connection: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.diagram.Connection</summary>
        /// </signature>
    }
});

kendo.dataviz.diagram.Connection = (function() {
var original = kendo.dataviz.diagram.Connection;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    source: function(source) {
        /// <signature>
        /// <summary>
        /// Gets or sets the current source of the connection.This object can be a Point for a floating endpoint (i.e. not attached to a shape), a Shape or a Connector of a Shape. You can use the Shape.getConnector() method to fetch a Connector on the basis of its name. If a Shape is specified the Connection will attach to the "Auto" connector.
        /// </summary>
        /// <param name="source" type="Object" >If no source is specified the method will return the current object to which the Connection's endpoint is attached.</param>
        /// <returns type="Object">the connection source.</returns>
        /// </signature>
    },
    sourcePoint: function() {
        /// <signature>
        /// <summary>
        /// Gets the global coordinate of the connection's start (initial endpoint).
/// The method returns a Point independently of the object to which the source is attached.
        /// </summary>
        /// <returns type="kendo.dataviz.diagram.Point">the coordinates of the connection source.</returns>
        /// </signature>
    },
    target: function(target) {
        /// <signature>
        /// <summary>
        /// Gets or set the target of the Connection.This object can be a Point for a floating endpoint (i.e. not attached to a shape), a Shape or a Connector of a Shape. You can use the Shape.getConnector() method to fetch a Connector on the basis of its name. If a Shape is specified the Connection will attach to the "Auto" connector.
        /// </summary>
        /// <param name="target" type="Object" >If no source is specified the method will return the current object to which the Connection's endpoint is attached.</param>
        /// <returns type="Object">the connection target.</returns>
        /// </signature>
    },
    targetPoint: function() {
        /// <signature>
        /// <summary>
        /// Similar to the sourcePoint, this gets the coordinates of the target of the Connection independently of its endpoint attachement.
        /// </summary>
        /// <returns type="kendo.dataviz.diagram.Point">the coordinates of the connection target.</returns>
        /// </signature>
    },
    select: function(value) {
        /// <signature>
        /// <summary>
        /// Select or deselects the Connection.
        /// </summary>
        /// <param name="value" type="Boolean" >True to select the Connection and false to deselect it.</param>
        /// </signature>
    },
    type: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the (sub-) type of the Connection which defines the way it routes.The routing of a connection is the way that intermediate points of a Connection defines a route. A route is usually defined on the basis of constraints or behaviors. Currently the framework defines a default polyline route (which simply connects the given intermediate points) and a simple rectangular (aka cascading) route. The cascading type is useful when using tree layout and hierarchies; the routed Connection will in this case enhance the representation of the hierarchy and thus reproduce a classic organization diagram.
        /// </summary>
        /// <param name="value" type="String" ></param>
        /// </signature>
    },
    points: function() {
        /// <signature>
        /// <summary>
        /// Gets the intermediate points of the connection.
        /// </summary>
        /// <returns type="Array">the intermediate points of the connection.</returns>
        /// </signature>
    },
    allPoints: function() {
        /// <signature>
        /// <summary>
        /// Gets all points of the Connection.
/// This is the union of the endpoints and the intermediate points.
        /// </summary>
        /// <returns type="Array">all points of the connection.</returns>
        /// </signature>
    },
    redraw: function() {
        /// <signature>
        /// <summary>
        /// Redraws the Connection with the given options.
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


intellisense.annotate(kendo.dataviz.diagram, {
    Connector: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.diagram.Connector</summary>
        /// </signature>
    }
});

kendo.dataviz.diagram.Connector = (function() {
var original = kendo.dataviz.diagram.Connector;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    position: function(position) {
        /// <signature>
        /// <summary>
        /// Gets or sets the position of the Connector.
        /// </summary>
        /// <param name="position" type="kendo.dataviz.diagram.Point" >The new position of the connector.</param>
        /// <returns type="kendo.dataviz.diagram.Point">the current position of the connector.</returns>
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


intellisense.annotate(kendo.dataviz.diagram, {
    Group: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.diagram.Group</summary>
        /// </signature>
    }
});

kendo.dataviz.diagram.Group = (function() {
var original = kendo.dataviz.diagram.Group;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    append: function(element) {
        /// <signature>
        /// <summary>
        /// Appends the given element to the group
        /// </summary>
        /// <param name="element" type="Object" >The element to append.</param>
        /// </signature>
    },
    clear: function() {
        /// <signature>
        /// <summary>
        /// Removes all elements from the group.
        /// </summary>
        /// </signature>
    },
    remove: function(element) {
        /// <signature>
        /// <summary>
        /// Removes the given element from the group
        /// </summary>
        /// <param name="element" type="Object" >The element to remove.</param>
        /// </signature>
    },
    visible: function(visible) {
        /// <signature>
        /// <summary>
        /// Gets or sets the visibilty of the current element.
        /// </summary>
        /// <param name="visible" type="Boolean" >The new visibility state.</param>
        /// <returns type="Boolean">True if the element is visible, false otherwise.</returns>
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


intellisense.annotate(kendo.dataviz.diagram, {
    Image: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.diagram.Image</summary>
        /// </signature>
    }
});

kendo.dataviz.diagram.Image = (function() {
var original = kendo.dataviz.diagram.Image;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    visible: function(visible) {
        /// <signature>
        /// <summary>
        /// Gets or sets the visibilty of the current element.
        /// </summary>
        /// <param name="visible" type="Boolean" >The new visibility state.</param>
        /// <returns type="Boolean">True if the element is visible, false otherwise.</returns>
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


intellisense.annotate(kendo.dataviz.diagram, {
    Line: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.diagram.Line</summary>
        /// </signature>
    }
});

kendo.dataviz.diagram.Line = (function() {
var original = kendo.dataviz.diagram.Line;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    visible: function(visible) {
        /// <signature>
        /// <summary>
        /// Gets or sets the visibilty of the current element.
        /// </summary>
        /// <param name="visible" type="Boolean" >The new visibility state.</param>
        /// <returns type="Boolean">True if the element is visible, false otherwise.</returns>
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


intellisense.annotate(kendo.dataviz.diagram, {
    Point: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.diagram.Point</summary>
        /// </signature>
    }
});

kendo.dataviz.diagram.Point = (function() {
var original = kendo.dataviz.diagram.Point;
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


intellisense.annotate(kendo.dataviz.diagram, {
    Rect: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.diagram.Rect</summary>
        /// </signature>
    }
});

kendo.dataviz.diagram.Rect = (function() {
var original = kendo.dataviz.diagram.Rect;
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


intellisense.annotate(kendo.dataviz.diagram, {
    Rectangle: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.diagram.Rectangle</summary>
        /// </signature>
    }
});

kendo.dataviz.diagram.Rectangle = (function() {
var original = kendo.dataviz.diagram.Rectangle;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    visible: function(visible) {
        /// <signature>
        /// <summary>
        /// Gets or sets the visibilty of the current element.
        /// </summary>
        /// <param name="visible" type="Boolean" >The new visibility state.</param>
        /// <returns type="Boolean">True if the element is visible, false otherwise.</returns>
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


intellisense.annotate(kendo.dataviz.diagram, {
    Shape: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.diagram.Shape</summary>
        /// </signature>
    }
});

kendo.dataviz.diagram.Shape = (function() {
var original = kendo.dataviz.diagram.Shape;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    position: function(point) {
        /// <signature>
        /// <summary>
        /// Get or set method returning the current global position or sets the position specified.
        /// </summary>
        /// <param name="point" type="kendo.dataviz.diagram.Point" >Either the location to set or if no parameter given returns the current location.</param>
        /// </signature>
    },
    clone: function() {
        /// <signature>
        /// <summary>
        /// Returns a clone (with a different id) of the shape.
        /// </summary>
        /// <returns type="kendo.dataviz.diagram.Shape">A clone of the current shape.</returns>
        /// </signature>
    },
    select: function(value) {
        /// <signature>
        /// <summary>
        /// Selects or deselects the shape.
        /// </summary>
        /// <param name="value" type="Boolean" >Use 'true' to select the shape or 'false' to deselect it.</param>
        /// </signature>
    },
    connections: function(type) {
        /// <signature>
        /// <summary>
        /// Returns the connections attached to the shape. You can optionally specify to return only the incoming or outgoing connections.
        /// </summary>
        /// <param name="type" type="String" >If not parameter specified all connections are returned, if "in" then only the incoming (i.e. towards the shape) are returned, if "out" the only the outgoing (i.e. away from the shape) are returned.</param>
        /// </signature>
    },
    getConnector: function() {
        /// <signature>
        /// <summary>
        /// Fetches a (default or custom) Connector defined on the Shape by its name.
        /// </summary>
        /// </signature>
    },
    getPosition: function(side) {
        /// <signature>
        /// <summary>
        /// Returns the middle positions of the sides of the bounds or the center of the shape's bounds. This method is useful when defining custom connectors where a position function relative to the shape's coordinate system is required.
        /// </summary>
        /// <param name="side" type="String" >One of the four sides of a bound; "left", "right", "top", "bottom". If none specified the center of the shape's bounds will be returned.</param>
        /// </signature>
    },
    redraw: function() {
        /// <signature>
        /// <summary>
        /// Renders the shape with the given options. It redefines the options and redraws the shape accordingly.
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


intellisense.annotate(kendo.dataviz.diagram, {
    TextBlock: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.diagram.TextBlock</summary>
        /// </signature>
    }
});

kendo.dataviz.diagram.TextBlock = (function() {
var original = kendo.dataviz.diagram.TextBlock;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    content: function(content) {
        /// <signature>
        /// <summary>
        /// Gets or sets the text block content.
        /// </summary>
        /// <param name="content" type="String" >The new text content.</param>
        /// <returns type="String">the current text content.</returns>
        /// </signature>
    },
    visible: function(visible) {
        /// <signature>
        /// <summary>
        /// Gets or sets the visibilty of the current element.
        /// </summary>
        /// <param name="visible" type="Boolean" >The new visibility state.</param>
        /// <returns type="Boolean">True if the element is visible, false otherwise.</returns>
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
    resize: function(force) {
        /// <signature>
        /// <summary>
        /// Adjusts the widget layout to match the size of the container.
        /// </summary>
        /// <param name="force" type="Boolean" >Defines whether the widget should proceed with resizing even if the element dimensions have not changed.</param>
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
    resize: function(force) {
        /// <signature>
        /// <summary>
        /// Adjusts the chart layout to match the size of the container.
        /// </summary>
        /// <param name="force" type="Boolean" >Defines whether the widget should proceed with resizing even if the element dimensions have not changed.</param>
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
    setOptions: function(options) {
        /// <signature>
        /// <summary>
        /// Sets the widget options. Changes are cumulative.
        /// </summary>
        /// <param name="options" type="Object" >The chart settings to update.</param>
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
    Diagram: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.ui.Diagram</summary>
        /// </signature>
    }
});

kendo.dataviz.ui.Diagram = (function() {
var original = kendo.dataviz.ui.Diagram;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the widget for safe removal from the DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    zoom: function(zoom,staticPoint) {
        /// <signature>
        /// <summary>
        /// Zooms in or out of the diagram.
        /// </summary>
        /// <param name="zoom" type="Number" >The zoom factor.</param>
        /// <param name="staticPoint" type="Object" >The point to zoom into or out of.</param>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the data source of the diagram.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" >The data source to which the widget should be bound.</param>
        /// </signature>
    },
    save: function() {
        /// <signature>
        /// <summary>
        /// Saves the diagram.
        /// </summary>
        /// </signature>
    },
    load: function(json) {
        /// <signature>
        /// <summary>
        /// Loads a saved diagram.
        /// </summary>
        /// <param name="json" type="String" >The serialized diagram in JSON format.</param>
        /// </signature>
    },
    pan: function(pan) {
        /// <signature>
        /// <summary>
        /// Pans the diagram with a specified delta (represented as a Point).
        /// </summary>
        /// <param name="pan" type="Object" >The translation delta to apply to the diagram.</param>
        /// </signature>
    },
    viewport: function() {
        /// <signature>
        /// <summary>
        /// The bounds of the diagramming canvas.
        /// </summary>
        /// </signature>
    },
    viewToDocument: function(point) {
        /// <signature>
        /// <summary>
        /// Transforms a point from View coordinates to Page document coordinates. View origin is the diagram container.
        /// </summary>
        /// <param name="point" type="Object" >The point in Page document coordinates.</param>
        /// <returns type="Object">the transformed point</returns>
        /// </signature>
    },
    documentToView: function(point) {
        /// <signature>
        /// <summary>
        /// Transforms a point from Page document coordinates to View coordinates. View origin is the diagram container.
        /// </summary>
        /// <param name="point" type="Object" >The point in View coordinates.</param>
        /// <returns type="Object">the transformed point</returns>
        /// </signature>
    },
    viewToModel: function(point) {
        /// <signature>
        /// <summary>
        /// Transforms a point from View coordinates to Model coordinates. Model coordinates are independent coordinates to define Shape bounds.
        /// </summary>
        /// <param name="point" type="Object" >The point in View coordinates.</param>
        /// <returns type="Object">the transformed point</returns>
        /// </signature>
    },
    modelToView: function(point) {
        /// <signature>
        /// <summary>
        /// Transforms a point from Model coordinates to View coordinates. Model coordinates are independent coordinates to define Shape bounds.
        /// </summary>
        /// <param name="point" type="Object" >The point in Model coordinates.</param>
        /// <returns type="Object">the transformed point</returns>
        /// </signature>
    },
    modelToLayer: function(point) {
        /// <signature>
        /// <summary>
        /// Transforms a point from Model coordinates to Layer coordinates. Layer coordinates are relative to the drawing surface.
        /// </summary>
        /// <param name="point" type="Object" >The point in Model coordinates.</param>
        /// <returns type="Object">the transformed point</returns>
        /// </signature>
    },
    layerToModel: function(point) {
        /// <signature>
        /// <summary>
        /// Transforms a point from Layer coordinates to Model coordinates. Layer coordinates are relative to the drawable surface.
        /// </summary>
        /// <param name="point" type="Object" >The point in layer coordinates.</param>
        /// <returns type="Object">the transformed point</returns>
        /// </signature>
    },
    documentToModel: function(point) {
        /// <signature>
        /// <summary>
        /// Transforms a point from Page document coordinates to Model coordinates. Shortcut for viewToModel(documentToView(point))
        /// </summary>
        /// <param name="point" type="Object" >The point in Page document coordinates.</param>
        /// <returns type="Object">the transformed point</returns>
        /// </signature>
    },
    modelToDocument: function(point) {
        /// <signature>
        /// <summary>
        /// Transforms a point from Model coordinates to Page document coordinates. Shortcut for viewToDocument(modelToView(point))
        /// </summary>
        /// <param name="point" type="Object" >The point in Model coordinates.</param>
        /// <returns type="Object">the transformed point</returns>
        /// </signature>
    },
    transformPoint: function(p) {
        /// <signature>
        /// <summary>
        /// Transforms a point from the main canvas coordinates to the non-transformed origin.
        /// </summary>
        /// <param name="p" type="Object" >An arbitrary point to transform to the diagram coordinate system.</param>
        /// </signature>
    },
    transformRect: function(r) {
        /// <signature>
        /// <summary>
        /// Transforms a given rectangle to the diagram coordinate system.
        /// </summary>
        /// <param name="r" type="Object" >The rectangle to be transformed.</param>
        /// </signature>
    },
    focus: function() {
        /// <signature>
        /// <summary>
        /// Sets the focus on the diagram.
        /// </summary>
        /// </signature>
    },
    clear: function() {
        /// <signature>
        /// <summary>
        /// Clears the content of the diagram.
        /// </summary>
        /// </signature>
    },
    connect: function(source,target,options) {
        /// <signature>
        /// <summary>
        /// Creates a connection which can be either attached on both ends to a shape, half attached or floating (not attached to any shape). When a connection is (half) attached to a shape it happens through the intermediate Connector object. Connectors are part of a Shape's definition and you can specify the binding of a connection to a shape directly via the shape or via one of its connectors. If you specify a Shape as a connection's endpoint the Auto-connector will be used. This means that the endpoint of the connection will switch to the most convenient (in the sense of shortest path) connector automatically. If you specify a shape's connector as an endpoint for a connection the endpoint will remain attached to that given Connector instance.
/// Finally, if you wish to have a (half) floating connection endpoint you should specify a Point as parameter for the floating end.
        /// </summary>
        /// <param name="source" type="Object" >The source definition of the connection. This can be a Shape, a Connector or a Point.</param>
        /// <param name="target" type="Object" >The target definition of the connection. This can be a Shape, a Connector or a Point.</param>
        /// <param name="options" type="Object" >The options of the new connection. See connections options.</param>
        /// </signature>
    },
    connected: function(source,target) {
        /// <signature>
        /// <summary>
        /// Returns whether the two given shapes are connected through a connection.
        /// </summary>
        /// <param name="source" type="Object" >A Shape in the diagram.</param>
        /// <param name="target" type="Object" >A Shape in the diagram.</param>
        /// </signature>
    },
    addConnection: function(connection,undoable) {
        /// <signature>
        /// <summary>
        /// Adds the given Connection to the diagram.
        /// </summary>
        /// <param name="connection" type="Object" >The Connection instance to be added to the diagram.</param>
        /// <param name="undoable" type="Boolean" >Whether the addition should be recorded in the undo-redo stack.</param>
        /// </signature>
    },
    addShape: function(obj,undoable) {
        /// <signature>
        /// <summary>
        /// Adds a new shape to the diagram.
        /// </summary>
        /// <param name="obj" type="Object" >A Shape instance or a Point where the default shape type will be added.</param>
        /// <param name="undoable" type="Boolean" >Whether the addition should be recorded in the undo-redo stack.</param>
        /// </signature>
    },
    undo: function() {
        /// <signature>
        /// <summary>
        /// Undoes the previous action.
        /// </summary>
        /// </signature>
    },
    redo: function() {
        /// <signature>
        /// <summary>
        /// Executes again the previously undone action.
        /// </summary>
        /// </signature>
    },
    remove: function(items,undoable) {
        /// <signature>
        /// <summary>
        /// Removes one or more items from the diagram
        /// </summary>
        /// <param name="items" type="Object" >A diagram item or an array of diagram items to remove.</param>
        /// <param name="undoable" type="Boolean" >Whether the removal should be recorded in the undo-redo stack.</param>
        /// </signature>
    },
    select: function(obj,options) {
        /// <signature>
        /// <summary>
        /// Gets the currently selected items is no parameter is specified. If a parameter is specified this selects items in the diagram on the basis of the given input.
        /// </summary>
        /// <param name="obj" type="Object" ></param>
        /// <param name="options" type="Object" >Only one Boolean option is currently defined; addToSelection. If set to true the newly selected items will be added to the existing selection. Otherwise a new selection set is created. The default is false.</param>
        /// </signature>
    },
    toFront: function(items,undoable) {
        /// <signature>
        /// <summary>
        /// Brings the specified items in front, i.e. it's reordering items to ensure they are on top of the complementary items.
        /// </summary>
        /// <param name="items" type="Array" >An array of diagram items.</param>
        /// <param name="undoable" type="Boolean" >Whether the change should be recorded in the undo-redo stack.</param>
        /// </signature>
    },
    toBack: function(items,undoable) {
        /// <signature>
        /// <summary>
        /// Sends the specified items to the back, i.e. it's reordering items to ensure they are underneath the complementary items.
        /// </summary>
        /// <param name="items" type="Array" >An array of diagram items.</param>
        /// <param name="undoable" type="Boolean" >Whether the change should be recorded in the undo-redo stack.</param>
        /// </signature>
    },
    bringIntoView: function(obj,options) {
        /// <signature>
        /// <summary>
        /// Brings one or more items into the view in function of various criteria.
        /// </summary>
        /// <param name="obj" type="Object" ></param>
        /// <param name="options" type="Object" ></param>
        /// </signature>
    },
    boundingBox: function(items) {
        /// <signature>
        /// <summary>
        /// 
        /// </summary>
        /// <param name="items" type="Array" >The items (shapes and connections) to include in the bounding box. Defaults to all items if not specified.</param>
        /// <returns type="kendo.dataviz.diagram.Rect">The bounding rectangle of the specified items. If nothing is specified the bounding box of the all diagram will be returned.</returns>
        /// </signature>
    },
    copy: function() {
        /// <signature>
        /// <summary>
        /// Puts a copy of the currently selected diagram to an internal clipboard.
        /// </summary>
        /// </signature>
    },
    cut: function() {
        /// <signature>
        /// <summary>
        /// Cuts the currently selected diagram items to an internal clipboard.
        /// </summary>
        /// </signature>
    },
    paste: function() {
        /// <signature>
        /// <summary>
        /// Pastes the content of the internal diagram clipboard.
        /// </summary>
        /// </signature>
    },
    layout: function(options) {
        /// <signature>
        /// <summary>
        /// Applies a layout algorithm on the current diagram.A more detailed overview of layout and graph analysis can be found below.
        /// </summary>
        /// <param name="options" type="Object" >The layout options. See options.layout for a full reference.</param>
        /// </signature>
    },
    alignShapes: function(direction) {
        /// <signature>
        /// <summary>
        /// Aligns the edges (as defined by the bounding box) of the selected shapes.
        /// </summary>
        /// <param name="direction" type="String" >This can be one of the four supported directions:</param>
        /// </signature>
    },
    getShapeById: function(id) {
        /// <signature>
        /// <summary>
        /// Returns the shape or connection with the specified identifier.
        /// </summary>
        /// <param name="id" type="String" >The unique identifier of the Shape or Connection</param>
        /// <returns type="Object">the item that has the provided ID.</returns>
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


jQuery.fn.kendoDiagram = function() {
    this.data("kendoDiagram", new kendo.dataviz.ui.Diagram());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoDiagram: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.dataviz.ui.Diagram widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.dataviz.ui.Diagram">The kendo.dataviz.ui.Diagram instance (if present).</returns>
        /// </signature>
    },
    kendoDiagram: function(options) {
        /// <signature>
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
    resize: function(force) {
        /// <signature>
        /// <summary>
        /// Adjusts the widget layout to match the size of the container.
        /// </summary>
        /// <param name="force" type="Boolean" >Defines whether the widget should proceed with resizing even if the element dimensions have not changed.</param>
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
    Map: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.ui.Map</summary>
        /// </signature>
    }
});

kendo.dataviz.ui.Map = (function() {
var original = kendo.dataviz.ui.Map;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    center: function(center) {
        /// <signature>
        /// <summary>
        /// Gets or sets the map center.
/// The setter is chainable, i.e. returns the map instance.
        /// </summary>
        /// <param name="center" type="Object" >The location of the new map center. An array argument is assumed to be in [Latitude, Lonigude] order.</param>
        /// <returns type="kendo.dataviz.map.Location">The current map center.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    eventOffset: function(e) {
        /// <signature>
        /// <summary>
        /// Returns the event coordinates relative to the map element.
/// Offset coordinates are not synchronized to a particular location on the map.
        /// </summary>
        /// <param name="e" type="Object" >The DOM or jQuery mouse event.</param>
        /// <returns type="kendo.dataviz.geometry.Point">The event coordinates relative to the map element.</returns>
        /// </signature>
    },
    eventToLayer: function(e) {
        /// <signature>
        /// <summary>
        /// Retrieves projected (layer) coordinates that correspond to this mouse event.
/// Layer coordinates are absolute and change only when the zoom level is changed.
        /// </summary>
        /// <param name="e" type="Object" >The DOM or jQuery mouse event.</param>
        /// <returns type="kendo.dataviz.geometry.Point">The projected (layer) coordinates that correspond to this mouse event.</returns>
        /// </signature>
    },
    eventToLocation: function(e) {
        /// <signature>
        /// <summary>
        /// Retrieves the geographic location that correspond to this mouse event.
        /// </summary>
        /// <param name="e" type="Object" >The DOM or jQuery mouse event.</param>
        /// <returns type="kendo.dataviz.geometry.Point">The geographic location that correspond to this mouse event.</returns>
        /// </signature>
    },
    eventToView: function(e) {
        /// <signature>
        /// <summary>
        /// Retrieves relative (view) coordinates that correspond to this mouse event.
/// Layer elements positioned on these coordinates will appear under the mouse cursor.View coordinates are no longer valid after a map reset.
        /// </summary>
        /// <param name="e" type="Object" >The DOM or jQuery mouse event.</param>
        /// <returns type="kendo.dataviz.geometry.Point">The relative (view) coordinates that correspond to this mouse event.</returns>
        /// </signature>
    },
    extent: function() {
        /// <signature>
        /// <summary>
        /// Gets the map current map extent.
        /// </summary>
        /// <returns type="kendo.dataviz.map.Extent">The current map extent.</returns>
        /// </signature>
    },
    layerToLocation: function(point,zoom) {
        /// <signature>
        /// <summary>
        /// Transforms layer (projected) coordinates to geographical location.
        /// </summary>
        /// <param name="point" type="Object" >The layer (projected) coordinates. An array argument is assumed to be in x, y order.</param>
        /// <param name="zoom" type="Number" >Optional. Assumed zoom level. Defaults to the current zoom level.</param>
        /// <returns type="kendo.dataviz.map.Location">The geographic location that corresponds to the layer coordinates.</returns>
        /// </signature>
    },
    locationToLayer: function(location,zoom) {
        /// <signature>
        /// <summary>
        /// Returns the layer (projected) coordinates that correspond to a geographical location.
        /// </summary>
        /// <param name="location" type="Object" >The geographic location. An array argument is assumed to be in [Latitude, Lonigude] order.</param>
        /// <param name="zoom" type="Number" >Optional. Assumed zoom level. Defaults to the current zoom level.</param>
        /// <returns type="kendo.dataviz.geometry.Point">The layer (projected) coordinates.</returns>
        /// </signature>
    },
    locationToView: function(location) {
        /// <signature>
        /// <summary>
        /// Returns the view (relative) coordinates that correspond to a geographical location.
        /// </summary>
        /// <param name="location" type="Object" >The geographic location. An array argument is assumed to be in [Latitude, Lonigude] order.</param>
        /// <returns type="kendo.dataviz.geometry.Point">The view coordinates that correspond to a geographical location.</returns>
        /// </signature>
    },
    resize: function(force) {
        /// <signature>
        /// <summary>
        /// Adjusts the widget layout to match the size of the container.
        /// </summary>
        /// <param name="force" type="Boolean" >Defines whether the widget should proceed with resizing even if the element dimensions have not changed.</param>
        /// </signature>
    },
    setOptions: function(options) {
        /// <signature>
        /// <summary>
        /// Resets the map and applies new options over the current state.
        /// </summary>
        /// <param name="options" type="Object" >The new options to be applied.</param>
        /// </signature>
    },
    viewSize: function() {
        /// <signature>
        /// <summary>
        /// Retrieves the size of the visible portion of the map.
        /// </summary>
        /// <returns type="Object">The size (width and height) of the visible portion of the map.</returns>
        /// </signature>
    },
    viewToLocation: function(point,zoom) {
        /// <signature>
        /// <summary>
        /// Returns the geographical location that correspond to the view (relative) coordinates.
        /// </summary>
        /// <param name="point" type="Object" >The view coordinates. An array argument is assumed to be in x, y order.</param>
        /// <param name="zoom" type="Number" >Optional. Assumed zoom level. Defaults to the current zoom level.</param>
        /// <returns type="kendo.dataviz.map.Location">The geographic location that corresponds to the view coordinates.</returns>
        /// </signature>
    },
    zoom: function(level) {
        /// <signature>
        /// <summary>
        /// Gets or sets the map zoom level.
/// The setter is chainable, i.e. returns the map instance.
        /// </summary>
        /// <param name="level" type="Number" >The new zoom level. The value is clamped to the  [minZoom, maxZoom] interval.</param>
        /// <returns type="Number">The current zoom level.</returns>
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


jQuery.fn.kendoMap = function() {
    this.data("kendoMap", new kendo.dataviz.ui.Map());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMap: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.dataviz.ui.Map widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.dataviz.ui.Map">The kendo.dataviz.ui.Map instance (if present).</returns>
        /// </signature>
    },
    kendoMap: function(options) {
        /// <signature>
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
    resize: function(force) {
        /// <signature>
        /// <summary>
        /// Adjusts the widget layout to match the size of the container.
        /// </summary>
        /// <param name="force" type="Boolean" >Defines whether the widget should proceed with resizing even if the element dimensions have not changed.</param>
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
    resize: function(force) {
        /// <signature>
        /// <summary>
        /// Adjusts the widget layout to match the size of the container.
        /// </summary>
        /// <param name="force" type="Boolean" >Defines whether the widget should proceed with resizing even if the element dimensions have not changed.</param>
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
    setOptions: function(options) {
        /// <signature>
        /// <summary>
        /// Sets the widget options. Changes are cumulative.
        /// </summary>
        /// <param name="options" type="Object" >The chart settings to update.</param>
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
    resize: function(force) {
        /// <signature>
        /// <summary>
        /// Adjusts the chart layout to match the size of the container.
        /// </summary>
        /// <param name="force" type="Boolean" >Defines whether the widget should proceed with resizing even if the element dimensions have not changed.</param>
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

intellisense.annotate(kendo.dataviz.ui, {
    TreeMap: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.ui.TreeMap</summary>
        /// </signature>
    }
});

kendo.dataviz.ui.TreeMap = (function() {
var original = kendo.dataviz.ui.TreeMap;
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


jQuery.fn.kendoTreeMap = function() {
    this.data("kendoTreeMap", new kendo.dataviz.ui.TreeMap());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoTreeMap: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.dataviz.ui.TreeMap widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.dataviz.ui.TreeMap">The kendo.dataviz.ui.TreeMap instance (if present).</returns>
        /// </signature>
    },
    kendoTreeMap: function(options) {
        /// <signature>
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
        /// Returns the kendo.mobile.ui.View which contains the widget. If the widget is contained in a splitview, modalview, or drawer, the respective widget instance is returned.
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


jQuery.fn.kendoMobileWidget = function() {
    this.data("kendoMobileWidget", new kendo.mobile.ui.Widget());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileWidget: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.Widget widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Widget">The kendo.mobile.ui.Widget instance (if present).</returns>
        /// </signature>
    },
    kendoMobileWidget: function(options) {
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
    cancelHold: function() {
        /// <signature>
        /// <summary>
        /// Has effect only when holdToDrag is set to true. Cancels the activated state of the widget, caused by pressing and holding.
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
        /// &#10;filter — String (default: null)
        /// &#10;Selector to filter the drop targets in the area. Every matched element acts as a drop target and fires events on the DropTargetArea. Specifying the filter is mandatory.
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
        /// Attaches a handler to an event. Examples and more info can be found in the bind section of the kendo.Observable API reference.
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
        /// Attaches a handler to an event. The handler is executed only once. Examples and more info can be found in the one section of the
/// kendo.Observable API reference.
        /// </summary>
        /// </signature>
    },
    setOptions: function(newOptions) {
        /// <signature>
        /// <summary>
        /// Allows changing the widget configuration after initialization. Depending on the widget, some properties may not be changed, e.g. ones that influence the widget's HTML output (such as Grid scrollability or columns).
        /// </summary>
        /// <param name="newOptions" type="Object" >The options to be changed or added.</param>
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
