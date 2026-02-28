const URL = 'https://lsdiego2108.pythonanywhere.com/api/recetas';
let data = [];

async function load() {
    const res = await fetch(URL);
    data = await res.json();
    const grid = document.getElementById('grid');
    grid.innerHTML = data.map(r => `
        <div class="card" onclick="openModal(${r.id})">
            <small>${r.categoria}</small>
            <h2>${r.nombre}</h2>
            <p>${r.descripcion}</p>
        </div>
    `).join('');
}

function openModal(id) {
    const r = data.find(x => x.id === id);
    document.getElementById('modal-title').innerText = r.nombre;
    document.getElementById('modal-ingredients').innerHTML = r.ingredientes.map(i => `<li>${i}</li>`).join('');
    document.getElementById('modal-steps').innerHTML = r.pasos.map(p => `<li>${p}</li>`).join('');
    document.getElementById('recipe-modal').style.display = 'block';
}

document.querySelector('.close-btn').onclick = () => document.getElementById('recipe-modal').style.display = 'none';
window.onclick = (e) => { if(e.target == document.getElementById('recipe-modal')) document.getElementById('recipe-modal').style.display = 'none'; }
load();