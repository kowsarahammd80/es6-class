function loadUsers2(){
  fetch('https://jsonplaceholder.typicode.com/users')

  .then(res => res.json())
  .then(data => displayUsers2(data))
}

// function displayUsers2(button){
//   console.log(button);
// }

// function displayUsers2(users){
//   for(let user of users){
//     console.log(user.username);
//   }
// }

function displayUsers2(data){
  let ul = document.getElementById('user-list')
  for(let user of data){
    console.log(user.name);
    let li = document.createElement('li');
    li.innerText = user.name;
    // li.innerText = 'user';
    ul.appendChild(li);
  }
}


function deletePost(){
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
}


function patchApost(){
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

function creatApost(){
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}