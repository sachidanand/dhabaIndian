<?php
/**
 * Database Connection and Helper Functions
 * Dhaba Indian Kitchen - Phase 2
 */

require_once 'config.php';

class Database {
    private static $instance = null;
    private $connection;
    
    private function __construct() {
        try {
            $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ];
            
            $this->connection = new PDO($dsn, DB_USER, DB_PASS, $options);
        } catch (PDOException $e) {
            if (DEBUG_MODE) {
                throw new Exception("Database connection failed: " . $e->getMessage());
            } else {
                throw new Exception("Database connection failed");
            }
        }
    }
    
    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new Database();
        }
        return self::$instance;
    }
    
    public function getConnection() {
        return $this->connection;
    }
    
    // Prevent cloning and serialization
    private function __clone() {}
    public function __wakeup() {}
}

/**
 * Location Management Functions
 */
class LocationManager {
    private $db;
    
    public function __construct() {
        $this->db = Database::getInstance()->getConnection();
    }
    
    public function getAllLocations() {
        try {
            $stmt = $this->db->query("
                SELECT location_key, name, address, phone, 
                       weekday_hours, weekend_hours, latitude, longitude
                FROM locations 
                WHERE is_active = TRUE 
                ORDER BY name
            ");
            return $stmt->fetchAll();
        } catch (PDOException $e) {
            $this->logError("Error fetching locations: " . $e->getMessage());
            return [];
        }
    }
    
    public function getLocationByKey($locationKey) {
        try {
            $stmt = $this->db->prepare("
                SELECT location_key, name, address, phone, 
                       weekday_hours, weekend_hours, latitude, longitude
                FROM locations 
                WHERE location_key = ? AND is_active = TRUE
            ");
            $stmt->execute([$locationKey]);
            return $stmt->fetch();
        } catch (PDOException $e) {
            $this->logError("Error fetching location: " . $e->getMessage());
            return false;
        }
    }
    
    private function logError($message) {
        if (LOG_ERRORS) {
            error_log(date('Y-m-d H:i:s') . " - " . $message . PHP_EOL, 3, LOG_FILE);
        }
    }
}

/**
 * Menu Management Functions
 */
class MenuManager {
    private $db;
    
    public function __construct() {
        $this->db = Database::getInstance()->getConnection();
    }
    
    public function getMenuCategories() {
        try {
            $stmt = $this->db->query("
                SELECT category_key, name, description 
                FROM menu_categories 
                WHERE is_active = TRUE 
                ORDER BY display_order
            ");
            return $stmt->fetchAll();
        } catch (PDOException $e) {
            $this->logError("Error fetching menu categories: " . $e->getMessage());
            return [];
        }
    }
    
    public function getMenuByCategory($categoryKey = null, $locationKey = null) {
        try {
            $sql = "SELECT * FROM menu_with_category WHERE 1=1";
            $params = [];
            
            if ($categoryKey && $categoryKey !== 'all') {
                $sql .= " AND category_key = ?";
                $params[] = $categoryKey;
            }
            
            if ($locationKey) {
                // Check location-specific availability
                $sql = "
                    SELECT m.*, lmi.is_available as location_available,
                           COALESCE(lmi.special_price, m.price) as final_price
                    FROM menu_with_category m
                    JOIN location_menu_items lmi ON m.id = lmi.menu_item_id
                    JOIN locations l ON lmi.location_id = l.id
                    WHERE l.location_key = ? AND lmi.is_available = TRUE
                ";
                array_unshift($params, $locationKey);
                
                if ($categoryKey && $categoryKey !== 'all') {
                    $sql .= " AND m.category_key = ?";
                }
            }
            
            $sql .= " ORDER BY display_order";
            
            $stmt = $this->db->prepare($sql);
            $stmt->execute($params);
            return $stmt->fetchAll();
        } catch (PDOException $e) {
            $this->logError("Error fetching menu items: " . $e->getMessage());
            return [];
        }
    }
    
    public function getFeaturedItems($locationKey = null) {
        try {
            if ($locationKey) {
                $stmt = $this->db->prepare("
                    SELECT m.*, COALESCE(lmi.special_price, m.price) as final_price
                    FROM menu_with_category m
                    JOIN location_menu_items lmi ON m.id = lmi.menu_item_id
                    JOIN locations l ON lmi.location_id = l.id
                    WHERE l.location_key = ? AND m.is_featured = TRUE AND lmi.is_available = TRUE
                    ORDER BY m.display_order
                ");
                $stmt->execute([$locationKey]);
            } else {
                $stmt = $this->db->query("
                    SELECT * FROM menu_with_category 
                    WHERE is_featured = TRUE 
                    ORDER BY display_order
                ");
            }
            return $stmt->fetchAll();
        } catch (PDOException $e) {
            $this->logError("Error fetching featured items: " . $e->getMessage());
            return [];
        }
    }
    
    public function searchMenuItems($searchTerm, $locationKey = null) {
        try {
            $searchTerm = '%' . $searchTerm . '%';
            
            if ($locationKey) {
                $stmt = $this->db->prepare("
                    SELECT m.*, COALESCE(lmi.special_price, m.price) as final_price
                    FROM menu_with_category m
                    JOIN location_menu_items lmi ON m.id = lmi.menu_item_id
                    JOIN locations l ON lmi.location_id = l.id
                    WHERE l.location_key = ? AND lmi.is_available = TRUE
                    AND (m.name LIKE ? OR m.description LIKE ?)
                    ORDER BY m.is_featured DESC, m.name
                ");
                $stmt->execute([$locationKey, $searchTerm, $searchTerm]);
            } else {
                $stmt = $this->db->prepare("
                    SELECT * FROM menu_with_category 
                    WHERE name LIKE ? OR description LIKE ?
                    ORDER BY is_featured DESC, name
                ");
                $stmt->execute([$searchTerm, $searchTerm]);
            }
            return $stmt->fetchAll();
        } catch (PDOException $e) {
            $this->logError("Error searching menu items: " . $e->getMessage());
            return [];
        }
    }
    
    private function logError($message) {
        if (LOG_ERRORS) {
            error_log(date('Y-m-d H:i:s') . " - " . $message . PHP_EOL, 3, LOG_FILE);
        }
    }
}

/**
 * Contact Form Handler
 */
class ContactManager {
    private $db;
    
    public function __construct() {
        $this->db = Database::getInstance()->getConnection();
    }
    
    public function saveContactMessage($name, $email, $phone, $message) {
        try {
            $stmt = $this->db->prepare("
                INSERT INTO contact_messages (name, email, phone, message) 
                VALUES (?, ?, ?, ?)
            ");
            $result = $stmt->execute([$name, $email, $phone, $message]);
            
            if ($result) {
                // Send email notification (implement as needed)
                $this->sendNotificationEmail($name, $email, $message);
                return true;
            }
            return false;
        } catch (PDOException $e) {
            $this->logError("Error saving contact message: " . $e->getMessage());
            return false;
        }
    }
    
    private function sendNotificationEmail($name, $email, $message) {
        // Implement email sending logic here
        // This is a placeholder for Phase 2 email integration
        if (DEBUG_MODE) {
            error_log("Contact form submission - Name: $name, Email: $email, Message: $message");
        }
    }
    
    private function logError($message) {
        if (LOG_ERRORS) {
            error_log(date('Y-m-d H:i:s') . " - " . $message . PHP_EOL, 3, LOG_FILE);
        }
    }
}

/**
 * Utility Functions
 */
class Utils {
    public static function sanitizeInput($input) {
        return htmlspecialchars(strip_tags(trim($input)), ENT_QUOTES, 'UTF-8');
    }
    
    public static function validateEmail($email) {
        return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
    }
    
    public static function generateCSRFToken() {
        if (empty($_SESSION['csrf_token'])) {
            $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
            $_SESSION['csrf_token_time'] = time();
        }
        return $_SESSION['csrf_token'];
    }
    
    public static function validateCSRFToken($token) {
        if (empty($_SESSION['csrf_token']) || empty($_SESSION['csrf_token_time'])) {
            return false;
        }
        
        // Check token expiry
        if (time() - $_SESSION['csrf_token_time'] > CSRF_TOKEN_EXPIRY) {
            unset($_SESSION['csrf_token'], $_SESSION['csrf_token_time']);
            return false;
        }
        
        return hash_equals($_SESSION['csrf_token'], $token);
    }
    
    public static function formatPrice($price) {
        return '$' . number_format($price, 2);
    }
    
    public static function formatSpiceLevel($level) {
        $levels = [
            'none' => 'No Spice',
            'mild' => '🌶️ Mild',
            'medium' => '🌶️🌶️ Medium',
            'hot' => '🌶️🌶️🌶️ Hot',
            'very_hot' => '🌶️🌶️🌶️🌶️ Very Hot'
        ];
        return $levels[$level] ?? 'Unknown';
    }
    
    public static function formatDietaryInfo($dietaryInfo) {
        if (empty($dietaryInfo)) {
            return '';
        }
        
        $dietary = explode(',', $dietaryInfo);
        $formatted = [];
        
        foreach ($dietary as $item) {
            $item = trim($item);
            switch ($item) {
                case 'vegetarian':
                    $formatted[] = '<span class="dietary vegetarian">Vegetarian</span>';
                    break;
                case 'vegan':
                    $formatted[] = '<span class="dietary vegan">Vegan</span>';
                    break;
                case 'contains_dairy':
                    $formatted[] = '<span class="dietary dairy">Contains Dairy</span>';
                    break;
                case 'contains_nuts':
                    $formatted[] = '<span class="dietary nuts">Contains Nuts</span>';
                    break;
                case 'gluten_free':
                    $formatted[] = '<span class="dietary gluten-free">Gluten Free</span>';
                    break;
            }
        }
        
        return implode(' ', $formatted);
    }
    
    public static function logError($message) {
        if (LOG_ERRORS) {
            $timestamp = date('Y-m-d H:i:s');
            $logMessage = "[$timestamp] $message" . PHP_EOL;
            file_put_contents(LOG_FILE, $logMessage, FILE_APPEND | LOCK_EX);
        }
    }
}

/**
 * Response Helper for API endpoints
 */
class ApiResponse {
    public static function json($data, $statusCode = 200) {
        http_response_code($statusCode);
        header('Content-Type: application/json');
        echo json_encode($data, JSON_PRETTY_PRINT);
        exit;
    }
    
    public static function error($message, $statusCode = 400) {
        self::json(['error' => $message, 'success' => false], $statusCode);
    }
    
    public static function success($data = null, $message = 'Success') {
        $response = ['success' => true, 'message' => $message];
        if ($data !== null) {
            $response['data'] = $data;
        }
        self::json($response);
    }
}
?>