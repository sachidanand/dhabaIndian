<?php
$currentPage = 'home';
$pageTitle = 'Dhaba Indian Kitchen - Authentic Indian Food Trucks in Portland';
include 'includes/header.php';
?>

<!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-visual" id="heroSlider">
            <div class="hero-slide is-active" data-index="0">
                <img src="assets/images/hero.jpeg" alt="Signature Indian dishes presented elegantly" />
            </div>
            <div class="hero-slide" data-index="1">
                <img src="assets/images/Food Truck.jpeg" alt="Dhaba Indian Kitchen food truck serving guests" />
            </div>
            <div class="hero-slide" data-index="2">
                <img src="assets/images/Truck-2.jpeg" alt="Modern food truck ambiance in Portland" />
            </div>
            <div class="hero-slide" data-index="3">
                <img src="assets/images/poster.jpeg" alt="Colorful spread of Indian curries" />
            </div>
            <div class="hero-overlay"></div>
            <div class="hero-dots" id="heroDots" aria-label="Hero image carousel navigation"></div>
        </div>
        <div class="hero-content">
            <p class="hero-kicker">Portland's Favorite Indian Street Food Collective</p>
            <h1 class="hero-headline">Crafted with Spice, Served with Soul.</h1>
            <p class="hero-subheadline">Five trucks. Endless possibilities. Discover chef-driven Indian classics reinvented for today, with bold flavors, seasonal specials, and the warmth of dhaba hospitality.</p>
            <div class="hero-buttons">
                <button class="btn btn-primary" onclick="scrollToLocations()">Explore Locations</button>
            </div>
            <div class="hero-highlights">
                <div class="highlight-card">
                    <span class="highlight-number">10</span>
                    <span class="highlight-label">Locations</span>
                </div>
                <div class="highlight-card">
                    <span class="highlight-number">30+</span>
                    <span class="highlight-label">Chef Specials</span>
                </div>
                <div class="highlight-card">
                    <span class="highlight-number">100%</span>
                    <span class="highlight-label">Handmade Daily</span>
                </div>
            </div>
           
        </div>
    </section>

    <!-- Location Tabs Section -->
    <section id="locations" class="locations-section">
        <div class="container">
            <h2 class="section-title">Our Locations</h2>
            <p class="section-subtitle">Choose your nearest Dhaba Indian Kitchen location</p>
            
            <!-- Location Tabs -->
            <div class="location-tabs">
                <div class="tab-buttons">
                    <button class="tab-btn active" data-location="psu">PSU Campus</button>
                    <button class="tab-btn" data-location="downtown">Downtown Portland</button>
                    <button class="tab-btn" data-location="hillsboro-century">Hillsboro Century</button>
                    <button class="tab-btn" data-location="hillsboro-main">Hillsboro Baseline</button>
                </div>

                <!-- Location Content -->
                <div class="tab-content">
                    <div class="location-card active" id="psu">
                        <div class="location-info">
                            <h3>PSU Campus</h3>
                            <p><i class="fas fa-map-marker-alt"></i> 1929 SW 4th Ave, Portland, OR 97201</p>
                            <div class="location-details">
                                <div class="detail">
                                    <i class="fas fa-clock"></i>
                                    <div>
                                        <strong>Hours:</strong><br>
                                        Mon-Fri: 10:30 AM - 7:00 PM<br>
                                        Sat-Sun: 12:00 PM - 8:00 PM
                                    </div>
                                </div>
                                <div class="detail">
                                    <i class="fas fa-phone"></i>
                                    <div>
                                        <strong>Phone:</strong><br>
                                        503-752-8592
                                    </div>
                                </div>
                            </div>
                            <button
                                type="button"
                                class="btn btn-primary menu-btn"
                                data-menu-toggle="true"
                                data-menu-toggle-mode="toggle"
                                data-menu-open-label="View Menu"
                                data-menu-close-label="Hide Menu"
                                data-location-name="PSU Campus"
                                data-location-address="1929 SW 4th Ave, Portland, OR 97201"
                                data-location-phone="503-752-8592"
                            >View Menu</button>
                        </div>
                        <div class="location-image">
                            <img src="assets/images/Food Truck.jpeg" alt="PSU Campus Food Truck" />
                        </div>
                    </div>

                    <div class="location-card" id="downtown">
                        <div class="location-info">
                            <h3>Downtown Portland</h3>
                            <p><i class="fas fa-map-marker-alt"></i> 340 SW 5th Ave, Portland, OR 97204</p>
                            <div class="location-details">
                                <div class="detail">
                                    <i class="fas fa-clock"></i>
                                    <div>
                                        <strong>Hours:</strong><br>
                                        Mon-Fri: 11:00 AM - 8:00 PM<br>
                                        Sat-Sun: 12:00 PM - 9:00 PM
                                    </div>
                                </div>
                                <div class="detail">
                                    <i class="fas fa-phone"></i>
                                    <div>
                                        <strong>Phone:</strong><br>
                                        971-246-1393
                                    </div>
                                </div>
                            </div>
                            <button
                                type="button"
                                class="btn btn-primary menu-btn"
                                data-menu-toggle="true"
                                data-menu-toggle-mode="toggle"
                                data-menu-open-label="View Menu"
                                data-menu-close-label="Hide Menu"
                                data-location-name="Downtown Portland"
                                data-location-address="340 SW 5th Ave, Portland, OR 97204"
                                data-location-phone="971-246-1393"
                            >View Menu</button>
                        </div>
                        <div class="location-image">
                            <img src="assets/images/Truck-2.jpeg" alt="Downtown Food Truck" />
                        </div>
                    </div>

                    <div class="location-card" id="hillsboro-century">
                        <div class="location-info">
                            <h3>Hillsboro Century</h3>
                            <p><i class="fas fa-map-marker-alt"></i> 2635 SE Century Blvd, Hillsboro, OR 97124</p>
                            <div class="location-details">
                                <div class="detail">
                                    <i class="fas fa-clock"></i>
                                    <div>
                                        <strong>Hours:</strong><br>
                                        Mon-Fri: 11:30 AM - 8:00 PM<br>
                                        Sat-Sun: 12:00 PM - 9:30 PM
                                    </div>
                                </div>
                                <div class="detail">
                                    <i class="fas fa-phone"></i>
                                    <div>
                                        <strong>Phone:</strong><br>
                                        503-884-1135
                                    </div>
                                </div>
                            </div>
                            <button
                                type="button"
                                class="btn btn-primary menu-btn"
                                data-menu-toggle="true"
                                data-menu-toggle-mode="toggle"
                                data-menu-open-label="View Menu"
                                data-menu-close-label="Hide Menu"
                                data-location-name="Hillsboro Century"
                                data-location-address="2635 SE Century Blvd, Hillsboro, OR 97124"
                                data-location-phone="503-884-1135"
                            >View Menu</button>
                        </div>
                        <div class="location-image">
                            <img src="assets/images/hero.jpeg" alt="Hillsboro Century Food Truck" />
                        </div>
                    </div>

                    <div class="location-card" id="hillsboro-main">
                        <div class="location-info">
                            <h3>Hillsboro Baseline</h3>
                            <p><i class="fas fa-map-marker-alt"></i> 320 SE Baseline Street, Hillsboro, OR 97123</p>
                            <div class="location-details">
                                <div class="detail">
                                    <i class="fas fa-clock"></i>
                                    <div>
                                        <strong>Hours:</strong><br>
                                        Mon-Fri: 11:00 AM - 8:30 PM<br>
                                        Sat-Sun: 11:30 AM - 9:00 PM
                                    </div>
                                </div>
                                <div class="detail">
                                    <i class="fas fa-phone"></i>
                                    <div>
                                        <strong>Phone:</strong><br>
                                        971-492-4124
                                    </div>
                                </div>
                            </div>
                            <button
                                type="button"
                                class="btn btn-primary menu-btn"
                                data-menu-toggle="true"
                                data-menu-toggle-mode="toggle"
                                data-menu-open-label="View Menu"
                                data-menu-close-label="Hide Menu"
                                data-location-name="Hillsboro Baseline"
                                data-location-address="320 SE Baseline Street, Hillsboro, OR 97123"
                                data-location-phone="971-492-4124"
                            >View Menu</button>
                        </div>
                        <div class="location-image">
                            <img src="assets/images/poster.jpeg" alt="Hillsboro Baseline Food Truck" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Menu Section (Toggleable) -->
    <section id="menu" class="menu-section-wrapper collapsed" aria-hidden="true" data-menu-state="collapsed">
        <?php include 'includes/menu-content.php'; ?>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section">
        <div class="container">
            <div class="about-content">
                <h2>About Dhaba Indian Kitchen</h2>
                <div class="about-image">
                    <img src="assets/images/chef.png" alt="Chef Balbir Singh Gusai cooking authentic Indian food" />
                </div>
                <div class="about-text">
                    <p>Dhaba Indian Kitchen is proudly led by Sr. Chef Balbir Singh Gusai, who brings over 30 years of culinary expertise in multi-regional Indian cuisine from around the world. Since establishing his vision in Portland in 2015, Chef Gusai has been dedicated to serving the highest quality Indian food through the authentic Dhaba Indian Kitchen concept.</p>
                    <p>Since 2015, Dhaba Indian Kitchen has been serving authentic Indian cuisine across Portland through our fleet of food trucks. Our name "Dhaba" comes from the traditional roadside restaurants found throughout India, known for their hearty, flavorful food and warm hospitality.</p>
                    <p>We take pride in using traditional recipes passed down through generations, combined with fresh, locally-sourced ingredients. Each dish is prepared with love and authentic spices imported directly from India, under the expert guidance of Chef Gusai's decades of experience.</p>
                </div>
                <div class="features">
                    <div class="feature">
                        <i class="fas fa-leaf"></i>
                        <h4>Fresh Ingredients</h4>
                        <p>Locally sourced, organic when possible</p>
                    </div>
                    <div class="feature">
                        <i class="fas fa-fire"></i>
                        <h4>Authentic Spices</h4>
                        <p>Imported directly from India</p>
                    </div>
                    <div class="feature">
                        <i class="fas fa-heart"></i>
                        <h4>Made with Love</h4>
                        <p>Traditional family recipes</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
        <div class="container">
            <h2 class="section-title">Get in Touch</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <h3>Contact Information</h3>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <div>
                            <strong>Email:</strong>
                            <p>info@dhabaindianpdx.com</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <div>
                            <strong>Main Office:</strong>
                            <p>(503) 555-0100</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <strong>Headquarters:</strong>
                            <p>Portland, Oregon</p>
                        </div>
                    </div>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-yelp"></i></a>
                    </div>
                </div>
                <div class="contact-form">
                    <h3>Send us a Message</h3>
                    <form id="contactForm">
                        <div class="form-group">
                            <input type="text" id="name" name="name" placeholder="Your Name" required>
                        </div>
                        <div class="form-group">
                            <input type="email" id="email" name="email" placeholder="Your Email" required>
                        </div>
                        <div class="form-group">
                            <input type="tel" id="phone" name="phone" placeholder="Your Phone (Optional)">
                        </div>
                        <div class="form-group">
                            <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

<?php include 'includes/footer.php'; ?>
