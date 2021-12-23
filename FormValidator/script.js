const username = document.querySelector('#username')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')
const email = document.querySelector('#email')

const sendBtn = document.querySelector('.send')
const clearBtn = document.querySelector('.clear')
const popup = document.querySelector('.popup')

const clearForm = e => {
	e.preventDefault()
	;[username, password, password2, email].forEach(el => {
		el.value = ''
		clearError(el)
	})
}

const showError = (input, msg) => {
	// input arg has our INPUTs inside
	// msg arg has our placeholder inside

	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.error-text')

	formBox.classList.add('error')
	errorMsg.textContent = msg
}

const clearError = input => {
	const formBox = input.parentElement
	formBox.classList.remove('error')
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			console.log('error')
			showError(el, el.placeholder)
		} else {
			console.log('ok')
			clearError(el)
		}
	})
}

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} składa się z min. ${min} znaków`)
	}
}

const checkPassword = (pass1, pass2) => {
	if (pass1.value !== pass2.value) {
		showError(pass2, 'Hasła nie pasują')
	}
}

const validateEmail = email => {
	const regExp =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (regExp.test(email.value)) {
		clearError(email)
	} else {
		showError(email, 'E-mail jest niepoprawny')
	}
}

const checkErrors = () => {
	const allInputs = document.querySelectorAll('.form-box')
	let counterErr = 0

	allInputs.forEach(el => {
		if (el.classList.contains('error')) {
			counterErr++
		}
	})
	if (counterErr === 0) {
		popup.classList.add('show-popup')
	}
}

sendBtn.addEventListener('click', e => {
	e.preventDefault()
	checkForm([username, password, password2, email])
	checkLength(username, 6)
	checkLength(password, 8)
	checkPassword(password, password2)
	validateEmail(email)
	checkErrors()
})
clearBtn.addEventListener('click', clearForm)
