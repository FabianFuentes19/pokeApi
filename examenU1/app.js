const btnPokemon = document.getElementById('btnPokemon');
const contenedor = document.getElementById('resultContainer');


const obtenerPokemon = async (event) => {
    event.preventDefault();
    const pokemonID = document.getElementById('inputIdPoke').value.trim();
    console.log(pokemonID);

    if(pokemonID === ""){
        alert("Por favor ingrese un ID");
        return
    } else if(pokemonID <1 || pokemonID>1025){
        alert("Por favor ingrese un ID valido entre 1 y 1025");
        return;
    }

    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}/`);
    const detalle = await respuesta.json();
    console.log(detalle);

    contenedor.innerHTML = "";


        const pokebola = document.createElement('div');

        pokebola.innerHTML=`<div class="card" style="width: 18rem;">
  <img src="${detalle.sprites.front_default}" class="card-img-top" alt="${detalle.name}">
  <div class="card-body">
    <h5 class="nombre">nombre: ${detalle.name}</h5>
    <p class="altura">altura:${detalle.height}</p>
        <p class="peso">peso: ${detalle.weight}</p>
    <p class="tipos">tipo: ${detalle.types.map(t => t.type.name).join(', ')}</p>

  </div>
</div>`;

        contenedor.appendChild(pokebola);

}



btnPokemon.addEventListener('click', obtenerPokemon);