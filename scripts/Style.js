function menu() {
  document.getElementById('nav').classList.toggle("active");
}

window.menu = menu;

import { cart } from '../data/cart.js';


document.querySelectorAll('.btn-add')
 .forEach((button) => {
   button.addEventListener('click', () => {
    const productId = button.dataset.productId;

    let matchingItem;
     
    cart.forEach((item)=>{
      if (productId === item.productId) {
        matchingItem = item;
      }
    })

     if (matchingItem) {
       matchingItem.quantity += 1;
     }else {
       cart.push({
       productId: productId,
       quantity:1
     })
     }   

     let cartQuantity = 0;

      cart.forEach((item) => {
        cartQuantity += item.quantity;
      });
      
      const badge = document.querySelector('.cart-badge');
      
      badge.innerHTML = cartQuantity;
      
      if (cartQuantity > 0) {
        badge.classList.add('show');
      } else {
        badge.classList.remove('show');
      }
     console.log(cartQuantity)
   });
   console.log(cart)
   
 });


// add to cart count 

/*let cartCount = 0;
const menuBadge = document.getElementById('menu-badge');

document.querySelectorAll('.btn-add').forEach(btn => {
  btn.addEventListener('click', () => {
    cartCount++;
    menuBadge.textContent = cartCount;
    menuBadge.classList.add('show');
  });
});*/



