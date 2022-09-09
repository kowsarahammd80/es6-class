let loadUserFetch = () => {
  let url = `https://randomuser.me/api/?gender=female`
  fetch(url)
  .then(res => res.json())
  .then(data => displayUser(data.results[0]))
  .catch(error => console.log(error))
}

let loadUserAsync = async() => {
  let url = `https://randomuser.me/api/?gender=female`;
  try{
    let res = await fetch(url);
    let data = await res.json();
    displayUser(data.results[0]);
  }
  catch(error){
    console.log(error);
  }

   
}

let displayUser = user => {
  console.log(user);
}

