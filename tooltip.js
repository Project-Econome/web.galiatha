document.querySelectorAll('.inventory-slot').forEach(slot => {
    slot.addEventListener('mouseover', function() {
        const tooltip2 = document.getElementById('tooltip2');
        const heading = this.getAttribute('data-heading');
        const description = this.getAttribute('data-description');
        tooltip2.innerHTML = `<strong>${heading}</strong><br>${description}`;
        tooltip2.style.display = 'block';
        tooltip2.style.left = `${this.getBoundingClientRect().left + window.scrollX}px`;
        tooltip2.style.top = `${this.getBoundingClientRect().top + window.scrollY - tooltip2.offsetHeight}px`;
    });
    
    slot.addEventListener('mouseout', function() {
        const tooltip = document.getElementById('tooltip2');
        tooltip.style.display = 'none';
    });
});
