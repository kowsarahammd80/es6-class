// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => console.log(response)) // .json is not similar but close to JSON.parse
//   .then(json => console.log(json))


// let url ='https://jsonplaceholder.typicode.com/todos/1'

// fetch(url)
// .then(res => res.json())
// .then(json => console.log(json))


function loadData(){
  let url ='https://jsonplaceholder.typicode.com/todos/1'
  fetch(url)
.then(res => res.json())
.then(json => console.log(json))
}

