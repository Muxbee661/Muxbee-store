export const products2 = [
{
 id: "mux-5c94e7",
 image:'image/Dark Paradise Crop Top.jpg',
 name:'Dark Paradise Crop Top',
 price: 25000
},{
  id: "mux-81a6d3",
  image:'image/Cream Tiered Maxi Dress.jpg',
  name:'Cream Tiered Maxi Dress',
  price: 65000
},{
  id: "mux-e48c25",
  image:'image/Satin Slip Dress.jpg',
  name:'Satin Slip Dress',
  price: 64000
},{
  id: "mux-39f7b2",
  image:'image/trench coats.jpg',
  name:'Trench Coats',
  price: 30000
},{
  id: "mux-a62e91",
  image:'image/Oversized Cropped Blazer.jpg',
  name:'Oversized Cropped Blazer',
  price: 24000
},{
  id: "mux-74d5c8",
  image:'image/Black Square-Neck Tank Top.jpg',
  name:'Black Square-Neck Tank Top',
  price: 20000
},{
  id: "mux-f28a63",
  image:'image/Brooklyn 1898 Crop Tee.jpg',
  name:'Brooklyn 1898 Crop Tee',
  price: 26000
},{
  id: "mux-95b1e7",
  image:'image/Wide-Leg Denim Jeans.jpg',
  name:'Wide-Leg Denim Jeans',
  price: 17000
},{
  id: "mux-c83d49",
  image:'image/Fitted Ribbed Dress.jpg',
  name:'Fitted Ribbed Dress',
  price: 24000
},
];

let productHTML ='';

products2.forEach((product) => {
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

const container = document.querySelector('.women');
if (container) container.innerHTML = productHTML;