const img = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const pError = document.querySelector('.error')
console.log(img)

const answers = ['TAK', 'NIE', 'Kto to wie', 'Nie powiem Ci', 'nie znam się', 'chyba śnisz']

const shakeAnimation = () => {
	img.classList.add('shake-animation')
	setTimeout(inputCheck, 1500)
}

const inputCheck = () => {
	if (input.value == '') {
		pError.textContent = 'Zadaj pytanie'
		answer.innerHTML = ''
	} else if (input.value.slice(-1) !== '?') {
		pError.textContent = 'Pytanie musi mieć "?" na końcu'
		answer.innerHTML = ''
	} else {
		const random = answers[Math.floor(Math.random() * answers.length)]
		answer.innerHTML = `<span>Odpowiedź:</span> ${random.toUpperCase()}`
		pError.textContent = ''
	}
	img.classList.remove('shake-animation')
}

img.addEventListener('click', shakeAnimation)
