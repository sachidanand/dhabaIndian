function showMenu(index, name) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'includes/menu.php?restaurant=' + index + '&name=' + encodeURIComponent(name), true);
    xhr.onload = function() {
        if (this.status === 200) {
            document.getElementById('menu-container').innerHTML = this.responseText;
            highlightTab(index);
        }
    };
    xhr.send();
}

function highlightTab(index) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active-tab'));
    document.getElementById('tab-' + index).classList.add('active-tab');
}

// Load the first restaurant's menu by default
document.addEventListener('DOMContentLoaded', function() {
    showMenu(0, 'Dhaba Indian Kitchen - 1');
});