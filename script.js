// Global variables to store timeout and tooltip element
let tooltipTimeout;
const tooltip1 = document.querySelector('.tooltip1');

// Function to handle slot hover
function handleSlotHover(event) {
    const slot = event.currentTarget; // Use currentTarget to refer to the slot element
    const tooltipText = slot.getAttribute('data-tooltip');

    // Clear any existing timeout to prevent premature hiding
    clearTimeout(tooltipTimeout);

    // Update tooltip content
    tooltip1.textContent = tooltipText;

    // Display tooltip
    tooltip1.style.opacity = '1'; // Ensure tooltip is fully visible
    tooltip1.style.display = 'block';
}

// Function to hide tooltip after delay
function hideTooltip() {
    tooltip1.style.opacity = '0';
    setTimeout(() => {
        tooltip1.style.display = 'none';
    }, 300); // Fade out transition time (adjust as needed)
}

// Event listeners for slot hover and hide tooltip
document.querySelectorAll('.slot').forEach(slot => {
    slot.addEventListener('mouseenter', handleSlotHover);
    slot.addEventListener('mouseleave', () => {
        // Set a timeout to fade out the tooltip after a delay
        tooltipTimeout = setTimeout(hideTooltip, 1000); // Adjust delay as needed (1000ms = 1 second)
    });
});

// Event listener to reset timeout on mouse re-entry
tooltip1.addEventListener('mouseenter', () => {
    clearTimeout(tooltipTimeout); // Clear the timeout to prevent tooltip from hiding
});

// Event listener to hide tooltip when mouse leaves hotbar
document.querySelector('.hotbar').addEventListener('mouseleave', hideTooltip);

// Function to navigate to a page
function navigateTo(page) {
    window.location.href = page;
}


