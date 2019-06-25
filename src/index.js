document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector('#create-task-form')
  const newInput = document.createElement('input')
  newInput.placeholder = "duration"
  newInput.id = "duration-input"
  taskForm.insertBefore(newInput, taskForm.childNodes[2])

  const sortButton = document.createElement('button')
  sortButton.innerText = 'Sort by priority'
  list.appendChild(sortButton)

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

    var taskArr = Array.from(document.getElementsByTagName('li'))
    sortButton.addEventListener('click', function(e) {
      let sortedArr = taskArr.sort(function(a,b) {
        return (a.style.color < b.style.color) ? 1 : -1
      })
      let child = list.lastElementChild;
      while (child) {
        list.removeChild(child);
        child = list.lastElementChild;
      }
      for (var i = 0; i < sortedArr.length; i++) {
        let taskItem = sortedArr[i]
        list.appendChild(sortedArr[i], list.childNodes[i])
        list.appendChild(newEl3)
      }
    })

    deleteElement.addEventListener('click',
    function(e){
      newEl.remove()
      newEl3.remove()
    })
  })
});
