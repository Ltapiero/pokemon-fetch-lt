const URL = "https://pokeapi.co/api/v2/pokemon/";
const div = document.getElementById("stats");
const boton = document.querySelector("#boton");
const carga = document.querySelector("#contenedor_carga");

buscar_pokemones();

boton.addEventListener("click", botonOprimido);

window.onload = () => {
	var contenedor = document.getElementById("contenedor_carga");
	carga.classList.add("visible");
};

function botonOprimido() {
	carga.classList.remove("visible");
	setTimeout(() => {
		carga.classList.add("visible");
	}, 900);
	setTimeout(() => {
		limpiarCampos();
		buscar_pokemones();
	}, 200);
}

function limpiarCampos() {
	while (div.firstChild) {
		div.removeChild(div.firstChild);
	}
}

function getRandomArbitrary(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function barra_progreso(estadistica) {
	const barra_stats_hp = document.createElement("div");
	barra_stats_hp.classList.add("barra");

	const barra_progress_stats_hp = document.createElement("div");
	barra_progress_stats_hp.classList.add("progreso");
	const numero_barra = estadistica <= 100 ? estadistica : 100;
	if (numero_barra > 70) {
		barra_progress_stats_hp.classList.add("progreso_mas_70");
	}
	barra_progress_stats_hp.style = "--w:" + numero_barra + "%";

	barra_stats_hp.append(barra_progress_stats_hp);

	stats.append(barra_stats_hp);
}

function buscar_pokemones() {
	fetch(`${URL}${getRandomArbitrary(0, 151)}`)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			const img = document.querySelector("img");
			const titulo = document.querySelector("#titulo");
			const hp = document.querySelector("#hp");
			const stats = document.querySelector("#stats");

			titulo.innerText = data.name[0].toUpperCase() + data.name.substring(1);
			img.src = data.sprites.other.dream_world.front_default;

			// stats hp

			const title_stats_hp = document.createElement("h2");
			title_stats_hp.innerText = "HP";

			stats.appendChild(title_stats_hp);

			const stats_hp = document.createElement("p");
			stats_hp.classList.add("bold");
			stats_hp.innerText = data.stats[0].base_stat;

			stats.appendChild(stats_hp);

			barra_progreso(data.stats[0].base_stat);

			// stats attack

			const title_stats_attack = document.createElement("h2");
			title_stats_attack.innerText = "Attack";

			stats.appendChild(title_stats_attack);

			const stats_attack = document.createElement("p");
			stats_attack.classList.add("bold");
			stats_attack.innerText = data.stats[1].base_stat;

			stats.appendChild(stats_attack);

			barra_progreso(data.stats[1].base_stat);

			// stats defense

			const title_stats_defense = document.createElement("h2");
			title_stats_defense.innerText = "Defense";

			stats.appendChild(title_stats_defense);

			const stats_defense = document.createElement("p");
			stats_defense.classList.add("bold");
			stats_defense.innerText = data.stats[2].base_stat;

			stats.appendChild(stats_defense);

			barra_progreso(data.stats[2].base_stat);

			// stats special-attack

			const title_stats_special_attack = document.createElement("h2");
			title_stats_special_attack.innerText = "Sp Attack";

			stats.appendChild(title_stats_special_attack);

			const stats_special_attack = document.createElement("p");
			stats_special_attack.classList.add("bold");
			stats_special_attack.innerText = data.stats[3].base_stat;

			stats.appendChild(stats_special_attack);

			barra_progreso(data.stats[3].base_stat);

			// stats special-defense

			const title_stats_special_defense = document.createElement("h2");
			title_stats_special_defense.innerText = "Sp Defense";

			stats.appendChild(title_stats_special_defense);

			const stats_special_defense = document.createElement("p");
			stats_special_defense.classList.add("bold");
			stats_special_defense.innerText = data.stats[4].base_stat;

			stats.appendChild(stats_special_defense);

			barra_progreso(data.stats[4].base_stat);

			// stats speed

			const title_stats_speed = document.createElement("h2");
			title_stats_speed.innerText = "Speed";

			stats.appendChild(title_stats_speed);

			const stats_speed = document.createElement("p");
			stats_speed.classList.add("bold");
			stats_speed.innerText = data.stats[5].base_stat;

			stats.appendChild(stats_speed);

			barra_progreso(data.stats[5].base_stat);
		});
}
