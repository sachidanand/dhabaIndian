import requests
from bs4 import BeautifulSoup
import json

# URL of the menu page
url = "https://dhabaindiankitchenpsu.com/menu"

try:
    # Send a GET request to fetch the HTML content
    response = requests.get(url)
    response.raise_for_status()  # Raise an exception for HTTP errors

    # Parse the HTML content
    soup = BeautifulSoup(response.content, 'html.parser')

    # Find the section containing the menu items
    menu_items = soup.find_all('div', class_='menu-row')  # Adjust class based on site's structure

    if not menu_items:
        print("No menu items found. Please check the class name and HTML structure.")
    else:
        menu_data = []

        for item in menu_items:
            # Extract item name
            name = item.find('h5', class_='item-name').text.strip() if item.find('h5', class_='item-name') else "No name"
            print(f"Name: {name}")

            # Extract description
            description = item.find('div', class_='item-description').text.strip() if item.find('div', class_='item-description') else "No description"
            print(f"Description: {description}")

            # Extract image URL
            img_tag = item.find('img')
            image_url = img_tag['src'] if img_tag else "No image"
            print(f"Image URL: {image_url}")

            menu_data.append({
                'name': name,
                'description': description,
                'image_url': image_url
            })

        # Save to a JSON file (optional)
        with open('menu_data.json', 'w') as json_file:
            json.dump(menu_data, json_file, indent=4)

        print("Menu data scraped successfully!")

except requests.exceptions.RequestException as e:
    print(f"Failed to fetch the page. Error: {e}")