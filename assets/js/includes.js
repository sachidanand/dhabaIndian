/**
 * Include Manager - Loads header and footer dynamically
 */

// Load header
async function loadHeader() {
    try {
        const response = await fetch('includes/header.html');
        const html = await response.text();
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        
        // Extract and insert head content
        const headContent = tempDiv.querySelector('head');
        if (headContent) {
            document.head.innerHTML += headContent.innerHTML;
        }
        
        // Insert header HTML at the beginning of body
        const header = tempDiv.querySelector('header');
        if (header) {
            document.body.insertBefore(header, document.body.firstChild);
        }
        
        // Initialize mobile menu after header is loaded
        initializeMobileMenu();
    } catch (error) {
        console.error('Error loading header:', error);
    }
}

// Load footer
async function loadFooter() {
    try {
        const response = await fetch('includes/footer.html');
        const html = await response.text();
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        
        // Insert footer HTML at the end of body
        const footer = tempDiv.querySelector('footer');
        if (footer) {
            document.body.appendChild(footer);
        }
        
        // Insert scripts
        const scripts = tempDiv.querySelectorAll('script');
        scripts.forEach(script => {
            const newScript = document.createElement('script');
            if (script.src) {
                newScript.src = script.src;
            } else {
                newScript.textContent = script.textContent;
            }
            document.body.appendChild(newScript);
        });
    } catch (error) {
        console.error('Error loading footer:', error);
    }
}

// Initialize mobile menu functionality
function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Set active page in navigation
function setActivePage(pageName) {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            const navLinks = document.querySelectorAll('.nav-link[data-page]');
            navLinks.forEach(link => {
                if (link.getAttribute('data-page') === pageName) {
                    link.classList.add('active');
                }
            });
        }, 100);
    });
}

// Initialize includes when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        loadHeader();
        loadFooter();
    });
} else {
    loadHeader();
    loadFooter();
}
