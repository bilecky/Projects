const addBtn = document.querySelector('.add')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const deleteBtns = document.getElementsByClassName('delete-note')
const deleteAllBtn = document.querySelector('.delete-all')

const noteArea = document.querySelector('.note-area')
const notePanel = document.querySelector('.note-panel')
const category = document.querySelector('#category')
const textArea = document.querySelector('#text')
const error = document.querySelector('.error')

let selectedValue

let cardID = 0

// WE'RE OPENING 'ADD TASK' PANEL
//-----------------------

const openPanel = () => {
	notePanel.style.display = 'flex'
}

// WE'RE CLOSING 'ADD TASK' PANEL
//-----------------------

const closePanel = () => {
	notePanel.style.display = 'none'
	error.style.visibility = 'hidden'
	textArea.value = ''
	category.selectedIndex = 0
}

// WE'RE CHECKING IF ALL INPUTS HAVE OWN VALUES (ARENT EMPTY)
//-----------------------

const addNoteValidation = () => {
	// WE'RE CHECKING OPTION (index) VALUE IN OUR SELECT

	const checkSelectValue = category.options[category.selectedIndex].value !== '0'
	if (textArea.value !== '' && checkSelectValue) {
		addNewNote()

		error.style.visibility = 'hidden'
	} else {
		error.style.visibility = 'visible'
	}
}

// ADDING NEW NOTE
//-----------------------

const addNewNote = () => {
	const newNote = document.createElement('div')
	newNote.classList.add('note')
	newNote.setAttribute('id', cardID)

	newNote.innerHTML = `<div class="note-header">
  <h3 class="note-title">${selectedValue}</h3>
  <button class="delete-note" onClick="deleteNote(${cardID})"><i class="fas fa-times icon"></i>
  </button>
  </div>
  <div class="note-body">${textArea.value}</div>`

	noteArea.appendChild(newNote)
	cardID++

	textArea.value = ''
	category.selectedIndex = 0
	notePanel.style.display = 'none'
	checkColor(newNote)
}

//WE'RE CHECKING TYPE OF NOTE WHICH WE'RE ADDING
//-----------------------
const selectValue = () => {
	selectedValue = category.options[category.selectedIndex].text
}

//NOTE TYPE AND COLOR CHECK
//-----------------------

const checkColor = note => {
	switch (selectedValue) {
		case 'Zakupy':
			note.style.backgroundColor = 'royalblue'
			break
		case 'Szkoła':
			note.style.backgroundColor = 'orange'
			break
		case 'Dom':
			note.style.backgroundColor = 'purple'
			break
	}
}

//DELETE SINGLE NOTE
//-----------------------

const deleteNote = id => {
	const noteToDelete = document.getElementById(id)
	noteArea.removeChild(noteToDelete)
}

//DELETE ALL NOTES
//-----------------------
const deleteAllNotes = () => {
	noteArea.textContent = ''
}

addBtn.addEventListener('click', openPanel)
cancelBtn.addEventListener('click', closePanel)
saveBtn.addEventListener('click', addNoteValidation)
deleteAllBtn.addEventListener('click', deleteAllNotes)
