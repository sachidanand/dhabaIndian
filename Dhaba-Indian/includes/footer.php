    <?php $menuLink = (isset($currentPage) && $currentPage === 'home') ? '#menu' : 'index.php#menu'; ?>
    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Dhaba Indian Kitchen</h3>
                    <p>Bringing authentic Indian flavors to Portland, one food truck at a time.</p>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.php#home">Home</a></li>
                        <li><a href="index.php#locations">Locations</a></li>
                        <li><a href="<?php echo $menuLink; ?>">Menu</a></li>
                        <li><a href="index.php#about">About</a></li>
                        <li><a href="index.php#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Follow Us</h4>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-yelp"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Dhaba Indian Kitchen. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- JavaScript with cache busting -->
    <?php
    // Cache busting version configuration
    if (!defined('ASSETS_VERSION')) {
        require_once __DIR__ . '/version.php';
    }
    ?>
    <script src="assets/js/script.js?v=<?php echo ASSETS_VERSION; ?>"></script>
    <?php if (isset($additionalJS)) echo $additionalJS; ?>
</body>
</html>
