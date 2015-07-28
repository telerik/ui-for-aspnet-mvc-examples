(function () {
    'use strict';

    var getUrlParams = function () {
        var urlParams = {};
        var match,
            pl = /\+/g, // Regex for replacing addition symbol with a space
            search = /([^&=]+)=?([^&]*)/g,
            decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
            query = window.location.search.substring(1);

        while (match = search.exec(query)) {
            urlParams[decode(match[1])] = decode(match[2]);
        }
        return urlParams;
    };

    var updateGridCustomerFilter = function (customerId) {
        var ordersGrid = $("#ordersGrid").data("kendoGrid");
        ordersGrid.dataSource.filter({ field: "CustomerId", operator: "eq", value: customerId });
    };

    window.SalesHub.CustomerTreeView_Select = function (e) {
        var node = $(e.node);
        var dataItem = e.sender.dataItem(e.node);
        var customerId;

        if (!dataItem.hasChildren) {
            customerId = node.data("customer-id");
            window.SalesHub.setSelectedCustomer(customerId, node.text());
            updateGridCustomerFilter(customerId);
            window.SalesHub.selectedCustomerId = customerId;
        } else {
            if (node.attr("data-expanded")) {
                window.treeView.collapse(node);
            } else {
                window.treeView.expand(node);
            }
            e.preventDefault();

            setTimeout(function () {
                $(":focus").blur();
            }, 0);
            return false;
        }
    };

    $(document).ready(function() {
        var selectedCustomerLi, treeView;
        var queryStringParams;

        queryStringParams = getUrlParams();

        if ("customerId" in queryStringParams) {
            selectedCustomerLi = $("#customerTreeView li[data-customer-id=" + queryStringParams['customerId'] + "]");
        } else {
            selectedCustomerLi = $("#customerTreeView li[data-customer-id]:first");
        }
        treeView = $("#customerTreeView").data("kendoTreeView");
        window.treeView = treeView;

        $("#createOrderButton").on("click", function() {
            window.location.href = window.SalesHub.createOrderUrl + '/' + window.SalesHub.selectedCustomerId;
        });
        treeView.select(selectedCustomerLi);
        treeView.expand(selectedCustomerLi.parent());

        window.SalesHub.setSelectedCustomer(selectedCustomerLi.data("customerId"), selectedCustomerLi.text());

        updateGridCustomerFilter(selectedCustomerLi.data("customer-id"));
        window.SalesHub.selectedCustomerId = selectedCustomerLi.data("customer-id");
    });
})();