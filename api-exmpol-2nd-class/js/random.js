let loadUsers = () => {
  fetch('https://randomuser.me/api/?results=10')
  .then(res => res.json())
  .then(data => displayUsers(data.results))
}

let displayUsers = users => {
   
  let usersCOntainer = document.getElementById('users-container');
  for(let user of users){
    console.log(user)
    let userDiv = document.createElement('div');
    userDiv.classList.add('class')
    userDiv.innerHTML = `
     <h3>User Name: ${user.name.first} ${user.name.last} ${user.name.title}</h3>
     <p>Email: ${user.email}</p>
     <p>Location: ${user.location.city} ${user.location.country}</p>
     <p>User info: </p>
    `;
    usersCOntainer.appendChild(userDiv)
  }

}

loadUsers();