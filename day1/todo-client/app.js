
 const titleTextBox = document.getElementById('titleTextBox')
 const priorityTextBox = document.getElementById('priorityTextBox')
 const dateTextBox = document.getElementById('dateTextBox')
 const addButton = document.getElementById('addButton')

 addButton.addEventListener('click', () => {
     let title = titleTextBox.value
     let priority = priorityTextBox.value
     let dateCreated = dateTextBox.value

     fetch('http://localhost:3000/todos', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify({
             title: title,
             priority: priority,
             dateCreated: dateCreated
         })
     }).then(response => response.json())
        .then(result => {
            if(result.success) {
                showTodos()
            }
        })

 })

 const todoList = document.getElementById('todoList')


function deleteTask(taskId) {
    
    fetch(`http://localhost:3000/todos/${taskId}`, {
        method: 'DELETE'
    }).then(response => response.json())
    .then(result => {
        showTodos()
    }) 
}

 function showTodos() {
     todoList.innerHTML = ''

     fetch('http://localhost:3000/todos')
        .then(response => response.json())
        .then(todos => {
            let todoItems = todos.map(todoItem => {
                return `
                <li>
                <label>To do: ${todoItem.title}, Priority: ${todoItem.priority}, Date Created: ${todoItem.dateCreated}</label>
                <button onclick='deleteTask("${todoItem.taskId}")'>Delete</button>
                </li>
               
                `
            })

            todoList.insertAdjacentHTML('beforeend', todoItems.join(''))
        })
 }

 showTodos()