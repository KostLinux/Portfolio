document.addEventListener('DOMContentLoaded', function() {
    // Ensure Calendly is loaded
    if (typeof Calendly !== 'undefined') {
        console.log('Calendly widget loaded successfully');
    } else {
        console.warn('Calendly widget failed to load');
    }
});