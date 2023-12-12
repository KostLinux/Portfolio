window.addEventListener('load', function() {
  fetch('../experience.json')
    .then(response => response.json())
    .then(data => {
    const container = document.getElementById('Experience');
    const timeline = document.createElement('div');
    timeline.className = 'flex flex-col md:flex-row md:flex-wrap';

    data.forEach((item, index) => {
      const element = document.createElement('div');
      element.className = `w-full md:w-1/2 my-4 px-4 ${index % 2 === 0 ? 'md:pr-2' : 'md:pl-2'}`;
      element.setAttribute('x-data', '{ open: false }');
      element.innerHTML = `
        <div class="bg-white shadow rounded-lg p-6" @click="open = !open">
          <h3 class="text-xl font-bold mb-2">${item.title} at ${item.company}</h3>
          <p x-show="open" class="mb-2 transition duration-500">${item.duration}</p>
          <p x-show="open" class="transition duration-500">${item.description}</p>
        </div>
      `;
      timeline.appendChild(element);
    });
    container.appendChild(timeline);
  });
});