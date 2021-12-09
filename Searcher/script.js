const input = document.querySelector('.search')
const drink = document.querySelectorAll('li')
console.log(drink)

const searcher = e => {
	const searchString = e.target.value.toLowerCase()

	drink.forEach(filteredItem => {

		if (filteredItem.innerHTML.toLowerCase().indexOf(searchString) !== -1) {
			filteredItem.style.display = 'block'
		} else {
			filteredItem.style.display = 'none'
		}
	})
}

input.addEventListener('keyup', searcher)
