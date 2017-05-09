<?php
require_once 'lib/DataSourceResult.php';
require_once 'lib/Kendo/Autoload.php';

$result = new DataSourceResult('sqlite:sample.db');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    header('Content-Type: application/json');

    $request = json_decode(file_get_contents('php://input'));

    $type = $_GET['type'];

    $columns = array('ProductID', 'ProductName', 'UnitPrice', 'CategoryID');

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
        case 'categories':
            $result = $result->read('Categories', array('CategoryID', 'CategoryName'));
            break;
    }

    if ($type != 'categories') {
        $categories = new DataSourceResult('sqlite:../../sample.db');

        $categories = $categories->read('Categories', array('CategoryID', 'CategoryName'));

        $data = &$result['data'];

        for ($index = 0, $count = count($data); $index < $count; $index++) {
            $categoryId = $data[$index]['CategoryID'];

            foreach ($categories['data'] as $category) {
                if ($category['CategoryID'] == $categoryId) {
                    $data[$index]['Category'] = $category;
                    break;
                }
            }
        }
    }

    echo json_encode($result);

    exit;
}
 ?>
