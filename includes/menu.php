<?php
$restaurantIndex = isset($_GET['restaurant']) ? (int)$_GET['restaurant'] : 0;
$restaurantName = isset($_GET['name']) ? $_GET['name'] : 'Restaurant';

// Read menu data from JSON file in the root/json folder
$menuData = json_decode(file_get_contents(__DIR__ . '/../json/menu_data.json'), true);

// Check if the JSON data was parsed correctly
if (json_last_error() !== JSON_ERROR_NONE) {
    die('Error parsing JSON data: ' . json_last_error_msg());
}


// Debug: Check if $menuData is an array
if (!is_array($menuData)) {
    error_log('Error: $menuData is not an array.');
    die('Invalid JSON structure in menu_data.json');
}

// Ensure the $menu variable is an array
//$menu = isset($menuData[$restaurantIndex]) ? $menuData[$restaurantIndex] : [];
$menu = isset($menuData[$restaurantIndex]['menu']) && is_array($menuData[$restaurantIndex]['menu']) 
    ? $menuData[$restaurantIndex]['menu'] 
    : [];


// Debugging information
if (empty($menu)) {
    error_log('No menu data found for restaurant index: ' . $restaurantIndex);
    error_log('Menu data: ' . print_r($menuData, true));
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($restaurantName); ?> Menu</title>
    <style>
        .menu {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .menu h2 {
            text-align: center;
            margin-bottom: 20px;
        }
        .menu-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 20px;
        }
        .menu-item {
            background-color: #f9f9f9;
            padding: 10px;
            border-radius: 8px;
            text-align: center;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        }
        .menu-item img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
        }
        .menu-item strong {
            display: block;
            margin-top: 10px;
            font-size: 18px;
            color: #333;
        }
        .menu-item p {
            font-size: 16px;
            color: #555;
        }
        .menu-item .price {
    font-size: 16px;
    color: #333;
    font-weight: bold;
    margin-top: 5px;
}
    </style>
</head>
<body>
    <div class="menu">
        <h2><?php echo htmlspecialchars($restaurantName); ?> </h2>
        <div class="menu-grid">
            <?php if (!empty($menu)): ?>
                <?php foreach ($menu as $item): ?>
                    <div class="menu-item">
                        <img src="<?php echo htmlspecialchars($item['image_url']); ?>" alt="<?php echo htmlspecialchars($item['name']); ?>">
                        <div>
    <strong><?php echo htmlspecialchars($item['name']); ?></strong>
    <p><?php echo htmlspecialchars($item['description']); ?></p>
    <p class="price"><?php echo htmlspecialchars($item['price']); ?></p>
</div>
                    </div>
                <?php endforeach; ?>
            <?php else: ?>
                <p>No menu items found for this restaurant.</p>
            <?php endif; ?>
        </div>
    </div>
</body>
</html>