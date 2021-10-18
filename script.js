// fetch then
fetch("https://pokeapi.co/api/v2/pokemon")
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
	});

// async await
async function fetchData() {
	let res = await fetch("https://pokeapi.co/api/v2/pokemon");
	let data = await res.json();
	console.log(data);
}

fetchData();
fetchData();
fetchData();
