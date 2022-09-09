let loadUsers = () => {
  fetch('https://randomuser.me/api/?results=10')
  .then(res => res.json())
  .then(data => displayUsers(data.results))
}

let displayUsers = users => {
  let usersContainer = document.getElementById('user-container');
  for(let user of users){
    console.log(user)
    let userDiv = document.createElement('div');
    userDiv.classList.add('user');
    userDiv.innerHTML = `
     <h3>User Name: ${user.name.first} ${user.name.last}<h3>
     <p>Email: ${user.email}</p>
     <p>User Info: ${user.phone}</p>
      <p>Location: ${user.location.city}</p>
    `;
    usersContainer.appendChild(userDiv)
  }
}

loadUsers();