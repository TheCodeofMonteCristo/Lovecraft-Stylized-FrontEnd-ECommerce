// navbar.js

// Function to add hover effect to navbar links
function addNavbarHoverEffect() {
    const navbarLinks = document.querySelectorAll('.navbar-links a');

    navbarLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#9cba9c';  // Accent color on hover
        });

        link.addEventListener('mouseout', () => {
            link.style.color = 'white';  // Reset to white when mouse leaves
        });
    });
}

// Call the function to initialize hover effect on page load
window.onload = addNavbarHoverEffect;
