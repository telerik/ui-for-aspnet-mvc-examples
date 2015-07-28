(function () {
    'use strict';

    window.SalesHub.SearchBox_Select = function(e) {
        var actionUrl = window.SalesHub.Search.settings.actionUrl;
        var orderId = e.item.find("span").data("order-id");
        window.location.pathname = window.SalesHub.baseUrl + actionUrl + "/" + orderId;
    };

    window.SalesHub.SearchResultWindow_Open = function(e) {
        var searchResultsGrid = $("#searchResultsGrid").data("kendoGrid");
        var filter = $("#search").data("kendoAutoComplete").dataSource.filter();
        searchResultsGrid.dataSource.filter(filter);
        searchResultsGrid.dataSource.read();
        searchResultsGrid.refresh();
    };

    window.SalesHub.SearchResultsGrid_Change = function(e) {
        var actionUrl = window.SalesHub.Search.settings.actionUrl;
        var selectedItem = this.dataItem(this.select()[0]);
        window.location.pathname = actionUrl + "/" + selectedItem.OrderId;
    };

    $(document).ready(function() {
        var search = $("#search");

        search.addClass("search-icon");
        search.on("keyup", function(e) {
            if (e.which === 13) {
                $("#searchResultWindow").data("kendoWindow").center().open();
            }
        });
    });
})();