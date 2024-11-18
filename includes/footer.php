<footer>
    <div class="footer-content">
        <p>&copy; <?php echo date("Y"); ?> Restaurant Website. All rights reserved.</p>
        <ul class="footer-links">
            <li><a href="index.php">Home</a></li>
            <li><a href="about.php">About Us</a></li>
            <li><a href="contact.php">Contact Us</a></li>
        </ul>
    </div>
</footer>
<style>
    .footer-content {
        text-align: center;
        padding: 20px;
        background-color: #333;
        color: white;
    }
    .footer-links {
        list-style: none;
        padding: 0;
    }
    .footer-links li {
        display: inline;
        margin: 0 15px;
    }
    .footer-links a {
        color: white;
        text-decoration: none;
    }
    .footer-links a:hover {
        text-decoration: underline;
    }
</style>