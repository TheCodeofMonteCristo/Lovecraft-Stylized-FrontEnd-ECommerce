// app.js

// Dummy city data (pretend API responses)
import { cityData } from './cityData.js';

// Function to render city cards on the page
function renderCityCards() {
    const container = document.querySelector('.container');

    // Loop through the city data and create a card for each city
    cityData.forEach(city => {
        const cityItem = document.createElement('div');
        cityItem.classList.add('city-item');
        
        cityItem.innerHTML = `
            <img src="assets/${city.image}" alt="${city.name}" />
            <h2>${city.name}</h2>
            <p>Price: ${city.price} intergalactic credits</p>
            <button class="purchase-button" data-id="${city.id}">Buy City</button>
        `;
        
        // Append the city card to the container
        container.appendChild(cityItem);
    });

    // Add event listeners to purchase buttons
    const buttons = document.querySelectorAll('.purchase-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const cityId = button.dataset.id;
            handlePurchase(cityId);
        });
    });
}

// Handle city purchase (dummy function for now)
function handlePurchase(cityId) {
    alert(`You have purchased the city with ID: ${cityId}`);
}

// Call the function to render cities on page load
window.onload = renderCityCards;
