# Dhaba Indian Kitchen Website - Optimized

## Recent Optimizations (October 2025)

### 1. Modular Structure with PHP Includes
The website has been restructured to use PHP includes for better code organization and maintainability.

#### Files Structure:
```
includes/
├── header.php     - Common header with navigation
└── footer.php     - Common footer with links and scripts

index.php          - Homepage (now uses includes)
menu.php           - Menu page (now uses includes)
```

#### Benefits:
- **DRY Principle**: No duplicate code for header/footer
- **Easy Maintenance**: Update header/footer in one place
- **Consistent Design**: Same header/footer across all pages

### 2. Responsive Design
Added comprehensive responsive CSS (`assets/css/responsive.css`) for all screen sizes:

#### Mobile (up to 768px):
- Hamburger menu for navigation
- Single column layout
- Touch-friendly buttons (min 44px)
- Optimized font sizes
- Stack elements vertically

#### Tablet (769px - 1024px):
- 2-3 column grid for menu items
- Improved spacing
- Side-by-side location cards

#### Desktop (1025px+):
- 4-5 column menu grid
- Full navigation menu
- Optimal reading width
- Enhanced hero sections

#### Large Desktop (1441px+):
- Maximum 5 columns for menu
- Larger typography
- Spacious layout

### 3. Mobile Menu
- Responsive hamburger menu
- Smooth animations
- Click outside to close
- Auto-close on link click

### 4. Accessibility Features
- Reduced motion support
- ARIA labels for social links
- Touch-friendly tap targets
- Proper contrast ratios

### 5. Performance Optimizations
- CSS loaded in proper order
- Print stylesheet included
- Optimized for all devices

## Running the Website

### PHP Development Server (Recommended):
```bash
cd /Users/sachidanand/RestaurantManagement/DhabaIndian-Portland
php -S localhost:8080
```
Then visit: http://localhost:8080

### Alternative - Python Server:
```bash
python3 -m http.server 8080
```
Note: PHP includes won't work with Python server.

## File Locations

### Pages:
- `index.php` - Homepage
- `menu.php` - Menu page

### Includes:
- `includes/header.php` - Site header
- `includes/footer.php` - Site footer

### CSS:
- `assets/css/style.css` - Main styles
- `assets/css/responsive.css` - Responsive design
- `assets/css/menu-simple.css` - Menu page specific styles

### JavaScript:
- `assets/js/script.js` - Main functionality
- `assets/js/includes.js` - Include loader (for non-PHP servers)

## Current Locations

1. **PSU Campus**
   - Address: 1929 SW 4th Ave, Portland, OR 97201
   - Phone: 503-752-8592

2. **Downtown Portland**
   - Address: 340 SW 5th Ave, Portland, OR 97204
   - Phone: 971-246-1393

3. **Hillsboro Century**
   - Address: 2635 SE Century Blvd, Hillsboro, OR 97124
   - Phone: 503-884-1135

4. **Hillsboro Baseline**
   - Address: 320 SE Baseline Street, Hillsboro, OR 97123
   - Phone: 971-492-4124

## Features

### Homepage (index.php):
- Hero section with CTAs
- Location tabs with 4 locations
- About section
- Contact form
- Responsive design

### Menu Page (menu.php):
- Category filtering
- 32 menu items with images
- Dynamic location information
- Default location: PSU Campus
- Mobile-friendly grid

### Responsive Features:
- Mobile hamburger menu
- Touch-optimized buttons
- Flexible layouts
- Print-friendly styles
- Reduced motion support

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Next Steps (Phase 2)
- MySQL database integration
- Dynamic menu loading
- Online ordering system
- Location management system
- Customer reviews
- Photo gallery

## Backup Files
- `index_backup.php` - Original index.php before includes
- Original HTML files were renamed to .php

## Testing Checklist
- ✅ Desktop view (1920px+)
- ✅ Laptop view (1366px-1440px)
- ✅ Tablet view (768px-1024px)
- ✅ Mobile view (320px-767px)
- ✅ Hamburger menu functionality
- ✅ Location tabs
- ✅ Menu category filtering
- ✅ Dynamic location display
- ✅ All links working
- ✅ Images loading correctly

## Contact
For questions or issues, contact the development team.
