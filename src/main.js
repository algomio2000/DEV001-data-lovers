
import data from './data/pokemon/pokemon.js';
import { searchFilter, ordenAZPokemon, ordenZAPokemon,filtroPorTipo  } from './data.js';

// ---- Constantes declaradas ----
const infoPokemon = data.pokemon;
const cardInfo = document.getElementById("cont-card");
//let modal = document.getElementById('myModal');
//let btn = getElementById("MyBtn");
//let span = document.getElementsByClassName("close")[0];

/* --- MODAL ---- 
const detalles = (infoPokemon) => {

  infoPokemon.forEach((persona) => {
    modal.innerHTML += modalTemplate(persona.img, persona.num, persona.name)
  
  });

  function modalTemplate(img, num, name) {

    const modalHTML = `
    <div class="cont.card" id=${num}>
    <div class="card" id="card">
    <img class="img" src=${img} </img><div>;
    <p><class= "namepokemon">${name} </p>
    <p><class= "numpokemon">${num}</p><br>
    </div>
    <button id="myBtn">Ver más</button>
    </div>
    </div>
    `;

  modal.click = function () {
    modal.style.display = "block";
    modalTemplate.innerHTML="";
  }
  span.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  return modalHTML;
}}*/


// --- Mostrando tarjetas ---
infoPokemon.forEach((persona) => {
  cardInfo.innerHTML += cardTemplate(persona.img, persona.num, persona.name, persona.type)

});

function cardTemplate(img, num, name, type) {

  const pokemonHTML = `
  <div class="cont.card" id=${num}>
  <div class="card" id="card">
  <img class="img" src=${img} </img><div> 
  <p><class= "namepokemon">${name} </p>
  <p><class= "numpokemon">${num}</p><br>
  <p><class= "numpokemon">${type}</p><br>
  </div>
  </div>
  </div>
  `;

  return pokemonHTML
}

// --- Botón regresar a Home

const home = document.getElementById("home");
home.addEventListener("click", () => {
  window.location.reload();
});

// --- Boton Scroll ---
const btn_scrolltop = document.getElementById("btn_scrolltop")
btn_scrolltop.addEventListener('click', () => {
  window.scrollTo(0, 0)
})

window.onscroll = () => {
  add_btn_scrolltop()
}

const add_btn_scrolltop = () => {
  if (window.scrollY < 300) {
    btn_scrolltop.classList.remove("btn-scrolltop-on")
  } else {
    btn_scrolltop.classList.add("btn-scrolltop-on")
  }
}

// ---- Buscar por nombre
const search = document.getElementById("search");
search.addEventListener("keyup", () => {
  const text = search.value;
  let busca = searchFilter(infoPokemon, text)
  cardInfo.innerHTML = " "
  busca.forEach((nombre) => {

    cardInfo.innerHTML += cardTemplate(nombre.img, nombre.num, nombre.name)
  });
})

/* --- Buscar por TIPO --- */
const filtroTipo = document.getElementById('filtroTipo');
filtroTipo.addEventListener('change', () => {
  if (filtroTipo.value === 'all') {
    //console.log(cardInfo)
    cardInfo.innerHTML = " "
  infoPokemon.forEach((nombre) => {

    cardInfo.innerHTML += cardTemplate(nombre.img, nombre.num, nombre.name, nombre.type)
  });
  } else {
    const catchFilter = filtroPorTipo(infoPokemon, filtroTipo.value);
    //console.log(catchFilter);
    cardInfo.innerHTML = "";
  catchFilter.forEach((nombre) => {

    cardInfo.innerHTML += cardTemplate(nombre.img, nombre.num, nombre.name, nombre.type)
  });
  }
});

//Ordenar de A a la Z
const ordenAZ = document.getElementById("A-Z");
//const ordenZa = document.getElementById("Z-A");
ordenAZ.addEventListener("click", () => {
  const orden1 = ordenAZ;
  let ordenada = ordenAZPokemon(infoPokemon, orden1)
  //console.log(ordenada);
  cardInfo.innerHTML = " "
  ordenada.forEach((nombre) => {
    cardInfo.innerHTML += cardTemplate(nombre.img, nombre.num, nombre.name)
  });
})

//Ordenar de Z a la A
const ordenZA = document.getElementById("Z-A");
ordenZA.addEventListener("click", () => {
  const orden2 = ordenZA;
  let desordenada = ordenZAPokemon(infoPokemon, orden2)
  //console.log(ordenada);
  cardInfo.innerHTML = " "
  desordenada.forEach((nombre) => {
    cardInfo.innerHTML += cardTemplate(nombre.img, nombre.num, nombre.name)
  });
})