<?php
include 'includes/header.php';

// Array of restaurants
$restaurants = [
    ['name' => 'Dhaba Indian Kitchen - 1', 'location' => '1929 SW 4th Ave, Portland, OR 97201 (503) 446-6611', 'logo' => 'images/restaurant-logos/logo1.png', 'menu' => 'Menu for Restaurant 1'],
    ['name' => 'Dhaba Indian Kitchen - 2', 'location' => '1929 SW 4th Ave, Portland, OR 97201 (503) 446-6611', 'logo' => 'images/restaurant-logos/logo1.png', 'menu' => 'Menu for Restaurant 2'],
    ['name' => 'Dhaba Indian Kitchen - 3', 'location' => '1929 SW 4th Ave, Portland, OR 97201 (503) 446-6611', 'logo' => 'images/restaurant-logos/logo1.png', 'menu' => 'Menu for Restaurant 3'],
    ['name' => 'Dhaba Indian Kitchen - 4', 'location' => '1929 SW 4th Ave, Portland, OR 97201 (503) 446-6611', 'logo' => 'images/restaurant-logos/logo1.png', 'menu' => 'Menu for Restaurant 4'],
    ['name' => 'Dhaba Indian Kitchen - 5', 'location' => '1929 SW 4th Ave, Portland, OR 97201 (503) 446-6611', 'logo' => 'images/restaurant-logos/logo1.png', 'menu' => 'Menu for Restaurant 5'],
    ['name' => 'Dhaba Indian Kitchen - 6', 'location' => '1929 SW 4th Ave, Portland, OR 97201 (503) 446-6611', 'logo' => 'images/restaurant-logos/logo1.png', 'menu' => 'Menu for Restaurant 6'],
    ['name' => 'Dhaba Indian Kitchen - 7', 'location' => '1929 SW 4th Ave, Portland, OR 97201 (503) 446-6611', 'logo' => 'images/restaurant-logos/logo1.png', 'menu' => 'Menu for Restaurant 7'],
    ['name' => 'Dhaba Indian Kitchen - 8', 'location' => '1929 SW 4th Ave, Portland, OR 97201 (503) 446-6611', 'logo' => 'images/restaurant-logos/logo1.png', 'menu' => 'Menu for Restaurant 8'],
    ['name' => 'Dhaba Indian Kitchen - 9', 'location' => '1929 SW 4th Ave, Portland, OR 97201 (503) 446-6611', 'logo' => 'images/restaurant-logos/logo1.png', 'menu' => 'Menu for Restaurant 9'],
    ['name' => 'Dhaba Indian Kitchen - 10', 'location' => '1929 SW 4th Ave, Portland, OR 97201 (503) 446-6611', 'logo' => 'images/restaurant-logos/logo1.png', 'menu' => 'Menu for Restaurant 10'],
];
?>

<!DOCTYPE html>
<html lang="en">
<body>
    <div class="tabs-background">
        <div class="overlay"></div>
        <div class="container">
            <div class="tabs">
                <?php foreach ($restaurants as $index => $restaurant): ?>
                    <button class="tab" id="tab-<?php echo $index; ?>" onclick="showMenu(<?php echo $index; ?>, '<?php echo $restaurant['name']; ?>')">
                        <img src="<?php echo $restaurant['logo']; ?>" alt="<?php echo $restaurant['name']; ?> Logo">
                        <div>
                            <strong><?php echo $restaurant['name']; ?></strong>
                            <p><?php echo $restaurant['location']; ?></p>
                        </div>
                    </button>
                <?php endforeach; ?>
            </div>
        </div>
    </div>

    <div class="container">
        <div id="menu-container">
            <?php include 'includes/menu.php'; ?>
        </div>
    </div>

    <?php include 'includes/footer.php'; ?>

    <script src="js/scripts.js"></script>
</body>
</html>