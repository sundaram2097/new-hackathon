let ele=document.getElementById("cont")
let nav=document.createElement("nav");
nav.className= "navbar navbar-light bg-dark";
ele.appendChild(nav);
 
let div=document.createElement("div");
div.className="container-fluid";
nav.appendChild(div);

let a=document.createElement("a");
a.innerText="Pokiman Api";
a.className="navbar-brand text-warning";
div.appendChild(a);

let form=document.createElement("form");
form.className='d-flex';
div.appendChild(form);

let input=document.createElement("input");
input.className="form-control me-2";
input.setAttribute("type","search");
input.setAttribute("placeholder","Search");
input.setAttribute("aria-label","Search");
form.appendChild(input);

let button=document.createElement("button");
button.innerText="Search";
button.className="btn btn-outline-success btn-info";
button.setAttribute("type","submit");
form.appendChild(button);



const poke_container = document.getElementById('poke_container');
const image = document.getElementById("pokiImage");
const pokemons_number = 50;

const fetchPokemons = async () => {
	for (let i = 1; i <= pokemons_number; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async id => {
	try{
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokemon = await res.json();
	createPokemonCard(pokemon);
    console.log(pokemon);
} catch (error) {
    console.log(error);
  }
};

function createPokemonCard(pokemon) {
	const pokemonEl = document.createElement('div');
	pokemonEl.classList.add('pokemon');

    //Display around 50 pokemons.
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	console.log(name);


	 // pokemon’s ability needs to be listed.
	const poke_abilities = pokemon.abilities.map(ability =>ability.ability.name);
	console.log(poke_abilities[0]);


     //Display the pokemon’s moves.
	 const moves = pokemon.moves.map(move =>move.move.name);
	 console.log(moves[0]);

	  // display the weight  pokemon.
	  const weight= pokemon.weight;
	 console.log(weight);

		const pokeInnerHTML = `
		<div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            pokemon.id
        }.png" alt="${name}" />
        </div>
        <div>
            <h2 class="name"> ${name}</h2>
        </div>
		<div><b>Poke Ability:</b> ${poke_abilities[0]}</div>
		<div><b>Poke Moves:</b> ${moves[0]}</div>
		<div><b>Poke Weight:</b> ${weight}</div> `;

	pokemonEl.innerHTML = pokeInnerHTML;

	poke_container.appendChild(pokemonEl);
}

fetchPokemons(); 