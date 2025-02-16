document.addEventListener('DOMContentLoaded', function() {
    const copyrightElement = document.getElementById('copyright');
    const currentYear = new Date().getFullYear();
    copyrightElement.innerHTML = `&copy; ${currentYear} Christofher Koest`;
});