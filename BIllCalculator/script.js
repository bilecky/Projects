const priceInput = document.getElementById('price')
const peopleInput = document.querySelector('#people')
const tipsInput = document.querySelector('#tips')
const errorParagraph = document.querySelector('.error')
const countBtn = document.querySelector('.count')
const resultParagraph = document.querySelector('.cost-info')
const resultSpan = document.querySelector('.cost')

const inputCheck = () => {
	if (priceInput.value == '' || peopleInput.value == '' || tipsInput.value == 0) {
		errorParagraph.textContent = 'DANE NIE ZOSTAŁY UZUPEŁNIONE'
		resultParagraph.style.display = 'none'
	} else {
		calc()
	}
}

const calc = () => {
	const record =
		(parseFloat(priceInput.value) + parseFloat(priceInput.value) * parseFloat(tipsInput.value)) /
		parseInt(peopleInput.value)

	resultSpan.textContent = record.toFixed(2)
	errorParagraph.textContent = ''
	resultParagraph.style.display = 'block'
}

countBtn.addEventListener('click', inputCheck)
