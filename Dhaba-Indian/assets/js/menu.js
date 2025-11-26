// Menu Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeMenuPage();
});

// Initialize menu page functionality
function initializeMenuPage() {
    setupCategoryFilters();
    setupLocationInfo();
    setupMenuSearch();
    setupCallToAction();
    setupImageLoading();
    
    // Show all items by default
    showCategory('all');
}

// Setup category filtering
function setupCategoryFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Show corresponding category
            showCategory(category);
        });
    });
}

// Show specific category or all items
function showCategory(category) {
    const menuCategories = document.querySelectorAll('.menu-category');
    
    menuCategories.forEach(categoryEl => {
        const categoryName = categoryEl.getAttribute('data-category');
        
        if (category === 'all' || categoryName === category) {
            categoryEl.classList.add('active');
            categoryEl.style.display = 'block';
        } else {
            categoryEl.classList.remove('active');
            categoryEl.style.display = 'none';
        }
    });
    
    // Scroll to menu section after filtering
    const menuSection = document.querySelector('.menu-section');
    if (menuSection && category !== 'all') {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const navHeight = document.querySelector('.menu-nav').offsetHeight;
        const offset = headerHeight + navHeight + 20;
        
        window.scrollTo({
            top: menuSection.offsetTop - offset,
            behavior: 'smooth'
        });
    }
}

// Setup location information from URL parameters
function setupLocationInfo() {
    const urlParams = new URLSearchParams(window.location.search);
    const location = urlParams.get('location') || 'downtown';
    
    updateLocationInfo(location);
}

// Update location information on the page
function updateLocationInfo(locationKey) {
    // Import location data from main script
    const locationData = {
        'downtown': {
            name: 'Downtown Portland',
            address: 'SW 5th Avenue & Morrison Street',
            phone: '(503) 555-0101'
        },
        'pearl-district': {
            name: 'Pearl District',
            address: 'NW 10th Avenue & Couch Street',
            phone: '(503) 555-0102'
        },
        'hawthorne': {
            name: 'Hawthorne',
            address: 'SE Hawthorne Blvd & 20th Avenue',
            phone: '(503) 555-0103'
        },
        'alberta': {
            name: 'Alberta Arts District',
            address: 'NE Alberta Street & 15th Avenue',
            phone: '(503) 555-0104'
        },
        'sellwood': {
            name: 'Sellwood',
            address: 'SE 13th Avenue & Tacoma Street',
            phone: '(503) 555-0105'
        },
        'nob-hill': {
            name: 'Nob Hill',
            address: 'NW 23rd Avenue & Burnside Street',
            phone: '(503) 555-0106'
        },
        'belmont': {
            name: 'Belmont District',
            address: 'SE Belmont Street & 34th Avenue',
            phone: '(503) 555-0107'
        },
        'mississippi': {
            name: 'Mississippi District',
            address: 'N Mississippi Avenue & Fremont Street',
            phone: '(503) 555-0108'
        },
        'division': {
            name: 'Division Street',
            address: 'SE Division Street & 28th Avenue',
            phone: '(503) 555-0109'
        },
        'portland-state': {
            name: 'Portland State University',
            address: 'SW 4th Avenue & Mill Street',
            phone: '(503) 555-0110'
        }
    };
    
    const location = locationData[locationKey] || locationData['downtown'];
    
    // Update page elements
    const locationName = document.getElementById('location-name');
    const locationAddress = document.getElementById('location-address');
    const locationPhone = document.getElementById('location-phone');
    
    if (locationName) locationName.textContent = location.name + ' Location';
    if (locationAddress) locationAddress.textContent = location.address;
    if (locationPhone) locationPhone.textContent = location.phone;
    
    // Store current location for other functions
    window.currentLocation = location;
}

// Setup menu search functionality (for future implementation)
function setupMenuSearch() {
    const searchInput = document.querySelector('.search-input');
    
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleMenuSearch, 300));
    }
}

// Handle menu search
function handleMenuSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        const description = item.querySelector('.description').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            item.style.display = 'block';
            item.style.opacity = '1';
        } else {
            item.style.display = 'none';
            item.style.opacity = '0';
        }
    });
    
    // Show "no results" message if needed
    showNoResultsMessage(searchTerm);
}

// Show no results message
function showNoResultsMessage(searchTerm) {
    const visibleItems = document.querySelectorAll('.menu-item[style*="block"]').length;
    let noResultsEl = document.querySelector('.no-results-message');
    
    if (visibleItems === 0 && searchTerm) {
        if (!noResultsEl) {
            noResultsEl = document.createElement('div');
            noResultsEl.className = 'no-results-message';
            noResultsEl.innerHTML = `
                <div style="text-align: center; padding: 3rem; color: #666;">
                    <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                    <h3>No menu items found</h3>
                    <p>Try searching with different keywords or browse our categories above.</p>
                </div>
            `;
            document.querySelector('.menu-section .container').appendChild(noResultsEl);
        }
        noResultsEl.style.display = 'block';
    } else if (noResultsEl) {
        noResultsEl.style.display = 'none';
    }
}

// Setup call to action buttons
function setupCallToAction() {
    // These functions will be called by the CTA buttons
    window.callLocation = callLocation;
    window.getDirections = getDirections;
}

// Call location function
function callLocation() {
    if (window.currentLocation && window.currentLocation.phone) {
        const phone = window.currentLocation.phone.replace(/[^\d]/g, '');
        window.location.href = `tel:${phone}`;
    } else {
        alert('Phone number not available. Please visit our locations page for contact information.');
    }
}

// Get directions function
function getDirections() {
    if (window.currentLocation && window.currentLocation.address) {
        const address = encodeURIComponent(window.currentLocation.address + ', Portland, OR');
        const mapsUrl = `https://maps.google.com/?q=${address}`;
        window.open(mapsUrl, '_blank');
    } else {
        alert('Address not available. Please visit our locations page for more information.');
    }
}

// Setup image loading with placeholders
function setupImageLoading() {
    const menuImages = document.querySelectorAll('.menu-item-image img');
    
    menuImages.forEach(img => {
        // Set placeholder while loading
        img.style.backgroundColor = '#f0f0f0';
        
        // Handle loading error
        img.addEventListener('error', () => {
            img.style.backgroundColor = '#e0e0e0';
            img.style.display = 'none';
            
            // Create placeholder div
            const placeholder = document.createElement('div');
            placeholder.style.cssText = `
                width: 100%;
                height: 200px;
                background: linear-gradient(45deg, #f0f0f0, #e0e0e0);
                display: flex;
                align-items: center;
                justify-content: center;
                color: #999;
                font-size: 1rem;
                text-align: center;
            `;
            placeholder.innerHTML = '<i class="fas fa-utensils" style="font-size: 2rem;"></i><br>Image Coming Soon';
            
            img.parentNode.appendChild(placeholder);
        });
        
        // Handle successful load
        img.addEventListener('load', () => {
            img.style.backgroundColor = 'transparent';
        });
    });
}

// Dietary filter functionality (for future implementation)
function setupDietaryFilters() {
    const dietaryFilters = document.querySelectorAll('.dietary-filter');
    
    dietaryFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            filter.classList.toggle('active');
            applyDietaryFilters();
        });
    });
}

// Apply dietary filters
function applyDietaryFilters() {
    const activeFilters = Array.from(document.querySelectorAll('.dietary-filter.active'))
        .map(filter => filter.textContent.toLowerCase());
    
    const menuItems = document.querySelectorAll('.menu-item');
    
    if (activeFilters.length === 0) {
        // Show all items if no filters selected
        menuItems.forEach(item => {
            item.style.display = 'block';
        });
        return;
    }
    
    menuItems.forEach(item => {
        const dietaryInfo = item.querySelector('.dietary').textContent.toLowerCase();
        const shouldShow = activeFilters.some(filter => dietaryInfo.includes(filter));
        
        item.style.display = shouldShow ? 'block' : 'none';
    });
}

// Add to cart functionality (for future online ordering)
function addToCart(itemId, itemName, price) {
    // This will be implemented in Phase 2 with backend integration
    console.log(`Adding to cart: ${itemName} - $${price}`);
    
    // For now, show a notification
    showNotification(`${itemName} will be available for online ordering in Phase 2!`, 'info');
}

// Show nutritional information modal
function showNutritionInfo(itemId) {
    // This will be implemented with database integration
    const modal = document.getElementById('nutritionModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

// Print menu functionality
function printMenu() {
    window.print();
}

// Share menu functionality
function shareMenu() {
    if (navigator.share) {
        navigator.share({
            title: 'Dhaba Indian Kitchen Menu',
            text: 'Check out our delicious Indian food menu!',
            url: window.location.href
        });
    } else {
        // Fallback - copy to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            showNotification('Menu link copied to clipboard!', 'success');
        });
    }
}

// Menu item animation on scroll
function animateMenuItems() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    menuItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(animateMenuItems, 500);
});

// Utility function for debouncing
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Show notification (reuse from main script)
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 20px',
        borderRadius: '5px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10000',
        animation: 'slideInRight 0.3s ease',
        maxWidth: '300px'
    });
    
    switch (type) {
        case 'success':
            notification.style.backgroundColor = '#27ae60';
            break;
        case 'error':
            notification.style.backgroundColor = '#e74c3c';
            break;
        default:
            notification.style.backgroundColor = '#3498db';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}