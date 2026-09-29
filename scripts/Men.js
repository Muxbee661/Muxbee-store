const products = [
{
 id: "mux-7f3a91",
 image:'image/pulloverhoodie.jpg',
 name:'Pullover Hoodie',
 price: 50000
},{
  id: "mux-b82d44",
  image:'image/White Ribbed Polo.jpg',
  name:'White Ribbed Polo',
  price: 15000
},{
  id: "mux-c51e28",
  image:'image/Denim Jacket.jpg',
  name:'Denim Jacket',
  price: 64000
},{
  id: "mux-94a7d2",
  image:'image/Black Denim Jeans.jpeg',
  name:'Black Denim Jeans',
  price: 13000
},{
  id: "mux-e63b19",
  image:'image/Contrast Trim Ringer T-Shirt.jpg',
  name:'Contrast Trim Ringer T-Shirt',
  price: 24000
},{
  id: "mux-2d8f75",
  image:'image/Cargo Pants.jpg',
  name:'Cargo Pants',
  price: 20000
},{
  id: "mux-a47c36",
  image:'image/Graphic Crewneck T-Shirt.jpg',
  name:'Crewneck T-Shirt',
  price: 26000
},{
  id: "mux-f91e52",
  image:'image/Wide-leg Trousers.jpg',
  name:'Wide-leg Trousers',
  price: 17000
},{
  id: "mux-63b8a4",
  image:'image/Baseball Jersey T-Shirt.jpg',
  name:'Baseball Jersey T-Shirt',
  price: 24000
},
];

let productsHTML ='';

products.forEach((product) => {
  productsHTML +=`
      <div class="men-card">
          <img src="${product.image}">
          <h1>${product.name}</h1>
          <p>₦${product.price.toLocaleString()}</p>
          <button class="btn-add" data-product-id="${product.id}"
          >Add to cart</button>
      </div>
  `;
});

document.querySelector('.men').innerHTML = productsHTML;