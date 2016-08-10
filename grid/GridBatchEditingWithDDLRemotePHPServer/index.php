<?php
require_once '/lib/DataSourceResult.php';
require_once '/lib/Kendo/Autoload.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    header('Content-Type: application/json');

    $request = json_decode(file_get_contents('php://input'));

    $result = new DataSourceResult('sqlite:sample.db');

    $type = $_GET['type'];

    $columns = array('ProductID', 'ProductName', 'UnitPrice', 'UnitsInStock', 'Discontinued', 'CategoryID');

    switch($type) {
        case 'create':
            $result = $result->create('Products', $columns, $request->models, 'ProductID');
            break;
        case 'read':
            $result = $result->read('Products', $columns, $request);
            break;
        case 'update':
            $result = $result->update('Products', $columns, $request->models, 'ProductID');
            break;
        case 'destroy':
            $result = $result->destroy('Products', $request->models, 'ProductID');
            break;
    }

    echo json_encode($result,JSON_NUMERIC_CHECK);

    exit;
}

require_once 'header.php';
?>

<div id="grid"></div>
<script>
    $(function () {
        $.ajax({
            url: "editing-custom.php?type=categories",
            type: "POST",
            dataType: "json",
            success: function(result) {
                //the items are nested in data field
                var data = result.data;
                var formattedData = [];
                
                //format the response
                for (var i = 0; i < data.length; i++) {
                    formattedData.push({
                        text: data[i].CategoryName,
                        value: data[i].CategoryID
                    })
                }

                //initialize Grid
                createGrid(formattedData);
            } 
        });
    });

    function categoryDropDownEditor(container, options) {
    $('<input data-text-field="CategoryName" data-value-field="CategoryID" data-bind="value:' + options.field + '"/>')
        .appendTo(container)
        .kendoDropDownList({
            autoBind: false,
            dataSource: {
                schema: {
                    data: "data"
                },
                transport: {
                    read: {
                        url: "editing-custom.php?type=categories",
                        type: "POST",
                        dataType: "json"
                    }
                }
            }
        });
    }
    
    function createGrid(dropDownListValues) {
        $("#grid").kendoGrid({
            columns: [{
                field: "ProductName",
                title: "Product Name"
            }, {
                field: "CategoryID",
                title: "Category",
                editor: categoryDropDownEditor,
                values: dropDownListValues
            }, {
                field: "UnitPrice",
                format: "{0:c}",
                width: 150,
                title: "Unit Price"
            }, {
                field: "UnitsInStock",
                width: 150,
                title: "Units In Stock"
            }, {
                field: "Discontinued",
                width: 100
            }, {
                command: ["destroy"],
                title: "&nbsp;",
                width: 110
            }],
            dataSource: {
                transport: {
                    create: {
                        url: "index.php?type=create",
                        contentType: "application\/json",
                        type: "POST"
                    },
                    read: {
                        url: "index.php?type=read",
                        contentType: "application\/json",
                        type: "POST"
                    },
                    update: {
                        url: "index.php?type=update",
                        contentType: "application\/json",
                        type: "POST"
                    },
                    destroy: {
                        url: "index.php?type=destroy",
                        contentType: "application\/json",
                        type: "POST"
                    },
                    parameterMap: function (data) {
                        return kendo.stringify(data);
                    }
                },
                batch: true,
                pageSize: 30,
                schema: {
                    data: "data",
                    errors: "errors",
                    model: {
                        id: "ProductID",
                        fields: [{
                            field: "ProductID",
                            type: "number",
                            "editable": false,
                            "nullable": true
                        }, {
                            field: "CategoryID",
                            type: "number",
                            "nullable": false
                        }, {
                            field: "ProductName",
                            type: "string",
                            validation: {
                                required: true
                            }
                        }, {
                            field: "UnitPrice",
                            type: "number",
                            validation: {
                                required: true,
                                min: 1
                            }
                        }, {
                            field: "UnitsInStock",
                            type: "number"
                        }, {
                            field: "Discontinued",
                            type: "boolean"
                        }]
                    },
                    total: "total"
                }
            },
            toolbar: [{
                "name": "create"
            }, {
                "name": "save"
            }, {
                "name": "cancel"
            }],
            height: 400,
            navigatable: true,
            editable: true,
            pageable: true
        });
    }
</script>
<?php require_once 'footer.php'; ?>
