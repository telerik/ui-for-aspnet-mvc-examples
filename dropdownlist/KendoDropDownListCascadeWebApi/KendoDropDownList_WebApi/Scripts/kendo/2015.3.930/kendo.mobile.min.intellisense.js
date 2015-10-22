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
    changeLoadingMessage: function(text) {
        /// <signature>
        /// <summary>
        /// Changes the loading message.
        /// </summary>
        /// <param name="text" type="String" >New text of the loading animation.</param>
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
        /// Navigate to local or to remote view.
        /// </summary>
        /// <param name="url" type="String" >The id or url of the view.</param>
        /// <param name="transition" type="String" >Optional. The transition to apply when navigating. See View Transitions section for more information.</param>
        /// </signature>
    },
    replace: function(url,transition) {
        /// <signature>
        /// <summary>
        /// Navigate to local or to remote view. The view will replace the current one in the history stack.
        /// </summary>
        /// <param name="url" type="String" >The id or url of the view.</param>
        /// <param name="transition" type="String" >Optional. The transition to apply when navigating. See View Transitions section for more information.</param>
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
        /// <param name="skin" type="String" >The skin name to switch to or empty string ("") to return to native.</param>
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


jQuery.fn.kendoMobileActionSheet = function() {
    this.data("kendoMobileActionSheet", new kendo.mobile.ui.ActionSheet());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileActionSheet: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.ActionSheet widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.ActionSheet">The kendo.mobile.ui.ActionSheet instance (if present).</returns>
        /// </signature>
    },
    kendoMobileActionSheet: function(options) {
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
        /// &#10;type — String (default: auto)
        /// &#10;By default, the actionsheet opens as a full screen dialog on a phone device or as a popover if a tablet is detected. Setting the type to "phone" or "tablet" will force the looks of the widget regardless of the device.
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


jQuery.fn.kendoMobileBackButton = function() {
    this.data("kendoMobileBackButton", new kendo.mobile.ui.BackButton());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileBackButton: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.BackButton widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.BackButton">The kendo.mobile.ui.BackButton instance (if present).</returns>
        /// </signature>
    },
    kendoMobileBackButton: function(options) {
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
        /// <returns type="String | kendo.mobile.ui.Button">the badge value if invoked without parameters, otherwise the Button object.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Button for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Changes the enabled state of the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >Whether to enable or disable the widget.</param>
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


jQuery.fn.kendoMobileButton = function() {
    this.data("kendoMobileButton", new kendo.mobile.ui.Button());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileButton: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.Button widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Button">The kendo.mobile.ui.Button instance (if present).</returns>
        /// </signature>
    },
    kendoMobileButton: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.Button widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;badge — String 
        /// &#10;The badge of the button.
        /// &#10;
        /// &#10;clickOn — String (default: default "up")
        /// &#10;Configures the DOM event used to trigger the button click event/navigate in the mobile application. Can be set to "down" as an alias for touchstart, mousedown, MSPointerDown, and PointerDown vendor specific events.
/// &#10;Setting the clickOn to down usually makes sense for buttons in the header or in non-scrollable views for increased responsiveness.By default, buttons trigger click/navigate when the user taps the button (a press + release action sequence occurs).
        /// &#10;
        /// &#10;enable — Boolean (default: true)
        /// &#10;If set to false the widget will be disabled and will not allow the user to click it. The widget is enabled by default.
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
        /// <returns type="String|kendo.mobile.ui.Button">the badge value if invoked without parameters, otherwise the ButtonGroup object.</returns>
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
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enables or disables the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >A boolean flag that indicates whether the widget should be enabled or disabled.</param>
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


jQuery.fn.kendoMobileButtonGroup = function() {
    this.data("kendoMobileButtonGroup", new kendo.mobile.ui.ButtonGroup());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileButtonGroup: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.ButtonGroup widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.ButtonGroup">The kendo.mobile.ui.ButtonGroup instance (if present).</returns>
        /// </signature>
    },
    kendoMobileButtonGroup: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.ButtonGroup widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;enable — Boolean (default: true)
        /// &#10;Defines if the widget is initially enabled or disabled.
        /// &#10;
        /// &#10;index — Number 
        /// &#10;Defines the initially selected Button (zero based index).
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
    Collapsible: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.Collapsible</summary>
        /// </signature>
    }
});

kendo.mobile.ui.Collapsible = (function() {
var original = kendo.mobile.ui.Collapsible;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    collapse: function(instant) {
        /// <signature>
        /// <summary>
        /// Collapses the content.
        /// </summary>
        /// <param name="instant" type="Boolean" >Optional. When set to true the collapse action will be performed without animation.</param>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Collapsible for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    expand: function(instant) {
        /// <signature>
        /// <summary>
        /// Expands the content.
        /// </summary>
        /// <param name="instant" type="Boolean" >When set to true the expand action will be performed without animation.</param>
        /// </signature>
    },
    resize: function() {
        /// <signature>
        /// <summary>
        /// Recalculates the content height.
        /// </summary>
        /// </signature>
    },
    toggle: function(instant) {
        /// <signature>
        /// <summary>
        /// Toggles the content visibility.
        /// </summary>
        /// <param name="instant" type="Boolean" >When set to true the expand/collapse action will be performed without animation.</param>
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


jQuery.fn.kendoMobileCollapsible = function() {
    this.data("kendoMobileCollapsible", new kendo.mobile.ui.Collapsible());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileCollapsible: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.Collapsible widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Collapsible">The kendo.mobile.ui.Collapsible instance (if present).</returns>
        /// </signature>
    },
    kendoMobileCollapsible: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.Collapsible widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;animation — Boolean (default: true)
        /// &#10;Turns on or off the animation of the widget.
        /// &#10;
        /// &#10;collapsed — Boolean (default: true)
        /// &#10;If set to false the widget content will be expanded initially. The content of the widget is collapsed by default.
        /// &#10;
        /// &#10;expandIcon — String (default: "plus")
        /// &#10;Sets the icon for the header of the collapsible widget when it is in a expanded state.
        /// &#10;
        /// &#10;iconPosition — String (default: "left")
        /// &#10;Sets the icon position in the header of the collapsible widget. Possible values are "left", "right", "top".
        /// &#10;
        /// &#10;inset — Boolean (default: "false")
        /// &#10;Forses inset appearance - the collapsible panel is padded from the View and receives rounded corners.
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


jQuery.fn.kendoMobileDetailButton = function() {
    this.data("kendoMobileDetailButton", new kendo.mobile.ui.DetailButton());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileDetailButton: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.DetailButton widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.DetailButton">The kendo.mobile.ui.DetailButton instance (if present).</returns>
        /// </signature>
    },
    kendoMobileDetailButton: function(options) {
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


jQuery.fn.kendoMobileDrawer = function() {
    this.data("kendoMobileDrawer", new kendo.mobile.ui.Drawer());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileDrawer: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.Drawer widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Drawer">The kendo.mobile.ui.Drawer instance (if present).</returns>
        /// </signature>
    },
    kendoMobileDrawer: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.Drawer widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;container — jQuery 
        /// &#10;Specifies the content element to shift when the drawer appears. Required if the drawer is used outside of a mobile application.
        /// &#10;
        /// &#10;position — String (default: 'left')
        /// &#10;The position of the drawer. Can be left (default) or right.
        /// &#10;
        /// &#10;swipeToOpen — Boolean (default: true)
        /// &#10;If set to false, swiping the view will not activate the drawer. In this case, the drawer will only be open by a designated button
        /// &#10;
        /// &#10;swipeToOpenViews — Array 
        /// &#10;A list of the view ids on which the drawer will appear when the view is swiped. If omitted, the swipe gesture will work on all views.
/// &#10;The option has effect only if swipeToOpen is set to true.
        /// &#10;
        /// &#10;title — String 
        /// &#10;The text to display in the Navbar title (if present).
        /// &#10;
        /// &#10;views — Array 
        /// &#10;A list of the view ids on which the drawer will appear. If omitted, the drawer will work on any view in the application.
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


jQuery.fn.kendoMobileLayout = function() {
    this.data("kendoMobileLayout", new kendo.mobile.ui.Layout());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileLayout: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.Layout widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Layout">The kendo.mobile.ui.Layout instance (if present).</returns>
        /// </signature>
    },
    kendoMobileLayout: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.Layout widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;id — String (default: null)
        /// &#10;The id of the layout. Required
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
        /// Repaints the listview (works only in databound mode).
        /// </summary>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the DataSource of an existing ListView and rebinds it.
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


jQuery.fn.kendoMobileListView = function() {
    this.data("kendoMobileListView", new kendo.mobile.ui.ListView());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileListView: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.ListView widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.ListView">The kendo.mobile.ui.ListView instance (if present).</returns>
        /// </signature>
    },
    kendoMobileListView: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.ListView widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;appendOnRefresh — Boolean (default: false)
        /// &#10;Used in combination with pullToRefresh. If set to true, newly loaded data will be appended on top when refreshing. Notice: not applicable if ListView is in a virtual mode.
        /// &#10;
        /// &#10;autoBind — Boolean (default: true)
        /// &#10;Indicates whether the listview will call read on the DataSource initially. If set to false, the listview will be bound after the DataSource instance fetch method is called.
        /// &#10;
        /// &#10;dataSource — kendo.data.DataSource|Object 
        /// &#10;Instance of DataSource or the data that the mobile ListView will be bound to.
        /// &#10;
        /// &#10;endlessScroll — Boolean (default: false)
        /// &#10;If set to true, the listview gets the next page of data when the user scrolls near the bottom of the view.
        /// &#10;
        /// &#10;fixedHeaders — Boolean (default: false)
        /// &#10;If set to true, the group headers will persist their position when the user scrolls through the listview.
/// &#10;Applicable only when the type is set to group, or when binding to grouped DataSource.Notice: fixed headers are not supported in virtual mode.
        /// &#10;
        /// &#10;headerTemplate — String|Function (default: "#:value#")
        /// &#10;The header item template (applicable when the type is set to group).
        /// &#10;
        /// &#10;loadMore — Boolean (default: false)
        /// &#10;If set to true, a button is rendered at the bottom of the listview. Tapping it fetches and displays the items from the next page of the DataSource.
        /// &#10;
        /// &#10;messages — Object 
        /// &#10;Defines the text of the ListView messages. Used primary for localization.
        /// &#10;
        /// &#10;pullToRefresh — Boolean (default: false)
        /// &#10;If set to true, the listview will reload its data when the user pulls the view over the top limit.
        /// &#10;
        /// &#10;pullParameters — Function 
        /// &#10;A callback function used when the 'pullToRefresh' option is enabled. The result of the function will be send as additional parameters to the DataSource's next method.Notice: When the listview is in a virtual mode, the pull to refresh action removes the previously loaded items in the listview (instead of appending new records at the top).
/// &#10;Previously loaded pages in the DataSource are also discarded.
        /// &#10;
        /// &#10;style — String (default: "")
        /// &#10;The style of the widget. Can be either empty string(""), or inset.
        /// &#10;
        /// &#10;template — String|Function (default: "#:data#")
        /// &#10;The item template.
        /// &#10;
        /// &#10;type — String (default: "flat")
        /// &#10;The type of the control. Can be either flat (default) or group. Determined automatically in databound mode.
        /// &#10;
        /// &#10;filterable — Boolean (default: false)
        /// &#10;Indicates whether the filter input must be visible or not.
        /// &#10;
        /// &#10;filterable — Object (default: false)
        /// &#10;Indicates whether the filter input must be visible or not.
        /// &#10;
        /// &#10;virtualViewSize — Number 
        /// &#10;Used when virtualization of local data is used. This configuration is needed to determine the items displayed, since the datasource does not (and should not) have paging set.
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


jQuery.fn.kendoMobileLoader = function() {
    this.data("kendoMobileLoader", new kendo.mobile.ui.Loader());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileLoader: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.Loader widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Loader">The kendo.mobile.ui.Loader instance (if present).</returns>
        /// </signature>
    },
    kendoMobileLoader: function(options) {
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


jQuery.fn.kendoMobileModalView = function() {
    this.data("kendoMobileModalView", new kendo.mobile.ui.ModalView());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileModalView: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.ModalView widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.ModalView">The kendo.mobile.ui.ModalView instance (if present).</returns>
        /// </signature>
    },
    kendoMobileModalView: function(options) {
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


jQuery.fn.kendoMobileNavBar = function() {
    this.data("kendoMobileNavBar", new kendo.mobile.ui.NavBar());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileNavBar: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.NavBar widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.NavBar">The kendo.mobile.ui.NavBar instance (if present).</returns>
        /// </signature>
    },
    kendoMobileNavBar: function(options) {
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
        /// <param name="transition" type="String" >The transition to apply when navigating. See View Transitions for more information.</param>
        /// </signature>
    },
    replace: function(url,transition) {
        /// <signature>
        /// <summary>
        /// Navigate to local or to remote view. The view will replace the current one in the history stack.
        /// </summary>
        /// <param name="url" type="String" >The id or URL of the view.</param>
        /// <param name="transition" type="String" >The transition to apply when navigating. See View Transitions for more information.</param>
        /// </signature>
    },
    Example: function() {
        /// <signature>
        /// <summary>
        /// 
        /// </summary>
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


jQuery.fn.kendoMobilePane = function() {
    this.data("kendoMobilePane", new kendo.mobile.ui.Pane());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobilePane: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.Pane widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Pane">The kendo.mobile.ui.Pane instance (if present).</returns>
        /// </signature>
    },
    kendoMobilePane: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.Pane widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;collapsible — Boolean (default: false)
        /// &#10;Applicable when the pane is inside a SplitView. If set to true, the pane will be hidden when the device is in portrait position. The expandPanes SplitView method displays the hidden panes.The id of the initial mobile View to display.
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
        /// &#10;portraitWidth — Number 
        /// &#10;Sets the pane width in pixels when the device is in portrait position.
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


jQuery.fn.kendoMobilePopOver = function() {
    this.data("kendoMobilePopOver", new kendo.mobile.ui.PopOver());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobilePopOver: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.PopOver widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.PopOver">The kendo.mobile.ui.PopOver instance (if present).</returns>
        /// </signature>
    },
    kendoMobilePopOver: function(options) {
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
        /// Update the ScrollView HTML content.
        /// </summary>
        /// <param name="content" type="Object" >The new ScrollView content.</param>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the ScrollView for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    next: function() {
        /// <signature>
        /// <summary>
        /// Switches to the next page with animation.
        /// </summary>
        /// </signature>
    },
    prev: function() {
        /// <signature>
        /// <summary>
        /// Switches to the previous page with animation.
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
        /// <param name="instant" type="Boolean" >If set to true, the ScrollView will jump instantly to the given page without any animation effects.</param>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the DataSource of an existing ScrollView and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" ></param>
        /// </signature>
    },
    value: function(dataItem) {
        /// <signature>
        /// <summary>
        /// Works in data-bound mode only. If a parameter is passed, the widget scrolls to the given dataItem. If not, the method return currently displayed dataItem.
        /// </summary>
        /// <param name="dataItem" type="Object" >The dataItem to set.</param>
        /// <returns type="Object">The currently displayed dataItem.</returns>
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


jQuery.fn.kendoMobileScrollView = function() {
    this.data("kendoMobileScrollView", new kendo.mobile.ui.ScrollView());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileScrollView: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.ScrollView widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.ScrollView">The kendo.mobile.ui.ScrollView instance (if present).</returns>
        /// </signature>
    },
    kendoMobileScrollView: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.ScrollView widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;autoBind — Boolean (default: true)
        /// &#10;If set to false the widget will not bind to the DataSource during initialization. In this case data binding will occur when the change event of the data source is fired. By default the widget will bind to the DataSource specified in the configuration.Applicable only in data bound mode.
        /// &#10;
        /// &#10;bounceVelocityThreshold — Number (default: 1.6)
        /// &#10;The velocity threshold after which a swipe will result in a bounce effect.
        /// &#10;
        /// &#10;contentHeight — Number|String (default: "auto")
        /// &#10;The height of the ScrollView content. Supports 100% if the ScrollView is embedded in a stretched view and the ScrollView element is an immediate child of the view element.
        /// &#10;
        /// &#10;dataSource — kendo.data.DataSource|Object 
        /// &#10;Instance of DataSource that the mobile ScrollView will be bound to. If DataSource is set, the widget will operate in data bound mode.
        /// &#10;
        /// &#10;duration — Number (default: 400)
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
    animatedScrollTo: function(x,y) {
        /// <signature>
        /// <summary>
        /// Scrolls the scroll container to the specified location with animation. The arguments should be negative numbers.
        /// </summary>
        /// <param name="x" type="Number" >The horizontal offset in pixels to scroll to.</param>
        /// <param name="y" type="Number" >The vertical offset in pixels to scroll to.</param>
        /// </signature>
    },
    contentResized: function() {
        /// <signature>
        /// <summary>
        /// Updates the scroller dimensions. Should be called after the contents of the scroller update their size
        /// </summary>
        /// </signature>
    },
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
    zoomOut: function() {
        /// <signature>
        /// <summary>
        /// Zooms the scroller out to the minimum zoom level possible.
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


jQuery.fn.kendoMobileScroller = function() {
    this.data("kendoMobileScroller", new kendo.mobile.ui.Scroller());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileScroller: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.Scroller widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Scroller">The kendo.mobile.ui.Scroller instance (if present).</returns>
        /// </signature>
    },
    kendoMobileScroller: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.Scroller widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;elastic — Boolean (default: true)
        /// &#10;Weather or not to allow out of bounds dragging and easing.
        /// &#10;
        /// &#10;messages — Object 
        /// &#10;Defines the text of the Scroller pull to refresh messages. Used primary for localization.
        /// &#10;
        /// &#10;pullOffset — Number (default: 140)
        /// &#10;The threshold below which releasing the scroller will trigger the pull event.
/// &#10;Has effect only when the pullToRefresh option is set to true.
        /// &#10;
        /// &#10;pullToRefresh — Boolean (default: false)
        /// &#10;If set to true, the scroller will display a hint when the user pulls the container beyond its top limit.
/// &#10;If a pull beyond the specified pullOffset occurs, a pull event will be triggered.
        /// &#10;
        /// &#10;useNative — Boolean (default: false)
        /// &#10;If set to true, the scroller will use the native scrolling available in the current platform. This should help with form issues on some platforms (namely Android and WP8).
/// &#10;Native scrolling is only enabled on platforms that support it: iOS > 4, Android > 2, WP8. BlackBerry devices do support it, but the native scroller is flaky.
        /// &#10;
        /// &#10;visibleScrollHints — Boolean (default: false)
        /// &#10;If set to true, the scroller scroll hints will always be displayed.
        /// &#10;
        /// &#10;zoom — Boolean (default: false)
        /// &#10;If set to true, the user can zoom in/out the contents of the widget using the pinch/zoom gesture.
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
    expandPanes: function() {
        /// <signature>
        /// <summary>
        /// Displays the collapsible panes; has effect only when the device is in portrait orientation.
        /// </summary>
        /// </signature>
    },
    collapsePanes: function() {
        /// <signature>
        /// <summary>
        /// Collapses back the collapsible panes (displayed previously with expandPanes); has effect only when the device is in portrait orientation.
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


jQuery.fn.kendoMobileSplitView = function() {
    this.data("kendoMobileSplitView", new kendo.mobile.ui.SplitView());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileSplitView: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.SplitView widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.SplitView">The kendo.mobile.ui.SplitView instance (if present).</returns>
        /// </signature>
    },
    kendoMobileSplitView: function(options) {
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
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Changes the enabled state of the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >Whether to enable or disable the widget.</param>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Forces the Switch to recalculate its dimensions. Useful when major changes in the interface happen dynamically, like for instance changing the skin.
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


jQuery.fn.kendoMobileSwitch = function() {
    this.data("kendoMobileSwitch", new kendo.mobile.ui.Switch());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileSwitch: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.Switch widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Switch">The kendo.mobile.ui.Switch instance (if present).</returns>
        /// </signature>
    },
    kendoMobileSwitch: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.Switch widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;checked — Boolean (default: false)
        /// &#10;The checked state of the widget.
        /// &#10;
        /// &#10;enable — Boolean (default: true)
        /// &#10;If set to false the widget will be disabled and will not allow the user to change its checked state. The widget is enabled by default.
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
        /// Set the mobile TabStrip active tab to the tab with the specified URL. This method doesn't change the current View. To change the View, use Application's navigate method instead.
        /// </summary>
        /// <param name="url" type="Object" >The URL or zero based index of the tab.</param>
        /// </signature>
    },
    switchByFullUrl: function(url) {
        /// <signature>
        /// <summary>
        /// Set the mobile TabStrip active tab to the tab with the specified full URL. This method doesn't change the current View. To change the View, use Application's navigate method instead.
        /// </summary>
        /// <param name="url" type="String" >The URL of the tab.</param>
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


jQuery.fn.kendoMobileTabStrip = function() {
    this.data("kendoMobileTabStrip", new kendo.mobile.ui.TabStrip());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileTabStrip: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.TabStrip widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.TabStrip">The kendo.mobile.ui.TabStrip instance (if present).</returns>
        /// </signature>
    },
    kendoMobileTabStrip: function(options) {
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
    contentElement: function() {
        /// <signature>
        /// <summary>
        /// Retrieves the current content holder of the View - this is the content element if the View is stretched or the scroll container otherwise.
        /// </summary>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the View for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enables or disables the user interaction with the view and its contents.
        /// </summary>
        /// <param name="enable" type="Boolean" >Omitting the parameter or passing true enables the view. Passing false disables the view.</param>
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


jQuery.fn.kendoMobileView = function() {
    this.data("kendoMobileView", new kendo.mobile.ui.View());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileView: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.View widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.View">The kendo.mobile.ui.View instance (if present).</returns>
        /// </signature>
    },
    kendoMobileView: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.View widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;model — String (default: null)
        /// &#10;The MVVM model to bind to. If a string is passed, The view will try to resolve a reference to the view model variable in the global scope.
        /// &#10;
        /// &#10;reload — Boolean (default: false)
        /// &#10;Applicable to remote views only. If set to true, the remote view contents will be reloaded from the server (using Ajax) each time the view is navigated to.
        /// &#10;
        /// &#10;scroller — Object (default: null)
        /// &#10;Configuration options to be passed to the scroller instance instantiated by the view. For more details, check the scroller configuration options.
        /// &#10;
        /// &#10;stretch — Boolean (default: false)
        /// &#10;If set to true, the view will stretch its child contents to occupy the entire view, while disabling kinetic scrolling.
/// &#10;Useful if the view contains an image or a map.
        /// &#10;
        /// &#10;title — String 
        /// &#10;The text to display in the NavBar title (if present) and the browser title.
        /// &#10;
        /// &#10;useNativeScrolling — Boolean (default: false)
        /// &#10;If set to true, the view will use the native scrolling available in the current platform. This should help with form issues on some platforms (namely Android and WP8).
/// &#10;Native scrolling is only enabled on platforms that support it: iOS > 5+, Android > 3+, WP8. BlackBerry devices do support it, but the native scroller is flaky.
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
    cancel: function() {
        /// <signature>
        /// <summary>
        /// Cancels the current touch event sequence. Calling cancel in a touchstart or dragmove will disable subsequent move or tap/end/hold event handlers from being called.
        /// </summary>
        /// </signature>
    },
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
        /// &#10;filter — String 
        /// &#10;jQuery selector that specifies child elements that are touchable if a widget is attached to a container.
        /// &#10;
        /// &#10;surface — jQuery (default: null)
        /// &#10;If specified, the user drags will be tracked within the surface boundaries.
/// &#10;This option is useful if the widget is instantiated on small DOM elements like buttons, or thin list items.
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
