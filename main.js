//Milestone 1:
//Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
const icone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

// Coloriamo le icone per tipo
function checkValue(icona) {
    if (icona.type === 'animal') {
        return 'blue'
    } else if (icona.type === 'vegetable') {
        return 'yellow'
    } else if (icona.type === 'user'){
        return 'purple'
    }
};

let iconaEl = document.getElementById('container');
// ciclo le icone e ottengo 'family', 'prefix', 'name'
//stampo gli elementi a schermo
function stampaEl(icone) {

    icone.forEach((icona) => {
    iconaEl.insertAdjacentHTML('beforeend', `
    <div class="card">
        <i class="${icona.family} ${icona.prefix}${icona.name}" style="color: ${checkValue(icona)}"></i>
        <div>${icona.name}</div>
    </div> `)
});
// Milestone 2
let iconeAnimali = icone.filter((icona) => {
    return icona.type === 'animal'
});
let iconeVegetable = icone.filter((icona) => {
    return icona.type === 'vegetable'
});
let iconeUser = icone.filter((icona) => {
    return icona.type === 'user'
});
//Milestone 3 
//Creiamo una select con i tipi di icone e usiamola per filtrare le icone
const select = document.querySelector('select').addEventListener('click', function () {
    if (select.value === 'animal') {
        stampaEl(iconeAnimali)
    } else if (select.value === 'vegetable') {
        stampaEl(iconeVegetable)
    } else if (select.value === 'user') {
        stampaEl(iconeUser)
    } else {
        stampaEl(icone)
    }
});

