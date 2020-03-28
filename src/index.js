document.addEventListener("DOMContentLoaded", () => {
  const task = document.querySelector("#new-task-description");
  const form = document.querySelector("#create-task-form");
  const list = document.querySelector("#tasks");
  // const priority = document.querySelector("#new-task-priority");
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    const newTask = task.value 
    const newList = document.createElement('li')
    newList.innerText = newTask
    list.appendChild(newList)

   const deleteList = document.createElement('button')
    deleteList.innerText = 'delete'
    newList.appendChild(deleteList)
    deleteList.addEventListener('click', function(e) {
      newList.remove()
    })
   });
  

});
