-- Dhaba Indian Kitchen Database Schema
-- Phase 2: MySQL Integration Script
-- Run this script to create the database structure for dynamic content

-- Create database
CREATE DATABASE IF NOT EXISTS dhaba_indian_kitchen;
USE dhaba_indian_kitchen;

-- Set character set
SET NAMES utf8mb4;
SET CHARACTER SET utf8mb4;

-- Create locations table
CREATE TABLE locations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    location_key VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(200) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    weekday_hours VARCHAR(50) NOT NULL,
    weekend_hours VARCHAR(50) NOT NULL,
    latitude DECIMAL(10, 8) NULL,
    longitude DECIMAL(11, 8) NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create menu categories table
CREATE TABLE menu_categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category_key VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create menu items table
CREATE TABLE menu_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(8, 2) NOT NULL,
    image_url VARCHAR(255),
    spice_level ENUM('none', 'mild', 'medium', 'hot', 'very_hot') DEFAULT 'mild',
    dietary_info SET('vegetarian', 'vegan', 'contains_dairy', 'contains_nuts', 'gluten_free') DEFAULT '',
    ingredients TEXT,
    calories INT,
    is_featured BOOLEAN DEFAULT FALSE,
    is_available BOOLEAN DEFAULT TRUE,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES menu_categories(id) ON DELETE CASCADE
);

-- Create location-specific menu availability table
CREATE TABLE location_menu_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    location_id INT NOT NULL,
    menu_item_id INT NOT NULL,
    is_available BOOLEAN DEFAULT TRUE,
    special_price DECIMAL(8, 2) NULL,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (location_id) REFERENCES locations(id) ON DELETE CASCADE,
    FOREIGN KEY (menu_item_id) REFERENCES menu_items(id) ON DELETE CASCADE,
    UNIQUE KEY unique_location_item (location_id, menu_item_id)
);

-- Create customers table (for future booking system)
CREATE TABLE customers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    preferences TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create bookings/orders table (for future online ordering)
CREATE TABLE bookings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT NOT NULL,
    location_id INT NOT NULL,
    booking_type ENUM('order', 'reservation') NOT NULL,
    status ENUM('pending', 'confirmed', 'preparing', 'ready', 'completed', 'cancelled') DEFAULT 'pending',
    booking_date DATE NOT NULL,
    booking_time TIME NOT NULL,
    party_size INT DEFAULT 1,
    special_requests TEXT,
    total_amount DECIMAL(10, 2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE,
    FOREIGN KEY (location_id) REFERENCES locations(id) ON DELETE CASCADE
);

-- Create booking items table (for orders)
CREATE TABLE booking_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    booking_id INT NOT NULL,
    menu_item_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    unit_price DECIMAL(8, 2) NOT NULL,
    special_instructions TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE,
    FOREIGN KEY (menu_item_id) REFERENCES menu_items(id) ON DELETE CASCADE
);

-- Create contact messages table
CREATE TABLE contact_messages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    replied_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample locations data
INSERT INTO locations (location_key, name, address, phone, weekday_hours, weekend_hours, latitude, longitude) VALUES
('downtown', 'Downtown Portland', 'SW 5th Avenue & Morrison Street', '(503) 555-0101', '11:00 AM - 8:00 PM', '12:00 PM - 9:00 PM', 45.5152, -122.6784),
('pearl-district', 'Pearl District', 'NW 10th Avenue & Couch Street', '(503) 555-0102', '11:30 AM - 7:30 PM', '12:00 PM - 8:30 PM', 45.5244, -122.6813),
('hawthorne', 'Hawthorne', 'SE Hawthorne Blvd & 20th Avenue', '(503) 555-0103', '11:00 AM - 9:00 PM', '11:00 AM - 10:00 PM', 45.5118, -122.6493),
('alberta', 'Alberta Arts District', 'NE Alberta Street & 15th Avenue', '(503) 555-0104', '11:00 AM - 8:30 PM', '12:00 PM - 9:30 PM', 45.5598, -122.6493),
('sellwood', 'Sellwood', 'SE 13th Avenue & Tacoma Street', '(503) 555-0105', '11:30 AM - 8:00 PM', '12:00 PM - 9:00 PM', 45.4634, -122.6493),
('nob-hill', 'Nob Hill', 'NW 23rd Avenue & Burnside Street', '(503) 555-0106', '11:00 AM - 8:00 PM', '11:30 AM - 9:30 PM', 45.5229, -122.6993),
('belmont', 'Belmont District', 'SE Belmont Street & 34th Avenue', '(503) 555-0107', '11:00 AM - 8:30 PM', '12:00 PM - 9:00 PM', 45.5167, -122.6305),
('mississippi', 'Mississippi District', 'N Mississippi Avenue & Fremont Street', '(503) 555-0108', '11:30 AM - 8:00 PM', '12:00 PM - 9:30 PM', 45.5483, -122.6746),
('division', 'Division Street', 'SE Division Street & 28th Avenue', '(503) 555-0109', '11:00 AM - 9:00 PM', '11:30 AM - 10:00 PM', 45.5048, -122.6369),
('portland-state', 'Portland State University', 'SW 4th Avenue & Mill Street', '(503) 555-0110', '10:30 AM - 7:00 PM', '12:00 PM - 8:00 PM', 45.5098, -122.6816);

-- Insert menu categories
INSERT INTO menu_categories (category_key, name, description, display_order) VALUES
('appetizers', 'Appetizers', 'Start your meal with our delicious appetizers', 1),
('mains', 'Main Courses', 'Hearty and flavorful main dishes', 2),
('biryani', 'Biryani', 'Aromatic rice dishes with meat and vegetables', 3),
('breads', 'Indian Breads', 'Fresh baked naan, roti, and other Indian breads', 4),
('desserts', 'Desserts', 'Sweet endings to your meal', 5),
('beverages', 'Beverages', 'Traditional Indian drinks and beverages', 6);

-- Insert sample menu items
-- Appetizers
INSERT INTO menu_items (category_id, name, description, price, image_url, spice_level, dietary_info, calories, is_featured, display_order) VALUES
(1, 'Vegetable Samosa', 'Crispy pastry filled with spiced potatoes, peas, and aromatic herbs. Served with mint and tamarind chutneys.', 6.99, 'assets/images/menu/samosa.jpg', 'mild', 'vegetarian', 250, FALSE, 1),
(1, 'Mixed Vegetable Pakora', 'Fresh vegetables dipped in chickpea batter and deep-fried to golden perfection. Served with green chutney.', 8.99, 'assets/images/menu/pakora.jpg', 'mild', 'vegan', 180, FALSE, 2),
(1, 'Chana Chaat', 'Tangy chickpea salad with onions, tomatoes, and a blend of aromatic spices. A healthy and flavorful street food.', 7.99, 'assets/images/menu/chana-chaat.jpg', 'medium', 'vegan', 220, FALSE, 3),
(1, 'Chicken Tikka', 'Tender chicken pieces marinated in yogurt and spices, grilled in our tandoor oven.', 12.99, 'assets/images/menu/chicken-tikka.jpg', 'medium', 'contains_dairy', 320, FALSE, 4);

-- Main Courses
INSERT INTO menu_items (category_id, name, description, price, image_url, spice_level, dietary_info, calories, is_featured, display_order) VALUES
(2, 'Butter Chicken', 'Tender chicken pieces in rich, creamy tomato-based sauce with aromatic spices. Our signature dish!', 16.99, 'assets/images/menu/butter-chicken.jpg', 'mild', 'contains_dairy', 450, TRUE, 1),
(2, 'Chicken Tikka Masala', 'Grilled chicken tikka in a creamy, spiced tomato sauce. A perfect balance of flavors and textures.', 15.99, 'assets/images/menu/chicken-tikka-masala.jpg', 'medium', 'contains_dairy', 420, FALSE, 2),
(2, 'Dal Makhani', 'Slow-cooked black lentils in a rich, creamy sauce with butter and aromatic spices. A vegetarian favorite.', 12.99, 'assets/images/menu/dal-makhani.jpg', 'mild', 'vegetarian', 350, FALSE, 3),
(2, 'Palak Paneer', 'Fresh cottage cheese cubes in creamed spinach with traditional Indian spices. Healthy and delicious.', 13.99, 'assets/images/menu/palak-paneer.jpg', 'medium', 'vegetarian', 280, FALSE, 4),
(2, 'Lamb Curry', 'Tender lamb cooked in aromatic curry sauce with onions, tomatoes, and traditional spices.', 18.99, 'assets/images/menu/lamb-curry.jpg', 'hot', '', 480, FALSE, 5),
(2, 'Chana Masala', 'Chickpeas cooked in spiced tomato and onion gravy. A protein-rich vegan option.', 11.99, 'assets/images/menu/chana-masala.jpg', 'medium', 'vegan', 290, FALSE, 6);

-- Biryani
INSERT INTO menu_items (category_id, name, description, price, image_url, spice_level, dietary_info, calories, is_featured, display_order) VALUES
(3, 'Chicken Biryani', 'Fragrant basmati rice layered with marinated chicken, saffron, and aromatic spices. Served with raita and shorba.', 17.99, 'assets/images/menu/chicken-biryani.jpg', 'medium', 'contains_dairy', 520, FALSE, 1),
(3, 'Vegetable Biryani', 'Aromatic basmati rice with mixed vegetables, cashews, and traditional spices. A vegetarian delight.', 14.99, 'assets/images/menu/vegetable-biryani.jpg', 'medium', 'vegetarian', 380, FALSE, 2),
(3, 'Lamb Biryani', 'Premium basmati rice layered with tender lamb, saffron, and exotic spices. A royal treat.', 21.99, 'assets/images/menu/lamb-biryani.jpg', 'hot', 'contains_dairy', 580, TRUE, 3);

-- Breads
INSERT INTO menu_items (category_id, name, description, price, image_url, spice_level, dietary_info, calories, is_featured, display_order) VALUES
(4, 'Butter Naan', 'Soft, fluffy bread baked in our tandoor oven and brushed with butter. Perfect with any curry.', 3.99, 'assets/images/menu/naan.jpg', 'none', 'vegetarian', 180, FALSE, 1),
(4, 'Garlic Naan', 'Our signature naan topped with fresh garlic and cilantro. A customer favorite!', 4.99, 'assets/images/menu/garlic-naan.jpg', 'mild', 'vegetarian', 200, FALSE, 2),
(4, 'Tandoor Roti', 'Whole wheat bread baked in our traditional tandoor oven. A healthier option.', 2.99, 'assets/images/menu/roti.jpg', 'none', 'vegan', 120, FALSE, 3),
(4, 'Cheese Naan', 'Naan stuffed with melted cheese. Comfort food at its best.', 5.99, 'assets/images/menu/cheese-naan.jpg', 'none', 'vegetarian', 250, FALSE, 4);

-- Desserts
INSERT INTO menu_items (category_id, name, description, price, image_url, spice_level, dietary_info, calories, is_featured, display_order) VALUES
(5, 'Gulab Jamun', 'Soft, spongy milk dumplings soaked in cardamom-flavored sugar syrup. A classic Indian dessert.', 5.99, 'assets/images/menu/gulab-jamun.jpg', 'none', 'vegetarian', 320, FALSE, 1),
(5, 'Kulfi', 'Traditional Indian ice cream made with condensed milk, cardamom, and pistachios. Rich and creamy.', 4.99, 'assets/images/menu/kulfi.jpg', 'none', 'vegetarian,contains_nuts', 280, FALSE, 2),
(5, 'Ras Malai', 'Soft cheese dumplings in sweet, thickened milk flavored with cardamom and garnished with pistachios.', 6.99, 'assets/images/menu/ras-malai.jpg', 'none', 'vegetarian,contains_nuts', 300, FALSE, 3);

-- Beverages
INSERT INTO menu_items (category_id, name, description, price, image_url, spice_level, dietary_info, calories, is_featured, display_order) VALUES
(6, 'Mango Lassi', 'Refreshing yogurt-based drink blended with fresh mango pulp. Perfect complement to spicy food.', 4.99, 'assets/images/menu/lassi.jpg', 'none', 'vegetarian', 180, FALSE, 1),
(6, 'Masala Chai', 'Traditional Indian spiced tea brewed with cardamom, cinnamon, ginger, and milk.', 3.99, 'assets/images/menu/chai.jpg', 'mild', 'vegetarian', 80, FALSE, 2),
(6, 'Nimbu Paani', 'Fresh lime water with mint and a hint of black salt. Refreshing and healthy.', 3.49, 'assets/images/menu/nimbu-paani.jpg', 'none', 'vegan', 25, FALSE, 3),
(6, 'Sweet Lassi', 'Traditional yogurt drink sweetened with sugar and flavored with rose water.', 4.49, 'assets/images/menu/sweet-lassi.jpg', 'none', 'vegetarian', 160, FALSE, 4);

-- Make all menu items available at all locations initially
INSERT INTO location_menu_items (location_id, menu_item_id, is_available)
SELECT l.id, m.id, TRUE
FROM locations l
CROSS JOIN menu_items m;

-- Create indexes for better performance
CREATE INDEX idx_locations_key ON locations(location_key);
CREATE INDEX idx_menu_categories_key ON menu_categories(category_key);
CREATE INDEX idx_menu_items_category ON menu_items(category_id);
CREATE INDEX idx_menu_items_featured ON menu_items(is_featured);
CREATE INDEX idx_menu_items_available ON menu_items(is_available);
CREATE INDEX idx_location_menu_items_location ON location_menu_items(location_id);
CREATE INDEX idx_location_menu_items_item ON location_menu_items(menu_item_id);
CREATE INDEX idx_contact_messages_read ON contact_messages(is_read);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_date ON bookings(booking_date);

-- Create views for easier data retrieval
CREATE VIEW menu_with_category AS
SELECT 
    m.id,
    m.name,
    m.description,
    m.price,
    m.image_url,
    m.spice_level,
    m.dietary_info,
    m.calories,
    m.is_featured,
    m.is_available,
    m.display_order,
    c.category_key,
    c.name AS category_name
FROM menu_items m
JOIN menu_categories c ON m.category_id = c.id
WHERE m.is_available = TRUE
ORDER BY c.display_order, m.display_order;

CREATE VIEW location_menu_full AS
SELECT 
    l.location_key,
    l.name AS location_name,
    m.id AS menu_item_id,
    m.name AS item_name,
    m.description,
    COALESCE(lmi.special_price, m.price) AS price,
    m.image_url,
    m.spice_level,
    m.dietary_info,
    m.calories,
    m.is_featured,
    c.category_key,
    c.name AS category_name,
    lmi.is_available AS location_available,
    lmi.notes
FROM locations l
JOIN location_menu_items lmi ON l.id = lmi.location_id
JOIN menu_items m ON lmi.menu_item_id = m.id
JOIN menu_categories c ON m.category_id = c.id
WHERE l.is_active = TRUE 
AND m.is_available = TRUE 
AND lmi.is_available = TRUE
ORDER BY l.name, c.display_order, m.display_order;

-- Sample stored procedures for common operations

-- Get menu for specific location
DELIMITER //
CREATE PROCEDURE GetLocationMenu(IN location_key VARCHAR(50))
BEGIN
    SELECT * FROM location_menu_full 
    WHERE location_key = location_key;
END //
DELIMITER ;

-- Search menu items
DELIMITER //
CREATE PROCEDURE SearchMenuItems(IN search_term VARCHAR(100))
BEGIN
    SELECT * FROM menu_with_category 
    WHERE name LIKE CONCAT('%', search_term, '%') 
    OR description LIKE CONCAT('%', search_term, '%')
    ORDER BY is_featured DESC, name;
END //
DELIMITER ;

-- Get featured items
DELIMITER //
CREATE PROCEDURE GetFeaturedItems()
BEGIN
    SELECT * FROM menu_with_category 
    WHERE is_featured = TRUE
    ORDER BY display_order;
END //
DELIMITER ;

-- Insert contact message
DELIMITER //
CREATE PROCEDURE InsertContactMessage(
    IN p_name VARCHAR(100),
    IN p_email VARCHAR(100), 
    IN p_phone VARCHAR(20),
    IN p_message TEXT
)
BEGIN
    INSERT INTO contact_messages (name, email, phone, message)
    VALUES (p_name, p_email, p_phone, p_message);
END //
DELIMITER ;

-- Create user for web application (adjust credentials as needed)
CREATE USER IF NOT EXISTS 'dhaba_web'@'localhost' IDENTIFIED BY 'DhabaWeb2024!';
GRANT SELECT, INSERT, UPDATE ON dhaba_indian_kitchen.* TO 'dhaba_web'@'localhost';
GRANT EXECUTE ON dhaba_indian_kitchen.* TO 'dhaba_web'@'localhost';

-- Grant specific permissions for the web application
GRANT SELECT ON dhaba_indian_kitchen.locations TO 'dhaba_web'@'localhost';
GRANT SELECT ON dhaba_indian_kitchen.menu_categories TO 'dhaba_web'@'localhost';
GRANT SELECT ON dhaba_indian_kitchen.menu_items TO 'dhaba_web'@'localhost';
GRANT SELECT ON dhaba_indian_kitchen.location_menu_items TO 'dhaba_web'@'localhost';
GRANT INSERT ON dhaba_indian_kitchen.contact_messages TO 'dhaba_web'@'localhost';
GRANT SELECT ON dhaba_indian_kitchen.menu_with_category TO 'dhaba_web'@'localhost';
GRANT SELECT ON dhaba_indian_kitchen.location_menu_full TO 'dhaba_web'@'localhost';

FLUSH PRIVILEGES;

-- Display setup completion message
SELECT 'Database setup completed successfully!' AS status,
       COUNT(*) AS total_locations FROM locations
UNION ALL
SELECT 'Menu categories created:', COUNT(*) FROM menu_categories
UNION ALL
SELECT 'Menu items created:', COUNT(*) FROM menu_items
UNION ALL
SELECT 'Location-menu mappings:', COUNT(*) FROM location_menu_items;