let user = {id: 1, name: 'gorib Aamir', job: 'actor'};

// JavaScript Object Notaton (JSON)

let stringFied = JSON.stringify(user);

// console.log(stringFied);


let shop = {
  owner: 'Alia',
  address: {
    street: 'kochukhet voot er goli',
    city: 'ranbir',
    country: 'BD'
  },
  products: ['laptop', 'mic', 'monitor', 'keyboard'],
  revenue: 45000,
  isOpen: true,
  idNew: false,
}

console.log(shop);

let shopJson = JSON.stringify(shop); 
console.log(shopJson);

let shopObj = JSON.parse(shopJson);

console.log(shopObj);
