/* global intellisense */
// jshint unused: false



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
    toHSV: function() {
        /// <signature>
        /// <summary>
        /// Returns the color in HSV representation.  As HSV object, it has the
/// following properties:This does not modify the current object, it creates a new one instead.
        /// </summary>
        /// <returns type="Object">An object with h, s, v and a fields.</returns>
        /// </signature>
    },
    toRGB: function() {
        /// <signature>
        /// <summary>
        /// Returns the color in RGB representation.  The result has the following
/// properties:This does not modify the current object, it creates a new one instead.
        /// </summary>
        /// <returns type="Object">An object with r, g, b and a fields.</returns>
        /// </signature>
    },
    toBytes: function() {
        /// <signature>
        /// <summary>
        /// Returns the color in "Bytes" representation.  It has the same properties as
/// RGB, but r, g and b are integers between 0 and 255 instead of floats.This does not modify the current object, it creates a new one instead.
        /// </summary>
        /// <returns type="Object">An object with r, g and b fields.</returns>
        /// </signature>
    },
    toHex: function() {
        /// <signature>
        /// <summary>
        /// Returns a string in "FF0000" form (without a leading #).
        /// </summary>
        /// <returns type="String">The color in hex notation.</returns>
        /// </signature>
    },
    toCss: function() {
        /// <signature>
        /// <summary>
        /// Like toHex, but includes a leading #.
        /// </summary>
        /// <returns type="String">The color in CSS notation.</returns>
        /// </signature>
    },
    toCssRgba: function() {
        /// <signature>
        /// <summary>
        /// Returns the color in RGBA notation (includes the opacity).
        /// </summary>
        /// <returns type="String">The color in RGBA notation.</returns>
        /// </signature>
    },
    toDisplay: function() {
        /// <signature>
        /// <summary>
        /// Returns the color in the best notation supported by the current browser.  In
/// IE < 9 this returns the #FF0000 form; in all other browsers it returns the
/// RGBA form.
        /// </summary>
        /// <returns type="String">The color in the best notation supported by the current browser.</returns>
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
    start: function() {
        /// <signature>
        /// <summary>
        /// Activates the router binding to the URL changes.
        /// </summary>
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
        /// Navigates to the given route, replacing the current view in the history stack (like window.history.replaceState or location.replace work).
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
/// the data method will return the group items.Compare with the view method, which will return the data items that correspond to the current page, filter, sort and group configuration.
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
        /// <returns type="Promise">A promise that will be resolved when the data has been loaded, or rejected if an HTTP error occurs.</returns>
        /// </signature>
    },
    filter: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the filter configuration.
        /// </summary>
        /// <param name="value" type="Object" >The filter configuration. Accepts the same values as the filter option (check there for more examples).</param>
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
        /// Checks if the data items have changed.
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
    online: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the online state of the data source.
        /// </summary>
        /// <param name="value" type="Boolean" >The online state - true for online, false for offline.</param>
        /// <returns type="Boolean">the current online state - true if online; otherwise false.</returns>
        /// </signature>
    },
    offlineData: function(data) {
        /// <signature>
        /// <summary>
        /// Gets or sets the offline state of the data source.
        /// </summary>
        /// <param name="data" type="Array" >The array of data items that replace the current offline state of the data source.</param>
        /// <returns type="Array">array of JavaScript objects that represent the data items. Changed data items have a __state__ field attached. That field indicates the type of change: "create", "update" or "destroy". Unmodified data items don't have a __state__ field.</returns>
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
        /// Executes the specified query over the data items. Makes a HTTP request if bound to a remote service.This method is useful when you need to modify several parameters of the data request at the same time (e.g. filtering and sorting).
/// If you execute filter() and then sort(), the DataSource will make two separate requests. With query(), it will make one request.
        /// </summary>
        /// <param name="options" type="" >The query options which should be applied.</param>
        /// <returns type="Promise">A promise that will be resolved when the data has been loaded, or rejected if an HTTP error occurs.</returns>
        /// </signature>
    },
    read: function(data) {
        /// <signature>
        /// <summary>
        /// Reads data items from a remote service (if the transport option is set) or from a JavaScript array (if the data option is set).
        /// </summary>
        /// <param name="data" type="Object" >Optional data to pass to the remote service. If you need to filter, it is better to use the filter() method or the query() method with a filter parameter.</param>
        /// <returns type="Promise">A promise that will be resolved when the data has been loaded, or rejected if an HTTP error occurs.</returns>
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
        /// <returns type="Promise">A promise that will be resolved when all sync requests have finished succesfully, or rejected if any single request fails.</returns>
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
        /// Returns the data items which correspond to the current page, filter, sort and group configuration.
/// Compare with the data method, which will return data items from all pages, if local data binding and paging are used.To ensure that data is available this method should be used within the change event handler or the fetch method.
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


intellisense.annotate(kendo.data, {
    TreeListDataSource: function() {
        /// <signature>
        /// <summary>Constructor of kendo.data.TreeListDataSource</summary>
        /// </signature>
    }
});

kendo.data.TreeListDataSource = (function() {
var original = kendo.data.TreeListDataSource;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    load: function(model) {
        /// <signature>
        /// <summary>
        /// Loads the child nodes of a model.
        /// </summary>
        /// <param name="model" type="kendo.data.TreeListModel" >The model that must be loaded.</param>
        /// <returns type="Promise">A promise that will be resolved when the child nodes have been loaded, or rejected if an HTTP error occurs.</returns>
        /// </signature>
    },
    childNodes: function(model) {
        /// <signature>
        /// <summary>
        /// Child nodes for model.
        /// </summary>
        /// <param name="model" type="kendo.data.TreeListModel" >The model whose children must be returned.</param>
        /// <returns type="Array">of the child items.</returns>
        /// </signature>
    },
    rootNodes: function() {
        /// <signature>
        /// <summary>
        /// Return all root nodes.
        /// </summary>
        /// <returns type="Array">of the root items.</returns>
        /// </signature>
    },
    parentNode: function(model) {
        /// <signature>
        /// <summary>
        /// The parent of given node.
        /// </summary>
        /// <param name="model" type="kendo.data.TreeListModel" >The model whose parent must be returned.</param>
        /// <returns type="kendo.data.TreeListModel">parent of the node.</returns>
        /// </signature>
    },
    level: function(model) {
        /// <signature>
        /// <summary>
        /// The hierarchical level of the node.
        /// </summary>
        /// <param name="model" type="kendo.data.TreeListModel" >The model whose level must be calculated.</param>
        /// <returns type="Number">the hierachy level of the node.</returns>
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
    TreeListModel: function() {
        /// <signature>
        /// <summary>Constructor of kendo.data.TreeListModel</summary>
        /// </signature>
    }
});

kendo.data.TreeListModel = (function() {
var original = kendo.data.TreeListModel;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    loaded: function() {
        /// <signature>
        /// <summary>
        /// Gets or sets the loaded flag of the TreeList. Setting the loaded flag to false allows reloading of child items.
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


intellisense.annotate(kendo.dataviz, {
    ChartAxis: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.ChartAxis</summary>
        /// </signature>
    }
});

kendo.dataviz.ChartAxis = (function() {
var original = kendo.dataviz.ChartAxis;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    range: function() {
        /// <signature>
        /// <summary>
        /// Returns an object with the axis minimum and maximum values.
        /// </summary>
        /// <returns type="Object">the object with the min and max values.</returns>
        /// </signature>
    },
    slot: function(from,to) {
        /// <signature>
        /// <summary>
        /// Returns a slot based on the specified from and to values.
        /// </summary>
        /// <param name="from" type="Object" >The slot from value.</param>
        /// <param name="to" type="Object" >The slot to value. If a to value is not specified, then the from value will be used.</param>
        /// <returns type="kendo.geometry.Rect|kendo.geometry.Arc">a rectangle or arc(for radar category and polar x axis) representing the slot.</returns>
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
    position: function(offset) {
        /// <signature>
        /// <summary>
        /// Get or sets the element position.
        /// </summary>
        /// <param name="offset" type="kendo.dataviz.diagram.Point" >The origin of the element.</param>
        /// </signature>
    },
    rotate: function(angle,center) {
        /// <signature>
        /// <summary>
        /// Rotates the element with the specified parameters.
        /// </summary>
        /// <param name="angle" type="Number" >The angle of rotation in decimal degrees. Measured in clockwise direction with 0 pointing "right". Negative values or values greater than 360 will be normalized.</param>
        /// <param name="center" type="kendo.dataviz.diagram.Point" >The center of rotation.</param>
        /// </signature>
    },
    visible: function(visible) {
        /// <signature>
        /// <summary>
        /// Gets or sets the visibility of the current element.
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
    position: function() {
        /// <signature>
        /// <summary>
        /// Gets the position of the Connector.
        /// </summary>
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
    position: function(offset) {
        /// <signature>
        /// <summary>
        /// Get or sets the element position.
        /// </summary>
        /// <param name="offset" type="kendo.dataviz.diagram.Point" >The origin of the element.</param>
        /// </signature>
    },
    rotate: function(angle,center) {
        /// <signature>
        /// <summary>
        /// Rotates the element with the specified parameters.
        /// </summary>
        /// <param name="angle" type="Number" >The angle of rotation in decimal degrees. Measured in clockwise direction with 0 pointing "right". Negative values or values greater than 360 will be normalized.</param>
        /// <param name="center" type="kendo.dataviz.diagram.Point" >The center of rotation.</param>
        /// </signature>
    },
    visible: function(visible) {
        /// <signature>
        /// <summary>
        /// Gets or sets the visibility of the current element.
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
    position: function(offset) {
        /// <signature>
        /// <summary>
        /// Get or sets the element position.
        /// </summary>
        /// <param name="offset" type="kendo.dataviz.diagram.Point" >The origin of the element.</param>
        /// </signature>
    },
    rotate: function(angle,center) {
        /// <signature>
        /// <summary>
        /// Rotates the element with the specified parameters.
        /// </summary>
        /// <param name="angle" type="Number" >The angle of rotation in decimal degrees. Measured in clockwise direction with 0 pointing "right". Negative values or values greater than 360 will be normalized.</param>
        /// <param name="center" type="kendo.dataviz.diagram.Point" >The center of rotation.</param>
        /// </signature>
    },
    visible: function(visible) {
        /// <signature>
        /// <summary>
        /// Gets or sets the visibility of the current element.
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
    Layout: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.diagram.Layout</summary>
        /// </signature>
    }
});

kendo.dataviz.diagram.Layout = (function() {
var original = kendo.dataviz.diagram.Layout;
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
    rect: function(rect) {
        /// <signature>
        /// <summary>
        /// Gets or sets the layout rectangle.
        /// </summary>
        /// <param name="rect" type="kendo.dataviz.diagram.Rect" >The layout rectangle.</param>
        /// <returns type="kendo.dataviz.diagram.Rect">The current rectangle.</returns>
        /// </signature>
    },
    reflow: function() {
        /// <signature>
        /// <summary>
        /// Arranges the elements based on the current options.
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
        /// Gets or sets the visibility of the current element.
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
    position: function(offset) {
        /// <signature>
        /// <summary>
        /// Get or sets the element position.
        /// </summary>
        /// <param name="offset" type="kendo.dataviz.diagram.Point" >The origin of the element.</param>
        /// </signature>
    },
    rotate: function(angle,center) {
        /// <signature>
        /// <summary>
        /// Rotates the element with the specified parameters.
        /// </summary>
        /// <param name="angle" type="Number" >The angle of rotation in decimal degrees. Measured in clockwise direction with 0 pointing "right". Negative values or values greater than 360 will be normalized.</param>
        /// <param name="center" type="kendo.dataviz.diagram.Point" >The center of rotation.</param>
        /// </signature>
    },
    visible: function(visible) {
        /// <signature>
        /// <summary>
        /// Gets or sets the visibility of the current element.
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
    position: function(offset) {
        /// <signature>
        /// <summary>
        /// Get or sets the element position.
        /// </summary>
        /// <param name="offset" type="kendo.dataviz.diagram.Point" >The origin of the element.</param>
        /// </signature>
    },
    rotate: function(angle,center) {
        /// <signature>
        /// <summary>
        /// Rotates the element with the specified parameters.
        /// </summary>
        /// <param name="angle" type="Number" >The angle of rotation in decimal degrees. Measured in clockwise direction with 0 pointing "right". Negative values or values greater than 360 will be normalized.</param>
        /// <param name="center" type="kendo.dataviz.diagram.Point" >The center of rotation.</param>
        /// </signature>
    },
    visible: function(visible) {
        /// <signature>
        /// <summary>
        /// Gets or sets the visibility of the current element.
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
    position: function(offset) {
        /// <signature>
        /// <summary>
        /// Get or sets the element position.
        /// </summary>
        /// <param name="offset" type="kendo.dataviz.diagram.Point" >The origin of the element.</param>
        /// </signature>
    },
    rotate: function(angle,center) {
        /// <signature>
        /// <summary>
        /// Rotates the element with the specified parameters.
        /// </summary>
        /// <param name="angle" type="Number" >The angle of rotation in decimal degrees. Measured in clockwise direction with 0 pointing "right". Negative values or values greater than 360 will be normalized.</param>
        /// <param name="center" type="kendo.dataviz.diagram.Point" >The center of rotation.</param>
        /// </signature>
    },
    visible: function(visible) {
        /// <signature>
        /// <summary>
        /// Gets or sets the visibility of the current element.
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


intellisense.annotate(kendo.dataviz.map, {
    Extent: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.map.Extent</summary>
        /// </signature>
    }
});

kendo.dataviz.map.Extent = (function() {
var original = kendo.dataviz.map.Extent;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    contains: function(location) {
        /// <signature>
        /// <summary>
        /// Tests if a location is contained within the extent.
        /// </summary>
        /// <param name="location" type="kendo.dataviz.map.Location" >The location to test for.</param>
        /// <returns type="Boolean">true if the extent contains the location, false otherwise.</returns>
        /// </signature>
    },
    containsAny: function(locations) {
        /// <signature>
        /// <summary>
        /// Tests if any of the locations is contained within the extent.
        /// </summary>
        /// <param name="locations" type="Array" >An array of locations to test for.</param>
        /// <returns type="Boolean">true if the extent contains any of the locations, false otherwise.</returns>
        /// </signature>
    },
    center: function() {
        /// <signature>
        /// <summary>
        /// Returns the center of the extent.
        /// </summary>
        /// <returns type="kendo.dataviz.map.Location">The extent center location.</returns>
        /// </signature>
    },
    include: function(location) {
        /// <signature>
        /// <summary>
        /// Grows the extent, if required, to contain the specified location.
        /// </summary>
        /// <param name="location" type="kendo.dataviz.map.Location" >The location to include in the extent.</param>
        /// </signature>
    },
    includeAll: function(locations) {
        /// <signature>
        /// <summary>
        /// Grows the extent, if required, to contain all specified locations.
        /// </summary>
        /// <param name="locations" type="Array" >The locations to include in the extent.</param>
        /// </signature>
    },
    edges: function() {
        /// <signature>
        /// <summary>
        /// Returns the four extreme locations of the extent.
        /// </summary>
        /// <returns type="Object">An object with nw, ne, se and sw locations.</returns>
        /// </signature>
    },
    toArray: function() {
        /// <signature>
        /// <summary>
        /// Returns the four extreme locations of the extent as an array.
        /// </summary>
        /// <returns type="Array">An array with [NW, NE, SE, SW] locations.</returns>
        /// </signature>
    },
    overlaps: function(extent) {
        /// <signature>
        /// <summary>
        /// Tests if the given extent overlaps with this instance.
        /// </summary>
        /// <param name="extent" type="kendo.dataviz.map.Extent" >The extent to test with.</param>
        /// <returns type="Boolean">true if the extents overlap, false otherwise.</returns>
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


intellisense.annotate(kendo.dataviz.map, {
    Layer: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.map.Layer</summary>
        /// </signature>
    }
});

kendo.dataviz.map.Layer = (function() {
var original = kendo.dataviz.map.Layer;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    show: function() {
        /// <signature>
        /// <summary>
        /// Shows the layer, if not visible.
        /// </summary>
        /// </signature>
    },
    hide: function() {
        /// <signature>
        /// <summary>
        /// Hides the layer, if visible.
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


intellisense.annotate(kendo.dataviz.map, {
    Location: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.map.Location</summary>
        /// </signature>
    }
});

kendo.dataviz.map.Location = (function() {
var original = kendo.dataviz.map.Location;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    clone: function() {
        /// <signature>
        /// <summary>
        /// Creates a new instance with the same coordinates.
        /// </summary>
        /// <returns type="kendo.dataviz.map.Location">The new Location instance.</returns>
        /// </signature>
    },
    destination: function(destination) {
        /// <signature>
        /// <summary>
        /// Calculates the great-circle distance
/// to the given destination in meters.
        /// </summary>
        /// <param name="destination" type="kendo.dataviz.map.Location" >The destination location.</param>
        /// <returns type="Number">The distance to the specified location in meters.</returns>
        /// </signature>
    },
    distanceTo: function(distance,bearing) {
        /// <signature>
        /// <summary>
        /// Finds a destination at the given distance and bearing from this location.
        /// </summary>
        /// <param name="distance" type="Number" >The distance to the destination in meters.</param>
        /// <param name="bearing" type="Number" >The initial bearing to the destination in decimal degrees.</param>
        /// <returns type="kendo.dataviz.map.Location">The destination at the given distance and bearing.</returns>
        /// </signature>
    },
    equals: function(location) {
        /// <signature>
        /// <summary>
        /// Compares this location with another instance.
        /// </summary>
        /// <param name="location" type="kendo.dataviz.map.Location" >The location to compare with.</param>
        /// <returns type="Boolean">true if the location coordinates match; false otherwise.</returns>
        /// </signature>
    },
    round: function(digits) {
        /// <signature>
        /// <summary>
        /// Rounds the location coordinates to the specified number of fractional digits.
        /// </summary>
        /// <param name="digits" type="Number" >Number of fractional digits.</param>
        /// <returns type="kendo.dataviz.map.Location">The current Location instance.</returns>
        /// </signature>
    },
    toArray: function() {
        /// <signature>
        /// <summary>
        /// Returns the location coordinates as an [lat, lng] array.
        /// </summary>
        /// <returns type="Array">An array representation of the location, e.g. [39, -179]</returns>
        /// </signature>
    },
    toString: function() {
        /// <signature>
        /// <summary>
        /// Returns the location coordinates formatted as '{lat},{lng}'.
        /// </summary>
        /// <returns type="String">A string representation of the location, e.g. "39,-179"</returns>
        /// </signature>
    },
    wrap: function() {
        /// <signature>
        /// <summary>
        /// Wraps the latitude and longitude to fit into the [0, 90] and [0, 180] range.
        /// </summary>
        /// <returns type="kendo.dataviz.map.Location">The current Location instance.</returns>
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
    exportImage: function(options) {
        /// <signature>
        /// <summary>
        /// Exports the barcode as an image.
/// The result can be saved using kendo.saveAs.The export operation is asynchronous and returns a promise.
/// The promise will be resolved with a PNG image encoded as a Data URI.
        /// </summary>
        /// <param name="options" type="" >Parameters for the exported image.</param>
        /// <returns type="Promise">A promise that will be resolved with a PNG image encoded as a Data URI.</returns>
        /// </signature>
    },
    exportPDF: function(options) {
        /// <signature>
        /// <summary>
        /// Exports the barcode as a PDF file.
/// The result can be saved using kendo.saveAs.The export operation is asynchronous and returns a promise.
/// The promise will be resolved with a PDF file encoded as a Data URI.
        /// </summary>
        /// <param name="options" type="kendo.drawing.PDFOptions" >Parameters for the exported PDF file.</param>
        /// <returns type="Promise">A promise that will be resolved with a PDF file encoded as a Data URI.</returns>
        /// </signature>
    },
    exportSVG: function(options) {
        /// <signature>
        /// <summary>
        /// Exports the barcode as an SVG document.
/// The result can be saved using kendo.saveAs.The export operation is asynchronous and returns a promise.
/// The promise will be resolved with a SVG document encoded as a Data URI.
        /// </summary>
        /// <param name="options" type="" >Export options.</param>
        /// <returns type="Promise">A promise that will be resolved with a SVG document encoded as a Data URI.</returns>
        /// </signature>
    },
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
        /// &#10;renderAs — String (default: "svg")
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
    exportImage: function(options) {
        /// <signature>
        /// <summary>
        /// Exports the chart as an image.
/// The result can be saved using kendo.saveAs.The export operation is asynchronous and returns a promise.
/// The promise will be resolved with a PNG image encoded as a Data URI.
        /// </summary>
        /// <param name="options" type="" >Parameters for the exported image.</param>
        /// <returns type="Promise">A promise that will be resolved with a PNG image encoded as a Data URI.</returns>
        /// </signature>
    },
    exportPDF: function(options) {
        /// <signature>
        /// <summary>
        /// Exports the chart as a PDF file.
/// The result can be saved using kendo.saveAs.The export operation is asynchronous and returns a promise.
/// The promise will be resolved with a PDF file encoded as a Data URI.
        /// </summary>
        /// <param name="options" type="kendo.drawing.PDFOptions" >Parameters for the exported PDF file.</param>
        /// <returns type="Promise">A promise that will be resolved with a PDF file encoded as a Data URI.</returns>
        /// </signature>
    },
    exportSVG: function(options) {
        /// <signature>
        /// <summary>
        /// Exports the chart as an SVG document.
/// The result can be saved using kendo.saveAs.The export operation is asynchronous and returns a promise.
/// The promise will be resolved with a SVG document encoded as a Data URI.
        /// </summary>
        /// <param name="options" type="" >Export options.</param>
        /// <returns type="Promise">A promise that will be resolved with a SVG document encoded as a Data URI.</returns>
        /// </signature>
    },
    getAxis: function(name) {
        /// <signature>
        /// <summary>
        /// Returns an axis with specific name.
        /// </summary>
        /// <param name="name" type="String" >The axis name.</param>
        /// <returns type="kendo.dataviz.ChartAxis">The chart axis.</returns>
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
    saveAsPDF: function() {
        /// <signature>
        /// <summary>
        /// Saves the Chart as a PDF file using the options specified in options.pdf.
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
    toggleHighlight: function(show,options) {
        /// <signature>
        /// <summary>
        /// Toggles the highlight of the series points or a segment for pie, donut and funnel charts.
        /// </summary>
        /// <param name="show" type="Boolean" >A boolean value that specifies if the highlight should be shown or hidden.</param>
        /// <param name="options" type="String" >A string representing the series name or the category name or an object with the series and category names.</param>
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
        /// &#10;dataSource — Object|Array|kendo.data.DataSource 
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
        /// &#10;pannable — Boolean (default: false)
        /// &#10;Specifies if the chart can be panned.
        /// &#10;
        /// &#10;pannable — Object (default: false)
        /// &#10;Specifies if the chart can be panned.
        /// &#10;
        /// &#10;pdf — Object 
        /// &#10;Configures the export settings for the saveAsPDF method.
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
        /// &#10;zoomable — Boolean (default: false)
        /// &#10;Specifies if the chart can be zoomed.
        /// &#10;
        /// &#10;zoomable — Object (default: false)
        /// &#10;Specifies if the chart can be zoomed.
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
        /// <returns type="kendo.dataviz.diagram.Shape">The newly created diagram shape.</returns>
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
    boundingBox: function(items) {
        /// <signature>
        /// <summary>
        /// 
        /// </summary>
        /// <param name="items" type="Array" >The items (shapes and connections) to include in the bounding box. Defaults to all items if not specified.</param>
        /// <returns type="kendo.dataviz.diagram.Rect">The bounding rectangle of the specified items. If nothing is specified the bounding box of the all diagram will be returned.</returns>
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
    cancelEdit: function() {
        /// <signature>
        /// <summary>
        /// Cancels edit and close the popup form.
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
    copy: function() {
        /// <signature>
        /// <summary>
        /// Puts a copy of the currently selected diagram to an internal clipboard.
        /// </summary>
        /// </signature>
    },
    createConnection: function(item) {
        /// <signature>
        /// <summary>
        /// Adds an empty connection data item and a popup window will be displayed.
        /// </summary>
        /// <param name="item" type="Object" >A diagram shape item to edit.</param>
        /// </signature>
    },
    createShape: function(item) {
        /// <signature>
        /// <summary>
        /// Adds an empty shape data item and a popup window will be displayed.
        /// </summary>
        /// <param name="item" type="Object" >A diagram shape item to edit.</param>
        /// </signature>
    },
    cut: function() {
        /// <signature>
        /// <summary>
        /// Cuts the currently selected diagram items to an internal clipboard.
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
    documentToModel: function(point) {
        /// <signature>
        /// <summary>
        /// Transforms a point from Page document coordinates to Model coordinates. Shortcut for viewToModel(documentToView(point))
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
    edit: function(item) {
        /// <signature>
        /// <summary>
        /// Edit diagram connection/shape.
        /// </summary>
        /// <param name="item" type="Object" >A diagram item to edit.</param>
        /// </signature>
    },
    exportImage: function(options) {
        /// <signature>
        /// <summary>
        /// Exports the diagram content as an image.
/// The result can be saved using kendo.saveAs.The full content of the diagram will be exported in 1:1 scale.
/// If exporting the current view is desired then the kendo.drawing.drawDOM
/// method should be called on a container element.The export operation is asynchronous and returns a promise.
/// The promise will be resolved with a PNG image encoded as a Data URI.
        /// </summary>
        /// <param name="options" type="" >Parameters for the exported image.</param>
        /// <returns type="Promise">A promise that will be resolved with a PNG image encoded as a Data URI.</returns>
        /// </signature>
    },
    exportPDF: function(options) {
        /// <signature>
        /// <summary>
        /// Exports the diagram content as a PDF file.
/// The result can be saved using kendo.saveAs.The export operation is asynchronous and returns a promise.
/// The promise will be resolved with a PDF file encoded as a Data URI.
        /// </summary>
        /// <param name="options" type="kendo.drawing.PDFOptions" >Parameters for the exported PDF file.</param>
        /// <returns type="Promise">A promise that will be resolved with a PDF file encoded as a Data URI.</returns>
        /// </signature>
    },
    exportSVG: function(options) {
        /// <signature>
        /// <summary>
        /// Exports the diagram content as an SVG document.
/// The result can be saved using kendo.saveAs.The full content of the diagram will be exported in 1:1 scale.
/// If exporting the current view is desired then the kendo.drawing.drawDOM
/// method should be called on a container element.The export operation is asynchronous and returns a promise.
/// The promise will be resolved with a SVG document encoded as a Data URI.
        /// </summary>
        /// <param name="options" type="" >Export options.</param>
        /// <returns type="Promise">A promise that will be resolved with a SVG document encoded as a Data URI.</returns>
        /// </signature>
    },
    focus: function() {
        /// <signature>
        /// <summary>
        /// Sets the focus on the diagram.
        /// </summary>
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
    layerToModel: function(point) {
        /// <signature>
        /// <summary>
        /// Transforms a point from Layer coordinates to Model coordinates. Layer coordinates are relative to the drawable surface.
        /// </summary>
        /// <param name="point" type="Object" >The point in layer coordinates.</param>
        /// <returns type="Object">the transformed point</returns>
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
    load: function(json) {
        /// <signature>
        /// <summary>
        /// Loads a saved diagram.
        /// </summary>
        /// <param name="json" type="String" >The serialized diagram in JSON format.</param>
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
    modelToLayer: function(point) {
        /// <signature>
        /// <summary>
        /// Transforms a point from Model coordinates to Layer coordinates. Layer coordinates are relative to the drawing surface.
        /// </summary>
        /// <param name="point" type="Object" >The point in Model coordinates.</param>
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
    pan: function(pan) {
        /// <signature>
        /// <summary>
        /// Pans the diagram with a specified delta (represented as a Point).
        /// </summary>
        /// <param name="pan" type="Object" >The translation delta to apply to the diagram.</param>
        /// </signature>
    },
    paste: function() {
        /// <signature>
        /// <summary>
        /// Pastes the content of the internal diagram clipboard.
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
    resize: function() {
        /// <signature>
        /// <summary>
        /// Adjusts the diagram size to match the size of the container.
        /// </summary>
        /// </signature>
    },
    save: function() {
        /// <signature>
        /// <summary>
        /// Saves the diagram.
        /// </summary>
        /// </signature>
    },
    saveEdit: function() {
        /// <signature>
        /// <summary>
        /// Saves any changes made by the user.
        /// </summary>
        /// </signature>
    },
    select: function(elements,options) {
        /// <signature>
        /// <summary>
        /// Gets or sets the selected elements.
        /// </summary>
        /// <param name="elements" type="Object" >The diagram element(s) that should be selected.</param>
        /// <param name="options" type="" ></param>
        /// <returns type="Array">The selected diagram elements.</returns>
        /// </signature>
    },
    selectAll: function() {
        /// <signature>
        /// <summary>
        /// Selects all shapes and connections.
        /// </summary>
        /// </signature>
    },
    selectArea: function(rect) {
        /// <signature>
        /// <summary>
        /// Selects all diagram elements within the given rectangle.
        /// </summary>
        /// <param name="rect" type="kendo.dataviz.diagram.Rect" >The rectangle that determines which elements should be selected.</param>
        /// </signature>
    },
    setConnectionsDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the connections data source of the diagram.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" >The data source to which the widget should be bound.</param>
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
    toBack: function(items,undoable) {
        /// <signature>
        /// <summary>
        /// Sends the specified items to the back, i.e. it's reordering items to ensure they are underneath the complementary items.
        /// </summary>
        /// <param name="items" type="Array" >An array of diagram items.</param>
        /// <param name="undoable" type="Boolean" >Whether the change should be recorded in the undo-redo stack.</param>
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
    undo: function() {
        /// <signature>
        /// <summary>
        /// Undoes the previous action.
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
    viewToModel: function(point) {
        /// <signature>
        /// <summary>
        /// Transforms a point from View coordinates to Model coordinates. Model coordinates are independent coordinates to define Shape bounds.
        /// </summary>
        /// <param name="point" type="Object" >The point in View coordinates.</param>
        /// <returns type="Object">the transformed point</returns>
        /// </signature>
    },
    viewport: function() {
        /// <signature>
        /// <summary>
        /// The bounds of the diagramming canvas.
        /// </summary>
        /// </signature>
    },
    zoom: function(zoom,point) {
        /// <signature>
        /// <summary>
        /// Zooms in or out of the diagram.
        /// </summary>
        /// <param name="zoom" type="Number" >The zoom factor.</param>
        /// <param name="point" type="Object" >The point to zoom into or out of.</param>
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
        /// &#10;connectionDefaults — Object 
        /// &#10;Defines the defaults of the connections. Whenever a connection is created, the specified connectionDefaults will be used and merged with the (optional) configuration passed through the connection creation method.
        /// &#10;
        /// &#10;connections — Array 
        /// &#10;Defines the connections configuration.
        /// &#10;
        /// &#10;connectionsDataSource — Object|Array|kendo.data.DataSource 
        /// &#10;Defines the data source of the connections.
        /// &#10;
        /// &#10;dataSource — Object|Array|kendo.data.DataSource 
        /// &#10;Defines the data source of the diagram.
        /// &#10;
        /// &#10;editable — Boolean (default: true)
        /// &#10;Defines how the diagram behaves when the user attempts to edit shape content, create new connections, edit connection labels and so on.
        /// &#10;
        /// &#10;editable — Object (default: true)
        /// &#10;Defines how the diagram behaves when the user attempts to edit shape content, create new connections, edit connection labels and so on.
        /// &#10;
        /// &#10;layout — Object 
        /// &#10;The layout of a diagram consists in arranging the shapes (sometimes also the connections) in some fashion in order to achieve an aesthetically pleasing experience to the user. It aims at giving a more direct insight in the information contained within the diagram and its relational structure.On a technical level, layout consists of a multitude of algorithms and optimizations:and various ad-hoc calculations which depend on the type of layout. The criteria on which an algorithm is based vary but the common denominator is:Kendo diagram includes three of the most used layout algorithms which should cover most of your layout needs - tree layout, force-directed layout and layered layout. Please, check the type property for more details regarding each type.The generic way to apply a layout is by calling the layout() method on the diagram. The method has a single parameter options. It is an object, which can contain parameters which are specific to the layout as well as parameters customizing the global grid layout. Parameters which apply to other layout algorithms can be included but are overlooked if not applicable to the chose layout type. This means that you can define a set of parameters which cover all possible layout types and simply pass it in the method whatever the layout define in the first parameter.
        /// &#10;
        /// &#10;pannable — Boolean (default: true)
        /// &#10;Defines the pannable options.
        /// &#10;
        /// &#10;pannable — Object (default: true)
        /// &#10;Defines the pannable options.
        /// &#10;
        /// &#10;pdf — Object 
        /// &#10;Configures the export settings for the saveAsPDF method.
        /// &#10;
        /// &#10;selectable — Boolean (default: true)
        /// &#10;Defines the selectable options.
        /// &#10;
        /// &#10;selectable — Object (default: true)
        /// &#10;Defines the selectable options.
        /// &#10;
        /// &#10;shapeDefaults — Object 
        /// &#10;Defines the shape options.
        /// &#10;
        /// &#10;shapes — Array 
        /// &#10;Defines the shape options.
        /// &#10;
        /// &#10;template — String|Function (default: "")
        /// &#10;The template which renders the content of the shape when bound to a dataSource. The names you can use in the template correspond to the properties used in the dataSource. See the dataSource topic below for a concrete example.
        /// &#10;
        /// &#10;zoom — Number (default: 1)
        /// &#10;The zoom level in percentages.
        /// &#10;
        /// &#10;zoomMax — Number (default: 2)
        /// &#10;The zoom max level in percentages.
        /// &#10;
        /// &#10;zoomMin — Number (default: 0.1)
        /// &#10;The zoom min level in percentages.
        /// &#10;
        /// &#10;zoomRate — Number (default: 0.1)
        /// &#10;The zoom step when using the mouse-wheel to zoom in or out.
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
    allValues: function(values) {
        /// <signature>
        /// <summary>
        /// Allows setting or getting multiple Gauge values at once.
        /// </summary>
        /// <param name="values" type="Array" >An array of values to be set.</param>
        /// <returns type="Array">An array of the Gauge pointer values will be returned if no parameter is passed.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Gauge for safe removal from the DOM.Detaches event handlers and removes data entries in order to avoid memory leaks.
        /// </summary>
        /// </signature>
    },
    exportImage: function(options) {
        /// <signature>
        /// <summary>
        /// Exports the Gauge as an image.
/// The result can be saved using kendo.saveAs.The export operation is asynchronous and returns a promise.
/// The promise will be resolved with a PNG image encoded as a Data URI.
        /// </summary>
        /// <param name="options" type="" >Parameters for the exported image.</param>
        /// <returns type="Promise">A promise that will be resolved with a PNG image encoded as a Data URI.</returns>
        /// </signature>
    },
    exportPDF: function(options) {
        /// <signature>
        /// <summary>
        /// Exports the Gauge as a PDF file.
/// The result can be saved using kendo.saveAs.The export operation is asynchronous and returns a promise.
/// The promise will be resolved with a PDF file encoded as a Data URI.
        /// </summary>
        /// <param name="options" type="kendo.drawing.PDFOptions" >Parameters for the exported PDF file.</param>
        /// <returns type="Promise">A promise that will be resolved with a PDF file encoded as a Data URI.</returns>
        /// </signature>
    },
    exportSVG: function(options) {
        /// <signature>
        /// <summary>
        /// Exports the Gauge as an SVG document.
/// The result can be saved using kendo.saveAs.The export operation is asynchronous and returns a promise.
/// The promise will be resolved with a SVG document encoded as a Data URI.
        /// </summary>
        /// <param name="options" type="" >Export options.</param>
        /// <returns type="Promise">A promise that will be resolved with a SVG document encoded as a Data URI.</returns>
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
        /// &#10;pointer — Array 
        /// &#10;The pointer configuration options. It accepts an Array of pointers, each with it's own configuration options.
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
        /// <returns type="kendo.geometry.Point">The event coordinates relative to the map element.</returns>
        /// </signature>
    },
    eventToLayer: function(e) {
        /// <signature>
        /// <summary>
        /// Retrieves projected (layer) coordinates that correspond to this mouse event.
/// Layer coordinates are absolute and change only when the zoom level is changed.
        /// </summary>
        /// <param name="e" type="Object" >The DOM or jQuery mouse event.</param>
        /// <returns type="kendo.geometry.Point">The projected (layer) coordinates that correspond to this mouse event.</returns>
        /// </signature>
    },
    eventToLocation: function(e) {
        /// <signature>
        /// <summary>
        /// Retrieves the geographic location that correspond to this mouse event.
        /// </summary>
        /// <param name="e" type="Object" >The DOM or jQuery mouse event.</param>
        /// <returns type="kendo.geometry.Point">The geographic location that correspond to this mouse event.</returns>
        /// </signature>
    },
    eventToView: function(e) {
        /// <signature>
        /// <summary>
        /// Retrieves relative (view) coordinates that correspond to this mouse event.
/// Layer elements positioned on these coordinates will appear under the mouse cursor.View coordinates are no longer valid after a map reset.
        /// </summary>
        /// <param name="e" type="Object" >The DOM or jQuery mouse event.</param>
        /// <returns type="kendo.geometry.Point">The relative (view) coordinates that correspond to this mouse event.</returns>
        /// </signature>
    },
    extent: function(extent) {
        /// <signature>
        /// <summary>
        /// Gets or sets the map extent or visible area.
/// The setter is chainable, i.e. returns the map instance.
        /// </summary>
        /// <param name="extent" type="kendo.dataviz.map.Extent" >The new extent of the map.</param>
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
        /// <returns type="kendo.geometry.Point">The layer (projected) coordinates.</returns>
        /// </signature>
    },
    locationToView: function(location) {
        /// <signature>
        /// <summary>
        /// Returns the view (relative) coordinates that correspond to a geographical location.
        /// </summary>
        /// <param name="location" type="Object" >The geographic location. An array argument is assumed to be in [Latitude, Lonigude] order.</param>
        /// <returns type="kendo.geometry.Point">The view coordinates that correspond to a geographical location.</returns>
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
        /// &#10;center — Array|kendo.dataviz.map.Location 
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
    exportImage: function(options) {
        /// <signature>
        /// <summary>
        /// Exports the QRCode as an image.
/// The result can be saved using kendo.saveAs.The export operation is asynchronous and returns a promise.
/// The promise will be resolved with a PNG image encoded as a Data URI.
        /// </summary>
        /// <param name="options" type="" >Parameters for the exported image.</param>
        /// <returns type="Promise">A promise that will be resolved with a PNG image encoded as a Data URI.</returns>
        /// </signature>
    },
    exportPDF: function(options) {
        /// <signature>
        /// <summary>
        /// Exports the QRCode as a PDF file.
/// The result can be saved using kendo.saveAs.The export operation is asynchronous and returns a promise.
/// The promise will be resolved with a PDF file encoded as a Data URI.
        /// </summary>
        /// <param name="options" type="kendo.drawing.PDFOptions" >Parameters for the exported PDF file.</param>
        /// <returns type="Promise">A promise that will be resolved with a PDF file encoded as a Data URI.</returns>
        /// </signature>
    },
    exportSVG: function(options) {
        /// <signature>
        /// <summary>
        /// Exports the QRCode as an SVG document.
/// The result can be saved using kendo.saveAs.The export operation is asynchronous and returns a promise.
/// The promise will be resolved with a SVG document encoded as a Data URI.
        /// </summary>
        /// <param name="options" type="" >Export options.</param>
        /// <returns type="Promise">A promise that will be resolved with a SVG document encoded as a Data URI.</returns>
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
        /// &#10;renderAs — String (default: "svg")
        /// &#10;Sets the preferred rendering engine.
/// &#10;If it is not supported by the browser, the QRCode will switch to the first available mode.The supported values are:
        /// &#10;
        /// &#10;size — Number|String 
        /// &#10;Specifies the size of a QR code in pixels (i.e. "200px"). Numeric values are treated as pixels.
/// &#10;If no size is specified, it will be determined from the element width and height.
/// &#10;In case the element has width or height of zero, a default value of 200 pixels will be used.
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
    allValues: function(values) {
        /// <signature>
        /// <summary>
        /// Allows setting or getting multiple Gauge values at once.
        /// </summary>
        /// <param name="values" type="Array" >An array of values to be set.</param>
        /// <returns type="Array">An array of the Gauge pointer values will be returned if no parameter is passed.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Gauge for safe removal from the DOM.Detaches event handlers and removes data entries in order to avoid memory leaks.
        /// </summary>
        /// </signature>
    },
    exportImage: function(options) {
        /// <signature>
        /// <summary>
        /// Exports the Gauge as an image.
/// The result can be saved using kendo.saveAs.The export operation is asynchronous and returns a promise.
/// The promise will be resolved with a PNG image encoded as a Data URI.
        /// </summary>
        /// <param name="options" type="" >Parameters for the exported image.</param>
        /// <returns type="Promise">A promise that will be resolved with a PNG image encoded as a Data URI.</returns>
        /// </signature>
    },
    exportPDF: function(options) {
        /// <signature>
        /// <summary>
        /// Exports the Gauge as a PDF file.
/// The result can be saved using kendo.saveAs.The export operation is asynchronous and returns a promise.
/// The promise will be resolved with a PDF file encoded as a Data URI.
        /// </summary>
        /// <param name="options" type="kendo.drawing.PDFOptions" >Parameters for the exported PDF file.</param>
        /// <returns type="Promise">A promise that will be resolved with a PDF file encoded as a Data URI.</returns>
        /// </signature>
    },
    exportSVG: function(options) {
        /// <signature>
        /// <summary>
        /// Exports the Gauge as an SVG document.
/// The result can be saved using kendo.saveAs.The export operation is asynchronous and returns a promise.
/// The promise will be resolved with a SVG document encoded as a Data URI.
        /// </summary>
        /// <param name="options" type="" >Export options.</param>
        /// <returns type="Promise">A promise that will be resolved with a SVG document encoded as a Data URI.</returns>
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
        /// &#10;pointer — Array 
        /// &#10;The pointer configuration options. It accepts an Array of pointers, each with it's own configuration options.
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
    exportImage: function(options) {
        /// <signature>
        /// <summary>
        /// Exports the chart as an image.Inherited from Chart.exportImage
        /// </summary>
        /// <param name="options" type="" >Parameters for the exported image.</param>
        /// <returns type="Promise">A promise that will be resolved with a PNG image encoded as a Data URI.</returns>
        /// </signature>
    },
    exportPDF: function(options) {
        /// <signature>
        /// <summary>
        /// Exports the chart as a PDF file.Inherited from Chart.exportPDF
        /// </summary>
        /// <param name="options" type="kendo.drawing.PDFOptions" >Parameters for the exported PDF file.</param>
        /// <returns type="Promise">A promise that will be resolved with a PDF file encoded as a Data URI.</returns>
        /// </signature>
    },
    exportSVG: function(options) {
        /// <signature>
        /// <summary>
        /// Exports the chart as an SVG document.Inherited from Chart.exportSVG
        /// </summary>
        /// <param name="options" type="" >Export options.</param>
        /// <returns type="Promise">A promise that will be resolved with a SVG document encoded as a Data URI.</returns>
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
    exportImage: function(options) {
        /// <signature>
        /// <summary>
        /// Exports the chart as an image.Inherited from Chart.exportImage
        /// </summary>
        /// <param name="options" type="" >Parameters for the exported image.</param>
        /// <returns type="Promise">A promise that will be resolved with a PNG image encoded as a Data URI.</returns>
        /// </signature>
    },
    exportPDF: function(options) {
        /// <signature>
        /// <summary>
        /// Exports the chart as a PDF file.Inherited from Chart.exportPDF
        /// </summary>
        /// <param name="options" type="kendo.drawing.PDFOptions" >Parameters for the exported PDF file.</param>
        /// <returns type="Promise">A promise that will be resolved with a PDF file encoded as a Data URI.</returns>
        /// </signature>
    },
    exportSVG: function(options) {
        /// <signature>
        /// <summary>
        /// Exports the chart as an SVG document.Inherited from Chart.exportSVG
        /// </summary>
        /// <param name="options" type="" >Export options.</param>
        /// <returns type="Promise">A promise that will be resolved with a SVG document encoded as a Data URI.</returns>
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
        /// &#10;pdf — Object 
        /// &#10;Configures the export settings for the saveAsPDF method.
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
        /// &#10;dataSource — Object|Array|kendo.data.HierarchicalDataSource 
        /// &#10;The data source of the treeMap which is used to display the tiles and titles. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.HierarchicalDataSource
/// &#10;instance.If the HierarchicalDataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.HierarchicalDataSource instance using that value as data source configuration.If the HierarchicalDataSource option is an existing kendo.data.HierarchicalDataSource instance the widget will use that instance and will not initialize a new one.
        /// &#10;
        /// &#10;autoBind — Boolean (default: true)
        /// &#10;If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
/// &#10;data source is fired. By default the widget will bind to the data source specified in the configuration.
        /// &#10;
        /// &#10;type — String (default: "squarified")
        /// &#10;The layout type for the TreeMap.The Supported values are:
        /// &#10;
        /// &#10;theme — String (default: "default")
        /// &#10;The theme of the TreeMap.
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
        /// &#10;The default colors for the treemap tiles. When all colors are used, new colors are pulled from the start again. Can be set to array of specific colors or array of color ranges.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});


intellisense.annotate(kendo.drawing, {
    Arc: function() {
        /// <signature>
        /// <summary>Constructor of kendo.drawing.Arc</summary>
        /// </signature>
    }
});

kendo.drawing.Arc = (function() {
var original = kendo.drawing.Arc;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    bbox: function() {
        /// <signature>
        /// <summary>
        /// Returns the bounding box of the element with transformations applied.
/// Inherited from Element.bbox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with transformations applied.</returns>
        /// </signature>
    },
    clip: function(clip) {
        /// <signature>
        /// <summary>
        /// Gets or sets the element clipping path.
/// Inherited from Element.clip
        /// </summary>
        /// <param name="clip" type="kendo.drawing.Path" >The element clipping path.</param>
        /// <returns type="kendo.drawing.Path">The current element clipping path.</returns>
        /// </signature>
    },
    clippedBBox: function() {
        /// <signature>
        /// <summary>
        /// Returns the bounding box of the element with clipping and transformations applied.
/// Inherited from Element.clippedBBox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with clipping transformations applied.</returns>
        /// </signature>
    },
    geometry: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the arc geometry.
        /// </summary>
        /// <param name="value" type="kendo.geometry.Arc" >The new geometry to use.</param>
        /// <returns type="kendo.geometry.Arc">The current arc geometry.</returns>
        /// </signature>
    },
    fill: function(color,opacity) {
        /// <signature>
        /// <summary>
        /// Sets the shape fill.
        /// </summary>
        /// <param name="color" type="String" >The fill color to set.</param>
        /// <param name="opacity" type="Number" >The fill opacity to set.</param>
        /// <returns type="kendo.drawing.Arc">The current instance to allow chaining.</returns>
        /// </signature>
    },
    opacity: function(opacity) {
        /// <signature>
        /// <summary>
        /// Gets or sets the element opacity.
/// Inherited from Element.opacityIf set, the stroke and fill opacity will be multiplied by the element opacity.
        /// </summary>
        /// <param name="opacity" type="Number" >The element opacity. Ranges from 0 (completely transparent) to 1 (completely opaque).</param>
        /// <returns type="Number">The current element opacity.</returns>
        /// </signature>
    },
    stroke: function(color,width,opacity) {
        /// <signature>
        /// <summary>
        /// Sets the shape stroke.
        /// </summary>
        /// <param name="color" type="String" >The stroke color to set.</param>
        /// <param name="width" type="Number" >The stroke width to set.</param>
        /// <param name="opacity" type="Number" >The stroke opacity to set.</param>
        /// <returns type="kendo.drawing.Arc">The current instance to allow chaining.</returns>
        /// </signature>
    },
    transform: function(transform) {
        /// <signature>
        /// <summary>
        /// Gets or sets the transformation of the element.
/// Inherited from Element.transform
        /// </summary>
        /// <param name="transform" type="kendo.geometry.Transformation" >The transformation to apply to the element.</param>
        /// <returns type="kendo.geometry.Transformation">The current transformation on the element.</returns>
        /// </signature>
    },
    visible: function(visible) {
        /// <signature>
        /// <summary>
        /// Gets or sets the visibility of the element.
/// Inherited from Element.visible
        /// </summary>
        /// <param name="visible" type="Boolean" >A flag indicating if the element should be visible.</param>
        /// <returns type="Boolean">true if the element is visible; false otherwise.</returns>
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


intellisense.annotate(kendo.drawing, {
    Circle: function() {
        /// <signature>
        /// <summary>Constructor of kendo.drawing.Circle</summary>
        /// </signature>
    }
});

kendo.drawing.Circle = (function() {
var original = kendo.drawing.Circle;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    bbox: function() {
        /// <signature>
        /// <summary>
        /// Returns the bounding box of the element with transformations applied.
/// Inherited from Element.bbox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with transformations applied.</returns>
        /// </signature>
    },
    clip: function(clip) {
        /// <signature>
        /// <summary>
        /// Gets or sets the element clipping path.
/// Inherited from Element.clip
        /// </summary>
        /// <param name="clip" type="kendo.drawing.Path" >The element clipping path.</param>
        /// <returns type="kendo.drawing.Path">The current element clipping path.</returns>
        /// </signature>
    },
    clippedBBox: function() {
        /// <signature>
        /// <summary>
        /// Returns the bounding box of the element with clipping and transformations applied.
/// Inherited from Element.clippedBBox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with clipping transformations applied.</returns>
        /// </signature>
    },
    geometry: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the circle geometry.
        /// </summary>
        /// <param name="value" type="kendo.geometry.Circle" >The new geometry to use.</param>
        /// <returns type="kendo.geometry.Circle">The current circle geometry.</returns>
        /// </signature>
    },
    fill: function(color,opacity) {
        /// <signature>
        /// <summary>
        /// Sets the shape fill.
        /// </summary>
        /// <param name="color" type="String" >The fill color to set.</param>
        /// <param name="opacity" type="Number" >The fill opacity to set.</param>
        /// <returns type="kendo.drawing.Circle">The current instance to allow chaining.</returns>
        /// </signature>
    },
    opacity: function(opacity) {
        /// <signature>
        /// <summary>
        /// Gets or sets the element opacity.
/// Inherited from Element.opacityIf set, the stroke and fill opacity will be multiplied by the element opacity.
        /// </summary>
        /// <param name="opacity" type="Number" >The element opacity. Ranges from 0 (completely transparent) to 1 (completely opaque).</param>
        /// <returns type="Number">The current element opacity.</returns>
        /// </signature>
    },
    stroke: function(color,width,opacity) {
        /// <signature>
        /// <summary>
        /// Sets the shape stroke.
        /// </summary>
        /// <param name="color" type="String" >The stroke color to set.</param>
        /// <param name="width" type="Number" >The stroke width to set.</param>
        /// <param name="opacity" type="Number" >The stroke opacity to set.</param>
        /// <returns type="kendo.drawing.Circle">The current instance to allow chaining.</returns>
        /// </signature>
    },
    transform: function(transform) {
        /// <signature>
        /// <summary>
        /// Gets or sets the transformation of the element.
/// Inherited from Element.transform
        /// </summary>
        /// <param name="transform" type="kendo.geometry.Transformation" >The transformation to apply to the element.</param>
        /// <returns type="kendo.geometry.Transformation">The current transformation on the element.</returns>
        /// </signature>
    },
    visible: function(visible) {
        /// <signature>
        /// <summary>
        /// Gets or sets the visibility of the element.
/// Inherited from Element.visible
        /// </summary>
        /// <param name="visible" type="Boolean" >A flag indicating if the element should be visible.</param>
        /// <returns type="Boolean">true if the element is visible; false otherwise.</returns>
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


intellisense.annotate(kendo.drawing, {
    Element: function() {
        /// <signature>
        /// <summary>Constructor of kendo.drawing.Element</summary>
        /// </signature>
    }
});

kendo.drawing.Element = (function() {
var original = kendo.drawing.Element;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    bbox: function() {
        /// <signature>
        /// <summary>
        /// Returns the bounding box of the element with transformations applied.
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with transformations applied.</returns>
        /// </signature>
    },
    clip: function(clip) {
        /// <signature>
        /// <summary>
        /// Gets or sets the element clipping path.
        /// </summary>
        /// <param name="clip" type="kendo.drawing.Path" >The element clipping path.</param>
        /// <returns type="kendo.drawing.Path">The current element clipping path.</returns>
        /// </signature>
    },
    clippedBBox: function() {
        /// <signature>
        /// <summary>
        /// Returns the bounding box of the element with clipping and transformations applied.This is the rectangle that will fit around the actual rendered element.
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with clipping and transformations applied.</returns>
        /// </signature>
    },
    opacity: function(opacity) {
        /// <signature>
        /// <summary>
        /// Gets or sets the element opacity.
        /// </summary>
        /// <param name="opacity" type="Number" >The element opacity. Ranges from 0 (completely transparent) to 1 (completely opaque).</param>
        /// <returns type="Number">The current element opacity.</returns>
        /// </signature>
    },
    transform: function(transform) {
        /// <signature>
        /// <summary>
        /// Gets or sets the transformation of the element.
        /// </summary>
        /// <param name="transform" type="kendo.geometry.Transformation" >The transformation to apply to the element.</param>
        /// <returns type="kendo.geometry.Transformation">The current transformation on the element.</returns>
        /// </signature>
    },
    visible: function(visible) {
        /// <signature>
        /// <summary>
        /// Gets or sets the visibility of the element.
        /// </summary>
        /// <param name="visible" type="Boolean" >A flag indicating if the element should be visible.</param>
        /// <returns type="Boolean">true if the element is visible; false otherwise.</returns>
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


intellisense.annotate(kendo.drawing, {
    FillOptions: function() {
        /// <signature>
        /// <summary>Constructor of kendo.drawing.FillOptions</summary>
        /// </signature>
    }
});

kendo.drawing.FillOptions = (function() {
var original = kendo.drawing.FillOptions;
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


intellisense.annotate(kendo.drawing, {
    Gradient: function() {
        /// <signature>
        /// <summary>Constructor of kendo.drawing.Gradient</summary>
        /// </signature>
    }
});

kendo.drawing.Gradient = (function() {
var original = kendo.drawing.Gradient;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    addStop: function(offset,color,opacity) {
        /// <signature>
        /// <summary>
        /// Adds a color stop to the gradient.
        /// </summary>
        /// <param name="offset" type="Number" >The stop offset from the start of the element. Ranges from 0 (start of gradient) to 1 (end of gradient).</param>
        /// <param name="color" type="String" >The color in any of the following formats.| Format         | Description | ---            | --- | --- | red            | Basic or Extended CSS Color name | #ff0000        | Hex RGB value | rgb(255, 0, 0) | RGB valueSpecifying 'none', 'transparent' or '' (empty string) will clear the fill.</param>
        /// <param name="opacity" type="Number" >The fill opacity. Ranges from 0 (completely transparent) to 1 (completely opaque).</param>
        /// <returns type="kendo.drawing.GradientStop">The new gradient color stop.</returns>
        /// </signature>
    },
    removeStop: function(stop) {
        /// <signature>
        /// <summary>
        /// Removes a color stop from the gradient.
        /// </summary>
        /// <param name="stop" type="kendo.drawing.GradientStop" >The gradient color stop to remove.</param>
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


intellisense.annotate(kendo.drawing, {
    GradientStop: function() {
        /// <signature>
        /// <summary>Constructor of kendo.drawing.GradientStop</summary>
        /// </signature>
    }
});

kendo.drawing.GradientStop = (function() {
var original = kendo.drawing.GradientStop;
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


intellisense.annotate(kendo.drawing, {
    Group: function() {
        /// <signature>
        /// <summary>Constructor of kendo.drawing.Group</summary>
        /// </signature>
    }
});

kendo.drawing.Group = (function() {
var original = kendo.drawing.Group;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    append: function(element) {
        /// <signature>
        /// <summary>
        /// Appends the specified element as a last child of the group.
        /// </summary>
        /// <param name="element" type="kendo.drawing.Element" >The element to append. Multiple parameters are accepted.</param>
        /// </signature>
    },
    clear: function() {
        /// <signature>
        /// <summary>
        /// Removes all child elements from the group.
        /// </summary>
        /// </signature>
    },
    clip: function(clip) {
        /// <signature>
        /// <summary>
        /// Gets or sets the group clipping path.
/// Inherited from Element.clip
        /// </summary>
        /// <param name="clip" type="kendo.drawing.Path" >The group clipping path.</param>
        /// <returns type="kendo.drawing.Path">The current group clipping path.</returns>
        /// </signature>
    },
    clippedBBox: function() {
        /// <signature>
        /// <summary>
        /// Returns the bounding box of the element with clipping and transformations applied.
/// Inherited from Element.clippedBBox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with clipping transformations applied.</returns>
        /// </signature>
    },
    insert: function(position,element) {
        /// <signature>
        /// <summary>
        /// Inserts an element at the specified position.
        /// </summary>
        /// <param name="position" type="Number" >The position to insert the element at. Existing children beyond this position will be shifted right.</param>
        /// <param name="element" type="kendo.drawing.Element" >The element to insert.</param>
        /// </signature>
    },
    opacity: function(opacity) {
        /// <signature>
        /// <summary>
        /// Gets or sets the group opacity.
/// Inherited from Element.opacityThe opacity of any child groups and elements will be multiplied by this value.
        /// </summary>
        /// <param name="opacity" type="Number" >The group opacity. Ranges from 0 (completely transparent) to 1 (completely opaque).</param>
        /// <returns type="Number">The current group opacity.</returns>
        /// </signature>
    },
    remove: function(element) {
        /// <signature>
        /// <summary>
        /// Removes the specified element from the group.
        /// </summary>
        /// <param name="element" type="kendo.drawing.Element" >The element to remove.</param>
        /// </signature>
    },
    removeAt: function(index) {
        /// <signature>
        /// <summary>
        /// Removes the child element at the specified position.
        /// </summary>
        /// <param name="index" type="Number" >The index at which the element currently resides.</param>
        /// </signature>
    },
    visible: function(visible) {
        /// <signature>
        /// <summary>
        /// Gets or sets the visibility of the element.
        /// </summary>
        /// <param name="visible" type="Boolean" >A flag indicating if the element should be visible.</param>
        /// <returns type="Boolean">true if the element is visible; false otherwise.</returns>
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


intellisense.annotate(kendo.drawing, {
    Image: function() {
        /// <signature>
        /// <summary>Constructor of kendo.drawing.Image</summary>
        /// </signature>
    }
});

kendo.drawing.Image = (function() {
var original = kendo.drawing.Image;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    bbox: function() {
        /// <signature>
        /// <summary>
        /// Returns the bounding box of the element with transformations applied.
/// Inherited from Element.bbox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with transformations applied.</returns>
        /// </signature>
    },
    clip: function(clip) {
        /// <signature>
        /// <summary>
        /// Gets or sets the element clipping path.
/// Inherited from Element.clip
        /// </summary>
        /// <param name="clip" type="kendo.drawing.Path" >The element clipping path.</param>
        /// <returns type="kendo.drawing.Path">The current element clipping path.</returns>
        /// </signature>
    },
    clippedBBox: function() {
        /// <signature>
        /// <summary>
        /// Returns the bounding box of the element with clipping and transformations applied.
/// Inherited from Element.clippedBBox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with clipping transformations applied.</returns>
        /// </signature>
    },
    opacity: function(opacity) {
        /// <signature>
        /// <summary>
        /// Gets or sets the element opacity.
/// Inherited from Element.opacity
        /// </summary>
        /// <param name="opacity" type="Number" >The element opacity. Ranges from 0 (completely transparent) to 1 (completely opaque).</param>
        /// <returns type="Number">The current element opacity.</returns>
        /// </signature>
    },
    src: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the image source URL.
        /// </summary>
        /// <param name="value" type="String" >The new source URL.</param>
        /// <returns type="String">The current image source URL.</returns>
        /// </signature>
    },
    rect: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the rectangle defines the image position and size.
        /// </summary>
        /// <param name="value" type="kendo.geometry.Rect" >The new image rectangle.</param>
        /// <returns type="kendo.geometry.Rect">The current image rectangle.</returns>
        /// </signature>
    },
    transform: function(transform) {
        /// <signature>
        /// <summary>
        /// Gets or sets the transformation of the element.
/// Inherited from Element.transform
        /// </summary>
        /// <param name="transform" type="kendo.geometry.Transformation" >The transformation to apply to the element.</param>
        /// <returns type="kendo.geometry.Transformation">The current transformation on the element.</returns>
        /// </signature>
    },
    visible: function(visible) {
        /// <signature>
        /// <summary>
        /// Gets or sets the visibility of the element.
/// Inherited from Element.visible
        /// </summary>
        /// <param name="visible" type="Boolean" >A flag indicating if the element should be visible.</param>
        /// <returns type="Boolean">true if the element is visible; false otherwise.</returns>
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


intellisense.annotate(kendo.drawing, {
    Layout: function() {
        /// <signature>
        /// <summary>Constructor of kendo.drawing.Layout</summary>
        /// </signature>
    }
});

kendo.drawing.Layout = (function() {
var original = kendo.drawing.Layout;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    rect: function(rect) {
        /// <signature>
        /// <summary>
        /// Gets or sets the layout rectangle.
        /// </summary>
        /// <param name="rect" type="kendo.geometry.Rect" >The layout rectangle.</param>
        /// <returns type="kendo.geometry.Rect">The current rectangle.</returns>
        /// </signature>
    },
    reflow: function() {
        /// <signature>
        /// <summary>
        /// Arranges the elements based on the current options.
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


intellisense.annotate(kendo.drawing, {
    LinearGradient: function() {
        /// <signature>
        /// <summary>Constructor of kendo.drawing.LinearGradient</summary>
        /// </signature>
    }
});

kendo.drawing.LinearGradient = (function() {
var original = kendo.drawing.LinearGradient;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    addStop: function(offset,color,opacity) {
        /// <signature>
        /// <summary>
        /// Adds a color stop to the gradient.
/// Inherited from Gradient.addStop
        /// </summary>
        /// <param name="offset" type="Number" ></param>
        /// <param name="color" type="String" >The color of the stop.</param>
        /// <param name="opacity" type="Number" >The fill opacity.</param>
        /// <returns type="kendo.drawing.GradientStop">The new gradient color stop.</returns>
        /// </signature>
    },
    end: function(end) {
        /// <signature>
        /// <summary>
        /// Gets or sets the end point of the gradient.
        /// </summary>
        /// <param name="end" type="Object" >The end point of the gradient.Coordinates are relative to the shape bounding box. For example [0, 0] is top left and [1, 1] is bottom right.</param>
        /// <returns type="kendo.geometry.Point">The current end point of the gradient.</returns>
        /// </signature>
    },
    start: function(start) {
        /// <signature>
        /// <summary>
        /// Gets or sets the start point of the gradient.
        /// </summary>
        /// <param name="start" type="Object" >The start point of the gradient.Coordinates are relative to the shape bounding box. For example [0, 0] is top left and [1, 1] is bottom right.</param>
        /// <returns type="kendo.geometry.Point">The current start point of the gradient.</returns>
        /// </signature>
    },
    removeStop: function(stop) {
        /// <signature>
        /// <summary>
        /// Removes a color stop from the gradient.
/// Inherited from Gradient.removeStop
        /// </summary>
        /// <param name="stop" type="kendo.drawing.GradientStop" >The gradient color stop to remove.</param>
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


intellisense.annotate(kendo.drawing, {
    MultiPath: function() {
        /// <signature>
        /// <summary>Constructor of kendo.drawing.MultiPath</summary>
        /// </signature>
    }
});

kendo.drawing.MultiPath = (function() {
var original = kendo.drawing.MultiPath;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    bbox: function() {
        /// <signature>
        /// <summary>
        /// Returns the bounding box of the element with transformations applied.
/// Inherited from Element.bbox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with transformations applied.</returns>
        /// </signature>
    },
    clip: function(clip) {
        /// <signature>
        /// <summary>
        /// Gets or sets the element clipping path.
/// Inherited from Element.clip
        /// </summary>
        /// <param name="clip" type="kendo.drawing.Path" >The element clipping path.</param>
        /// <returns type="kendo.drawing.Path">The current element clipping path.</returns>
        /// </signature>
    },
    clippedBBox: function() {
        /// <signature>
        /// <summary>
        /// Returns the bounding box of the element with clipping and transformations applied.
/// Inherited from Element.clippedBBox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with clipping transformations applied.</returns>
        /// </signature>
    },
    close: function() {
        /// <signature>
        /// <summary>
        /// Closes the current sub-path by linking its current end point with its start point.
        /// </summary>
        /// <returns type="kendo.drawing.MultiPath">The current instance to allow chaining.</returns>
        /// </signature>
    },
    curveTo: function(controlOut,controlIn) {
        /// <signature>
        /// <summary>
        /// Draws a cubic Bézier curve (with two control points).A quadratic Bézier curve (with one control point) can be plotted by making the control point equal.
        /// </summary>
        /// <param name="controlOut" type="Object" >The first control point for the curve.</param>
        /// <param name="controlIn" type="Object" >The second control point for the curve.</param>
        /// <returns type="kendo.drawing.MultiPath">The current instance to allow chaining.</returns>
        /// </signature>
    },
    fill: function(color,opacity) {
        /// <signature>
        /// <summary>
        /// Sets the shape fill.
        /// </summary>
        /// <param name="color" type="String" >The fill color to set.</param>
        /// <param name="opacity" type="Number" >The fill opacity to set.</param>
        /// <returns type="kendo.drawing.MultiPath">The current instance to allow chaining.</returns>
        /// </signature>
    },
    lineTo: function(x,y) {
        /// <signature>
        /// <summary>
        /// Draws a straight line to the specified absolute coordinates.
        /// </summary>
        /// <param name="x" type="Object" >The line end X coordinate or a Point/Array with X and Y coordinates.</param>
        /// <param name="y" type="Number" >The line end Y coordinate.Optional if the first parameter is a Point/Array.</param>
        /// <returns type="kendo.drawing.MultiPath">The current instance to allow chaining.</returns>
        /// </signature>
    },
    moveTo: function(x,y) {
        /// <signature>
        /// <summary>
        /// Creates a new sub-path or clears all segments and moves the starting point to the specified absolute coordinates.
        /// </summary>
        /// <param name="x" type="Object" >The starting X coordinate or a Point/Array with X and Y coordinates.</param>
        /// <param name="y" type="Number" >The starting Y coordinate.Optional if the first parameter is a Point/Array.</param>
        /// <returns type="kendo.drawing.MultiPath">The current instance to allow chaining.</returns>
        /// </signature>
    },
    opacity: function(opacity) {
        /// <signature>
        /// <summary>
        /// Gets or sets the element opacity.
/// Inherited from Element.opacityIf set, the stroke and fill opacity will be multiplied by the element opacity.
        /// </summary>
        /// <param name="opacity" type="Number" >The element opacity. Ranges from 0 (completely transparent) to 1 (completely opaque).</param>
        /// <returns type="Number">The current element opacity.</returns>
        /// </signature>
    },
    stroke: function(color,width,opacity) {
        /// <signature>
        /// <summary>
        /// Sets the shape stroke.
        /// </summary>
        /// <param name="color" type="String" >The stroke color to set.</param>
        /// <param name="width" type="Number" >The stroke width to set.</param>
        /// <param name="opacity" type="Number" >The stroke opacity to set.</param>
        /// <returns type="kendo.drawing.MultiPath">The current instance to allow chaining.</returns>
        /// </signature>
    },
    transform: function(transform) {
        /// <signature>
        /// <summary>
        /// Gets or sets the transformation of the element.
/// Inherited from Element.transform
        /// </summary>
        /// <param name="transform" type="kendo.geometry.Transformation" >The transformation to apply to the element.</param>
        /// <returns type="kendo.geometry.Transformation">The current transformation on the element.</returns>
        /// </signature>
    },
    visible: function(visible) {
        /// <signature>
        /// <summary>
        /// Gets or sets the visibility of the element.
/// Inherited from Element.visible
        /// </summary>
        /// <param name="visible" type="Boolean" >A flag indicating if the element should be visible.</param>
        /// <returns type="Boolean">true if the element is visible; false otherwise.</returns>
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


intellisense.annotate(kendo.drawing, {
    OptionsStore: function() {
        /// <signature>
        /// <summary>Constructor of kendo.drawing.OptionsStore</summary>
        /// </signature>
    }
});

kendo.drawing.OptionsStore = (function() {
var original = kendo.drawing.OptionsStore;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    get: function(field) {
        /// <signature>
        /// <summary>
        /// Gets the value of the specified option.
        /// </summary>
        /// <param name="field" type="String" >The field name to retrieve. Must be a fully qualified name (e.g. "foo.bar") for nested options.</param>
        /// <returns type="Object">The current option value.</returns>
        /// </signature>
    },
    set: function(field,value) {
        /// <signature>
        /// <summary>
        /// Sets the value of the specified option.
        /// </summary>
        /// <param name="field" type="String" >The name of the option to set. Must be a fully qualified name (e.g. "foo.bar") for nested options.</param>
        /// <param name="value" type="Object" >The new option value.If the new value is exactly the same as the new value the operation will not trigger options change on the observer (if any).</param>
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


intellisense.annotate(kendo.drawing, {
    PDFOptions: function() {
        /// <signature>
        /// <summary>Constructor of kendo.drawing.PDFOptions</summary>
        /// </signature>
    }
});

kendo.drawing.PDFOptions = (function() {
var original = kendo.drawing.PDFOptions;
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


intellisense.annotate(kendo.drawing, {
    Path: function() {
        /// <signature>
        /// <summary>Constructor of kendo.drawing.Path</summary>
        /// </signature>
    }
});

kendo.drawing.Path = (function() {
var original = kendo.drawing.Path;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    bbox: function() {
        /// <signature>
        /// <summary>
        /// Returns the bounding box of the element with transformations applied.
/// Inherited from Element.bbox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with transformations applied.</returns>
        /// </signature>
    },
    clip: function(clip) {
        /// <signature>
        /// <summary>
        /// Gets or sets the element clipping path.
/// Inherited from Element.clip
        /// </summary>
        /// <param name="clip" type="kendo.drawing.Path" >The element clipping path.</param>
        /// <returns type="kendo.drawing.Path">The current element clipping path.</returns>
        /// </signature>
    },
    clippedBBox: function() {
        /// <signature>
        /// <summary>
        /// Returns the bounding box of the element with clipping and transformations applied.
/// Inherited from Element.clippedBBox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with clipping transformations applied.</returns>
        /// </signature>
    },
    close: function() {
        /// <signature>
        /// <summary>
        /// Closes the path by linking the current end point with the start point.
        /// </summary>
        /// <returns type="kendo.drawing.Path">The current instance to allow chaining.</returns>
        /// </signature>
    },
    curveTo: function(controlOut,controlIn) {
        /// <signature>
        /// <summary>
        /// Draws a cubic Bézier curve (with two control points).A quadratic Bézier curve (with one control point) can be plotted by making the control point equal.
        /// </summary>
        /// <param name="controlOut" type="Object" >The first control point for the curve.</param>
        /// <param name="controlIn" type="Object" >The second control point for the curve.</param>
        /// <returns type="kendo.drawing.Path">The current instance to allow chaining.</returns>
        /// </signature>
    },
    fill: function(color,opacity) {
        /// <signature>
        /// <summary>
        /// Sets the shape fill.
        /// </summary>
        /// <param name="color" type="String" >The fill color to set.</param>
        /// <param name="opacity" type="Number" >The fill opacity to set.</param>
        /// <returns type="kendo.drawing.Path">The current instance to allow chaining.</returns>
        /// </signature>
    },
    lineTo: function(x,y) {
        /// <signature>
        /// <summary>
        /// Draws a straight line to the specified absolute coordinates.
        /// </summary>
        /// <param name="x" type="Object" >The line end X coordinate or a Point/Array with X and Y coordinates.</param>
        /// <param name="y" type="Number" >The line end Y coordinate.Optional if the first parameter is a Point/Array.</param>
        /// <returns type="kendo.drawing.Path">The current instance to allow chaining.</returns>
        /// </signature>
    },
    moveTo: function(x,y) {
        /// <signature>
        /// <summary>
        /// Clears all existing segments and moves the starting point to the specified absolute coordinates.
        /// </summary>
        /// <param name="x" type="Object" >The starting X coordinate or a Point/Array with X and Y coordinates.</param>
        /// <param name="y" type="Number" >The starting Y coordinate.Optional if the first parameter is a Point/Array.</param>
        /// <returns type="kendo.drawing.Path">The current instance to allow chaining.</returns>
        /// </signature>
    },
    opacity: function(opacity) {
        /// <signature>
        /// <summary>
        /// Gets or sets the element opacity.
/// Inherited from Element.opacityIf set, the stroke and fill opacity will be multiplied by the element opacity.
        /// </summary>
        /// <param name="opacity" type="Number" >The element opacity. Ranges from 0 (completely transparent) to 1 (completely opaque).</param>
        /// <returns type="Number">The current element opacity.</returns>
        /// </signature>
    },
    stroke: function(color,width,opacity) {
        /// <signature>
        /// <summary>
        /// Sets the shape stroke.
        /// </summary>
        /// <param name="color" type="String" >The stroke color to set.</param>
        /// <param name="width" type="Number" >The stroke width to set.</param>
        /// <param name="opacity" type="Number" >The stroke opacity to set.</param>
        /// <returns type="kendo.drawing.Path">The current instance to allow chaining.</returns>
        /// </signature>
    },
    transform: function(transform) {
        /// <signature>
        /// <summary>
        /// Gets or sets the transformation of the element.
/// Inherited from Element.transform
        /// </summary>
        /// <param name="transform" type="kendo.geometry.Transformation" >The transformation to apply to the element.</param>
        /// <returns type="kendo.geometry.Transformation">The current transformation on the element.</returns>
        /// </signature>
    },
    visible: function(visible) {
        /// <signature>
        /// <summary>
        /// Gets or sets the visibility of the element.
/// Inherited from Element.visible
        /// </summary>
        /// <param name="visible" type="Boolean" >A flag indicating if the element should be visible.</param>
        /// <returns type="Boolean">true if the element is visible; false otherwise.</returns>
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


intellisense.annotate(kendo.drawing, {
    RadialGradient: function() {
        /// <signature>
        /// <summary>Constructor of kendo.drawing.RadialGradient</summary>
        /// </signature>
    }
});

kendo.drawing.RadialGradient = (function() {
var original = kendo.drawing.RadialGradient;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    addStop: function(offset,color,opacity) {
        /// <signature>
        /// <summary>
        /// Adds a color stop to the gradient.
/// Inherited from Gradient.addStop
        /// </summary>
        /// <param name="offset" type="Number" ></param>
        /// <param name="color" type="String" >The color of the stop.</param>
        /// <param name="opacity" type="Number" >The fill opacity.</param>
        /// <returns type="kendo.drawing.GradientStop">The new gradient color stop.</returns>
        /// </signature>
    },
    center: function(center) {
        /// <signature>
        /// <summary>
        /// Gets or sets the center point of the gradient.
        /// </summary>
        /// <param name="center" type="Object" >The center point of the gradient.Coordinates are relative to the shape bounding box. For example [0, 0] is top left and [1, 1] is bottom right.</param>
        /// <returns type="kendo.geometry.Point">The current radius of the gradient.</returns>
        /// </signature>
    },
    radius: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the radius of the gradient.
        /// </summary>
        /// <param name="value" type="Number" >The new radius of the gradient.</param>
        /// <returns type="Number">The current radius of the gradient.</returns>
        /// </signature>
    },
    removeStop: function(stop) {
        /// <signature>
        /// <summary>
        /// Removes a color stop from the gradient.
/// Inherited from Gradient.removeStop
        /// </summary>
        /// <param name="stop" type="kendo.drawing.GradientStop" >The gradient color stop to remove.</param>
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


intellisense.annotate(kendo.drawing, {
    Rect: function() {
        /// <signature>
        /// <summary>Constructor of kendo.drawing.Rect</summary>
        /// </signature>
    }
});

kendo.drawing.Rect = (function() {
var original = kendo.drawing.Rect;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    bbox: function() {
        /// <signature>
        /// <summary>
        /// Returns the bounding box of the element with transformations applied.
/// Inherited from Element.bbox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with transformations applied.</returns>
        /// </signature>
    },
    clip: function(clip) {
        /// <signature>
        /// <summary>
        /// Gets or sets the element clipping path.
/// Inherited from Element.clip
        /// </summary>
        /// <param name="clip" type="kendo.drawing.Path" >The element clipping path.</param>
        /// <returns type="kendo.drawing.Path">The current element clipping path.</returns>
        /// </signature>
    },
    clippedBBox: function() {
        /// <signature>
        /// <summary>
        /// Returns the bounding box of the element with clipping and transformations applied.
/// Inherited from Element.clippedBBox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with clipping transformations applied.</returns>
        /// </signature>
    },
    geometry: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the rectangle geometry.
        /// </summary>
        /// <param name="value" type="kendo.geometry.Rect" >The new geometry to use.</param>
        /// <returns type="kendo.geometry.Rect">The current rectangle geometry.</returns>
        /// </signature>
    },
    fill: function(color,opacity) {
        /// <signature>
        /// <summary>
        /// Sets the shape fill.
        /// </summary>
        /// <param name="color" type="String" >The fill color to set.</param>
        /// <param name="opacity" type="Number" >The fill opacity to set.</param>
        /// <returns type="kendo.drawing.Rect">The current instance to allow chaining.</returns>
        /// </signature>
    },
    opacity: function(opacity) {
        /// <signature>
        /// <summary>
        /// Gets or sets the element opacity.
/// Inherited from Element.opacityIf set, the stroke and fill opacity will be multiplied by the element opacity.
        /// </summary>
        /// <param name="opacity" type="Number" >The element opacity. Ranges from 0 (completely transparent) to 1 (completely opaque).</param>
        /// <returns type="Number">The current element opacity.</returns>
        /// </signature>
    },
    stroke: function(color,width,opacity) {
        /// <signature>
        /// <summary>
        /// Sets the shape stroke.
        /// </summary>
        /// <param name="color" type="String" >The stroke color to set.</param>
        /// <param name="width" type="Number" >The stroke width to set.</param>
        /// <param name="opacity" type="Number" >The stroke opacity to set.</param>
        /// <returns type="kendo.drawing.Rect">The current instance to allow chaining.</returns>
        /// </signature>
    },
    transform: function(transform) {
        /// <signature>
        /// <summary>
        /// Gets or sets the transformation of the element.
/// Inherited from Element.transform
        /// </summary>
        /// <param name="transform" type="kendo.geometry.Transformation" >The transformation to apply to the element.</param>
        /// <returns type="kendo.geometry.Transformation">The current transformation on the element.</returns>
        /// </signature>
    },
    visible: function(visible) {
        /// <signature>
        /// <summary>
        /// Gets or sets the visibility of the element.
/// Inherited from Element.visible
        /// </summary>
        /// <param name="visible" type="Boolean" >A flag indicating if the element should be visible.</param>
        /// <returns type="Boolean">true if the element is visible; false otherwise.</returns>
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


intellisense.annotate(kendo.drawing, {
    Segment: function() {
        /// <signature>
        /// <summary>Constructor of kendo.drawing.Segment</summary>
        /// </signature>
    }
});

kendo.drawing.Segment = (function() {
var original = kendo.drawing.Segment;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    anchor: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the segment anchor point.The setter returns the current Segment to allow chaining.
        /// </summary>
        /// <param name="value" type="kendo.geometry.Point" >The new anchor point.</param>
        /// <returns type="kendo.geometry.Point">The current anchor point.</returns>
        /// </signature>
    },
    controlIn: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the first curve control point of this segment.The setter returns the current Segment to allow chaining.
        /// </summary>
        /// <param name="value" type="kendo.geometry.Point" >The new control point.</param>
        /// <returns type="kendo.geometry.Point">The current control point.</returns>
        /// </signature>
    },
    controlOut: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the second curve control point of this segment.The setter returns the current Segment to allow chaining.
        /// </summary>
        /// <param name="value" type="kendo.geometry.Point" >The new control point.</param>
        /// <returns type="kendo.geometry.Point">The current control point.</returns>
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


intellisense.annotate(kendo.drawing, {
    StrokeOptions: function() {
        /// <signature>
        /// <summary>Constructor of kendo.drawing.StrokeOptions</summary>
        /// </signature>
    }
});

kendo.drawing.StrokeOptions = (function() {
var original = kendo.drawing.StrokeOptions;
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


intellisense.annotate(kendo.drawing, {
    Surface: function() {
        /// <signature>
        /// <summary>Constructor of kendo.drawing.Surface</summary>
        /// </signature>
    }
});

kendo.drawing.Surface = (function() {
var original = kendo.drawing.Surface;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    clear: function() {
        /// <signature>
        /// <summary>
        /// Clears the drawing surface.
        /// </summary>
        /// </signature>
    },
    draw: function(element) {
        /// <signature>
        /// <summary>
        /// Draws the element and its children on the surface.
/// Existing elements will remain visible.
        /// </summary>
        /// <param name="element" type="kendo.drawing.Element" >The element to draw.</param>
        /// </signature>
    },
    eventTarget: function(e) {
        /// <signature>
        /// <summary>
        /// Returns the target drawing element of a DOM event.
        /// </summary>
        /// <param name="e" type="Object" >The original DOM or jQuery event object.</param>
        /// <returns type="kendo.drawing.Element">The target drawing element, if any.</returns>
        /// </signature>
    },
    resize: function(force) {
        /// <signature>
        /// <summary>
        /// Resizes the surface to match the size of the container.
        /// </summary>
        /// <param name="force" type="Boolean" >Whether to proceed with resizing even if the container dimensions have not changed.</param>
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


intellisense.annotate(kendo.drawing, {
    Text: function() {
        /// <signature>
        /// <summary>Constructor of kendo.drawing.Text</summary>
        /// </signature>
    }
});

kendo.drawing.Text = (function() {
var original = kendo.drawing.Text;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    bbox: function() {
        /// <signature>
        /// <summary>
        /// Returns the bounding box of the element with transformations applied.
/// Inherited from Element.bbox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with transformations applied.</returns>
        /// </signature>
    },
    clip: function(clip) {
        /// <signature>
        /// <summary>
        /// Gets or sets the element clipping path.
/// Inherited from Element.clip
        /// </summary>
        /// <param name="clip" type="kendo.drawing.Path" >The element clipping path.</param>
        /// <returns type="kendo.drawing.Path">The current element clipping path.</returns>
        /// </signature>
    },
    clippedBBox: function() {
        /// <signature>
        /// <summary>
        /// Returns the bounding box of the element with clipping and transformations applied.
/// Inherited from Element.clippedBBox
        /// </summary>
        /// <returns type="kendo.geometry.Rect">The bounding box of the element with clipping transformations applied.</returns>
        /// </signature>
    },
    content: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the text content.
        /// </summary>
        /// <param name="value" type="String" >The new text content to set.</param>
        /// <returns type="String">The current content of the text.</returns>
        /// </signature>
    },
    fill: function(color,opacity) {
        /// <signature>
        /// <summary>
        /// Sets the text fill.
        /// </summary>
        /// <param name="color" type="String" >The fill color to set.</param>
        /// <param name="opacity" type="Number" >The fill opacity to set.</param>
        /// <returns type="kendo.drawing.Text">The current instance to allow chaining.</returns>
        /// </signature>
    },
    opacity: function(opacity) {
        /// <signature>
        /// <summary>
        /// Gets or sets the element opacity.
/// Inherited from Element.opacityIf set, the stroke and fill opacity will be multiplied by the element opacity.
        /// </summary>
        /// <param name="opacity" type="Number" >The element opacity. Ranges from 0 (completely transparent) to 1 (completely opaque).</param>
        /// <returns type="Number">The current element opacity.</returns>
        /// </signature>
    },
    position: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the position of the text upper left corner.
        /// </summary>
        /// <param name="value" type="kendo.geometry.Point" >The new position of the text upper left corner.</param>
        /// <returns type="kendo.geometry.Point">The current position of the text upper left corner.</returns>
        /// </signature>
    },
    stroke: function(color,width,opacity) {
        /// <signature>
        /// <summary>
        /// Sets the text stroke.
        /// </summary>
        /// <param name="color" type="String" >The stroke color to set.</param>
        /// <param name="width" type="Number" >The stroke width to set.</param>
        /// <param name="opacity" type="Number" >The stroke opacity to set.</param>
        /// <returns type="kendo.drawing.Text">The current instance to allow chaining.</returns>
        /// </signature>
    },
    transform: function(transform) {
        /// <signature>
        /// <summary>
        /// Gets or sets the transformation of the element.
/// Inherited from Element.transform
        /// </summary>
        /// <param name="transform" type="kendo.geometry.Transformation" >The transformation to apply to the element.</param>
        /// <returns type="kendo.geometry.Transformation">The current transformation on the element.</returns>
        /// </signature>
    },
    visible: function(visible) {
        /// <signature>
        /// <summary>
        /// Gets or sets the visibility of the element.
/// Inherited from Element.visible
        /// </summary>
        /// <param name="visible" type="Boolean" >A flag indicating if the element should be visible.</param>
        /// <returns type="Boolean">true if the element is visible; false otherwise.</returns>
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



intellisense.annotate(kendo.geometry, {
    Arc: function() {
        /// <signature>
        /// <summary>Constructor of kendo.geometry.Arc</summary>
        /// </signature>
    }
});

kendo.geometry.Arc = (function() {
var original = kendo.geometry.Arc;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    bbox: function(matrix) {
        /// <signature>
        /// <summary>
        /// Returns the bounding box of this arc after applying the specified transformation matrix.
        /// </summary>
        /// <param name="matrix" type="kendo.geometry.Matrix" >Transformation matrix to apply.</param>
        /// <returns type="kendo.geometry.Rect">The bounding box after applying the transformation matrix.</returns>
        /// </signature>
    },
    getAnticlockwise: function() {
        /// <signature>
        /// <summary>
        /// Gets the arc anticlokwise flag.
        /// </summary>
        /// <returns type="Boolean">The anticlokwise flag of the arc.</returns>
        /// </signature>
    },
    getCenter: function() {
        /// <signature>
        /// <summary>
        /// Gets the arc center location.
        /// </summary>
        /// <returns type="kendo.geometry.Point">The location of the arc center.</returns>
        /// </signature>
    },
    getEndAngle: function() {
        /// <signature>
        /// <summary>
        /// Gets the end angle of the arc in decimal degrees.
/// Measured in clockwise direction with 0 pointing "right".
        /// </summary>
        /// <returns type="Number">The end angle of the arc.</returns>
        /// </signature>
    },
    getRadiusX: function() {
        /// <signature>
        /// <summary>
        /// Gets the x radius of the arc.
        /// </summary>
        /// <returns type="Number">The x radius of the arc.</returns>
        /// </signature>
    },
    getRadiusY: function() {
        /// <signature>
        /// <summary>
        /// Gets the y radius of the arc.
        /// </summary>
        /// <returns type="Number">The y radius of the arc.</returns>
        /// </signature>
    },
    getStartAngle: function() {
        /// <signature>
        /// <summary>
        /// Gets the start angle of the arc in decimal degrees.
/// Measured in clockwise direction with 0 pointing "right".
        /// </summary>
        /// <returns type="Number">The start angle of the arc.</returns>
        /// </signature>
    },
    pointAt: function(angle) {
        /// <signature>
        /// <summary>
        /// Gets the location of a point on the arc's circumference at a given angle.
        /// </summary>
        /// <param name="angle" type="Number" >Angle in decimal degrees. Measured in clockwise direction with 0 pointing "right". Negative values or values greater than 360 will be normalized.</param>
        /// <returns type="kendo.geometry.Point">The point on the arc's circumference.</returns>
        /// </signature>
    },
    setAnticlockwise: function(value) {
        /// <signature>
        /// <summary>
        /// Sets the arc anticlokwise flag.
        /// </summary>
        /// <param name="value" type="Boolean" >The new anticlockwise value.</param>
        /// <returns type="kendo.geometry.Arc">The current arc instance.</returns>
        /// </signature>
    },
    setCenter: function(value) {
        /// <signature>
        /// <summary>
        /// Sets the arc center location.
        /// </summary>
        /// <param name="value" type="kendo.geometry.Point" >The new arc center.</param>
        /// <returns type="kendo.geometry.Arc">The current arc instance.</returns>
        /// </signature>
    },
    setEndAngle: function(value) {
        /// <signature>
        /// <summary>
        /// Sets the end angle of the arc in decimal degrees.
/// Measured in clockwise direction with 0 pointing "right".
        /// </summary>
        /// <param name="value" type="Number" >The new arc end angle.</param>
        /// <returns type="kendo.geometry.Arc">The current arc instance.</returns>
        /// </signature>
    },
    setRadiusX: function(value) {
        /// <signature>
        /// <summary>
        /// Sets the x radius of the arc.
        /// </summary>
        /// <param name="value" type="Number" >The new arc x radius.</param>
        /// <returns type="kendo.geometry.Arc">The current arc instance.</returns>
        /// </signature>
    },
    setRadiusY: function(value) {
        /// <signature>
        /// <summary>
        /// Sets the y radius of the arc.
        /// </summary>
        /// <param name="value" type="Number" >The new arc y radius.</param>
        /// <returns type="kendo.geometry.Arc">The current arc instance.</returns>
        /// </signature>
    },
    setStartAngle: function(value) {
        /// <signature>
        /// <summary>
        /// Sets the start angle of the arc in decimal degrees.
/// Measured in clockwise direction with 0 pointing "right".
        /// </summary>
        /// <param name="value" type="Number" >The new arc atart angle.</param>
        /// <returns type="kendo.geometry.Arc">The current arc instance.</returns>
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


intellisense.annotate(kendo.geometry, {
    Circle: function() {
        /// <signature>
        /// <summary>Constructor of kendo.geometry.Circle</summary>
        /// </signature>
    }
});

kendo.geometry.Circle = (function() {
var original = kendo.geometry.Circle;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    bbox: function(matrix) {
        /// <signature>
        /// <summary>
        /// Returns the bounding box of this circle after applying the
/// specified transformation matrix.
        /// </summary>
        /// <param name="matrix" type="kendo.geometry.Matrix" >Transformation matrix to apply.</param>
        /// <returns type="kendo.geometry.Rect">The bounding box after applying the transformation matrix.</returns>
        /// </signature>
    },
    clone: function() {
        /// <signature>
        /// <summary>
        /// Creates a new instance with the same center and radius.
        /// </summary>
        /// <returns type="kendo.geometry.Circle">A new Circle instance with the same center and radius.</returns>
        /// </signature>
    },
    equals: function(other) {
        /// <signature>
        /// <summary>
        /// Compares this circle with another instance.
        /// </summary>
        /// <param name="other" type="kendo.geometry.Circle" >The circle to compare with.</param>
        /// <returns type="Boolean">true if the point coordinates match; false otherwise.</returns>
        /// </signature>
    },
    getCenter: function() {
        /// <signature>
        /// <summary>
        /// Gets the circle center location.
        /// </summary>
        /// <returns type="kendo.geometry.Point">The location of the circle center.</returns>
        /// </signature>
    },
    getRadius: function() {
        /// <signature>
        /// <summary>
        /// Gets the circle radius.
        /// </summary>
        /// <returns type="Number">The radius of the circle.</returns>
        /// </signature>
    },
    pointAt: function(angle) {
        /// <signature>
        /// <summary>
        /// Gets the location of a point on the circle's circumference at a given angle.
        /// </summary>
        /// <param name="angle" type="Number" >Angle in decimal degrees. Measured in clockwise direction with 0 pointing "right". Negative values or values greater than 360 will be normalized.</param>
        /// <returns type="kendo.geometry.Point">The point on the circle's circumference.</returns>
        /// </signature>
    },
    setCenter: function(value) {
        /// <signature>
        /// <summary>
        /// Sets the location of the circle center.
        /// </summary>
        /// <param name="value" type="Object" >The new center Point or equivalent [x, y] array.</param>
        /// <returns type="kendo.geometry.Point">The location of the circle center.</returns>
        /// </signature>
    },
    setRadius: function(value) {
        /// <signature>
        /// <summary>
        /// Sets the circle radius.
        /// </summary>
        /// <param name="value" type="Number" >The new circle radius.</param>
        /// <returns type="kendo.geometry.Circle">The current circle instance.</returns>
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


intellisense.annotate(kendo.geometry, {
    Matrix: function() {
        /// <signature>
        /// <summary>Constructor of kendo.geometry.Matrix</summary>
        /// </signature>
    }
});

kendo.geometry.Matrix = (function() {
var original = kendo.geometry.Matrix;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    clone: function() {
        /// <signature>
        /// <summary>
        /// Creates a new instance with the same element values.
        /// </summary>
        /// <returns type="kendo.geometry.Matrix">A new Matrix instance with the same element values.</returns>
        /// </signature>
    },
    equals: function(other) {
        /// <signature>
        /// <summary>
        /// Compares this matrix with another instance.
        /// </summary>
        /// <param name="other" type="kendo.geometry.Matrix" >The matrix instance to compare with.</param>
        /// <returns type="Boolean">true if the matrix elements match; false otherwise.</returns>
        /// </signature>
    },
    round: function(digits) {
        /// <signature>
        /// <summary>
        /// Rounds the matrix elements to the specified number of fractional digits.
        /// </summary>
        /// <param name="digits" type="Number" >Number of fractional digits.</param>
        /// <returns type="kendo.geometry.Matrix">The current matrix instance.</returns>
        /// </signature>
    },
    multiplyCopy: function(matrix) {
        /// <signature>
        /// <summary>
        /// Multiplies the matrix with another one and returns the result as new instance.
/// The current instance elements are not altered.
        /// </summary>
        /// <param name="matrix" type="kendo.geometry.Matrix" >The matrix to multiply by.</param>
        /// <returns type="kendo.geometry.Matrix">The result of the multiplication.</returns>
        /// </signature>
    },
    toArray: function(digits) {
        /// <signature>
        /// <summary>
        /// Returns the matrix elements as an [a, b, c, d, e, f] array.
        /// </summary>
        /// <param name="digits" type="Number" >(Optional) Number of fractional digits.</param>
        /// <returns type="Array">An array representation of the matrix.</returns>
        /// </signature>
    },
    toString: function(digits,separator) {
        /// <signature>
        /// <summary>
        /// Formats the matrix elements as a string.
        /// </summary>
        /// <param name="digits" type="Number" >(Optional) Number of fractional digits.</param>
        /// <param name="separator" type="String" >The separator to place between elements.</param>
        /// <returns type="String">A string representation of the matrix, e.g. "1, 0, 0, 1, 0, 0".</returns>
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


intellisense.annotate(kendo.geometry, {
    Point: function() {
        /// <signature>
        /// <summary>Constructor of kendo.geometry.Point</summary>
        /// </signature>
    }
});

kendo.geometry.Point = (function() {
var original = kendo.geometry.Point;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    clone: function() {
        /// <signature>
        /// <summary>
        /// Creates a new instance with the same coordinates.
        /// </summary>
        /// <returns type="kendo.geometry.Point">A new Point instance with the same coordinates.</returns>
        /// </signature>
    },
    distanceTo: function(point) {
        /// <signature>
        /// <summary>
        /// Calculates the distance to another point.
        /// </summary>
        /// <param name="point" type="kendo.geometry.Point" >The point to calculate the distance to.</param>
        /// <returns type="Number">The straight line distance to the given point.</returns>
        /// </signature>
    },
    equals: function(other) {
        /// <signature>
        /// <summary>
        /// Compares this point with another instance.
        /// </summary>
        /// <param name="other" type="kendo.geometry.Point" >The point to compare with.</param>
        /// <returns type="Boolean">true if the point coordinates match; false otherwise.</returns>
        /// </signature>
    },
    getX: function() {
        /// <signature>
        /// <summary>
        /// Gets the x coordinate value.
        /// </summary>
        /// <returns type="Number">The current x coordinate value.</returns>
        /// </signature>
    },
    getY: function() {
        /// <signature>
        /// <summary>
        /// Gets the y coordinate value.
        /// </summary>
        /// <returns type="Number">The current y coordinate value.</returns>
        /// </signature>
    },
    move: function(x,y) {
        /// <signature>
        /// <summary>
        /// Moves the point to the specified x and y coordinates.
        /// </summary>
        /// <param name="x" type="Number" >The new X coordinate.</param>
        /// <param name="y" type="Number" >The new Y coordinate.</param>
        /// <returns type="kendo.geometry.Point">The current point instance.</returns>
        /// </signature>
    },
    rotate: function(angle,center) {
        /// <signature>
        /// <summary>
        /// Rotates the point around the given center.
        /// </summary>
        /// <param name="angle" type="Number" >Angle in decimal degrees. Measured in clockwise direction with 0 pointing "right". Negative values or values greater than 360 will be normalized.</param>
        /// <param name="center" type="Object" >The rotation center. Can be a Point instance or an [x, y] array.</param>
        /// <returns type="kendo.geometry.Point">The current Point instance.</returns>
        /// </signature>
    },
    round: function(digits) {
        /// <signature>
        /// <summary>
        /// Rounds the point coordinates to the specified number of fractional digits.
        /// </summary>
        /// <param name="digits" type="Number" >Number of fractional digits.</param>
        /// <returns type="kendo.geometry.Point">The current Point instance.</returns>
        /// </signature>
    },
    scale: function(scaleX,scaleY) {
        /// <signature>
        /// <summary>
        /// Scales the point coordinates along the x and y axis.
        /// </summary>
        /// <param name="scaleX" type="Number" >The x scale multiplier.</param>
        /// <param name="scaleY" type="Number" >The y scale multiplier.</param>
        /// <returns type="kendo.geometry.Point">The current point instance.</returns>
        /// </signature>
    },
    scaleCopy: function(scaleX,scaleY) {
        /// <signature>
        /// <summary>
        /// Scales the point coordinates on a copy of the current point.
/// The callee coordinates will remain unchanged.
        /// </summary>
        /// <param name="scaleX" type="Number" >The x scale multiplier.</param>
        /// <param name="scaleY" type="Number" >The y scale multiplier.</param>
        /// <returns type="kendo.geometry.Point">The new Point instance.</returns>
        /// </signature>
    },
    setX: function(value) {
        /// <signature>
        /// <summary>
        /// Sets the x coordinate to a new value.
        /// </summary>
        /// <param name="value" type="Number" >The new x coordinate value.</param>
        /// <returns type="kendo.geometry.Point">The current Point instance.</returns>
        /// </signature>
    },
    setY: function(value) {
        /// <signature>
        /// <summary>
        /// Sets the y coordinate to a new value.
        /// </summary>
        /// <param name="value" type="Number" >The new y coordinate value.</param>
        /// <returns type="kendo.geometry.Point">The current Point instance.</returns>
        /// </signature>
    },
    toArray: function(digits) {
        /// <signature>
        /// <summary>
        /// Returns the point coordinates as an [x, y] array.
        /// </summary>
        /// <param name="digits" type="Number" >(Optional) Number of fractional digits.</param>
        /// <returns type="Array">An array representation of the point, e.g. [10, 20]</returns>
        /// </signature>
    },
    toString: function(digits,separator) {
        /// <signature>
        /// <summary>
        /// Formats the point value to a string.
        /// </summary>
        /// <param name="digits" type="Number" >(Optional) Number of fractional digits.</param>
        /// <param name="separator" type="String" >The separator to place between coordinates.</param>
        /// <returns type="String">A string representation of the point, e.g. "10 20".</returns>
        /// </signature>
    },
    transform: function(tansformation) {
        /// <signature>
        /// <summary>
        /// Applies a transformation to the point coordinates.
/// The current coordinates will be overriden.
        /// </summary>
        /// <param name="tansformation" type="kendo.geometry.Transformation" >The transformation to apply.</param>
        /// <returns type="kendo.geometry.Point">The current Point instance.</returns>
        /// </signature>
    },
    transformCopy: function(tansformation) {
        /// <signature>
        /// <summary>
        /// Applies a transformation on a copy of the current point.
/// The callee coordinates will remain unchanged.
        /// </summary>
        /// <param name="tansformation" type="kendo.geometry.Transformation" >The transformation to apply.</param>
        /// <returns type="kendo.geometry.Point">The new Point instance.</returns>
        /// </signature>
    },
    translate: function(dx,dy) {
        /// <signature>
        /// <summary>
        /// Translates the point along the x and y axis.
        /// </summary>
        /// <param name="dx" type="Number" >The distance to move along the X axis.</param>
        /// <param name="dy" type="Number" >The distance to move along the Y axis.</param>
        /// <returns type="kendo.geometry.Point">The current point instance.</returns>
        /// </signature>
    },
    translateWith: function(vector) {
        /// <signature>
        /// <summary>
        /// Translates the point by using a Point instance as a vector of translation.
        /// </summary>
        /// <param name="vector" type="Object" >The vector of translation. Can be either a Point instance or an [x, y] array.</param>
        /// <returns type="kendo.geometry.Point">The current point instance.</returns>
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


intellisense.annotate(kendo.geometry, {
    Rect: function() {
        /// <signature>
        /// <summary>Constructor of kendo.geometry.Rect</summary>
        /// </signature>
    }
});

kendo.geometry.Rect = (function() {
var original = kendo.geometry.Rect;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    bbox: function(matrix) {
        /// <signature>
        /// <summary>
        /// Returns the bounding box of this rectangle after applying the
/// specified transformation matrix.
        /// </summary>
        /// <param name="matrix" type="kendo.geometry.Matrix" >Transformation matrix to apply.</param>
        /// <returns type="kendo.geometry.Rect">The bounding box after applying the transformation matrix.</returns>
        /// </signature>
    },
    bottomLeft: function() {
        /// <signature>
        /// <summary>
        /// Gets the position of the bottom-left corner of the rectangle.
/// This is also the rectangle origin
        /// </summary>
        /// <returns type="kendo.geometry.Point">The position of the bottom-left corner.</returns>
        /// </signature>
    },
    bottomRight: function() {
        /// <signature>
        /// <summary>
        /// Gets the position of the bottom-right corner of the rectangle.
        /// </summary>
        /// <returns type="kendo.geometry.Point">The position of the bottom-right corner.</returns>
        /// </signature>
    },
    center: function() {
        /// <signature>
        /// <summary>
        /// Gets the position of the center of the rectangle.
        /// </summary>
        /// <returns type="kendo.geometry.Point">The position of the center.</returns>
        /// </signature>
    },
    clone: function() {
        /// <signature>
        /// <summary>
        /// Creates a new instance with the same origin and size.
        /// </summary>
        /// <returns type="kendo.geometry.Rect">A new Rect instance with the same origin and size.</returns>
        /// </signature>
    },
    equals: function(other) {
        /// <signature>
        /// <summary>
        /// Compares this rectangle with another instance.
        /// </summary>
        /// <param name="other" type="kendo.geometry.Rect" >The rectangle to compare with.</param>
        /// <returns type="Boolean">true if the origin and size is the same for both rectangles; false otherwise.</returns>
        /// </signature>
    },
    getOrigin: function() {
        /// <signature>
        /// <summary>
        /// Gets the origin (top-left point) of the rectangle.
        /// </summary>
        /// <returns type="kendo.geometry.Point">The origin (top-left point).</returns>
        /// </signature>
    },
    getSize: function() {
        /// <signature>
        /// <summary>
        /// Gets the rectangle size.
        /// </summary>
        /// <returns type="kendo.geometry.Size">The current rectangle Size.</returns>
        /// </signature>
    },
    height: function() {
        /// <signature>
        /// <summary>
        /// Gets the rectangle height.
        /// </summary>
        /// <returns type="Number">The rectangle height.</returns>
        /// </signature>
    },
    setOrigin: function(value) {
        /// <signature>
        /// <summary>
        /// Sets the origin (top-left point) of the rectangle.
        /// </summary>
        /// <param name="value" type="Object" >The new origin Point or equivalent [x, y] array.</param>
        /// <returns type="kendo.geometry.Rect">The current rectangle instance.</returns>
        /// </signature>
    },
    setSize: function(value) {
        /// <signature>
        /// <summary>
        /// Sets the rectangle size.
        /// </summary>
        /// <param name="value" type="Object" >The new rectangle Size or equivalent [width, height] array.</param>
        /// <returns type="kendo.geometry.Rect">The current rectangle instance.</returns>
        /// </signature>
    },
    topLeft: function() {
        /// <signature>
        /// <summary>
        /// Gets the position of the top-left corner of the rectangle.
/// This is also the rectangle origin
        /// </summary>
        /// <returns type="kendo.geometry.Point">The position of the top-left corner.</returns>
        /// </signature>
    },
    topRight: function() {
        /// <signature>
        /// <summary>
        /// Gets the position of the top-right corner of the rectangle.
        /// </summary>
        /// <returns type="kendo.geometry.Point">The position of the top-right corner.</returns>
        /// </signature>
    },
    width: function() {
        /// <signature>
        /// <summary>
        /// Gets the rectangle width.
        /// </summary>
        /// <returns type="Number">The rectangle width.</returns>
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


intellisense.annotate(kendo.geometry, {
    Size: function() {
        /// <signature>
        /// <summary>Constructor of kendo.geometry.Size</summary>
        /// </signature>
    }
});

kendo.geometry.Size = (function() {
var original = kendo.geometry.Size;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    clone: function() {
        /// <signature>
        /// <summary>
        /// Creates a new instance with the same width and height.
        /// </summary>
        /// <returns type="kendo.geometry.Size">A new Size instance with the same coordinates.</returns>
        /// </signature>
    },
    equals: function(other) {
        /// <signature>
        /// <summary>
        /// Compares this Size with another instance.
        /// </summary>
        /// <param name="other" type="kendo.geometry.Size" >The Size to compare with.</param>
        /// <returns type="Boolean">true if the size members match; false otherwise.</returns>
        /// </signature>
    },
    getWidth: function() {
        /// <signature>
        /// <summary>
        /// Gets the width value.
        /// </summary>
        /// <returns type="Number">The current width value.</returns>
        /// </signature>
    },
    getHeight: function() {
        /// <signature>
        /// <summary>
        /// Gets the height value.
        /// </summary>
        /// <returns type="Number">The current height value.</returns>
        /// </signature>
    },
    setWidth: function(value) {
        /// <signature>
        /// <summary>
        /// Sets the width to a new value.
        /// </summary>
        /// <param name="value" type="Number" >The new width value.</param>
        /// <returns type="kendo.geometry.Size">The current Size instance.</returns>
        /// </signature>
    },
    setHeight: function(value) {
        /// <signature>
        /// <summary>
        /// Sets the height to a new value.
        /// </summary>
        /// <param name="value" type="Number" >The new height value.</param>
        /// <returns type="kendo.geometry.Size">The current Size instance.</returns>
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


intellisense.annotate(kendo.geometry, {
    Transformation: function() {
        /// <signature>
        /// <summary>Constructor of kendo.geometry.Transformation</summary>
        /// </signature>
    }
});

kendo.geometry.Transformation = (function() {
var original = kendo.geometry.Transformation;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    clone: function() {
        /// <signature>
        /// <summary>
        /// Creates a new instance with the same transformation matrix.
        /// </summary>
        /// <returns type="kendo.geometry.Transformation">A new Transformation instance with the same matrix.</returns>
        /// </signature>
    },
    equals: function(other) {
        /// <signature>
        /// <summary>
        /// Compares this transformation with another instance.
        /// </summary>
        /// <param name="other" type="kendo.geometry.Transformation" >The transformation to compare with.</param>
        /// <returns type="Boolean">true if the transformation matrix is the same; false otherwise.</returns>
        /// </signature>
    },
    matrix: function() {
        /// <signature>
        /// <summary>
        /// Gets the current transformation matrix for this transformation.
        /// </summary>
        /// <returns type="kendo.geometry.Matrix">The current transformation matrix.</returns>
        /// </signature>
    },
    multiply: function(transformation) {
        /// <signature>
        /// <summary>
        /// Multiplies the transformation with another.
/// The underlying transformation matrix is updated in-place.
        /// </summary>
        /// <param name="transformation" type="kendo.geometry.Transformation" >The transformation to multiply by.</param>
        /// <returns type="kendo.geometry.Transformation">The current transformation instance.</returns>
        /// </signature>
    },
    rotate: function(angle,center) {
        /// <signature>
        /// <summary>
        /// Sets rotation with the specified parameters.
        /// </summary>
        /// <param name="angle" type="Number" >The angle of rotation in decimal degrees. Measured in clockwise direction with 0 pointing "right". Negative values or values greater than 360 will be normalized.</param>
        /// <param name="center" type="Object" >The center of rotation.</param>
        /// <returns type="kendo.geometry.Transformation">The current transformation instance.</returns>
        /// </signature>
    },
    scale: function(scaleX,scaleY) {
        /// <signature>
        /// <summary>
        /// Sets scale with the specified parameters.
        /// </summary>
        /// <param name="scaleX" type="Number" >The scale factor on the X axis.</param>
        /// <param name="scaleY" type="Number" >The scale factor on the Y axis.</param>
        /// <returns type="kendo.geometry.Transformation">The current transformation instance.</returns>
        /// </signature>
    },
    translate: function(x,y) {
        /// <signature>
        /// <summary>
        /// Sets translation with the specified parameters.
        /// </summary>
        /// <param name="x" type="Number" >The distance to translate along the X axis.</param>
        /// <param name="y" type="Number" >The distance to translate along the Y axis.</param>
        /// <returns type="kendo.geometry.Transformation">The current transformation instance.</returns>
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


intellisense.annotate(kendo.ooxml, {
    Workbook: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ooxml.Workbook</summary>
        /// </signature>
    }
});

kendo.ooxml.Workbook = (function() {
var original = kendo.ooxml.Workbook;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    toDataURL: function() {
        /// <signature>
        /// <summary>
        /// Creates an Excel file that represents the current workbook and returns it as a data URL.
        /// </summary>
        /// <returns type="String">the Excel file as data URL.</returns>
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

