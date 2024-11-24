const restaurants = [
    { name: 'Dhaba Indian Kitchen - 1', location: '1929 SW 4th Ave, Portland, OR 97201 (503) 446-6611', logo: 'images/restaurant-logos/logo1.png', menu: 'Menu for Restaurant 1' },
    { name: 'Dhaba Indian Kitchen - 2', location: '1929 SW 4th Ave, Portland, OR 97201 (503) 446-6611', logo: 'images/restaurant-logos/logo1.png', menu: 'Menu for Restaurant 2' },
    { name: 'Dhaba Indian Kitchen - 3', location: '1929 SW 4th Ave, Portland, OR 97201 (503) 446-6611', logo: 'images/restaurant-logos/logo1.png', menu: 'Menu for Restaurant 3' },
    { name: 'Dhaba Indian Kitchen - 4', location: '1929 SW 4th Ave, Portland, OR 97201 (503) 446-6611', logo: 'images/restaurant-logos/logo1.png', menu: 'Menu for Restaurant 4' },
    { name: 'Dhaba Indian Kitchen - 5', location: '1929 SW 4th Ave, Portland, OR 97201 (503) 446-6611', logo: 'images/restaurant-logos/logo1.png', menu: 'Menu for Restaurant 5' },
    { name: 'Dhaba Indian Kitchen - 6', location: '1929 SW 4th Ave, Portland, OR 97201 (503) 446-6611', logo: 'images/restaurant-logos/logo1.png', menu: 'Menu for Restaurant 6' },
    { name: 'Dhaba Indian Kitchen - 7', location: '1929 SW 4th Ave, Portland, OR 97201 (503) 446-6611', logo: 'images/restaurant-logos/logo1.png', menu: 'Menu for Restaurant 7' },
    { name: 'Dhaba Indian Kitchen - 8', location: '1929 SW 4th Ave, Portland, OR 97201 (503) 446-6611', logo: 'images/restaurant-logos/logo1.png', menu: 'Menu for Restaurant 8' },
    { name: 'Dhaba Indian Kitchen - 9', location: '1929 SW 4th Ave, Portland, OR 97201 (503) 446-6611', logo: 'images/restaurant-logos/logo1.png', menu: 'Menu for Restaurant 9' },
    { name: 'Dhaba Indian Kitchen - 10', location: '1929 SW 4th Ave, Portland, OR 97201 (503) 446-6611', logo: 'images/restaurant-logos/logo1.png', menu: 'Menu for Restaurant 10' }
];

function showMenu(index) {
    fetch('json/menu_data.json')
        .then(response => response.json())
        .then(data => {
            const restaurantData = data[index];
            if (!restaurantData || !Array.isArray(restaurantData.menu)) {
                console.error('Menu data is not an array:', restaurantData);
                return;
            }
            const menu = restaurantData.menu;
            const menuContainer = document.getElementById('menu-container');
            menuContainer.innerHTML = `
                <div class="menu">
                    <h2>${restaurants[index].name} Menu</h2>
                    <div class="menu-grid">
                        ${menu.map(item => `
                            <div class="menu-item">
                                <img src="${item.image_url}" alt="${item.name}">
                                <div>
                                    <strong>${item.name}</strong>
                                    <p>${item.description}</p>
                                    <p class="price">${item.price}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        })
        .catch(error => {
            console.error('Error fetching menu data:', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    const tabsContainer = document.getElementById('tabs');
    restaurants.forEach((restaurant, index) => {
        const button = document.createElement('button');
        button.className = 'tab';
        button.id = `tab-${index}`;
        button.onclick = () => showMenu(index);
        button.innerHTML = `
            <img src="${restaurant.logo}" alt="${restaurant.name} Logo">
            <div>
                <strong>${restaurant.name}</strong>
                <p>${restaurant.location}</p>
            </div>
        `;
        tabsContainer.appendChild(button);
    });

    // Load the first restaurant's menu by default
    showMenu(0);
});