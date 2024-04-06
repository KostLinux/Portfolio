// techStack
window.addEventListener('load', function() {
  fetch('./config/techstack.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('techStack');

      // Create a div for the icons
      const div = document.createElement('div');
      div.className = 'techstack-grid gap-4'; // Use a responsive grid with a gap of 1rem

      data.forEach((item, index) => {
        // Create a div for each icon
        const iconDiv = document.createElement('div');
        iconDiv.className = 'text-center px-10 py-4'; // Center the icon and add padding

        // Create an img element and set its src to the icon URL
        const icon = document.createElement('img');
        icon.src = item.icon;
        icon.className = 'w-12 h-12 mx-auto'; // Use Tailwind CSS to set the width and height of the icon and center it

        // Append the icon to the div
        iconDiv.appendChild(icon);

        // Append the div to the main container
        div.appendChild(iconDiv);
      });

      // Append the div to the main container
      container.appendChild(div);
    })
    .catch(error => console.error(error));
});
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

// projects
window.addEventListener('load', function() {
    fetch('./config/projects.json')
      .then(response => response.json())
      .then(projects => {
        const container = document.querySelector('#projectCards');

        projects.forEach(function(project) {
            var projectCard = document.createElement('div');
            projectCard.className = 'w-full md:w-1/2 lg:w-1/3 p-4';

            var projectLink = document.createElement('a');
            projectLink.href = project.repo;
            projectLink.target = '_blank';

            var projectName = document.createElement('h3');
            projectName.className = 'font-bold';
            projectName.textContent = project.name;
            
            var projectImage = document.createElement('img');
            projectImage.className = 'h-48 object-cover';
            projectImage.src = project.picture;
            projectImage.alt = project.name;

            projectLink.appendChild(projectImage);
            projectLink.appendChild(projectName);
            projectCard.appendChild(projectLink);
            container.appendChild(projectCard);
        });
      })
      .catch(error => console.error(error));
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
});

// Navbar highlightning
// Define an array of sections
const sections = ['Main', 'About', 'Experience', 'Projects', 'TechStack', 'Consultancy', 'Contacts'];

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