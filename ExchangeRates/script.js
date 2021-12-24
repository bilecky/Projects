// fetch(https://api.exchangerate.host/latest?base=${currencyOne.value}&symbols=${currencyTwo.value})

const currencyOne = document.querySelector('#currency-one')
const ammountOne = document.querySelector('.ammount-one')
const currencyTwo = document.querySelector('#currency-two')
const ammountTwo = document.querySelector('.ammount-two')

const swapBtn = document.querySelector('.swap')
const rateInfo = document.querySelector('.rate-info')

const calculate = () => {
	fetch(`https://api.exchangerate.host/latest?base=${currencyOne.value}&symbols=${currencyTwo.value}`)
		.then(res => res.json())
		.then(data => {
			const currency1 = currencyOne.value
			const currency2 = currencyTwo.value

			const rate = data.rates[currency2]
			rateInfo.textContent = `1 ${currency1} = ${rate.toFixed(3)}${currency2}`

			ammountTwo.value = (ammountOne.value * rate).toFixed(2)
		})
}

const swapInputs = () => {
	const valueContener = currencyOne.value

	currencyOne.value = currencyTwo.value
	currencyTwo.value = valueContener
	calculate()
}

currencyOne.addEventListener('change', calculate)
currencyTwo.addEventListener('change', calculate)

ammountOne.addEventListener('input', calculate)
swapBtn.addEventListener('click', swapInputs)
calculate()
