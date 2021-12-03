let todoINput // input for task name
let errorInfo // error if no text/task
let addBtn // add task to list btn
let ulList // task list
let newTodo // new task

let popup
let popupInfo //popup text
let todoToEdit // edit todo
let popupInput // popup input
let PopupAddBtn // add popup button
let popupCloseBtn // cancel btn

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}
const prepareDOMElements = () => {
	//dom elements
	todoINput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')

	popup = document.querySelector('.popup')
	popupInfo = document.querySelector('.popup-info')
	popupInput = document.querySelector('.popup-input')
	PopupAddBtn = document.querySelector('.accept')
	popupCloseBtn = document.querySelector('.cancel')
}

const prepareDOMEvents = () => {
	//event listeners
	addBtn.addEventListener('click', addNewTodo)
	ulList.addEventListener('click', checkCLick)
	popupCloseBtn.addEventListener('click', closePopup)
}

//1. make  nee LI
//2. add to UL list
//function on click
//value from input and take it to new LI
// no task added if task name is empty

//add task to list
const addNewTodo = () => {
	if (todoINput.value !== '') {
		newTodo = document.createElement('li')
		newTodo.textContent = todoINput.value
		createTOolsArea()

		ulList.append(newTodo)
		todoINput.value = ''
		errorInfo.textContent = ''
	} else {
		errorInfo.textContent = 'wpisz treść zadania'
	}
}

//task area with tools

const createTOolsArea = () => {
	const toolsPanel = document.createElement('div')
	toolsPanel.classList.add('tools')
	newTodo.append(toolsPanel)

	const completeBtn = document.createElement('button')
	completeBtn.classList.add('complete')
	completeBtn.innerHTML = '<i class="fas fa-check"></i>'

	const editBtn = document.createElement('button')
	editBtn.classList.add('edit')
	editBtn.textContent = 'EDIT'

	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('delete')
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

	toolsPanel.append(completeBtn, editBtn, deleteBtn)
}

const checkCLick = e => {
	if (e.target.matches('.complete')) {
		e.target.classList.toggle('completed')
		e.target.closest('li').classList.toggle('completed')
	} else if (e.target.matches('.edit')) {
		editTodo()
	} else if (e.target.matches('.delete')) {
		console.log('delete')
	}
}

const editTodo = () => {
	popup.style.display = 'flex'
}
const closePopup = () => {
	popup.style.display = 'none'
}

document.addEventListener('DOMContentLoaded', main)
