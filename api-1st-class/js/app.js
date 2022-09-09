function loadData2(){
  fetch('https://jsonplaceholder.typicode.com/todos/1')

  .then(res => res.json())
  .then(p => console.log(p))
}

function loadUsers(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => displayUsers(data))
}  

function displayUsers(data){
   console.log(data)
}