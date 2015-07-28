(function () {
    'use strict';

    window.SalesHub.setSelectedCustomer = function(customerId, customerName) {
        $(".customerPath a").attr('href', '/?customerId=' + customerId).html(customerName);
    };
})();