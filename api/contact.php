<?php
/**
 * Contact Form Handler
 * Dhaba Indian Kitchen - Phase 2
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

require_once '../includes/database.php';

try {
    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    
    // Validate required fields
    $name = Utils::sanitizeInput($input['name'] ?? '');
    $email = Utils::sanitizeInput($input['email'] ?? '');
    $phone = Utils::sanitizeInput($input['phone'] ?? '');
    $message = Utils::sanitizeInput($input['message'] ?? '');
    $csrfToken = $input['csrf_token'] ?? '';
    
    // Validation
    if (empty($name)) {
        ApiResponse::error('Name is required');
    }
    
    if (empty($email) || !Utils::validateEmail($email)) {
        ApiResponse::error('Valid email is required');
    }
    
    if (empty($message)) {
        ApiResponse::error('Message is required');
    }
    
    // CSRF validation (if enabled)
    if (isset($_SESSION) && !Utils::validateCSRFToken($csrfToken)) {
        ApiResponse::error('Invalid security token');
    }
    
    // Save contact message
    $contactManager = new ContactManager();
    $result = $contactManager->saveContactMessage($name, $email, $phone, $message);
    
    if ($result) {
        ApiResponse::success(null, 'Thank you for your message! We will get back to you soon.');
    } else {
        ApiResponse::error('Failed to send message. Please try again.', 500);
    }
    
} catch (Exception $e) {
    if (DEBUG_MODE) {
        ApiResponse::error($e->getMessage(), 500);
    } else {
        ApiResponse::error('Internal server error', 500);
    }
}
?>