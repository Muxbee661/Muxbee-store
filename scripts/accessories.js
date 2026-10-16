export const products3 = [
{
 id: "mux-d27f81",
 image:'image/Leather Shoulder Bag.jpg',
 name:'Leather Shoulder Bag',
 price: 45000
},{
  id: "mux-58a2f6",
  image:'image/Classic Crossbody Bag.jpg',
  name:'Classic Crossbody Bag',
  price: 38000
},{
  id: "mux-b71e84",
  image:'image/Minimalist Watch.jpg',
  name:'Minimalist Watch',
  price: 35000
},{
  id: "mux-43c9d7",
  image:'image/Classic Sunglasses.jpg',
  name:'Classic Sunglasses',
  price: 22000
},{
  id: "mux-e25f18",
  image:'image/Leather Belt.jpg',
  name:'Leather Belt',
  price: 18000
},{
  id: "mux-87d3a6",
  image:'image/Gold Chain.jpg',
  name:'Gold Chain',
  price: 28000
},{
  id: "mux-f64b29",
  image:'image/Classic Cap.jpg',
  name:'Classic Cap',
  price: 15000
},{
  id: "mux-16e7a5",
  image:'image/Leather Wallet.jpg',
  name:'Leather Wallet',
  price: 20000
},{
  id: "mux-d94c32",
  image:'image/Everyday Tote Bag.jpg',
  name:'Everyday Tote Bag',
  price: 32000
},
];

let productHTML ='';

products3.forEach((product) => {
  productHTML +=`
      <div class="men-card">
          <img src="${product.image}">
          <h1>${product.name}</h1>
          <p>₦${product.price.toLocaleString()}</p>
          <button class="btn-add" data-product-id="${product.id}"
          >Add to cart</button>
      </div>
  `;
});

const container = document.querySelector('.accessories');
if (container) container.innerHTML = productHTML;