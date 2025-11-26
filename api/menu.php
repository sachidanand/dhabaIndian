<?php
/**
 * API Endpoint for Menu Data
 * Dhaba Indian Kitchen - Phase 2
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once '../includes/database.php';

try {
    $menuManager = new MenuManager();
    $locationManager = new LocationManager();
    
    $action = $_GET['action'] ?? '';
    $locationKey = $_GET['location'] ?? null;
    $category = $_GET['category'] ?? 'all';
    $search = $_GET['search'] ?? '';
    
    switch ($action) {
        case 'categories':
            $categories = $menuManager->getMenuCategories();
            ApiResponse::success($categories);
            break;
            
        case 'menu':
            if (!empty($search)) {
                $items = $menuManager->searchMenuItems($search, $locationKey);
            } else {
                $items = $menuManager->getMenuByCategory($category, $locationKey);
            }
            ApiResponse::success($items);
            break;
            
        case 'featured':
            $items = $menuManager->getFeaturedItems($locationKey);
            ApiResponse::success($items);
            break;
            
        case 'locations':
            $locations = $locationManager->getAllLocations();
            ApiResponse::success($locations);
            break;
            
        case 'location':
            if (!$locationKey) {
                ApiResponse::error('Location key is required');
            }
            $location = $locationManager->getLocationByKey($locationKey);
            if ($location) {
                ApiResponse::success($location);
            } else {
                ApiResponse::error('Location not found', 404);
            }
            break;
            
        default:
            ApiResponse::error('Invalid action', 400);
    }
    
} catch (Exception $e) {
    if (DEBUG_MODE) {
        ApiResponse::error($e->getMessage(), 500);
    } else {
        ApiResponse::error('Internal server error', 500);
    }
}
?>