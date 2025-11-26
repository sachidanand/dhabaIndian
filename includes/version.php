<?php
/**
 * Version Configuration for Cache Busting
 * 
 * Update this version number whenever you deploy new changes to CSS or JS files.
 * This will force browsers to download fresh files instead of using cached versions.
 * 
 * Version format: MAJOR.MINOR.PATCH
 * - MAJOR: Significant redesign or major feature changes
 * - MINOR: New features, layout changes, or significant updates
 * - PATCH: Bug fixes, small tweaks, or minor updates
 * 
 * DEPLOYMENT INSTRUCTIONS:
 * 1. Make your changes to CSS/JS files
 * 2. Increment this version number (e.g., 2.0.1 -> 2.0.2)
 * 3. Deploy all files to production
 * 4. Users will automatically get fresh files on next visit
 * 
 * Last Updated: October 13, 2025
 * Changes: Added scroll animations, parallax effects, menu scroll reveals, and auto-open default menu
 */

// Current version - INCREMENT THIS BEFORE EACH DEPLOYMENT
define('ASSETS_VERSION', '2.1.0');

// Alternative: Use timestamp for automatic versioning (uncomment to use)
// define('ASSETS_VERSION', time());

// Alternative: Use file modification time (uncomment to use)
// define('ASSETS_VERSION', filemtime(__DIR__ . '/../assets/css/style.css'));
?>
