const API_URL = 'https://lsdiego2108.pythonanywhere.com/api/recetas';

async function cargarMenu() {
    try {
        const response = await fetch(API_URL);
        const recetas = await response.json();
        const grid = document.getElementById('menu-grid');

        recetas.forEach(receta => {
            const card = document.createElement('div');
            card.className = 'card';
            
            // Personalización visual por categoría
            const color = receta.categoria === 'Tamales' ? '#2e7d32' : '#d32f2f';
            
            card.innerHTML = `
                <span class="category-tag" style="color: ${color}">${receta.categoria}</span>
                <h3>${receta.nombre}</h3>
                <p>${receta.descripcion}</p>
            `;
            grid.appendChild(card);
        });
    } catch (error) {
        console.error("Error al obtener datos de la API:", error);
    }
}

cargarMenu();