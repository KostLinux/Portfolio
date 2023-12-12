window.addEventListener('load', function() {
  fetch('../experience.json')
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