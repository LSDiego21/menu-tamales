const URL_RECETAS = 'https://lsdiego2108.pythonanywhere.com/api/recetas';
let datosRecetas = [];

async function obtenerRecetas() {
    const res = await fetch(URL_RECETAS);
    datosRecetas = await res.json();
    const contenedor = document.getElementById('galeria');
    
    contenedor.innerHTML = datosRecetas.map(r => `
        <div class="card" onclick="mostrarReceta(${r.id})">
            <span style="font-size: 0.8em; color: #f1c40f;">${r.categoria}</span>
            <h2>${r.nombre}</h2>
            <p>${r.descripcion}</p>
        </div>
    `).join('');
}

function mostrarReceta(id) {
    const r = datosRecetas.find(x => x.id === id);
    document.getElementById('modal-name').innerText = r.nombre;
    document.getElementById('modal-ingredients').innerHTML = r.ingredientes.map(i => `<li>${i}</li>`).join('');
    document.getElementById('modal-steps').innerHTML = r.pasos.map(p => `<li>${p}</li>`).join('');
    
    // Muestra el recuadro emergente
    document.getElementById('recipe-modal').style.display = 'flex';
}

document.querySelector('.close-modal').onclick = () => {
    document.getElementById('recipe-modal').style.display = 'none';
};

window.onclick = (e) => {
    if(e.target == document.getElementById('recipe-modal')) {
        document.getElementById('recipe-modal').style.display = 'none';
    }
};

obtenerRecetas();