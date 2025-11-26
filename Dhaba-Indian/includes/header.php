<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo isset($pageTitle) ? $pageTitle : 'Dhaba Indian Kitchen - Authentic Indian Food Trucks in Portland'; ?></title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

    <?php
    // Cache busting version configuration
    require_once __DIR__ . '/version.php';
    ?>

    <!-- Stylesheets with cache busting -->
    <link rel="stylesheet" href="assets/css/style.css?v=<?php echo ASSETS_VERSION; ?>">
    <link rel="stylesheet" href="assets/css/menu-simple.css?v=<?php echo ASSETS_VERSION; ?>">
    <link rel="stylesheet" href="assets/css/responsive.css?v=<?php echo ASSETS_VERSION; ?>">
    <?php if (isset($additionalCSS)) echo $additionalCSS; ?>
</head>
<body>
    <?php $isHomePage = isset($currentPage) && $currentPage === 'home'; ?>
    <!-- Header -->
    <header class="header">
        <nav class="navbar">
            <div class="nav-container">
                <a href="index.php" class="logo" style="text-decoration: none; color: inherit; cursor: pointer;">
                    <div class="logo-emblem">
                        <img src="assets/images/logo.jpeg" alt="Dhaba Indian Kitchen Logo" />
                    </div>
                    <div class="logo-text">
                        <h1>Dhaba Indian Kitchen</h1>
                        <p>Authentic Indian Flavors</p>
                    </div>
                </a>

                <div class="nav-right">
                    <div class="nav-cta">
                        <div class="nav-contact">
                            <span class="nav-contact-label">Call to Order</span>
                            <a href="tel:5037528592" class="nav-contact-link">503-752-8592</a>
                        </div>
                        <a href="index.php#locations" class="btn btn-primary nav-order-btn">Order Now</a>
                    </div>

                    <ul class="nav-menu">
                        <li><a href="index.php#home" class="nav-link <?php echo ($currentPage === 'home') ? 'active' : ''; ?>">Home</a></li>
                        <li><a href="index.php#locations" class="nav-link">Locations</a></li>
                        <li>
                            <a
                                href="<?php echo $isHomePage ? '#locations' : 'index.php#locations'; ?>"
                                class="nav-link"
                                data-scroll-target="locations"
                            >Menu</a>
                        </li>
                        <li><a href="index.php#about" class="nav-link">About</a></li>
                        <li><a href="index.php#contact" class="nav-link">Contact</a></li>
                    </ul>

                    <div class="hamburger" aria-label="Toggle navigation" role="button" tabindex="0">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                </div>
            </div>
        </nav>
    </header>
