
// professions
window.addEventListener('load', function() {
    fetch('./config/professions.json')
    .then(response => response.json())
    .then(professions => {
        new Typed('#professions', {
        strings: professions,
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        });
    });
});

// welcomes
window.addEventListener('load', function() {
    fetch('./config/welcomes.json')
    .then(response => response.json())
    .then(welcomes => {
        new Typed('#welcomes', {
        strings: welcomes,
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        });
    });
});

// experience
window.addEventListener('load', function() {
    fetch('./config/experience.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('experienceContent');
        const timeline = document.createElement('ul');
        timeline.className = 'timeline';
  
        data.forEach((item, index) => {
          const element = document.createElement('li');
          element.className = 'timeline-item';
          element.style = `--accent-color:${item.color}`;
        
          const date = document.createElement('div');
          date.className = 'date';
          date.textContent = item.year;
          element.appendChild(date);
        
          const title = document.createElement('div');
          title.className = 'title';
          title.textContent = `${item.title} at ${item.company}`;
          element.appendChild(title);
        
          const descr = document.createElement('div');
          descr.className = 'descr';
          descr.textContent = item.duration;
          element.appendChild(descr);
        
          timeline.appendChild(element);
        });
  
        container.appendChild(timeline);
      });
});

// Navbar
document.addEventListener('DOMContentLoaded', function() {
  var menuButton = document.getElementById('menuButton');
  var menu = document.getElementById('menu');

  menuButton.addEventListener('click', function() {
      menu.style.transition = 'all 0.3s ease-in-out';
      menu.classList.toggle('max-h-0');
      menu.classList.toggle('max-h-screen');
      menu.classList.toggle('opacity-90');
  });

  // Close the menu when a navigation item is clicked
  const sections = ['Main', 'About', 'Experience', 'Skills'];
  sections.forEach(function(section) {
      const navItems = document.querySelectorAll(`.${section.toLowerCase()}-nav-item`);
      navItems.forEach(function(navItem) {
          navItem.addEventListener('click', function() {
              menu.classList.add('max-h-0');
              menu.classList.remove('max-h-screen');
              menu.classList.remove('opacity-90');
          });
      });
  });
});

// Navbar highlightning
// Define an array of sections
const sections = ['Main', 'About', 'Experience', 'Skills'];

// Add the scroll event listener
document.addEventListener('scroll', function() {
    // Iterate over each section
    sections.forEach(function(section) {
        // Get the section element and the corresponding navigation items
        const sectionElement = document.getElementById(section);
        const navItems = document.querySelectorAll(`.${section.toLowerCase()}-nav-item`);

        // Add or remove the 'active' class based on whether the section is in the viewport
        navItems.forEach(function(navItem) {
            if (isInViewport(sectionElement)) {
                navItem.classList.add('active');
            } else {
                navItem.classList.remove('active');
            }
        });
    });
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const buffer = 200; // Adjust this value as needed
    return (
        rect.top <= buffer &&
        rect.top >= -buffer
    );
}

window.addEventListener('load', function() {
  setTimeout(function() {
      document.getElementById('Loader').classList.add('hide-loader');
  }, 750);
});