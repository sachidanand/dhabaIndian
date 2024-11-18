<?php
include 'includes/header.php';
?>

<div class="contact-container">
    <h1>Contact Us</h1>
    <p>If you have any questions, comments, or feedback, please feel free to reach out to us!</p>
    
    <h2>Our Locations</h2>
    <ul>
        <li>Restaurant 1: Address, Phone Number</li>
        <li>Restaurant 2: Address, Phone Number</li>
        <li>Restaurant 3: Address, Phone Number</li>
        <li>Restaurant 4: Address, Phone Number</li>
        <li>Restaurant 5: Address, Phone Number</li>
        <li>Restaurant 6: Address, Phone Number</li>
        <li>Restaurant 7: Address, Phone Number</li>
        <li>Restaurant 8: Address, Phone Number</li>
        <li>Restaurant 9: Address, Phone Number</li>
        <li>Restaurant 10: Address, Phone Number</li>
    </ul>

    <h2>Contact Form</h2>
    <form action="submit_contact.php" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send Message</button>
    </form>
</div>

<?php
include 'includes/footer.php';
?>