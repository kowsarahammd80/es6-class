let users = [
  {id: 1, name: 'abul', job: 'doctor'},
  {id: 1, name: 'babul', job: 'techer'},
]

console.log(users[0].name);

let data = {
  count: 5000,
  data: [
    {id: 1, name: 'abul', job: 'doctor'},
    {id: 1, name: 'abul', job: 'techer'},
  ]
}

console.log(data.count);
console.log(data.data[0].job)



let user = {
  id: 5001,
  name: 'Thomas alba edison',
  address: {
    street: {
      first: '35/A kochukhet lane',
      second: 'third floor',
      third: 'right side',
    },
    postOffice: 'cantonment',
    city: 'Dhaka'
  }

}


let userFloor = user.address.street.second;

console.log(userFloor);