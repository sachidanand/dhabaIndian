<?php
/**
 * Database Configuration for Dhaba Indian Kitchen
 * Phase 2: MySQL Integration
 */

// Database Configuration
define('DB_HOST', 'localhost');
define('DB_NAME', 'dhaba_indian_kitchen');
define('DB_USER', 'dhaba_web');
define('DB_PASS', 'DhabaWeb2024!');
define('DB_CHARSET', 'utf8mb4');

// Site Configuration
define('SITE_NAME', 'Dhaba Indian Kitchen');
define('SITE_URL', 'http://localhost'); // Change this to your domain
define('SITE_EMAIL', 'info@dhabaindianpdx.com');

// File Upload Configuration
define('UPLOAD_DIR', 'assets/images/uploads/');
define('MAX_FILE_SIZE', 5 * 1024 * 1024); // 5MB
define('ALLOWED_EXTENSIONS', ['jpg', 'jpeg', 'png', 'gif', 'webp']);

// Security Configuration
define('ADMIN_SESSION_TIMEOUT', 3600); // 1 hour
define('CSRF_TOKEN_EXPIRY', 1800); // 30 minutes

// API Configuration (for future mobile app)
define('API_VERSION', 'v1');
define('API_KEY_REQUIRED', false); // Set to true in production

// Email Configuration (for contact forms)
define('SMTP_HOST', 'localhost');
define('SMTP_PORT', 587);
define('SMTP_USER', '');
define('SMTP_PASS', '');
define('SMTP_SECURE', 'tls');

// Cache Configuration
define('CACHE_ENABLED', false); // Enable in production
define('CACHE_EXPIRY', 3600); // 1 hour

// Debug Configuration
define('DEBUG_MODE', true); // Set to false in production
define('LOG_ERRORS', true);
define('LOG_FILE', 'logs/error.log');

// Timezone
date_default_timezone_set('America/Los_Angeles');

// Error Reporting
if (DEBUG_MODE) {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
} else {
    error_reporting(0);
    ini_set('display_errors', 0);
}

// Session Configuration
ini_set('session.cookie_httponly', 1);
ini_set('session.cookie_secure', 1);
ini_set('session.use_only_cookies', 1);

// Start session if not already started
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
?>