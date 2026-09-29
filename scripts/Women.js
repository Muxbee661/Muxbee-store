const products2 = [
{
 image:'image/Dark Paradise Crop Top.jpg',
 name:'Dark Paradise Crop Top',
 price: 25000
},{
  image:'image/Cream Tiered Maxi Dress.jpg',
  name:'Cream Tiered Maxi Dress',
  price: 65000
},{
  image:'image/Satin Slip Dress.jpg',
  name:'Satin Slip Dress',
  price: 64000
},{
  image:'image/trench coats.jpg',
  name:'Trench Coats',
  price: 30000
},{
  image:'image/Oversized Cropped Blazer.jpg',
  name:'Oversized Cropped Blazer',
  price: 24000
},{
  image:'image/Black Square-Neck Tank Top.jpg',
  name:'Black Square-Neck Tank Top',
  price: 20000
},{
  image:'image/Brooklyn 1898 Crop Tee.jpg',
  name:'Brooklyn 1898 Crop Tee',
  price: 26000
},{
  image:'image/Wide-Leg Denim Jeans.jpg',
  name:'Wide-Leg Denim Jeans',
  price: 17000
},{
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
          <button class="btn-add">Add to cart</button>
      </div>
  `;
});

document.querySelector('.women').innerHTML = productHTML;
