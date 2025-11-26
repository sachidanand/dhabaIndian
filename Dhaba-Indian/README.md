# Dhaba Indian Kitchen - Restaurant Website

A professional, responsive website for Dhaba Indian Kitchen food trucks across Portland, Oregon. This project covers 10 locations with dynamic menu loading, location-based content, and modern web design.

## 🚀 Project Overview

**Phase 1: Static Website (Current)**
- Professional responsive design
- 10 location tabs with detailed information
- Static menu display with beautiful UI
- Contact form and business information
- Mobile-first responsive design

**Phase 2: Dynamic Integration (Next)**
- MySQL database integration
- Dynamic menu loading by location
- Contact form processing
- Admin panel for content management
- Online booking system foundation

## 🛠 Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: PHP 8.0+ (Phase 2)
- **Database**: MySQL 8.0+ (Phase 2)
- **Styling**: Custom CSS with modern design patterns
- **Icons**: Font Awesome 6.0
- **Fonts**: Google Fonts (Playfair Display, Open Sans)

## 📁 Project Structure

```
DhabaIndian-Portland/
├── index.html                 # Main homepage
├── menu.html                  # Menu page template
├── assets/
│   ├── css/
│   │   ├── style.css         # Main stylesheet
│   │   └── menu.css          # Menu page specific styles
│   ├── js/
│   │   ├── script.js         # Main JavaScript functionality
│   │   └── menu.js           # Menu page JavaScript
│   └── images/               # Image assets (placeholders)
│       └── menu/             # Menu item images
├── includes/                 # PHP includes (Phase 2)
│   ├── config.php           # Database configuration
│   └── database.php         # Database connection & helpers
├── api/                     # API endpoints (Phase 2)
│   ├── menu.php             # Menu data API
│   └── contact.php          # Contact form handler
├── database/
│   └── schema.sql           # MySQL database schema
└── README.md               # This file
```

## 🌟 Features

### Current Features (Phase 1)
- **Responsive Design**: Mobile-first approach, works on all devices
- **Location Tabs**: Easy navigation between 10 food truck locations
- **Professional UI**: Modern design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, mobile menu
- **Menu Preview**: Static menu display with categories and filtering
- **Contact Form**: Frontend validation (backend in Phase 2)

### Upcoming Features (Phase 2)
- **Dynamic Menus**: Location-specific menu items from database
- **Admin Panel**: Content management system
- **Online Booking**: Table reservation system
- **Contact Processing**: Email notifications and database storage
- **Search Functionality**: Search menu items across locations
- **API Endpoints**: RESTful API for future mobile app

## 🏪 Locations Covered

1. **Downtown Portland** - SW 5th Avenue & Morrison Street
2. **Pearl District** - NW 10th Avenue & Couch Street
3. **Hawthorne** - SE Hawthorne Blvd & 20th Avenue
4. **Alberta Arts District** - NE Alberta Street & 15th Avenue
5. **Sellwood** - SE 13th Avenue & Tacoma Street
6. **Nob Hill** - NW 23rd Avenue & Burnside Street
7. **Belmont District** - SE Belmont Street & 34th Avenue
8. **Mississippi District** - N Mississippi Avenue & Fremont Street
9. **Division Street** - SE Division Street & 28th Avenue
10. **Portland State University** - SW 4th Avenue & Mill Street

## 🚀 Getting Started

### Phase 1 (Static Website)
1. Clone or download the project files
2. Open `index.html` in a web browser
3. No server setup required for Phase 1

### Phase 2 (Dynamic Website)
1. **Prerequisites**:
   - PHP 8.0 or higher
   - MySQL 8.0 or higher
   - Web server (Apache/Nginx)

2. **Database Setup**:
   ```bash
   mysql -u root -p < database/schema.sql
   ```

3. **Configuration**:
   - Update database credentials in `includes/config.php`
   - Set proper file permissions for uploads

4. **Web Server**:
   - Point document root to project directory
   - Ensure PHP and MySQL are running
   - Access via `http://localhost/`

## 🎨 Design Features

### Color Scheme
- **Primary**: #e74c3c (Indian Red)
- **Secondary**: #2c3e50 (Dark Blue)
- **Accent**: #27ae60 (Green)
- **Background**: #f8f9fa (Light Gray)

### Typography
- **Headings**: Playfair Display (Serif)
- **Body**: Open Sans (Sans-serif)
- **Responsive**: Fluid typography that scales with screen size

### Layout
- **Mobile-first**: Responsive design starting from 320px
- **Grid System**: CSS Grid and Flexbox
- **Breakpoints**: 480px, 768px, 1024px, 1200px+

## 📱 Responsive Design

The website is fully responsive with optimized layouts for:
- **Mobile** (320px - 767px): Stacked layout, hamburger menu
- **Tablet** (768px - 1023px): Adapted grid, touch-friendly elements
- **Desktop** (1024px+): Full layout with hover effects

## 🔧 Development

### File Organization
- **HTML**: Semantic markup with accessibility features
- **CSS**: BEM methodology for class naming
- **JavaScript**: ES6+ with modular functions
- **PHP**: Object-oriented approach with error handling

### Code Standards
- **HTML5**: Valid semantic markup
- **CSS3**: Modern properties with fallbacks
- **JavaScript**: Strict mode, error handling
- **PHP**: PSR-12 coding standards

## 📊 Database Schema (Phase 2)

### Main Tables
- **locations**: Food truck location details
- **menu_categories**: Menu category organization
- **menu_items**: Individual menu items with details
- **location_menu_items**: Location-specific menu availability
- **customers**: Customer information for bookings
- **bookings**: Reservation and order management
- **contact_messages**: Contact form submissions

### Key Features
- Foreign key relationships for data integrity
- Indexes for optimal query performance
- Views for complex data retrieval
- Stored procedures for common operations

## 🔒 Security Features (Phase 2)

- **Input Sanitization**: All user inputs are sanitized
- **SQL Injection Protection**: Prepared statements
- **CSRF Protection**: Token-based validation
- **XSS Prevention**: Output escaping
- **Session Security**: Secure session configuration

## 📈 Performance Optimization

- **Image Optimization**: Compressed images with modern formats
- **CSS/JS Minification**: Reduced file sizes for production
- **Caching Strategy**: Database query caching (Phase 2)
- **CDN Ready**: External resources from CDN
- **Lazy Loading**: Images load on demand

## 🧪 Testing

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Testing Checklist
- [ ] Responsive design on all breakpoints
- [ ] Cross-browser compatibility
- [ ] Form validation and submission
- [ ] Navigation and user interactions
- [ ] Performance and loading times
- [ ] Accessibility compliance

## 🚀 Deployment

### Phase 1 (Static)
- Can be deployed to any web hosting service
- No server-side requirements
- Works with GitHub Pages, Netlify, Vercel

### Phase 2 (Dynamic)
- Requires PHP hosting with MySQL
- Recommended: VPS or dedicated hosting
- SSL certificate required for production
- Regular database backups recommended

## 🔮 Future Enhancements

### Phase 3 Possibilities
- **Mobile App**: React Native or Flutter app
- **Online Ordering**: Full e-commerce integration
- **Loyalty Program**: Customer rewards system
- **Analytics Dashboard**: Business intelligence features
- **Multi-language**: Spanish language support
- **Social Integration**: Instagram feed, social login

## 📞 Support & Contact

For technical support or questions about this project:
- **Email**: info@dhabaindianpdx.com
- **GitHub**: [Project Repository]
- **Documentation**: See inline code comments

## 📄 License

This project is proprietary software for Dhaba Indian Kitchen. All rights reserved.

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Inspiration from modern restaurant websites
- Portland food truck community

---

**Built with ❤️ for Dhaba Indian Kitchen**

*Bringing authentic Indian flavors to Portland, one food truck at a time.*