let users = [{id: 1, name: 'abul', job: 'doctor'}]

// console.log(users[0].name);

let data = {
  count: 5000,
  data: [
    {id: 1, name: 'babul', job: 'techer'},
    {id: 1, name: 'abul', job: 'leader'},
  ]
}
// console.log(data.data[0].job);

let user = {
  id: 5001,
  name: 'thomas alba',
  address: {
    streets: {
      first: '35/a kochukhet',
      seocend: 'third floor',
      third: 'right side',
    },
    postOffice: 'cantonment',
    city: 'dhaka'
  }
}

let userFlore = user.address.streets.seocend;
console.log(userFlore);