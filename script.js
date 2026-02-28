const API_URL = 'https://lsdiego2108.pythonanywhere.com/api/recetas';

document.addEventListener('DOMContentLoaded', () => {
    fetch(API_URL)
        .then(response => response.json())
        .then(recetas => {
            const grid = document.getElementById('menu-grid');
            recetas.forEach(receta => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <span class="tag">${receta.categoria}</span>
                    <h3>${receta.nombre}</h3>
                    <p class="desc">${receta.descripcion}</p>
                `;
                grid.appendChild(card);
            });
        })
        .catch(err => console.error("Error cargando el menú:", err));
});