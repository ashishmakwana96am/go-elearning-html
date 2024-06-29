// Open popup function
function openPopup(popupId) {
    document.getElementById('popupOverlay').style.display = 'block';
    document.getElementById(popupId).style.display = 'block';
}

// Close popup function
function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
    document.querySelectorAll('.popup').forEach(popup => {
        popup.style.display = 'none';
    });
}

// Event listeners for opening popups
document.querySelectorAll('.openPopup').forEach(button => {
    button.addEventListener('click', function() {
        const popupId = this.getAttribute('data-popup');
        openPopup(popupId);
    });
});

// Event listeners for closing popups
document.querySelectorAll('.closePopup').forEach(button => {
    button.addEventListener('click', closePopup);
});

// Optional: Close popup when clicking outside of it
document.getElementById('popupOverlay').addEventListener('click', closePopup);
