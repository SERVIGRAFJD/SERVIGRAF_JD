
document.getElementById('themeBtn').onclick=()=>document.body.classList.toggle('dark');

function render(arr){
const c=document.getElementById('productos');

c.innerHTML=arr.map(p=>{
const titulo = p.nombre || p.categoria || 'Producto';

return `
<div class="card">
<img class="producto-img" src="${p.imagen}" alt="${titulo}">
<h3>${titulo}</h3>
<a class="btn" target="_blank" href="https://wa.me/51968205692?text=Hola,%20quiero%20cotizar%20${encodeURIComponent(titulo)}">Cotizar</a>
</div>`;
}).join('');
}

render(productos);

document.getElementById('search').addEventListener('input',e=>{
const t=e.target.value.toLowerCase();
render(productos.filter(p=>
(p.nombre || '').toLowerCase().includes(t) ||
(p.categoria || '').toLowerCase().includes(t)
));
});
