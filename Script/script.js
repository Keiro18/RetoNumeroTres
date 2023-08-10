import datos from '../Data/datos.json'assert { type: "json" };
const comenzar = document.getElementById('comenzar');
const result = document.getElementById('personaje');
// const nuevoPersonaje = document.getElementById('NuevoPersonaje');
const container = document.getElementById("container")

const mostrarPersonaje = (personaje) => {
    result.innerHTML = ""
    result.innerHTML = `<div class="Nuevopersonaje">
    <img src="${personaje.foto}"
                alt="">
    <h2>${personaje.nombre}</h2>
    <span>${personaje.casa}</span><br>
    <button id="NuevoPersonaje">Nuevo personaje</button>
</div>
    `

}

comenzar.addEventListener('click', (e) => {
    const numeroAleatorio = Math.floor(Math.random() * datos.Personajes.length);
    mostrarPersonaje(datos.Personajes[numeroAleatorio]);
    comenzar.style.display = "none"
});

container.addEventListener('click', (e) => {
    if (e.target.id === "NuevoPersonaje") {
        const numeroAleatorio = Math.floor(Math.random() * datos.Personajes.length);
        mostrarPersonaje(datos.Personajes[numeroAleatorio]);
    }
})

// nuevoPersonaje.addEventListener('click', (e) => {
//     console.log('click');
//     const numeroAleatorio = Math.floor(Math.random() * datos.Personajes.length);
//     mostrarPersonaje(datos.Personajes[numeroAleatorio]);
// });


