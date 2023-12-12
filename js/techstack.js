window.onload = function() {
    fetch('../techstack.json')
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
          icon.className = 'w-12 h-12'; // Set the width and height of the icon

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
};