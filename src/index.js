document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector('#create-task-form')
  const newInput = document.createElement('input')
  newInput.placeholder = "duration"
  newInput.id = "duration-input"
  taskForm.insertBefore(newInput, taskForm.childNodes[2])

  taskForm.addEventListener('submit',
  function(e){
    e.preventDefault()
    const newEl = document.createElement('li')
    const newTask = document.querySelector('#new-task-description')
    newEl.innerText = newTask.value

    const duration = document.querySelector('#duration-input')
    const newEl2 = document.createElement('p')
    newEl2.innerText = duration.value
    newEl.appendChild(newEl2)

    const newEl3 = document.createElement('div')

    const selection = document.querySelector('#task-dropdown')
    const selectionResult = selection.options[selection.selectedIndex].value;
    function changeColors() {
      if (selectionResult === "1") {
        newEl.style.color = "red"
      }
      if (selectionResult === "2") {
        newEl.style.color = "yellow"
      }
      if (selectionResult === "3") {
        newEl.style.color = "green"
      }
    }

    changeColors();

    const list = document.querySelector('#tasks')
    list.appendChild(newEl)
    list.appendChild(newEl3)

    const deleteElement = document.createElement('button')
    deleteElement.innerHTML = "X"
    newEl3.appendChild(deleteElement)

    const editElement = document.createElement('button')
    editElement.innerText = "Edit"
    editElement.addEventListener('click', function(e){
      newEl.contentEditable = true;
      newEl2.contentEditable = true;
    })
    newEl3.appendChild(editElement)

    deleteElement.addEventListener('click',
    function(e){
      newEl.remove()
      newEl3.remove()
    })
  })
});
