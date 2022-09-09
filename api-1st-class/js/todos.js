function loadTodos(){
   fetch('https://jsonplaceholder.typicode.com/todos')
   .then(res => res.json())
   .then(data => displayTodos(data))
}

function displayTodos(todos){
  // get the container
  let todoContainer = document.getElementById('todo-container')
  for(let todo of todos){
    // creat the child element
    let todoDiv = document.createElement('div')
    // set innerText or innerHtml
    todoDiv.innerHTML=`
     <h3>title: ${todo.title}</h3>
     <p>User: ${todo.userId}</p>
     <p>Is Completed: ${todo.completed === true ? 'complete': 'not complete'}</p>
    `
    // appendChild
    todoContainer.appendChild(todoDiv)
  }  
}

loadTodos();