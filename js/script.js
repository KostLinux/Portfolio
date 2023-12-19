// techStack
window.addEventListener('load', function() {
    fetch('../config/techstack.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('TechStack');
  
        // Create a single table for the icons
        const table = document.createElement('table');
        table.className = 'mx-auto text-center'; // Center the table
  
        const iconRow = document.createElement('tr');
  
        data.forEach(item => {
          // Create a cell for each icon
          const iconCell = document.createElement('td');
          iconCell.className = 'px-2 py-1'; // Add some padding to the cells
  
          // Create an img element and set its src to the icon URL
          const icon = document.createElement('img');
          icon.src = item.icon;
          icon.style.width = '48px'; // Set the width of the icon
          icon.style.height = '48px'; // Set the height of the icon
  
          // Append the icon to the cell
          iconCell.appendChild(icon);
  
          // Append the cell to the icon row
          iconRow.appendChild(iconCell);
        });
  
        // Append the row to the table
        table.appendChild(iconRow);
  
        // Append the table to the main container
        container.appendChild(table);
      })
      .catch(error => console.error(error));
});

// professions
window.addEventListener('load', function() {
    fetch('../config/professions.json')
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
    fetch('../config/welcomes.json')
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
    fetch('../config/experience.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('Experience');
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
    fetch('../config/projects.json')
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
            projectImage.className = 'w-96 h-96 object-contain';
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