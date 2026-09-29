const products = [
{
 image:'image/pulloverhoodie.jpg',
 name:'Pullover Hoodie',
 price: 50000
},{
  image:'image/White Ribbed Polo.jpg',
  name:'White Ribbed Polo',
  price: 15000
},{
  image:'image/Denim Jacket.jpg',
  name:'Denim Jacket',
  price: 64000
},{
  image:'image/Black Denim Jeans.jpeg',
  name:'Black Denim Jeans',
  price: 13000
},{
  image:'image/Contrast Trim Ringer T-Shirt.jpg',
  name:'Contrast Trim Ringer T-Shirt',
  price: 24000
},{
  image:'image/Cargo Pants.jpg',
  name:'Cargo Pants',
  price: 20000
},{
  image:'image/Graphic Crewneck T-Shirt.jpg',
  name:'Crewneck T-Shirt',
  price: 26000
},{
  image:'image/Wide-leg Trousers.jpg',
  name:'Wide-leg Trousers',
  price: 17000
},{
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
          <button class="btn-add">Add to cart</button>
      </div>
  `;
});

document.querySelector('.men').innerHTML = productsHTML;

