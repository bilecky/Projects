let todoINput // input for task name
let errorInfo // error if no text/task
let addBtn // add task to list btn
let ulList // task list
let newTodo // new task

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
}
const prepareDOMEvents = () => {
	//event listeners
	addBtn.addEventListener('click', addNewTodo)
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

document.addEventListener('DOMContentLoaded', main)
