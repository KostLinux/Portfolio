window.onload = function() {
    fetch('../professions.json')
    .then(response => response.json())
    .then(professions => {
        new Typed('#typed', {
        strings: professions,
        typeSpeed: 40,
        backSpeed: 40,
        loop: true,
        });
    });
};